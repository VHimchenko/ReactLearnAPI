namespace ReactLearnAPI.DB.Reps.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepMovies RepMovies { get; }

        Task<IResultBool> SaveChangesAsync();
    }
}
