using System.Web.Mvc;

namespace guruji.Controllers
{
    public class ArticlesController : BaseController
    {
        public ActionResult BiographyTulsidas()
        {
            return HtmlViewFor("biographyTulsidas");
        }

        public ActionResult HanumanChalisa()
        {
            return HtmlViewFor("hanumanChalisa");
        }

        public ActionResult RaghavSeva()
        {
            return HtmlViewFor("raghavSeva");
        }
    }
}