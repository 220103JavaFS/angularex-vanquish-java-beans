import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EricComponent } from './eric.component';

describe('EricComponent', () => {
  let component: EricComponent;
  let fixture: ComponentFixture<EricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
