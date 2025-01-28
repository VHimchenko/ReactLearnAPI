using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactLearnAPI.DB.Entities;
using ReactLearnAPI.DB.Reps;
using ReactLearnAPI.DB.Reps.Interfaces;
using ReactLearnAPI.DTO;

namespace ReactLearnAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly ILogger<MovieController> _logger;
        private readonly IUnitOfWork _unitOfWork;

        public MovieController(ILogger<MovieController> logger, IUnitOfWork unitOfWork)
        {
            this._logger = logger;
            this._unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var movies = await _unitOfWork.RepMovies
                .Get(asNoTracking: true)
                .Select(o => new MovieDto()
                {
                    Id = o.Id,
                    Title = o.Title,
                    ReleaseYear = o.ReleaseYear,
                })
                .ToListAsync();

            return Ok(new Result<List<MovieDto>>(movies));
        }

        [HttpGet("{id:long}")]
        public async Task<IActionResult> Get(long id)
        {
            var movie = await _unitOfWork.RepMovies
                .Get(o=>o.Id == id, asNoTracking: true)
                .Select(o => new MovieDto()
                {
                    Id = o.Id,
                    Title = o.Title,
                    ReleaseYear = o.ReleaseYear,
                })
                .FirstOrDefaultAsync();

            return Ok(movie != null 
                ? new Result<MovieDto>(movie)
                : new Result<MovieDto>("There is no item selected by entered parameters."));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] MovieDto? movieDto)
        {
            if (movieDto == null)
                return BadRequest(new Result<MovieDto>("MovieDto is null."));
            
            var movie = new Movie()
            {
                Title = movieDto.Title,
                ReleaseYear = movieDto.ReleaseYear,
            };
            _unitOfWork.RepMovies.Add(movie);
            
            var result = await _unitOfWork.SaveChangesAsync();
            return result.Returned
                ? Ok(new Result<MovieDto>(new MovieDto()
                {
                    Id = movie.Id,
                    Title = movie.Title,
                    ReleaseYear = movie.ReleaseYear,
                }))
                : BadRequest(new Result<MovieDto>(result.Message!));
        }

        [HttpDelete("{id:long}")]
        public async Task<IActionResult> Delete(long id)
        {
            var movie = await _unitOfWork.RepMovies
                .Get(o => o.Id == id)
                .FirstOrDefaultAsync();
            
            if (movie == null)
                return BadRequest(new ResultBool("There is no item selected by entered parameters."));

            _unitOfWork.RepMovies.Remove(movie);

            return Ok(await _unitOfWork.SaveChangesAsync());
        }
    }
}
