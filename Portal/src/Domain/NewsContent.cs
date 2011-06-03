using System;

namespace guruji.Domain
{
    [Serializable]
    public class NewsContent
    {
        public string SourceCuttingImage { get; set; }
        public string SourceLink { get; set; }
        public string SourceName { get; set; }
        public string Teaser { get; set; }
        public string DescriptionHtml { get; set; }
    }
}