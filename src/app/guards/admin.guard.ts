//Angular
import { Observable } from 'rxjs/Rx'; 
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//Backand
import { BackandService } from 'angular2bknd-sdk';
//Services
import { MembersService } from '../services/members.service';
import { LoginService } from '../services/login.service';

@Injectable()
export class AdminGuard implements CanActivate {
    auth_status:    string = null;
    auth_type:      string = 'N/A';
    loggedInUser:   string = '';
    isAdmin:        boolean = false;

  constructor(
    private backandService: BackandService,
    private loginservice: LoginService,
    private router: Router,
  ){
    this.backandService.setAppName('atipper')
    this.backandService.setSignUpToken('ea073201-5dea-4c45-9d7b-3c155513cdda');
    this.backandService.setAnonymousToken('dc201b54-8f35-41b7-8def-eea36ef80ec6');
    this.auth_type = backandService.getAuthType();
    this.auth_status = backandService.getAuthStatus();
    this.loggedInUser = backandService.getUsername();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.loggedInUser != '' && this.auth_status == 'OK') {
      let filter =    [{  fieldName: 'email',
                          operator: 'contains',
                          value: this.loggedInUser }]

      return  this.backandService.getList('users', null, null, filter)
                  .map((data) => {  return data[0].admin });
    } else {
      return false;
    }
  }

}