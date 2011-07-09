<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage" %>

<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="script_content" ContentPlaceHolderID="Javascript" runat="server">
    <title>
        Rambhadracharya - Downloads</title>
</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
<div class="featured_img">
    <img alt="Biography of Rambhadracharya" src="https://lh4.googleusercontent.com/-RTECprFZHUU/TeelT9tFzuI/AAAAAAAAACA/r-NrflYdJOg/literature_featured.jpg" />
</div>
<div class="main_content">
    <p class="page_heading">
        Downloads</p>
        
    <div class="left_box">
        <ul>
            <li class="download">
                <p>Bhavarth Bodhini, Hindi (Shri Ramcharitmanas Tika)</p>
                <a target="_blank" href="/ViewContent/pdfs/BhavarthBodhini.pdf" class="download_link"> [3.4 Mb]</a>
            </li>
        </ul>
    </div>    
    <div class="right_box"></div>    
</div>    
</asp:Content>