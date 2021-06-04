import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreFunkComponent } from './genre-funk.component';

describe('GenreFunkComponent', () => {
  let component: GenreFunkComponent;
  let fixture: ComponentFixture<GenreFunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreFunkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreFunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
