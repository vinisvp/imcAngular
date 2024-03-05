import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {
  weight: number = 0;
  height: number = 0;
  bmi: number = 0;
  class: string = '';

  bmiOp(){
    this.bmi = this.weight / (this.height ** 2);
    if (this.bmi < 16.9)
    {
      this.class = 'Muito abaixo do peso';
    } else if (this.bmi > 17 && this.bmi < 18.4)
    {
      this.class = 'Abaixo do peso';
    } else if (this.bmi > 18.5 && this.bmi < 24.9)
    {
      this.class = 'Peso normal';
    } else if (this.bmi > 25 && this.bmi < 29.9)
    {
      this.class = 'Acima do peso';
    } else if (this.bmi > 30 && this.bmi < 34.9)
    {
      this.class = 'Obesidade grau I';
    } else if (this.bmi > 35 && this.bmi < 40)
    {
      this.class = 'Obesidade grau II';
    }else
    {
      this.class = 'Obesidade grau III';
    }
  }
}
