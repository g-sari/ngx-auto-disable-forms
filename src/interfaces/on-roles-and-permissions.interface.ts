/*******************************************************************
 * Project: NGX-AUTO-DISABLE_FORMS                                 *
 * @file File: roles-and-permissions-view-component.interface.ts   *
 * @author Gökhan Sari - <g-sari@g-sari.com>                       *
 *******************************************************************/

 /**
  * Roles and permissions interface for view components.
  */
export interface OnRolesAndPermissions {

    /**
     * Checks, if the view component should be displayed in read only mode.
     * 
     * @returns true, if it should be displayed in read only mode.
     */
    isViewReadOnly(): boolean;

}