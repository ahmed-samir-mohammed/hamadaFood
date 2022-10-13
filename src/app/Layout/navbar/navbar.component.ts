import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  fixedTop: string = 'fixed-top';

  constructor(private router: Router) {}
  ngOnInit(): void {}

  goToSection(id: string) {
    this.router.navigate([], { fragment: id });
  }
}
