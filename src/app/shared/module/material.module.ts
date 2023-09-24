import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';


const material : Array<any> =[MatInputModule,MatFormFieldModule,MatCardModule]

@NgModule({
    imports:[...material],
    exports:[...material]
})
export class MaterialModule{

}