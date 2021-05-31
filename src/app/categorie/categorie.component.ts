import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  @Input() categorie = "";
  @Input() statut = "";
  


  constructor() { }

  ngOnInit(): void {
  }

  getStatut(){
    return this.statut;
  }

  getColor(){
    if(this.statut ==="En stock")
    {
      return 'green';
    }
    else if(this.statut ==="En attente")
    {
      return 'red';
    }
    return '';
  }

}
