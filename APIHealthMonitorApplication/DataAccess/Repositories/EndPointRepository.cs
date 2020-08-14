using DataAccess.Contexts;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class EndPointRepository : RepositoryBase<EndPointDb>, IEndPointRepository
    {
        public EndPointRepository(ApplicationDbContext repositoryContext)
            : base(repositoryContext)
        {
        }
    }
}
