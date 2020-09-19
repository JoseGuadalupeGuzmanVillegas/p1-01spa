import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: Heroe;

  constructor(private activatedroRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedroRoute.params.subscribe((params) => {this.heroe = this.heroesService.getHeroe(params['id']);
    console.log(this.heroe);
    });
  }
}
interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
