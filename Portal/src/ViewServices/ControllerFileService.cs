using System.Web;
using System.Web.Mvc;

namespace guruji.ViewServices
{
    public interface IControllerFileService
    {
        bool ServerFileExists(string path, ControllerContext context);
        string Contents(string serverPath, HttpContextBase httpContext);
    }

    public class ControllerFileService : IControllerFileService
    {
        private readonly IFileService fileService;

        public ControllerFileService(IFileService fileService)
        {
            this.fileService = fileService;
        }

        public bool ServerFileExists(string serverPath, ControllerContext controllerContext)
        {
            var fileSystemPath = MapPath(controllerContext.HttpContext, serverPath);
            return fileService.Exists(fileSystemPath);
        }

        public string Contents(string serverPath, HttpContextBase httpContext)
        {
            var fileSystemPath = MapPath(httpContext, serverPath);
            return fileService.Contents(fileSystemPath);
        }

        private string MapPath(HttpContextBase httpContext, string serverPath)
        {
            return httpContext.Server.MapPath(serverPath);
        }
    }
}