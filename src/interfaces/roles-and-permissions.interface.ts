export interface RolesAndPermissionsInterface<T> {

    /**
     * Checks if the given user is authorized.
     * 
     * @param user 
     * @returns true, if authorized to do something.
     */
    isAuthorized(user: T): boolean;

    /**
     * Checks, if the given user has only read (R) permissions.
     * 
     * @param user 
     * @returns true, if the user has R permissions.
     */
    hasOnlyReadPermissions(user: T): boolean;

    /**
     * Checks, if the given user has write (W) permissions.
     * 
     * @param user 
     * @returns true, if the user has W permissions.
     */
    hasWritePermissions(user: T): boolean;

}