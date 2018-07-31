import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerOverdueComponent } from './server-overdue.component';

describe('ServerOverdueComponent', () => {
  let component: ServerOverdueComponent;
  let fixture: ComponentFixture<ServerOverdueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerOverdueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerOverdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
