using System.Web.Mvc;
using guruji.ViewModels;

namespace guruji.Controllers
{
    public class BaseController : Controller
    {
        protected ActionResult HtmlViewFor(string htmlFileName)
        {
            string path = Server.MapPath("/");
            object html = System.IO.File.ReadAllText(path + "/ViewContent/html/" + htmlFileName + ".html");
            return View("HtmlPage", new HtmlPageViewModel {Html = html, PageName = htmlFileName});
        }
    }
}