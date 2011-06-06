<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%@ Import Namespace="guruji.ViewModels"%>
<div class="footer">
    <% var type = typeof(RouteNames); %>
    <ul>
        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Biography)) %>">Biography</a></li>
        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Literature)) %>">Literature</a></li>
        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.Awards)) %>">Awards</a></li>
    </ul>
    <ul class="mar20">
        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.KathasSchedule)) %>">Kathas Schedule</a></li>
        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.OtherProgramsSchedule)) %>">Other Proframs Schedule</a></li>
    </ul>
    <ul class="mar_right20">
        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.TulsipeethNews)) %>">Tulsipeeth News</a></li>
        <li><a href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.MediaNews)) %>">Media News</a></li>
    </ul>
    <ul>
        <li><a href="/photogallery/raghavji">Photo Gallery</a></li>
        <li><a href="/videos/ahalyoddhar?id=1">Video Gallery</a></li>
    </ul>
</div>
