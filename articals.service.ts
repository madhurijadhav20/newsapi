import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'

})
export class ArticalsService {

  constructor(private httpclient:HttpClient) { }
  api_url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fab74b121ddd4f5b9d900fd235a89038";
  // apiKey="fab74b121ddd4f5b9d900fd235a89038";
  // url="https://newsapi.org/v2/top-headlines?qInTitle=";
  // params="&inflation&from=2022-06-20&sortBy=relevancy&apiKey="

  // 
  displayarticals()
  {
    return this.httpclient.get(this.api_url);
  }
  // displayarticals(country:string)
  // {
  //   return this.httpclient.get(this.url+country+this.params+this.apiKey);
  // }
}
