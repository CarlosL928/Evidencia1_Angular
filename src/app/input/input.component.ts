import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, InputComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {


  
  palabra: string = '';
  resultado: string = '';

  verificarCapicua() {
    this.resultado = this.palabra === this.palabra.split('').reverse().join('') ? `${this.palabra} Es capicúa` : `${this.palabra} No es capicúa`;
  }
}