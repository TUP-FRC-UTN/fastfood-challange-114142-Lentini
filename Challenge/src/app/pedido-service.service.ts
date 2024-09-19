import { Injectable } from '@angular/core';
import { Pedido } from './pedido';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoServiceService {

  private pedidos : Pedido[] = []
  private pedidosSubject = new BehaviorSubject<Pedido[]>([])

  pedido$ = this.pedidosSubject.asObservable();
  constructor(){}
  agregarPedido(pedido: Pedido){
    this.pedidos.push(pedido)//agregamos a la lista
    this.pedidosSubject.next(this.pedidos) //emitimos la lista actualizada
  }
  obtenerPedidos(): Pedido[]{
    return this.pedidos;
  }
  actualizarEstadoPedido(number : number, status : string){
    const pedido = this.pedidos.find(p => p.number = number)
    if(pedido){
      pedido.status = status
      this.pedidosSubject.next(this.pedidos )
    }
  }

}
