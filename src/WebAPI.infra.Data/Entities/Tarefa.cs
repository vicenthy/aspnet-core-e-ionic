using System.Collections.Generic;


namespace WebAPI.Infra.Data.Entities
{
    public class Tarefa
    {
        public int id  { get; set; }
        public string nomeTarefa { get; set; }
        public string descricao { get; set; }
        public bool feito { get; set; }
        public virtual ICollection<SubTarefa> subTarefas { get; set; }
    }
}