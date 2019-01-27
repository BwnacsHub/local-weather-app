import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule,
         MatCard, MatCardModule, MatFormFieldModule,
         MatInputModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatToolbarModule, MatButtonModule, MatCardModule,
    MatIconModule, MatFormFieldModule, MatInputModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatButtonModule, MatCardModule,
    MatIconModule, MatFormFieldModule, MatInputModule
  ]
})
export class MaterialModule {}
