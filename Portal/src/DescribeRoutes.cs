using System.Web.Mvc;
using System.Web.Routing;

namespace guruji
{
    public class DescribeRoutes
    {
        public static void Register()
        {
            var defaultPageConstraints = new { defaultPage = "(?i)(default|default.aspx|default.htm|default.html)?" };
            RouteTable.Routes.MapRoute("root", "{*defaultPage}", new { controller = "HomePage", action = "Home" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute("biography", "rambhadracharya/biography", new { controller = "AboutGuruji", action = "Biography" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute("literatureHome", "rambhadracharya/literature", new { controller = "AboutGuruji", action = "LiteratureHome" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute("awards", "rambhadracharya/awards", new { controller = "AboutGuruji", action = "Awards" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute("kathas", "rambhadracharya/upcomingkathas", new { controller = "Event", action = "GetUpcomingKathas" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute("events", "rambhadracharya/upcomingevents", new { controller = "Event", action = "GetUpcomingEvents" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute("tulsipeethnews", "rambhadracharya/tulsipeethnews", new { controller = "News", action = "GetTulsipeethNews" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute("medianews", "rambhadracharya/medianews", new { controller = "News", action = "GetMediaNews" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute("gallery", "rambhadracharya/photogallery/{albumName}", new { controller = "Gallery", action = "ViewPictureGallery" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute("videos", "rambhadracharya/videos/{albumName}", new { controller = "Gallery", action = "ViewVideoGallery" }, defaultPageConstraints);
        }
    }
}