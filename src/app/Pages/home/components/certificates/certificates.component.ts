import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  StartImg: string = '../../../../assets/img/start-img.svg';
  EndImg: string = '../../../../assets/img/end-img.svg';
  Img_1: string = '../../../../assets/img/certificates-1.png';
  Img_2: string = '../../../../assets/img/certificates-2.png';
  Img_3: string = '../../../../assets/img/certificates-3.png';
  certificatesList: any[] = [
    { img: this.Img_1, alt: 'Certificates' },
    { img: this.Img_2, alt: 'Certificates' },
    { img: this.Img_3, alt: 'Certificates' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
