using BusinessEntity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IScenarioService
    {
        Task<IEnumerable<Scenario>> GetAllScenarios();
        Task<Scenario> GetById(int id);
        Task CreateScenario(Scenario scenario);
        Task UpdateScenario(Scenario scenario);
        Task<Scenario> DeleteScenario(int Id);
    }
}
