import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit {
  MainHomeImg: string = '../../../../../assets/img/main-home.png';
  OrganicFruits: string = '../../../../../assets/img/organic-fruits.svg';
  OrganicVegetables: string =
    '../../../../../assets/img/organic-vegetables.svg';
  DriedProducts: string = '../../../../../assets/img/dried-products.svg';
  DairyProducts: string = '../../../../../assets/img/dairy-products.svg';
  organicsList: any[] = [
    { img: this.OrganicFruits, name: 'MIELE' },
    { img: this.OrganicVegetables, name: 'OLIO' },
    { img: this.DriedProducts, name: 'FRUTTA E VERDURA' },
    { img: this.DairyProducts, name: 'PRODOTTI ALIMENTARI' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
