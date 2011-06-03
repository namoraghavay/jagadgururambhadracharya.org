using System.Collections.Generic;
using guruji.Domain;
using NHibernate;

namespace guruji.Repos
{
    public class EventRepository : Repository, IEventRepository
    {
        public EventRepository(ISessionFactory sessionFactory) : base(sessionFactory)
        {
        }

        public Event GetEventById(int id)
        {
            return Load<Event>(id);
        }

        public IList<Event> GetAllUpcomingEvents()
        {
            return RunNamedQuery<Event>("load.upcoming.events", null);
        }

        public IList<Event> GetAllUpcomingKathas()
        {
            return RunNamedQuery<Event>("load.upcoming.kathas", null);            
        }

        public void SaveOrUpdate(Event evt)
        {
            base.SaveOrUpdate(evt);
        }
    }

    public interface IEventRepository : IRepository
    {
        Event GetEventById(int id);
        IList<Event> GetAllUpcomingEvents();
        void SaveOrUpdate(Event evt);
        IList<Event> GetAllUpcomingKathas();
    }
}
