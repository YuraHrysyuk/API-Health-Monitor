using BussinesEntity.DataEntity;
using DataAccess.DataAccess.ValueConterters;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.DataAccess.DbContexts
{
    public class BussinesEntityDbContext : DbContext
    {
        public DbSet<Scenario> Scenarios { get; set; }
        public DbSet<Endpoint> Endpoints { get; set; }

        public BussinesEntityDbContext(DbContextOptions<BussinesEntityDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Scenario>().Property(f => f.Comments).HasConversion(new StringsToStringConverter()); //Can be changed to simple Object Pool / Factory converter resolver
        }
    }
}
