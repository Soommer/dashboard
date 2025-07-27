import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { OrderDashboardComponent } from './components/order-dashboard.component/order-dashboard.component';

export const routes: Routes = [
    {path: '', component: OrderDashboardComponent}
];
