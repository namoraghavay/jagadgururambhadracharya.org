using System;
using guruji.Common;

namespace guruji.Domain
{
    public class NewsItem : BaseEntity
    {
        public virtual string Title { get; set; }
        protected internal virtual char ImportanceDb { get; set; }
        public virtual DateTime NewsDate { get; set; }
        protected internal virtual string NewsContentXml { get; set; }

        public virtual Importance Importance
        {
            get { return (Importance)Enum.Parse(typeof(Importance), ImportanceDb.ToString(), true); }
            set { ImportanceDb = Enum.GetName(typeof(Importance), value).ToCharArray()[0]; }
        }

        public virtual NewsContent NewsContent
        {
            get { return new Serializer().Deserialize<NewsContent>(NewsContentXml); }
            set { NewsContentXml = new Serializer().Serialize(value); }
        }
    }
}