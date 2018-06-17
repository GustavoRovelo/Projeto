using QuestoesService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuestoesService.Repositories
{
    public interface IQuestoesRepository
    {
        Task<Questao> Get(int QuestaoId);
        Task<IEnumerable<Questao>> GetList();
        Task<Questao> Add(Questao questao);
        Task Delete(int QuestaoId);
        Task Update(Questao questao);
        Task<IEnumerable<Questao>> GetListByMateria(string materia);
    }
}
