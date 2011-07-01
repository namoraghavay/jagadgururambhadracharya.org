using System.Collections.Generic;
using System.Linq;
using System.Web;
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

        private Dictionary<int, string> AlbumDictionary
        {
            get
            {
                var albumDictionary = new Dictionary<int, string>();
                for (int index = 0; index < Albums.Count; index++)
                {
                    albumDictionary.Add(index + 1, Albums[index].Name);
                }
                return albumDictionary;
            }
        }

        public int StartCarouselIndex
        {
            get
            {
                return AlbumDictionary.Where(x => x.Value == HttpUtility.UrlDecode(SelectedAlbum.Name)).FirstOrDefault().Key;
            }
        }
    }
}