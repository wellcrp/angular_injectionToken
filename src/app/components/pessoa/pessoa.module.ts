import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa/pessoa.component';
import { MY_TOKEN_ACCESS } from './pessoa.injectionToken';

@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PessoaComponent
  ],
  providers: [
    { provide: MY_TOKEN_ACCESS, useValue: 'Resultado do injector Vai ser exibido na tela' }
  ]
})
export class PessoaModule { }
