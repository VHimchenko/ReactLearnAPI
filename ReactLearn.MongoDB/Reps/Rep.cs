using MongoDB.Bson;
using MongoDB.Driver;
using ReactLearn.MongoDB.Reps.Entity;
using ReactLearn.MongoDB.Reps.Interfaces;

namespace ReactLearn.MongoDB.Reps
{
    public class Rep<TId, T> : IRep<TId, T> where T : IEntity<TId>
    {
        private readonly IMongoCollection<T> _collection;

        public Rep(string connectionString, string databaseName, string collectionName)
        {
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase(databaseName);
            _collection = database.GetCollection<T>(collectionName);
        }

        public IQueryable<T> Get(TId id)
        {
            return _collection.AsQueryable().Where(x => x.Id.Equals(id));
        }

        public void Insert(T entity)
        {
            _collection.InsertOne(entity);
        }

        public void Update(T entity)
        {
            _collection.ReplaceOne(x => x.Id.Equals(entity.Id), entity);
        }

        public void Delete(T entity)
        {
            _collection.DeleteOne(x => x.Id.Equals(entity.Id));
        }
    }

    public class RepObjectId<T>(string connectionString, string databaseName, string collectionName)
        : Rep<ObjectId, T>(connectionString, databaseName, collectionName), IRepObjectId<T> where T : IEntity<ObjectId>;

    public class RepString<T>(string connectionString, string databaseName, string collectionName)
        : Rep<string, T>(connectionString, databaseName, collectionName), IRepString<T> where T : IEntity<string>;

    public class RepPerson(string connectionString, string databaseName)
        : RepObjectId<Person>(connectionString, databaseName, "person"), IRepPerson;
}
