<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<object>" %>

<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <%=Model.ToString() %>
</asp:Content>
