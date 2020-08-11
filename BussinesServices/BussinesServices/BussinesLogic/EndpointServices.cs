using BussinesEntity.DataEntity;
using DataAccess.Interfaces.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinesServices.BussinesLogic
{
    public sealed class EndpointServices
    {
        private readonly IRepositoryAsync<Endpoint, Guid> endpointRepo;

        public EndpointServices(IRepositoryAsync<Endpoint, Guid> endpointRepo)
        {
            this.endpointRepo = endpointRepo;
        }

        public async Task<ICollection<string>> GetAllEndpointNames() => (await endpointRepo.GetAllAsync()).Select(e => e.Name).ToList();
        public async Task<ICollection<string>> GetAllEndpointConnectionPaths() => (await endpointRepo.GetAllAsync()).Select(e => e.ConnectionPath).ToList();
    }
}
