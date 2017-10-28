import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LinearSwitchComponent } from './linear-switch.component';

describe('LinearSwitchComponent', () => {
  let component: LinearSwitchComponent;
  let fixture: ComponentFixture<LinearSwitchComponent>;
  let element = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule
      ],
      declarations: [ LinearSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearSwitchComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    component.options = [1, 2, 3, 4];
    fixture.detectChanges();
  });

  it('should check if all items are rendered', () => {
    expect(element.querySelectorAll('.linear-switch__item').length).toEqual(4);
  });

  it('should check if all items are rendered', fakeAsync(() => {
    element.querySelectorAll('.linear-switch__item')[2].click();

    tick();
    fixture.detectChanges();

    expect(element.querySelector('.linear-switch__caret').innerText).toEqual('3');
  }));
});
