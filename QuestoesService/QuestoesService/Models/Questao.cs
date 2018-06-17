using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuestoesService.Models
{
    public class Questao
    {
        public int QuestaoId { get; set; }
        public string Enunciado { get; set; }
        public IList<Alternativa> Alternativas{ get; set; }
        public int Dificuldade { get; set; }
        public string Materia { get; set; }
    }
}
