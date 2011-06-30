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
                var title = "Rambhadracharya - ";
                if (PageName == "biography")
                    return title + "Biography";
                if (PageName == "literatureHome")
                    return title + "Literature";
                if (PageName == "awards")
                    return title + "Awards and Prizes";
                if (PageName == "virudavali")
                    return title + "Virudavali";
                if (PageName == "jrhu")
                    return title + "Jagadguru Rambhadracharya Handicapped University";
                if (PageName == "biographyTulsidas")
                    return title + "Biography of Goswami Tulsidas Ji";
                return title;
            }
        }
    }
}