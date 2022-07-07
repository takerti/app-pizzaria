import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component'
import { CartComponent } from './componentes/carrinho/carrinho.component'
import { ProdutosComponent } from './componentes/produtos/produtos.component';

import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './componentes/home/home/home.component';
import { BordasComponent } from './componentes/bordas/bordas.component';
import { EnderecoComponent } from './componentes/endereco/endereco.component';
import { FormsModule } from '@angular/forms';
import { PagamentoComponent } from './componentes/pagamento/pagamento.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProdutosComponent,
    FilterPipe,
    HomeComponent,
    BordasComponent,
    EnderecoComponent,
    PagamentoComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }