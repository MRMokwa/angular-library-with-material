import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MktListComponent } from './mkt-list.component';

describe('MktListComponent', () => {
  let component: MktListComponent;
  let fixture: ComponentFixture<MktListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MktListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MktListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
