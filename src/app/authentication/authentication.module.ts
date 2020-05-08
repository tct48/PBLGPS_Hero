import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRouting } from './authentication.routing';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    AuthenticationRouting,
    // CKEditorModule
  ],
  providers:[]
})
export class AuthenticationModule { }
