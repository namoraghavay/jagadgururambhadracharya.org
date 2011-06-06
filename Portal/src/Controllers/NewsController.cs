using System.Web.Mvc;
using guruji.Domain;
using guruji.Mappers;
using guruji.Services;
using guruji.ViewModels;
using System.Linq;

namespace guruji.Controllers
{
    public class NewsController : BaseController
    {
        private readonly IContentService contentService = ContentService.Instance();

        [PortalAuthorize(Roles = UserRole.Admin)]
        public ActionResult SaveOrUpdateNews(NewsForm newsForm)
        {
            var newsMapper = new NewsMapper();
            contentService.SaveOrUpdateNews(newsMapper.MapFormToEntity(newsForm));
            return GetTulsipeethNews();
        }

        [PortalAuthorize(Roles = UserRole.Admin)]
        public ActionResult DeleteNews(NewsForm newsForm)
        {
            contentService.DeleteNews(contentService.LoadNewsById(newsForm.Id));
            return GetTulsipeethNews();
        }

        [PortalAuthorize(Roles = UserRole.Admin | UserRole.General | UserRole.Guest)]
        public ActionResult GetTulsipeethNews()
        {
            var newsItems = contentService.GetNewsItems();
            var tulsipeethNewsModel = new NewsViewModel
                                          {
                                              TulsipeethNews = newsItems.Where(x => string.IsNullOrEmpty(x.NewsContent.SourceName)).ToList(),
                                              DefaultTab = NewsTabs.Tulsipeeth
                                          };
            return View("NewsHome", tulsipeethNewsModel);
        }

        [PortalAuthorize(Roles = UserRole.Admin | UserRole.General | UserRole.Guest)]
        public ActionResult GetMediaNews()
        {
            var newsItems = contentService.GetNewsItems();
            var mediaNewsModel = new NewsViewModel
                                          {
                                              MediaNews = newsItems.Where(x => !string.IsNullOrEmpty(x.NewsContent.SourceName)).ToList(),
                                              DefaultTab = NewsTabs.Media
                                          };
            return View("NewsHome", mediaNewsModel);
        }
    }
}