<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<EventsViewModel>" %>

<%@ Import Namespace="guruji.Domain" %>
<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <div class="featured_img">
        <img alt="" src="https://lh3.googleusercontent.com/-qxFjVNS98NU/TeelS46U0KI/AAAAAAAAAB8/NsQ4iTbVLek/kathas_featured.jpg" />
    </div>
    <div class="main_content">
        <div class="tab_head">
            <div>
            <a class="tab_link <%=Model.DefaultTab.Equals(EventsKathasTabs.Katha) ? "selected_tab" : ""%>"
                href="/rambhadracharya/upcomingkathas">Kathas</a> </div>
                <div>
            <a class="tab_link <%=Model.DefaultTab.Equals(EventsKathasTabs.Events) ? "selected_tab" : ""%>"
                href="/rambhadracharya/upcomingevents">Other Programs</a></div>
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
