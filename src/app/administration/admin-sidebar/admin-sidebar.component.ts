import { Component, OnInit } from '@angular/core';
import * as myjQuery from 'jquery';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'gestion-utilisateurs', title: 'Utilisateurs',  icon:'person', class: '' },
    { path: '/gestion-don', title: 'Dons',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if (myjQuery(window).width() > 991) {
          return false;
      }
      return true;
  };

}
