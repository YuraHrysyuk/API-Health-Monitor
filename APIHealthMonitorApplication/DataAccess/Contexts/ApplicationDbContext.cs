using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Contexts
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Scenario> Scenarios { get; set; }

        public DbSet<EndPointDb> EndPoints { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            //Create database and apply Migrations
            Database.Migrate();
        }
    }
}
