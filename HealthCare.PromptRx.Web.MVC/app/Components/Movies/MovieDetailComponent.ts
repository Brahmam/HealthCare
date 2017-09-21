import { Component, Input, OnInit, NgModule } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
    selector: 'movie-details',
    providers: [],
    templateUrl: './app/Components/Movies/MovieDetails.html',
})

export class MovieDetailComponent implements OnInit {
    @Input() movietoeditoradd: Movie;    

    constructor() {
    }

    ngOnInit() {
        //It's for onload type
        this.movietoeditoradd = new Movie();
    }
}