import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'zoom-button',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() text: string;

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
    this.actionClick.emit(this);
    this.changeDetectorRef.detectChanges();
  }

  done() {
    this.isLoading = false;
    this.isActive = false;
  }

}
