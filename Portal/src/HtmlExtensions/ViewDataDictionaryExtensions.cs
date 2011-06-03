using System;
using System.Web.Mvc;

namespace guruji.HtmlExtensions
{
    public static class ViewDataDictionaryExtensions
    {
        public static T ModelFor<T>(this ViewDataDictionary viewData)
        {
            if (viewData.ContainsKey(typeof(T).ToString()))
            {
                return (T)viewData[typeof(T).ToString()];
            }
            throw new Exception("Requested Model not available for this view: " + typeof(T));
        }
    }
}