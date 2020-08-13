using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using Services;
using Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScenarioController : Controller
    {
        IScenarioService _scenarioService;

        public ScenarioController(IScenarioService scenarioService) {
            _scenarioService = scenarioService;
        }

        [HttpGet]
        public async Task<IEnumerable<Scenario>> Get()
        {
            var dbScenarios = await _scenarioService.GetAllScenarios();

            var listOfScenarios = new List<Scenario>();

            foreach (var scenario in dbScenarios) {
                var mappedScenario = new Scenario();

                mappedScenario.Id = scenario.Id;
                mappedScenario.Name = scenario.Name;
                mappedScenario.Description = scenario.Description;
                mappedScenario.CreatedOn = scenario.CreatedOn;

                listOfScenarios.Add(mappedScenario);
            }

            return listOfScenarios;
        }
    }
}
