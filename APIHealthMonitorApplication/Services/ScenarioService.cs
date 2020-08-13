using BusinessEntity;
using DataAccess.Repositories;
using Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public class ScenarioService: IScenarioService
    {
        private IScenarioRepository _scenarioRepository;

        public ScenarioService(IScenarioRepository scenarioRepository)
        {
            _scenarioRepository = scenarioRepository;
        }

        public async Task<IEnumerable<Scenario>> GetAllScenarios() {
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
                }
            };
        }
    }
}
