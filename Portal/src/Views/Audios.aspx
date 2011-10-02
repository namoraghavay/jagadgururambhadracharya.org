<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<AlbumGalleryViewModel>" %>

<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="guruji.Domain" %>
<%@ Import Namespace="guruji.ViewModels" %>
<%@ Import Namespace="Castle.Core" %>
<%@ Import Namespace="System.Collections.Generic" %>
<asp:Content ID="head_content" ContentPlaceHolderID="HeadIncludes" runat="server">
    <link rel="stylesheet" type="text/css" href="/ViewContent/css/skin.css" />

    <script type="text/javascript">
        document.write('<style>.noscript { display: none; }</style>');
    </script>

    <title>Rambhadracharya - Audio Bhajans</title>
</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <div class="main_content">
        <div id="album_carousel">
            <ul id="mycarousel" class="jcarousel-skin-tango">
                <%
                    var albums = Model.AlbumFolders;
                    const string GALLERY_PATH = "/ViewContent/audio_gallery/";

                    for (int index = 0; index < albums.Length; index++)
                    {
                        var album = albums[index];
                        var imageFolder = GALLERY_PATH + album;
                %>
                <li class="jcarousel-item-<%=index + 1 %>">
                    <div class="carousel-item-container">
                        <div id="album_image_<%= index + 1  %>" class="carousalimg  <%=(Model.SelectedAlbumFolder == Server.UrlPathEncode(album.Name)) ? "carousel_selected" : "" %>">
                            <a class="album_link" href="/audios/<%=Server.UrlPathEncode(album.Name) %>">
                                <%
                                    var files = Directory.GetFiles(Server.MapPath(imageFolder));
                                    string albumThumb = files.Where(x => x.Split('\\').Last().StartsWith("thumb.")).FirstOrDefault();
                                %>
                                <img src="<%=imageFolder %>/<%=albumThumb.Split(Convert.ToChar("\\")).Last() %>"
                                    alt="" class="carousel_item" />
                                <%=album.Name %>
                            </a>
                        </div>
                    </div>
                </li>
                <%
                    } %>
            </ul>
        </div>
        <div id="gallery_container">
            <div>
                <p class="page_heading">
                    <%=Server.UrlDecode(Model.SelectedAlbumFolder) %></p>
            </div>
            <%
                var albumPath = Server.MapPath(GALLERY_PATH + Model.SelectedAlbumFolder);
                string[] audios = Directory.GetFiles(Server.UrlDecode(albumPath), "*.mp3");
                List<string> audioFileNames = audios.Select(x => x.Split('\\').Last()).ToList();
                foreach (var file in audioFileNames)
                {
            %>
            <div class="audio_player">
                <div class="file_name">
                    <%=file.Substring(3) %>
                </div>
                <div class="download">
                    <a class="download_link" href="/ViewContent/audio_gallery/<%=Model.SelectedAlbumFolder %>/<%=file %>">Download</a>
                </div>
                <div>
                    <%Html.RenderPartial("AudioPlayer", new AudioPlayerViewModel { JwPlayerId = file.Split('.').FirstOrDefault(), SelectedAlbum = Model.SelectedAlbumFolder }); %>
                </div>
            </div>
            <%
                } %>
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
