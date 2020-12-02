import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MarksComponent } from './components/marks/marks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { MarkService } from './services/mark.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MarksComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MarkService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
