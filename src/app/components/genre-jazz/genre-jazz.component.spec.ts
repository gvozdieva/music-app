import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreJazzComponent } from './genre-jazz.component';

describe('GenreJazzComponent', () => {
  let component: GenreJazzComponent;
  let fixture: ComponentFixture<GenreJazzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreJazzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreJazzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
