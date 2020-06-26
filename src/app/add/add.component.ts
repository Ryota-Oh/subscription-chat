import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Subscription } from '../class/subscription'
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';


// const SUBSCRIPTIONS: Subscription[] = [
// new Subscription('Netflix', 1000),
// new Subscription('Spotify', 480),
// new Subscription('hulu', 980),
// new Subscription('AWS', 10000),
// ]

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  name = "";
  price = "";


  ngOnInit(): void {
  }


}
