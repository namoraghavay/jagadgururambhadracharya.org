using System.Collections.Generic;
using guruji.Domain;

namespace guruji.ViewModels
{
    public class EventsViewModel
    {
        public IList<Event> Kathas { get; set; }
        
        public IList<Event> Events { get; set; }

        public EventsKathasTabs DefaultTab { get; set; }
    }

    public enum EventsKathasTabs
    {
        Katha,
        Events
    }
}
