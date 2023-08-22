import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeOtherComponent } from './some-other.component';

describe('SomeOtherComponent', () => {
  let component: SomeOtherComponent;
  let fixture: ComponentFixture<SomeOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
