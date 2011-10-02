using System;
using guruji.Domain;
using guruji.Repos;

namespace guruji.Services
{
    public interface IProfileService
    {
        PortalUser AuthenticateUser(string email, Password password);
    }

    public class ProfileService : IProfileService
    {
        private readonly IUserRepository userRepository;

        private static readonly IProfileService instance = new ProfileService(NHibernateSessionFactory.Instance());

        public static IProfileService Instance()
        {
            return instance;
        }

        private ProfileService(NHibernateSessionFactory repositoryFactory)
        {
            userRepository = repositoryFactory.UserRepository;
        }

        public PortalUser AuthenticateUser(string email, Password password)
        {
            PortalUser user;
            try
            {
                user = userRepository.LoadUser(email);
            }
            catch (Exception)
            {
                throw new UserNotAuthorizedException();
            }
            if (!password.Equals(user.Password))
                throw new UserNotAuthorizedException();
            return user;
        }
    }

    public class UserNotAuthorizedException : Exception
    {
    }
}
