import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// para utilizar o parametro entre rotas você precisa importar o RouterModule
import {RouterModule} from '@angular/router';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { NgScrollbarModule } from 'ngx-scrollbar';


@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    NgScrollbarModule,
    RouterModule
  ]
})
export class SharedModule { }
