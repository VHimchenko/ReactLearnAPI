using Microsoft.EntityFrameworkCore;
using ReactLearnAPI.DB.Entities;

namespace ReactLearnAPI.DB
{
    public class AppDbCtx(DbContextOptions<AppDbCtx> options) : DbContext(options)
    {
        public DbSet<Movie> Movies { get; set; }
    }
}
