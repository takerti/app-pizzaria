import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  enviarPedido(){

    var msg = encodeURIComponent("teste");

    window.open("https://api.whatsapp.com/send/?phone=55011961653010&text=" + msg, "_blank");


  }

}
