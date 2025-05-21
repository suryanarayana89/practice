import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask: boolean = false;
  
  // private tasksService: TasksService;
  // constructor(tasksService: TasksService ){
  //   this.tasksService = tasksService;
  // }

  constructor(private tasksService: TasksService ){
    
  }
 
  get SelectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }


  // onCompleteTasks(id: string){
  //   return this.tasksService.removeTask(id);
  // }

  onStartAddTask(){
    console.log('Add Task Clicked on Tasks Component!!');
    this.isAddingTask=true;
  }

  onCancelAddTask(){
    console.log('Cancelling Add Task Called -- Main Tasks Component');
    this.isAddingTask=false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  }
}
