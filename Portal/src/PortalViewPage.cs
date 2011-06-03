using System.Web.Mvc;
using guruji.HtmlExtensions;

namespace guruji
{
    public class PortalViewPage<T> : ViewPage<T> where T : class
    {
        public T1 ModelFor<T1>()
        {
            return ViewData.ModelFor<T1>();
        }
    }

    public class PortalViewPage : ViewPage
    {
        public T1 ModelFor<T1>()
        {
            return ViewData.ModelFor<T1>();
        }
    }
}