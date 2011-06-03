using System.Collections.Generic;
using Castle.Core.Configuration;
using Castle.Windsor;
using guruji.ViewServices;

namespace guruji.Common
{
    public static class NHibernateFacility
    {
        private static void CreateItem(MutableConfiguration parent, string key, string value)
        {
            var item = parent.CreateChild("item");
            item.Attributes.Add("key", key);
            item.Value = value;
        }

        public static void Configure(IWindsorContainer container, IList<string> assembliesToLoad)
        {
            var facility = new MutableConfiguration("facility");
            facility.Attributes.Add("id", "nhibernatefacility");
            facility.Attributes.Add("isWeb", "isWeb");
            facility.Attributes.Add("defaultFlushMode", "Commit");
            var factory = facility.CreateChild("factory");
            factory.Attributes.Add("id", "nhibernate.factory");
            var settings = factory.CreateChild("settings");

            CreateItem(settings, "connection.connection_string", Config.PortalConnectionString);
            CreateItem(settings, "connection.provider", "NHibernate.Connection.DriverConnectionProvider");
            CreateItem(settings, "connection.driver_class", "NHibernate.Driver.MySqlDataDriver");
            CreateItem(settings, "dialect", "NHibernate.Dialect.MySQL5Dialect");
            CreateItem(settings, "proxyfactory.factory_class", "NHibernate.ByteCode.Castle.ProxyFactoryFactory, NHibernate.ByteCode.Castle");
            CreateItem(settings, "show_sql", Config.LogSqlQueries);
            var assemblies = factory.CreateChild("assemblies");
            foreach (var assebly in assembliesToLoad)
            {
                assemblies.CreateChild("assembly", assebly);
            }
            container.Kernel.ConfigurationStore.AddFacilityConfiguration("nHibernateFacility", facility);
            container.AddFacility<Castle.Facilities.NHibernateIntegration.NHibernateFacility>("nHibernateFacility");
        }
    }
}