using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace guruji.ViewModels
{
    public class AudioPlayerViewModel
    {
        public string JwPlayerId { get; set; }

        public string SelectedAlbum { get; set; }
    }

    public class AlbumGalleryViewModel
    {
        public AlbumGalleryViewModel(string selectedAlbumName, DirectoryInfo[] albumFolders)
        {
            AlbumFolders = albumFolders;
            SelectedAlbumFolder = selectedAlbumName;
        }

        public string SelectedAlbumFolder { get; private set; }

        public DirectoryInfo[] AlbumFolders { get; private set; }

        public int StartCarouselIndex
        {
            get
            {
                return AlbumDictionary.Where(x => x.Value == HttpUtility.UrlDecode(SelectedAlbumFolder)).FirstOrDefault().Key;
            }
        }

        private Dictionary<int, string> AlbumDictionary
        {
            get
            {
                var albumDictionary = new Dictionary<int, string>();
                for (int index = 0; index < AlbumFolders.Length; index++)
                {
                    albumDictionary.Add(index + 1, AlbumFolders[index].ToString());
                }
                return albumDictionary;
            }
        }
    }
}
