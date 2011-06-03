using guruji.Domain;
using NHibernate;

namespace guruji.Repos
{
    public class UserRoleRepository : Repository, IUserRoleRepository
    {
        public UserRoleRepository(ISessionFactory sessionFactory) : base(sessionFactory)
        {
        }

        public Role GetRoleById(int id)
        {
            return Load<Role>(id);
        }
    }

    public interface IUserRoleRepository : IRepository
    {
        Role GetRoleById(int id);
    }
}
