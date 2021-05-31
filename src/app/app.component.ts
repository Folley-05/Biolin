import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bioling';
  isAuth = false;
  lastUpdate = new Date ;
  

  constructor(){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer(){
   console.log("on allume tout");
  }
  getStatut(){
    
  }
}
