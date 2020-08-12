import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  nombre: string;
  
  usuario = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }
  onSumitTemplate(){
    console.log('Form Summit');
    console.log(this.usuario);
  }

}
