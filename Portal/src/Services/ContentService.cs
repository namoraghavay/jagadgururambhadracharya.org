using System;
using System.Collections.Generic;
using guruji.Domain;
using guruji.Repos;

namespace guruji.Services
{
    public interface IContentService
    {
        IList<Event> GetUpcomingEvents();
        IList<NewsItem> GetNewsItems();
        IList<NewsItem> GetArchivedNewsItems();
        void SaveOrUpdateEvent(Event evt);
        void DeleteEvent(Event evt);
        Event LoadEventById(Int32 id);
        void SaveOrUpdateNews(NewsItem newsItem);
        void DeleteNews(NewsItem newsItem);
        NewsItem LoadNewsById(Int32 id);
        IList<Event> GetUpcomingKathas();
    }

    public class ContentService : IContentService
    {
        public IUserRoleRepository userRoleRepository;
        public IEventRepository eventRepository;
        public INewsRepository newsItemRepository;
        private static readonly IContentService instance = new ContentService(NHibernateSessionFactory.Instance());

        public static IContentService Instance()
        {
            return instance;
        }

        private ContentService(NHibernateSessionFactory repositoryFactory)
        {
            eventRepository = repositoryFactory.EventRepository;
            newsItemRepository = repositoryFactory.NewsRepository;
            userRoleRepository = repositoryFactory.UserRoleRepository;
        }

        public IList<Event> GetUpcomingEvents()
        {
            return eventRepository.GetAllUpcomingEvents();
        }

        public IList<Event> GetUpcomingKathas()
        {
            return eventRepository.GetAllUpcomingKathas();
        }

        public IList<NewsItem> GetNewsItems()
        {
            return newsItemRepository.GetNewsItems();
        }

        public IList<NewsItem> GetArchivedNewsItems()
        {
            return newsItemRepository.GetArchivedNewsItems();
        }

        public void SaveOrUpdateEvent(Event evt)
        {
            eventRepository.SaveOrUpdate(evt);
        }

        public void DeleteEvent(Event evt)
        {
            eventRepository.Delete(evt);
        }

        public Event LoadEventById(Int32 evtId)
        {
            return eventRepository.Load<Event>(evtId);
        }

        public void SaveOrUpdateNews(NewsItem newsItem)
        {
            newsItemRepository.SaveOrUpdate(newsItem);
        }

        public void DeleteNews(NewsItem newsItem)
        {
            newsItemRepository.Delete(newsItem);
        }

        public NewsItem LoadNewsById(Int32 newsId)
        {
            return newsItemRepository.Load<NewsItem>(newsId);
        }
    }
}
