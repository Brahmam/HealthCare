using HealthCare.PromptRx.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HealthCare.Application.Services
{
   public class MovieService
    {
        MovieDBContextDataContext movieDBContext;
        public List<Movie> GetMovies()
        {
             movieDBContext = new MovieDBContextDataContext();
            return movieDBContext.Movies.ToList();
        }
        public bool Delete(int movieId)
        {
            bool index = false;
            try
            {
                movieDBContext = new MovieDBContextDataContext();
                movieDBContext.Movies.DeleteOnSubmit(movieDBContext.Movies.Where(x => x.ID.Equals(movieId)).First());
                movieDBContext.SubmitChanges();
                index = true;
            }
            catch
            {
                //log error here
            }
            return index;
        }
        public bool Save(Movie movie)
        {
            bool index = false;
            try
            {
                movieDBContext = new MovieDBContextDataContext();
                movieDBContext.Movies.InsertOnSubmit(movie);
                movieDBContext.SubmitChanges();
                index = true;
            }
            catch
            {
                //log error here
            }
            return index;
        }
        public bool Put(Movie movie)
        {
            bool index = false;
            try
            {
                movieDBContext = new MovieDBContextDataContext();
                var _movie = movieDBContext.Movies.Where(x => x.ID.Equals(movie.ID)).FirstOrDefault();
                if (_movie != null)
                {
                    _movie.Description = movie.Description;
                    _movie.Director = movie.Director;
                    _movie.ImageUrl = movie.ImageUrl;
                    _movie.Name = movie.Name;
                    _movie.ReleaseDate = movie.ReleaseDate;
                    _movie.Stars = movie.Stars;
                    _movie.Writers = movie.Writers;
                    movieDBContext.SubmitChanges();
                    index = true;
                }

            }
            catch
            {
                //log error here
            }
            return index;
        }
    }
}
