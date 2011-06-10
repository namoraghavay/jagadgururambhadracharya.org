using System.Web.Mvc;

namespace guruji.Controllers
{
    public class SocialServiceController : BaseController
    {
        public ActionResult Jrhu()
        {
            return ViewForHtml("jrhu");
        }

        public ActionResult Donate()
        {
            return View("JrhuDonate");
        }
    }
}