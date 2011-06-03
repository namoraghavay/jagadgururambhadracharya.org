<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<div class="header_wrap">
    <div class="header">
        <h1 class="logo">
            <a href="/default" title="Homepage">
                <img src="/ViewContent/images/logo.jpg" alt="Jagadguru Rambhadracharya" /></a></h1>
    </div>
    <div class="nav_wrap">
        <div class="primary_navigation">
            <ul id="nav">
                <%
                    var url = Request.Url.AbsolutePath; %>
                <li class="<%= (url.Contains("default") || url.Equals("/")) ? "current" : "trigger" %>"><a href="/default.aspx">Home</a></li>
                <%
                    var aboutPage = (url.Contains("biography") || url.Contains("literature") || url.Contains("awards"))
                                        ? "current"
                                        : "trigger"; %>
                <li class="<%=aboutPage %>"><a href="/rambhadracharya/biography">About Guruji</a>
                    <ul class="sub_menu">
                        <li><a href="/rambhadracharya/biography">Biography</a></li>
                        <li><a href="/rambhadracharya/literature">Literature</a></li>
                        <li><a href="/rambhadracharya/awards">Awards</a></li>
                    </ul>
                </li>
                <li class="<%=(url.Contains("upcomingkathas") || url.Contains("upcomingevents")) ? "current" : "trigger" %>"><a href="/rambhadracharya/upcomingkathas">Upcoming Programs</a> 
                    <ul class="sub_menu">
                        <li><a href="/rambhadracharya/upcomingkathas">Upcoming Kathas</a></li>
                        <li><a href="/rambhadracharya/upcomingevents">Other Programs</a></li>
                    </ul>                
                </li>
                <li class="<%=url.Contains("news") ? "current" : "trigger" %>"><a href="/rambhadracharya/tulsipeethnews">News</a> 
                    <ul class="sub_menu">
                        <li><a href="/rambhadracharya/tulsipeethnews">Tulsipeeth News</a></li>
                        <li><a href="/rambhadracharya/medianews">Guruji in Media</a></li>
                    </ul>                
                </li>
                <%
                    var galleryPage = (url.Contains("photogallery") || url.Contains("videos"))
                                        ? "current"
                                        : "trigger"; %>
                <li class="<%=galleryPage %>"><a href="/rambhadracharya/photogallery/raghavji">Gallery</a>
                    <ul class="sub_menu">
                        <li><a href="/rambhadracharya/photogallery/raghavji">Photos</a></li>
                        <li><a href="/rambhadracharya/videos/ahalyoddhar?id=1">Videos</a></li>
                    </ul>
                </li>
                <li class="trigger"><a href="#">Cultural Queries</a>
                    <ul class="sub_menu">
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Ask Guruji</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
