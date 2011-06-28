<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<HtmlPageViewModel>" %>

<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="script_content" ContentPlaceHolderID="Javascript" runat="server">

    <script type="text/javascript" src="/ViewContent/js/jquery.tools.min.js"></script>

    <title>
        <%=Model.BrowserTitle %></title>
</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <%=Model.Html.ToString() %>
</asp:Content>
