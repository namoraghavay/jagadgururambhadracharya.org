using System.Web.Mvc;
using guruji.Domain;
using guruji.Services;
using System.Linq;

namespace guruji.Controllers
{
    public class AuthenticationController : BaseController
    {
//        private readonly ILoginHandler loginHandler;

//        public AuthenticationController(ILoginHandler loginHandler)
//        {
//            this.loginHandler = loginHandler;
//        }

//        [AcceptVerbs(HttpVerbs.Post)]
//        public ActionResult Login(string email, string password, string returnUrl)
//        {
//            try
//            {
//                loginHandler.Login(email, password, true);
//            }
//            catch (UserNotAuthorizedException)
//            {
//                Response.StatusCode = 403;
//                return new ContentResult { Content = "Your Login or Password is incorrect." };
//            }
//
//            if (!string.IsNullOrEmpty(returnUrl)) return Redirect(returnUrl);
//            return new EmptyResult();
//        }

        public string FConnect()
        {
            var query = Request.Url.Query;
            new PortalSession().PortalUser = new FacebookUser{FacebookId = query.Split('&').First().Replace("?", ""), Role = UserRole.Facebook};
            return "done";
        }
    
        public void FLogout()
        {
            new PortalSession().PortalUser = PortalUser.CreateGuestUser();
        }
    
//        public ActionResult Logout(string returnUrl)
//        {
//            loginHandler.Logout();
//            return Redirect("default.aspx");
//        }
    }
}
