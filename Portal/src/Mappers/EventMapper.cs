using System;
using guruji.Domain;
using guruji.ViewModels;

namespace guruji.Mappers
{
    public class EventMapper
    {
        public Event MapFormToDomain(EventForm form)
        {
            return new Event
                       {
                           Id = form.Id,
                           Title = form.Title,
                           IsKatha = form.IsKatha,
                           EventBeginDate = form.EventBeginDate,
                           EventEndDate = form.EventEndDate,
                           EventContent = form.EventContent,
                           TelecastBeginDate = form.TelecastBeginDate,
                           TelecastEndDate = form.TelecastEndDate,
                           TelecastContent = form.TelecastContent,
                           Importance = (Importance)Enum.Parse(typeof(Importance), form.Importance)
                       };
        }
    }
}