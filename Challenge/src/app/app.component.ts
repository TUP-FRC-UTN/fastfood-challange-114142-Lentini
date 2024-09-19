import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CocinaComponent } from './cocina/cocina.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { Pedido } from './pedido';
import { PedidoServiceService } from './pedido-service.service';
import { POSComponent } from "./pos/pos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, CocinaComponent, DeliveryComponent, POSComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  pedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoServiceService) {}

 
  ngOnInit() {
    this.pedidoService.pedido$.subscribe(pedidos => {
      this.pedidos = pedidos;  
    });
}}
