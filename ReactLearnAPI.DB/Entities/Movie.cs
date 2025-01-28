using System.ComponentModel.DataAnnotations;

namespace ReactLearnAPI.DB.Entities
{
    public class Movie
    {
        [Key]
        public long Id { get; set; } // MovieID
        [Required, MaxLength(512)]
        public string Title { get; set; } = string.Empty;
        public long ReleaseYear { get; set; }
    }
}
