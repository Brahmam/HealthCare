import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from './MovieService';
import { Global } from '../../../app/Shared/global';

@Component({
    selector: 'my-movies',
    templateUrl: '/app/Components/Movies/MoviesList.html',
    providers: [MovieService]
})
export class MovieListComponent {
    constructor(private movieService: MovieService) {
    }

    movies: Movie[];
    public movietoeditoradd: Movie;
    movieModelTitle: string;
    resultMessage: string;
    isNotificationEnable: boolean = false;
    notificationClass: string;
    isSuccess: boolean = true;
    readonly errorMessage: string = "There is an error. please contact your system administrator";

    ngOnInit(): void {
        this.getMovies();
       
    }

    getMovies() {
        this.movieService.getMovies()
            .subscribe(data => {
                this.movies = data;
            }, // success function
            err => this.showError(this.errorMessage),//error handle function
            () => console.log('getMovies Task Complete') // complete function
            );
    }

    addNew() {
        this.movietoeditoradd = { ID: 0, Description: "", Director: "", Name: "", ReleaseDate: new Date(), Stars: "", Writers: "", ImageUrl: "" };
        this.movieModelTitle = "Add New Movie";
    }

    edit(movie: Movie) {
        this.movietoeditoradd = movie;
        this.movieModelTitle = "Edit " + movie.Name;
    }

    delete(id: number) {
        debugger;
        this.movieService.remove(id).subscribe(responseData => {
            if (responseData) {
                this.showSuccess("Deleted Successfully!");                
                this.getMovies();
                
            } else {
                this.showError(this.errorMessage);
            }
        },
            err => this.showError(this.errorMessage),
            () => console.log('Delete Task Completed')
        );
    }

    save(movie: Movie) {
        if (movie.ID) {
            //Edit Movie
            this.movieService.edit(movie).subscribe(responseData => {
                if (responseData) {
                    this.showSuccess("Updated Successfully!");                 
                } else {
                    this.showError("");
                }
            },
                err => this.showError(this.errorMessage),
                () => console.log('Edit Task Completed')
            );
        } else {
            //Add New Movie
            this.movieService.create(movie).subscribe(responseData => {
                if (responseData) {
                    this.showSuccess("Saved Successfully!"); 
                } else {
                    this.showError(this.errorMessage);
                }
            },
                err => this.showError(this.errorMessage),
                () => this.getMovies()//on save reload the moves
            );
        }
    }

    showSuccess(message: string) {
        this.isSuccess = true;
        this.notificationClass = 'notification-div success';
        this.isNotificationEnable = true;
        this.resultMessage = message;
        setTimeout(() => {
            this.isNotificationEnable = false;

        }, 4000);
    }
    showError(message: string) {
        this.isSuccess = false;
        this.notificationClass = 'notification-div error';
        this.isNotificationEnable = true;
        this.resultMessage = message;
        setTimeout(() => {
            this.isNotificationEnable = false;

        }, 8000);
    }
}