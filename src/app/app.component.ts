import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngSightMaterial';
  
  sidebarOpen = true;
  constructor(){}
  ngOnInit(){}

  sideBarToggler(){
    this.sidebarOpen = !this.sidebarOpen;
  }
}
