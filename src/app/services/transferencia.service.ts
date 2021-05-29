import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private http: HttpClient) {
    this.listaTransferencia = []
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any) {
    this.hidratarDados(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratarDados(transferencia: any) {
    transferencia.data = new Date();
  }

}
