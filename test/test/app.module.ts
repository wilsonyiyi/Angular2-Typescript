import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Contact } from './contact.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [Contact],
    bootstrap: [Contact]
})

export class AppModule {}