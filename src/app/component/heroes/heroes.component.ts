import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe [] = [];

  constructor(private heroeServiece: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroeServiece.getHeroes();
  }

 verHeroe(i: number){
   console.log(i);
   this.router.navigate(['/heroe', i]);

 }

}
interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}