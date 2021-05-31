import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() categorie: any;
  @Input() statut: any;
  @Input() route: any;

  categorieP = [
    {
      name: "Santé",
      statut: "En stock",
      routerLink: "sante",
      icon: "../../assets/icons/IMG-20210529-WA0026.jpg"
    },
    {
      name: "Viande",
      statut: "En attente",
      routerLink: "viande",
      icon: "../../assets/icons/IMG-20210529-WA0029.jpg"
    },
    {
      name: "equipement",
      statut: "En stock",
      routerLink: "equipement",
      icon: "../../assets/icons/IMG-20210529-WA0028.jpg"
    },
    {
      name: "beaute",
      statut: "En attente",
      routerLink: 'beaute',
      icon: "../../assets/icons/IMG-20210529-WA0021.jpg"
    }
  ];
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
