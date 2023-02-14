import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVisitorComponent } from './create-visitor.component';

describe('CreateVisitorComponent', () => {
  let component: CreateVisitorComponent;
  let fixture: ComponentFixture<CreateVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
