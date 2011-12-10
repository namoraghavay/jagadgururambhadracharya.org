<%@ Page Language="C#" MasterPageFile="~/Views/Masters/Site.Master" Inherits="guruji.PortalViewPage<AlbumGalleryViewModel>" %>

<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="guruji.Domain" %>
<%@ Import Namespace="guruji.ViewModels" %>
<asp:Content ID="head_content" ContentPlaceHolderID="HeadIncludes" runat="server">
    <link rel="stylesheet" href="/ViewContent/css/galleriffic-2.css" type="text/css" />
    <link rel="stylesheet" type="text/css" href="/ViewContent/css/skin.css" />
    <script type="text/javascript" src="/ViewContent/js/jquery.opacityrollover.js"></script>

    <script type="text/javascript">
        document.write('<style>.noscript { display: none; }</style>');
    </script>

    <title>Rambhadracharya - Photo Gallery</title>
</asp:Content>
<asp:Content ID="main_content" ContentPlaceHolderID="MainContentContainer" runat="server">
    <div class="main_content">
        <div id="album_carousel">
            <ul id="mycarousel" class="jcarousel-skin-tango">
                <%
                    var albums = Model.AlbumFolders;
                    const string GALLERY_PATH = "/ViewContent/photo_gallery/";
                    
                    for (int index = 0; index < albums.Length; index++)
                    {
                        var album = albums[index];
                        var landingImageFolder = GALLERY_PATH + album + "/thumbs";
                %>
                <li class="jcarousel-item-<%=index + 1 %>">
                    <div class="carousel-item-container">
                        <div id="album_image_<%= index + 1  %>" class="carousalimg  <%=(Model.SelectedAlbumFolder == Server.UrlPathEncode(album.Name)) ? "carousel_selected" : "" %>">
                            <a class="album_link" href="/photogallery/<%=Server.UrlPathEncode(album.Name) %>">
                                <%
                                    var images = Directory.GetFiles(Server.MapPath(landingImageFolder));
                                    string albumThumb = images.Where(x => x.Split('\\').Last().StartsWith("album_thumb")).FirstOrDefault();
                                %>
                                <img src="<%=landingImageFolder %>/<%=albumThumb.Split(Convert.ToChar("\\")).Last() %>"
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
            <p class="page_heading">
                <%=Server.UrlDecode(Model.SelectedAlbumFolder) %></p>
            <div id="gallery" class="content">
                <div id="controls" class="controls">
                </div>
                <div class="slideshow-container">
                    <div id="loading" class="loader">
                    </div>
                    <div id="slideshow" class="slideshow">
                    </div>
                </div>
                <div id="caption" class="caption-container">
                </div>
            </div>
            <div id="thumbs" class="navigation">
                <ul class="thumbs noscript">
                    <%
                        var albumPath = Server.MapPath(GALLERY_PATH + Model.SelectedAlbumFolder + "/thumbs");
                        var thumbsFolder1 = GALLERY_PATH + Model.SelectedAlbumFolder + "/thumbs";
                        var imagesFolder = GALLERY_PATH + Model.SelectedAlbumFolder + "/images";
                        var originalsFolder = GALLERY_PATH + Model.SelectedAlbumFolder + "/originals";
                        foreach (var imagePath in Directory.GetFiles(Server.UrlDecode(albumPath), "*.jpg"))
                        {
                            var imageName = imagePath.Split('\\').Last();
                    %>
                    <li><a class="thumb" name="leaf" href="<%=imagesFolder %>/<%=imageName.Replace("album_thumb", "") %>">
                        <img src="<%= thumbsFolder1 %>/<%=imageName %>" alt="<%=imageName %>" />
                    </a>
                        <div class="caption">
                            <div class="image-title">
                                <%=imageName.Replace("album_thumb", "").Split('.').First()%></div>
                            <div class="download">
                                <a href="<%=originalsFolder %>/<%=imageName.Replace("album_thumb", "") %>" target="_blank">
                                    Download Original</a>
                            </div>
                        </div>
                    </li>
                    <% } %>
                </ul>
            </div>
            <div style="clear: both;">
            </div>
        </div>
    </div>

    <script type="text/javascript">
        jQuery(document).ready(function($) {
            // We only want these styles applied when javascript is enabled
            $('div.navigation').css({ 'width': '200px', 'float': 'left' });
            $('div.content').css('display', 'block');

            // Initially set opacity on thumbs and add
            // additional styling for hover effect on thumbs
            var onMouseOutOpacity = 0.67;
            $('#thumbs ul.thumbs li').opacityrollover({
                mouseOutOpacity: onMouseOutOpacity,
                mouseOverOpacity: 1.0,
                fadeSpeed: 'fast',
                exemptionSelector: '.selected'
            });

            // Initialize Advanced Galleriffic Gallery
            var gallery = $('#thumbs').galleriffic({
                delay: 2500,
                numThumbs: 10,
                preloadAhead: 10,
                enableTopPager: true,
                enableBottomPager: true,
                maxPagesToShow: 7,
                imageContainerSel: '#slideshow',
                controlsContainerSel: '#controls',
                captionContainerSel: '#caption',
                loadingContainerSel: '#loading',
                renderSSControls: true,
                renderNavControls: true,
                playLinkText: 'Play',
                pauseLinkText: 'Pause',
                prevLinkText: '&lsaquo;&lsaquo; Previous',
                nextLinkText: 'Next &rsaquo;&rsaquo;',
                nextPageLinkText: 'Next &rsaquo;',
                prevPageLinkText: '&lsaquo; Prev',
                enableHistory: false,
                autoStart: false,
                syncTransitions: true,
                defaultTransitionDuration: 900,
                onSlideChange: function(prevIndex, nextIndex) {
                    // 'this' refers to the gallery, which is an extension of $('#thumbs')
                    this.find('ul.thumbs').children()
							.eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
							.eq(nextIndex).fadeTo('fast', 1.0);
                },
                onPageTransitionOut: function(callback) {
                    this.fadeTo('fast', 0.0, callback);
                },
                onPageTransitionIn: function() {
                    this.fadeTo('fast', 1.0);
                }
            });
            jQuery('#mycarousel').jcarousel({
                start: <%=Model.StartCarouselIndex %>
        });

    });
	</script>

</asp:Content>
