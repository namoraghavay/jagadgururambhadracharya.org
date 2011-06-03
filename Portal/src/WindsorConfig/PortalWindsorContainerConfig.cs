using System.Collections.Generic;
using System.Reflection;
using System.Web.Mvc;
using Castle.Core;
using Castle.MicroKernel.Registration;
using Castle.Windsor;
using guruji.Common;
using guruji.Controllers;
using guruji.Repos;
using guruji.Services;
using guruji.ViewServices;

namespace guruji.WindsorConfig
{
    public class PortalWindsorContainerConfig
    {
        public static WindsorContainer container = WindsorContainerFactory.Container;

        public PortalWindsorContainerConfig()
        {
            Configure();
        }

        public WindsorContainer Container
        {
            get { return container; }
        }

        public void Configure()
        {
            NHibernateFacility.Configure(Container, new List<string> { "guruji" });
            Container.AddComponentLifeStyle<IPortalSession, PortalSession>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<IContentService, ContentService>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<IRepository, Repository>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<IUserRepository, UserRepository>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<IProfileService, ProfileService>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<IUserRoleRepository, UserRoleRepository>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<IEventRepository, EventRepository>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<INewsItemRepository, NewsItemRepository>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<ILoginHandler, LoginHandler>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<Config, Config>(LifestyleType.Singleton);
            var controllers = AllTypes.Of<Controller>().FromAssembly(Assembly.GetExecutingAssembly());
            Container.Register(controllers.Configure(c => c.LifeStyle.Transient.Named(c.Implementation.Name.ToLower())));
            Container.AddComponentLifeStyle<IFileService, FileService>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<IControllerFileService, ControllerFileService>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<IViewLocationCache, DefaultViewLocationCache>(LifestyleType.Singleton);
            Container.AddComponentLifeStyle<IViewEngine, PortalViewEngine>(LifestyleType.Singleton);
        }
    }
}