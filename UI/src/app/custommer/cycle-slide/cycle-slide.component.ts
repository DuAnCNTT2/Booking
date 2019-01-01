import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle-slide',
  templateUrl: './cycle-slide.component.html',
  styleUrls: ['./cycle-slide.component.css']
})
export class CycleSlideComponent implements OnInit {

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  ngOnInit() {
  }

}
