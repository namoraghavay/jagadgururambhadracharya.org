using System;
using guruji.Domain;
using guruji.ViewModels;

namespace guruji.Mappers
{
    public class NewsMapper
    {
        public NewsItem MapFormToEntity(NewsForm form)
        {
            return new NewsItem
                       {
                           Id = form.Id,
                           Title = form.Title,
                           NewsDate = form.NewsDate,
                           Importance = (Importance)Enum.Parse(typeof(Importance), form.Importance),
                           NewsContent = form.NewsContent
                       };
        }
    }
}