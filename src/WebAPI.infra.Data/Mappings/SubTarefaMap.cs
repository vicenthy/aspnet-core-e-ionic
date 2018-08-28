using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebAPI.Infra.Data.Entities;

namespace WebAPI.Infra.Data.Mappings
{
    public class SubTarefaMap : IEntityTypeConfiguration<SubTarefa>
    {


        public void Configure(EntityTypeBuilder<SubTarefa> builder)
        {
                builder.ToTable("subtarefa");

                builder.HasKey(a => a.id).HasName("id");
                        
                builder.Property( a => a.nomeSubTarefa)
                        .IsRequired(true)
                        .HasColumnName("nomeSubTarefa");
    
                builder.Property( a => a.descricao)
                        .HasColumnName("descricao");
    
                builder.Property( a => a.feito)
                        .HasColumnName("feito");
                        
                builder.Property(a => a.tarefaID)
                        .HasColumnName("id_tarefa");

                builder.HasOne(a => a.tarefa)
                        .WithMany(a => a.subTarefas);
                        
                                    
                        
        }
    }
}