using Microsoft.EntityFrameworkCore.Migrations.Operations;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Interfaces.Repository
{
    public interface IRepository<TEntity, TKey>  where TEntity: class
                                                 where TKey: struct
    {
        TEntity GetById(TKey Id);
        ICollection<TEntity> GetByIdRange(ICollection<TKey> Ids);
        ICollection<TEntity> GetAll();

        int Add(TEntity elem);
        int AddRange(ICollection<TEntity> elems);

        int Remove(TEntity elem);
        int RemoveRange(ICollection<TEntity> elems);

        int Update(TEntity elem);
        int UpdateRange(ICollection<TEntity> elems);

        ICollection<TEntity> Find(Expression<Func<TEntity, bool>> predicate);
    }
}
