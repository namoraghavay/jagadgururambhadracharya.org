using System.Configuration;

namespace guruji.ViewServices
{
    public class Config
    {
        public static string LogSqlQueries
        {
            get { return ConfigurationManager.AppSettings["LogSqlQueries"]; }
        }

        public static string DatePattern
        {
            get { return ConfigurationManager.AppSettings["DatePattern"]; }
        }

        public static string PortalConnectionString
        {
            get { return ConfigurationManager.ConnectionStrings["PortalConnectionString"].ConnectionString; }
        }

        public static string WebmasterEmail
        {
            get { return ConfigurationManager.AppSettings["WebmasterEmail"]; }
        }

        public static string FacebookAppId
        {
            get { return ConfigurationManager.AppSettings["FacebookAppId"]; }
        }
    }
}