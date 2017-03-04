import {TvSeries} from "./TvSeries";

export class List{
    constructor(public id:number,public name:string,public series:TvSeries[]=[]){}
}
