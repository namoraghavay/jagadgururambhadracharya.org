<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<List<NewsItem>>" %>
<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="guruji.ViewServices" %>
<%@ Import Namespace="guruji.Domain" %>
<div id="news_accordion" class="tab_content">
    <% foreach (var newsItem in Model)
       {
    %>
    <a class="teaser_content">
        <%=newsItem.Title %>
        on
        <%=newsItem.NewsDate.ToString(Config.DatePattern)%>
    </a>
    <div class="news detailed_content">
        <%if (!string.IsNullOrEmpty(newsItem.NewsContent.SourceCuttingImage))
          { %>
        <img alt="<%=newsItem.Title %>" src="/ViewContent/images/news/<%=newsItem.NewsContent.SourceCuttingImage %>" />
        <%} %>
        <%=newsItem.NewsContent.DescriptionHtml %>
    </div>
    <% } %>
</div>

<script type="text/javascript">
    $(document).ready(function() {
        jQuery('#news_accordion').accordion({
            header: '.teaser_content',
            autoheight: false
        });
    });
</script>

