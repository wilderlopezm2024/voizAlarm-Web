import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  imports: [],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {
  @Input() message: string = "¿Está seguro de continuar?";
  @Output() onConfirm = new EventEmitter<boolean>();

  closeModal(result: boolean) {
    this.onConfirm.emit(result);
  }
}
