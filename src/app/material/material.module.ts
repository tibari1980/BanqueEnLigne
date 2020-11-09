import { NgModule } from '@angular/core';
//add import Angular Material Button
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//add Others here
const componenetMaterial=[
      MatButtonModule,
      MatIconModule
]

@NgModule({
  //import and export arrya Componenet in your app
  imports: [componenetMaterial],
  exports: [componenetMaterial]
})
export class MaterialModule { }
