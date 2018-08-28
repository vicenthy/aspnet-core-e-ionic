using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebAPI.Infra.Data.Entities;

namespace WebAPI.Infra.Data.Mappings
{
    public class TarefaMap : IEntityTypeConfiguration<Tarefa>
    {


        public void Configure(EntityTypeBuilder<Tarefa> builder)
        {
                builder.ToTable("tarefa");

                builder.HasKey(a => a.id).HasName("id");
                        
                builder.Property( a => a.nomeTarefa)
                        .IsRequired(true)
                        .HasColumnName("nomeTarefa");
    
                builder.Property( a => a.descricao)
                        .HasColumnName("descricao");
    
                  builder.Property( a => a.feito)
                        .HasColumnName("feito");

                        
                        
                                  
                        
        }
    }
}