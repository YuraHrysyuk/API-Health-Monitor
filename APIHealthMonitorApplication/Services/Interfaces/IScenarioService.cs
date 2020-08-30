using BusinessEntity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IScenarioService
    {
        Task<IEnumerable<Scenario>> GetAllScenarios();
        Task<Scenario> GetById(int id);
        void CreateScenario(Scenario scenario);
        void UpdateScenario(Scenario scenario);
        void DeleteScenario(int Id);
    }
}
