using APIHealthMonitorApplication.EntityScenario.DataAccess.ValueConverters;
using APIHealthMonitorApplication.EntityScenario.DataEntity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIHealthMonitorApplication.EntityScenario.DataAccess.Contexts
{
    public class EntityScenarioDbContext : DbContext
    {
        public DbSet<Scenario> Scenarios { get; set; }
        public DbSet<Endpoint> Endpoints { get; set; }

        public EntityScenarioDbContext(DbContextOptions<EntityScenarioDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Scenario>().Property(f => f.Comments).HasConversion(new StringsToStringConverter()); //Can be changed to simple Object Pool / Factory converter resolver
        }
    }
}
