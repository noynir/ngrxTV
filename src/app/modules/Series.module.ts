import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SeriesContainerComponent} from "../Containers/seriesContainer.component";
import {ImageUrlPipe} from "../Pipes/imageUrl.pipe";
import {SeriesListComponent} from "../Components/seriesList.component";
@NgModule({
  imports:[CommonModule],
  declarations:[SeriesContainerComponent,SeriesListComponent,ImageUrlPipe],
  exports:[SeriesContainerComponent]

})
export class SeriesModule{}
