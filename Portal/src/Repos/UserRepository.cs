using guruji.Domain;
using NHibernate;

namespace guruji.Repos
{
    public class UserRepository : Repository, IUserRepository
    {
        protected UserRepository(ISessionFactory sessionFactory) : base(sessionFactory)
        {
        }

        public PortalUser LoadUser(string emailId)
        {
            return RunNamedQuery<PortalUser>("load.by.email", "email", emailId);
        }

        public void DeleteUser(string emailId)
        {
            var user = LoadUser(emailId);
            Delete(user);
        }

        public void DisableUser(string emailId)
        {
            var user = LoadUser(emailId);
            user.Status = UserStatus.Deleted;
            SaveOrUpdate(user);
        }
    }

    public interface IUserRepository : IRepository
    {
        void DeleteUser(string emailId);
        PortalUser LoadUser(string emailAddress);
        void DisableUser(string emailId);
    }
}
