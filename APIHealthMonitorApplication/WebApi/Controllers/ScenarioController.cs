using Microsoft.AspNetCore.Mvc;
using Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using BusinessEntity;

namespace WebApi.Controllers
{
    [ApiController]
    public class ScenarioController : Controller
    {
        IScenarioService _scenarioService;
        
        public ScenarioController(IScenarioService scenarioService)
        {
            _scenarioService = scenarioService;
        }
        
        [HttpGet]
        [Route("scenario")]
        public async Task<IEnumerable<Scenario>> Get()
        {
            var dbScenarios = await _scenarioService.GetAllScenarios();

            var listOfScenarios = new List<Scenario>();

            foreach (var scenario in dbScenarios)
            {
                var mappedScenario = new Scenario();

                mappedScenario.Id = scenario.Id;
                mappedScenario.Name = scenario.Name;
                mappedScenario.Description = scenario.Description;
                mappedScenario.CreatedOn = scenario.CreatedOn;

                listOfScenarios.Add(mappedScenario);
            }

            return listOfScenarios;
        }

        [HttpGet]
        [Route("scenario/{id}")]
        public async Task<Scenario> GetById(int id)
        {
            return await _scenarioService.GetById(id);
        }

        [HttpPost]
        [Route("scenario")]
        public async Task<ActionResult<Scenario>> Post(Scenario s)
        {
            await _scenarioService.CreateScenario(s);
            return CreatedAtAction("GetById", new { Id = s.Id }, s);
        }

        [HttpDelete]
        [Route("scenario/{Id}")]
        public async Task<ActionResult<Scenario>> Delete(int Id)
        {
            var deletedData = await _scenarioService.DeleteScenario(Id);
            return Ok(deletedData);
        }

        [HttpPut]
        [Route("scenario")]
        public async Task<IActionResult> Update(Scenario s)
        {
            await _scenarioService.UpdateScenario(s);
            return NoContent();
        }
    }
}
