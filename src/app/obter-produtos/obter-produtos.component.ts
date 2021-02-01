import { Component, OnInit } from '@angular/core';
import { Produto } from "../model/produto";
import { ProdutoService } from '../model/produto.service';

@Component({
  selector: 'app-obter-produtos',
  templateUrl: './obter-produtos.component.html',
  styleUrls: ['./obter-produtos.component.css']
})
export class ObterProdutosComponent implements OnInit {

  constructor(private prod: ProdutoService) { }

  produtos: Produto[];

  ngOnInit() {
    this.produtos = [];
    this.buscarProdutos();
  }

  // exercicio 1
  buscarProdutos() {
    return this.prod.buscarProdutos().subscribe(
      (res) => {
        this.produtos = res;
      }
    );
  }

  // exercicio 3
  deletarProduto(id: HTMLInputElement): any {
    this.prod.deletarProduto(id).subscribe(
      (res) => {
        this.produtos = res.prods;
      }
    );
  }
}