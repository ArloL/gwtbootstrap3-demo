function yBb(){}
function nBb(a,b,c){GL.call(this,a,b,c,(mjb(),ljb))}
function HBb(a){var b;if(!a.i){b=new wBb(new yBb);a.i=b}return a.i}
function GBb(a){var b;if(!a.g){b=new nBb(PK(kM(a.b)),HBb(a),FBb(a));fL((lM(a.b),b),xM(lM(a.b)));a.g=b}return a.g}
function wBb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;$L(this,(a=new b1,yX(a,(b=new f0,b.b='Project Setup',e0(b),b.c='basic setup and using custom themes',e0(b),b)),yX(a,(c=new h0,yX(c,(d=new p0,o0(d,(o=new _Z(3),qg(o.r,nLb),o)),d)),yX(c,(e=new k0,yX(e,(p=new O$,N$(p,(q=new qR,q.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new _C(q.b.b)).b),p)),yX(e,(r=new U0,T0(r,(s=new qR,s.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new _C(s.b.b)).b),SG(r.r,qLb,true),SG(r.r,rLb,true),r)),e)),c)),yX(a,(f=new h0,yX(f,(g=new p0,o0(g,(t=new _Z(3),qg(t.r,'Bootstrap2 Look-a-like Setup'),t)),g)),yX(f,(i=new k0,yX(i,(u=new O$,N$(u,(v=new qR,v.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new _C(v.b.b)).b),u)),yX(i,(w=new U0,T0(w,(x=new qR,x.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new _C(x.b.b)).b),SG(w.r,qLb,true),SG(w.r,rLb,true),w)),i)),f)),yX(a,(j=new h0,yX(j,(k=new p0,o0(k,(y=new _Z(3),qg(y.r,'Custom Theme'),y)),k)),yX(j,(n=new k0,yX(n,(z=new O$,N$(z,(A=new qR,A.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new _C(A.b.b)).b),z)),yX(n,(B=new U0,T0(B,(C=new qR,C.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new _C(C.b.b)).b),SG(B.r,qLb,true),SG(B.r,rLb,true),B)),n)),j)),a))}
yC(869,245,AGb,nBb);yC(872,250,BGb,wBb);yC(873,1,{},yBb);yC(880,1,QGb);_.sb=function XBb(){BN(this.c,GBb(this.b.b))};var Oz=nQ(NKb,'SetupPresenter',869),Qz=nQ(NKb,'SetupView',872),Pz=nQ(NKb,'SetupView_BinderImpl',873);UGb(ve)(32);