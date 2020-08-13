using DataAccess.Contexts;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class ScenarioRepository : RepositoryBase<Scenario>, IScenarioRepository
    {
        public ScenarioRepository(ApplicationDbContext repositoryContext)
            : base(repositoryContext)
        {
        }
    }
}
