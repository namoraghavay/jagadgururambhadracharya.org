<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<EventsViewModel>" %>

<%@ Import Namespace="guruji.Domain" %>
<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="title" ContentPlaceHolderID="Javascript" runat="server">
    <% if (Model.DefaultTab.Equals(EventsKathasTabs.Katha))
       { %>
        <title>Rambhadracharya - Upcoming Kathas</title>
    <% } else { %>
        <title>Rambhadracharya - Upcoming Other Programs</title>        
    <%} %>
    
    <script type="text/javascript" src="/ViewContent/js/jquery.accordion.js"></script>

</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <div class="featured_img">
        <img alt="" src="/ViewContent/images/banners/kathas_featured.jpg" />
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
