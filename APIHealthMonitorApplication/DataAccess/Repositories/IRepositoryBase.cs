using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public interface IRepositoryBase<T>
    {
        IQueryable<T> FindAll();
        Task<T> FindByIdAsync(int id);
        IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression);
        Task Create(T entity);
        Task Update(T entity);
        Task<T> Delete(T entity);
    }
}
