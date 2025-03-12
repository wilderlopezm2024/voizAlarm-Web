import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() tipo: number = 0;  // Para controlar la visibilidad del modal
  @Input() sonido: any;  // Para controlar la visibilidad del modal
  @Output() close = new EventEmitter(); // Evento para cerrar el modal
  @Output() data = new EventEmitter(); // Evento para cerrar el modal
  eventoForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.eventoForm = this.fb.group({
      evento: ['', Validators.required],
      sonido: ['', Validators.required]
    });

  }

  ngOnInit () {
    console.log('sonido selected', this.sonido);

    if (this.sonido) {
      this.eventoForm.get('evento')?.setValue(this.sonido.evento);
      this.eventoForm.get('sonido')?.setValue(this.sonido.sonido);
    }
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.eventoForm.valid) {
      console.log('Formulario válido:', this.eventoForm.value);
      let son = this.eventoForm.value;
      if (this.sonido) son.id = this.sonido.id;
      this.data.emit(son);
    } else {
      console.log('Formulario inválido');
    }
  }

  closeModal() {
    this.close.emit(false); // Emite el evento para cerrar el modal
  }
}
