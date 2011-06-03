using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace guruji.ViewServices
{
    public class PortalViewEngine : IViewEngine
    {
        private readonly IControllerFileService controllerFileService;
        private readonly IViewLocationCache viewLocationCache;

        private readonly string[] viewFileLocations = new[]
                                                          {
                                                              "~/Views/<controller_name>/<view_name>.ascx",
                                                              "~/Views/<view_name>.ascx",
                                                              "~/Views/<controller_name>/<view_name>.aspx",
                                                              "~/Views/<view_name>.aspx",
                                                          };

        private readonly string[] masterFileLocations = new[]
                                                            {
                                                                "~/Views/<controller_name>/<view_name>.master",
                                                                "~/Views/Masters/<view_name>.master"
                                                            };

        public PortalViewEngine(IControllerFileService controllerFileService, IViewLocationCache viewLocationCache)
        {
            this.controllerFileService = controllerFileService;
            this.viewLocationCache = viewLocationCache;
        }

        public ViewEngineResult FindPartialView(ControllerContext controllerContext, string partialViewName, bool useCache)
        {
            return FindView(controllerContext, partialViewName, null, useCache);
        }

        public ViewEngineResult FindView(ControllerContext controllerContext, string viewName, string masterName, bool useCache)
        {
            var viewPath = GetCachedViewPath(controllerContext, viewName);
            var masterPath = GetCachedMasterPath(controllerContext, masterName);
            return CreateViewEngineResult(viewPath, masterPath);
        }

        public void ReleaseView(ControllerContext controllerContext, IView view)
        {
            var disposable = view as IDisposable;
            if (disposable != null)
            {
                disposable.Dispose();
            }
        }

        private string GetCachedViewPath(ControllerContext controllerContext, string viewName)
        {
            return IsFullServerPath(viewName)
                       ? viewName
                       : GetFilePath(viewName, controllerContext, viewFileLocations);
        }

        private string GetCachedMasterPath(ControllerContext controllerContext, string masterName)
        {
            return string.IsNullOrEmpty(masterName)
                       ? string.Empty
                       : GetFilePath(masterName, controllerContext, masterFileLocations);
        }

        private string GetFilePath(string fileName, ControllerContext controllerContext, IEnumerable<string> locations)
        {
            var key = GetKey(controllerContext, fileName);
            var location = viewLocationCache.GetViewLocation(controllerContext.HttpContext, key);
            return location ?? GetAndCacheFilePath(fileName, controllerContext, locations);
        }

        private ViewEngineResult CreateViewEngineResult(string viewPath, string masterPath)
        {
            return string.IsNullOrEmpty(masterPath)
                       ? new ViewEngineResult(new WebFormView(viewPath), this)
                       : new ViewEngineResult(new WebFormView(viewPath, masterPath), this);
        }


        private static string GetKey(ControllerContext context, string viewName)
        {

            return context.RouteData.GetRequiredString("controller") + viewName;
        }

        private string GetAndCacheFilePath(string fileName, ControllerContext controllerContext, IEnumerable<string> fileLocations)
        {
            try
            {
                var directoryName = GetViewDirectoryName(controllerContext.Controller);
                var path = GetVirtualPath(directoryName, fileName, fileLocations, controllerContext);
                viewLocationCache.InsertViewLocation(controllerContext.HttpContext, GetKey(controllerContext, fileName), path);
                return path;
            }
            catch (Exception ex)
            {
                throw new ArgumentOutOfRangeException(string.Format("Unable to find file for view [{0}]", fileName), ex);
            }
        }

        private string GetVirtualPath(string directoryName, string fileName, IEnumerable<string> fileLocations, ControllerContext controllerContext)
        {
            Func<string, string> pathReplacer = location => location.Replace("<controller_name>", directoryName)
                                                                .Replace("<view_name>", fileName);
            Func<string, bool> fileFinder = serverPath => controllerFileService.ServerFileExists(serverPath, controllerContext);

            return fileLocations.Select(pathReplacer).First(fileFinder);
        }

        private static string GetViewDirectoryName(ControllerBase controller)
        {
            return controller.GetType().Name.Replace("Controller", string.Empty);
        }

        private static bool IsFullServerPath(string viewName)
        {
            return viewName.StartsWith("~/");
        }
    }
}