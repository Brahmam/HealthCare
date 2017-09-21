import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { MovieListComponent } from "./MovieList.Component";
import { MovieDetailComponent } from "./MovieDetailComponent";
@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [MovieListComponent, MovieDetailComponent],
    bootstrap: [MovieListComponent]
})
export class movieModule {
}