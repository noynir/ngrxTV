import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SeriesContainerComponent} from "./series-container/seriesContainer.component";
import { SeriesViewComponent } from './series-view/series-view.component';
import { SeriesViewContainerComponent } from './series-view-container/series-view-container.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports:[CommonModule,SharedModule],
  declarations:[SeriesContainerComponent,SeriesViewComponent, SeriesViewContainerComponent]
})
export class SeriesModule{}
