export default {
    entry: 'dist/src/index.js',
    dest: 'dist/bundles/ngx-auto-disable-forms.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ngx-auto-disable-forms.module',
    globals: {
      '@angular/core': 'ng.core',
    }
  }