using BusinessEntity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    interface IScenarioService
    {
        Task<IEnumerable<Scenario>> GetAllScenarios();
    }
}
