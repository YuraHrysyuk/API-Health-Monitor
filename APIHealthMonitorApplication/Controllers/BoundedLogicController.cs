using APIHealthMonitorApplication.BussinesLogic;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIHealthMonitorApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BoundedLogicController : ControllerBase //This controller was generated only as a service injecting sample.
    {
        private readonly BussinesLogicService logicService;

        public BoundedLogicController(BussinesLogicService logicService) => this.logicService = logicService;

        [HttpGet, Route("GetBussinesComments")]
        public async Task<ICollection<string>> GetBussinesComments()
        {
            return await logicService.GetAllComments();
        }
    }
}
