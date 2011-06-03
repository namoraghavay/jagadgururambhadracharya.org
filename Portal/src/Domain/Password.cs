using System.Security.Cryptography;
using System.Text;

namespace guruji.Domain
{
    public class Password
    {
        public string EncryptedPassword { get; private set; }

        protected Password()
        {
        }

        public Password(string plainTextPassword)
        {
            EncryptedPassword = Encrypt(plainTextPassword);
        }

        private string Encrypt(string plainText)
        {
            var strHex = new StringBuilder();
            var MessageBytes = UnicodeEncoding.Default.GetBytes(plainText);
            var sha512 = new SHA512Managed();
            var computedHash = sha512.ComputeHash(MessageBytes);
            foreach (var b in computedHash) strHex.AppendFormat("{0:x2}", b);
            return strHex.ToString();
        }

        public bool Equals(Password other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.EncryptedPassword, EncryptedPassword);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(Password)) return false;
            return Equals((Password)obj);
        }

        public override int GetHashCode()
        {
            return EncryptedPassword.GetHashCode();
        }
    }
}