import { Component, Inject, OnInit } from '@angular/core';
import { MY_TOKEN_ACCESS } from '../pessoa.injectionToken';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: []
})
export class PessoaComponent implements OnInit {
  valorToken: string;

  constructor(@Inject(MY_TOKEN_ACCESS) private valor: string) { }

  ngOnInit(): void {
    this.valorToken = this.valor;
  }
}
