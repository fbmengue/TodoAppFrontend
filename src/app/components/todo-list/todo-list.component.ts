import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: any;

  constructor(
    private service: DataService,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

  markAsDone(todo: { id: any; done: boolean; }) {
    this.afAuth.idToken.subscribe((token: any) => {
      const data = { 
        id: todo.id,
        user: "userid"
       };
      this.service.markAsDone(data, token).subscribe(res => { todo.done = true });
    });
  }
}
