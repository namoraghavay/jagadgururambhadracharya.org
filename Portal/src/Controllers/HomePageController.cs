using System.Collections.Generic;
using System.Text;
using System.Web.Mvc;
using guruji.Domain;
using guruji.Services;
using guruji.ViewModels;
using guruji.ViewServices;
using System.Linq;

namespace guruji.Controllers
{
    public class HomePageController : BaseController
    {
        private readonly IContentService contentService = ContentService.Instance();

        public ActionResult Home(string landingPageName)
        {
            var upcomingKathas = contentService.GetUpcomingKathas();
            var newsItems = contentService.GetNewsItems();
            var ticker = BuildNewsTicker(upcomingKathas);
            var homePageViewModel = new HomePageViewModel
                                        {
                                            UpcomingEvent = upcomingKathas == null ? null : upcomingKathas.First(),
                                            LatestNews = newsItems.First(),
                                            Ticker = ticker
                                        };
            return View("HomePage", homePageViewModel);
        }

        private string BuildNewsTicker(IList<Event> kathas)
        {
            var ticker = new StringBuilder("|| ");
            foreach (var k in kathas)
            {
                ticker.Append(k.Title).Append(" from ").Append(k.EventBeginDate.ToString(Config.DatePattern)).Append(" to ")
                    .Append(k.EventEndDate.ToString(Config.DatePattern)).Append(" at ").Append(k.EventContent.Location);
                if (k.TelecastContent != null)
                {
                    ticker.Append(". " + ((k.TelecastContent.IsLive) ? "Live" : "Recorded") + " Telecast on " +
                                  k.TelecastContent.ChannelName);
                }
                ticker.Append(" || ");
            }
            return ticker.ToString();
        }
    }
}