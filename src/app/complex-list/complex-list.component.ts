import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-list',
  templateUrl: './complex-list.component.html',
  styleUrls: ['./complex-list.component.css']
})
export class ComplexListComponent implements OnInit {
  task=[];
  addTask= '';
  constructor() { }

  ngOnInit() {
  }
  
  addNewTask() {
    if(this.addTask !== '') {
      this.task.push(this.addTask);
      this.addTask ='';
    }
  }
 

}
