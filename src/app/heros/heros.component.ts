import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
   providers: [HeroService]
})
export class HerosComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  _postsArray: any[];
  ngOnInit() {
	  this.getHeroes();
  }

getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(res => this._postsArray  = res.json());
  }
}
