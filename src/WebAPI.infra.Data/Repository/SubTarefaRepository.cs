using System.Linq;
using Microsoft.EntityFrameworkCore;
using WebAPI.Infra.Data.Entities;
using WebAPI.Infra.Data.Context;

namespace WebAPI.Infra.Data.Repository
{
    public class SubTarefaRepository : Repository<SubTarefa>
    {
        private AppDataContext context;
        public SubTarefaRepository(AppDataContext context) : base(context)
        {
            this.context = context;

        }
        public override SubTarefa getById(int id){
            return DbSet.Where( x => x.id.Equals(id)).First();
        }
    
    }
}