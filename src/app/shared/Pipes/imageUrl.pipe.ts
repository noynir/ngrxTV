import {Pipe, PipeTransform} from "@angular/core";
import {ImageType} from "../../models/ImageType";
import {ImageService} from "../../services/image.service";

@Pipe({name:'imageUrl'})
export class ImageUrlPipe implements PipeTransform{

  constructor(private imageService:ImageService){}

  transform(value:string,type:ImageType = ImageType.Poster){
    return this.imageService.getImageUrl(type,value);
  }
}
