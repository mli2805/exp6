import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { HelpTooltipDirective } from './components/context-help/help-tooltip.directive';
import { HelpTooltipComponent } from './components/context-help/help-tooltip/help-tooltip.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorizeDirective } from './colorize.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    HelpTooltipDirective,
    HelpTooltipComponent,
    ColorizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  exports: [HelpTooltipDirective, ColorizeDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
