import{$ as M,i as It,a as Lt,l as Ct,r as Ot,g as At,f as Pt,w as St,M as A,K as B,s as Gt,a5 as ut,X as Nt,h as Ht,a6 as Bt,a7 as jt}from"./mermaid.esm.min-4da33a11.js";import"./app-f29a47bb.js";import"./framework-d4d2f9be.js";var ht=function(){var r=function(H,o,p,i){for(p=p||{},i=H.length;i--;p[H[i]]=o);return p},a=[1,4],l=[1,7],h=[1,5],s=[1,9],n=[1,6],g=[2,6],u=[1,16],m=[6,8,14,20,22,24,25,27,29,32,37,40,50,55],y=[8,14,20,22,24,25,27,29,32,37,40],b=[8,13,14,20,22,24,25,27,29,32,37,40],d=[1,26],_=[6,8,14,50,55],c=[8,14,55],k=[1,53],N=[1,52],S=[8,14,30,33,35,38,55],$=[1,67],x=[1,68],E=[1,69],it=[8,14,33,35,42,55],ct={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,GG:6,document:7,EOF:8,":":9,DIR:10,options:11,body:12,OPT:13,NL:14,line:15,statement:16,commitStatement:17,mergeStatement:18,cherryPickStatement:19,acc_title:20,acc_title_value:21,acc_descr:22,acc_descr_value:23,acc_descr_multiline_value:24,section:25,branchStatement:26,CHECKOUT:27,ref:28,BRANCH:29,ORDER:30,NUM:31,CHERRY_PICK:32,COMMIT_ID:33,STR:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,openDirective:46,typeDirective:47,closeDirective:48,argDirective:49,open_directive:50,type_directive:51,arg_directive:52,close_directive:53,ID:54,";":55,$accept:0,$end:1},terminals_:{2:"error",6:"GG",8:"EOF",9:":",10:"DIR",13:"OPT",14:"NL",20:"acc_title",21:"acc_title_value",22:"acc_descr",23:"acc_descr_value",24:"acc_descr_multiline_value",25:"section",27:"CHECKOUT",29:"BRANCH",30:"ORDER",31:"NUM",32:"CHERRY_PICK",33:"COMMIT_ID",34:"STR",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",50:"open_directive",51:"type_directive",52:"arg_directive",53:"close_directive",54:"ID",55:";"},productions_:[0,[3,2],[3,2],[3,3],[3,4],[3,5],[7,0],[7,2],[11,2],[11,1],[12,0],[12,2],[15,2],[15,1],[16,1],[16,1],[16,1],[16,2],[16,2],[16,1],[16,1],[16,1],[16,2],[26,2],[26,4],[19,3],[19,5],[19,5],[19,5],[19,5],[18,2],[18,4],[18,4],[18,4],[18,6],[18,6],[18,6],[18,6],[18,6],[18,6],[18,8],[18,8],[18,8],[18,8],[18,8],[18,8],[17,2],[17,3],[17,3],[17,5],[17,5],[17,3],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,3],[17,5],[17,5],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[41,0],[41,1],[39,1],[39,1],[39,1],[5,3],[5,5],[46,1],[47,1],[49,1],[48,1],[28,1],[28,1],[4,1],[4,1],[4,1]],performAction:function(H,o,p,i,f,t,L){var e=t.length-1;switch(f){case 3:return t[e];case 4:return t[e-1];case 5:return i.setDirection(t[e-3]),t[e-1];case 7:i.setOptions(t[e-1]),this.$=t[e];break;case 8:t[e-1]+=t[e],this.$=t[e-1];break;case 10:this.$=[];break;case 11:t[e-1].push(t[e]),this.$=t[e-1];break;case 12:this.$=t[e-1];break;case 17:this.$=t[e].trim(),i.setAccTitle(this.$);break;case 18:case 19:this.$=t[e].trim(),i.setAccDescription(this.$);break;case 20:i.addSection(t[e].substr(8)),this.$=t[e].substr(8);break;case 22:i.checkout(t[e]);break;case 23:i.branch(t[e]);break;case 24:i.branch(t[e-2],t[e]);break;case 25:i.cherryPick(t[e],"",void 0);break;case 26:i.cherryPick(t[e-2],"",t[e]);break;case 27:case 29:i.cherryPick(t[e-2],"","");break;case 28:i.cherryPick(t[e],"",t[e-2]);break;case 30:i.merge(t[e],"","","");break;case 31:i.merge(t[e-2],t[e],"","");break;case 32:i.merge(t[e-2],"",t[e],"");break;case 33:i.merge(t[e-2],"","",t[e]);break;case 34:i.merge(t[e-4],t[e],"",t[e-2]);break;case 35:i.merge(t[e-4],"",t[e],t[e-2]);break;case 36:i.merge(t[e-4],"",t[e-2],t[e]);break;case 37:i.merge(t[e-4],t[e-2],t[e],"");break;case 38:i.merge(t[e-4],t[e-2],"",t[e]);break;case 39:i.merge(t[e-4],t[e],t[e-2],"");break;case 40:i.merge(t[e-6],t[e-4],t[e-2],t[e]);break;case 41:i.merge(t[e-6],t[e],t[e-4],t[e-2]);break;case 42:i.merge(t[e-6],t[e-4],t[e],t[e-2]);break;case 43:i.merge(t[e-6],t[e-2],t[e-4],t[e]);break;case 44:i.merge(t[e-6],t[e],t[e-2],t[e-4]);break;case 45:i.merge(t[e-6],t[e-2],t[e],t[e-4]);break;case 46:i.commit(t[e]);break;case 47:i.commit("","",i.commitType.NORMAL,t[e]);break;case 48:i.commit("","",t[e],"");break;case 49:i.commit("","",t[e],t[e-2]);break;case 50:i.commit("","",t[e-2],t[e]);break;case 51:i.commit("",t[e],i.commitType.NORMAL,"");break;case 52:i.commit("",t[e-2],i.commitType.NORMAL,t[e]);break;case 53:i.commit("",t[e],i.commitType.NORMAL,t[e-2]);break;case 54:i.commit("",t[e-2],t[e],"");break;case 55:i.commit("",t[e],t[e-2],"");break;case 56:i.commit("",t[e-4],t[e-2],t[e]);break;case 57:i.commit("",t[e-4],t[e],t[e-2]);break;case 58:i.commit("",t[e-2],t[e-4],t[e]);break;case 59:i.commit("",t[e],t[e-4],t[e-2]);break;case 60:i.commit("",t[e],t[e-2],t[e-4]);break;case 61:i.commit("",t[e-2],t[e],t[e-4]);break;case 62:i.commit(t[e],"",i.commitType.NORMAL,"");break;case 63:i.commit(t[e],"",i.commitType.NORMAL,t[e-2]);break;case 64:i.commit(t[e-2],"",i.commitType.NORMAL,t[e]);break;case 65:i.commit(t[e-2],"",t[e],"");break;case 66:i.commit(t[e],"",t[e-2],"");break;case 67:i.commit(t[e],t[e-2],i.commitType.NORMAL,"");break;case 68:i.commit(t[e-2],t[e],i.commitType.NORMAL,"");break;case 69:i.commit(t[e-4],"",t[e-2],t[e]);break;case 70:i.commit(t[e-4],"",t[e],t[e-2]);break;case 71:i.commit(t[e-2],"",t[e-4],t[e]);break;case 72:i.commit(t[e],"",t[e-4],t[e-2]);break;case 73:i.commit(t[e],"",t[e-2],t[e-4]);break;case 74:i.commit(t[e-2],"",t[e],t[e-4]);break;case 75:i.commit(t[e-4],t[e],t[e-2],"");break;case 76:i.commit(t[e-4],t[e-2],t[e],"");break;case 77:i.commit(t[e-2],t[e],t[e-4],"");break;case 78:i.commit(t[e],t[e-2],t[e-4],"");break;case 79:i.commit(t[e],t[e-4],t[e-2],"");break;case 80:i.commit(t[e-2],t[e-4],t[e],"");break;case 81:i.commit(t[e-4],t[e],i.commitType.NORMAL,t[e-2]);break;case 82:i.commit(t[e-4],t[e-2],i.commitType.NORMAL,t[e]);break;case 83:i.commit(t[e-2],t[e],i.commitType.NORMAL,t[e-4]);break;case 84:i.commit(t[e],t[e-2],i.commitType.NORMAL,t[e-4]);break;case 85:i.commit(t[e],t[e-4],i.commitType.NORMAL,t[e-2]);break;case 86:i.commit(t[e-2],t[e-4],i.commitType.NORMAL,t[e]);break;case 87:i.commit(t[e-6],t[e-4],t[e-2],t[e]);break;case 88:i.commit(t[e-6],t[e-4],t[e],t[e-2]);break;case 89:i.commit(t[e-6],t[e-2],t[e-4],t[e]);break;case 90:i.commit(t[e-6],t[e],t[e-4],t[e-2]);break;case 91:i.commit(t[e-6],t[e-2],t[e],t[e-4]);break;case 92:i.commit(t[e-6],t[e],t[e-2],t[e-4]);break;case 93:i.commit(t[e-4],t[e-6],t[e-2],t[e]);break;case 94:i.commit(t[e-4],t[e-6],t[e],t[e-2]);break;case 95:i.commit(t[e-2],t[e-6],t[e-4],t[e]);break;case 96:i.commit(t[e],t[e-6],t[e-4],t[e-2]);break;case 97:i.commit(t[e-2],t[e-6],t[e],t[e-4]);break;case 98:i.commit(t[e],t[e-6],t[e-2],t[e-4]);break;case 99:i.commit(t[e],t[e-4],t[e-2],t[e-6]);break;case 100:i.commit(t[e-2],t[e-4],t[e],t[e-6]);break;case 101:i.commit(t[e],t[e-2],t[e-4],t[e-6]);break;case 102:i.commit(t[e-2],t[e],t[e-4],t[e-6]);break;case 103:i.commit(t[e-4],t[e-2],t[e],t[e-6]);break;case 104:i.commit(t[e-4],t[e],t[e-2],t[e-6]);break;case 105:i.commit(t[e-2],t[e-4],t[e-6],t[e]);break;case 106:i.commit(t[e],t[e-4],t[e-6],t[e-2]);break;case 107:i.commit(t[e-2],t[e],t[e-6],t[e-4]);break;case 108:i.commit(t[e],t[e-2],t[e-6],t[e-4]);break;case 109:i.commit(t[e-4],t[e-2],t[e-6],t[e]);break;case 110:i.commit(t[e-4],t[e],t[e-6],t[e-2]);break;case 111:this.$="";break;case 112:this.$=t[e];break;case 113:this.$=i.commitType.NORMAL;break;case 114:this.$=i.commitType.REVERSE;break;case 115:this.$=i.commitType.HIGHLIGHT;break;case 118:i.parseDirective("%%{","open_directive");break;case 119:i.parseDirective(t[e],"type_directive");break;case 120:t[e]=t[e].trim().replace(/'/g,'"'),i.parseDirective(t[e],"arg_directive");break;case 121:i.parseDirective("}%%","close_directive","gitGraph");break}},table:[{3:1,4:2,5:3,6:a,8:l,14:h,46:8,50:s,55:n},{1:[3]},{3:10,4:2,5:3,6:a,8:l,14:h,46:8,50:s,55:n},{3:11,4:2,5:3,6:a,8:l,14:h,46:8,50:s,55:n},{7:12,8:g,9:[1,13],10:[1,14],11:15,14:u},r(m,[2,124]),r(m,[2,125]),r(m,[2,126]),{47:17,51:[1,18]},{51:[2,118]},{1:[2,1]},{1:[2,2]},{8:[1,19]},{7:20,8:g,11:15,14:u},{9:[1,21]},r(y,[2,10],{12:22,13:[1,23]}),r(b,[2,9]),{9:[1,25],48:24,53:d},r([9,53],[2,119]),{1:[2,3]},{8:[1,27]},{7:28,8:g,11:15,14:u},{8:[2,7],14:[1,31],15:29,16:30,17:32,18:33,19:34,20:[1,35],22:[1,36],24:[1,37],25:[1,38],26:39,27:[1,40],29:[1,44],32:[1,43],37:[1,42],40:[1,41]},r(b,[2,8]),r(_,[2,116]),{49:45,52:[1,46]},r(_,[2,121]),{1:[2,4]},{8:[1,47]},r(y,[2,11]),{4:48,8:l,14:h,55:n},r(y,[2,13]),r(c,[2,14]),r(c,[2,15]),r(c,[2,16]),{21:[1,49]},{23:[1,50]},r(c,[2,19]),r(c,[2,20]),r(c,[2,21]),{28:51,34:k,54:N},r(c,[2,111],{41:54,33:[1,57],34:[1,59],35:[1,55],38:[1,56],42:[1,58]}),{28:60,34:k,54:N},{33:[1,61],35:[1,62]},{28:63,34:k,54:N},{48:64,53:d},{53:[2,120]},{1:[2,5]},r(y,[2,12]),r(c,[2,17]),r(c,[2,18]),r(c,[2,22]),r(S,[2,122]),r(S,[2,123]),r(c,[2,46]),{34:[1,65]},{39:66,43:$,44:x,45:E},{34:[1,70]},{34:[1,71]},r(c,[2,112]),r(c,[2,30],{33:[1,72],35:[1,74],38:[1,73]}),{34:[1,75]},{34:[1,76],36:[1,77]},r(c,[2,23],{30:[1,78]}),r(_,[2,117]),r(c,[2,47],{33:[1,80],38:[1,79],42:[1,81]}),r(c,[2,48],{33:[1,83],35:[1,82],42:[1,84]}),r(it,[2,113]),r(it,[2,114]),r(it,[2,115]),r(c,[2,51],{35:[1,85],38:[1,86],42:[1,87]}),r(c,[2,62],{33:[1,90],35:[1,88],38:[1,89]}),{34:[1,91]},{39:92,43:$,44:x,45:E},{34:[1,93]},r(c,[2,25],{35:[1,94]}),{33:[1,95]},{33:[1,96]},{31:[1,97]},{39:98,43:$,44:x,45:E},{34:[1,99]},{34:[1,100]},{34:[1,101]},{34:[1,102]},{34:[1,103]},{34:[1,104]},{39:105,43:$,44:x,45:E},{34:[1,106]},{34:[1,107]},{39:108,43:$,44:x,45:E},{34:[1,109]},r(c,[2,31],{35:[1,111],38:[1,110]}),r(c,[2,32],{33:[1,113],35:[1,112]}),r(c,[2,33],{33:[1,114],38:[1,115]}),{34:[1,116],36:[1,117]},{34:[1,118]},{34:[1,119]},r(c,[2,24]),r(c,[2,49],{33:[1,120],42:[1,121]}),r(c,[2,53],{38:[1,122],42:[1,123]}),r(c,[2,63],{33:[1,125],38:[1,124]}),r(c,[2,50],{33:[1,126],42:[1,127]}),r(c,[2,55],{35:[1,128],42:[1,129]}),r(c,[2,66],{33:[1,131],35:[1,130]}),r(c,[2,52],{38:[1,132],42:[1,133]}),r(c,[2,54],{35:[1,134],42:[1,135]}),r(c,[2,67],{35:[1,137],38:[1,136]}),r(c,[2,64],{33:[1,139],38:[1,138]}),r(c,[2,65],{33:[1,141],35:[1,140]}),r(c,[2,68],{35:[1,143],38:[1,142]}),{39:144,43:$,44:x,45:E},{34:[1,145]},{34:[1,146]},{34:[1,147]},{34:[1,148]},{39:149,43:$,44:x,45:E},r(c,[2,26]),r(c,[2,27]),r(c,[2,28]),r(c,[2,29]),{34:[1,150]},{34:[1,151]},{39:152,43:$,44:x,45:E},{34:[1,153]},{39:154,43:$,44:x,45:E},{34:[1,155]},{34:[1,156]},{34:[1,157]},{34:[1,158]},{34:[1,159]},{34:[1,160]},{34:[1,161]},{39:162,43:$,44:x,45:E},{34:[1,163]},{34:[1,164]},{34:[1,165]},{39:166,43:$,44:x,45:E},{34:[1,167]},{39:168,43:$,44:x,45:E},{34:[1,169]},{34:[1,170]},{34:[1,171]},{39:172,43:$,44:x,45:E},{34:[1,173]},r(c,[2,37],{35:[1,174]}),r(c,[2,38],{38:[1,175]}),r(c,[2,36],{33:[1,176]}),r(c,[2,39],{35:[1,177]}),r(c,[2,34],{38:[1,178]}),r(c,[2,35],{33:[1,179]}),r(c,[2,60],{42:[1,180]}),r(c,[2,73],{33:[1,181]}),r(c,[2,61],{42:[1,182]}),r(c,[2,84],{38:[1,183]}),r(c,[2,74],{33:[1,184]}),r(c,[2,83],{38:[1,185]}),r(c,[2,59],{42:[1,186]}),r(c,[2,72],{33:[1,187]}),r(c,[2,58],{42:[1,188]}),r(c,[2,78],{35:[1,189]}),r(c,[2,71],{33:[1,190]}),r(c,[2,77],{35:[1,191]}),r(c,[2,57],{42:[1,192]}),r(c,[2,85],{38:[1,193]}),r(c,[2,56],{42:[1,194]}),r(c,[2,79],{35:[1,195]}),r(c,[2,80],{35:[1,196]}),r(c,[2,86],{38:[1,197]}),r(c,[2,70],{33:[1,198]}),r(c,[2,81],{38:[1,199]}),r(c,[2,69],{33:[1,200]}),r(c,[2,75],{35:[1,201]}),r(c,[2,76],{35:[1,202]}),r(c,[2,82],{38:[1,203]}),{34:[1,204]},{39:205,43:$,44:x,45:E},{34:[1,206]},{34:[1,207]},{39:208,43:$,44:x,45:E},{34:[1,209]},{34:[1,210]},{34:[1,211]},{34:[1,212]},{39:213,43:$,44:x,45:E},{34:[1,214]},{39:215,43:$,44:x,45:E},{34:[1,216]},{34:[1,217]},{34:[1,218]},{34:[1,219]},{34:[1,220]},{34:[1,221]},{34:[1,222]},{39:223,43:$,44:x,45:E},{34:[1,224]},{34:[1,225]},{34:[1,226]},{39:227,43:$,44:x,45:E},{34:[1,228]},{39:229,43:$,44:x,45:E},{34:[1,230]},{34:[1,231]},{34:[1,232]},{39:233,43:$,44:x,45:E},r(c,[2,40]),r(c,[2,42]),r(c,[2,41]),r(c,[2,43]),r(c,[2,45]),r(c,[2,44]),r(c,[2,101]),r(c,[2,102]),r(c,[2,99]),r(c,[2,100]),r(c,[2,104]),r(c,[2,103]),r(c,[2,108]),r(c,[2,107]),r(c,[2,106]),r(c,[2,105]),r(c,[2,110]),r(c,[2,109]),r(c,[2,98]),r(c,[2,97]),r(c,[2,96]),r(c,[2,95]),r(c,[2,93]),r(c,[2,94]),r(c,[2,92]),r(c,[2,91]),r(c,[2,90]),r(c,[2,89]),r(c,[2,87]),r(c,[2,88])],defaultActions:{9:[2,118],10:[2,1],11:[2,2],19:[2,3],27:[2,4],46:[2,120],47:[2,5]},parseError:function(H,o){if(o.recoverable)this.trace(H);else{var p=new Error(H);throw p.hash=o,p}},parse:function(H){var o=this,p=[0],i=[],f=[null],t=[],L=this.table,e="",U=0,yt=0,wt=2,gt=1,Tt=t.slice.call(arguments,1),T=Object.create(this.lexer),q={yy:{}};for(var st in this.yy)Object.prototype.hasOwnProperty.call(this.yy,st)&&(q.yy[st]=this.yy[st]);T.setInput(H,q.yy),q.yy.lexer=T,q.yy.parser=this,typeof T.yylloc>"u"&&(T.yylloc={});var nt=T.yylloc;t.push(nt);var Rt=T.options&&T.options.ranges;typeof q.yy.parseError=="function"?this.parseError=q.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Mt(){var D;return D=i.pop()||T.lex()||gt,typeof D!="number"&&(D instanceof Array&&(i=D,D=i.pop()),D=o.symbols_[D]||D),D}for(var C,K,G,ot,V={},J,j,bt,Q;;){if(K=p[p.length-1],this.defaultActions[K]?G=this.defaultActions[K]:((C===null||typeof C>"u")&&(C=Mt()),G=L[K]&&L[K][C]),typeof G>"u"||!G.length||!G[0]){var lt="";Q=[];for(J in L[K])this.terminals_[J]&&J>wt&&Q.push("'"+this.terminals_[J]+"'");T.showPosition?lt="Parse error on line "+(U+1)+`:
`+T.showPosition()+`
Expecting `+Q.join(", ")+", got '"+(this.terminals_[C]||C)+"'":lt="Parse error on line "+(U+1)+": Unexpected "+(C==gt?"end of input":"'"+(this.terminals_[C]||C)+"'"),this.parseError(lt,{text:T.match,token:this.terminals_[C]||C,line:T.yylineno,loc:nt,expected:Q})}if(G[0]instanceof Array&&G.length>1)throw new Error("Parse Error: multiple actions possible at state: "+K+", token: "+C);switch(G[0]){case 1:p.push(C),f.push(T.yytext),t.push(T.yylloc),p.push(G[1]),C=null,yt=T.yyleng,e=T.yytext,U=T.yylineno,nt=T.yylloc;break;case 2:if(j=this.productions_[G[1]][1],V.$=f[f.length-j],V._$={first_line:t[t.length-(j||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(j||1)].first_column,last_column:t[t.length-1].last_column},Rt&&(V._$.range=[t[t.length-(j||1)].range[0],t[t.length-1].range[1]]),ot=this.performAction.apply(V,[e,yt,U,q.yy,G[1],f,t].concat(Tt)),typeof ot<"u")return ot;j&&(p=p.slice(0,-1*j*2),f=f.slice(0,-1*j),t=t.slice(0,-1*j)),p.push(this.productions_[G[1]][0]),f.push(V.$),t.push(V._$),bt=L[p[p.length-2]][p[p.length-1]],p.push(bt);break;case 3:return!0}}return!0}},vt=function(){var H={EOF:1,parseError:function(o,p){if(this.yy.parser)this.yy.parser.parseError(o,p);else throw new Error(o)},setInput:function(o,p){return this.yy=p||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var p=o.match(/(?:\r\n?|\n).*/g);return p?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var p=o.length,i=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-p),this.offset-=p;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var t=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===f.length?this.yylloc.first_column:0)+f[f.length-i.length].length-i[0].length:this.yylloc.first_column-p},this.options.ranges&&(this.yylloc.range=[t[0],t[0]+this.yyleng-p]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),p=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+p+"^"},test_match:function(o,p){var i,f,t;if(this.options.backtrack_lexer&&(t={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(t.yylloc.range=this.yylloc.range.slice(0))),f=o[0].match(/(?:\r\n?|\n).*/g),f&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-f[f.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],i=this.performAction.call(this,this.yy,this,p,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var L in t)this[L]=t[L];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,p,i,f;this._more||(this.yytext="",this.match="");for(var t=this._currentRules(),L=0;L<t.length;L++)if(i=this._input.match(this.rules[t[L]]),i&&(!p||i[0].length>p[0].length)){if(p=i,f=L,this.options.backtrack_lexer){if(o=this.test_match(i,t[L]),o!==!1)return o;if(this._backtrack){p=!1;continue}else return!1}else if(!this.options.flex)break}return p?(o=this.test_match(p,t[f]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var o=this.next();return o||this.lex()},begin:function(o){this.conditionStack.push(o)},popState:function(){var o=this.conditionStack.length-1;return o>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},pushState:function(o){this.begin(o)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(o,p,i,f){switch(i){case 0:return this.begin("open_directive"),50;case 1:return this.begin("type_directive"),51;case 2:return this.popState(),this.begin("arg_directive"),9;case 3:return this.popState(),this.popState(),53;case 4:return 52;case 5:return this.begin("acc_title"),20;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),22;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:return 14;case 13:break;case 14:break;case 15:return 6;case 16:return 40;case 17:return 33;case 18:return 38;case 19:return 42;case 20:return 43;case 21:return 44;case 22:return 45;case 23:return 35;case 24:return 29;case 25:return 30;case 26:return 37;case 27:return 32;case 28:return 27;case 29:return 10;case 30:return 10;case 31:return 9;case 32:return"CARET";case 33:this.begin("options");break;case 34:this.popState();break;case 35:return 13;case 36:return 36;case 37:this.begin("string");break;case 38:this.popState();break;case 39:return 34;case 40:return 31;case 41:return 54;case 42:return 8}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:BT\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},options:{rules:[34,35],inclusive:!1},string:{rules:[38,39],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,40,41,42,43],inclusive:!0}}};return H}();ct.lexer=vt;function at(){this.yy={}}return at.prototype=ct,ct.Parser=at,new at}();ht.parser=ht;const Dt=ht;let Z=M().gitGraph.mainBranchName,qt=M().gitGraph.mainBranchOrder,w={},I=null,W={};W[Z]={name:Z,order:qt};let v={};v[Z]=I;let R=Z,kt="LR",F=0;function pt(){return jt({length:7})}const Kt=function(r,a,l){St.parseDirective(this,r,a,l)};function zt(r,a){const l=Object.create(null);return r.reduce((h,s)=>{const n=a(s);return l[n]||(l[n]=!0,h.push(s)),h},[])}const Ft=function(r){kt=r};let _t={};const Vt=function(r){A.debug("options str",r),r=r&&r.trim(),r=r||"{}";try{_t=JSON.parse(r)}catch(a){A.error("error while parsing gitGraph options",a.message)}},Yt=function(){return _t},Wt=function(r,a,l,h){A.debug("Entering commit:",r,a,l,h),a=B.sanitizeText(a,M()),r=B.sanitizeText(r,M()),h=B.sanitizeText(h,M());const s={id:a||F+"-"+pt(),message:r,seq:F++,type:l||X.NORMAL,tag:h||"",parents:I==null?[]:[I.id],branch:R};I=s,w[s.id]=s,v[R]=s.id,A.debug("in pushCommit "+s.id)},Xt=function(r,a){if(r=B.sanitizeText(r,M()),v[r]===void 0)v[r]=I!=null?I.id:null,W[r]={name:r,order:a?parseInt(a,10):null},$t(r),A.debug("in createBranch");else{let l=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+r+'")');throw l.hash={text:"branch "+r,token:"branch "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+r+'"']},l}},Ut=function(r,a,l,h){r=B.sanitizeText(r,M()),a=B.sanitizeText(a,M());const s=w[v[R]],n=w[v[r]];if(R===r){let u=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw u.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},u}else if(s===void 0||!s){let u=new Error('Incorrect usage of "merge". Current branch ('+R+")has no commits");throw u.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},u}else if(v[r]===void 0){let u=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") does not exist");throw u.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+r]},u}else if(n===void 0||!n){let u=new Error('Incorrect usage of "merge". Branch to be merged ('+r+") has no commits");throw u.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},u}else if(s===n){let u=new Error('Incorrect usage of "merge". Both branches have same head');throw u.hash={text:"merge "+r,token:"merge "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},u}else if(a&&w[a]!==void 0){let u=new Error('Incorrect usage of "merge". Commit with id:'+a+" already exists, use different custom Id");throw u.hash={text:"merge "+r+a+l+h,token:"merge "+r+a+l+h,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+r+" "+a+"_UNIQUE "+l+" "+h]},u}const g={id:a||F+"-"+pt(),message:"merged branch "+r+" into "+R,seq:F++,parents:[I==null?null:I.id,v[r]],branch:R,type:X.MERGE,customType:l,customId:!!a,tag:h||""};I=g,w[g.id]=g,v[R]=g.id,A.debug(v),A.debug("in mergeBranch")},Jt=function(r,a,l){if(A.debug("Entering cherryPick:",r,a,l),r=B.sanitizeText(r,M()),a=B.sanitizeText(a,M()),l=B.sanitizeText(l,M()),!r||w[r]===void 0){let n=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw n.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},n}let h=w[r],s=h.branch;if(h.type===X.MERGE){let n=new Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw n.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},n}if(!a||w[a]===void 0){if(s===R){let u=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw u.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},u}const n=w[v[R]];if(n===void 0||!n){let u=new Error('Incorrect usage of "cherry-pick". Current branch ('+R+")has no commits");throw u.hash={text:"cherryPick "+r+" "+a,token:"cherryPick "+r+" "+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},u}const g={id:F+"-"+pt(),message:"cherry-picked "+h+" into "+R,seq:F++,parents:[I==null?null:I.id,h.id],branch:R,type:X.CHERRY_PICK,tag:l??"cherry-pick:"+h.id};I=g,w[g.id]=g,v[R]=g.id,A.debug(v),A.debug("in cherryPick")}},$t=function(r){if(r=B.sanitizeText(r,M()),v[r]===void 0){let a=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+r+'")');throw a.hash={text:"checkout "+r,token:"checkout "+r,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+r+'"']},a}else{R=r;const a=v[R];I=w[a]}};function dt(r,a,l){const h=r.indexOf(a);h===-1?r.push(l):r.splice(h,1,l)}function xt(r){const a=r.reduce((s,n)=>s.seq>n.seq?s:n,r[0]);let l="";r.forEach(function(s){s===a?l+="	*":l+="	|"});const h=[l,a.id,a.seq];for(let s in v)v[s]===a.id&&h.push(s);if(A.debug(h.join(" ")),a.parents&&a.parents.length==2){const s=w[a.parents[0]];dt(r,a,s),r.push(w[a.parents[1]])}else{if(a.parents.length==0)return;{const s=w[a.parents];dt(r,a,s)}}r=zt(r,s=>s.id),xt(r)}const Qt=function(){A.debug(w);const r=Et()[0];xt([r])},Zt=function(){w={},I=null;let r=M().gitGraph.mainBranchName,a=M().gitGraph.mainBranchOrder;v={},v[r]=null,W={},W[r]={name:r,order:a},R=r,F=0,Gt()},te=function(){return Object.values(W).map((r,a)=>r.order!==null?r:{...r,order:parseFloat(`0.${a}`,10)}).sort((r,a)=>r.order-a.order).map(({name:r})=>({name:r}))},ee=function(){return v},re=function(){return w},Et=function(){const r=Object.keys(w).map(function(a){return w[a]});return r.forEach(function(a){A.debug(a.id)}),r.sort((a,l)=>a.seq-l.seq),r},ie=function(){return R},ce=function(){return kt},ae=function(){return I},X={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},se={parseDirective:Kt,getConfig:()=>M().gitGraph,setDirection:Ft,setOptions:Vt,getOptions:Yt,commit:Wt,branch:Xt,merge:Ut,cherryPick:Jt,checkout:$t,prettyPrint:Qt,clear:Zt,getBranchesAsObjArray:te,getBranches:ee,getCommits:re,getCommitsArray:Et,getCurrentBranch:ie,getDirection:ce,getHead:ae,setAccTitle:It,getAccTitle:Lt,getAccDescription:Ct,setAccDescription:Ot,setDiagramTitle:At,getDiagramTitle:Pt,commitType:X};let Y={};const P={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},z=8;let O={},tt={},et=[],rt=0;const ne=()=>{O={},tt={},Y={},rt=0,et=[]},oe=r=>{const a=document.createElementNS("http://www.w3.org/2000/svg","text");let l=[];typeof r=="string"?l=r.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(r)?l=r:l=[];for(const h of l){const s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),s.setAttribute("dy","1em"),s.setAttribute("x","0"),s.setAttribute("class","row"),s.textContent=h.trim(),a.appendChild(s)}return a},ft=(r,a,l)=>{const h=ut().gitGraph,s=r.append("g").attr("class","commit-bullets"),n=r.append("g").attr("class","commit-labels");let g=0;Object.keys(a).sort((u,m)=>a[u].seq-a[m].seq).forEach(u=>{const m=a[u],y=O[m.branch].pos,b=g+10;if(l){let d,_=m.customType!==void 0&&m.customType!==""?m.customType:m.type;switch(_){case P.NORMAL:d="commit-normal";break;case P.REVERSE:d="commit-reverse";break;case P.HIGHLIGHT:d="commit-highlight";break;case P.MERGE:d="commit-merge";break;case P.CHERRY_PICK:d="commit-cherry-pick";break;default:d="commit-normal"}if(_===P.HIGHLIGHT){const c=s.append("rect");c.attr("x",b-10),c.attr("y",y-10),c.attr("height",20),c.attr("width",20),c.attr("class",`commit ${m.id} commit-highlight${O[m.branch].index%z} ${d}-outer`),s.append("rect").attr("x",b-6).attr("y",y-6).attr("height",12).attr("width",12).attr("class",`commit ${m.id} commit${O[m.branch].index%z} ${d}-inner`)}else if(_===P.CHERRY_PICK)s.append("circle").attr("cx",b).attr("cy",y).attr("r",10).attr("class",`commit ${m.id} ${d}`),s.append("circle").attr("cx",b-3).attr("cy",y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${m.id} ${d}`),s.append("circle").attr("cx",b+3).attr("cy",y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${m.id} ${d}`),s.append("line").attr("x1",b+3).attr("y1",y+1).attr("x2",b).attr("y2",y-5).attr("stroke","#fff").attr("class",`commit ${m.id} ${d}`),s.append("line").attr("x1",b-3).attr("y1",y+1).attr("x2",b).attr("y2",y-5).attr("stroke","#fff").attr("class",`commit ${m.id} ${d}`);else{const c=s.append("circle");if(c.attr("cx",b),c.attr("cy",y),c.attr("r",m.type===P.MERGE?9:10),c.attr("class",`commit ${m.id} commit${O[m.branch].index%z}`),_===P.MERGE){const k=s.append("circle");k.attr("cx",b),k.attr("cy",y),k.attr("r",6),k.attr("class",`commit ${d} ${m.id} commit${O[m.branch].index%z}`)}_===P.REVERSE&&s.append("path").attr("d",`M ${b-5},${y-5}L${b+5},${y+5}M${b-5},${y+5}L${b+5},${y-5}`).attr("class",`commit ${d} ${m.id} commit${O[m.branch].index%z}`)}}if(tt[m.id]={x:g+10,y},l){if(m.type!==P.CHERRY_PICK&&(m.customId&&m.type===P.MERGE||m.type!==P.MERGE)&&h.showCommitLabel){const d=n.append("g"),_=d.insert("rect").attr("class","commit-label-bkg"),c=d.append("text").attr("x",g).attr("y",y+25).attr("class","commit-label").text(m.id);let k=c.node().getBBox();if(_.attr("x",g+10-k.width/2-2).attr("y",y+13.5).attr("width",k.width+2*2).attr("height",k.height+2*2),c.attr("x",g+10-k.width/2),h.rotateCommitLabel){let N=-7.5-(k.width+10)/25*9.5,S=10+k.width/25*8.5;d.attr("transform","translate("+N+", "+S+") rotate("+-45+", "+g+", "+y+")")}}if(m.tag){const d=n.insert("polygon"),_=n.append("circle"),c=n.append("text").attr("y",y-16).attr("class","tag-label").text(m.tag);let k=c.node().getBBox();c.attr("x",g+10-k.width/2);const N=k.height/2,S=y-19.2;d.attr("class","tag-label-bkg").attr("points",`
          ${g-k.width/2-4/2},${S+2}
          ${g-k.width/2-4/2},${S-2}
          ${g+10-k.width/2-4},${S-N-2}
          ${g+10+k.width/2+4},${S-N-2}
          ${g+10+k.width/2+4},${S+N+2}
          ${g+10-k.width/2-4},${S+N+2}`),_.attr("cx",g-k.width/2+4/2).attr("cy",S).attr("r",1.5).attr("class","tag-hole")}}g+=50,g>rt&&(rt=g)})},le=(r,a,l)=>Object.keys(l).filter(h=>l[h].branch===a.branch&&l[h].seq>r.seq&&l[h].seq<a.seq).length>0,mt=(r,a,l=0)=>{const h=r+Math.abs(r-a)/2;if(l>5)return h;if(et.every(n=>Math.abs(n-h)>=10))return et.push(h),h;const s=Math.abs(r-a);return mt(r,a-s/5,l+1)},he=(r,a,l,h)=>{const s=tt[a.id],n=tt[l.id],g=le(a,l,h);let u="",m="",y=0,b=0,d=O[l.branch].index,_;if(g){u="A 10 10, 0, 0, 0,",m="A 10 10, 0, 0, 1,",y=10,b=10,d=O[l.branch].index;const c=s.y<n.y?mt(s.y,n.y):mt(n.y,s.y);s.y<n.y?_=`M ${s.x} ${s.y} L ${s.x} ${c-y} ${u} ${s.x+b} ${c} L ${n.x-y} ${c} ${m} ${n.x} ${c+b} L ${n.x} ${n.y}`:_=`M ${s.x} ${s.y} L ${s.x} ${c+y} ${m} ${s.x+b} ${c} L ${n.x-y} ${c} ${u} ${n.x} ${c-b} L ${n.x} ${n.y}`}else s.y<n.y&&(u="A 20 20, 0, 0, 0,",y=20,b=20,d=O[l.branch].index,_=`M ${s.x} ${s.y} L ${s.x} ${n.y-y} ${u} ${s.x+b} ${n.y} L ${n.x} ${n.y}`),s.y>n.y&&(u="A 20 20, 0, 0, 0,",y=20,b=20,d=O[a.branch].index,_=`M ${s.x} ${s.y} L ${n.x-y} ${s.y} ${u} ${n.x} ${s.y-b} L ${n.x} ${n.y}`),s.y===n.y&&(d=O[a.branch].index,_=`M ${s.x} ${s.y} L ${s.x} ${n.y-y} ${u} ${s.x+b} ${n.y} L ${n.x} ${n.y}`);r.append("path").attr("d",_).attr("class","arrow arrow"+d%z)},me=(r,a)=>{const l=r.append("g").attr("class","commit-arrows");Object.keys(a).forEach(h=>{const s=a[h];s.parents&&s.parents.length>0&&s.parents.forEach(n=>{he(l,a[n],s,a)})})},ue=(r,a)=>{const l=ut().gitGraph,h=r.append("g");a.forEach((s,n)=>{const g=n%z,u=O[s.name].pos,m=h.append("line");m.attr("x1",0),m.attr("y1",u),m.attr("x2",rt),m.attr("y2",u),m.attr("class","branch branch"+g),et.push(u);let y=s.name;const b=oe(y),d=h.insert("rect"),_=h.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+g);_.node().appendChild(b);let c=b.getBBox();d.attr("class","branchLabelBkg label"+g).attr("rx",4).attr("ry",4).attr("x",-c.width-4-(l.rotateCommitLabel===!0?30:0)).attr("y",-c.height/2+8).attr("width",c.width+18).attr("height",c.height+4),_.attr("transform","translate("+(-c.width-14-(l.rotateCommitLabel===!0?30:0))+", "+(u-c.height/2-1)+")"),d.attr("transform","translate("+-19+", "+(u-c.height/2)+")")})},pe=function(r,a,l,h){ne();const s=ut(),n=s.gitGraph;A.debug("in gitgraph renderer",r+`
`,"id:",a,l),Y=h.db.getCommits();const g=h.db.getBranchesAsObjArray();let u=0;g.forEach((y,b)=>{O[y.name]={pos:u,index:b},u+=50+(n.rotateCommitLabel?40:0)});const m=Nt(`[id="${a}"]`);ft(m,Y,!1),n.showBranches&&ue(m,g),me(m,Y),ft(m,Y,!0),Ht.insertTitle(m,"gitTitleText",n.titleTopMargin,h.db.getDiagramTitle()),Bt(void 0,m,n.diagramPadding,n.useMaxWidth??s.useMaxWidth)},ye={draw:pe},ge=r=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(a=>`
        .branch-label${a} { fill: ${r["gitBranchLabel"+a]}; }
        .commit${a} { stroke: ${r["git"+a]}; fill: ${r["git"+a]}; }
        .commit-highlight${a} { stroke: ${r["gitInv"+a]}; fill: ${r["gitInv"+a]}; }
        .label${a}  { fill: ${r["git"+a]}; }
        .arrow${a} { stroke: ${r["git"+a]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${r.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelColor};}
  .commit-label-bkg { font-size: ${r.commitLabelFontSize}; fill: ${r.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${r.tagLabelFontSize}; fill: ${r.tagLabelColor};}
  .tag-label-bkg { fill: ${r.tagLabelBackground}; stroke: ${r.tagLabelBorder}; }
  .tag-hole { fill: ${r.textColor}; }

  .commit-merge {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }
  .commit-reverse {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${r.primaryColor};
    fill: ${r.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${r.textColor};
  }
  }
`,be=ge,_e={parser:Dt,db:se,renderer:ye,styles:be};export{_e as diagram};
