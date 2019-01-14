import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigService } from './services/config.service';
import { PessoaService } from './services/pessoa.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ConsultaComponent } from './pessoa/consulta/consulta.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from 'src/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    ConsultaComponent,
    MenuComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [ConfigService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
