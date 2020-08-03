import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  public error:Boolean = false
  public loading:Boolean = true
  public pokemon:Object = null
  public pokemonID:String = Math.floor(Math.random() * 806 + 1).toString()

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this.searchPokemon()
  }

  searchPokemon(): void {
    this._http.getPokemon(this.pokemonID)
      .subscribe(
        data => {
          this.pokemon = data
          this.loading = false
          this.error = false
        },
        error => {
          this.pokemon = null
          this.loading = false
          this.error = true
        }
      )
  }

  handleSubmit(pokemonId) {
    console.log(pokemonId)
    if(pokemonId !== ''){
      this.error = false
      this.loading = true
      this.pokemonID = window.isNaN(parseInt(pokemonId)) ? pokemonId.toLowerCase() : pokemonId
      this.searchPokemon()
      return
    }
    this.error = true
  }
}
