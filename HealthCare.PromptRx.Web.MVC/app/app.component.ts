import { Component } from "@angular/core";
@Component({
    selector: "my-app",
    template:`<p>{{welcomeMessage}}</p>`
})
export class AppComponent {
    welcomeMessage: string = "Components are the most basic building block of an UI in an Angular application.";
}