using System.Web.Mvc;
using guruji.HtmlExtensions;

namespace guruji
{
    public class PortalViewMasterPage : ViewMasterPage
    {
        public T1 ModelFor<T1>()
        {
            return ViewData.ModelFor<T1>();
        }
    }
}
