import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  featureLoaded = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBJvlgXiCQAheSfLKefAJcq0phWcctEuDg',
      authDomain: 'ng-recipe-book-89d1d.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.featureLoaded = feature;
  }
}
