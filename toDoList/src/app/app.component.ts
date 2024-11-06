import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todoInterface';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { TodoSearchComponent } from "./todo-search/todo-search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItemComponent, CommonModule, FormsModule, TodoFormComponent, TodoSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  toDoList : Todo[] = [
    {task: 'finish todo list lab', completed: false, duration: 4, priority:"medium", visible: true},
    {task: 'vote', completed: true, duration: .5, priority:"high", visible: true},
    {task: 'walk dog', completed: false, duration: .75, priority:"low", visible: true}
  ]

  addTask(todo:Todo){
    const newTodo: Todo = {
      task: todo.task,
      completed: false,
      duration: todo.duration,
      priority: todo.priority,
      visible: true
    };
    this.toDoList.push(newTodo);
  }

  completeTask(index: number) {
    this.toDoList[index].completed = true;
  }

  removeTask(index: number) {
    this.toDoList.splice(index, 1);
  }

  searchTask(searchRequest:string){
    this.toDoList.forEach(aTodo => {
      if(aTodo.task.includes(searchRequest)){
        console.log(aTodo)
        aTodo.visible = true
      }
      else{
        aTodo.visible = false
      }
      
    });

  }

  
}
