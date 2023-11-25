import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
todos:Todo[];

constructor(){
  this.todos=[
    {
      sno:1,
      title:'title-1',
      desc:'Description one',
      active:true
    },
    {
      sno:2,
      title:'title-2',
      desc:'Description two',
      active:true
    },
    {
      sno:3,
      title:'title-3',
      desc:'Description three',
      active:true
    }
  ]

}

deletetodo(todo:Todo){

  const index=this.todos.indexOf(todo)
  console.log(index);
  this.todos.splice(index,1)
  
  console.log(todo);
  

}

addtodocall(todo:Todo){
  
  console.log(todo);
  
this.todos.push(todo)
}

}
