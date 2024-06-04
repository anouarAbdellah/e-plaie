import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomModulesService } from 'src/app/shared/services/custom-modules.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'fas fa-chart-line text-primary', class: '' },
    { path: '/medicines', title: 'Gestion des médicaments',  icon: 'fas fa-medkit text-success', class: '' },
    { path: '/cabinets', title: 'Gestion des cabinets et cliniques',  icon: 'fas fa-hospital text-info', class: '' },
    { path: '/antecedents', title: 'Gestion des antécédents',  icon: 'fas fa-file-medical-alt text-danger', class: '' },
    { path: '/motifs', title: 'Gestion des motifs',  icon: 'fas fa-file-medical-alt text-warning', class: '' },
    { path: '/bilans', title: 'Gestion des examens et bilans',  icon: 'fas fa-file-signature text-primary', class: '' },
    { path: '/ptis', title: 'Gestion des PTI',  icon: 'fas fa-file text-success', class: '' },
    { path: '/canvases', title: 'Gestion des canvas et templates',  icon: 'fas fa-paint-brush text-info', class: '' },
    { path: '/patients', title: 'Gestion des patients',  icon: 'fas fa-users text-warning', class: '' },
    { path: '/users', title: 'Gestion des utilisateurs',  icon: 'fas fa-users text-primary', class: '' },
    { path: '/consultations', title: 'Gestion des consultations',  icon: 'fas fa-clock text-danger', class: '' },
    // { path: '/custom-modules', title: 'Form dynamiques',  icon: 'fas fa-paint-brush text-info', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public custom_modules = [];

  constructor(private router: Router, private customModulesService: CustomModulesService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.customModulesService.complete_list().subscribe(
      (result) => {
        this.custom_modules = result.data;
      }, 
      (error) => {
      }
    )
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
