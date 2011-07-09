using System.Web.Mvc;

namespace guruji.Controllers
{
    public class ArticlesController : BaseController
    {
        public ActionResult BiographyTulsidas()
        {
            return HtmlViewFor("biographyTulsidas");
        }
    }

    public class DownloadController : BaseController
    {
        public ActionResult Show()
        {
            return View("downloads");
        }
    }
}