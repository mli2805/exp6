import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-tooltip',
  templateUrl: './help-tooltip.component.html',
})
export class HelpTooltipComponent implements OnInit {
  @Input() section!: string;
  open = false;
  cnt!: any;

  ngOnInit(): void {
    switch (this.section) {
      case 'FrontPanelCheckHelpComponent':
        this.cnt = `<div>{{ "1" }}</div>`;
        break;
      case 'TestPortHelpComponent':
        this.cnt = `<div>{{ "2" }}</div>`;
        break;
      case 'EofThresholdHelpComponent':
        this.cnt = `<div>{{ "3" }}</div>`;
        break;
      default:
        break;
    }
  }

  onMouseOver() {
    this.open = true;
  }

  onMouseLeave() {
    this.open = false;
  }
}
