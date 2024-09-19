import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pedido } from '../pedido';
import { PedidoServiceService } from '../pedido-service.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {
cliente: string = "";
descripcion: string = "";
status: string = "preparado"
constructor(private pedidoService : PedidoServiceService){}
crearPedido() {
  const pedido : Pedido = {
    number: Math.floor(Math.random() * 100),
    name: this.cliente,
    description : this.descripcion,
    date: new Date(),
    status : this.status
  };
  this.pedidoService.agregarPedido(pedido)
  this.cliente = "";
  this.descripcion = "";
}

}
