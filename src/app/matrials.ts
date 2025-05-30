import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
const matrial: any = [
  MatRadioModule,
  MatSnackBarModule,
  MatListModule,
  MatExpansionModule,
  DragDropModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatSortModule,
  MatSort,
  MatBadgeModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatDialogModule,
  MatIconModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatChipsModule,
  MatMenuModule,
  MatButtonModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule,
  MatTreeModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatProgressBarModule,
];

@NgModule({
  imports: [matrial],
  exports: [matrial],
})
export class Matrial {}
