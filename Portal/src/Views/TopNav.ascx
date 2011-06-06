<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%@ Import Namespace="guruji.ViewModels" %>
<div class="header_wrap">
    <div>
        <div class="header">
            <h1 class="logo">
                <a href="/default" title="Homepage">
                    <img src="/ViewContent/images/logo.jpg" alt="Jagadguru Rambhadracharya" /></a></h1>
            <div class="fb_login">
                <fb:login-button autologoutlink="true"></fb:login-button>
                <div id="fb-root">
                </div>
            </div>
        </div>
    </div>
    <div class="nav_wrap">
        <div class="primary_navigation">
            <ul id="nav">
                <%
                    var url = Request.Url.AbsolutePath;
                    Type type = typeof(RouteNames);
                %>
                <li class="<%= (url.Contains("default") || url.Equals("/")) ? "current" : "trigger" %>">
                    <a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Root)) %>">Home</a></li>
                <%
                    var aboutPage = (url.Contains("biography") || url.Contains("literature") || url.Contains("awards"))
                                        ? "current"
                                        : "trigger"; %>
                <li class="<%=aboutPage %>"><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Biography)) %>">
                    About Guruji</a>
                    <ul class="sub_menu">
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Biography)) %>">Biography</a></li>
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Literature)) %>">Literature</a></li>
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Awards)) %>">Awards</a></li>
                    </ul>
                </li>
                <li class="<%=(url.Contains("upcomingkathas") || url.Contains("upcomingevents")) ? "current" : "trigger" %>">
                    <a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.KathasSchedule)) %>">Upcoming
                        Programs</a>
                    <ul class="sub_menu">
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.KathasSchedule)) %>">Upcoming
                            Kathas</a></li>
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.OtherProgramsSchedule)) %>">
                            Other Programs</a></li>
                    </ul>
                </li>
                <li class="<%=url.Contains("news") ? "current" : "trigger" %>"><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.TulsipeethNews)) %>">
                    News</a>
                    <ul class="sub_menu">
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.TulsipeethNews)) %>">Tulsipeeth
                            News</a></li>
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.MediaNews)) %>">Guruji in
                            Media</a></li>
                    </ul>
                </li>
                <%
                    var galleryPage = (url.Contains("photogallery") || url.Contains("videos"))
                                        ? "current"
                                        : "trigger"; %>
                <li class="<%=galleryPage %>"><a href="/photogallery/raghavji">Gallery</a>
                    <ul class="sub_menu">
                        <li><a href="/photogallery/raghavji">Photos</a></li>
                        <li><a href="/videos/ahalyoddhar?id=1">Videos</a></li>
                    </ul>
                </li>
                <li class="trigger"><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.JRHU)) %>">Social Service</a>
                    <ul class="sub_menu">
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.JRHU)) %>">JRH University</a></li>
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.JRHUDonate)) %>">Donate to JRHU</a></li>
                        <li><a href="#">Tulsipeeth</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
