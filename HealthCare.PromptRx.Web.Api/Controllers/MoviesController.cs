using HealthCare.Application.Services;
using HealthCare.PromptRx.Infrastructure.Data;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HealthCare.PromptRx.Web.Api.Controllers
{
    [EnableCors("*", "*", "*")]
    public class MoviesController : ApiController
    {
        private MovieService movieService;

        [HttpGet]
        public IHttpActionResult Get()
        {
            movieService = new MovieService();
            return Ok(movieService.GetMovies());
        }

        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            movieService = new MovieService();
            return Ok(movieService.Delete(id));
        }

        [HttpPost]
        public IHttpActionResult Post(Movie movie)
        {
            movieService = new MovieService();
            return Ok(movieService.Save(movie));
        }

        [HttpPut]
        public IHttpActionResult Put(Movie movie)
        {
            movieService = new MovieService();
            return Ok(movieService.Put(movie));
        }
    }
}