import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedData: any
  sharedStart: any

  constructor() {}
  
  setData(data: boolean) {
    this.sharedData = data
  }
  getData(): boolean {
    return this.sharedData
  }

  setStart(value: number) {
    this.sharedStart = value
  }
  getStart(): number {
    return this.sharedStart
  }
}
// I - @Injectable decorator está servindo aqui como "meio campo" entre os componentes PalindromeComponent e ResultComponent, onde o primeiro determina os valores usando os metodos setData e setStart enquanto o segundo usa esses valores através dos metodos getData e getStart. A classe SharedService é que será injetada nas outras duas, conforme abaixo (ver notas em I). Em suma, tem a função de link entre os componentes/classes PalindromeComponent e ResultComponent, onde um fornece os dados necessários para execução do outro e assim realizando a interação entre os componentes.
// @Injectable precisa ser importado do @angular/core, o providedIn determina o escopo de disponibilidade desta classe que neste caso é para todo o projeto (root)
