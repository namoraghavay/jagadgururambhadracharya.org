using System.Web.Mvc;

namespace guruji.Controllers
{
    public class ArticlesController : BaseController
    {
        public ActionResult ViewArticle(string htmlName)
        {
            return HtmlViewFor(htmlName);
        }
    }
}