using System.Web.Mvc;
using guruji.Domain;
using guruji.ViewModels;

namespace guruji.Controllers
{
    public class GalleryController : BaseController
    {
        public ActionResult ViewPictureGallery()
        {
            return ViewFor("/ViewContent/gallery/gallery.xml", "Gallery");
        }

        public ActionResult ViewVideoGallery()
        {
            return ViewFor("/ViewContent/videos/gallery.xml", "Videos");
        }

        private ActionResult ViewFor(string galleryXmlPath, string view)
        {
            var split = Request.Url.AbsolutePath.Split('/');
            var selectedAlbum = split[split.Length - 1];
            object albumXml = System.IO.File.ReadAllText(Server.MapPath("/") + galleryXmlPath);
            var gallery = Gallery.ConstructGallery(albumXml.ToString());
            var galleryViewModel = new GalleryViewModel(selectedAlbum, gallery);
            return View(view, galleryViewModel);
        }
    }
}
