import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  Img_1: string = '../../../../../assets/img/companies-1.png';
  Img_2: string = '../../../../../assets/img/companies-2.png';
  Img_3: string = '../../../../../assets/img/companies-3.png';

  companiesLogo: any[] = [
    { img: this.Img_1, alt: 'Image 1' },
    { img: this.Img_2, alt: 'Image 2' },
    { img: this.Img_3, alt: 'Image 3' },
    { img: this.Img_1, alt: 'Image 1' },
    { img: this.Img_2, alt: 'Image 2' },
    { img: this.Img_3, alt: 'Image 3' },
    { img: this.Img_1, alt: 'Image 1' },
    { img: this.Img_2, alt: 'Image 2' },
    { img: this.Img_3, alt: 'Image 3' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
