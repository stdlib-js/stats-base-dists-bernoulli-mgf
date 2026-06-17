// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.5-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function r(t,n){return e(t)||e(n)||n<0||n>1?NaN:1-n+n*s(t)}function i(t){return e(t)||t<0||t>1?n(NaN):function(n){if(e(n))return NaN;return 1-t+t*s(n)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
