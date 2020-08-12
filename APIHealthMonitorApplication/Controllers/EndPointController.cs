using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace APIHealthMonitorApplication.Controllers
{
    [ApiController]
    public class EndPointController : ControllerBase
    {
        [HttpGet]
        [Route("scenarios/{scenarioId}/end-points")]
        public IEnumerable<EndPoint> Get(int scenarioId)
        {
            var endPoints = new List<EndPoint>() {
                new EndPoint() {
                    Id = 1,
                    ScenarioId = 1,
                    Name = "First Test Group",
                    Description = "Some Long Description Here 1",
                    ConnectionPath = "/"
                   
                },
                new EndPoint() {
                    Id = 2,
                    ScenarioId = 1,
                    Name = "Second Test Group",
                    Description = "Some Long Description Here 2",
                    ConnectionPath = "/"
                },
                new EndPoint() {
                    Id = 3,
                    ScenarioId = 2,
                    Name = "Third Test Group",
                    Description = "Some Long Description Here 3",
                    ConnectionPath = "/"
                },
                new EndPoint() {
                    Id = 4,
                    ScenarioId = 2,
                    Name = "Forth Test Group",
                    Description = "Some Long Description Here 4",
                    ConnectionPath = "/"
                },
                new EndPoint() {
                    Id = 5,
                    ScenarioId = 3,
                    Name = "Fifth Test Group",
                    Description = "Some Long Description Here 5",
                    ConnectionPath = "/"
                },
            };

            return endPoints.Where(x => x.ScenarioId == scenarioId);
        }

        [HttpDelete]
        [Route("end-points/{endPointId}")]
        public IActionResult Delete(int endPointId)
        {
            return Ok();
        }
    }
}