<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<string>" %>
<div class="news_tickr">
    <marquee direction="left" scrollamount="3"><%=Model %></marquee>
</div>

<script type="text/javascript">
    $(document).ready(function() {
        $(".news_tickr").mouseover(function() {
            $("marquee").attr("scrollamount", 1);
        });
        $(".news_tickr").mouseout(function() {
            $("marquee").attr("scrollamount", 3);
        });
    });
</script>

