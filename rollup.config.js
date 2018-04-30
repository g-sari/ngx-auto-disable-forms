export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ngx-auto-disable-forms.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ngx-auto-disable-forms.module',
    globals: {
      '@angular/core': 'ng.core',
    }
  }