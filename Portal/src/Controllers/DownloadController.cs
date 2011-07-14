using System.Web.Mvc;

namespace guruji.Controllers
{
    public class DownloadController : BaseController
    {
        public ActionResult Show()
        {
            return View("downloads");
        }
    }
}