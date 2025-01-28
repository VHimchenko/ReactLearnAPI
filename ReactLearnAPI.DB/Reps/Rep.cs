using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using ReactLearnAPI.DB.Reps.Interfaces;

namespace ReactLearnAPI.DB.Reps
{
    public class RepBase<T>: IRepBase<T> where T : class
    {
        private readonly AppDbCtx _ctx;
        protected readonly DbSet<T> _dbSet;

        public RepBase(AppDbCtx ctx)
        {
            this._ctx = ctx;
            this._dbSet = this._ctx.Set<T>();
        }

        public IQueryable<T> Get(Expression<Func<T, bool>>? filter = null, string? includes = null, bool asNoTracking = false)
        {
            IQueryable<T> query = this._dbSet;
            if(asNoTracking)
                query = query.AsNoTracking();

            if (!string.IsNullOrEmpty(includes))
            {
                query = includes.Split(",", StringSplitOptions.RemoveEmptyEntries)
                    .Aggregate(query, (current, include) => current.Include(include));
            }
            
            if(filter != null)
                query = query.Where(filter);

            return query;
        }
    }

    public class Rep<T>(AppDbCtx ctx): RepBase<T>(ctx), IRep<T> where T : class
    {
        public void Add(T entity)
        {
            this._dbSet.Add(entity);
        }

        public void Remove(T entity)
        {
            this._dbSet.Remove(entity);
        }
    }
}
