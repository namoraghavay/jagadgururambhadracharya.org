using System;
using guruji.Domain;

namespace guruji.ViewModels
{
    public class EventForm
    {
        public Int32 Id { get; set; }
        public string Title { get; set; }
        public bool IsKatha { get; set; }
        public DateTime EventBeginDate { get; set; }
        public DateTime EventEndDate { get; set; }
        public EventContent EventContent { get; set; }
        public TelecastContent TelecastContent { get; set; }
        public DateTime TelecastBeginDate { get; set; }
        public DateTime TelecastEndDate { get; set; }
        public string Importance { get; set; }
    }
}