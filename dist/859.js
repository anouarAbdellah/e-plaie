(self.webpackChunkargon_dashboard_angular=self.webpackChunkargon_dashboard_angular||[]).push([[859],{1424:(b,v,l)=>{"use strict";l.d(v,{C:()=>p});var e=l(4650),h=l(6895),m=l(4006);function f(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"input",9),e.NdJ("ngModelChange",function(r){e.CHM(o);const g=e.oxw().$implicit;return e.KtG(g.value=r)}),e.qZA()}if(2&n){const o=e.oxw().$implicit;e.Q6J("type",o.type)("name",o.name)("placeholder",o.title)("ngModel",o.value)}}function C(n,i){if(1&n&&(e.TgZ(0,"option",13),e._uU(1),e.qZA()),2&n){const o=i.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o)}}function _(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"select",10),e.NdJ("ngModelChange",function(r){e.CHM(o);const g=e.oxw().$implicit;return e.KtG(g.value=r)}),e.TgZ(1,"option",11),e._uU(2,"Tous"),e.qZA(),e.YNc(3,C,2,2,"option",12),e.qZA()}if(2&n){const o=e.oxw().$implicit;e.Q6J("name",o.name)("placeholder",o.title)("ngModel",o.value),e.xp6(3),e.Q6J("ngForOf",o.elements)}}function u(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"select",10),e.NdJ("ngModelChange",function(r){e.CHM(o);const g=e.oxw().$implicit;return e.KtG(g.value=r)}),e.TgZ(1,"option",11),e._uU(2,"Tous"),e.qZA(),e.TgZ(3,"option",13),e._uU(4,"Activ\xe9"),e.qZA(),e.TgZ(5,"option",13),e._uU(6,"D\xe9sactiv\xe9"),e.qZA()()}if(2&n){const o=e.oxw().$implicit;e.Q6J("name",o.name)("placeholder",o.title)("ngModel",o.value),e.xp6(3),e.Q6J("value",1),e.xp6(2),e.Q6J("value",0)}}function c(n,i){if(1&n&&(e.TgZ(0,"div",5)(1,"label",6),e._uU(2),e.qZA(),e.YNc(3,f,1,4,"input",7),e.YNc(4,_,4,4,"select",8),e.YNc(5,u,7,5,"select",8),e.qZA()),2&n){const o=i.$implicit;e.xp6(2),e.Oqu(o.title),e.xp6(1),e.Q6J("ngIf","text"==o.type||"number"==o.type),e.xp6(1),e.Q6J("ngIf","select"==o.type),e.xp6(1),e.Q6J("ngIf","status"==o.type)}}let p=(()=>{class n{constructor(){this.onFilterChange=new e.vpe}ngOnInit(){}onFilter(){let o={};for(let t of this.filters)o[t.name]=t.value;this.onFilterChange.emit(o)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-base-filter"]],inputs:{filters:"filters"},outputs:{onFilterChange:"onFilterChange"},decls:6,vars:1,consts:[[1,"card-header","border-0","d-flex"],[1,"row",2,"width","100%"],["class","col-md-3 mb-1",4,"ngFor","ngForOf"],[1,"col-md-12","mt-1","text-right"],[1,"btn","btn-info",3,"click"],[1,"col-md-3","mb-1"],[1,"label"],["class","form-control",3,"type","name","placeholder","ngModel","ngModelChange",4,"ngIf"],["class","form-control",3,"name","placeholder","ngModel","ngModelChange",4,"ngIf"],[1,"form-control",3,"type","name","placeholder","ngModel","ngModelChange"],[1,"form-control",3,"name","placeholder","ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,c,6,4,"div",2),e.TgZ(3,"div",3)(4,"button",4),e.NdJ("click",function(){return t.onFilter()}),e._uU(5," Filtrer "),e.qZA()()()()),2&o&&(e.xp6(2),e.Q6J("ngForOf",t.filters))},dependencies:[h.sg,h.O5,m.YN,m.Kr,m.Fj,m.EJ,m.JJ,m.On]}),n})()},4424:(b,v,l)=>{"use strict";l.d(v,{u:()=>n});var e=l(4650),h=l(2953),m=l(6895),f=l(1572);const C=["contentTemplate"];function _(i,o){1&i&&e._UZ(0,"mat-spinner",10),2&i&&e.Q6J("diameter",30)}function u(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"button",8),e.NdJ("click",function(){e.CHM(t);const g=e.oxw(2);return e.KtG(g.onSubmit())}),e.YNc(2,_,1,1,"mat-spinner",9),e._uU(3," Sauvegarder "),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("disabled",t.isLoading),e.xp6(1),e.Q6J("ngIf",t.isLoading)}}function c(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",1)(1,"h4",2),e._uU(2),e.qZA(),e.TgZ(3,"button",3),e.NdJ("click",function(){e.CHM(t);const g=e.oxw();return e.KtG(g.onClose())}),e.TgZ(4,"span",4),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"div",5),e.Hsn(7),e.qZA(),e.YNc(8,u,4,2,"div",6)}if(2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.title),e.xp6(6),e.Q6J("ngIf",t.showSubmit)}}const p=["*"];let n=(()=>{class i{constructor(t){this.modalService=t,this.isLoading=!1,this.showSubmit=!0,this.closingEvent=new e.vpe,this.submit=new e.vpe}ngOnInit(){}ngAfterViewInit(){this.open()}open(){console.log("hi"),this.modalService.open(this.contentTemplate,{windowClass:"myCustomModal"}).result.then(t=>{console.log("Modal Closed with:",t),this.onClose()},t=>{console.log("Modal Dismissed with:",t),this.onClose()})}onClose(){this.modalService.dismissAll(),this.closingEvent.emit()}onSubmit(){this.submit.emit()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.FF))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-base-modal"]],viewQuery:function(t,r){if(1&t&&e.Gf(C,5),2&t){let g;e.iGM(g=e.CRH())&&(r.contentTemplate=g.first)}},inputs:{title:"title",isLoading:"isLoading",showSubmit:"showSubmit"},outputs:{closingEvent:"closingEvent",submit:"submit"},ngContentSelectors:p,decls:2,vars:0,consts:[["contentTemplate",""],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["class","modal-footer",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-primary","d-flex","align-items-center",3,"disabled","click"],["style","margin-right: 10px;",3,"diameter",4,"ngIf"],[2,"margin-right","10px",3,"diameter"]],template:function(t,r){1&t&&(e.F$t(),e.YNc(0,c,9,2,"ng-template",null,0,e.W1O))},dependencies:[m.O5,f.Ou]}),i})()},9359:(b,v,l)=>{"use strict";l.d(v,{K:()=>E});var e=l(4650),h=l(4463),m=l(3060),f=l(6895),C=l(1572),_=l(4859),u=l(7392);function c(s,d){if(1&s&&(e.TgZ(0,"th",4),e._uU(1),e.qZA()),2&s){const a=d.$implicit;e.xp6(1),e.Oqu(a.header)}}function p(s,d){if(1&s&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&s){const a=e.oxw().$implicit,T=e.oxw().$implicit;e.xp6(1),e.hij(" ",T[a.key]," ")}}function n(s,d){if(1&s&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&s){const a=e.oxw().$implicit,T=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,T[a.key],"short")," ")}}function i(s,d){if(1&s){const a=e.EpF();e.TgZ(0,"div")(1,"label",9)(2,"input",10),e.NdJ("change",function(){e.CHM(a);const M=e.oxw().$implicit,y=e.oxw().$implicit,A=e.oxw(2);return e.KtG(A.toggleStatusChange(!y[M.key],y.id))}),e.qZA(),e._UZ(3,"span",11),e.qZA()()}if(2&s){const a=e.oxw().$implicit,T=e.oxw().$implicit;e.xp6(2),e.Q6J("checked",T[a.key])}}function o(s,d){if(1&s&&(e.TgZ(0,"th"),e.YNc(1,p,2,1,"div",5),e.YNc(2,n,3,4,"div",5),e.YNc(3,i,4,1,"div",5),e.qZA()),2&s){const a=d.$implicit;e.xp6(1),e.Q6J("ngIf","text"===a.type),e.xp6(1),e.Q6J("ngIf","date"===a.type),e.xp6(1),e.Q6J("ngIf","status"===a.type)}}function t(s,d){if(1&s){const a=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(a);const M=e.oxw().$implicit,y=e.oxw(2);return e.KtG(y.view(M))}),e.TgZ(1,"mat-icon"),e._uU(2,"remove_red_eye"),e.qZA()()}}function r(s,d){if(1&s){const a=e.EpF();e.TgZ(0,"tr"),e.YNc(1,o,4,3,"th",6),e.TgZ(2,"td")(3,"button",7),e.NdJ("click",function(){const y=e.CHM(a).$implicit,A=e.oxw(2);return e.KtG(A.edit(y))}),e.TgZ(4,"mat-icon"),e._uU(5,"edit"),e.qZA()(),e.YNc(6,t,3,0,"button",8),e.qZA()()}if(2&s){const a=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",a.tableData),e.xp6(5),e.Q6J("ngIf",a.viewLink)}}function g(s,d){if(1&s&&(e.TgZ(0,"tbody"),e.YNc(1,r,7,2,"tr",6),e.qZA()),2&s){const a=e.oxw();e.xp6(1),e.Q6J("ngForOf",a.data)}}function x(s,d){1&s&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",13)(3,"div",14),e._UZ(4,"mat-spinner",15),e._uU(5),e.ALo(6,"translate"),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("diameter",30),e.xp6(1),e.hij(" ",e.lcZ(6,2,"LOADING")," "))}let E=(()=>{class s{constructor(a,T){this.translate=a,this.router=T,this.onToggleStatus=new e.vpe,this.onEdit=new e.vpe}ngOnInit(){}toggleStatusChange(a,T){this.onToggleStatus.emit({id:T,status:a})}edit(a){this.onEdit.emit(a)}view(a){this.router.navigate([this.viewLink,a.id])}}return s.\u0275fac=function(a){return new(a||s)(e.Y36(h.sK),e.Y36(m.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-base-table"]],inputs:{isLoading:"isLoading",data:"data",tableData:"tableData",viewLink:"viewLink"},outputs:{onToggleStatus:"onToggleStatus",onEdit:"onEdit"},decls:8,vars:3,consts:[[1,"table-responsive"],[1,"table","align-items-center","table-flush"],[1,"thead-light"],["scope","col",4,"ngFor","ngForOf"],["scope","col"],[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-mini-fab","","color","primary","aria-label","Modifier",3,"click"],["mat-mini-fab","","color","primary","class","ml-2","aria-label","Details",3,"click",4,"ngIf"],[1,"custom-toggle"],["type","checkbox",3,"checked","change"],[1,"custom-toggle-slider","rounded-circle"],["mat-mini-fab","","color","primary","aria-label","Details",1,"ml-2",3,"click"],["colspan","8"],[1,"loading-holder"],[2,"margin-right","10px",3,"diameter"]],template:function(a,T){1&a&&(e.TgZ(0,"div",0)(1,"table",1)(2,"thead",2)(3,"tr"),e.YNc(4,c,2,1,"th",3),e._UZ(5,"th",4),e.qZA()(),e.YNc(6,g,2,1,"tbody",5),e.YNc(7,x,7,4,"tbody",5),e.qZA()()),2&a&&(e.xp6(4),e.Q6J("ngForOf",T.tableData),e.xp6(2),e.Q6J("ngIf",!T.isLoading),e.xp6(1),e.Q6J("ngIf",T.isLoading))},dependencies:[f.sg,f.O5,C.Ou,_.lW,u.Hw,f.uU,h.X$],styles:["button.edit-button[_ngcontent-%COMP%]{text-align:center;border-radius:50%;height:40px;width:40px;border:1px solid #5e72e4;cursor:pointer;font-size:15px}.loading-holder[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"]}),s})()},3986:(b,v,l)=>{"use strict";l.d(v,{N:()=>C});var e=l(4650),h=l(6895);const m=function(_){return{active:_}};function f(_,u){if(1&_){const c=e.EpF();e.TgZ(0,"li",9)(1,"button",4),e.NdJ("click",function(){const i=e.CHM(c).index,o=e.oxw();return e.KtG(o.goToPage(i+1))}),e._uU(2),e.qZA()()}if(2&_){const c=u.index,p=e.oxw();e.Q6J("ngClass",e.VKq(2,m,c+1===p.page)),e.xp6(2),e.Oqu(c+1)}}let C=(()=>{class _{constructor(){this.page=1,this.pagesCount=1,this.onPageChange=new e.vpe}ngOnInit(){}arrayOfN(c){return Array(c)}nextPage(){this.page<this.pagesCount&&(this.page++,this.onPageChange.emit(this.page))}previousPage(){this.page>1&&(this.page--,this.onPageChange.emit(this.page))}goToPage(c){c!=this.page&&c>0&&c<=this.pagesCount&&(this.page=c,this.onPageChange.emit(this.page))}}return _.\u0275fac=function(c){return new(c||_)},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-pagination-links"]],inputs:{page:"page",pagesCount:"pagesCount"},outputs:{onPageChange:"onPageChange"},decls:14,vars:1,consts:[[1,"card-footer","py-4"],["aria-label","..."],[1,"pagination","justify-content-end","mb-0"],[1,"page-item"],[1,"page-link",3,"click"],[1,"fas","fa-angle-left"],[1,"sr-only"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"fas","fa-angle-right"],[1,"page-item",3,"ngClass"]],template:function(c,p){1&c&&(e.TgZ(0,"div",0)(1,"nav",1)(2,"ul",2)(3,"li",3)(4,"button",4),e.NdJ("click",function(){return p.previousPage()}),e._UZ(5,"i",5),e.TgZ(6,"span",6),e._uU(7,"Previous"),e.qZA()()(),e.YNc(8,f,3,4,"li",7),e.TgZ(9,"li",3)(10,"button",4),e.NdJ("click",function(){return p.nextPage()}),e._UZ(11,"i",8),e.TgZ(12,"span",6),e._uU(13,"Next"),e.qZA()()()()()()),2&c&&(e.xp6(8),e.Q6J("ngForOf",p.arrayOfN(p.pagesCount)))},dependencies:[h.mk,h.sg]}),_})()},136:(b,v,l)=>{"use strict";l.d(v,{HK:()=>h,Qh:()=>c,Ql:()=>C,TF:()=>r,Vn:()=>a,Zf:()=>f,_G:()=>e,cA:()=>m,eK:()=>u,iu:()=>x,kH:()=>i,m:()=>p,o8:()=>o,od:()=>g,px:()=>n,rB:()=>s,ty:()=>E,u3:()=>t,y0:()=>_,zi:()=>d});const e={MEDICINES_TITLE:"Gestion des m\xe9dicaments",MEDICINES:"M\xe9dicaments",CABINETS_TITLE:"Gestion des cabinets et cliniques",CABINETS:"Cabinets et cliniques",ANTECEDENTS_TITLE:"Gestion des ant\xe9c\xe9dents",ANTECEDENTS:"Ant\xe9c\xe9dents",BILANTS_TITLE:"Gestion des examens et bilans",BILANS:"Examens et bilans",PTIS_TITLE:"Gestion des PTI",PTIS:"PTI",MOTIFS_TITLE:"Gestion des motifs",MOTIFS:"Motifs",CANVAS_TITLE:"Gestion des canvas et templates",CANVAS:"Canvas et templates",CREATE_ELEMENT:"Cr\xe9er",UPDATE_ELEMENT:"Modifier",LOADING:"Chargement en cours",CUSTOM_MODULES:"Form dynamique",PATIENTS:"Patients",PLAIES:"Plaies"},h=["text","select","multi-select","long-text"],m=["Casablanca","Rabat","F\xe8s","Tanger","Marrakech","Mekn\xe8s","Sal\xe9","T\xe9mara","Agadir","La\xe2youne","Oujda","K\xe9nitra","Mohammedia"],f=["cabinet","clinique","polyclinique"],C=["Ordonnance m\xe9dicale","Ordonnance chirurgicale","PT","Bilan","Lettre d'arr\xeate de travail","Certificat m\xe9dical","Lettre d'orientation"],_=["M\xe9dcin","Infirmier"],u=["Plaie","Hors plaie"],c=["anesth\xe9siologie","andrologie","cardiologie","chirurgie","cardiaque","chirurgie","esth\xe9tique,","plastique","et","reconstructive","chirurgie","g\xe9n\xe9rale","chirurgie","maxillo-faciale","chirurgie","p\xe9diatrique","chirurgie","thoracique","chirurgie","vasculaire","neurochirurgie","dermatologie","endocrinologie","gastro-ent\xe9rologie","g\xe9riatrie","gyn\xe9cologie","h\xe9matologie","h\xe9patologie","infectiologie","m\xe9decine","aigu\xeb","m\xe9decine","du","travail","m\xe9decine","g\xe9n\xe9rale","m\xe9decine","interne","m\xe9decine","nucl\xe9aire","m\xe9decine","palliative","m\xe9decine","physique","m\xe9decine","pr\xe9ventive","n\xe9onatologie","n\xe9phrologie","neurologie","odontologie","oncologie","obst\xe9trique.","ophtalmologie.","orthop\xe9die.","Oto-rhino-laryngologie.","p\xe9diatrie.","pneumologie.","psychiatrie.","radiologie.","radioth\xe9rapie.","rhumatologie","urologie"],p=["Pathologique","Chirurgicale","Allergies","m\xe9dicaments","Gyn\xe9co-obst\xe9trique","Urog\xe9nitaux","Paraclinique","Activit\xe9","sexuelle","Hygi\xe9no-di\xe9t\xe9tique"],n=["G\xe9n\xe9ral et non sp\xe9cifi\xe9","Sang, syst. h\xe9matop/immunol.","Syst. Digestif","Oeil","Oreille","Cardio-vasculaire","Ost\xe9o-articulaire","Neurologique","Psychologique","Peau","Respiratoire","M\xe9tabol., nutrit.,endocrinien","Syst\xe8me Urinaire","Grossesse, accouchement et PF","Syst.g\xe9nital f\xe9minin et sein","Syst. g\xe9nital masculin et sein","Social"],i=["Biologique","Radiologique"],o=["M\xe9dicale","Chirurgicale"],t=["Pr\xe9ventive","Curative","Corrective"],r=["C\xe9libataire","Mari\xe9(e)","Veuf(ve)","Divorc\xe9(e)"],g=["Male","Female"],x=["O+","O-","A+","A-","B+","B-","AB+","AB-"],E=["Chronique","Aigue"],s=["Pr\xe9vention","Curation","Correction"],d=["Visage","Cou","Poitrine","Ventre","Bras","Avant-bras","Main","Hanches","Genou","Jambe","Pied","T\xeate","Nuque","Dos partie sup\xe9rieure","Dos partie inf\xe9rieure","Coude","Fesses","Cuisse","Mollet","Talon"],a=["Jour","Semaine","Mois","Ann\xe9e"]},4327:function(b,v){var h;void 0!==(h=function(){"use strict";function f(n,i,o){var t=new XMLHttpRequest;t.open("GET",n),t.responseType="blob",t.onload=function(){p(t.response,i,o)},t.onerror=function(){console.error("could not download file")},t.send()}function C(n){var i=new XMLHttpRequest;i.open("HEAD",n,!1);try{i.send()}catch{}return 200<=i.status&&299>=i.status}function _(n){try{n.dispatchEvent(new MouseEvent("click"))}catch{var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(i)}}var u="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,c=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),p=u.saveAs||("object"!=typeof window||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(n,i,o){var t=u.URL||u.webkitURL,r=document.createElement("a");r.download=i=i||n.name||"download",r.rel="noopener","string"==typeof n?(r.href=n,r.origin===location.origin?_(r):C(r.href)?f(n,i,o):_(r,r.target="_blank")):(r.href=t.createObjectURL(n),setTimeout(function(){t.revokeObjectURL(r.href)},4e4),setTimeout(function(){_(r)},0))}:"msSaveOrOpenBlob"in navigator?function(n,i,o){if(i=i||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(function m(n,i){return typeof i>"u"?i={autoBom:!1}:"object"!=typeof i&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\ufeff",n],{type:n.type}):n}(n,o),i);else if(C(n))f(n,i,o);else{var t=document.createElement("a");t.href=n,t.target="_blank",setTimeout(function(){_(t)})}}:function(n,i,o,t){if((t=t||open("","_blank"))&&(t.document.title=t.document.body.innerText="downloading..."),"string"==typeof n)return f(n,i,o);var r="application/octet-stream"===n.type,g=/constructor/i.test(u.HTMLElement)||u.safari,x=/CriOS\/[\d]+/.test(navigator.userAgent);if((x||r&&g||c)&&typeof FileReader<"u"){var E=new FileReader;E.onloadend=function(){var a=E.result;a=x?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),t?t.location.href=a:location=a,t=null},E.readAsDataURL(n)}else{var s=u.URL||u.webkitURL,d=s.createObjectURL(n);t?t.location=d:location.href=d,t=null,setTimeout(function(){s.revokeObjectURL(d)},4e4)}});u.saveAs=p.saveAs=p,b.exports=p}.apply(v,[]))&&(b.exports=h)}}]);