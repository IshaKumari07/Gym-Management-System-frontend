import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoffersComponent } from './adminoffers.component';

describe('AdminoffersComponent', () => {
  let component: AdminoffersComponent;
  let fixture: ComponentFixture<AdminoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminoffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
