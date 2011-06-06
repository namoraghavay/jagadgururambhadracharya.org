<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<NewsItem>" %>
<%@ Import Namespace="guruji.ViewServices" %>
<%@ Import Namespace="guruji.Domain" %>
<%@ Import Namespace="guruji.ViewModels" %>
<div class="section">
    <h3>
        News Column</h3>
    <img alt="pratibha_patil" src="/ViewContent/images/news/with_pratibha.png" width="220"
        height="75" class="section_img" />
    <div>
        <p>
            <strong>
                <%=Model.Title %></strong></p>
        <p>
            Dated: <strong>
                <%=Model.NewsDate.ToString(Config.DatePattern)%></strong></p>
        <p>
            <%=Model.NewsContent.Teaser %></p>
    </div>
    <div class="controls">
        <a href="<%=Url.RouteUrl(Enum.GetName(typeof(RouteNames), RouteNames.TulsipeethNews)) %>">Read further ></a>
    </div>
</div>
