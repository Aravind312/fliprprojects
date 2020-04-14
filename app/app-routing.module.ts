import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { ReachuspageComponent } from './reachuspage/reachuspage.component';
import { TeampageComponent } from './teampage/teampage.component';
import { AckoComponent } from './acko/acko.component';
import { ArmanComponent } from './arman/arman.component';
import { AtulComponent } from './atul/atul.component';
import { AutoninjaComponent } from './autoninja/autoninja.component';
import { AyeComponent } from './aye/aye.component';
import { BajajComponent } from './bajaj/bajaj.component';
import { BluestarComponent } from './bluestar/bluestar.component';
import { BobbleComponent } from './bobble/bobble.component';
import { BookmyshowComponent } from './bookmyshow/bookmyshow.component';
import { CapitalfortComponent } from './capitalfort/capitalfort.component';
import { EdelweissComponent } from './edelweiss/edelweiss.component';
import { FiemComponent } from './fiem/fiem.component';
import { TiruComponent } from './tiru/tiru.component';
import { ShaifComponent } from './shaif/shaif.component';
import { MukulComponent } from './mukul/mukul.component';
import { MridulComponent } from './mridul/mridul.component';
import { RaviComponent  } from './ravi/ravi.component';
import { DeepakComponent } from './deepak/deepak.component';
import { StartingpageComponent } from './startingpage/startingpage.component';
const routes: Routes = [
  {   path: '',
    redirectTo: '/startingpage',
    pathMatch: 'full'
  },
  {
    path: '',
    component:StartingpageComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  }
  ,
  {
    path: 'aboutpage',
    component: AboutpageComponent
  },
  {
    path: 'newspage',
    component: NewspageComponent
  },
  {
    path: 'teampage',
    component: TeampageComponent
  },
  {
    path :'reachuspage',
    component: ReachuspageComponent
  },
  {
    path :'acko',
    component: AckoComponent
  },
  {
    path :'arman',
    component: ArmanComponent
  },
  {
    path :'atul',
    component: AtulComponent
  },
  {
    path :'autoninja',
    component: AutoninjaComponent
  },
  {
    path :'aye',
    component: AyeComponent
  },
  {
    path :'bajaj',
    component: BajajComponent
  },
  {
    path :'bluestar',
    component: BluestarComponent
  },
  {
    path :'bobble',
    component: BobbleComponent
  },
  {
    path :'bookmyshow',
    component: BookmyshowComponent
  },
  {
    path :'capitalfort',
    component: CapitalfortComponent
  },
  {
    path :'edelwiss',
    component: EdelweissComponent
  },
  {
    path :'fiem',
    component: FiemComponent
  },
  {
    path :'mukul',
    component: MukulComponent
  },
  {
    path :'mridul',
    component: MridulComponent
  },
  {
    path :'tiru',
    component: TiruComponent
  },
  {
    path :'shaif',
    component: ShaifComponent
  },
  {
    path :'ravi',
    component: RaviComponent
  },
  {
    path :'deepak',
    component: DeepakComponent
  },
  {
    path :'startingpage',
    component: StartingpageComponent
  }
  
  
  
  

  
  
  
  


  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
