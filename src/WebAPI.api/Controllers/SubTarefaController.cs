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
    public class SubTarefaController : ControllerBase
    {

        private  SubTarefaRepository repoSubTarefa;
        
        
        public SubTarefaController(SubTarefaRepository repoSubTarefa){
           this.repoSubTarefa = repoSubTarefa;
        }
        // GET api/SubTarefa
        [HttpGet]
        [Route("todas")]
        public ActionResult<IEnumerable<string>> Todas()
        {
            return Ok(repoSubTarefa.GetAll().Include(x => x.tarefa).ToList());
        }

        // GET api/SubTarefa/obterSubTarefa/5
        [HttpGet("{id}")]
        [Route("obter/{id}")]
        public ActionResult<string> obterSubTarefa(int id)
        {
            return Ok(repoSubTarefa.getById(id));
        }

        // POST api/SubTarefa/novaSubTarefa
        [HttpPost]
        [Route("nova")]
        public ActionResult<string> novaSubTarefa([FromBody] SubTarefa SubTarefa)
        {
            repoSubTarefa.Add(SubTarefa);
            repoSubTarefa.SaveChanges();
            return Ok(new { operacao = "sucesso", error = "" });
        }
        // PUT api/SubTarefa/nova
        [HttpPut]
        [Route("update")]
        public ActionResult<string> nova([FromBody] SubTarefa SubTarefa)
        {
            repoSubTarefa.Update(SubTarefa);
            repoSubTarefa.SaveChanges();
            return Ok(new { operacao = "sucesso", error = "" });
        }

        // DELETE api/SubTarefa/deletarSubTarefa/5
        [HttpDelete("{id}")]
        [Route("deletar/{id}")]
        public ActionResult<string> deletar(int id)
        {
            SubTarefa SubTarefa = repoSubTarefa.getById(id);
            repoSubTarefa.Remove(SubTarefa);
            repoSubTarefa.SaveChanges();
            return Ok(new { operacao = "sucesso", error = "" });
        }
    }
}