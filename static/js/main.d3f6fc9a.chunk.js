(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{29:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var r,c=t(1),a=t(0),o=t.n(a),i=t(20),l=t.n(i),s=(t(29),t(4)),u=t(3),b=t(9),f=t(11);!function(e){e[e.INPROGRESS=0]="INPROGRESS",e[e.GAMEOVER=1]="GAMEOVER",e[e.VICTORY=2]="VICTORY"}(r||(r={}));var j=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]],O={EASY:{difficulty:"EASY",rows:10,columns:10,mines:15},MEDIUM:{difficulty:"MEDIUM",rows:15,columns:15,mines:35},HARD:{difficulty:"HARD",rows:15,columns:15,mines:50}},d={level:O.EASY,status:r.INPROGRESS,board:[],nFlags:O.EASY.mines,cellLeft:O.EASY.rows*O.EASY.columns-O.EASY.mines},v=["#2d2fa3","rgb(57, 128, 25)","rgb(211, 76, 22)","rgb(204, 19, 19)","rgb(156, 6, 56)"],E="rgb(170, 219, 124)",h="rgb(133, 201, 130)",g="rgb(180, 156, 125)",p="rgb(156, 138, 115)",R=t(10),x=[];function m(e,n){return Math.floor(Math.random()*(n-e+1))+e}function S(e,n,t){var r=Object(s.a)(e,2),c=r[0],a=r[1];return a>=0&&a<=n-1&&c>=0&&c<=t-1}function A(e,n,t,r){for(var c=0;c<e;){var a=[m(0,t-1),m(0,n-1)],o=a[0],i=a[1],l=r[i][o];l.hasMine||(l.hasMine=!0,c++,x.push([o,i]))}!function(e,n,t){for(var r=0,c=x;r<c.length;r++){var a,o=Object(s.a)(c[r],2),i=o[0],l=o[1],u=Object(R.a)(j);try{for(u.s();!(a=u.n()).done;){var b=Object(s.a)(a.value,2),f=b[0],O=l+b[1],d=i+f;S([d,O],n,t)&&!e[O][d].hasMine&&e[O][d].proximity++}}catch(v){u.e(v)}finally{u.f()}}}(r,n,t)}function y(e,n,t){x=[];for(var r=[],c=0;c<n;c++){r.push([]);for(var a=0;a<t;a++)r[c].push({x:a,y:c,hasMine:!1,hasFlag:!1,isRevealed:!1,proximity:0})}return A(e,n,t,r),r}var L=t(14);function M(e){var n,t=Object(L.a)(e),r=Object(R.a)(x);try{for(r.s();!(n=r.n()).done;){var c=Object(s.a)(n.value,2),a=c[0];t[c[1]][a].isRevealed=!0}}catch(o){r.e(o)}finally{r.f()}return t}function C(e,n,t,r){var c=Object(s.a)(e,2),a=c[0],o=c[1],i=Object(L.a)(n),l=i[o][a];return l.hasFlag?(t++,l.hasFlag=!1):t>0&&(t--,l.hasFlag=!0),{board:i,nFlags:t}}function _(e,n,t){var r=Object(s.a)(e,2),c=r[0],a=r[1],o=n.length,i=n[0].length,l=Object(L.a)(n);return function e(n,r){var c=l[r][n];if(!c.isRevealed&&!c.hasFlag&&(c.isRevealed=!0,t--,!(c.proximity>0))){var a,u=Object(R.a)(j);try{for(u.s();!(a=u.n()).done;){var b=Object(s.a)(a.value,2),f=b[0],O=b[1];S([f+=n,O+=r],o,i)&&e(f,O)}}catch(d){u.e(d)}finally{u.f()}}}(c,a),{board:l,cellLeft:t}}var G=t(5),w=t(6);function I(){var e=Object(G.a)(["\n  width: 35px;\n  height: 35px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  color: ",";\n  background-color: ",";\n  \n  > svg#flag {\n    color: rgb(204, 19, 19);\n  }\n  > svg {\n    color: ",';\n    font-size: 1.2rem;\n  }\n  ::after {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n  :hover::after {\n    background-color: ',";\n  }\n"]);return I=function(){return e},e}var T,V=w.a.div(I(),(function(e){return e.color}),(function(e){return e.bg}),(function(e){return e.mineColor}),(function(e){return!e.isRevealed&&"rgba(255, 255, 255, 0.253)"})),k=Object(a.memo)((function(e){var n=e.x,t=e.y,r=e.isRevealed,a=e.hasFlag,o=e.hasMine,i=e.proximity,l=e.onLeftClick,s=e.onRightClick,u=function(){var e=function(e){return e?[g,p]:[E,h]}(r);return t%2===0?n%2===0?e[0]:e[1]:n%2===0?e[1]:e[0]}(),j=v[Math.round(Math.random()*v.length)];return Object(c.jsxs)(V,{bg:u,color:v[i],mineColor:j,isRevealed:r,onClick:function(){l(t,n)},onContextMenu:function(e){e.preventDefault(),s(t,n)},children:[a&&!r&&Object(c.jsx)(b.a,{icon:f.b,id:"flag"}),o&&r&&Object(c.jsx)(b.a,{icon:f.a}),r&&i>0&&Object(c.jsx)("p",{children:i})]})})),D=Object(a.createContext)([d,function(){return null}]),Y=function(e){var n=e.children,t=e.reducer,r=e.initialState,o=Object(a.useReducer)(t,r),i=Object(s.a)(o,2),l=i[0],u=i[1];return Object(c.jsx)(D.Provider,{value:[l,u],children:n})};!function(e){e[e.BUILD_BOARD=0]="BUILD_BOARD",e[e.RESET_GAME=1]="RESET_GAME",e[e.SET_GAME_OVER=2]="SET_GAME_OVER",e[e.SET_VICTORY=3]="SET_VICTORY",e[e.SET_FLAG=4]="SET_FLAG",e[e.REVEAL_CELLS=5]="REVEAL_CELLS",e[e.CHANGE_LEVEL=6]="CHANGE_LEVEL"}(T||(T={}));var F=function(e,n){switch(n.type){case T.BUILD_BOARD:return Object(u.a)(Object(u.a)({},e),{},{board:y(e.level.mines,e.level.rows,e.level.columns)});case T.REVEAL_CELLS:case T.SET_FLAG:return Object(u.a)(Object(u.a)({},e),n.payload);case T.SET_GAME_OVER:return Object(u.a)(Object(u.a)({},e),{},{status:r.GAMEOVER},n.payload);case T.SET_VICTORY:return Object(u.a)(Object(u.a)({},e),{},{status:r.VICTORY});case T.RESET_GAME:return Object(u.a)(Object(u.a)({},e),{},{status:r.INPROGRESS,board:y(e.level.mines,e.level.rows,e.level.columns),cellLeft:e.level.columns*e.level.rows-e.level.mines,nFlags:e.level.mines});case T.CHANGE_LEVEL:var t=n.payload.level;return Object(u.a)(Object(u.a)({},e),{},{status:r.INPROGRESS,level:t,board:y(t.mines,t.rows,t.columns),cellLeft:t.columns*t.rows-t.mines,nFlags:t.mines});default:return e}};function N(){var e=Object(a.useContext)(D),n=Object(s.a)(e,2),t=n[0],o=t.board,i=t.status,l=t.cellLeft,b=t.level,f=t.nFlags,j=n[1],O=Object(a.useCallback)((function(e,n){if(i===r.INPROGRESS){if(o[e][n].hasMine)return void j({type:T.SET_GAME_OVER,payload:{board:M(o)}});j({type:T.REVEAL_CELLS,payload:_([n,e],o,l)})}}),[o,l,j,i]),d=Object(a.useCallback)((function(e,n){i===r.INPROGRESS&&f<=b.mines&&j({type:T.SET_FLAG,payload:C([n,e],o,f,b.mines)})}),[o,j,b.mines,f,i]);return Object(c.jsx)("div",{children:o.map((function(e,n){return Object(c.jsx)("div",{style:{display:"flex"},children:e.map((function(e,n){return Object(c.jsx)(k,Object(u.a)(Object(u.a)({},e),{},{onLeftClick:O,onRightClick:d}),"col-".concat(n))}))},"row-".concat(n))}))})}function P(){var e=Object(G.a)(["\n  display: flex;\n  justify-content: space-between;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 10px;\n  color: rgb(133, 201, 130);\n  svg#flag {\n    color: rgb(204, 19, 19);\n  }\n  > #restart:hover {\n    text-decoration: underline;\n    color: rgb(207, 203, 56);\n  }\n"]);return P=function(){return e},e}var B=w.a.section(P());function H(e){var n=e.nFlags,t=e.reset;return Object(c.jsxs)(B,{children:[Object(c.jsxs)("span",{children:[Object(c.jsx)(b.a,{icon:f.b,id:"flag"})," ",n]}),Object(c.jsx)("span",{id:"restart",onClick:t,children:"RESTART"})]})}function U(){var e=Object(G.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: absolute;\n  flex-direction: column;\n  z-index: 300;\n  background-color: rgba(255, 255, 255, 0.2);\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  h2 {\n    display: block;\n    font-size: 3rem;\n    color: rgb(56, 82, 62);\n    margin-bottom: 10px;\n  }\n  button {\n    text-transform: uppercase;\n    padding: 10px 20px;\n    font-size: 1.1rem;\n    border: none;\n    background-color: rgb(207, 203, 56);\n    color: white;\n    :hover {\n      background-color: rgb(201, 197, 24);\n    }\n  }\n"]);return U=function(){return e},e}var z=w.a.div(U());function J(e){var n=e.state,t=e.reset,a=n===r.GAMEOVER?"GAME OVER":n===r.VICTORY?"VICTORY":void 0;return Object(c.jsxs)(z,{children:[Object(c.jsx)("h2",{children:a}),Object(c.jsx)("button",{onClick:t,children:"Play again"})]})}function q(){var e=Object(G.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  button {\n    padding: 5px 0;\n    color: #ccc;\n    font-weight: 700;\n    border: 1px solid #ccc;\n    flex-grow: 1;\n    outline: none;\n    background: none;\n    :hover {\n      color: rgb(207, 203, 56);\n    };\n    &.active {\n      background-color: rgb(56, 82, 62);\n      color: white;\n      border: none;\n    }\n  }\n"]);return q=function(){return e},e}var K=w.a.section(q());function Q(e){var n=e.changeLevel,t=e.active;return Object(c.jsxs)(K,{children:[Object(c.jsx)("button",{onClick:n,value:"EASY",className:"EASY"===t?"active":"",children:"EASY"}),Object(c.jsx)("button",{onClick:n,value:"MEDIUM",className:"MEDIUM"===t?"active":"",children:"MEDIUM"}),Object(c.jsx)("button",{onClick:n,value:"HARD",className:"HARD"===t?"active":"",children:"HARD"})]})}function W(){var e=Object(a.useContext)(D),n=Object(s.a)(e,2),t=n[0],o=t.status,i=t.cellLeft,l=t.nFlags,u=t.level,b=n[1];Object(a.useEffect)((function(){b({type:T.BUILD_BOARD})}),[b]),Object(a.useEffect)((function(){0===i&&b({type:T.SET_VICTORY})}),[b,i]);var f=function(){b({type:T.RESET_GAME})};return Object(c.jsxs)("main",{children:[Object(c.jsx)("h1",{children:"Minesweeper"}),Object(c.jsx)(Q,{changeLevel:function(e){var n=e.target.value;b({type:T.CHANGE_LEVEL,payload:{level:O[n]}})},active:u.difficulty}),Object(c.jsx)(H,{nFlags:l,reset:f}),Object(c.jsxs)("section",{style:{position:"relative"},children:[o!==r.INPROGRESS&&Object(c.jsx)(J,{reset:f,state:o}),Object(c.jsx)(N,{})]})]})}var X=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(Y,{initialState:d,reducer:F,children:Object(c.jsx)(W,{})})})};l.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(X,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d3f6fc9a.chunk.js.map