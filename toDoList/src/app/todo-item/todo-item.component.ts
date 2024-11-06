import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todoInterface';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!:Todo
  @Output() complete = new EventEmitter<Todo>;
  @Output() remove = new EventEmitter<void>

  newTodo: Todo = {task: '', completed: false, duration: 0, priority:"", visible: true}

  addTask(){
    this.complete.emit({
        task: this.newTodo.task, 
        duration: this.newTodo.duration,
        priority: this.newTodo.priority,
        completed: false,
        visible: true
      }); 
    this.newTodo.task = '';
    this.newTodo.duration = 0;
  }

  completeTask() {
    this.complete.emit();
  }

  removeTask() {
    this.remove.emit();
  }
}
