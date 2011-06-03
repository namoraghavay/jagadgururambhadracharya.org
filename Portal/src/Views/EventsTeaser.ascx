<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<Event>" %>
<%@ Import Namespace="guruji.ViewServices" %>
<%@ Import Namespace="guruji.Domain" %>
<%@ Import Namespace="guruji.ViewModels" %>
<%if (Model != null)
  { %>
<div class="section">
    <h3>
        Upcoming Kathas</h3>
    <img src="/ViewContent/images/events/katha.png" width="220" height="75" class="section_img" />
    <div>
        <p>
            <strong>
                <%=Model.Title %></strong></p>
        <p>
            Starting on: <strong>
                <%=Model.EventBeginDate.ToString(Config.DatePattern)%></strong></p>
        <p>
            Till: <strong>
                <%=Model.EventEndDate.ToString(Config.DatePattern)%></strong></p>
        <p>
            Contact:
            <strong><%=Model.EventContent.ContactDetail.First().Name %></strong>
        </p>
        <p>
            Phone:
            <strong><%=Model.EventContent.ContactDetail.First().PhoneNumber %></strong></p>
        <p>
            Email: <a href="mailto:<%=Model.EventContent.ContactDetail.First().Email %>"><%=Model.EventContent.ContactDetail.First().Email %> </a>
        </p>
        <p>
            <%=Model.EventContent.Teaser %></p>
    </div>
    <div class="controls">
        <a href="<%=Url.RouteUrl(Enum.GetName(typeof(RouteNames), RouteNames.KathasSchedule)) %>">More Details ></a>
    </div>
</div>
<%} %>
