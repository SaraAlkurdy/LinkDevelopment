import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'link-development';
  loading: boolean = true;

  ngOnInit() {

    setTimeout(() => {
      /** spinner ends after 4 seconds */
      this.loading = false;
    }, 4000);
  }
}
