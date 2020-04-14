import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeampageComponent } from './teampage/teampage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { ReachuspageComponent } from './reachuspage/reachuspage.component';
import { PrivatecompaniesComponent } from './privatecompanies/privatecompanies.component';
import { PubliccompaniesComponent } from './publiccompanies/publiccompanies.component';
import { AckoComponent } from './acko/acko.component';
import { AutoninjaComponent } from './autoninja/autoninja.component';
import { AyeComponent } from './aye/aye.component';
import { BobbleComponent } from './bobble/bobble.component';
import { BookmyshowComponent } from './bookmyshow/bookmyshow.component';
import { CapitalfortComponent } from './capitalfort/capitalfort.component';
import { ArmanComponent } from './arman/arman.component';
import { AtulComponent } from './atul/atul.component';
import { BajajComponent } from './bajaj/bajaj.component';
import { BluestarComponent } from './bluestar/bluestar.component';
import { EdelweissComponent } from './edelweiss/edelweiss.component';
import { FiemComponent } from './fiem/fiem.component';
import { MridulComponent } from './mridul/mridul.component';
import { MukulComponent } from './mukul/mukul.component';
import { DeepakComponent } from './deepak/deepak.component';
import { RaviComponent } from './ravi/ravi.component';
import { TiruComponent } from './tiru/tiru.component';
import { ShaifComponent } from './shaif/shaif.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    TeampageComponent,
    AboutpageComponent,
    NewspageComponent,
    ReachuspageComponent,
    PrivatecompaniesComponent,
    PubliccompaniesComponent,
    AckoComponent,
    AutoninjaComponent,
    AyeComponent,
    BobbleComponent,
    BookmyshowComponent,
    CapitalfortComponent,
    ArmanComponent,
    AtulComponent,
    BajajComponent,
    BluestarComponent,
    EdelweissComponent,
    FiemComponent,
    MridulComponent,
    MukulComponent,
    DeepakComponent,
    RaviComponent,
    TiruComponent,
    ShaifComponent,
    StartingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
