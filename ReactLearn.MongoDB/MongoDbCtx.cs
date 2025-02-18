
using ReactLearn.MongoDB.Reps;
using ReactLearn.MongoDB.Reps.Interfaces;

namespace ReactLearn.MongoDB
{
    public class MongoDbCtx : ICtx
    {
        public IRepPerson RepPerson { get; }

        public MongoDbCtx()
        {
            this.RepPerson = new RepPerson("mongodb://localhost:27017", "reactlearn");
        }

        #region
        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
        #endregion
    }
}
