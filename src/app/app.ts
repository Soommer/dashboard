import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderDashboardComponent } from './components/order-dashboard.component/order-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard');
}
