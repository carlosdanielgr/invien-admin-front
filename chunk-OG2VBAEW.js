import{$ as l,Fa as q,P as O,Q as c,R as re,S as L,U as m,Ua as _,Y as b,_ as $,a as d,b as g,ea as W,gb as h,ha as y,ka as A,la as M,n as te,pb as se,s as ie,sa as a,ta as F,wa as u,wb as z,y as ne}from"./chunk-ULDYDPEK.js";var me=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(a(F),a(A))}}static{this.\u0275dir=l({type:i})}}return i})(),N=(()=>{class i extends me{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=y(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,features:[u]})}}return i})(),D=new m(""),Ue={provide:D,useExisting:c(()=>He),multi:!0},He=(()=>{class i extends N{writeValue(t){this.setProperty("checked",t)}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=y(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,r){n&1&&_("change",function(o){return r.onChange(o.target.checked)})("blur",function(){return r.onTouched()})},features:[h([Ue]),u]})}}return i})(),Le={provide:D,useExisting:c(()=>_e),multi:!0};function $e(){let i=z()?z().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var We=new m(""),_e=(()=>{class i extends me{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!$e())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(a(F),a(A),a(We,8))}}static{this.\u0275dir=l({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&_("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},features:[h([Le]),u]})}}return i})();function f(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function ye(i){return i!=null&&typeof i.length=="number"}var ve=new m(""),Ce=new m(""),qe=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,oe=class{static min(e){return ze(e)}static max(e){return Ze(e)}static required(e){return Xe(e)}static requiredTrue(e){return Ye(e)}static email(e){return Ke(e)}static minLength(e){return Je(e)}static maxLength(e){return Qe(e)}static pattern(e){return et(e)}static nullValidator(e){return Ve(e)}static compose(e){return Ee(e)}static composeAsync(e){return Ie(e)}};function ze(i){return e=>{if(f(e.value)||f(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function Ze(i){return e=>{if(f(e.value)||f(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function Xe(i){return f(i.value)?{required:!0}:null}function Ye(i){return i.value===!0?null:{required:!0}}function Ke(i){return f(i.value)||qe.test(i.value)?null:{email:!0}}function Je(i){return e=>f(e.value)||!ye(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Qe(i){return e=>ye(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function et(i){if(!i)return Ve;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(f(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Ve(i){return null}function De(i){return i!=null}function be(i){return se(i)?te(i):i}function Ae(i){let e={};return i.forEach(t=>{e=t!=null?d(d({},e),t):e}),Object.keys(e).length===0?null:e}function Me(i,e){return e.map(t=>t(i))}function tt(i){return!i.validate}function Fe(i){return i.map(e=>tt(e)?e:t=>e.validate(t))}function Ee(i){if(!i)return null;let e=i.filter(De);return e.length==0?null:function(t){return Ae(Me(t,e))}}function we(i){return i!=null?Ee(Fe(i)):null}function Ie(i){if(!i)return null;let e=i.filter(De);return e.length==0?null:function(t){let n=Me(t,e).map(be);return ne(n).pipe(ie(Ae))}}function Ne(i){return i!=null?Ie(Fe(i)):null}function ae(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Se(i){return i._rawValidators}function Oe(i){return i._rawAsyncValidators}function Z(i){return i?Array.isArray(i)?i:[i]:[]}function k(i,e){return Array.isArray(i)?i.includes(e):i===e}function le(i,e){let t=Z(e);return Z(i).forEach(r=>{k(t,r)||t.push(r)}),t}function ue(i,e){return Z(e).filter(t=>!k(i,t))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=we(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},C=class extends G{get formDirective(){return null}get path(){return null}},I=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},it={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Kt=g(d({},it),{"[class.ng-submitted]":"isSubmitted"}),Jt=(()=>{class i extends T{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(a(I,2))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[u]})}}return i})(),Qt=(()=>{class i extends T{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(a(C,10))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[u]})}}return i})();var E="VALID",x="INVALID",v="PENDING",w="DISABLED";function K(i){return(U(i)?i.validators:i)||null}function nt(i){return Array.isArray(i)?we(i):i||null}function J(i,e){return(U(e)?e.asyncValidators:i)||null}function rt(i){return Array.isArray(i)?Ne(i):i||null}function U(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function xe(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new O(1e3,"");if(!n[t])throw new O(1001,"")}function Pe(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new O(1002,"")})}var V=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===x}get pending(){return this.status==v}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(le(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(le(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ue(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ue(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=v,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(n=>{n.disable(g(d({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(d({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=E,this._forEachChild(n=>{n.enable(g(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(g(d({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===v)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator=!0;let t=be(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(x)?x:E}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){U(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}},j=class extends V{constructor(e,t,n){super(K(t),J(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Pe(this,!0,e),Object.keys(e).forEach(n=>{xe(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var X=class extends j{};var ke=new m("CallSetDisabledState",{providedIn:"root",factory:()=>Q}),Q="always";function st(i,e){return[...e.path,i]}function de(i,e,t=Q){ee(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),at(i,e),ut(i,e),lt(i,e),ot(i,e)}function ce(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),R(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function B(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ot(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function ee(i,e){let t=Se(i);e.validator!==null?i.setValidators(ae(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=Oe(i);e.asyncValidator!==null?i.setAsyncValidators(ae(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();B(e._rawValidators,r),B(e._rawAsyncValidators,r)}function R(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=Se(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Oe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return B(e._rawValidators,n),B(e._rawAsyncValidators,n),t}function at(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ge(i,e)})}function lt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ge(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ge(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ut(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function dt(i,e){i==null,ee(i,e)}function ct(i,e){return R(i,e)}function ht(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ft(i){return Object.getPrototypeOf(i.constructor)===N}function pt(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function gt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===_e?t=s:ft(s)?n=s:r=s}),r||n||t||null}function mt(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function he(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function fe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var P=class extends V{constructor(e=null,t,n){super(K(t),J(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),U(t)&&(t.nonNullable||t.initialValueIsDefault)&&(fe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){he(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){he(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){fe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var _t=i=>i instanceof P;var ti=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})(),yt={provide:D,useExisting:c(()=>vt),multi:!0},vt=(()=>{class i extends N{writeValue(t){let n=t??"";this.setProperty("value",n)}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n))}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=y(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,r){n&1&&_("input",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},features:[h([yt]),u]})}}return i})();var Te=new m("");var Ct={provide:C,useExisting:c(()=>Vt)},Vt=(()=>{class i extends C{constructor(t,n,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new M,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return de(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){ce(t.control||null,t,!1),mt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this.submitted=!0,pt(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(ce(n||null,t),_t(r)&&(de(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);dt(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&ct(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ee(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(a(ve,10),a(Ce,10),a(ke,8))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&_("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{form:[b.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[h([Ct]),u,W]})}}return i})();var Dt={provide:I,useExisting:c(()=>bt)},bt=(()=>{class i extends I{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,o){super(),this._ngModelWarningConfig=o,this._added=!1,this.name=null,this.update=new M,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=gt(this,s)}ngOnChanges(t){this._added||this._setUpControl(),ht(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return st(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(a(C,13),a(ve,10),a(Ce,10),a(D,10),a(Te,8))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""]],inputs:{name:[b.None,"formControlName","name"],isDisabled:[b.None,"disabled","isDisabled"],model:[b.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[h([Dt]),u,W]})}}return i})(),At={provide:D,useExisting:c(()=>Be),multi:!0};function je(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Mt(i){return i.split(":")[0]}var Be=(()=>{class i extends N{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n=this._getOptionId(t),r=je(n,t);this.setProperty("value",r)}registerOnChange(t){this.onChange=n=>{this.value=this._getOptionValue(n),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),t))return n;return null}_getOptionValue(t){let n=Mt(t);return this._optionMap.has(n)?this._optionMap.get(n):t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=y(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,r){n&1&&_("change",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[h([At]),u]})}}return i})(),ii=(()=>{class i{constructor(t,n,r){this._element=t,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(je(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(n){return new(n||i)(a(A),a(F),a(Be,9))}}static{this.\u0275dir=l({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return i})(),Ft={provide:D,useExisting:c(()=>Re),multi:!0};function pe(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Et(i){return i.split(":")[0]}var Re=(()=>{class i extends N{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n;if(Array.isArray(t)){let r=t.map(s=>this._getOptionId(s));n=(s,o)=>{s._setSelected(r.indexOf(o.toString())>-1)}}else n=(r,s)=>{r._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(t){this.onChange=n=>{let r=[],s=n.selectedOptions;if(s!==void 0){let o=s;for(let p=0;p<o.length;p++){let S=o[p],H=this._getOptionValue(S.value);r.push(H)}}else{let o=n.options;for(let p=0;p<o.length;p++){let S=o[p];if(S.selected){let H=this._getOptionValue(S.value);r.push(H)}}}this.value=r,t(r)}}_registerOption(t){let n=(this._idCounter++).toString();return this._optionMap.set(n,t),n}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,t))return n;return null}_getOptionValue(t){let n=Et(t);return this._optionMap.has(n)?this._optionMap.get(n)._value:t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=y(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,r){n&1&&_("change",function(o){return r.onChange(o.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[h([Ft]),u]})}}return i})(),ni=(()=>{class i{constructor(t,n,r){this._element=t,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(pe(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(pe(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(n){return new(n||i)(a(A),a(F),a(Re,9))}}static{this.\u0275dir=l({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return i})();var wt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=$({type:i})}static{this.\u0275inj=L({})}}return i})(),Y=class extends V{constructor(e,t,n){super(K(t),J(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Pe(this,!1,e),e.forEach((n,r)=>{xe(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function ge(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var ri=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,n=null){let r=this._reduceControls(t),s={};return ge(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new j(r,s)}record(t,n=null){let r=this._reduceControls(t);return new X(r,n)}control(t,n,r){let s={};return this.useNonNullable?(ge(n)?s=n:(s.validators=n,s.asyncValidators=r),new P(t,g(d({},s),{nonNullable:!0}))):new P(t,n,r)}array(t,n,r){let s=t.map(o=>this._createControl(o));return new Y(s,n,r)}_reduceControls(t){let n={};return Object.keys(t).forEach(r=>{n[r]=this._createControl(t[r])}),n}_createControl(t){if(t instanceof P)return t;if(t instanceof V)return t;if(Array.isArray(t)){let n=t[0],r=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,r,s)}else return this.control(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=re({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var si=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Te,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ke,useValue:t.callSetDisabledState??Q}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=$({type:i})}static{this.\u0275inj=L({imports:[wt]})}}return i})();export{D as a,He as b,_e as c,oe as d,Jt as e,Qt as f,j as g,P as h,ti as i,vt as j,Vt as k,bt as l,Be as m,ii as n,ni as o,ri as p,si as q};