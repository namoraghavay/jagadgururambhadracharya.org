using System.Web.Mvc;
using guruji.Services;
using guruji.ViewServices;

namespace guruji.Controllers
{
    public class AuthenticationController : BaseController
    {
        private readonly ILoginHandler loginHandler;

        public AuthenticationController(Config config, ILoginHandler loginHandler) : base()
        {
            this.loginHandler = loginHandler;
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Login(string email, string password, string returnUrl)
        {
            try
            {
                loginHandler.Login(email, password, true);
            }
            catch (UserNotAuthorizedException)
            {
                Response.StatusCode = 403;
                return new ContentResult { Content = "Your Login or Password is incorrect." };
            }

            if (!string.IsNullOrEmpty(returnUrl)) return Redirect(returnUrl);
            return new EmptyResult();
        }
    
        public ActionResult Logout(string returnUrl)
        {
            loginHandler.Logout();
            return Redirect("default.aspx");
        }
    }
}
