using System;
using System.Linq;
using WebAPI.Infra.Data.Repository;
using WebAPI.Infra.Data.Context;
using Microsoft.EntityFrameworkCore;



namespace WebAPI.Infra.Data.Repository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly AppDataContext Db;
        protected readonly DbSet<TEntity> DbSet;

        public Repository(AppDataContext context)
        {
            Db = context;
            DbSet = Db.Set<TEntity>();
        }

        public virtual void Add(TEntity obj)
        {
            DbSet.Add(obj);
        }

        public virtual TEntity GetByGuid(Guid id)
        {
            return DbSet.Find(id);
        }

        public virtual TEntity getById(int id)
        {
            return null;
        }


        public virtual IQueryable<TEntity> GetAll()
        {
            return DbSet;
        }

        public virtual void Update(TEntity obj)
        {
            DbSet.Update(obj);
        }

        public virtual void Remove(TEntity obj)
        {
            DbSet.Remove(obj);
        }

        public int SaveChanges()
        {
            return Db.SaveChanges();
        }

        public void Dispose()
        {
            Db.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}