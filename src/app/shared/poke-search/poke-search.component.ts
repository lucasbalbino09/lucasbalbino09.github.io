import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.less']
})
export class PokeSearchComponent implements OnInit{

  @Output() public emmitSeach: EventEmitter<string> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }

  public search(pokemon:string){
    this.emmitSeach.emit(pokemon);
  }

}
