using System.Linq;
using Microsoft.EntityFrameworkCore;
using WebAPI.Infra.Data.Entities;
using WebAPI.Infra.Data.Context;

namespace WebAPI.Infra.Data.Repository
{
    public class TarefaRepository : Repository<Tarefa>
    {
        private AppDataContext context;
        public TarefaRepository(AppDataContext context) : base(context)
        {
            this.context = context;
        }
        
        public override Tarefa getById(int id){
            return DbSet.Include(x => x.subTarefas).Where( x => x.id.Equals(id)).First();
        }
    
    }
}