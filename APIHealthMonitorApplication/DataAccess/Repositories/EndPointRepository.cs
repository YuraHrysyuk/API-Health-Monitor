using DataAccess.Contexts;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class EndPointRepository : RepositoryBase<EndPoint>, IEndPointRepository
    {
        public EndPointRepository(ApplicationDbContext repositoryContext)
            : base(repositoryContext)
        {
        }
    }
}
