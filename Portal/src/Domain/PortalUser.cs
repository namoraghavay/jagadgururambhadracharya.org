using System;

namespace guruji.Domain
{
    public class PortalUser : BaseEntity
    {
        public virtual string Email { get; set; }
        public virtual Password Password { get; set; }
        public virtual string FirstName { get; set; }
        public virtual string MiddleName { get; set; }
        public virtual string LastName { get; set; }
        public virtual Int32 SuccessfullLogins { get; set; }
        public virtual DateTime LastLoginDate { get; set; }
        protected internal virtual string RoleDb { get; set; }
        protected internal virtual string StatusDb { get; set; }

        public virtual UserStatus Status
        {
            get { return (UserStatus)Enum.Parse(typeof(UserStatus), StatusDb, true); }
            set { StatusDb = Enum.GetName(typeof(UserStatus), value); }
        }

        public virtual UserRole Role
        {
            get { return (UserRole)Enum.Parse(typeof(UserRole), RoleDb, true); }
            set { RoleDb = Enum.GetName(typeof (UserRole), value); }
        }

        public static PortalUser CreateGuestUser()
        {
            return new PortalUser
                       {
                           Role = UserRole.Guest
                       };
        }

        public virtual bool IsLoggedIn()
        {
            return (!Role.Equals(UserRole.Guest));
        }
    }

    public class FacebookUser : PortalUser
    {
        public string FacebookId { get; set; }
    }

    public enum UserStatus
    {
        Active,
        Inactive,
        Deleted
    }

    [Flags]
    public enum UserRole
    {
        Guest = 0,
        General = 1,
        Admin = 2,
        Facebook = 4
    }
}
