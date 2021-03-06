/*******************************************************************
 * Project: NGX-AUTO-DISABLE_FORMS                                 *
 * @file File: user-roles.service.ts                               *
 * @author Gökhan Sari - <g-sari@g-sari.com>                       *
 *******************************************************************/
import { Injectable } from '@angular/core';
import { RolesAndPermissionsServiceInterface } from '../interfaces/roles-and-permissions-service.interface';

/**
 * Provides user roles and permissions related functions.
 */
@Injectable()
export class RolesAndPermissionsService implements RolesAndPermissionsServiceInterface<object> {

    /**
     * Returns true, if the given user is authorized.
     * 
     * @param user 
     */
    isAuthorized(user: object): boolean {
        return false;
    }

    /**
     * Checks if the given user has only read permissions.
     * 
     * @param user 
     */
    hasOnlyReadPermissions(user: object): boolean {
        return true;
    }

    /**
     * Checks if the given user has write permissions.
     * 
     * @param user 
     */
    hasWritePermissions(user: object): boolean {
        return false;
    }

}
