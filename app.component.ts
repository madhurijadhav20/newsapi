import { Component } from '@angular/core';
import { ArticalsService } from './articals.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsapi';
  a:any;
  constructor(private articalservice:ArticalsService){}
  
    
    
  
  ngOnInit()
  {
    
  }
  showdata1()
  {
    this.articalservice.displayarticals().subscribe((response:any)=>{
      this.a=response.articles;
      console.log(this.a);
      this.showdata=true;
    });
  }
  showdata=false;
  

  
}
