import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactItemComponent } from './contact.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ContactItemComponent],
    bootstrap: [ContactItemComponent]
})

export class AppModule {}