using Newtonsoft.Json;

namespace WebAPI.Infra.Data.Entities
{
    public class SubTarefa
    {
        public int id  { get; set; }
        public string nomeSubTarefa { get; set; }
        public string descricao { get; set; }
        public bool feito { get; set; }
        public int ?tarefaID { get; set; }
        [JsonIgnore]
        public virtual Tarefa tarefa { get; set; }


    }
}