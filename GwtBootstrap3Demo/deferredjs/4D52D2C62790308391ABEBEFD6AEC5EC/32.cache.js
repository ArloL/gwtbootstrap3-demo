function tBb(){}
function iBb(a,b,c){BL.call(this,a,b,c,(hjb(),gjb))}
function CBb(a){var b;if(!a.g){b=new rBb(new tBb);a.g=b}return a.g}
function BBb(a){var b;if(!a.f){b=new iBb(KK(fM(a.a)),CBb(a),ABb(a));aL((gM(a.a),b),rM(gM(a.a)));a.f=b}return a.f}
function rBb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;VL(this,(a=new Y0,tX(a,(b=new a0,b.a='Project Setup',__(b),b.b='basic setup and using custom themes',__(b),b)),tX(a,(c=new c0,tX(c,(d=new k0,j0(d,(o=new WZ(3),lg(o.q,aLb),o)),d)),tX(c,(e=new f0,tX(e,(p=new J$,I$(p,(q=new lR,Df(q.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new UC(Gf(q.a))).a),p)),tX(e,(r=new P0,O0(r,(s=new lR,Df(s.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new UC(Gf(s.a))).a),IG(r.q,dLb,true),IG(r.q,eLb,true),r)),e)),c)),tX(a,(f=new c0,tX(f,(g=new k0,j0(g,(t=new WZ(3),lg(t.q,'Bootstrap2 Look-a-like Setup'),t)),g)),tX(f,(i=new f0,tX(i,(u=new J$,I$(u,(v=new lR,Df(v.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new UC(Gf(v.a))).a),u)),tX(i,(w=new P0,O0(w,(x=new lR,Df(x.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new UC(Gf(x.a))).a),IG(w.q,dLb,true),IG(w.q,eLb,true),w)),i)),f)),tX(a,(j=new c0,tX(j,(k=new k0,j0(k,(y=new WZ(3),lg(y.q,'Custom Theme'),y)),k)),tX(j,(n=new f0,tX(n,(z=new J$,I$(z,(A=new lR,Df(A.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new UC(Gf(A.a))).a),z)),tX(n,(B=new P0,O0(B,(C=new lR,Df(C.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new UC(Gf(C.a))).a),IG(B.q,dLb,true),IG(B.q,eLb,true),B)),n)),j)),a))}
mC(871,247,uGb,iBb);mC(874,252,vGb,rBb);mC(875,1,{},tBb);mC(882,1,KGb);_.nb=function SBb(){wN(this.b,BBb(this.a.a))};var Cz=iQ(AKb,'SetupPresenter',871),Ez=iQ(AKb,'SetupView',874),Dz=iQ(AKb,'SetupView_BinderImpl',875);OGb(ke)(32);