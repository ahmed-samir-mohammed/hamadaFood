import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  Logo: string = '../../../assets/img/logo.png';

  COMPANY_LIST: any[] = [
    { name: 'About Us', link: '/about' },
    { name: 'Contact us', link: '/contact' },
    { name: 'Careers', link: '/' },
    { name: 'Support', link: '/' },
    { name: 'FAQ', link: '/' },
    { name: 'Terms', link: '/' },
    { name: 'Privacy', link: '/' },
    { name: 'Blog', link: '/' },
  ];
  CONTACT: any[] = [
    { item: 'La Vita S.R.L.S.' },
    { item: 'Via Alessandro Votla,13' },
    { item: '00012 Guidonia Montecelio, Rome, Italy' },
    { item: 'P.IVA 14611161002' },
    { item: 'Tel. +39 0774 184 3880' },
    { item: 'info@lavitasrls.it' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
