using System.Collections.Generic;
using guruji.Domain;

namespace guruji.ViewModels
{
    public class NewsViewModel
    {
        public IList<NewsItem> MediaNews { get; set; }
        public IList<NewsItem> TulsipeethNews { get; set; }

        public NewsTabs DefaultTab { get; set; }
    }

    public enum NewsTabs
    {
        Tulsipeeth,
        Media
    }
}
