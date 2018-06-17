using QuestoesService.Models;
using QuestoesService.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuestoesService.Services
{
    public class Teste
    {
        public IList<Questao> Questoes { get; set; } = new List<Questao>();

        public async Task<IList<Questao>> GerarTeste(int numeroDeQuestoes, string materia, QuestoesServiceContext context)
        {
            IQuestoesRepository questoesRepository = new QuestoesRepository(context);

            IEnumerable<Questao> questoesFromDb = await questoesRepository.GetListByMateria(materia);

            IList<int> numerosSorteados = new List<int>();

            for(int i = 0; i<numeroDeQuestoes; i++)
            {
                Random random = new Random();
                int numeroRandom = random.Next(questoesFromDb.Count());
                Boolean flag = false;
                if(!numerosSorteados.Contains(numeroRandom))
                {
                    numerosSorteados.Add(numeroRandom);
                    //flag = 
                }
                else
                {
                    numeroRandom = random.Next(questoesFromDb.Count());
                }
                Questoes.Add(questoesFromDb.ElementAt(numeroRandom));


            }

            return Questoes;
        }
    }
}
