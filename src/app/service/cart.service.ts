import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public itemSelecionados: any;
  public itemSelecionado: any;

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    debugger
    product.qte += 1;
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  addItemSelecionado(product: any) {
    this.itemSelecionado = product;
  }

  atualizarItem(product: any) {

    let index = this.cartItemList.indexOf(product);
    debugger
    this.cartItemList[index].borda.tipo = product.borda.tipo;
    this.cartItemList[index].borda.preco = product.borda.preco;
    this.cartItemList[index].observacao = product.observacao;
    this.cartItemList[index] = product;    
  }


  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    if (product.qte > 0) {
      product.qte -= 1;
      this.cartItemList.map((a: any, index: any) => {
        if (product.id === a.id) {
          this.cartItemList.splice(index, 1);
        }
      })
      this.productList.next(this.cartItemList);
    }
  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}