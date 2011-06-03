using System;
using guruji.Common;

namespace guruji.Domain
{
    public class Event : BaseEntity
    {
        public virtual string Title { get; set; }
        protected internal virtual char IsKathaDb { get; set; }
        protected internal virtual string EventContentXml { get; set; }
        public virtual DateTime EventBeginDate { get; set; }
        public virtual DateTime EventEndDate { get; set; }
        protected internal virtual string TelecastContentXml { get; set; }
        public virtual DateTime TelecastBeginDate { get; set; }
        public virtual DateTime TelecastEndDate { get; set; }
        protected internal virtual char ImportanceDb { get; set; }

        public virtual bool IsKatha
        {
            get { return IsKathaDb == 'Y'; }
            set { IsKathaDb = value ? 'Y' : 'N'; }
        }

        public virtual Importance Importance
        {
            get { return (Importance) Enum.Parse(typeof (Importance), ImportanceDb.ToString(), true); }
            set { ImportanceDb = Enum.GetName(typeof(Importance), value).ToCharArray()[0]; }
        }

        public virtual EventContent EventContent
        {
            get { return EventContentXml == null ? null : new Serializer().Deserialize<EventContent>(EventContentXml); }
            set { EventContentXml = new Serializer().Serialize(value); }
        }

        public virtual TelecastContent TelecastContent
        {
            get { return TelecastContentXml == null ? null: new Serializer().Deserialize<TelecastContent>(TelecastContentXml); }
            set { TelecastContentXml = new Serializer().Serialize(value); }
        }
    }

    public enum Importance
    {
        H, M, L, A
    }
}
