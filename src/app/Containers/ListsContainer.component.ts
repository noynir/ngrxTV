import {Component, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {AddListAction, DeleteListAction, SetUpdateListAction, UpdateListAction} from "../actions/lists";
import {List} from "../models/List";
import {AppState} from "../reducers/index";
import {Observable} from "rxjs";
import {ListState} from "../reducers/list";
@Component({
  selector:'lists-container',
  styles:[`
    .lists-menu{
       width: 15rem;
       background-color: #181818;
       color:#fff;
       position: fixed;
       height: 100vh;
       top:0;
       left: 0;
     
    }
    .lists-menu h2{
        margin: 0;
        padding: 0;
    }
    
    
  `],
  template:`
    <div class="lists-menu padTop-main">
        <h2>My Lists</h2>
        <div>
          <new-list (onListSubmitted)="newListSubmitted($event)" > </new-list>
        </div>
        <nav>
           <lists [lists]="lists$ | async" [UpdatingList]="updatingList$ | async"
            (onListRemoveClicked)="onListRemoved($event)"
             (onListUpdateClicked)="onListSetForUpdate($event)"
              (onListUpdated)="onListUpdated($event)"
              ></lists>
        </nav>  
    </div>
  `
})
export class ListsContainerComponent implements OnInit{

    private lists$:Observable<List[]>;

    private updatingList$:Observable<List>;

    constructor(private store:Store<AppState>){

    }

    ngOnInit(){
      this.lists$=this.store
        .map((state)=>state.currentLists.lists);

      this.updatingList$=this.store
        .map((state)=>state.currentLists.updatingList);
    }

    newListSubmitted(value){
      let listName = value;
      let randomId = Math.floor(Math.random() * 10000)
      this.store.dispatch(new AddListAction(new List(randomId,listName)));
    }

    onListRemoved(id){
        this.store.dispatch(new DeleteListAction(id));
    }

    onListSetForUpdate(list:List){
        this.store.dispatch(new SetUpdateListAction(list));
    }

    onListUpdated(list:List){
      this.store.dispatch(new UpdateListAction(list)) ;
    }
}
