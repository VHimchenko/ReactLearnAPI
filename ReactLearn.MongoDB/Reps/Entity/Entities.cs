using MongoDB.Bson;
using ReactLearn.MongoDB.Reps.Interfaces;

namespace ReactLearn.MongoDB.Reps.Entity
{
    public class Person : IEntity<ObjectId>
    {
        public ObjectId Id { get; set; }
        public string FullName { get; set; }
        public string Position { get; set; }
    }
}
