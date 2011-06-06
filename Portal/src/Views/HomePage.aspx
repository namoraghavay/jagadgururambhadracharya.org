<%@ Page Language="C#" MasterPageFile="~/Views/Masters/LandingPage.Master" Inherits="guruji.PortalViewPage<HomePageViewModel>" %>

<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="Title" ContentPlaceHolderID="LandingPageContainer" runat="server">
    <div class="main_content">
        <% Html.RenderPartial("TickerMarquee", Model.Ticker); %>
        <div class="section_cont">
            <%Html.RenderPartial("AboutGurujiTeaser"); %>
            <%Html.RenderPartial("EventsTeaser", Model.UpcomingEvent); %>
            <%Html.RenderPartial("JrhuTeaser"); %>
            <%Html.RenderPartial("NewsTeaser", Model.LatestNews); %>
        </div>
    </div>
</asp:Content>
