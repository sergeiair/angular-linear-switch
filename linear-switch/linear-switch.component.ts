import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import animations from './linear-switch.animations';

@Component({
  selector: 'linear-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './linear-switch.component.html',
  styleUrls: ['./linear-switch.component.scss'],
  animations: [animations]
})
export class LinearSwitchComponent implements OnInit {
  @Input() public options: any[];
  @Output() private onOptionSelected = new EventEmitter();

  public state: {
    index: number,
    value: any,
  };

  constructor() {
    this.options = [];
  }

  ngOnInit() {
    this.state = {
      index: 0,
      value: this.options[0] || null,
    };
  }

  public optionSelected(index: number): void {
    this.state = Object.assign({}, {
      index,
      value: this.options[index],
    });

    this.onOptionSelected.emit(this.state);
  }
}
