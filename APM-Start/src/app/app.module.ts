import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  "@angular/forms";
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { StarComponentComponent } from './components/star-component/star-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
