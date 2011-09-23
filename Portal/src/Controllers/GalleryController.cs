using System.IO;
using System.Web.Mvc;
using guruji.Domain;
using guruji.ViewModels;

namespace guruji.Controllers
{
    public class GalleryController : BaseController
    {
        public ActionResult ViewPictureGallery()
        {
            var pictureGallery = new AlbumGallery(Server.MapPath("/ViewContent/photo_gallery"));
            return View("Gallery", new AlbumGalleryViewModel(GetSelectedAlbum(), pictureGallery.AlbumsFolders));
        }

        public ActionResult ViewVideoGallery()
        {
            var gallery = Gallery.ConstructGallery(System.IO.File.ReadAllText(Server.MapPath("/") + "/ViewContent/videos/gallery.xml"));
            return View("Videos", new VideoGalleryViewModel(GetSelectedAlbum(), gallery.Albums));
        }

        public ActionResult ViewAudioGallery()
        {
            var audioGallery = new AlbumGallery(Server.MapPath("/ViewContent/audio_gallery"));
            return View("Audios", new AlbumGalleryViewModel(GetSelectedAlbum(), audioGallery.AlbumsFolders));
        }

        private string GetSelectedAlbum()
        {
            var pathSplit = Request.Url.AbsolutePath.Split('/');
            return pathSplit[pathSplit.Length - 1];
        }
    }
}
