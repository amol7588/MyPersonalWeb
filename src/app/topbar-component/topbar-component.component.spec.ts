import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarComponentComponent } from './topbar-component.component';

describe('TopbarComponentComponent', () => {
  let component: TopbarComponentComponent;
  let fixture: ComponentFixture<TopbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
