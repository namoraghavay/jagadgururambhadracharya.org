using System.Web.Mvc;
using guruji.Domain;
using guruji.ViewModels;

namespace guruji.Controllers
{
    public class GalleryController : BaseController
    {
        public ActionResult ViewPictureGallery()
        {
            var gallery = new PictureGallery(Server.MapPath("/ViewContent/gallery"));
            return View("Gallery", new PictureGalleryViewModel(GetSelectedAlbum(), gallery.AlbumsFolders));
        }

        public ActionResult ViewVideoGallery()
        {
            var gallery = Gallery.ConstructGallery(System.IO.File.ReadAllText(Server.MapPath("/") + "/ViewContent/videos/gallery.xml"));
            return View("Videos", new VideoGalleryViewModel(GetSelectedAlbum(), gallery.Albums));
        }

        private string GetSelectedAlbum()
        {
            var pathSplit = Request.Url.AbsolutePath.Split('/');
            return pathSplit[pathSplit.Length - 1];
        }
    }
}
