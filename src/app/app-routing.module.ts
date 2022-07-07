import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BordasComponent } from './componentes/bordas/bordas.component';
import { CartComponent } from './componentes/carrinho/carrinho.component';
import { EnderecoComponent } from './componentes/endereco/endereco.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { PagamentoComponent } from './componentes/pagamento/pagamento.component';
import { ProdutosComponent } from './componentes/produtos/produtos.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'products', component: ProdutosComponent},
  {path:'cart', component: CartComponent},
  {path:'bordas', component: BordasComponent},
  {path:'inicio', component: HomeComponent},  
  {path:'endereco', component: EnderecoComponent},
  {path:'pagamento', component:PagamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
