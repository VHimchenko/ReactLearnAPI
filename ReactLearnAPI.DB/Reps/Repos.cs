using ReactLearnAPI.DB.Entities;
using ReactLearnAPI.DB.Reps.Interfaces;

namespace ReactLearnAPI.DB.Reps
{
    public class RepMovies(AppDbCtx ctx) : Rep<Movie>(ctx), IRepMovies;
}
