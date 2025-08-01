import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartResponse } from '../../services/order.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent {
  @Input() order!: CartResponse;
  @Output() completed = new EventEmitter<string>();

  complete() {
    this.completed.emit(this.order.id);
  }
}
