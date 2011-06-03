using System;
using System.Collections.Generic;
using guruji.Common;

namespace guruji.Domain
{
    [Serializable]
    public class Gallery
    {
        public List<Album> Albums { get; set; }

        public static Gallery ConstructGallery(string albumXml)
        {
            return new Serializer().Deserialize<Gallery>(albumXml); 
        }
    }

    [Serializable]
    public class Album
    {
        public string Name { get; set; }
        public string Title { get; set; }
        public string LandingImage { get; set; }
        public string Description { get; set; }
        public List<Image> Images { get; set; }
        public List<Video> Videos { get; set; }
    }

    [Serializable]
    public class Image
    {
        public string Name { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }

    [Serializable]
    public class Video
    {
        public string Iframe { get; set; }
        public string Title { get; set; }
        public string Id { get; set; }
    }
}
