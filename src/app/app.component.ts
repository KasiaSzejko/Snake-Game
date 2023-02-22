import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snake';
    public readyToPlay = false;
    public activeUser = '';
    public presentingGame = true;
  

public onNamePassed (userName: string) {
  if(userName){
    this.readyToPlay = true;
    this.activeUser = userName;
  }
}

public onFinishedGame(finishedGame: boolean) {
  if (finishedGame) {
    this.readyToPlay = false;
  }
}



}



