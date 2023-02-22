import { Component, EventEmitter, Output } from '@angular/core';

interface FormData {
  name: string;
  email: string;

}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  @Output() public onStart = new EventEmitter<string>();
  public onSubmit(data: FormData) {
    this.onStart.emit(data.name)
    console.log(data);
}
}
