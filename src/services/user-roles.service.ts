/*******************************************************************
 * Project: NGX-AUTO-DISABLE_FORMS                                 *
 * @file File: user-roles.service.ts                               *
 * @author Gökhan Sari - <g-sari@g-sari.com>                       *
 *******************************************************************/
import { Injectable } from '@angular/core';

/**
 * Provides user roles and permissions related functions.
 */
@Injectable()
export class UserRolesService {

    /**
     * Returns true when the current user is not authorized to write.
     * When the read only mode is activated, all input fields should be displayed as only ready only.
     *
     * @returns {boolean}
     */
    public checkForReadOnlyMode(): boolean {
        return false;
    }

    /**
     * Checks if the current user is a role based user.
     */
    public isCurrentUserRoleBased(): boolean {
        return false;
    }

}
