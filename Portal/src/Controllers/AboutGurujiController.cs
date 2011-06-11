using System.Web.Mvc;

namespace guruji.Controllers
{
    public class AboutGurujiController : BaseController
    {
        public ActionResult Biography()
        {
            return HtmlViewFor("biography");
        }

        public ActionResult LiteratureHome()
        {
            return HtmlViewFor("literatureHome");
        }

        public ActionResult Awards()
        {
            return HtmlViewFor("awards");
        }
    }
}