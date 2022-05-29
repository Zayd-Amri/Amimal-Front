import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeclarationModule } from './declaration/declaration.module';
import { InterventionModule } from './intervention/intervention.module';
import { AddDeclarationComponent } from './declaration/add-declaration/add-declaration.component';
import { UpdateDeclarationComponent } from './declaration/update-declaration/update-declaration.component';
import {CloudinaryModule} from '@cloudinary/angular';
import { ImageComponent } from './image/image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateCommentaireComponent } from './update-commentaire/update-commentaire.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageComponent,
    UpdateCommentaireComponent
  ],
  imports: [
    DeclarationModule,
    BrowserModule,
    InterventionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CloudinaryModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule
      ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},],
  bootstrap: [AppComponent],
  entryComponents: [AddDeclarationComponent,UpdateDeclarationComponent]

})
export class AppModule { }
