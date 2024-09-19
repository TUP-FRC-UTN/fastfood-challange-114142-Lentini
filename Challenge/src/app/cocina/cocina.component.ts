import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../pedido';
import { PedidoServiceService } from '../pedido-service.service';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css'
})
export class CocinaComponent {
pedidos: Pedido[] = []
pedidosEnPreparacion: Pedido[] = [];
pedidosListos: Pedido[] = [];
constructor(private pedidosService: PedidoServiceService){}

ngOnInit(): void{
  this.pedidosService.pedido$.subscribe((pedidos: Pedido[])=>{
    this.pedidos = pedidos;
    this.actualizarSecciones();
  })
}
actualizarSecciones(){
  this.pedidosEnPreparacion = this.pedidos.filter(p =>p.status === "Preparando");
  this.pedidosListos = this.pedidos.filter(p =>p.status === "Listo")
}
prepararPedido(pedido : Pedido){
  this.pedidosService.actualizarEstadoPedido(pedido.number, "Preparando")
  alert(`El pedido #${pedido.number} esta en preparacion`)
}
completarPedido(pedido : Pedido){
  this.pedidosService.actualizarEstadoPedido(pedido.number, "Listo")
  alert(`El pedido #${pedido.number} esta listo`)
}
}
