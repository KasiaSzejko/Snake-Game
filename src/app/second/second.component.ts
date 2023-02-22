import { Component, Input, Output, EventEmitter} from '@angular/core';

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
  }

