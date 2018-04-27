export interface UserRolesServiceInterface {

    isAuthorized(user: object) : boolean;

    hasOnlyReadPermissions(user: object) : boolean;

    hasWritePermissions(user: object) : boolean;

}