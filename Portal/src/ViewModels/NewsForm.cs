using System;
using guruji.Domain;

namespace guruji.ViewModels
{
    public class NewsForm
    {
        public Int32 Id { get; set; }
        public string Title { get; set; }
        public DateTime NewsDate { get; set; }
        public string Importance { get; set; }
        public NewsContent NewsContent { get; set; }
    }
}