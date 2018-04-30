/*******************************************************************
 * Project: NGX-AUTO-DISABLE_FORMS                                 *
 * @file File: abstract-role-based-view-component.ts               *
 * @author Gökhan Sari - <g-sari@g-sari.com>                       *
 *******************************************************************/
import { Component, OnInit, AfterViewChecked, Injector } from '@angular/core';
import { RolesAndPermissionsService } from '../services/roles-and-permissions.service';


/**
 * Base class for all roles and permissions based view components in the application.
 *
 * @class
 */
export abstract class AbstractRolesAndPermissionsBasedComponent<T> {

    constructor(private rolesAndPermissionsService: RolesAndPermissionsService<T>) { }

    public abstract isViewReadOnly(): boolean;

}
