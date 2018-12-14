(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{o5AU:function(t,n,l){"use strict";l.r(n);var e=l("CcnG"),o=function(){return function(){}}(),i=l("pMnS"),u=l("ra/t"),s=l("ntG5"),r=l("M9A9"),c=l("ZYCi"),a=l("tXrQ"),p=l("Ip0R"),b=l("G5J1"),h=l("mrSG"),f=l("Ehmk"),m=l("eihs"),d=l("MGBS"),v=l("zotm"),g=function(){function t(t,n,l){this.project=t,this.concurrent=n,this.scheduler=l}return t.prototype.call=function(t,n){return n.subscribe(new w(t,this.project,this.concurrent,this.scheduler))},t}(),w=function(t){function n(n,l,e,o){var i=t.call(this,n)||this;return i.project=l,i.concurrent=e,i.scheduler=o,i.index=0,i.active=0,i.hasCompleted=!1,e<Number.POSITIVE_INFINITY&&(i.buffer=[]),i}return h.c(n,t),n.dispatch=function(t){t.subscriber.subscribeToProjection(t.result,t.value,t.index)},n.prototype._next=function(t){var l=this.destination;if(l.closed)this._complete();else{var e=this.index++;if(this.active<this.concurrent){l.next(t);var o=Object(f.a)(this.project)(t,e);o===m.a?l.error(m.a.e):this.scheduler?this.destination.add(this.scheduler.schedule(n.dispatch,0,{subscriber:this,result:o,value:t,index:e})):this.subscribeToProjection(o,t,e)}else this.buffer.push(t)}},n.prototype.subscribeToProjection=function(t,n,l){this.active++,this.destination.add(Object(v.a)(this,t,n,l))},n.prototype._complete=function(){this.hasCompleted=!0,this.hasCompleted&&0===this.active&&this.destination.complete(),this.unsubscribe()},n.prototype.notifyNext=function(t,n,l,e,o){this._next(n)},n.prototype.notifyComplete=function(t){var n=this.buffer;this.destination.remove(t),this.active--,n&&n.length>0&&this._next(n.shift()),this.hasCompleted&&0===this.active&&this.destination.complete()},n}(d.a),I=l("t/Na"),k=function(){function t(t){this.httpSvc=t}return t.prototype.getPlanetsFromWeb=function(){var t,n,l,e=this;return this.getPage("https://swapi.co/api/planets").pipe((t=function(t,n){return t.next?e.getPage(t.next):Object(b.b)()},void 0===n&&(n=Number.POSITIVE_INFINITY),void 0===l&&(l=void 0),n=(n||0)<1?Number.POSITIVE_INFINITY:n,function(e){return e.lift(new g(t,n,l))}))},t.prototype.getPage=function(t){return this.httpSvc.get(t)},t.prototype.getPlanets=function(){console.log("getPlanets()");var t=this.processPlanets();console.log(t)},t.prototype.processPlanets=function(){var t=this,n=[];return this.getPlanetsFromWeb().subscribe(function(l){console.log(l),n.push(t.getPlanetNames(l))}),n},t.prototype.getPlanetNames=function(t){return t.results.map(function(t){return t.name})},t.ngInjectableDef=e.S({factory:function(){return new t(e.W(I.c))},token:t,providedIn:"root"}),t}(),x=l("HNpX"),y=function(){function t(t,n){this.planetSvc=t,this.appStateSvc=n,this.icons=["flask","wifi","beer","football","basketball","paper-plane","american-football","boat","bluetooth","build"],this.items=[]}return t.prototype.ngOnInit=function(){var t=this;this.planetSvc.getPlanetsFromWeb().subscribe(function(n){console.log(n),n.results.map(function(n){t.items.push({title:n.name,note:n.gravity+"\nDiameter: "+n.diameter,icon:"planet",diameter:n.diameter}),t.items.sort(function(t,n){return t.title.toLowerCase()>n.title.toLowerCase()?0:-1})})},function(t){return console.log(t)})},t}(),P=e.nb({encapsulation:0,styles:[[""]],data:{}});function j(t){return e.Db(0,[(t()(),e.pb(0,0,null,null,7,"ion-item",[],null,[[null,"click"]],function(t,n,l){var o=!0;return"click"===n&&(o=!1!==e.yb(t,2).onClick(l)&&o),o},u.I,u.m)),e.ob(1,49152,null,0,s.C,[e.h,e.k],null,null),e.ob(2,16384,null,0,r.a,[[2,c.m],a.a,e.k],null,null),(t()(),e.pb(3,0,null,0,1,"ion-icon",[["slot","start"]],[[4,"font-size","px"]],null,null,u.F,u.j)),e.ob(4,49152,null,0,s.x,[e.h,e.k],{name:[0,"name"]},null),(t()(),e.Cb(5,0,[" "," "])),(t()(),e.pb(6,0,null,0,1,"div",[["class","item-note"],["slot","end"]],null,null,null,null,null)),(t()(),e.Cb(7,null,[" "," "]))],function(t,n){t(n,4,0,n.context.$implicit.icon)},function(t,n){t(n,3,0,n.context.$implicit.diameter/1e3),t(n,5,0,n.context.$implicit.title),t(n,7,0,n.context.$implicit.note)})}function N(t){return e.Db(0,[(t()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,u.E,u.i)),e.ob(1,49152,null,0,s.w,[e.h,e.k],null,null),(t()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,u.R,u.u)),e.ob(3,49152,null,0,s.vb,[e.h,e.k],null,null),(t()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,u.x,u.b)),e.ob(5,49152,null,0,s.g,[],null,null),(t()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,u.M,u.r)),e.ob(7,49152,null,0,s.M,[e.h,e.k],null,null),(t()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,u.Q,u.v)),e.ob(9,49152,null,0,s.wb,[e.h,e.k],null,null),(t()(),e.Cb(10,0,[" "," "])),(t()(),e.pb(11,0,null,null,5,"ion-content",[],null,null,null,u.D,u.h)),e.ob(12,49152,null,0,s.p,[e.h,e.k],null,null),(t()(),e.pb(13,0,null,0,3,"ion-list",[],null,null,null,u.L,u.o)),e.ob(14,49152,null,0,s.J,[e.h,e.k],null,null),(t()(),e.gb(16777216,null,0,1,null,j)),e.ob(16,278528,null,0,p.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){t(n,16,0,n.component.items)},function(t,n){t(n,10,0,n.component.appStateSvc.title)})}function S(t){return e.Db(0,[(t()(),e.pb(0,0,null,null,1,"app-list",[],null,null,null,N,P)),e.ob(1,114688,null,0,y,[k,x.a],null,null)],function(t,n){t(n,1,0)},null)}var C=e.lb("app-list",y,S,{},{},[]),F=l("gIcY"),O=l("95zI"),T=l("9opb"),_=l("apKv"),D=l("B4/3");l.d(n,"ListPageModuleNgFactory",function(){return M});var M=e.mb(o,[],function(t){return e.vb([e.wb(512,e.j,e.bb,[[8,[i.a,C]],[3,e.j],e.x]),e.wb(4608,p.j,p.i,[e.u,[2,p.p]]),e.wb(4608,F.g,F.g,[]),e.wb(4608,O.a,O.a,[e.z,e.g]),e.wb(4608,T.a,T.a,[O.a,e.j,e.q]),e.wb(4608,_.a,_.a,[O.a,e.j,e.q]),e.wb(1073742336,p.b,p.b,[]),e.wb(1073742336,F.f,F.f,[]),e.wb(1073742336,F.a,F.a,[]),e.wb(1073742336,D.a,D.a,[]),e.wb(1073742336,c.o,c.o,[[2,c.u],[2,c.m]]),e.wb(1073742336,o,o,[]),e.wb(1024,c.k,function(){return[[{path:"",component:y}]]},[])])})}}]);