import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListsAlarmsPage } from './lists-alarms.page';

describe('ListsAlarmsPage', () => {
  let component: ListsAlarmsPage;
  let fixture: ComponentFixture<ListsAlarmsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListsAlarmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
