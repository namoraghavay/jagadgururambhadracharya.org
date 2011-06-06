using System.Web.Mvc;

namespace guruji.Controllers
{
    public class BaseController : Controller
    {
        protected BaseController()
        {
        }

        protected ActionResult ViewFor(string htmlFileName)
        {
            string path = Server.MapPath("/");
            object html = System.IO.File.ReadAllText(path + "/ViewContent/html/" + htmlFileName + ".html");
            return View("HtmlPage", html);
        }
    }
}