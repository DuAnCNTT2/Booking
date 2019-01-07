import {Component,OnInit} from '@angular/core';
import { from } from "rxjs";

@Component({
  selector: 'film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  cards = [
    {
      title: 'Huyền Thoại Kung Fu',
      description: 'Nội dung',
      buttonBook: 'Đặt vé',
      buttonDetail: 'Chi tiết',
      img: '../assets/images/huyenthoaikungfu.jpg'
    },
    {
      title: 'Khi các góa phụ hành động',
      description: 'Nội dung',
      buttonBook: 'Đặt vé',
      buttonDetail: 'Chi tiết',
      img: '../assets/images/khicacgoaphuhanhdong.jpg'
    },
    {
      title: 'Mặt trời con ở đâu',
      description: 'Nội dung',
      buttonBook: 'Đặt vé',
      buttonDetail: 'Chi tiết',
      img: '../assets/images/mattroiconodau.jpg'
    },
    {
      title: 'Mật vụ giải cứu',
      description: 'Nội dung',
      buttonBook: 'Đặt vé',
      buttonDetail: 'Chi tiết',
      img: '../assets/images/matvugiaicuu.jpg'
    },
    {
      title: 'Người băng 2',
      description: 'Nội dung',
      buttonBook: 'Đặt vé',
      buttonDetail: 'Chi tiết',
      img: '../assets/images/nguoibang2.jpg'
    },
    {
      title: 'Người nhện',
      description: 'Nội dung',
      buttonBook: 'Đặt vé',
      buttonDetail: 'Chi tiết',
      img: '../assets/images/nguoinhen.jpg'
    },
    {
      title: 'Truy tìm tung tích',
      description: 'Nội dung',
      buttonBook: 'Đặt vé',
      buttonDetail: 'Chi tiết',
      img: '../assets/images/truytimtungtichao.jpg'
    },
    {
      title: 'Tuần lộc giả danh',
      description: 'Nội dung',
      buttonBook: 'Đặt vé',
      buttonDetail: 'Chi tiết',
      img: '../assets/images/tuanlocgiadanh.jpg'
    },
    {
      title: 'Gái già lắm chiêu',
      description: 'Nội dung',
      buttonBook: 'Đặt vé',
      buttonDetail: 'Chi tiết',
      img: '../assets/images/gaigialamchieu.jpg'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
}