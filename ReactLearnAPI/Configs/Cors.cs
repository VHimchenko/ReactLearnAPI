namespace ReactLearnAPI.Configs
{
    public class Cors
    {
        public string PolicyName { get; set; } = string.Empty;

        public CorsOptions Options { get; set; }
    }

    public class CorsOptions
    {
        public string[] Addresses { get; set; } = [];
        public string[] Methods { get; set; } = [];
        public string[] Headers { get; set; } = [];
    }
}
