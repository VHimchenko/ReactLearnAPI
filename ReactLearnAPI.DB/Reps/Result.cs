using ReactLearnAPI.DB.Reps.Interfaces;

namespace ReactLearnAPI.DB.Reps
{
    public class Result<T>: IResult<T>
    {
        public T? Returned { get; protected set; }
        public string? Message { get; }

        public Result(T data)
        {
            this.Returned = data;
            this.Message = null;
        }

        public Result(string message)
        {
            this.Returned = default;
            this.Message = message;
        }
    }
    
    public class ResultBool: Result<bool>, IResultBool
    {
        public ResultBool(bool data) : base(data) { }

        public ResultBool(string message) : base(message)
        {
            this.Returned = false;
        }
    }
}
