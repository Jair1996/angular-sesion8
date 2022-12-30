import { Component } from '@angular/core';

interface FormControl {
  usuario: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  credenciales: FormControl = {
    usuario: 'Angular',
    password: '123456',
  };

  formulario: FormControl = {
    usuario: '',
    password: '',
  };
}
