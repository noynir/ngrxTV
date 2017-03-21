import {TvSeries} from "./TvSeries";
export interface TvSeriesResponse {
  page:number,
  results:TvSeries[],
  total_results:number,
  total_page:number
}
