using APIHealthMonitorApplication.EntityScenario.DataAccess.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIHealthMonitorApplication.BussinesLogic
{
    public class BussinesLogicService // This service was added only for an example
    {
        private readonly EntityScenarioDbContext dbContext;

        public BussinesLogicService(EntityScenarioDbContext dbContext) => this.dbContext = dbContext; 

        public async Task<ICollection<string>> GetAllComments()
        {
            return await dbContext.Scenarios.SelectMany(e => e.Comments).ToListAsync();
        }
    }
}
