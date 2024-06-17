import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquipmentComponent } from './addquipment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('AddquipmentComponent', () => {
  let component: AddquipmentComponent;
  let fixture: ComponentFixture<AddquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
