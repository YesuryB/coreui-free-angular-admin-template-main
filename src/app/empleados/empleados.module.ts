import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosListComponent } from './empleados-list/empleados-list.component';
import { EmpleadosRoutingModule } from './empleados-routing.module';
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmpleadosListComponent,
    EmpleadoDetailComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    //IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    //ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    TabsModule,
    TooltipModule,
    UtilitiesModule,
    ReactiveFormsModule
  ]
})
export class EmpleadosModule { }
