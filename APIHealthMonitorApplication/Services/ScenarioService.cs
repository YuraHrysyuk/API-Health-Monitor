using BusinessEntity;
using Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public class ScenarioService: IScenarioService
    {
        public async Task<IEnumerable<Scenario>> GetAllScenarios() {
            throw new System.Exception();
        }
    }
}
