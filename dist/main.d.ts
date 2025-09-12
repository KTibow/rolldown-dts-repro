import parse from "set-cookie-parser";

//#region a.js
declare namespace a_exports {
  export { a_default as default };
}
//#endregion
//#region main.d.ts
declare const fn: () => typeof a_exports;
//#endregion
export { fn, parse };