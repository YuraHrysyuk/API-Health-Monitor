using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace DataAccess.DataAccess.DbContexts
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<BussinesEntityDbContext>
    {
         public BussinesEntityDbContext CreateDbContext(string[] args)
         {
             IConfigurationRoot configuration = new ConfigurationBuilder()
                 .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                 .AddEnvironmentVariables()
                 .SetBasePath(Directory.GetCurrentDirectory())
                 .Build();

              var builder = new DbContextOptionsBuilder<BussinesEntityDbContext>();
              var connectionString = configuration.GetConnectionString("BussinesEntityDatabase");
              builder.UseSqlServer(connectionString);

              return new BussinesEntityDbContext(builder.Options);
         }
    }
}
