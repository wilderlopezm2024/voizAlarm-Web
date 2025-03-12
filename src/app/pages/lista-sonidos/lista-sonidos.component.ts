import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-lista-sonidos',
  imports: [CommonModule, ModalComponent, ConfirmDialogComponent],
  templateUrl: './lista-sonidos.component.html',
  styleUrl: './lista-sonidos.component.scss'
})
export class ListaSonidosComponent {
  listaSonidos = [
    { id: 1, evento: 'Despertar', sonido: 'Naturaleza' },
    { id: 2, evento: 'Reuniones del trabajo', sonido: 'Marcha' },
    { id: 3, evento: 'Deporte', sonido: 'Mundial 2014' },
    { id: 4, evento: 'Tomar Agua', sonido: 'Olas del Mar' },
    { id: 5, evento: 'Reuniones familiares', sonido: 'Motivación' }
  ];
  isModalOpen: boolean = false;
  accion: number = 0;
  showConfirmDialog: boolean = false;
  messageConfirmDialog: string = '';
  sonidoSelected: any;

  eliminarSonido(sonido: any) {
    console.log('Eliminar:', sonido);
    this.sonidoSelected = sonido;
    this.messageConfirmDialog = `¿Está seguro de eliminar evento ${sonido?.evento}?`;
    this.showConfirmDialog = true;
  }

  openModal(tipo: number, sonido?: any) {
    console.log('Sonido:', sonido);
    this.sonidoSelected = sonido;
    this.accion = tipo;
    this.isModalOpen = true;
  }

  closeModal(result: boolean) {
    this.isModalOpen = result;
  }

  handleConfirm(result: boolean) {
    this.showConfirmDialog = false;
    if (result) {
      console.log("Evento eliminado");
      this.listaSonidos = this.listaSonidos.filter(sonido => sonido.id !== this.sonidoSelected.id)
    } else {
      console.log("Cancelado");
    }
  }

  addLista(evento: any) {
    console.log(evento);
    this.isModalOpen = false;
    this.actualizarAgregarSonido(evento);
  }

  actualizarAgregarSonido(sonidoSelected: any) {
    const index = this.listaSonidos.findIndex(sonido => sonido.id === sonidoSelected.id);
    
    if (index !== -1) {
      this.listaSonidos[index] = { id: sonidoSelected.id, evento: sonidoSelected.evento, sonido: sonidoSelected.sonido };
    } else {
      sonidoSelected.id = this.listaSonidos.length + 1;
      this.listaSonidos.push(sonidoSelected);
    }
  }
}
