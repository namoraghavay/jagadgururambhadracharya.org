using System;
using guruji.Domain;
using guruji.ViewServices;
using NHibernate;
using NHibernate.Cfg;

namespace guruji.Repos
{
    public class NHibernateSessionFactory : IDisposable
    {
        private readonly ISessionFactory sessionFactory;

        private static readonly NHibernateSessionFactory instance = new NHibernateSessionFactory();

        public static NHibernateSessionFactory Instance()
        {
            return instance;
        }

        private NHibernateSessionFactory() 
        {
            NHibernate.Cfg.Environment.UseReflectionOptimizer = false; 
            var cfg = new Configuration();
            cfg.SetProperty("connection.connection_string", Config.PortalConnectionString); 
            cfg.SetProperty("connection.provider", "NHibernate.Connection.DriverConnectionProvider");
            cfg.SetProperty("connection.driver_class", "NHibernate.Driver.MySqlDataDriver");
            cfg.SetProperty("dialect", "NHibernate.Dialect.MySQL5Dialect");
            cfg.SetProperty("proxyfactory.factory_class", "NHibernate.ByteCode.Castle.ProxyFactoryFactory, NHibernate.ByteCode.Castle");
            cfg.SetProperty("show_sql", Config.LogSqlQueries);

            cfg.AddAssembly(typeof(Event).Assembly);
            sessionFactory = cfg.BuildSessionFactory();
        }

        public IEventRepository EventRepository
        {
            get { return new EventRepository(sessionFactory); }
        }

        public INewsRepository NewsRepository
        {
            get { return new NewsRepository(sessionFactory); }
        }

        public IUserRoleRepository UserRoleRepository
        {
            get { return new UserRoleRepository(sessionFactory); }
        }

        public IUserRepository UserRepository
        {
            get { return new UserRepository(sessionFactory); }
        }

        public void Dispose()
        {
            sessionFactory.Dispose();
        }

        public void Close()
        {
            sessionFactory.Close();
        }
    }
}
