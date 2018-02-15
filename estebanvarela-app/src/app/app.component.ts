import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './service/principal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _principalService: PrincipalService) {
  }
  ngOnInit() {
   this.loadDogs();
  }

  loadDogs() {
    this._principalService.getAll().subscribe(
      data => {
        const datos = data.json();
        console.log(datos.message);
      }
    );
  }
}
