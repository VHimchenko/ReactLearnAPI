using Microsoft.EntityFrameworkCore;

namespace ReactLearnAPI.DB
{
    public class AppDbCtx(DbContextOptions<AppDbCtx> options) : DbContext(options)
    {

    }
}
