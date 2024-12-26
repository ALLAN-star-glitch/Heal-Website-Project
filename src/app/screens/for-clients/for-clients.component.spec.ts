import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForClientsComponent } from './for-clients.component';

describe('ForClientsComponent', () => {
  let component: ForClientsComponent;
  let fixture: ComponentFixture<ForClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
