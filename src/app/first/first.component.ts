import { Component } from '@angular/core';

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
  public oNstart(data: FormData) {
    console.log(data);
}
}
