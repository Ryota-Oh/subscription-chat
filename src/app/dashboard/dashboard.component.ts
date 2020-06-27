import { Component, OnInit } from '@angular/core';
import { Subscription } from '../class/subscription';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

// const SUBSCRIPTIONS: Subscription[] = [
//   new Subscription('Netflix', 1000),
//   new Subscription('Spotify', 480),
//   new Subscription('hulu', 980),
//   new Subscription('AWS', 10000),
// ]


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  price = "";
  name = "";
  subscriptions: Observable<any[]>;
  subscriptionsRef: AngularFireList<any>;


  constructor(private db: AngularFireDatabase) {
    this.subscriptionsRef = db.list('/subscriptions');
    this.subscriptions = this.subscriptionsRef.valueChanges();
  }


  clearTexr(): void {
    const CLEAR = document.getElementById('hard');
    CLEAR.nodeValue = "";
  }

  addSubscription(name: string, price: number): void {
    if (Subscription) {
      this.subscriptionsRef.push(new Subscription(name, price));
      this.name = '';
      this.clearTexr
    }
  }

  ngOnInit(): void { }

}

