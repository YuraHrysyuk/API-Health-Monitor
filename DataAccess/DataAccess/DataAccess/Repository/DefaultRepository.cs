using DataAccess.Interfaces.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.DataAccess.Repository
{
    public class DefaultRepository<TEntity, TKey> : IRepository<TEntity, TKey>, IRepositoryAsync<TEntity, TKey> where TEntity:class 
                                                                                                                where TKey:struct
    {
        protected readonly DbSet<TEntity> dbSet;
        protected readonly DbContext dbContext;

        public DefaultRepository(DbContext dbContext)
        {
            dbSet = dbContext.Set<TEntity>(); // for the simplification.
            this.dbContext = dbContext;
        }

        public int Add(TEntity elem)
        {
            dbSet.Add(elem);
            return dbContext.SaveChanges(true);
        }
        public async Task<int> AddAsync(TEntity elem) 
        {
            dbSet.Add(elem);
            return await dbContext.SaveChangesAsync(true);
        }

        public int AddRange(ICollection<TEntity> elems)
        {
            dbSet.AddRange(elems);
            return dbContext.SaveChanges(true);
        }

        public async Task<int> AddRangeAsync(ICollection<TEntity> elems)
        {
            dbSet.AddRange(elems);
            return await dbContext.SaveChangesAsync(true);
        }

        public ICollection<TEntity> Find(Expression<Func<TEntity, bool>> predicate) => dbSet.Where(predicate).ToList();
        public async Task<ICollection<TEntity>> FindAsync(Expression<Func<TEntity, bool>> predicate) => await dbSet.Where(predicate).ToListAsync();

        public ICollection<TEntity> GetAll() => dbSet.ToList();
        public async Task<ICollection<TEntity>> GetAllAsync() => await dbSet.ToListAsync();


        public TEntity GetById(TKey Id) => dbSet.Find(Id);
        public async Task<TEntity> GetByIdAsync(TKey Id) => await dbSet.FindAsync(Id);


        public ICollection<TEntity> GetByIdRange(ICollection<TKey> Ids) => Ids.Select(e => dbSet.Find(e)).ToList();
        public async Task<ICollection<TEntity>> GetByIdRangeAsync(ICollection<TKey> Ids)
        {
            return (await Task.WhenAll(Ids.Select(e => dbSet.FindAsync(e).AsTask())))
                                          .Where(result => result != null).ToList();
        }


        public int Remove(TEntity elem)
        {
            dbSet.Remove(elem);
            return dbContext.SaveChanges(true);
        }

        public async Task<int> RemoveAsync(TEntity elem)
        {
            dbSet.Remove(elem);
            return await dbContext.SaveChangesAsync(true);
        }

        public int RemoveRange(ICollection<TEntity> elems)
        {
            dbSet.RemoveRange(elems);
            return dbContext.SaveChanges(true);
        }

        public async Task<int> RemoveRangeAsync(ICollection<TEntity> elems)
        {
            dbSet.RemoveRange(elems);
            return await dbContext.SaveChangesAsync(true);
        }

        public int Update(TEntity elem)
        {
            dbSet.Update(elem);
            return dbContext.SaveChanges(true);
        }

        public async Task<int> UpdateAsync(TEntity elem)
        {
            dbSet.Update(elem);
            return await dbContext.SaveChangesAsync(true);
        }

        public int UpdateRange(ICollection<TEntity> elems)
        {
            dbSet.UpdateRange(elems);
            return dbContext.SaveChanges(true);
        }

        public async Task<int> UpdateRangeAsync(ICollection<TEntity> elems)
        {
            dbSet.UpdateRange(elems);
            return await dbContext.SaveChangesAsync(true);
        }
    }
}
