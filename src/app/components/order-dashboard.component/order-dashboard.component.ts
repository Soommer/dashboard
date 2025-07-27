import { Component, OnInit } from '@angular/core';
import { OrderService, CartResponse } from '../../services/order.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from '../order-card.component/order-card.component';

@Component({
  selector: 'app-order-dashboard',
  imports: [CommonModule, OrderCardComponent], // NgIf i NgFor są w CommonModule
  standalone: true,
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {

  orders$: Observable<CartResponse[]>;
  

  errorMessage: string | null = null;
  

  loading: boolean = false;

  constructor(private orderService: OrderService) {

    this.orders$ = this.orderService.orders$;
  }

  ngOnInit() {
 
    this.loadInitialOrders();
    this.orderService.connectToOrderHub();
  }

  loadInitialOrders() {
    this.errorMessage = null;
    console.log("Rozpoczynam ładowanie początkowych zamówień...");


    this.orderService.loadOrders().subscribe({
      next: (obj) => {
        console.log(obj)
        //this.loading = false
        console.log(this.loading)
        console.log("Początkowe zamówienia załadowane.");
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Błąd podczas ładowania zamówień.';
        console.error("Wystąpił błąd podczas ładowania:", err);
      }
    });
  }

  onOrderCompleted(orderId: string) {

    this.errorMessage = null;
    

    this.orderService.markOrderCompleted(orderId).subscribe({

      next: () => {
        console.log(`Zamówienie ${orderId} oznaczone jako zrealizowane.`);
      },
      error: (err) => {
        this.errorMessage = 'Błąd przy oznaczaniu zamówienia jako zrealizowanego.';
        console.error(err);
      }
    });
  }
}