import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { PtBacklogModule } from './pt-backlog/pt-backlog.module'
import { LoginModule } from './pt-login/pt-login.module'

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    PtBacklogModule,
    LoginModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
