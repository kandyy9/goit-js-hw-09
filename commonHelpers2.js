import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},t=document.querySelector(".feedback-form"),s="feedback-form-state",m=()=>{localStorage.setItem(s,JSON.stringify(e))},o=()=>{const a=localStorage.getItem(s);if(a){const l=JSON.parse(a);e.email=l.email||"",e.message=l.message||"",t.elements.email.value=e.email,t.elements.message.value=e.message}};t.addEventListener("input",a=>{e[a.target.name]=a.target.value,m()});t.addEventListener("submit",a=>{if(a.preventDefault(),e.email=t.elements.email.value,e.message=t.elements.message.value,!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),e.email="",e.message="",t.reset()});o();
//# sourceMappingURL=commonHelpers2.js.map
