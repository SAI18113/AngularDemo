import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { FooterComponent } from './footer/footer.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentcommunicationComponent } from './componentcommunication/componentcommunication.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { MaterialComponent } from './material/material.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ParenttochildComponent } from './parenttochild/parenttochild.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    IntroductionComponent,
    PipesComponent,
    FormsComponent,
    FooterComponent,
    TemplatedrivenComponent,
    DirectivesComponent,
    ComponentcommunicationComponent,
    DatabindingComponent,
    PipesdemoComponent,
    MaterialComponent,
    ReactiveformComponent,
    ChildcomponentComponent,
    ParentcomponentComponent,
    ParenttochildComponent,
    LifecyclehooksComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
