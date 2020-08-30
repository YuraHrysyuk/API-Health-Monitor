using BusinessEntity;
using DataAccess.Repositories;
using Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
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
            //new List<Scenario>() {
            //    new Scenario() {
            //        Id = 1,
            //        Name = "First Test Group",
            //        Description = "Some Long Description Here 1"
            //    },
            //    new Scenario() {
            //        Id = 2,
            //        Name = "Second Test Group",
            //        Description = "Some Long Description Here 2"
            //    },
            //    new Scenario() {
            //        Id = 3,
            //        Name = "Third Test Group",
            //        Description = "Some Long Description Here 3"
            //    }
            //};

            //List<Scenario> listData = new List<Scenario>();
            //var x = _scenarioRepository.FindAll().ToList();
            //foreach (var el in x)
            //{
            //    Scenario temp = new Scenario()
            //    {
            //        Id = el.Id,
            //        Name = el.Name,
            //        Description = el.Description
            //    };
            //    listData.Add(temp);
            //}
            //return listData;

            return _scenarioRepository.FindAll()
                .Select(scenario =>
                new Scenario
                {
                    Id = scenario.Id,
                    Name = scenario.Name,
                    Description = scenario.Description,
                    CreatedOn = scenario.CreatedOn
                });
        }
        //Get Scenario byId
        public async Task<Scenario> GetById(int id)
        {
            var scenario = await _scenarioRepository.FindByIdAsync(id);
            return new Scenario
            {
                Id = scenario.Id,
                Name = scenario.Name,
                Description = scenario.Description,
                CreatedOn = scenario.CreatedOn
            };
        }

        //Add new scenario to DB
        public void CreateScenario(Scenario scenario)
        {
            var s = new DataAccess.Models.Scenario()
            {
                Name = scenario.Name,
                Description = scenario.Description,
                CreatedOn = scenario.CreatedOn

            };
            _scenarioRepository.Create(s);
        }

        //Update scenario in DB
        public void UpdateScenario(Scenario scenario)
        {
            var s = new DataAccess.Models.Scenario()
            {
                Id = scenario.Id,
                Name = scenario.Name,
                Description = scenario.Description,
                CreatedOn = scenario.CreatedOn

            };
            _scenarioRepository.Update(s);
        }

        //Delete scenario
        public void DeleteScenario(int id)
        {
            var scen = _scenarioRepository.FindAll().Where(x => x.Id == id).First();         
            _scenarioRepository.Delete(scen);
        }
    }
}
