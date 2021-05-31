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
      routerLink: "sante"
    },
    {
      name: "Viande",
      statut: "En attente",
      routerLink: "viande"
    },
    {
      name: "equipement",
      statut: "En stock",
      routerLink: "equipement"
    },
    {
      name: "beaute",
      statut: "En attente",
      routerLink: 'beaute'
    }
  ];
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
