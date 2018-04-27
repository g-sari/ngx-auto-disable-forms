# ngx-auto-disable-forms
This module checks roles and permissions of the current signed in user and disables input fields on demand.


 Note that you need to add the attribute **'rolesAndPermissionsRelatedContent'** to the div container. 
 Depending on roles an permissions all UI input fields inside the div will be disabled automatically.
 i.e. 
 ```javascript
 <div rolesAndPermissionsRelatedContent></div>
 ```
 
 
 If needed you can also exclude some input fields from being disabled by adding the css class **'exclude-from-roles-and-permissions'**
 i.e. 
 ```javascript
 <button class="exclude-from-roles-and-permissions"></button>
 ```


 # Getting started
 Just import the module 'NgxAutoDisableFormsModule' in your **'app.module.ts'** file.
  i.e. 
 ```javascript
 imports: [NgxAutoDisableFormsModule]
 ```


  # Demo
  ![ngx-auto-disable-forms-demo](../ngx-auto-disable-forms-demo.gif)