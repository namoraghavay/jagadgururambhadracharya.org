using System;

namespace guruji.Domain
{
    [Serializable]
    public class TelecastContent
    {
        public bool IsLive { get; set; }
        public string ChannelName { get; set; }
    }
}