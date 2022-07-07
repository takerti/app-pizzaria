import { Component, OnInit } from '@angular/core';
import { ConsultaCepService } from 'src/app/service/consulta-cep';


@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})

export class EnderecoComponent implements OnInit {
 
  constructor(private cepService: ConsultaCepService){}

  ngOnInit(): void {    
  }

  consultaCEP(valor: any, form: any) {

    debugger
      this.cepService.consultaCEP(valor).subscribe(((dados: Object) => this.popularForm(dados, form)));

    // const cep = this.formulario.get('endereco.cep').value;

    // if (cep != null && cep !== '') {
    //   this.cepService.consultaCEP(cep)
    //   .subscribe(dados => this.populaDadosForm(dados));
    // }
  }

  popularForm(dados: any, form: any)
  {
    debugger
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf:dados.uf
    });

  }

 
}