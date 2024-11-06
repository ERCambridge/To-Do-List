import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todoInterface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  @Output() save = new EventEmitter<Todo>

  newTodo: Todo = {task: '', completed: false, duration: 0, priority:"", visible: true}

  addTask() {
    this.save.emit({
        task: this.newTodo.task, 
        duration: this.newTodo.duration,
        priority: this.newTodo.priority,
        completed: false,
        visible: true
      }); 
    this.newTodo.task = '';
    this.newTodo.duration = 0;
  }
}
