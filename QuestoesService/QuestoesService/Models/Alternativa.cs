using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuestoesService.Models
{
    public class Alternativa
    {
        public int AlternativaId { get; set; }
        public bool IsCorrect { get; set; }
        public string Text { get; set; }
        public Questao Questao { get; set; }
    }
}
