import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMenuComponent } from './history-menu.component';

describe('HistoryMenuComponent', () => {
  let component: HistoryMenuComponent;
  let fixture: ComponentFixture<HistoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
