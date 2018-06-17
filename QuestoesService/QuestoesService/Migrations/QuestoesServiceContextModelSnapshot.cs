﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using QuestoesService.Models;
using System;

namespace QuestoesService.Migrations
{
    [DbContext(typeof(QuestoesServiceContext))]
    partial class QuestoesServiceContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("QuestoesService.Models.Alternativa", b =>
                {
                    b.Property<int>("AlternativaId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsCorrect");

                    b.Property<int?>("QuestaoId");

                    b.Property<string>("Text");

                    b.HasKey("AlternativaId");

                    b.HasIndex("QuestaoId");

                    b.ToTable("Alternativas");
                });

            modelBuilder.Entity("QuestoesService.Models.Questao", b =>
                {
                    b.Property<int>("QuestaoId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Dificuldade");

                    b.Property<string>("Enunciado");

                    b.Property<string>("Materia");

                    b.HasKey("QuestaoId");

                    b.ToTable("Questoes");
                });

            modelBuilder.Entity("QuestoesService.Models.Alternativa", b =>
                {
                    b.HasOne("QuestoesService.Models.Questao", "Questao")
                        .WithMany("Alternativas")
                        .HasForeignKey("QuestaoId");
                });
#pragma warning restore 612, 618
        }
    }
}
