<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%@ Import Namespace="guruji.Domain" %>
<%
    var sessionUser = (PortalUser)HttpContext.Current.Session["user"];
    var isLoggedIn = sessionUser.IsLoggedIn();
%>

<div class="login_box">
    <div class="login_details">
    <ul>
        <li>
            <label for="1"></label><input type="text" id="1" name="" />
        </li>
        <li>
            <label for="1"></label><input type="text" id="1" name="" />
        </li>
        <li>
            <label for="1"></label><input type="text" id="1" name="" />
        </li>
    </ul>
    </div>
    <ul>
        <% if (!isLoggedIn) { %>
            <a href="#" class="login">Login</a>
        <%} else { %>
            <a href="Authentcation/logout" class="logout">Logout</a>
        <%} %>
    </ul>
    
</div>
