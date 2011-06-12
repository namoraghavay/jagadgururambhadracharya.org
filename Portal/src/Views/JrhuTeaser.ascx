<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%@ Import Namespace="guruji.ViewModels"%>
<%@ Import Namespace="guruji.ViewServices" %>
<div class="section mar_right20">
    <h3>
        J.R. Handicapped University</h3>
    <img alt="" src="/ViewContent/images/events/univ.png" width="220" height="75" class="section_img" />
    <p>
		The first university of its king in India and the world; offering graduate, 
		post-graduate and doctoral degrees exclusively to disabled students. Located at 
		Chitrakuta, Uttar Pradesh, JRHU is a journey from disabled to differently-abled. 
		Its noble vision is the greater participation of disabled students in higher education, 
		and to prepare students od great character ... 
    </p>
    <p>
        Jagadguru Rambhadracharya Handicapped University (JRHU) is the first university
        of its kind not only in India but also in the whole world. The university offers
        graduate, post-graduate and doctoral courses exclusively to disabled students. It
        was founded by Jagadguru Rambhadracharya in 2001, and established by the Government
        of Uttar Pradesh by the JRHU Act which also declared Jagadguru Rambhadracharya as
        the life-long chancellor of the university...
    </p>
    <div class="controls">
        <a href="<%=Url.RouteUrl(Enum.GetName(typeof(RouteNames), RouteNames.JRHU)) %>">
            Read More ></a>
    </div>
</div>
