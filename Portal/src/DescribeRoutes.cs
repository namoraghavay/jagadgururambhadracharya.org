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
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.Virudavali), "virudavali", new { controller = "AboutGuruji", action = "Virudavali" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.CriticalEdition), "tulsidas/{htmlName}", new { controller = "Articles", action = "viewArticle" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.TulsidasBiography), "tulsidas/{htmlName}", new { controller = "Articles", action = "viewArticle" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.HanumanChalisa), "rambhadracharya/{htmlName}", new { controller = "Articles", action = "viewArticle"}, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.Manas), "ramcharitmanas/{htmlName}", new { controller = "Articles", action = "viewArticle" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.RaghavSeva), "rambhadracharya/{htmlName}", new { controller = "Articles", action = "viewArticle" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.KathasSchedule), "upcomingkathas", new { controller = "Event", action = "GetUpcomingKathas" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.OtherProgramsSchedule), "upcomingevents", new { controller = "Event", action = "GetUpcomingEvents" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.TulsipeethNews), "tulsipeethnews", new { controller = "News", action = "GetTulsipeethNews" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.MediaNews), "medianews", new { controller = "News", action = "GetMediaNews" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.PhotoGallery), "photogallery/{albumName}", new { controller = "Gallery", action = "ViewPictureGallery" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.VideoGallery), "videos/{albumName}", new { controller = "Gallery", action = "ViewVideoGallery" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.AudioGallery), "audios/{albumName}", new { controller = "Gallery", action = "ViewAudioGallery" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.JRHU), "jrhu", new { controller = "SocialService", action = "Jrhu" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.JRHUDonate), "jrhu/donate", new { controller = "SocialService", action = "Donate" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.Downloads), "downloads", new { controller = "Download", action = "Show" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.FConnect), "fconnect", new { controller = "Authentication", action = "FConnect" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.FLogout), "flogout", new { controller = "Authentication", action = "FLogout" }, defaultPageConstraints);
            RouteTable.Routes.MapRoute(Enum.GetName(type, RouteNames.Login), "Authentication/Login", new { controller = "Authentication", action = "Login" }, defaultPageConstraints);
        }
    }
}