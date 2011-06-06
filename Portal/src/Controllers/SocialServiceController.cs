using System.Web.Mvc;

namespace guruji.Controllers
{
    public class SocialServiceController : BaseController
    {
        public ActionResult Jrhu()
        {
            return ViewFor("jrhu");
        }

        public ActionResult Donate()
        {
            return View("JrhuDonate");
        }
    }
}