import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatMouseService } from 'src/app/services/cat-mouse-service.service'
import { environment } from 'src/environments/environment';
import { Scenario } from './models/scenario-model';
import { CatMouseResp } from './interface/catMouseResp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catMouseApp';
  isCaughtResult = '';
  numOfJumpSpaces = 0;
  scenario = '';
  
  constructor(private cmService: CatMouseService) {}

  isCaught = () => {
    let scenarioToSubmit = new Scenario(this.scenario, this.numOfJumpSpaces)
    this.cmService.getMouseStatus(scenarioToSubmit, environment.reqUrl).subscribe((resp) => {
      this.isCaughtResult = resp.caughtStatus;
    })
  }
  clearResult = () => {
    this.isCaughtResult = '';
  }
}
