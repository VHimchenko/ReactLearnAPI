using Microsoft.Extensions.Logging;
using ReactLearnAPI.DB.Reps.Interfaces;

namespace ReactLearnAPI.DB.Reps
{
    public class UnitOfWork(ILogger<UnitOfWork> logger, AppDbCtx ctx) : IUnitOfWork
    {
        public IRepMovies RepMovies { get; } = new RepMovies(ctx);

        public async Task<IResultBool> SaveChangesAsync()
        {
            try
            {
                await ctx.SaveChangesAsync();
                return new ResultBool(true);
            }
            catch(Exception ex)
            {
                logger.LogError(ex, "SaveChangesAsync");
                return new ResultBool(ex.Message);
            }
        }

        #region IDisposable
        public void Dispose()
        {
            ctx.Dispose();
            //GC.SuppressFinalize(this);
        }
        #endregion
    }
}
