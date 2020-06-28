import { Component, OnInit } from '@angular/core';
import { Subscription } from '../class/subscription';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name: string;
  price: number;
  subscriptions: Subscription[]
  subscriptionsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.subscriptionsRef = db.list('/subscriptions');
    this.subscriptionsRef.snapshotChanges()
      .subscribe(snapshots => {
        this.subscriptions = snapshots.map(snapshot => {
          const values = snapshot.payload.val();
          return new Subscription({ key: snapshot.payload.key, ...values });
        });
      });
  }

  addSubscription(name: string, price: number): void {
    if (Subscription) {
      this.subscriptionsRef.push(new Subscription({ name: name, price: price }));
      this.name = '';
      this.price;
    }
  }

  deleteItem(key: string): void {
    this.subscriptionsRef.remove(key);
  }

  // totalPrice(): void {
  //   let total = 0;
  //   for (let i = 0; i < this.subscriptions.length; i++) {
  //   }
  // }

  ngOnInit(): void { }
}

