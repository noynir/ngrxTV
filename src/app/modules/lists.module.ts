import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NewListComponent} from "../Components/NewList.component";
import {ListsComponent} from "../Components/Lists.component";
import {ListsContainerComponent} from "../Containers/ListsContainer.component";
@NgModule({
  imports:[CommonModule],
  declarations:[NewListComponent,ListsComponent,ListsContainerComponent],
  exports:[ListsContainerComponent]
})
export class ListsModule{}
