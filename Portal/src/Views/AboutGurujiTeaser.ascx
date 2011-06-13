<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%@ Import Namespace="guruji.ViewModels"%>
<div class="section">
    <h3>
        Know About Guruji</h3>
    <img src="/ViewContent/images/events/event1.jpg" width="220" height="75" class="section_img" />
    <p>
		A living legend - wihout physical eyesight since infancy, child prodigy, 
		all time gold-medalist, first Sanskrit commentator on Prasthānatrayī in 500 years, 
		founder and chancellor of a university for disabled, speaker of 22 languages, 
		prolific composer of 80+ works, a Guru with unparalleled knowledge and genius ... 
    </p>
    <div class="controls">
        <a href="<%=Url.RouteUrl(Enum.GetName(typeof(RouteNames), RouteNames.Biography)) %>">Read More ></a>
    </div>
</div>


