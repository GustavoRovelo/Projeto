using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuestoesService.Models
{
    public class QuestoesServiceContext : DbContext
    {
        public DbSet<Questao> Questoes { get; set; }
        public DbSet<Alternativa> Alternativas { get; set; }

        public QuestoesServiceContext(DbContextOptions<QuestoesServiceContext> options)
            : base(options)
        {
            Database.Migrate();
        }



    }
}
