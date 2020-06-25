import { Component, OnInit } from '@angular/core';
import { Subscription } from '../class/subscription';



const SUBSCRIPTIONS: Subscription[] = [
  { name: 'Netflix', price: 1000 },
  { name: 'spotfy', price: 480 },
  { name: 'Hulu', price: 980 },
  { name: 'Apple music', price: 500 },
  { name: 'Youtube premium', price: 980 },

]


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  subscriptions = SUBSCRIPTIONS;

  constructor() { }

  ngOnInit(): void { }

}

