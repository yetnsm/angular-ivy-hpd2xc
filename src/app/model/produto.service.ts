import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ProdutoService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = "https://loja-info.yetnsm.repl.co/";
  }

  buscarProdutos(): Observable<any> {
    return this.http.get<any>(`${this.URL}produtos`);
  }

  deletarProduto(id: HTMLInputElement): Observable<any> {
    if(id.value == "") {
      alert("Nenhum produto encontrado.");
    }
    return this.http.delete<any>(`${this.URL}produtos/{id.value}`);
  }
}