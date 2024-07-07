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
  
  numero: string = '';
  num_inv: string = '';
 

  conversion():boolean{
    
    const invertido = this.numero.split('').reverse().join('');
    return this.numero === invertido;
    }
    
    
    verificar(){
    if(this.conversion()){
      this.num_inv = "El número es capicúa"  
    }else{
      this.num_inv = "El número no es capicúa";
    }
  }
 
   
}
