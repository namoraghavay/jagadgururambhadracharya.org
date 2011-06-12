<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%@ Import Namespace="guruji.ViewModels"%>
<%@ Import Namespace="guruji.ViewServices" %>
<div class="section mar_right20">
    <h3>
        J.R. Handicapped University</h3>
    <img alt="" src="/ViewContent/images/events/univ.png" width="220" height="75" class="section_img" />
    <p>
		The first university of its kind in India and the world which offers graduate, 
		post-graduate and doctoral degrees exclusively to disabled students. Located at 
		Chitrakuta, Uttar Pradesh, JRHU is a journey from disabled to differently-abled. 
		Its noble vision is the greater participation of the disabled in higher education, 
		and to prepare students of great character ... 
    </p>
    <div class="controls">
        <a href="<%=Url.RouteUrl(Enum.GetName(typeof(RouteNames), RouteNames.JRHU)) %>">
            Read More ></a>
    </div>
</div>
