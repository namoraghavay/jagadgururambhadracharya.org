namespace guruji.ViewModels
{
    public class HtmlPageViewModel
    {
        public object Html { get; set; }

        public string PageName { get; set; }
        
        public string BrowserTitle
        {
            get
            {
                const string TITLE = "Rambhadracharya - ";
                if (PageName == "biography")
                    return TITLE + "Biography";
                if (PageName == "literatureHome")
                    return TITLE + "Literature";
                if (PageName == "awards")
                    return TITLE + "Awards and Prizes";
                if (PageName == "virudavali")
                    return TITLE + "Virudavali";
                if (PageName == "jrhu")
                    return TITLE + "Jagadguru Rambhadracharya Handicapped University";
                if (PageName == "biographyTulsidas")
                    return TITLE + "Biography of Goswami Tulsidas Ji";
                if (PageName == "hanumanChalisa")
                    return TITLE + "Hanuman Chalisa";
                if (PageName == "raghavSeva")
                    return TITLE + "Raghav Seva - Vedic tradition";
                return TITLE;
            }
        }
    }
}