using System.Web.Mvc;

namespace guruji.Controllers
{
    public class AboutGurujiController : BaseController
    {
        public ActionResult Biography()
        {
            return ViewFor("biography");
        }

        public ActionResult LiteratureHome()
        {
            return ViewFor("literatureHome");
        }

        public ActionResult Awards()
        {
            return ViewFor("awards");
        }
    }
}