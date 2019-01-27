import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule,
         MatCard,
         MatCardModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatToolbarModule, MatButtonModule, MatCardModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatButtonModule, MatCardModule
  ]
})
export class MaterialModule {}
