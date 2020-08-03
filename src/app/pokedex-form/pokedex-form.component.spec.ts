import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexFormComponent } from './pokedex-form.component';

describe('PokedexFormComponent', () => {
  let component: PokedexFormComponent;
  let fixture: ComponentFixture<PokedexFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
