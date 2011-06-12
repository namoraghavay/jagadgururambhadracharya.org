<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<HtmlPageViewModel>" %>

<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="script_content" ContentPlaceHolderID="Javascript" runat="server">

    <script type="text/javascript" src="/ViewContent/js/jquery.tools.min.js"></script>
    <%if (Model.PageName == "biography") {%>
        <title>Biography</title>        
    <%} else if (Model.PageName == "literatureHome") { %>
        <title>Guruji's Literature</title>
    <%} else if (Model.PageName == "awards") { %>
        <title>Awards and Prizes</title>        
    <%} else if (Model.PageName == "jrhu") {%>
        <title>JR Handicapped University</title>        
    <%} %>
</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <%=Model.Html.ToString() %>
</asp:Content>
