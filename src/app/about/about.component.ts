import { Component, OnInit } from '@angular/core';

import { About } from '../about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about = {
    title: 'Mister Client III',
    body: 'Hello, my name is Mister Cient. My father, Mister Client II, founded the company Mister Client and Sons Plants and Stuff in 1975. His father, Mister Client I, had a dream of crossing the pond to America where he would sell Americans things that grew outside, for free! It was a perfect business model. Sadly, my grandfather died before he could make this dream a reality. My father, being the go-getter that he is, took his father\'s idea straight to America the very next day, where he made a lot of money selling plants until the year 2017 when I, following in my own father\'s footsteps, shipped him off to Shady Pines retirement home and took control of the business. Since then, I have been making money selling plants to people.'
  };

  constructor() { }

  ngOnInit() {
  }

}
