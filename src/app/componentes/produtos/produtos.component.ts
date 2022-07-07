import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  @ViewChild("cpf", { static: true }) observação: ElementRef | undefined;

  public itemSelecionados: any;
  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  tipoProduto: string = "";
  itemModal: any;
  check: boolean = true;
  public searchTerm !: string;

  observacao: string = '';

  constructor(private api: ApiService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {

    
    if (typeof this.api.tipoProduto === "undefined") {
      this.router.navigate(['/', 'inicio']);
    }

    this.itemSelecionados = this.cartService.cartItemList;

    this.tipoProduto = this.api.tipoProduto;

    this.api.getProduct()

      .subscribe(res => {

        this.productList = res;

        this.filterCategory = this.productList
          .filter((a: any) => {
            if (a.category == this.api.tipoProduto) {
              return a;
            }
          })

        this.productList.forEach((a: any) => {
          if (a.category === "1") {
            a.category = "pizza"
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;


    })


  }

  addtocart(item: any) {

    if(item.category == "pizza"){


    }

    this.cartService.addtoCart(item);
    this.itemSelecionados = this.cartService.cartItemList;
    this.cartService.addItemSelecionado(item);
  }

  adicionarComentario(item: any) {
    this.itemModal = item;
  }

  salvarComentario() {
    debugger
    this.itemModal.observacao = this.observacao;
    this.cartService.atualizarItem(this.itemModal);
  }


  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }

  removetocart(item: any) {
    this.cartService.removeCartItem(item);
    this.itemSelecionados = this.cartService.cartItemList;
  }


  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  isPizza() {

    if (this.tipoProduto == "pizza") {
      return true;
    }

    return false;
  }


}