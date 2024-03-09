import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [MenubarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [MenubarComponent],
})
export class SharedModule {}
