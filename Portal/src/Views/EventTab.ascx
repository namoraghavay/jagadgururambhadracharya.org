<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<List<Event>>" %>
<%@ Import Namespace="System.Collections.Generic"%>
<%@ Import Namespace="guruji.ViewServices" %>
<%@ Import Namespace="guruji.Domain" %>
<div id="events_accordion" class="basic" style="float: left;">
<% for (int i = 0; i < Model.Count; i++)
   {
       var katha = Model[i]; %>
    <a class="teaser_content">
        <%=katha.Title %>
        from
        <%=katha.EventBeginDate.ToString(Config.DatePattern)%>
        to
        <%=katha.EventEndDate.ToString(Config.DatePattern)%>
        at
        <%=katha.EventContent.Location %>
    </a>
    <div class="detailed_content">
        <div class="details">
            <ul>
                <li>From <strong>
                    <%=katha.EventBeginDate.ToString(Config.DatePattern)%></strong> To <strong> 
                        <%=katha.EventEndDate.ToString(Config.DatePattern)%></strong></li>
                <li>Time:
                    <strong><%=katha.EventBeginDate.ToShortTimeString()%></strong>
                    to
                    <strong><%=katha.EventEndDate.ToShortTimeString()%></strong></li>
                <li>Place:
                    <strong><%=katha.EventContent.Location %></strong></li></ul>
            <%if (katha.TelecastContent != null)
              { %>
            <div>
                <ul>
                    <li>
                        <strong><%= katha.TelecastContent.IsLive ? "Live" : "Recorded" %></strong>
                        telecast on:
                        <%=katha.TelecastContent.ChannelName%></li>
                    <% if (!katha.TelecastContent.IsLive)
                       { %>
                    <li>Telecast From:
                        <%=katha.TelecastBeginDate.ToString(Config.DatePattern)%></li>
                    <li>Telecast To:
                        <%=katha.TelecastEndDate.ToString(Config.DatePattern)%></li>
                    <li>Time:
                        <%=katha.TelecastBeginDate.ToShortTimeString()%>
                        to
                        <%=katha.TelecastEndDate.ToShortTimeString()%></li>
                    <% } %>
                </ul>
            </div>
            <%} %>
        </div>
        <div class="contact_cont">
            <h3>
                Contact:</h3>
            <div class="contact">
                <ul>
                    <%foreach (var contact in katha.EventContent.ContactDetail)
                      { %>
                    <li>
                        <%=contact.Name%> <span class="phone_number"><%=contact.PhoneNumber%></span> Email: <a href="mailto:<%=contact.Email ?? Config.WebmasterEmail %>"><%=contact.Email ?? Config.WebmasterEmail%></a></li>
                    <% } %>
                </ul>
            </div>
        </div>
        <p>
            <%=katha.EventContent.Descrption %></p>
    </div>
<% } %>
</div>

<script type="text/javascript">
    $(document).ready(function() {
        jQuery('#events_accordion').accordion({
            autoheight: false
        });
    })
</script>

