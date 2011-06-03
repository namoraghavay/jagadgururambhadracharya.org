using guruji.Domain;

namespace guruji.ViewModels
{
    public class HomePageViewModel
    {
        public Event UpcomingEvent { get; set; }

        public NewsItem LatestNews { get; set; }

        public string Ticker { get; set; }
    }
}
