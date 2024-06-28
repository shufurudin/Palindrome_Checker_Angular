import { Component, inject } from '@angular/core';
import { SharedService } from '../services/channel.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  isPalindrome = inject(SharedService)
  starter = inject(SharedService)
  // I - Idem ao que fizemos na classe PalindromeComponent mais acima
  isTrue = ""
  isFalse = ""

  started() {
    if (this.starter.getStart() === 1) {
      // I - Estamos verificando o resultado do setStart, invocado na classe PalindromeComponent, invocando o getStart aqui
      if (this.isPalindrome.getData()) {
        // I - O mesmo ocorre nesta parte, estamos verificando o que foi deixado pelo setData, determinado na classe PalindromeComponent, usando o metodo getData
        this.isTrue = "show"
        this.isFalse = ""
      } else {
        this.isFalse = "show"
        this.isTrue = ""
      }
      return "show"
    } else {
      this.isFalse = ""
      this.isTrue = ""
      return ""
    }
  }
}
