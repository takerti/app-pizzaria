import { Component, DebugEventListener, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-bordas',
  templateUrl: './bordas.component.html',
  styleUrls: ['./bordas.component.scss']
})

export class BordasComponent implements OnInit {

  public itemSelecionado: any;
  public bordas: any;

  constructor(private cartService: CartService, private apiPizzas: ApiService) { }

  ngOnInit(): void {

    this.itemSelecionado =  this.cartService.itemSelecionado;
    
    debugger

    this.getBordas();
  }

  addBorda(item: any, borda: any) {
debugger
    item.borda.tipo = borda.tipo;
    item.borda.preco = borda.preco;

    this.cartService.atualizarItem(item);
  }

  getBordas() {
    this.apiPizzas.getBordas()
      .subscribe(res => {
        debugger
        this.bordas = res;
      });
  }

}
