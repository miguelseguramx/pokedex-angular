import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokedex-form',
  templateUrl: './pokedex-form.component.html',
  styleUrls: ['./pokedex-form.component.css']
})
export class PokedexFormComponent{
  @Output() searchPokemon = new EventEmitter<string>();
  pokemonId: string = ''

  constructor() { }

  onSubmit(e) {
    e.preventDefault()
    this.searchPokemon.emit(this.pokemonId)
    this.pokemonId = ''
  }
}
