import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {AddListAction, DeleteListAction} from "../actions/lists";
import {List} from "../models/List";
import {Observable} from "rxjs";

@Component({
  selector:'lists',
  template:`
    <div *ngIf="lists">
        <ul>
          <li *ngFor="let list of lists" >
              <div>
                <div *ngIf="!showUpdatingList(list)" >{{list.name}}</div>
                <div *ngIf="showUpdatingList(list)" >
                  <input [value]="list.name" (keyup.enter)="updateList($event)"/>
                 </div>
                <span (click)="removeList(list)" >X</span>
                <span (click)="setListForUpdate(list)" >U</span>
              </div>
          </li>
        
        </ul>
    </div>
  `
})
export class ListsComponent{


  @Input()
  private lists:List[];

  @Input()
  private UpdatingList:List;

  @Output()
  private onListRemoveClicked:EventEmitter<number>=new EventEmitter();

  @Output()
  private onListUpdateClicked:EventEmitter<List>=new EventEmitter();

  @Output()
  private onListUpdated:EventEmitter<List>=new EventEmitter();


  constructor(private store:Store<AppState>){


  }

  showUpdatingList(list:List){
     return this.UpdatingList && list.id==this.UpdatingList.id;
  }

  removeList(list){
    this.onListRemoveClicked.emit(list.id);

  }

  setListForUpdate(list:List){
    this.onListUpdateClicked.emit(list);
  }

  updateList(event){
    if(event.target.value){
      this.UpdatingList.name = event.target.value;
      this.onListUpdated.emit(this.UpdatingList);
    }

  }

}
