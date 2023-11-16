import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.less']
})
export class PokeListComponent implements OnInit {
  
  public getAllPokemons: any;
  public setAllPokemons: any;
  public apiError: boolean = false;

  constructor(private ApiService: PokeApiService) { }

  ngOnInit(): void {
    this.ApiService.apiListAllPokemons().subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;        
      },
      error => {
        this.apiError = true;
      }
    );
  }

  getSearch(value: string) {
    const filter = this.setAllPokemons.filter((pokeFilter: any) => {
      return !pokeFilter.name.indexOf(value.toLocaleLowerCase());
    });
    this.getAllPokemons = filter;
  }

}
