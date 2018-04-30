/*******************************************************************
 * Project: NGX-AUTO-DISABLE-FORMS                                 *
 * @file File: ngx-auto-disable-forms.module.ts                    *
 * @author Gökhan Sari - <g-sari@g-sari.com>                       *
 *******************************************************************/
import { NgModule } from '@angular/core';
import { RolesAndPermissionsRelatedContentDirective } from './directives/roles-and-permissions-related-content.directive';
import { RolesAndPermissionsService } from './services/roles-and-permissions.service';

/**
 * NGX Auto disabled forms module
 */
@NgModule({
    imports: [],
    declarations: [RolesAndPermissionsRelatedContentDirective],
    exports: [RolesAndPermissionsRelatedContentDirective],
    providers: [RolesAndPermissionsService]
})
export class NgxAutoDisableFormsModule { }
