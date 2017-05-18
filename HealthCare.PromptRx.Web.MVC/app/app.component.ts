import { Component } from "@angular/core";
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: "my-app", template: "<h1>Hi this is first component {{welcomeMessage}}</h1>"
})
export class AppComponent {
    welcomeMessage: string = "from Angular 2"
}