import{a as T}from"./chunk-G3LIUBGJ.js";import{Ba as y,Da as s,Fa as O,Gb as I,Ia as f,Ja as C,La as x,Ma as P,Na as e,Nb as D,Oa as t,Ob as h,Pa as p,Va as m,Z as M,bb as o,cb as b,db as c,eb as j,fb as S,hb as E,lb as w,ma as _,na as g,nb as z,oa as u,ra as i,sa as v}from"./chunk-ULDYDPEK.js";function U(a,d){if(a&1&&(e(0,"div",28),p(1,"img",29),t()),a&2){let r=d.$implicit,l=d.$index,n=m();O("active",l===0),i(),s("src",n.apiUrl+"images/"+r,g)("alt",r)}}function A(a,d){if(a&1&&(e(0,"span",23),p(1,"img",30),o(2),t()),a&2){let r=d.$implicit;i(2),c(" ",r," ")}}function k(a,d){if(a&1&&(e(0,"div",24),p(1,"img",31),e(2,"h2"),o(3),t(),e(4,"span"),o(5),t(),e(6,"span"),o(7),t()()),a&2){let r=m();i(),s("src",r.assetsUrl+r.project.advisor.image,g)("alt",r.project.advisor.name),i(2),c(" ",r.project.advisor.name," "),i(2),c(" \u{1F4DE} ",r.project.advisor.phone," "),i(2),c(" \u2709\uFE0F ",r.project.advisor.email," ")}}function F(a,d){if(a&1&&(e(0,"div",25),p(1,"iframe",32),t()),a&2){let r=m();i(),s("src",r.project.url_video,u)}}var V=(()=>{class a{constructor(r,l){this.sanitizer=r,this.advisorService=l,this.apiUrl=`${h.apiUrl}uploads/`,this.assetsUrl=h.invienUrl}ngOnInit(){this.getAdvisor(),this.project=history.state,this.project.url_video&&(this.project.url_video=this.sanitizer.bypassSecurityTrustResourceUrl(this.project.url_video)),this.project.url_map=this.sanitizer.bypassSecurityTrustResourceUrl(this.project.url_map)}getAdvisor(){this.advisorService.getAllAdvisors().subscribe({next:r=>{this.project.advisor=r.data.find(l=>l.id===+this.project.advisorId)}})}static{this.\u0275fac=function(l){return new(l||a)(v(D),v(T))}}static{this.\u0275cmp=M({type:a,selectors:[["app-project-detail"]],standalone:!0,features:[E],decls:67,vars:21,consts:[[1,"property-detail"],["id","carouselExampleAutoplaying2","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-inner"],[1,"carousel-item",3,"active"],[1,"property-detail__carousel-btn"],["type","button","data-bs-target","#carouselExampleAutoplaying2","data-bs-slide","prev",1,"btn","carousel-btn","mx-2"],["src","./assets/icons/arrow-left.svg","alt","left"],["type","button","data-bs-target","#carouselExampleAutoplaying2","data-bs-slide","next",1,"btn","carousel-btn"],["src","./assets/icons/arrow-right.svg","alt","right"],[1,"property-detail__props","section"],[1,"property-detail__props-title"],[1,"property-detail__props-type"],[1,"property-detail__props-features"],["src","./assets/icons/measures.svg","alt","measures"],["src","./assets/icons/room.svg","alt","room"],["src","./assets/icons/bathroom.svg","alt","bathroom"],["src","./assets/icons/garage.svg","alt","garage"],[1,"property-detail__props-price"],[1,"property-detail__description","section"],[1,"property-detail__description-content"],[1,"property-detail__description-info"],[1,"property-detail__description-title"],[1,"property-detail__description-texts",3,"innerHTML"],[1,"property-detail__description-amenity"],[1,"property-detail__advisor"],[1,"property-detail__video","section"],[1,"section"],["width","100%","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0",3,"src"],[1,"carousel-item"],[1,"property-detail__carousel-img",3,"src","alt"],["src","./assets/icons/check-gray.svg","alt","check-gray"],[3,"src","alt"],["height","570","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share","referrerpolicy","strict-origin-when-cross-origin","allowfullscreen","",3,"src"]],template:function(l,n){l&1&&(e(0,"article",0)(1,"div",1)(2,"div",2),x(3,U,2,4,"div",3,C),t(),e(5,"div",4)(6,"button",5),p(7,"img",6),t(),e(8,"button",7),p(9,"img",8),t()()(),e(10,"div",9)(11,"div")(12,"h1",10),o(13),t(),e(14,"span",11),o(15),t()(),e(16,"div",12)(17,"div"),p(18,"img",13),e(19,"span"),o(20),t(),e(21,"span"),o(22,"Terreno"),t()(),e(23,"div"),p(24,"img",13),e(25,"span"),o(26),t(),e(27,"span"),o(28,"Construccion"),t()(),e(29,"div"),p(30,"img",14),e(31,"span"),o(32),t()(),e(33,"div"),p(34,"img",15),e(35,"span"),o(36),t()(),e(37,"div"),p(38,"img",16),e(39,"span"),o(40),t()()(),e(41,"div",17)(42,"span"),o(43,"En Venta"),t(),e(44,"span"),o(45),w(46,"currency"),t()()()(),e(47,"div",18)(48,"div",19)(49,"div",20)(50,"div")(51,"h2",21),o(52,"Descripci\xF3n"),t(),p(53,"div",22),t(),e(54,"div")(55,"h2",21),o(56,"Detalles"),t(),p(57,"div",22),t(),e(58,"div")(59,"h3",21),o(60,"Amenidades"),t(),x(61,A,3,1,"span",23,C),t()(),y(63,k,8,5,"div",24),t()(),y(64,F,2,1,"div",25),e(65,"div",26),p(66,"iframe",27),t()),l&2&&(i(3),P(n.project.images),i(10),b(n.project.name),i(2),S("",n.project.location,", ",n.project.state.state_es,", ",n.project.town.town_es,""),i(5),c("",n.project.total_size," m2"),i(6),c("",n.project.built_size," m2"),i(6),c("",n.project.rooms," Habitaciones"),i(4),c("",n.project.bathrooms," Ba\xF1os"),i(4),c("",n.project.garage," Cochera"),i(5),j(" ",z(46,16,n.project.price,n.project.currency,"symbol-narrow","1.2-2")," ",n.project.currency," "),i(8),s("innerHTML",n.project.description,_),i(4),s("innerHTML",n.project.details,_),i(4),P(n.project.amenities),i(2),f(63,n.project.advisor?63:-1),i(),f(64,n.project.url_video?64:-1),i(2),s("src",n.project.url_map,u))},dependencies:[I],styles:[".property-detail__video[_ngcontent-%COMP%], .property-detail__description-content[_ngcontent-%COMP%], .property-detail__props[_ngcontent-%COMP%], .property-detail[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{max-width:1300px;margin:0 auto}.property-detail[_ngcontent-%COMP%]{padding:1rem}.property-detail[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%]{max-height:650px}.property-detail__carousel-img[_ngcontent-%COMP%]{max-height:650px;object-fit:cover}.property-detail__carousel-btn[_ngcontent-%COMP%]{position:absolute;left:1rem;bottom:1rem}.property-detail__props[_ngcontent-%COMP%]{display:grid;gap:1rem}@media screen and (min-width: 768px){.property-detail__props[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.property-detail__props-features[_ngcontent-%COMP%]{justify-self:end}}.property-detail__props-title[_ngcontent-%COMP%]{font-size:2.6rem;font-weight:400}.property-detail__props-type[_ngcontent-%COMP%]{font-size:1.2rem;color:#434343}.property-detail__props-features[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem}.property-detail__props-features[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column}.property-detail__props-features[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.property-detail__props-features[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#747474}.property-detail__props-price[_ngcontent-%COMP%]{display:flex;flex-direction:column}.property-detail__props-price[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child{color:#7d7d7d}.property-detail__props-price[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{font-size:1.4rem}.property-detail__description[_ngcontent-%COMP%]{background-color:#f5f5f5}.property-detail__description-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}@media screen and (min-width: 768px){.property-detail__description-content[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}}.property-detail__description-content[_ngcontent-%COMP%] > app-form[_ngcontent-%COMP%]{flex:1;max-width:460px}.property-detail__description-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;max-width:540px}.property-detail__description-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.property-detail__description-info[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{max-width:fit-content}.property-detail__description-title[_ngcontent-%COMP%]{font-size:1.7rem;font-weight:400}.property-detail__description-texts[_ngcontent-%COMP%]{color:#626262}.property-detail__description-amenity[_ngcontent-%COMP%]{display:flex;gap:.5rem;color:#626262}.property-detail__description-amenity[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:1rem}.property-detail__advisor[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem;background-color:#fff;border-radius:.5rem;color:#626262;padding:1rem;width:100%;max-width:400px;margin:0 auto}.property-detail__advisor[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:200px;height:200px;object-fit:cover;border-radius:.5rem}.property-detail__advisor[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:1.5rem}.property-detail__video[_ngcontent-%COMP%] > iframe[_ngcontent-%COMP%]{width:100%}.section[_ngcontent-%COMP%]{padding:2rem 1rem}.carousel-btn[_ngcontent-%COMP%], .carousel-btn[_ngcontent-%COMP%]:hover, .carousel-btn[_ngcontent-%COMP%]:focus, .carousel-btn[_ngcontent-%COMP%]:active{border-radius:50%;background-color:var(--primary);padding:.1rem .3rem;color:#fff}.carousel-btn[_ngcontent-%COMP%] > i[_ngcontent-%COMP%], .carousel-btn[_ngcontent-%COMP%]:hover > i[_ngcontent-%COMP%], .carousel-btn[_ngcontent-%COMP%]:focus > i[_ngcontent-%COMP%], .carousel-btn[_ngcontent-%COMP%]:active > i[_ngcontent-%COMP%]{font-size:1.5rem}.carousel-btn[_ngcontent-%COMP%]:hover{background-color:#c8181e}"]})}}return a})();export{V as ProjectDetailComponent};