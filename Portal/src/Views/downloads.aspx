<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage" %>

<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="script_content" ContentPlaceHolderID="Javascript" runat="server">
    <title>Rambhadracharya - Downloads</title>
</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <div class="featured_img">
        <img alt="Biography of Rambhadracharya" src="https://lh4.googleusercontent.com/-RTECprFZHUU/TeelT9tFzuI/AAAAAAAAACA/r-NrflYdJOg/literature_featured.jpg" />
    </div>
    <div class="main_content">
        <p class="page_heading">
            Downloads</p>
        <div class="left_box">
            <h3>
                Books Publications</h3>
            <ul>
                <li class="download">
                    <p>
                        Bhavarth Bodhini, Hindi (Shri Ramcharitmanas Tika)</p>
                    <a target="_blank" href="/ViewContent/pdfs/Jagadguru Rambhadracharya - Ramacaritamanasa Bhavarthabodhini.pdf"
                        class="download_link">[6.21 Mb]</a> </li>
            </ul>
        </div>
        <div class="right_box">
            <h3>
                Other Publications</h3>
            <ul>
                <li class="download">
                    <p>
                        Authentic Biography of Goswami Tulsidas ji</p>
                    <a target="_blank" href="/ViewContent/pdfs/Jagadguru Rambhadracharya - Biography of Goswami Tulsidas.pdf"
                        class="download_link">[84 Kb]</a> </li>
                <li class="download">
                    <p>
                        Hanuman Chalisa (Shuddh Path)</p>
                    <a target="_blank" href="/ViewContent/pdfs/Jagadguru Rambhadracharya - Hanuman Chalisa.pdf"
                        class="download_link">[112 Kb]</a> </li>
                <li class="download">
                    <p>
                        Shree Ramcharitmanas Aarti (By Guruji)</p> 
                    <a target="_blank" href="/ViewContent/pdfs/Jagadguru Rambhadracharya - Ramacaritamanasa Bhavarthabodhini.pdf"
                        class="download_link">[98 Kb]</a> </li>
            </ul>
        </div>
    </div>
</asp:Content>
