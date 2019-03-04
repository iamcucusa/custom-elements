import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'zoom-button',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  count: number = 0;

  @Input() mode: string;

  @Input() raetId: string;

  @Input() size: string;

  @Input() type: string;

  @Input() isDisabled: boolean;

  @Output() actionClick: EventEmitter<AppComponent> = new EventEmitter();

  isLoading = false;

  isActive = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  showLoading() {
    this.isLoading = true;
  }

  hideLoading() {
    this.isLoading = false;
  }

  showActive() {
    this.isActive = true;
  }

  hideActive() {
    this.isActive = false;
  }

  onClick() {
    this.count++;
    this.actionClick.emit(this);
    this.changeDetectorRef.detectChanges();
  }

  done() {
    this.isLoading = false;
    this.isActive = false;
  }

}
