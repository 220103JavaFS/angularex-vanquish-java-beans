import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliasComponent } from './elias.component';

describe('EliasComponent', () => {
  let component: EliasComponent;
  let fixture: ComponentFixture<EliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
