import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-are-we',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.scss'],
})
export class WhoAreWeComponent implements OnInit {
  MainHomeImg: string = '../../../../../assets/img/who-are-we.png';
  StartImg: string = '../../../../../assets/img/start-img.svg';
  EndImg: string = '../../../../../assets/img/end-img.svg';
  Done: string = '../../../../../assets/img/done.svg';

  constructor() {}

  ngOnInit(): void {}
}
