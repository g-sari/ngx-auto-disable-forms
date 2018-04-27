/*******************************************************************
 * Project: NGX-AUTO-DISABLE_FORMS                                 *
 * @file File: abstract-role-based-view-component.ts               *
 * @author Gökhan Sari - <g-sari@g-sari.com>                       *
 *******************************************************************/
import { Component, OnInit, AfterViewChecked, Injector } from '@angular/core';
import { UserRolesService } from '../services/user-roles.service';

/**
 * Base class for all roles and permissions based view components in the application.
 *
 * @class
 */
@Component({})
export abstract class AbstractRolesAndPermissionsBasedComponent implements OnInit, AfterViewChecked {

    constructor(private userRolesService: UserRolesService) { }

    public abstract isReadOnly(): boolean;

    ngOnInit(): void { }

    ngAfterViewChecked(): void { }


}
