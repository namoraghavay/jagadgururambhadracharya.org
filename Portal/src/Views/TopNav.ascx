<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%@ Import Namespace="guruji.Domain" %>
<%@ Import Namespace="guruji.Controllers" %>
<%@ Import Namespace="guruji.ViewModels" %>
<%@ Import Namespace="guruji.ViewServices" %>
<div class="header_wrap">
    <div>
        <div class="header">
            <h1 class="logo">
                <a href="/" title="Homepage">
                    <img src="/ViewContent/images/logo.jpg" alt="Jagadguru Rambhadracharya" /></a></h1>            
            <%Html.RenderPartial("ContactUs"); %>
            
            <div class="fb_login">
                <%
                    var portalUser = new PortalSession().PortalUser;
                    var userImage = "";
                    if (portalUser.Role.Equals(UserRole.Facebook))
                    {
                        userImage = "https://graph.facebook.com/" + ((FacebookUser)portalUser).FacebookId + "/picture";
                    }                        
                %>
                <fb:login-button autologoutlink="true" onlogin="javascript:GetUserDetails();" style="float: right"></fb:login-button>
                <div id="fb-root">
                </div>
                <img src="<%=userImage %>" alt="user_image" class='<%= string.IsNullOrEmpty(userImage) ? "hide" : "show" %>' />
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
                    var aboutPage = (url.Contains("biography") || url.Contains("literature") || url.Contains("awards") || url.Contains("virudavali"))
                                        ? "current"
                                        : "trigger"; %>
                <li class="<%=aboutPage %>"><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Biography)) %>">
                    About Guruji</a>
                    <ul class="sub_menu">
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Biography)) %>">Biography</a></li>
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Virudavali)) %>">Virudavali</a></li>
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
                    var galleryPage = (url.Contains("photogallery") || url.Contains("videos") || url.Contains("audio"))
                                        ? "current"
                                        : "trigger"; %>
                <li class="<%=galleryPage %>"><a href='/photogallery/<%=Server.UrlPathEncode("Raghav Ji") %>'>
                    Multimedia</a>
                    <ul class="sub_menu">
                        <li><a href='/photogallery/<%=Server.UrlPathEncode("Raghav Ji") %>'>Pictures Gallery</a></li>
                        <li><a href="/videos/ahalyoddhar?id=1">Videos</a></li>
                        <li><a href="/audios/<%=Server.UrlPathEncode("Bhajan Sarayu (Ram Bhajans)") %>">Audios</a></li>
                    </ul>
                </li>
                <li class="trigger"><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.JRHU)) %>">
                    Social Service</a>
                    <ul class="sub_menu">
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.JRHU)) %>">JRH University</a></li>
                        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.JRHUDonate)) %>">Donate to
                            JRHU</a></li>
                    </ul>
                </li>
                <li class="trigger"><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Downloads)) %>">
                    Downloads</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<script type="text/javascript">
    window.fbAsyncInit = function() {
        FB.init({
            appId: '<%=Config.FacebookAppId %>',
            status: true,
            cookie: true,
            xfbml: true
        });
    };
    (function() {
        var e = document.createElement('script');
        e.type = 'text/javascript';
        e.src = document.location.protocol + '//connect.facebook.net/en_GB/all.js';
        e.async = true;
        document.getElementById('fb-root').appendChild(e);
    } ());
</script>
