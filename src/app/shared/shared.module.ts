import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [InputComponent, PlaceholderComponent, ModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [InputComponent, PlaceholderComponent, ModalComponent],
})
export class SharedModule {}
