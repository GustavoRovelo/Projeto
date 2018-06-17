using Microsoft.AspNetCore.Mvc;
using QuestoesService.Models;
using QuestoesService.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuestoesService.Controllers
{
    [Route("api/Questoes")]
    public class QuestoesController : Controller
    {
        private IQuestoesRepository _questoesRepository;

        public QuestoesController(IQuestoesRepository questoesRepository)
        {
            _questoesRepository = questoesRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetList()
        {
            return Ok(await _questoesRepository.GetList());
        }

        [HttpGet("{id}", Name = "GetQuestao")]
        public async Task<IActionResult> Get([FromRoute]int id)
        {
            return Ok(await _questoesRepository.Get(id));
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Questao questao)
        {
            questao = await _questoesRepository.Add(questao);
            //return Created(Url.Link("GetQuestao", new { id = questao.QuestaoId }), questao);
            var returnSts = CreatedAtRoute("GetQuestao", new { id = questao.QuestaoId }, questao);
            return returnSts;
//            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int QuestaoId)
        {
            await _questoesRepository.Delete(QuestaoId);
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] int QuestaoId, [FromBody] Questao questao)
        {
            questao.QuestaoId = QuestaoId;
            await _questoesRepository.Update(questao);
            return Ok();
        }

        [HttpGet("teste")]
        public async Task<IActionResult> GetTeste()
        {
            return Ok();
        }
    }
}
