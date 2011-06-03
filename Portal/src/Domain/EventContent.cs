using System;
using System.Collections.Generic;

namespace guruji.Domain
{
    [Serializable]
    public class EventContent
    {
        public string ContentPageStyle { get; set; }
        public string Teaser { get; set; }
        public string Image_small { get; set; }
        public string Image_large { get; set; }
        public string Location { get; set; }
        public List<Contact> ContactDetail { get; set; }
        public string Descrption { get; set; }
    }
}