using System.Collections.Generic;
using guruji.Domain;

namespace guruji.ViewModels
{
    public class VideoGalleryViewModel
    {
        public VideoGalleryViewModel(string selectedAlbum, List<Album> albums)
        {
            SelectedAlbum = albums.Find(x => x.Name == selectedAlbum);
            Albums = albums;
        }

        public List<Album> Albums { get; private set; }

        public Album SelectedAlbum { get; private set; }
    }
}