using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QuestoesService.Models;
using Microsoft.EntityFrameworkCore;

namespace QuestoesService.Repositories
{
    public class QuestoesRepository : IQuestoesRepository
    {
        private QuestoesServiceContext _context;

        public QuestoesRepository(QuestoesServiceContext context)
        {
            _context = context;
        }

        public async Task<Questao> Add(Questao questao)
        {
            await _context.Questoes.AddAsync(questao);
            await _context.SaveChangesAsync();
            return questao;
        }

        public async Task Delete(int QuestaoId)
        {
            var questao = await Get(QuestaoId);
            _context.Questoes.Attach(questao);
            _context.Remove(questao);
            await _context.SaveChangesAsync();
        }

        public async Task<Questao> Get(int QuestaoId)
        {
            return await _context.Questoes
                .Where(q => q.QuestaoId == QuestaoId)
                .SingleOrDefaultAsync();
        }

        public async Task<IEnumerable<Questao>> GetList()
        {
            return await _context.Questoes
                .ToListAsync();
        }

        public async Task Update(Questao questao)
        {
            _context.Questoes.Attach(questao);
            _context.Entry(questao).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Questao>> GetListByMateria(string materia)
        {
            return await _context.Questoes
                .Where(q => q.Materia == materia)
                .ToListAsync();
        }
    }
}
