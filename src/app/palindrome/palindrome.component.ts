import { afterRender, Component, ElementRef, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BreakpointObserver, LayoutModule } from "@angular/cdk/layout";
import { SharedService } from '../services/channel.service';

@Component({
  selector: 'app-palindrome',
  standalone: true,
  imports: [FormsModule, LayoutModule],
  templateUrl: './palindrome.component.html',
  styleUrl: './palindrome.component.css'
})
export class PalindromeComponent {
  // CONSTRUCTOR
  constructor(private observer: BreakpointObserver, elementRef: ElementRef) {
    this.observer.observe(['(max-width: 390px)', '(max-width: 430px)','(max-width: 450px)']).subscribe(result =>{
      const breakpoints = result.breakpoints

      if (breakpoints['(max-width: 390px)']) {
        this.charNum = "39"
      } else if (breakpoints['(max-width: 430px)']) {
        this.charNum = "45"
      } else if (breakpoints['(max-width: 450px)']) {
        this.charNum = "51"
      } else {
        this.charNum = "51"
      }
    })

    afterRender(() => {
      elementRef.nativeElement.querySelector('#palindrome')?.focus()
    })
  }

  // VARIABLES / PROPERTIES

  userWord = ""
  Palindrome = ""
  charNum = ""
  isPalindrome = inject(SharedService)
  // I - Aqui estou setando dentro da variável isPalindrome a classe SharedService com o recurso inject(), com essa variável é que poderei utilizar as propriedades e metodos da classe injetada (ver nota em I-α).
  // inject deve ser importado do @angular/core
  starter = inject(SharedService)
  // I - Não diferente do acima visto, porém para armazenar um outro dado (ver nota em I-β)
  
  // FUNCTIONS / METHODS

  clear(dataEnter : string) {
    const regex = /[^A-Za-z0-9]/g
    return dataEnter.replace(regex, "").toLowerCase()
  }

  palindrometer(dataEnter : string) {
    const cleanEnter = this.clear(dataEnter)
    const reversedEnter = cleanEnter.split("").reverse().join("")

    if (reversedEnter === cleanEnter) {
      this.Palindrome = "palindrome"
      this.isPalindrome.setData(true)
      // (I-α) Aqui nós invocamos o metodo setData() da classe SharedService
      if (this.userWord === "") {
        this.starter.setStart(0)
        // (I-β) Semelhante ao que temos em I-α, porém invocando o metodo setStart.
      }
      else {
        this.starter.setStart(1)
      }
    } else {
      this.Palindrome = ""
      this.isPalindrome.setData(false)
      this.starter.setStart(1)
      if (this.userWord === "") {
        this.starter.setStart(0)
      } else {
        this.starter.setStart(1)
      }
    }
  }

  // @ViewChild("palindrome") myInputField: ElementRef
  // ngAfterViewInit() {
  //   this.myInputField.nativeElement.focus()
  // }
}
