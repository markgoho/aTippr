//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { routing } from './app.routing';
//HammerJS
import 'hammerjs';
//Material
import { MaterialModule, MdIconRegistry } from '@angular/material';
//AngularFire
import { AngularFireModule } from 'angularfire2';
//Services
import { LoginService } from './services/login.service';
import { MembersService } from './services/members.service';
import { TeamsService } from './services/teams.service';
import { MatchesService } from './services/matches.service';
import { CategoriesService } from './services/categories.service';
import { TippsService } from './services/tipps.service';
import { RankingService } from './services/ranking.service';
import { ChatService } from './services/chat.service';
import { DialogsService } from './services/dialog.service';
import { NewsService } from './services/news.service';
//Translation
import {TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
//Guards
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RulesComponent } from './rules/rules.component';
import { RankingComponent } from './ranking/ranking.component';
import { IntroComponent } from './intro/intro.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MembersComponent } from './members/members.component';
import { TippComponent } from './tipp/tipp.component';
import { TipperComponent } from './tipper/tipper.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminTeamsComponent } from './admin/teams/teams.component';
import { AdminMembersComponent } from './admin/members/members.component';
import { AdminMatchesComponent, AdminCategoryDialog, AdminMatchResultDialog } from './admin/matches/matches.component';
import { AdminCalculateComponent } from './admin/calculate/calculate.component';
import { AdminNewsComponent } from './admin/news/news.component';
import { ConfirmDialog } from './dialogs/confirm-dialog.component';
import { TippsDialog } from './dialogs/tipps-dialog.component';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyALvAG2XzTCBvRCpi3sSz2GUDnMlhdFz8o",
  authDomain: "api-project-340883542890.firebaseapp.com",
  databaseURL: "https://api-project-340883542890.firebaseio.com",
  storageBucket: "api-project-340883542890.appspot.com",
  messagingSenderId: "340883542890"
};

// Initialize TranslateLoader
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RulesComponent,
    RankingComponent,
    IntroComponent,
    RegisterComponent,
    ForgotComponent,
    MembersComponent,
    TippComponent,
    TipperComponent,
    ProfileComponent,
    AdminComponent,
    AdminTeamsComponent,
    AdminMembersComponent,
    AdminMatchesComponent,
    AdminCategoryDialog,
    AdminMatchResultDialog,
    AdminCalculateComponent,
    AdminNewsComponent,
    ConfirmDialog,
    TippsDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http],
    }),
  ],
  exports: [
    ConfirmDialog,
  ],
  providers: [
    LoginService,
    MembersService,
    TeamsService,
    MatchesService,
    CategoriesService,
    TippsService,
    RankingService,
    ChatService,
    MdIconRegistry,
    AuthGuard,
    AdminGuard,
    DialogsService,
    NewsService
  ],
  entryComponents: [
    AdminCategoryDialog,
    AdminMatchResultDialog,
    ConfirmDialog,
    TippsDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}