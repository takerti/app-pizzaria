import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public tipoProduto !: string;

  constructor(private http: HttpClient) { }

  getProduct() {
    
    var jsonPizzas = "../assets/dados/pizzas.json";

    return this.http.get<any>(jsonPizzas)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getBordas() {
    var jsonBordas = "../assets/dados/bordas.json";

    return this.http.get<any>(jsonBordas)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}