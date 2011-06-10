using System.IO;

namespace guruji.ViewModels
{
    public class PictureGalleryViewModel
    {
        public PictureGalleryViewModel(string selectedAlbumName, DirectoryInfo[] albumFolders)
        {
            AlbumFolders = albumFolders;
            SelectedAlbumFolder = selectedAlbumName;
        }

        public string SelectedAlbumFolder { get; private set; }

        public DirectoryInfo[] AlbumFolders { get; private set; }
    }
}
