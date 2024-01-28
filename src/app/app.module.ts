import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import both FormsModule and ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { ColorPickerModule } from 'ngx-color-picker';
import { TodolistComponent } from './todolist/todolist.component';
import { AdminComponent } from './admin/admin.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    TodolistComponent,
    AdminComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    FormsModule,  // Include FormsModule for template-driven forms
    ReactiveFormsModule,  // Include ReactiveFormsModule for reactive forms
    ColorPickerModule,
    ToastrModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center'}),
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
