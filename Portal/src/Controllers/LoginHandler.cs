using System;
using System.Web;
using guruji.Domain;
using guruji.Services;
using MvcContrib;

namespace guruji.Controllers
{
    public interface ILoginHandler
    {
        void Login(string email, string password, bool keepMeSignedIn);
        void Logout();
    }

    public class LoginHandler : ILoginHandler
    {
        private readonly IProfileService profileService;
        private readonly IPortalSession session;

        private static readonly ILoginHandler instance = new LoginHandler();

        public static ILoginHandler Instance()
        {
            return instance;
        }

        private LoginHandler()
        {
            profileService = ProfileService.Instance();
            session = new PortalSession();
        }

        public void Login(string email, string password, bool keepMeSignedIn)
        {
            LoginAndMapUser(() => profileService.AuthenticateUser(email, new Password(password)));
        }

        protected virtual HttpContextBase GetHttpContext()
        {
            return new HttpContextProvider(HttpContext.Current).Context;
        }

        public void Logout()
        {
            session.PortalUser = PortalUser.CreateGuestUser();
        }

        private void LoginAndMapUser(Func<PortalUser> getUser)
        {
            session.PortalUser = getUser();
        }
    }
}