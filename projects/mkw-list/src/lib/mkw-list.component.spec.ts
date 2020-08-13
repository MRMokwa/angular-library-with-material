import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MkwListComponent } from './mkw-list.component';

describe('MkwListComponent', () => {
  let component: MkwListComponent;
  let fixture: ComponentFixture<MkwListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MkwListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MkwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
