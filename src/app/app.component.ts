import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

const config = require('./firebase.config.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  featureLoaded = 'recipe';

  ngOnInit() {
    firebase.initializeApp(config.firebaseConfig);
  }

  onNavigate(feature: string) {
    this.featureLoaded = feature;
  }
}
