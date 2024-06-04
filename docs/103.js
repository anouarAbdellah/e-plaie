"use strict";(self.webpackChunkargon_dashboard_angular=self.webpackChunkargon_dashboard_angular||[]).push([[103],{6103:(T,_,a)=>{a.r(_),a.d(_,{UsersModule:()=>R});var m=a(6895),C=a(5642),g=a(4463),f=a(529),r=a(4006),u=a(4144),i=a(9549),c=a(4859),v=a(7392),h=a(5113),p=a(7009),E=a(1572),U=a(3060),Z=a(4327),y=a(6575),e=a(4650),F=a(3986),L=a(9359),M=a(1424),S=a(5861),A=a(469),b=a(136),J=a(2953),N=a(4424),P=a(3238);const Q=["f"];function x(o,d){if(1&o&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&o){const t=d.$implicit;e.Q6J("value",t.key),e.xp6(1),e.Oqu(t.value)}}function O(o,d){if(1&o&&(e.TgZ(0,"mat-option",22),e._uU(1),e.qZA()),2&o){const t=d.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function I(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div",4)(1,"mat-form-field",5)(2,"mat-label"),e._uU(3,"Cabinet"),e.qZA(),e.TgZ(4,"mat-select",23),e.NdJ("ngModelChange",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.data.cabinet_id=s)}),e.YNc(5,O,2,2,"mat-option",10),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.data.cabinet_id),e.xp6(1),e.Q6J("ngForOf",t.cabinets)("ngForTrack",t.option)}}function D(o,d){1&o&&e._UZ(0,"mat-spinner",24),2&o&&e.Q6J("diameter",30)}let k=(()=>{class o{constructor(t,n,s,l){this.cabinetsService=t,this.usersService=n,this.modalService=s,this._snackBar=l,this.title=b._G.USERS,this.data={cabinet_id:null,name:null,email:null,password:null,type:null,enabled:null},this.isLoading=!1,this.horizontalPosition="end",this.verticalPosition="bottom",this.users_types=b.bn,this.closingEvent=new e.vpe,this.reloadEvent=new e.vpe,this.cabinets=[]}ngOnInit(){this.title=(this.selectedElement?b._G.UPDATE_ELEMENT:b._G.CREATE_ELEMENT)+" "+this.title,this.data={cabinet_id:this.selectedElement?this.selectedElement.cabinet_id:null,name:this.selectedElement?this.selectedElement.name:null,email:this.selectedElement?this.selectedElement.email:null,password:this.selectedElement?this.selectedElement.password:null,type:this.selectedElement?this.selectedElement.type:null,enabled:this.selectedElement?this.selectedElement.enabled:null},this.cabinetsService.all({params:{enabled:1}}).subscribe(t=>{console.log(t),this.cabinets=t.data},t=>{})}onClose(){this.closingEvent.emit()}onSubmit(){var t=this;return(0,S.Z)(function*(){const n=Object.values(t.form.controls);for(let s of n)if(s.invalid)return;t.isLoading=!0,t.selectedElement?t.usersService.update(t.selectedElement.id,t.data).subscribe(s=>{t.onSuccess(s)},s=>{t.onError(s)}):t.usersService.create(t.data).subscribe(s=>{t.onSuccess(s)},s=>{t.onError(s)})})()}onSuccess(t){this.isLoading=!1,this.reloadEvent.emit(),this.modalService.dismissAll(),this._snackBar.open("Enregistr\xe9 avec succ\xe8s!","Ok",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,panelClass:["success-snackbar"]})}onError(t){this.isLoading=!1;let n=t.error.data;for(let s in n)this._snackBar.open(n[s],"Ok",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,panelClass:["danger-snackbar"]})}toggleStatus(){this.data.enabled=!this.data.enabled}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(A.o),e.Y36(y.f),e.Y36(J.FF),e.Y36(p.ux))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-users-form"]],viewQuery:function(t,n){if(1&t&&e.Gf(Q,5),2&t){let s;e.iGM(s=e.CRH())&&(n.form=s.first)}},inputs:{selectedElement:"selectedElement"},outputs:{closingEvent:"closingEvent",reloadEvent:"reloadEvent"},decls:42,vars:14,consts:[[3,"title","showSubmit","isLoading","closingEvent"],["f","ngForm"],[1,"row"],[1,"col-md-12","conatiner-fluid"],[1,"col-md-6"],[1,"full-width"],["matInput","","placeholder","Nom","name","lastname","required","",3,"ngModel","ngModelChange"],["matInput","","placeholder","Email","email","","name","email","required","",3,"ngModel","ngModelChange"],["matInput","","type","password","placeholder","Mot de passe","name","password","email","",3,"ngModel","ngModelChange"],["name","type",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf","ngForTrack"],["class","col-md-6",4,"ngIf"],[1,"col-md-6","d-flex","align-items-center"],[1,"form-group","d-flex","mb-0"],[1,"mr-2"],[1,"custom-toggle","mb-0"],["type","checkbox",3,"checked","click"],[1,"custom-toggle-slider","rounded-circle"],[1,"col-md-12","container-fluid","mt-2"],[1,"col-md-12","text-right"],["type","button","mat-raised-button","","color","primary",3,"click"],["style","margin-right: 10px;",3,"diameter",4,"ngIf"],[3,"value"],["name","cabinet_id","required","",3,"ngModel","ngModelChange"],[2,"margin-right","10px",3,"diameter"]],template:function(t,n){1&t&&(e.TgZ(0,"app-base-modal",0),e.NdJ("closingEvent",function(){return n.onClose()}),e.TgZ(1,"form",null,1)(3,"div",2)(4,"div",3)(5,"div",2)(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),e._uU(9,"Nom"),e.qZA(),e.TgZ(10,"input",6),e.NdJ("ngModelChange",function(l){return n.data.name=l}),e.qZA()()(),e.TgZ(11,"div",4)(12,"mat-form-field",5)(13,"mat-label"),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"input",7),e.NdJ("ngModelChange",function(l){return n.data.email=l}),e.qZA()()(),e.TgZ(16,"div",4)(17,"mat-form-field",5)(18,"mat-label"),e._uU(19,"Mot de passe"),e.qZA(),e.TgZ(20,"input",8),e.NdJ("ngModelChange",function(l){return n.data.password=l}),e.qZA()()(),e.TgZ(21,"div",4)(22,"mat-form-field",5)(23,"mat-label"),e._uU(24,"Type"),e.qZA(),e.TgZ(25,"mat-select",9),e.NdJ("ngModelChange",function(l){return n.data.type=l}),e.YNc(26,x,2,2,"mat-option",10),e.ALo(27,"keyvalue"),e.qZA()()(),e.YNc(28,I,6,3,"div",11),e.TgZ(29,"div",12)(30,"div",13)(31,"span",14),e._uU(32,"Enabled:"),e.qZA(),e.TgZ(33,"label",15)(34,"input",16),e.NdJ("click",function(){return n.toggleStatus()}),e.qZA(),e._UZ(35,"span",17),e.qZA()()()()(),e.TgZ(36,"div",18)(37,"div",2)(38,"div",19)(39,"button",20),e.NdJ("click",function(){return n.onSubmit()}),e.YNc(40,D,1,1,"mat-spinner",21),e._uU(41," Sauvegarder "),e.qZA()()()()()()()),2&t&&(e.Q6J("title",n.title)("showSubmit",!1)("isLoading",n.isLoading),e.xp6(10),e.Q6J("ngModel",n.data.name),e.xp6(5),e.Q6J("ngModel",n.data.email),e.xp6(5),e.Q6J("ngModel",n.data.password),e.xp6(5),e.Q6J("ngModel",n.data.type),e.xp6(1),e.Q6J("ngForOf",e.lcZ(27,12,n.users_types))("ngForTrack",n.option),e.xp6(2),e.Q6J("ngIf","doctor"===n.data.type),e.xp6(6),e.Q6J("checked",n.data.enabled),e.xp6(6),e.Q6J("ngIf",n.isLoading))},dependencies:[m.sg,m.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.on,r.On,r.F,N.u,i.KE,i.hX,E.Ou,u.Nt,c.lW,h.gD,P.ey,m.Nd],styles:[".full-width[_ngcontent-%COMP%]{width:100%}"]}),o})();function w(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"app-users-form",16),e.NdJ("closingEvent",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onClose())})("reloadEvent",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onFormReload())}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("selectedElement",t.selectedElement)}}const Y=[{path:"",component:(()=>{class o{constructor(t,n){this.usersService=t,this.translate=n,this.data=[],this.isShowForm=!1,this.selectedElement=null,this.page=1,this.pagesCount=1,this.isLoading=!0,this.tableData=[{header:"Id",key:"id",type:"text"},{header:"Nom",key:"lastname",type:"text"},{header:"Email",key:"email",type:"text"},{header:"Status",key:"enabled",type:"status"},{header:"Date de cr\xe9ation",key:"created_at",type:"date"},{header:"Date de modification",key:"updated_at",type:"date"}],this.filters={type:"",email:"",name:"",id:""},this.filtersElements=[{type:"number",name:"id",title:"ID",value:""},{type:"text",name:"email",title:"Email",value:""},{type:"text",name:"name",title:"Nom",value:""},{type:"status",name:"enabled",title:"Activ\xe9",value:""}]}ngOnInit(){this.onLoad()}onAdd(){this.isShowForm=!0}onClose(){this.isShowForm=!1,this.selectedElement=!1}onFormReload(){this.onClose(),this.onLoad()}onEdit(t){this.isShowForm=!0,this.selectedElement=t}onPageChange(t){console.log(t),this.page=t,this.onLoad()}onLoad(){this.isLoading=!0;let t=this.getFilters();console.log(t),this.usersService.all({params:t}).subscribe(n=>{console.log(n),this.data=n.data.data,this.pagesCount=n.data.last_page,this.isLoading=!1},n=>{this.isLoading=!1})}exportData(){this.isLoading=!0;let t=this.getFilters(!0);this.usersService.all({params:t,responseType:"blob"}).subscribe(n=>{console.log(n);const s=new Blob([n],{type:"text/csv"});(0,Z.saveAs)(s,"users.csv"),this.isLoading=!1},n=>{console.log(n),this.isLoading=!1})}toggleStatusChange(t){console.log(t.status,t.id),this.isLoading=!0,this.usersService.status(t.id,{enabled:t.status}).subscribe(n=>{let s=this.data.findIndex(l=>l.id===t.id);s>=0&&(this.data[s].enabled=n.data.enabled),this.isLoading=!1})}getFilters(t=!1){let n={};for(let s in this.filters)this.filters[s]&&""!=this.filters[s]&&(n[s]=this.filters[s]);return n.page=this.page,n.limit=15,t&&(n.export=!0),n}onFiltersChange(t){this.filters={...t},this.onLoad()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y.f),e.Y36(g.sK))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-users-list"]],decls:19,vars:7,consts:[[1,"header","bg-gradient-info","pb-8","pt-5","pt-md-8"],[1,"container-fluid"],[1,"header-body"],[1,"container-fluid","mt--7"],[1,"row"],[1,"col"],[1,"card","shadow"],[1,"card-header","border-0","d-flex"],[1,"mb-0"],[1,"ml-auto"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-success","ml-2",3,"click"],[3,"filters","onFilterChange"],[3,"tableData","data","isLoading","onEdit","onToggleStatus"],[3,"page","pagesCount","onPageChange"],[3,"selectedElement","closingEvent","reloadEvent",4,"ngIf"],[3,"selectedElement","closingEvent","reloadEvent"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.qZA()(),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h3",8),e._uU(9,"UTILISATEURS"),e.qZA(),e.TgZ(10,"div",9)(11,"button",10),e.NdJ("click",function(){return n.onAdd()}),e._uU(12," Ajouter "),e.qZA(),e.TgZ(13,"button",11),e.NdJ("click",function(){return n.exportData()}),e._uU(14," Export "),e.qZA()()(),e.TgZ(15,"app-base-filter",12),e.NdJ("onFilterChange",function(l){return n.onFiltersChange(l)}),e.qZA(),e.TgZ(16,"app-base-table",13),e.NdJ("onEdit",function(l){return n.onEdit(l)})("onToggleStatus",function(l){return n.toggleStatusChange(l)}),e.qZA(),e.TgZ(17,"app-pagination-links",14),e.NdJ("onPageChange",function(l){return n.onPageChange(l)}),e.qZA()()()()(),e.YNc(18,w,1,1,"app-users-form",15)),2&t&&(e.xp6(15),e.Q6J("filters",n.filtersElements),e.xp6(1),e.Q6J("tableData",n.tableData)("data",n.data)("isLoading",n.isLoading),e.xp6(1),e.Q6J("page",n.page)("pagesCount",n.pagesCount),e.xp6(1),e.Q6J("ngIf",n.isShowForm))},dependencies:[m.O5,F.N,L.K,M.C,k]}),o})()}];let G=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[U.Bz.forChild(Y),U.Bz]}),o})(),R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,r.u5,C.K,f.JF,g.aw,p.ZX,i.lN,E.Cq,u.c,c.ot,v.Ps,h.LD,G]}),o})()},6575:(T,_,a)=>{a.d(_,{f:()=>f});var m=a(2340),C=a(4650),g=a(529);let f=(()=>{class r{constructor(i){this.http=i}all(i){return this.http.get(`${m.N.url}/api/users`,i)}update(i,c){return this.http.post(`${m.N.url}/api/users/${i}`,c)}create(i){return this.http.post(`${m.N.url}/api/users`,i)}find(i){return this.http.get(`${m.N.url}/api/users/${i}`)}status(i,c){return this.http.put(`${m.N.url}/api/users/status/${i}`,c)}}return r.\u0275fac=function(i){return new(i||r)(C.LFG(g.eN))},r.\u0275prov=C.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},5861:(T,_,a)=>{function m(g,f,r,u,i,c,v){try{var h=g[c](v),p=h.value}catch(E){return void r(E)}h.done?f(p):Promise.resolve(p).then(u,i)}function C(g){return function(){var f=this,r=arguments;return new Promise(function(u,i){var c=g.apply(f,r);function v(p){m(c,u,i,v,h,"next",p)}function h(p){m(c,u,i,v,h,"throw",p)}v(void 0)})}}a.d(_,{Z:()=>C})}}]);