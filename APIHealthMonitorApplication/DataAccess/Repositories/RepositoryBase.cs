using System;
using System.Linq;
using DataAccess.Contexts;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace DataAccess.Repositories
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected ApplicationDbContext ApplicationDbContext { get; set; }

        public RepositoryBase(ApplicationDbContext repositoryContext)
        {
            this.ApplicationDbContext = repositoryContext;
        }

        public IQueryable<T> FindAll()
        {
            return this.ApplicationDbContext.Set<T>().AsNoTracking();
        }

        //public async Task<List<T>> FindAllAsync()
        //{
        //    return await this.ApplicationDbContext.Set<T>().AsNoTracking().ToListAsync();
        //}

        //public IQueryable<T> FindById()
        //{
        //    return this.ApplicationDbContext.Set<T>().AsNoTracking();
        //}

        public async Task<T> FindByIdAsync(int id)
        {
            return await this.ApplicationDbContext.Set<T>().FindAsync(id);
        }

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return this.ApplicationDbContext.Set<T>().Where(expression).AsNoTracking();
        }

        public void Create(T entity)
        {
            this.ApplicationDbContext.Set<T>().Add(entity);
            this.ApplicationDbContext.SaveChanges();
        }

        public void Update(T entity)
        {
            this.ApplicationDbContext.Set<T>().Update(entity);
            this.ApplicationDbContext.SaveChanges();
        }

        public void Delete(T entity)
        {
            this.ApplicationDbContext.Set<T>().Remove(entity);
            this.ApplicationDbContext.SaveChanges();
        }
    }
}
