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
  pal_inv: string = '';
 

  conversion():boolean{
    
    const invertido = this.palabra.split('').reverse().join('');
    return this.palabra === invertido;
    }
    
    
    verificar(){
    if(this.conversion()){
      this.pal_inv = `${this.palabra} Es capicúa`  
    }else{
      this.pal_inv = `${this.palabra} No es capicúa`;
    }
  }


  }

