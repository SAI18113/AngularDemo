import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentcommunicationComponent } from './componentcommunication/componentcommunication.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { MaterialComponent } from './material/material.component';
import { ParenttochildComponent } from './parenttochild/parenttochild.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

const routes: Routes = [
  {
    path:'introduction',
    component:IntroductionComponent
  },
  {
    path:'pipes',
    component:PipesComponent
  },
  {
    path:'forms',
    component:FormsComponent
  },
  {
    path:'templatedriven',
    component:TemplatedrivenComponent
  },
  {
    path:'directives',
    component:DirectivesComponent
  },
  {
    path:'material',
    component:MaterialComponent
  },
  {
    path:'databinding',
    component:DatabindingComponent
  },
  {
    path:'parenttochild',
    component:ParenttochildComponent
  },
  {
    path:'componentcommunication',
    component:ComponentcommunicationComponent
  },
  {
    path:'reactiveform',
    component:ReactiveformComponent
  },
  {
    path:'pipesdemo',
    component:PipesdemoComponent
  },
  {
    path:'lifecycle',
    component:LifecyclehooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

