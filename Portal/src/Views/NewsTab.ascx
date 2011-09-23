<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<List<NewsItem>>" %>
<%@ Import Namespace="System.Collections.Generic"%>
<%@ Import Namespace="guruji.ViewServices" %>
<%@ Import Namespace="guruji.Domain" %>
<div id="news_accordion" class="tab_content">
<% for (int i = 0; i < Model.Count; i++)
   {
       var news = Model[i]; %>
    <a class="teaser_content">
        <%=news.Title %>
        on 
        <%=news.NewsDate.ToString(Config.DatePattern)%>
    </a>
    
    <div class="news detailed_content">
        <%if (!string.IsNullOrEmpty(news.NewsContent.SourceCuttingImage))
          { %>
        <img alt="<%=news.Title %>" src="/ViewContent/images/news/<%=news.NewsContent.SourceCuttingImage %>" />
        <%} %>
        <%=news.NewsContent.DescriptionHtml %>
    </div>
<% } %>
</div>

<script type="text/javascript">
    $(document).ready(function() {
        jQuery('#news_accordion').accordion({
            autoheight: false 
        });
    })
</script>

