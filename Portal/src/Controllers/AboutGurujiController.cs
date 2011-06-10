using System.Web.Mvc;

namespace guruji.Controllers
{
    public class AboutGurujiController : BaseController
    {
        public ActionResult Biography()
        {
            return ViewForHtml("biography");
        }

        public ActionResult LiteratureHome()
        {
            return ViewForHtml("literatureHome");
        }

        public ActionResult Awards()
        {
            return ViewForHtml("awards");
        }
    }
}