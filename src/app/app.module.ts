import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalystPageComponent } from './analyst-page/analyst-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DxDataGridModule } from 'devextreme-angular';
import { AnalystService } from './services/analyst.service';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      //clientId: '871433f3-956b-4623-a835-c7389982905d',
      clientId: 'cecbcd27-f47e-46fc-8518-2ef4a293de27',
      redirectUri: 'https://earnest-gnome-231e1a.netlify.app/'
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    AnalystPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule,
    HttpClientModule,
    DxDataGridModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService,
    AnalystService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
