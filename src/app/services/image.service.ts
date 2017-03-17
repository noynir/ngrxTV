import {Injectable} from "@angular/core";
import {ImageType} from "../models/ImageType";


@Injectable()
export class ImageService{

  private imagePrefix ='http://image.tmdb.org/t/p/';

  getImageUrl(type:ImageType,path: string){

    let imageSize = type==ImageType.Poster ? 'w154' : 'w1280';

    return `${this.imagePrefix}${imageSize}${path}`;

  }


}
