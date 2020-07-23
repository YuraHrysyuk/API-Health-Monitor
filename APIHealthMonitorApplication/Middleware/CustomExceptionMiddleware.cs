using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace APIHealthMonitorApplication.Middleware
{
    public sealed class CustomExceptionMiddleware
    {
        private readonly RequestDelegate next;
        private readonly ILogger<Exception> logger;

        public CustomExceptionMiddleware(RequestDelegate next, ILogger<Exception> logger)
        {
            this.next = next;
            this.logger = logger;
        }

        public async Task InvokeAsync(HttpContext httpContext)
        {
            try
            {
                //Console.WriteLine("Incoming request: {0}", httpContext.Request.Path.Value); //Uncomment this for minimal console logging information 
                await next(httpContext);
            }
            catch (Exception exception)
            {
                logger.LogError(exception, "");
                await ExceptionHandlerMethod(httpContext, exception);
            }
        }

        private Task ExceptionHandlerMethod(HttpContext context, Exception exception)
        {
            context.Response.StatusCode = (int)HttpStatusCode.BadRequest;

            return context.Response.WriteAsync(exception.Message);
        }
    }
}
