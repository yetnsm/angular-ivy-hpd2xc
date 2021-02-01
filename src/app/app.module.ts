import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ObterProdutosComponent } from './obter-produtos/obter-produtos.component';
import { ProdutoService } from './model/produto.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ObterProdutosComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProdutoService]
})
export class AppModule { }
