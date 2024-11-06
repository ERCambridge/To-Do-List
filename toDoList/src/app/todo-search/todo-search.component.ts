import { Component, Output, EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-search.component.html',
  styleUrl: './todo-search.component.css'
})
export class TodoSearchComponent {
  @Output() search = new EventEmitter<string>

  searchRequest: string = "";

  searchTask(){
    this.search.emit(this.searchRequest);
  }

  clearSearch(){
    this.search.emit("");
  }

  

}
