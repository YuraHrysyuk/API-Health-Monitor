using BussinesEntity.DataEntity;
using DataAccess.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinesServices.BussinesLogic
{
    public sealed class ScenarioServices
    {
        private readonly IRepositoryAsync<Scenario, Guid> scenarioRepo;

        public ScenarioServices(IRepositoryAsync<Scenario, Guid> scenarioRepo)
        {
            this.scenarioRepo = scenarioRepo;
        }

        public async Task<ICollection<string>> GetAllScenarioNames() => (await scenarioRepo.GetAllAsync()).Select(e => e.Name).ToList();
        public async Task<ICollection<string>> GetAllScenarioComments(Guid Id) => (await scenarioRepo.GetByIdAsync(Id)).Comments;
    }
}
