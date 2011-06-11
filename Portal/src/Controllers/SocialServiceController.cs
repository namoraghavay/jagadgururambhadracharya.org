using System.Web.Mvc;

namespace guruji.Controllers
{
    public class SocialServiceController : BaseController
    {
        public ActionResult Jrhu()
        {
            return HtmlViewFor("jrhu");
        }

        public ActionResult Donate()
        {
            return View("JrhuDonate");
        }
    }
}