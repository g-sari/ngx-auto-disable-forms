/*******************************************************************
 * Project: NGX-AUTO-DISABLE-FORMS                                 *
 * @file File: ngx-auto-disable-forms.module.ts                    *
 * @author Gökhan Sari - <g-sari@g-sari.com>                       *
 *******************************************************************/
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RolesAndPermissionsRelatedContentDirective } from './directives/roles-and-permissions-related-content.directive';
import { UserRolesService } from './services/user-roles.service';

@NgModule({
    imports: [],
    declarations: [RolesAndPermissionsRelatedContentDirective],
    exports: [RolesAndPermissionsRelatedContentDirective],
    providers: [UserRolesService]
})
export class NgxAutoDisableFormsModule { }
