using System;
using System.Web.Mvc;
using System.Web.Routing;
using Castle.Windsor;

namespace guruji.WindsorConfig
{
    public class PortalWindsorControllerFactory : DefaultControllerFactory
    {
        private readonly WindsorContainer container;

        public PortalWindsorControllerFactory(WindsorContainer container)
        {
            this.container = container;
        }

        protected override IController GetControllerInstance(RequestContext requestContext, Type controllerType)
        {            
            if (controllerType == null)
            {
                return base.GetControllerInstance(requestContext,controllerType);
            }
            return container.Resolve(controllerType) as IController;
        }

        public override void ReleaseController(IController controller)
        {
            container.Release(controller);
        }
    }
}