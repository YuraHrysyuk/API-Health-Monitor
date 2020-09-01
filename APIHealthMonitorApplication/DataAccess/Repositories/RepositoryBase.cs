﻿using System;
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

        public async Task Create(T entity)
        {
            this.ApplicationDbContext.Set<T>().Add(entity);
            await this.ApplicationDbContext.SaveChangesAsync();
        }

        public async Task Update(T entity)
        {
            this.ApplicationDbContext.Set<T>().Update(entity);
            await this.ApplicationDbContext.SaveChangesAsync();
            //return entity;
        }

        public async Task<T> Delete(T entity)
        {
            this.ApplicationDbContext.Set<T>().Remove(entity);
            await this.ApplicationDbContext.SaveChangesAsync();
            return entity;
        }
    }
}
