using System;
using System.Web.Mvc;
using System.Web.Routing;
using guruji.ViewModels;

namespace guruji
{
    public class DescribeRoutes
    {
        public static void Register()
        {
            Type type = typeof (RouteNames);
            var defaultPageConstraints = new { defaultPage = "(?i)(default|default.aspx|default.htm|default.html)?" };
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.Root), "{*defaultPage}", new { controller = "HomePage", action = "Home" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.Biography), "biography", new { controller = "AboutGuruji", action = "Biography" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.Literature), "literature", new { controller = "AboutGuruji", action = "LiteratureHome" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.Awards), "awards", new { controller = "AboutGuruji", action = "Awards" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.KathasSchedule), "upcomingkathas", new { controller = "Event", action = "GetUpcomingKathas" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.OtherProgramsSchedule), "upcomingevents", new { controller = "Event", action = "GetUpcomingEvents" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.TulsipeethNews), "tulsipeethnews", new { controller = "News", action = "GetTulsipeethNews" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.MediaNews), "medianews", new { controller = "News", action = "GetMediaNews" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.PhotoGallery), "photogallery/{albumName}", new { controller = "Gallery", action = "ViewPictureGallery" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.VideoGallery), "videos/{albumName}", new { controller = "Gallery", action = "ViewVideoGallery" }, defaultPageConstraints);
        }
    }
}