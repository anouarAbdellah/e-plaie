"use strict";(self.webpackChunkargon_dashboard_angular=self.webpackChunkargon_dashboard_angular||[]).push([[111],{3111:(G,p,l)=>{l.r(p),l.d(p,{CabinetsModule:()=>w});var c=l(6895),m=l(3060),g=l(469),T=l(4327),d=l(136),e=l(4650),u=l(4463),Z=l(3986),y=l(9359),M=l(1424),A=l(2953),h=l(7009),F=l(4424),r=l(4006);const J=["f"];function L(o,s){1&o&&(e.TgZ(0,"div",34),e._uU(1," Code est requis. "),e.qZA())}function q(o,s){1&o&&(e.TgZ(0,"div",34),e._uU(1," Nom est requis. "),e.qZA())}function N(o,s){1&o&&(e.TgZ(0,"div",34),e._uU(1," Type est requis. "),e.qZA())}function S(o,s){if(1&o&&(e.TgZ(0,"option",35),e._uU(1),e.qZA()),2&o){const n=s.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n)}}function Q(o,s){1&o&&(e.TgZ(0,"div",34),e._uU(1," Sp\xe9cialit\xe9 est requis. "),e.qZA())}function x(o,s){1&o&&(e.TgZ(0,"div",34),e._uU(1," Adresse est requis. "),e.qZA())}function U(o,s){1&o&&(e.TgZ(0,"div",34),e._uU(1," T\xe9l\xe9phone est requis. "),e.qZA())}function I(o,s){1&o&&(e.TgZ(0,"div",34),e._uU(1," Email est requis. "),e.qZA())}function k(o,s){if(1&o&&(e.TgZ(0,"option",35),e._uU(1),e.qZA()),2&o){const n=s.$implicit;e.Q6J("value",n),e.xp6(1),e.Oqu(n)}}function Y(o,s){1&o&&(e.TgZ(0,"div",34),e._uU(1," Ville est requis. "),e.qZA())}let P=(()=>{class o{constructor(n,t,i){this.cabinetsService=n,this.modalService=t,this._snackBar=i,this.title=d._G.CABINETS,this.isLoading=!1,this.horizontalPosition="end",this.verticalPosition="bottom",this.specialities=d.Qh,this.cities=d.cA,this.closingEvent=new e.vpe,this.reloadEvent=new e.vpe}ngOnInit(){this.title=(this.selectedElement?d._G.UPDATE_ELEMENT:d._G.CREATE_ELEMENT)+" "+this.title,this.data={type:this.selectedElement?this.selectedElement.type:"",code:this.selectedElement?this.selectedElement.code:"",name:this.selectedElement?this.selectedElement.name:"",speciality:this.selectedElement?this.selectedElement.speciality:"",address:this.selectedElement?this.selectedElement.address:"",phone_number:this.selectedElement?this.selectedElement.phone_number:"",city:this.selectedElement?this.selectedElement.city:"",email:this.selectedElement?this.selectedElement.email:"",logo:null,enabled:!this.selectedElement||this.selectedElement.enabled}}onChangeImage(n){this.data.logo=n.target.files[0];var t=new FileReader;t.onload=i=>{this.logoURL=t.result},t.readAsDataURL(this.data.logo)}onClose(){this.closingEvent.emit()}toggleStatus(){this.data.enabled=!this.data.enabled}onSubmit(){const n=Object.values(this.form.controls);for(let i of n)if(i.invalid)return;this.isLoading=!0;let t=new FormData;for(let i in this.data)this.data[i]&&t.append(i,this.data[i]);this.selectedElement?this.cabinetsService.update(this.selectedElement.id,t).subscribe(i=>{this.onSuccess(i)},i=>{this.onError(i)}):this.cabinetsService.create(t).subscribe(i=>{this.onSuccess(i)},i=>{this.onError(i)})}onSuccess(n){this.isLoading=!1,this.reloadEvent.emit(),this.modalService.dismissAll(),this._snackBar.open("Enregistr\xe9 avec succ\xe8s!","Ok",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,panelClass:["success-snackbar"]})}onError(n){this.isLoading=!1;let t=n.error.data;for(let i in t)this._snackBar.open(t[i],"Ok",{horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,panelClass:["danger-snackbar"]})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(g.o),e.Y36(A.FF),e.Y36(h.ux))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-cabinets-form"]],viewQuery:function(n,t){if(1&n&&e.Gf(J,5),2&n){let i;e.iGM(i=e.CRH())&&(t.form=i.first)}},inputs:{selectedElement:"selectedElement"},outputs:{closingEvent:"closingEvent",reloadEvent:"reloadEvent"},decls:68,vars:21,consts:[[3,"title","isLoading","closingEvent","submit"],["f","ngForm"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["type","text","name","code","required","","placeholder","Code",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["code","ngModel"],["class","error-message",4,"ngIf"],["type","text","name","name","required","","placeholder","Nom",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["name","ngModel"],["name","type","required","","placeholder","Type",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["type","ngModel"],["value","","disabled",""],["value","cabinet"],["value","clinique"],["value","polyclinique"],["name","speciality","required","","placeholder","Sp\xe9cialit\xe9",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["speciality","ngModel"],[3,"value",4,"ngFor","ngForOf"],["type","text","name","address","placeholder","Adresse",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["address","ngModel"],["type","text","name","phone_number","placeholder","T\xe9l\xe9phone",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["phone_number","ngModel"],["type","email","name","email","placeholder","Email",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["email","ngModel"],["name","city","placeholder","Ville",1,"form-control","form-control-alternative",3,"ngModel","ngModelChange"],["city","ngModel"],["type","file","name","logo","placeholder","Logo",1,"form-control","form-control-alternative",3,"change"],[1,"col-md-6","d-flex","align-items-center"],[1,"form-group","d-flex","mb-0"],[1,"mr-2"],[1,"custom-toggle","mb-0"],["type","checkbox",3,"checked","click"],[1,"custom-toggle-slider","rounded-circle"],[1,"error-message"],[3,"value"]],template:function(n,t){if(1&n&&(e.TgZ(0,"app-base-modal",0),e.NdJ("closingEvent",function(){return t.onClose()})("submit",function(){return t.onSubmit()}),e.TgZ(1,"form",null,1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"input",5,6),e.NdJ("ngModelChange",function(a){return t.data.code=a}),e.qZA(),e.YNc(8,L,2,0,"div",7),e.qZA()(),e.TgZ(9,"div",3)(10,"div",4)(11,"input",8,9),e.NdJ("ngModelChange",function(a){return t.data.name=a}),e.qZA(),e.YNc(13,q,2,0,"div",7),e.qZA()(),e.TgZ(14,"div",3)(15,"div",4)(16,"select",10,11),e.NdJ("ngModelChange",function(a){return t.data.type=a}),e.TgZ(18,"option",12),e._uU(19,"Type"),e.qZA(),e.TgZ(20,"option",13),e._uU(21,"Cabinet"),e.qZA(),e.TgZ(22,"option",14),e._uU(23,"Clinique"),e.qZA(),e.TgZ(24,"option",15),e._uU(25,"Polyclinique"),e.qZA()(),e.YNc(26,N,2,0,"div",7),e.qZA()(),e.TgZ(27,"div",3)(28,"div",4)(29,"select",16,17),e.NdJ("ngModelChange",function(a){return t.data.speciality=a}),e.TgZ(31,"option",12),e._uU(32,"Sp\xe9cialit\xe9"),e.qZA(),e.YNc(33,S,2,2,"option",18),e.qZA(),e.YNc(34,Q,2,0,"div",7),e.qZA()(),e.TgZ(35,"div",3)(36,"div",4)(37,"input",19,20),e.NdJ("ngModelChange",function(a){return t.data.address=a}),e.qZA(),e.YNc(39,x,2,0,"div",7),e.qZA()(),e.TgZ(40,"div",3)(41,"div",4)(42,"input",21,22),e.NdJ("ngModelChange",function(a){return t.data.phone_number=a}),e.qZA(),e.YNc(44,U,2,0,"div",7),e.qZA()(),e.TgZ(45,"div",3)(46,"div",4)(47,"input",23,24),e.NdJ("ngModelChange",function(a){return t.data.email=a}),e.qZA(),e.YNc(49,I,2,0,"div",7),e.qZA()(),e.TgZ(50,"div",3)(51,"div",4)(52,"select",25,26),e.NdJ("ngModelChange",function(a){return t.data.city=a}),e.TgZ(54,"option",12),e._uU(55,"Ville"),e.qZA(),e.YNc(56,k,2,2,"option",18),e.qZA(),e.YNc(57,Y,2,0,"div",7),e.qZA()(),e.TgZ(58,"div",3)(59,"div",4)(60,"input",27),e.NdJ("change",function(a){return t.onChangeImage(a)}),e.qZA()()(),e.TgZ(61,"div",28)(62,"div",29)(63,"span",30),e._uU(64,"Enabled:"),e.qZA(),e.TgZ(65,"label",31)(66,"input",32),e.NdJ("click",function(){return t.toggleStatus()}),e.qZA(),e._UZ(67,"span",33),e.qZA()()()()()()),2&n){const i=e.MAs(7),a=e.MAs(12),f=e.MAs(17),C=e.MAs(30),_=e.MAs(38),v=e.MAs(43),b=e.MAs(48),E=e.MAs(53);e.Q6J("title",t.title)("isLoading",t.isLoading),e.xp6(6),e.Q6J("ngModel",t.data.code),e.xp6(2),e.Q6J("ngIf",i.invalid&&i.touched),e.xp6(3),e.Q6J("ngModel",t.data.name),e.xp6(2),e.Q6J("ngIf",a.invalid&&a.touched),e.xp6(3),e.Q6J("ngModel",t.data.type),e.xp6(10),e.Q6J("ngIf",f.invalid&&f.touched),e.xp6(3),e.Q6J("ngModel",t.data.speciality),e.xp6(4),e.Q6J("ngForOf",t.specialities),e.xp6(1),e.Q6J("ngIf",C.invalid&&C.touched),e.xp6(3),e.Q6J("ngModel",t.data.address),e.xp6(2),e.Q6J("ngIf",_.invalid&&_.touched),e.xp6(3),e.Q6J("ngModel",t.data.phone_number),e.xp6(2),e.Q6J("ngIf",v.invalid&&v.touched),e.xp6(3),e.Q6J("ngModel",t.data.email),e.xp6(2),e.Q6J("ngIf",b.invalid&&b.touched),e.xp6(3),e.Q6J("ngModel",t.data.city),e.xp6(4),e.Q6J("ngForOf",t.cities),e.xp6(1),e.Q6J("ngIf",E.invalid&&E.touched),e.xp6(9),e.Q6J("checked",t.data.enabled)}},dependencies:[c.sg,c.O5,F.u,r._Y,r.YN,r.Kr,r.Fj,r.EJ,r.JJ,r.JL,r.Q7,r.On,r.F]}),o})();function D(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"app-cabinets-form",16),e.NdJ("closingEvent",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.onClose())})("reloadEvent",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.onFormReload())}),e.qZA()}if(2&o){const n=e.oxw();e.Q6J("id",n.selectedElement)("selectedElement",n.selectedElement)}}const O=[{path:"",component:(()=>{class o{constructor(n,t){this.cabinetsService=n,this.translate=t,this.data=[],this.isShowForm=!1,this.selectedElement=null,this.page=1,this.pagesCount=1,this.isLoading=!0,this.tableData=[{header:"Id",key:"id",type:"text"},{header:"Sp\xe9cialit\xe9",key:"speciality",type:"text"},{header:"Type",key:"type",type:"text"},{header:"Code",key:"code",type:"text"},{header:"Nom",key:"name",type:"text"},{header:"Date de cr\xe9ation",key:"created_at",type:"date"},{header:"Date de modification",key:"updated_at",type:"date"},{header:"Status",key:"enabled",type:"status"}],this.filters={type:"",code:"",name:"",id:""},this.filtersElements=[{type:"number",name:"id",title:"ID",value:""},{type:"text",name:"code",title:"Code",value:""},{type:"text",name:"name",title:"Nom",value:""},{type:"select",name:"type",title:"Type",value:"",elements:d.Zf},{type:"status",name:"enabled",title:"Activ\xe9",value:""}]}ngOnInit(){this.onLoad()}onAdd(){this.isShowForm=!0}onClose(){this.isShowForm=!1,this.selectedElement=!1}onFormReload(){this.onClose(),this.onLoad()}toggleStatusChange(n){console.log(n.status,n.id),this.isLoading=!0,this.cabinetsService.status(n.id,{enabled:n.status}).subscribe(t=>{let i=this.data.findIndex(a=>a.id===n.id);i>=0&&(this.data[i].enabled=t.data.enabled),this.isLoading=!1})}onEdit(n){this.isShowForm=!0,this.selectedElement=n}onPageChange(n){console.log(n),this.page=n,this.onLoad()}onLoad(){this.isLoading=!0;let n=this.getFilters();console.log(n),this.cabinetsService.all({params:n}).subscribe(t=>{console.log(t),this.data=t.data.data,this.pagesCount=t.data.last_page,this.isLoading=!1},t=>{this.isLoading=!1})}exportData(){this.isLoading=!0;let n=this.getFilters(!0);this.cabinetsService.all({params:n,responseType:"blob"}).subscribe(t=>{console.log(t);const i=new Blob([t],{type:"text/csv"});(0,T.saveAs)(i,"cabinets.csv"),this.isLoading=!1},t=>{console.log(t),this.isLoading=!1})}getFilters(n=!1){let t={};for(let i in this.filters)this.filters[i]&&""!=this.filters[i]&&(t[i]=this.filters[i]);return t.page=this.page,t.limit=15,n&&(t.export=!0),t}onFiltersChange(n){this.filters={...n},this.onLoad()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(g.o),e.Y36(u.sK))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-cabinets-list"]],decls:19,vars:7,consts:[[1,"header","bg-gradient-info","pb-8","pt-5","pt-md-8"],[1,"container-fluid"],[1,"header-body"],[1,"container-fluid","mt--7"],[1,"row"],[1,"col"],[1,"card","shadow"],[1,"card-header","border-0","d-flex"],[1,"mb-0"],[1,"ml-auto"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-success","ml-2",3,"click"],[3,"filters","onFilterChange"],[3,"tableData","data","isLoading","onEdit","onToggleStatus"],[3,"page","pagesCount","onPageChange"],[3,"id","selectedElement","closingEvent","reloadEvent",4,"ngIf"],[3,"id","selectedElement","closingEvent","reloadEvent"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"div",2),e.qZA()(),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h3",8),e._uU(9,"CABINETS ET CLINIQUES"),e.qZA(),e.TgZ(10,"div",9)(11,"button",10),e.NdJ("click",function(){return t.onAdd()}),e._uU(12," Ajouter "),e.qZA(),e.TgZ(13,"button",11),e.NdJ("click",function(){return t.exportData()}),e._uU(14," Export "),e.qZA()()(),e.TgZ(15,"app-base-filter",12),e.NdJ("onFilterChange",function(a){return t.onFiltersChange(a)}),e.qZA(),e.TgZ(16,"app-base-table",13),e.NdJ("onEdit",function(a){return t.onEdit(a)})("onToggleStatus",function(a){return t.toggleStatusChange(a)}),e.qZA(),e.TgZ(17,"app-pagination-links",14),e.NdJ("onPageChange",function(a){return t.onPageChange(a)}),e.qZA()()()()(),e.YNc(18,D,1,2,"app-cabinets-form",15)),2&n&&(e.xp6(15),e.Q6J("filters",t.filtersElements),e.xp6(1),e.Q6J("tableData",t.tableData)("data",t.data)("isLoading",t.isLoading),e.xp6(1),e.Q6J("page",t.page)("pagesCount",t.pagesCount),e.xp6(1),e.Q6J("ngIf",t.isShowForm))},dependencies:[c.O5,Z.N,y.K,M.C,P]}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(O),m.Bz]}),o})();var R=l(5642),z=l(529);let w=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,B,R.K,z.JF,r.u5,u.aw,h.ZX]}),o})()}}]);