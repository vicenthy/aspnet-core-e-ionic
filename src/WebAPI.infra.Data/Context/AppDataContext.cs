using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WebAPI.Infra.Data.Mappings;

namespace WebAPI.Infra.Data.Context
{
    public class AppDataContext : DbContext
    {

    public AppDataContext(DbContextOptions<AppDataContext> options) 
        : base(options) {
            Options = options;
        }

        public DbContextOptions<AppDataContext> Options { get; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TarefaMap());
            modelBuilder.ApplyConfiguration(new SubTarefaMap());
            base.OnModelCreating(modelBuilder);
        }

    }


}