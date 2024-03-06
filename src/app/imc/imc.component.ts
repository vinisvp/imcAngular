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
  img: string = '';
  class: string = '';

  bmiOp(){
    if (this.height == 0)
    {
      this.bmi = 0;
      this.class = 'Insira uma altura acima de 0';
      this.img = '';
    }
    else
    {
      this.bmi = this.weight / (this.height ** 2);
      if (this.bmi < 16.9)
      {
        this.class = 'Muito abaixo do peso';
        this.img =  '../assets/img/imcImage1.png';
      }
      else if (this.bmi > 17 && this.bmi < 18.4)
      {
        this.class = 'Abaixo do peso';
        this.img =  '../assets/img/imcImage2.png';
      }
      else if (this.bmi > 18.5 && this.bmi < 24.9)
      {
        this.class = 'Peso normal';
        this.img =  '../assets/img/imcImage3.png';
      }
      else if (this.bmi > 25 && this.bmi < 29.9)
      {
        this.class = 'Acima do peso';
        this.img =  '../assets/img/imcImage4.png';
      }
      else if (this.bmi > 30 && this.bmi < 34.9)
      {
        this.class = 'Obesidade grau I';
        this.img =  '../assets/img/imcImage5.png';
      }
      else if (this.bmi > 35 && this.bmi < 40)
      {
        this.class = 'Obesidade grau II';
        this.img =  '../assets/img/imcImage6.png';
      }
      else
      {
        this.class = 'Obesidade grau III';
        this.img =  '../assets/img/imcImage7.png';
      }
    }
  }
}
