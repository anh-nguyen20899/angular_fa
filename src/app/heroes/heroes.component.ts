import { Component, Input } from '@angular/core';
import { heroes } from '../mock-heroes';
export interface Hero {
  id: string;
  name: string;
}
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
    id: string = "123";
    name: string = 'Superman';
    heroes = heroes;
    SelectHero?: Hero;
    onSelectHero(hero: any) {
      this.SelectHero = hero;
      console.log(this.SelectHero);
    }

}
