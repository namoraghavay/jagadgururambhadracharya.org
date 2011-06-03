using System;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;
using guruji.Controllers;
using guruji.Domain;
using guruji.ViewServices;

namespace guruji
{
    public class MvcApplication : HttpApplication
    {
        public static void RegisterRoutes()
        {
            DescribeRoutes.Register();
        }

        protected void Application_Start()
        {
            RegisterRoutes();
            InitializeViewEngine();
        }

        private static void InitializeViewEngine()
        {
            ViewEngines.Engines.Clear();
            ViewEngines.Engines.Add(new PortalViewEngine(new ControllerFileService(new FileService()), new DefaultViewLocationCache()));
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            if (!HttpContext.Current.IsCustomErrorEnabled) return;
            var customErrorsSection = WebConfigurationManager.GetWebApplicationSection("system.web/customErrors") as CustomErrorsSection;
            CustomErrorHandler.HandleError(GetHttpServer(Server), GetHttpResponse(Response), customErrorsSection);
        }

        public virtual HttpServerUtilityBase GetHttpServer(HttpServerUtility httpServerUtility)
        {
            return new HttpServerUtilityWrapper(httpServerUtility);
        }

        public virtual HttpResponseBase GetHttpResponse(HttpResponse response)
        {
            return new HttpResponseWrapper(response);
        }

        protected void Session_Start(object sender, EventArgs e)
        {
            new PortalSession().PortalUser = PortalUser.CreateGuestUser();
        }
    }
}