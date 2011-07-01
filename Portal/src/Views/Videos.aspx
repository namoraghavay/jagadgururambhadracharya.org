<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<VideoGalleryViewModel>" %>
<%@ Import Namespace="guruji.Domain"%>

<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="head_content" ContentPlaceHolderID="HeadIncludes" runat="server">
    <link rel="stylesheet" type="text/css" href="/ViewContent/css/skin.css" />

    <script type="text/javascript">
        document.write('<style>.noscript { display: none; }</style>');
    </script>
    
    <title>Rambhadracharya - Multimedia Videos</title>

</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <div class="main_content">
        <div id="album_carousel">
            <ul id="mycarousel" class="jcarousel-skin-tango">
                <%
                    var albums = Model.Albums;
                    for (int index = 0; index < albums.Count; index++)
                    {
                        var album = albums[index];
                %>
                <li class="jcarousel-item-<%=index + 1 %>">
                    <div class="carousel-item-container">
                        <div id="album_image_<%= index + 1  %>" class="carousalimg">
                            <a class="album_link" href="/videos/<%=album.Name %>?id=1">
                                <img src="/ViewContent/videos/<%=album.Name %>.jpg" alt="<%=album.Title %>" class="carousel_item <%=(Model.SelectedAlbum.Name == album.Name) ? "carousel_selected" : "" %>" />
                                    <%=album.Title %>
                            </a>
                        </div>
                    </div>
                </li>
                <%
                    } %>
            </ul>
        </div>
        <div class="video_playlist">
            <ul>
                <% 
                    var Id = Request.QueryString.Get("id");
                    
                    foreach (var video in Model.SelectedAlbum.Videos) {
                    string selectedVideoUrl = "/videos/" + Model.SelectedAlbum.Name + "?id=" + video.Id;
                %>
                    <li class="<%=(Id == video.Id) ? "video_selected" : "" %>">
                        <a class="<%=(Id == video.Id) ? "video_selected" : "" %>" href="<%=selectedVideoUrl %>"><%=video.Title %></a>
                    </li>
                <% } %>
            </ul>
        </div>
        <div class="youtube_iframes">
            <%
               var selectedVideo = (Id == null) ? Model.SelectedAlbum.Videos.First() : Model.SelectedAlbum.Videos.Find(x => x.Id == Id);
            %>
                <iframe <%=selectedVideo.Iframe %>></iframe>
        </div>

        <script type="text/javascript">
            jQuery(document).ready(function($) {
                jQuery('#mycarousel').jcarousel({
                start: <%=Model.StartCarouselIndex %>    
            });
        });
		</script>

    </div>
</asp:Content>
