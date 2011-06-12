<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<EventsViewModel>" %>

<%@ Import Namespace="guruji.Domain" %>
<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="title" ContentPlaceHolderID="Javascript" runat="server">
    <% if (Model.DefaultTab.Equals(EventsKathasTabs.Katha))
       { %>
        <title>Upcoming Kathas</title>
    <% } else { %>
        <title>Upcoming Other Programs</title>        
    <%} %>
</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <div class="featured_img">
        <img alt="" src="https://lh3.googleusercontent.com/-qxFjVNS98NU/TeelS46U0KI/AAAAAAAAAB8/NsQ4iTbVLek/kathas_featured.jpg" />
    </div>
    <div class="main_content">
        <div class="tab_head">
            <div>
            <%
                var type = typeof (RouteNames); %>
            <a class="tab_link <%=Model.DefaultTab.Equals(EventsKathasTabs.Katha) ? "selected_tab" : ""%>"
                href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.KathasSchedule)) %>">Kathas</a> </div>
                <div>
            <a class="tab_link <%=Model.DefaultTab.Equals(EventsKathasTabs.Events) ? "selected_tab" : ""%>"
                href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.OtherProgramsSchedule)) %>">Other Programs</a></div>
        </div>
        <div class="tabs">
            <% if (Model.DefaultTab.Equals(EventsKathasTabs.Katha))
               { %>
            <% Html.RenderPartial("EventTab", Model.Kathas);%>
            <% }
               else
               { %>
            <%Html.RenderPartial("EventTab", Model.Events); %>
            <%} %>
        </div>
    </div>
</asp:Content>
