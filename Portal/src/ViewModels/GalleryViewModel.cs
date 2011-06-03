using guruji.Domain;

namespace guruji.ViewModels
{
    public class GalleryViewModel
    {
        public GalleryViewModel(string selectedAlbum, Gallery gallery)
        {
            SelectedAlbumName = selectedAlbum;
            Gallery = gallery;
            SelectedAlbum = Gallery.Albums.Find(x => x.Name == SelectedAlbumName);
        }

        public string SelectedAlbumName { get; private set; }

        public Gallery Gallery { get; private set; }

        public Album SelectedAlbum { get; private set; }
    }
}
