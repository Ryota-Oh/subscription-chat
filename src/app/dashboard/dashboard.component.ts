import { Component, OnInit } from '@angular/core';
import { Subscription } from '../class/subscription';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AddComponent } from '../add/add.component';

const SUBSCRIPTIONS: Subscription[] = [
  new Subscription('Netflix', 1000),
  new Subscription('Spotify', 480),
  new Subscription('hulu', 980),
  new Subscription('AWS', 10000),
]


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  item: Observable<any>;
  subscriptions = SUBSCRIPTIONS;


  constructor(private db: AngularFireDatabase) {
    this.item = db.object('/item').valueChanges();
  }

  ngOnInit(): void { }

}

