using System.Web;
using System.Web.SessionState;
using guruji.Domain;

namespace guruji.Controllers
{
    public interface IPortalSession
    {
        PortalUser PortalUser { get; set; }
    }

    public class PortalSession : IPortalSession
    {
        private static HttpSessionState Session
        {
            get { return HttpContext.Current.Session; }
        }

        public PortalUser PortalUser
        {
            get { return (PortalUser) Session["user"]; }
            set { Session["user"] = value; }
        }
    }
}