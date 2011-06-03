using System.Collections.Generic;
using NHibernate;

namespace guruji.Repos
{
    public class Repository : IRepository
    {
        private ISessionFactory SessionFactory { get; set; }

        protected Repository(ISessionFactory sessionFactory)
        {
            SessionFactory = sessionFactory;
        }

        public T Load<T>(object id)
        {
            using (var session = SessionFactory.OpenSession())
            {
                return session.Get<T>(id);
            }
        }

        public void SaveOrUpdate<T>(T entity)
        {
            using (var session = SessionFactory.OpenSession())
            {
                session.SaveOrUpdate(entity);
                session.Flush();
            }
        }

        public void Save<T>(T entity)
        {
            using (var session = SessionFactory.OpenSession())
            {
                session.Save(entity);
                session.Flush();
            }
        }

        public T RunNamedQuery<T>(string queryName, string parameterName, object parameterValue)
        {
            using (ISession session = SessionFactory.OpenSession())
            {
                IQuery query = session.GetNamedQuery(queryName);
                query.SetParameter(parameterName, parameterValue);
                return query.UniqueResult<T>();
            }
        }

        public IList<T> RunNamedQuery<T>(string queryName, params NamedQueryParameter[] parameters)
        {
            using (var session = SessionFactory.OpenSession())
            {
                IQuery query = session.GetNamedQuery(queryName);
                return query.List<T>();
            }
        }

        public void Delete<T>(T entity)
        {
            using (var session = SessionFactory.OpenSession())
            {
                session.Delete(entity);
                session.Flush();
            }
        }
    }

    public class NamedQueryParameter
    {
        public string Name { get; private set; }
        public object Value { get; private set; }

        public NamedQueryParameter(string name, object value)
        {
            Name = name;
            Value = value;
        }
    }

    public interface IRepository
    {
        T Load<T>(object id);

        void SaveOrUpdate<T>(T entity);

        void Save<T>(T entity);

        void Delete<T>(T entity);

        T RunNamedQuery<T>(string queryName, string parameterName, object parameterValue);
        IList<T> RunNamedQuery<T>(string queryName, params NamedQueryParameter[] parameters);
    }
}