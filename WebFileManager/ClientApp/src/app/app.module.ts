import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PatientComponent } from './patient/patient.component';
import { PatientsContainerComponent } from './patients-container/patients-container.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ExamsContainerComponent } from './exams-container/exams-container.component';
import { ExamsListComponent } from './exams-list/exams-list.component';
import { ExamComponent } from './exam/exam.component';
import { FilesListComponent } from './files-list/files-list.component';
import { FileComponent } from './file/file.component';
import { ResourcesContainerComponent } from './resources-container/resources-container.component';
import { ResourcesListComponent } from './resources-list/resources-list.component';
import { ResourceComponent } from './resource/resource.component';
import { SettingsContainerComponent } from './settings-container/settings-container.component';
import { PatientService } from './services/patient/patientService';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PatientComponent,
    PatientsContainerComponent,
    PatientListComponent,
    ExamsContainerComponent,
    ExamsListComponent,
    ExamComponent,
    FilesListComponent,
    FileComponent,
    ResourcesContainerComponent,
    ResourcesListComponent,
    ResourceComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PatientsContainerComponent, pathMatch: 'full' },
      { path: 'patient', component: PatientsContainerComponent },
      { path: 'resources', component: ResourcesContainerComponent },
      { path: 'exams', component: ExamsContainerComponent },
      { path: 'settings', component: SettingsContainerComponent },
    ]),
  ],
  providers: [PatientService],
  bootstrap: [AppComponent],
  entryComponents: [PatientComponent],
})
export class AppModule {}
