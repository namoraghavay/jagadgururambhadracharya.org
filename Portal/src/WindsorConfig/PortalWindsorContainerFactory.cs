using Castle.Windsor;

namespace guruji.WindsorConfig
{
    public static class PortalWindsorContainerFactory
    {
        private static readonly PortalWindsorContainerConfig Config;

        static PortalWindsorContainerFactory()
        {
            Config = new PortalWindsorContainerConfig();
        }

        public static WindsorContainer GetContainer()
        {
            return Config.Container;
        }
    }
}