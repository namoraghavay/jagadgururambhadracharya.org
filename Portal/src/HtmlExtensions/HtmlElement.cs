using System.Web.Mvc;

namespace guruji.HtmlExtensions
{
    public static class HtmlElement
    {
        public static string RichtextRouteLink(this UrlHelper urlHelper,string linkText, string routeName, object routeValues )
        {
            var url = urlHelper.RouteUrl(routeName, routeValues);
			
            if(string.IsNullOrEmpty(url))
                return linkText;
            
            var tagBuilder = new TagBuilder("a") {InnerHtml = linkText};
            tagBuilder.MergeAttribute("href",url);
            return tagBuilder.ToString();
        }

        public static string MetaTag(this HtmlHelper helper, string name, string content)
        {
            return string.Format(@"<meta name=""{0}"" content=""{1}"" />", name, content);
        }
    }
}