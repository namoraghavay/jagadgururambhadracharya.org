<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%@ Import Namespace="guruji.ViewModels"%>
<div class="section">
    <h3>
        Know About Guruji</h3>
    <img src="/ViewContent/images/events/event1.jpg" width="220" height="75" class="section_img" />
    <p>
        The one Lord of the universe, Śrī Rāma, wished him not to see the horrors of Kaliyuga,
        but regale in the sight of mother Sītā and Lord Rāma through divine internal vision;
        the very same vision with which Arjuna and Sañjaya saw the universal form of the
        Lord in the battlefield of Kurukṣetra. At the age of two months...
    </p>
    <div class="controls">
        <a href="<%=Url.RouteUrl(Enum.GetName(typeof(RouteNames), RouteNames.Biography)) %>">Read More ></a>
    </div>
</div>
