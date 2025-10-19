import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./components/tasks/task/task.component";
import { NewTaskComponent } from "./components/tasks/new-task/new-task.component";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

//datepipe is already in BrowserModule - So no datepipe in imports
@NgModule({
    declarations:[AppComponent,HeaderComponent,UserComponent,TasksComponent,TaskComponent,NewTaskComponent],
    bootstrap:[AppComponent],
    imports: [BrowserModule,FormsModule]
})


export class AppModule{

}