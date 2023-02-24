import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  @Input() public userName: string = '';
  data: string = '';
  ngOnInit() {
    this.userName = this.data;
  }
 
  @Output() public onExit = new EventEmitter<boolean>();

  public onExitClick() {
    this.onExit.emit(true);
  }
  public score = 0;
  public seconds = 0;
  public gameStatus = 'READY';
  public started = false;
  intervalId: any;

  public pointsCount() {
    this.score++;
    console.log(this.score);
  }

  public resetScoreAndTime() {
    this.score = 0;
    this.seconds = 0;
    clearInterval(this.intervalId);
  }

  public stopTime() {
    clearInterval(this.intervalId);
  }
  
  public secondsCount() {
    this.intervalId = setInterval(() => {
      this.seconds++;
    }, 1000);
  }

  public startGame() {
    this.gameStatus = 'STARTED';
    this.secondsCount();
  }
  public pauseGame() {
    this.gameStatus = 'PAUSED';
    this.stopTime();
  }
  public notStarted(): void {
    this.gameStatus = 'READY';
    this.resetScoreAndTime();
  }
  public gameOverStatus() {
    this.gameStatus = 'GAME OVER';
    this.stopTime();
    this.resetScoreAndTime();
  }
}


