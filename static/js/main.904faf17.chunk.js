(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{29:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var i,o=t(1),r=t(0),c=t.n(r),s=t(20),a=t.n(s),l=(t(29),t(7)),u=t(3),f=t(4),d=t(11),h=t(12),b=function(){function n(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;Object(d.a)(this,n),this.x=e,this.y=t,this.hasMine=i,this.isRevealed=o,this.hasFlag=r,this.proximity=c}return Object(h.a)(n,[{key:"reveal",value:function(){this.isRevealed=!0}},{key:"toggleFlag",value:function(){this.hasFlag=!this.hasFlag}}]),n}(),j=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];!function(n){n[n.INPROGRESS=0]="INPROGRESS",n[n.GAMEOVER=1]="GAMEOVER",n[n.VICTORY=2]="VICTORY"}(i||(i={}));var v={EASY:{difficulty:"EASY",rows:10,columns:10,mines:15},MEDIUM:{difficulty:"MEDIUM",rows:15,columns:15,mines:35},HARD:{difficulty:"HARD",rows:15,columns:15,mines:50}},g=["#2d2fa3","rgb(57, 128, 25)","rgb(211, 76, 22)","rgb(204, 19, 19)","rgb(156, 6, 56)"],O="rgb(170, 219, 124)",m="rgb(133, 201, 130)",x="rgb(180, 156, 125)",p="rgb(156, 138, 115)",R=function(){function n(e,t,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];Object(d.a)(this,n),this.rows=e,this.columns=t,this.nMines=i,this.field=o,this.minesCoordinates=r,this.buildBoard()}return Object(h.a)(n,[{key:"_getRandomCoordinate",value:function(n,e){return Math.floor(Math.random()*(e-n+1))+n}},{key:"checkLimits",value:function(n,e){return n>=0&&n<=this.rows-1&&e>=0&&e<=this.columns-1}},{key:"_defineMineProximity",value:function(){var n,e=Object(l.a)(this.minesCoordinates);try{for(e.s();!(n=e.n()).done;){var t,i=Object(f.a)(n.value,2),o=i[0],r=i[1],c=Object(l.a)(j);try{for(c.s();!(t=c.n()).done;){var s=Object(f.a)(t.value,2),a=s[0],u=r+s[1],d=o+a;this.checkLimits(u,d)&&!this.field[u][d].hasMine&&this.field[u][d].proximity++}}catch(h){c.e(h)}finally{c.f()}}}catch(h){e.e(h)}finally{e.f()}}},{key:"_placeMines",value:function(){for(var n=0;n<this.nMines;){var e=[this._getRandomCoordinate(0,this.columns-1),this._getRandomCoordinate(0,this.rows-1)],t=e[0],i=e[1],o=this.field[i][t];o.hasMine||(o.hasMine=!0,n++,this.minesCoordinates.push([t,i]))}this._defineMineProximity()}},{key:"buildBoard",value:function(){this.field=[];for(var n=0;n<this.rows;n++){this.field.push([]);for(var e=0;e<this.columns;e++)this.field[n].push(new b(e,n))}this._placeMines()}},{key:"showAllMines",value:function(){var n,e=Object(l.a)(this.minesCoordinates);try{for(e.s();!(n=e.n()).done;){var t=Object(f.a)(n.value,2),i=t[0],o=t[1];this.field[o][i].reveal()}}catch(r){e.e(r)}finally{e.f()}}}]),n}(),y=t(8),E=t(9),w=t(5),M=t(6);function S(){var n=Object(w.a)(["\n  width: 35px;\n  height: 35px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  color: ",";\n  background-color: ",";\n  > svg#flag {\n    color: rgb(204, 19, 19);\n  }\n  > svg {\n    color: ",';\n    font-size: 1.2rem;\n  }\n  ::after {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n  :hover::after {\n    background-color: ',";\n  }\n"]);return S=function(){return n},n}var k=M.a.div(S(),(function(n){return n.color}),(function(n){return n.bg}),(function(n){return n.mineColor}),(function(n){return!n.isRevealed&&"rgba(255, 255, 255, 0.253)"})),A=Object(r.memo)((function(n){var e=n.x,t=n.y,i=n.isRevealed,r=n.hasFlag,c=n.hasMine,s=n.proximity,a=n.onLeftClick,l=n.onRightClick,u=function(){var n=function(n){return n?[x,p]:[O,m]}(i);return t%2===0?e%2===0?n[0]:n[1]:e%2===0?n[1]:n[0]}(),f=g[Math.round(Math.random()*g.length)];return Object(o.jsxs)(k,{bg:u,color:g[s],mineColor:f,isRevealed:i,onClick:function(){a(t,e)},onContextMenu:function(n){n.preventDefault(),l(t,e)},children:[r&&!i&&Object(o.jsx)(y.a,{icon:E.b,id:"flag"}),c&&i&&Object(o.jsx)(y.a,{icon:E.a}),i&&s>0&&Object(o.jsx)("p",{children:s})]})}));function C(n){var e=n.field,t=n.showAndExpand,i=n.toggleFlag;return Object(o.jsx)("div",{children:e.map((function(n,e){return Object(o.jsx)("div",{style:{display:"flex"},children:n.map((function(n,e){return Object(o.jsx)(A,Object(u.a)(Object(u.a)({},n),{},{onLeftClick:t,onRightClick:i}),"col-".concat(e))}))},"row-".concat(e))}))})}function I(){var n=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 10px;\n  color: rgb(133, 201, 130);\n  svg#flag {\n    color: rgb(204, 19, 19);\n  }\n  > #restart:hover {\n    text-decoration: underline;\n  }\n"]);return I=function(){return n},n}var Y=M.a.section(I());function F(n){var e=n.nFlags,t=n.reset;return Object(o.jsxs)(Y,{children:[Object(o.jsxs)("span",{children:[Object(o.jsx)(y.a,{icon:E.b,id:"flag"})," ",e]}),Object(o.jsx)("span",{id:"restart",onClick:t,children:"RESTART"})]})}function G(){var n=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: absolute;\n  flex-direction: column;\n  z-index: 300;\n  background-color: rgba(255, 255, 255, 0.3);\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  h2 {\n    display: block;\n    font-size: 3rem;\n    color: #2d61f1;\n    margin-bottom: 10px;\n  }\n  button {\n    text-transform: uppercase;\n    padding: 10px 20px;\n    font-size: 1.1rem;\n    border: none;\n    background-color: #2d61f1;\n    color: white;\n    :hover {\n      background-color: #3b6df8;\n    }\n  }\n"]);return G=function(){return n},n}var P=M.a.div(G());function V(n){var e=n.state,t=n.reset,r=e===i.GAMEOVER?"GAMEOVER":e===i.VICTORY?"VICTORY":void 0;return Object(o.jsxs)(P,{children:[Object(o.jsx)("h2",{children:r}),Object(o.jsx)("button",{onClick:t,children:"Play again"})]})}function D(){var n=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  button {\n    padding: 5px;\n    color: rgb(133, 201, 130);\n    font-weight: 700;\n    border: 1px solid #ccc;\n    flex-grow: 1;\n    outline: none;\n    background: none;\n    :hover {\n      background-color: rgb(133, 201, 130);\n      color: white;\n    }\n  }\n"]);return D=function(){return n},n}var N=M.a.section(D());function L(n){var e=n.changeLevel;return Object(o.jsxs)(N,{children:[Object(o.jsx)("button",{onClick:e,value:"EASY",children:"EASY"}),Object(o.jsx)("button",{onClick:e,value:"MEDIUM",children:"MEDIUM"}),Object(o.jsx)("button",{onClick:e,value:"HARD",children:"HARD"})]})}function T(){var n=Object(r.useState)({level:v.EASY,status:i.INPROGRESS,board:new R(v.EASY.rows,v.EASY.columns,v.EASY.mines)}),e=Object(f.a)(n,2),t=e[0],c=e[1],s=Object(r.useState)(v.EASY.rows*v.EASY.columns-v.EASY.mines),a=Object(f.a)(s,2),d=a[0],h=a[1],b=Object(r.useState)(0),g=Object(f.a)(b,2),O=g[0],m=g[1];Object(r.useEffect)((function(){t.status===i.INPROGRESS&&(h(t.level.rows*t.level.columns-t.level.mines),m(0))}),[t]),Object(r.useEffect)((function(){0===d&&c((function(n){return Object(u.a)(Object(u.a)({},n),{},{status:i.VICTORY})}))}),[d]);var x=function(){c((function(n){return Object(u.a)(Object(u.a)({},n),{},{status:i.INPROGRESS,board:new R(n.level.rows,n.level.columns,n.level.mines)})}))};return Object(o.jsxs)("main",{children:[Object(o.jsx)("h1",{children:"Minesweeper"}),Object(o.jsx)(L,{changeLevel:function(n){var e=n.target.value;c({level:v[e],status:i.INPROGRESS,board:new R(v[e].rows,v[e].columns,v[e].mines)})}}),Object(o.jsx)(F,{nFlags:t.level.mines-O,reset:x}),Object(o.jsxs)("section",{style:{position:"relative"},children:[t.status!==i.INPROGRESS&&Object(o.jsx)(V,{reset:x,state:t.status}),Object(o.jsx)(C,Object(u.a)(Object(u.a)({},t.board),{},{showAndExpand:function n(e,o){var r=t.board.field[e][o];if(!r.isRevealed&&!r.hasFlag){if(r.hasMine)return t.board.showAllMines(),void c((function(n){return Object(u.a)(Object(u.a)({},n),{},{status:i.GAMEOVER})}));if(r.reveal(),h((function(n){return n-1})),!(r.proximity>0)){var s,a=Object(l.a)(j);try{for(a.s();!(s=a.n()).done;){var d=Object(f.a)(s.value,2),b=d[0],v=d[1];b+=o,v+=e,t.board.checkLimits(v,b)&&n(v,b)}}catch(g){a.e(g)}finally{a.f()}}}},toggleFlag:function(n,e){if(t.status===i.INPROGRESS){var o=t.board.field[n][e];o.hasFlag?(m((function(n){return n-1})),o.toggleFlag()):O<t.level.mines&&(m((function(n){return n+1})),o.toggleFlag())}}}))]})]})}var _=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(T,{})})};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.904faf17.chunk.js.map