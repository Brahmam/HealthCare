using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace HealthCare.PromptRx.Web.Api
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
        }

        protected void Application_OnBeginRequest()
        {
            var res = HttpContext.Current.Response;
            var req = HttpContext.Current.Request;
            //res.AppendHeader("Access-Control-Allow-Origin", req.Headers["Origin"]);
            res.AppendHeader("Access-Control-Allow-Credentials", "true");
            res.AppendHeader("Access-Control-Allow-Headers", "Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, X-File-Name");
            res.AppendHeader("Access-Control-Allow-Methods", "POST,GET,PUT,PATCH,DELETE,OPTIONS");

            // ==== Respond to the OPTIONS verb =====
            if (req.HttpMethod == "OPTIONS")
            {
                res.StatusCode = 200;
                res.End();
            }
        }
    }
}
