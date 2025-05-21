import { Component, EventEmitter, inject, Input, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>(); //cancel event emitter
  @Output() add = new EventEmitter<NewTaskData>();
  private tasksService = inject(TasksService);
  @Input({ required: true}) userId!: string

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate= '';

cancelNewTask() {
  console.log('cancelNewTask called - New Task Component');
  this.cancel.emit();
}

onSubmit() {
this.tasksService.addTask({
  title: this.enteredTitle,
  summary: this.enteredSummary,
  date: this.enteredDueDate}, this.userId
);
this.cancel.emit();
}

}
