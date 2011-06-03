using System;
using System.Web;
using System.Web.Configuration;

namespace guruji.Controllers
{
    public static class CustomErrorHandler
    {
        public static void HandleError(HttpServerUtilityBase server, HttpResponseBase response,
                                       CustomErrorsSection customErrorsSection)
        {
            CustomError customError = GetCustomError(server.GetLastError(), customErrorsSection);
            server.ClearError();
            response.Clear();
            response.WriteFile(customError.Redirect);
            response.StatusCode = customError.StatusCode;
        }

        private static CustomError GetCustomError(Exception exception, CustomErrorsSection section)
        {
            var httpException = exception as HttpException;
            var defaultError = section.Errors.Get("500");

            if (httpException == null)
                return defaultError;

            var customError = section.Errors.Get(httpException.GetHttpCode().ToString());

            return customError ?? defaultError;
        }
    }
}