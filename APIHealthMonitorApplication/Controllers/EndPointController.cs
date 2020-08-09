using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace APIHealthMonitorApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EndPointController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<EndPoint> Get()
        {
            return new List<EndPoint>() {
                new EndPoint() {
                    Id = 1,
                    Name = "First Test Group",
                    Description = "Some Long Description Here 1",
                    ConnectionPath = "/"
                   
                },
                new EndPoint() {
                    Id = 2,
                    Name = "Second Test Group",
                    Description = "Some Long Description Here 2",
                    ConnectionPath = "/"
                },
                new EndPoint() {
                    Id = 3,
                    Name = "Third Test Group",
                    Description = "Some Long Description Here 3",
                    ConnectionPath = "/"
                },
                new EndPoint() {
                    Id = 4,
                    Name = "Forth Test Group",
                    Description = "Some Long Description Here 4",
                    ConnectionPath = "/"
                },
                new EndPoint() {
                    Id = 5,
                    Name = "Fifth Test Group",
                    Description = "Some Long Description Here 5",
                    ConnectionPath = "/"
                },
            };
        }
    }
}