<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<List<NewsItem>>" %>
<%@ Import Namespace="System.Collections.Generic"%>
<%@ Import Namespace="guruji.ViewServices" %>
<%@ Import Namespace="guruji.Domain" %>
<% for (int i = 0; i < Model.Count; i++)
   {
       var news = Model[i]; %>
<div class="tab_content">
    <div class="teaser_content <%= i==0 ? "on":"" %>">
        <%=news.Title %>
        on 
        <%=news.NewsDate.ToString(Config.DatePattern)%>
    </div>
    
    <div class="news detailed_content <%= i==0 ? "":"hide" %>">
        <%if (!string.IsNullOrEmpty(news.NewsContent.SourceCuttingImage))
          { %>
        <img alt="<%=news.Title %>" src="/ViewContent/images/news/<%=news.NewsContent.SourceCuttingImage %>" />
        <%} %>
        <%=news.NewsContent.DescriptionHtml %>
    </div>
</div>
<% } %>

<script type="text/javascript">
    $(document).ready(function() {
        $(".teaser_content").click(function() {
            $(this).next().toggle(500);
            $('html, body').animate({
                scrollTop: $(this).next().offset().top
            });
            ($(this).hasClass("on")) ? $(this).removeClass("on") : $(this).addClass("on");
        });
    })
</script>

