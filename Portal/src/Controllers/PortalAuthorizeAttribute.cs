using System;
using System.Web;
using System.Web.Mvc;
using guruji.Domain;

namespace guruji.Controllers
{
    public class PortalAuthorizeAttribute : AuthorizeAttribute
    {
        public new UserRole Roles;

        public PortalAuthorizeAttribute()
        {
            Order = 2;
        }

        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (httpContext == null)
                throw new ArgumentNullException("httpContext");
            return IsAuthorized((new PortalSession().PortalUser).Role);
        }

        public bool IsAuthorized(UserRole role)
        {
            return (Roles & role) == role;
        }

        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            base.HandleUnauthorizedRequest(filterContext);
            throw new UnauthorizedException();
        }
    }

    public class UnauthorizedException : HttpException
    {
        public UnauthorizedException() : base(401, "UnAuthorized")
        {
        }
    }
}