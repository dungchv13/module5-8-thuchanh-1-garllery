import { Component, OnInit } from '@angular/core';

interface Img {
  id: number;
  src: string;
}

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.css']
})
export class ImgSlideComponent implements OnInit {
  img:Img = {id: 1, src: 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1'};
  imgs:Img[] = [
    {id: 1, src: 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1'},
    {id: 2, src: 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2'},
    {id: 3, src: 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3'},
    {id: 4, src: 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'},
    {id: 5, src: 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=5'},
    {id: 6, src: 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=6'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  previous() {
    if(this.img.id > 1){
      this.img = this.imgs[this.img.id-1-1];
    }
  }

  next() {
    if(this.img.id < 6){
      this.img = this.imgs[this.img.id];
    }
  }
}
