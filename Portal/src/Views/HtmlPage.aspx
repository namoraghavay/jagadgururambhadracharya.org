<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<object>" %>

<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="script_content" ContentPlaceHolderID="Javascript" runat="server">

    <script type="text/javascript" src="/ViewContent/js/jquery.tools.min.js"></script>

</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <%=Model.ToString() %>
</asp:Content>
