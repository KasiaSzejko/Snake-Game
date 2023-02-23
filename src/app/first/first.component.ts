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
public imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Q6WoDe782nwbRdsFYHQ24TsJD9xFmCPhOg&usqp=CAU';
}
