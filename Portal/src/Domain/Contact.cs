using System;

namespace guruji.Domain
{
    [Serializable]
    public class Contact
    {
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}