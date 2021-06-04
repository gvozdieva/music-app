import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreSoulComponent } from './genre-soul.component';

describe('GenreSoulComponent', () => {
  let component: GenreSoulComponent;
  let fixture: ComponentFixture<GenreSoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreSoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreSoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
