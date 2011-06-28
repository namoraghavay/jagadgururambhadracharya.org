<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<NewsViewModel>" %>

<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="guruji.Domain" %>
<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="title" ContentPlaceHolderID="Javascript" runat="server">
    <% if (Model.DefaultTab.Equals(NewsTabs.Tulsipeeth))
       { %>
    <title>News by Tulsipeeth</title>
    <%}
       else
       { %>
    <title>Rambhadracharya - Jagadguru Rambhadracharya in Media</title>
    <%} %>
</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <div class="featured_img">
        <img alt="news" src="https://lh3.googleusercontent.com/-xt9tqsf7IuQ/TeelUgXB67I/AAAAAAAAACE/AjjClsrx0ws/news_featured.jpg" />
    </div>
    <div class="main_content">
        <div class="tab_head">
            <div>
                <%
                    var type = typeof(RouteNames); %>
                <a class="tab_link <%=Model.DefaultTab.Equals(NewsTabs.Tulsipeeth) ? "selected_tab" : ""%>"
                    href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.TulsipeethNews)) %>">Tulsipeeth
                    News</a>
            </div>
            <div>
                <a class="tab_link <%=Model.DefaultTab.Equals(NewsTabs.Media) ? "selected_tab" : ""%>"
                    href="<%=Url.RouteUrl(Enum.GetName(type, RouteNames.MediaNews)) %>">Media News</a></div>
        </div>
        <div class="tabs">
            <% if (Model.DefaultTab.Equals(NewsTabs.Tulsipeeth))
               { %>
            <% Html.RenderPartial("NewsTab", Model.TulsipeethNews);%>
            <% }
               else
               { %>
            <% Html.RenderPartial("NewsTab", Model.MediaNews); %>
            <%} %>
        </div>
    </div>
</asp:Content>
