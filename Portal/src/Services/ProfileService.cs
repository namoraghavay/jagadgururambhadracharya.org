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

        public ProfileService(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
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
