using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Interfaces.Repository
{
    public interface IRepositoryAsync<TEntity, TKey> where TEntity : class
                                                     where TKey : struct
    {
        Task<TEntity> GetByIdAsync(TKey Id);
        Task<ICollection<TEntity>> GetByIdRangeAsync(ICollection<TKey> Ids);
        Task<ICollection<TEntity>> GetAllAsync();

        Task<int> AddAsync(TEntity elem);
        Task<int> AddRangeAsync(ICollection<TEntity> elems);

        Task<int> RemoveAsync(TEntity elem);
        Task<int> RemoveRangeAsync(ICollection<TEntity> elems);

        Task<int> UpdateAsync(TEntity elem);
        Task<int> UpdateRangeAsync(ICollection<TEntity> elems);

        Task<ICollection<TEntity>> FindAsync(Expression<Func<TEntity, bool>> predicate);
    }
}
