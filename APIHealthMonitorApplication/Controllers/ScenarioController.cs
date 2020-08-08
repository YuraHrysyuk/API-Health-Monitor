using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace APIHealthMonitorApplication.Controllers
{
    public class ScenarioController : Controller
    {
        [HttpGet]
        public IEnumerable<Scenario> Get()
        {
            return new List<Scenario>() {
                new Scenario() { 
                    Id = 1,
                    Name = "First Test Group",
                    Description = "Some Long Description Here 1"
                },
                new Scenario() {
                    Id = 2,
                    Name = "Second Test Group",
                    Description = "Some Long Description Here 2"
                },
                new Scenario() {
                    Id = 3,
                    Name = "Third Test Group",
                    Description = "Some Long Description Here 3"
                },
                new Scenario() {
                    Id = 4,
                    Name = "Forth Test Group",
                    Description = "Some Long Description Here 4"
                },
                new Scenario() {
                    Id = 5,
                    Name = "Fifth Test Group",
                    Description = "Some Long Description Here 5"
                },
            };
        }
    }
}
