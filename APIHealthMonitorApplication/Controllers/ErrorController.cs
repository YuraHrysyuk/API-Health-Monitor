using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIHealthMonitorApplication.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ErrorController : ControllerBase //This controller was generated for Exception generation. Just only for this.
    {
        public ErrorController()
        {
        }

        [HttpGet, Route("GenerateError")]
        public void GenerateError()
        {
            throw new Exception("Manually generated exception in Error Controller");
        }
    }
}
