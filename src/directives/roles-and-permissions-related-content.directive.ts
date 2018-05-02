/*******************************************************************
 * Project: NGX-AUTO-DISABLE_FORMS                                 *
 * @file File: roles-and-permissions-related-content.directive.ts  *
 * @author Gökhan Sari - <g-sari@g-sari.com>                       *
 *******************************************************************/
import { Directive, Renderer2, ElementRef, AfterViewChecked, ViewContainerRef, OnInit } from '@angular/core';
import { OnRolesAndPermissions } from '../interfaces/on-roles-and-permissions.interface';

/**
 * Checks roles and permissions of the current user and disables input fields on demand.
 * Note that you need to add the attribute 'rolesAndPermissionsRelatedContent' to the div container
 * i.e. ```<div rolesAndPermissionsRelatedContent></div>```, then depending on roles an permissions
 * the UI input fields inside the div will be disabled automatically. If needed you can also exclude
 * some input fields from being disabled by adding the css class 'exclude-from-roles-and-permissions'
 * i.e. ```<button class="exclude-from-roles-and-permissions"></button>```.
 */
@Directive({
    selector: '[rolesAndPermissionsRelatedContent]'
})
export class RolesAndPermissionsRelatedContentDirective implements OnInit, AfterViewChecked {

    private currentRolesAndPermissionsBasedComponent: OnRolesAndPermissions;

    /**
     * @param renderer 
     * @param elementRef 
     * @param viewContainerRef 
     */
    constructor(
        private renderer: Renderer2,
        private elementRef: ElementRef,
        private viewContainerRef: ViewContainerRef,
    ) { }

    /**
     * Gets the current component.
     */
    ngOnInit(): void {
        this.currentRolesAndPermissionsBasedComponent = (<any>this.viewContainerRef)._view.component;
    }

    /**
     * Checks roles and permissions and disable on demand.
     */
    ngAfterViewChecked() {
        this.checkRolesAndPermissionsAndEnableOrDisableInputs();
    }

    /**
    * Checks roles and permissions of the current user and enables or disables the input fields inside of the marked div.
    */
    private checkRolesAndPermissionsAndEnableOrDisableInputs() {
        const inputsNodeList: NodeList = this.elementRef.nativeElement.querySelectorAll(
            'button:not(.exclude-from-roles-and-permissions), ' +
            'input:not(.exclude-from-roles-and-permissions), ' +
            'textarea:not(.exclude-from-roles-and-permissions), ' +
            'select:not(.exclude-from-roles-and-permissions), ' +
            'checkbox:not(.exclude-from-roles-and-permissions)'
        );
        if (inputsNodeList != null) {
            for (let i = 0; i < inputsNodeList.length; i++) {
                const input = inputsNodeList[i];
                if (this.currentRolesAndPermissionsBasedComponent.isViewReadOnly()) {
                    this.renderer.setProperty(input, 'disabled', true);
                }
            }
        }
    }

}
