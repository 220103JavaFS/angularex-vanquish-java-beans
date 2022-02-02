import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JessieComponent } from './jessie.component';

describe('JessieComponent', () => {
  let component: JessieComponent;
  let fixture: ComponentFixture<JessieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JessieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JessieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
