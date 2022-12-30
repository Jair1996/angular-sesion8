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

  esCorrecto: boolean = false;

  touch: boolean = false;

  navItems: Array<string> = ['Home', 'Support', 'Contact'];

  login() {
    this.touch = true;

    if (
      this.formulario.usuario === this.credenciales.usuario &&
      this.formulario.password === this.credenciales.password
    ) {
      this.esCorrecto = true;
      return;
    }

    this.esCorrecto = false;
  }
}
