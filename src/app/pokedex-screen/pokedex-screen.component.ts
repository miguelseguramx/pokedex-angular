import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokedex-screen',
  templateUrl: './pokedex-screen.component.html',
  styleUrls: ['./pokedex-screen.component.css']
})
export class PokedexScreenComponent implements OnInit {
  @Input() public loading: boolean;
  @Input() public error: boolean;
  @Input() public pokemon: object;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pokemon)
  }

}
