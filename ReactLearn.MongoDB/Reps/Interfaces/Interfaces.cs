using MongoDB.Bson;
using ReactLearn.MongoDB.Reps.Entity;

namespace ReactLearn.MongoDB.Reps.Interfaces
{
    public interface IEntity<TId>
    {
        TId Id { get; set; }
    }

    public interface IRep<in TId, T>
    {
        IQueryable<T> Get(TId id);
        void Insert(T entity);
        void Update(T entity);
        void Delete(T entity);
    }

    public interface IRepObjectId<T> : IRep<ObjectId, T> where T : IEntity<ObjectId>;
    public interface IRepString<T> : IRep<string, T> where T : IEntity<string>;

    public interface IRepPerson : IRepObjectId<Person>;

    public interface ICtx : IDisposable
    {
        IRepPerson RepPerson { get; }
    }
}
