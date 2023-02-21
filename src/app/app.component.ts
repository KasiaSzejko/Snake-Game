import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snake';
    public readyToPlay = false;
  

public onNamePassed (userName: string) {
  if(userName){
    this.readyToPlay = true;
  }
}

}
