using System;
using System.Linq;

namespace WebAPI.Infra.Data.Repository

{ public interface IRepository<TEntity> : IDisposable where TEntity : class
    {
        void Add(TEntity obj);
        TEntity GetByGuid(Guid id);
        IQueryable<TEntity> GetAll();
        void Update(TEntity obj);
        TEntity getById(int id);
        void Remove(TEntity obj);
        int SaveChanges();
        
    }
}