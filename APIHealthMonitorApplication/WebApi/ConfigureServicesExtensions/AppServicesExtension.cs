using DataAccess.Contexts;
using DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Services;
using Services.Interfaces;
using System.IO;

namespace WebApi.ConfigureServicesExtensions
{
    public static class AppServicesExtension
    {
        public static void ExtendWithAppServices(this IServiceCollection services) {
            services.AddScoped<IScenarioRepository, ScenarioRepository>();
            services.AddScoped<IEndPointRepository, EndPointRepository>();
            services.AddScoped<IScenarioService, ScenarioService>();

            services.AddTransient(provider =>
            {
                IConfigurationRoot configuration = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile(@Directory.GetCurrentDirectory() + "\\appsettings.json").Build();
                var builder = new DbContextOptionsBuilder<ApplicationDbContext>();
                var connectionString = configuration.GetConnectionString("DatabaseConnection");
                builder.UseSqlServer(connectionString);
                return new ApplicationDbContext(builder.Options);
            });
        }
    }
}
