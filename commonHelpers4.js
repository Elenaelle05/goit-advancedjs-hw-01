import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as n}from"./assets/vendor-ceec3c52.js";const s="feedback-form-state";let m={};const t={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form  input"),textarea:document.querySelector(".feedback-form  textarea")};t.form.addEventListener("input",n(l,500));t.form.addEventListener("submit",f);const r=()=>{const o=localStorage.getItem(s);return JSON.parse(o)},e=r();e!=null&&e.email&&(t.form.elements.email.value=e.email);e!=null&&e.message&&(t.form.elements.message.value=e.message);function l(){const o=t.form.elements.email.value,a=t.form.elements.message.value;o&&(m.email=o),a&&(m.message=a),localStorage.setItem(s,JSON.stringify(m))}function f(o){o.preventDefault();const a=r();console.log("data",a),localStorage.removeItem(s),t.form.elements.email.value="",t.form.elements.message.value=""}
//# sourceMappingURL=commonHelpers4.js.map