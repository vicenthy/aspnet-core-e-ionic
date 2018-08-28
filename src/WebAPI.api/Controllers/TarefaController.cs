using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using WebAPI.Infra.Data.Entities;
using WebAPI.Infra.Data.Context;
using WebAPI.Infra.Data.Repository;

namespace WebAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TarefaController : ControllerBase
    {


        private TarefaRepository repoTarefa;


        public TarefaController(TarefaRepository repoTarefa){
         this.repoTarefa = repoTarefa;
        }

        // GET api/tarefa
        [HttpGet]
        [Route("todas")]
        public ActionResult<IEnumerable<string>> Todas()
        {
            return Ok(repoTarefa.GetAll().Include(x => x.subTarefas).ToList());
        }

        // GET api/tarefa/obterTarefa/5
        [HttpGet("{id}")]
        [Route("obter/{id}")]
        public ActionResult<string> obterTarefa(int id)
        {
            return Ok(repoTarefa.getById(id));
        }

        // POST api/tarefa/nova
        [HttpPost]
        [Route("nova")]
        public ActionResult<string> novaTarefa([FromBody] Tarefa tarefa)
        {
            repoTarefa.Add(tarefa);
            repoTarefa.SaveChanges();
            return Ok(tarefa);
        }
        // PUT api/tarefa/salvar
        [HttpPut]
        [Route("update")]
        public ActionResult<string> update([FromBody] Tarefa tarefa)
        {
            repoTarefa.Update(tarefa);
            repoTarefa.SaveChanges();
            return Ok(new { operacao = "sucesso", error = "" });
        }

        // DELETE api/tarefa/deletar/5
        [HttpDelete("{id}")]
        [Route("deletar/{id}")]
        public ActionResult<string> deletar(int id)
        {
            Tarefa tarefa = repoTarefa.getById(id);
            repoTarefa.Remove(tarefa);
            repoTarefa.SaveChanges();
            return Ok(new { operacao = "sucesso", error = "" });
        }
    }
}