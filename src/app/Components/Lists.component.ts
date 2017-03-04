import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {State} from "../reducers";
import {AddListAction, DeleteListAction} from "../actions/lists";
import {List} from "../models/List";
import {Observable} from "rxjs";

@Component({
  selector:'lists',
  template:`
    <div>
      <input placeholder="Enter List Name" [value]="listName" #nameRef (keyup.enter)="addList($event);nameRef.value=null"/>
    </div>
    <div>
        <ul>
          <li *ngFor="let list of lists$ | async" >
              <div>
                {{list.name}}
                <span (click)="removeList(list)" >X</span>
              </div>
          </li>
        
        </ul>
    </div>
  `
})
export class ListsComponent implements OnInit{

  private lists$:Observable<List[]>;
  private listName:string=null;


  constructor(private store:Store<State>){


  }

  ngOnInit(){
    this.lists$ = this.store
      .map((state)=>state.lists);

  }

  addList(event){
    let listName = event.target.value;
    let randomId = Math.floor(Math.random() * 10000)
    this.store.dispatch(new AddListAction(new List(randomId,listName)));

  }

  removeList(list){
    this.store.dispatch(new DeleteListAction(list.id));
  }

}
