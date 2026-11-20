var gi=Object.freeze([{id:"thor",name:"\u6258\u723E",subtitle:"\u96F7\u795E",color:"#7aa7c5",initialHp:15},{id:"sif",name:"\u5E0C\u8299",subtitle:"\u9752\u6625\u5973\u795E",color:"#d998ad",initialHp:14},{id:"loki",name:"\u6D1B\u57FA",subtitle:"\u8A6D\u8A08\u4E4B\u795E",color:"#79b29e",initialHp:9},{id:"valkyrie",name:"\u74E6\u57FA\u91CC",subtitle:"\u5973\u6B66\u795E",color:"#c4d3d6",initialHp:15},{id:"heimdall",name:"\u6D77\u59C6\u9054\u723E",subtitle:"\u5B88\u8B77\u795E",color:"#c4a879",initialHp:12},{id:"frigga",name:"\u5F17\u9E97\u5609",subtitle:"\u795E\u540E",color:"#d9c6a1",initialHp:8},{id:"fenrir",name:"\u82AC\u91CC\u723E",subtitle:"\u5DE8\u72FC",color:"#b77362",initialHp:13}].map(i=>Object.freeze({...i,portrait:`assets/portraits/${i.id}.webp`})));var Ra=gi.map(({id:i})=>i),Bd=new Set(Ra);function Xm(i){if(!Number.isInteger(i)||i<0||i>999)throw new RangeError("\u9810\u89BD\u8840\u91CF\u8ACB\u8F38\u5165 0\u2013999 \u7684\u6574\u6578\uFF1B\u6B64\u7BC4\u570D\u4E0D\u662F\u6B63\u5F0F\u904A\u6232\u8840\u91CF\u4E0A\u9650\u3002")}function qm(i){if(!Array.isArray(i)||i.length!==Ra.length)throw new TypeError("\u9810\u89BD\u9700\u8981\u5B8C\u6574\u7684\u4E03\u540D\u89D2\u8272\u3002");let e=new Set;for(let t of i){if(!t||!Bd.has(t.id)||e.has(t.id))throw new TypeError("\u89D2\u8272\u8EAB\u5206\u7121\u6548\u6216\u91CD\u8907\u3002");e.add(t.id),Xm(t.hp)}}function Ym(i){if(!Array.isArray(i)||i.length!==Ra.length||new Set(i).size!==Ra.length||i.some(e=>!Bd.has(e)))throw new TypeError("\u5EA7\u4F4D\u8207\u540C\u8840\u91CF\u9806\u4F4D\u5FC5\u9808\u5404\u5305\u542B\u4E03\u540D\u4E0D\u91CD\u8907\u89D2\u8272\u3002")}function or(i,e){qm(i),Ym(e);let t=new Map(e.map((n,s)=>[n,s]));return[...i].sort((n,s)=>s.hp-n.hp||t.get(n.id)-t.get(s.id)).map(({id:n})=>n)}var ar=Object.freeze(["axe","flame"]),$m=Object.freeze({flameTargeting:"flanks",circularAdjacency:!0});var ti=gi.map(({id:i})=>i),Ca=new Set(ti),Zm=new Set(["loadout","setup","preparation","battle","round-end","finished"]),lr=99,Hd=ti.length*lr,Ia=60,Gd=29,Km=Gd+Ia,oo=Object.freeze({power:{id:"power",name:"\u529B\u91CF\u724C",damage:2,targetCount:1,cost:{power:1,magic:0}},magic:{id:"magic",name:"\u9B54\u6CD5\u724C",damage:1,targetCount:1,cost:{power:0,magic:1}},axe:{id:"axe",name:"\u6230\u65A7",damage:3,targetCount:1,cost:{power:1,magic:0},weapon:"axe"},flame:{id:"flame",name:"\u708E\u528D",damage:2,targetCount:2,cost:{power:1,magic:0},weapon:"flame"}});function Ps(i){if(!Ca.has(i))throw new RangeError("\u627E\u4E0D\u5230\u9019\u540D\u89D2\u8272\u3002")}function Jc(i){if(!Number.isInteger(i)||i<0||i>999)throw new RangeError("\u539F\u578B\u8840\u91CF\u8ACB\u8F38\u5165 0\u2013999 \u7684\u6574\u6578\uFF1B\u6B64\u7BC4\u570D\u4E0D\u662F\u6B63\u5F0F\u904A\u6232\u8840\u91CF\u4E0A\u9650\u3002")}function os(i,e=Hd){if(!Number.isInteger(i)||i<0||i>e)throw new RangeError(`\u653B\u64CA\u724C\u8ACB\u8F38\u5165 0\u2013${e} \u7684\u6574\u6578\uFF1B\u6B64\u7BC4\u570D\u662F\u539F\u578B\u64CD\u4F5C\u9650\u5236\u3002`)}function Pa(i){if(!Array.isArray(i)||i.length>ar.length||new Set(i).size!==i.length||i.some(e=>!ar.includes(e)))throw new TypeError("\u6B66\u5668\u5FC5\u9808\u662F\u672A\u91CD\u8907\u7684\u6230\u65A7\u6216\u708E\u528D\u3002")}function jc(i){if(!i||typeof i!="object"||Array.isArray(i)||!Object.hasOwn(i,"flameTargeting")||!Object.hasOwn(i,"circularAdjacency")||Object.keys(i).some(e=>!["flameTargeting","circularAdjacency"].includes(e))||i.flameTargeting!=="flanks"||i.circularAdjacency!==!0)throw new TypeError("\u708E\u528D\u56FA\u5B9A\u653B\u64CA\u81EA\u5DF1\u5169\u5074\u5EA7\u4F4D\uFF0C\u7B2C 1 \u8207\u7B2C 7 \u5E2D\u76F8\u9130\uFF1B\u4E0D\u80FD\u8B8A\u66F4\u6B64\u898F\u5247\u3002")}function Jm(i,e){if(!e||typeof e!="object"||Array.isArray(e))throw new TypeError("\u898F\u5247\u8A2D\u5B9A\u7121\u6548\u3002");let t={...i,...e};return jc(t),t}function Di(i,{full:e=!1}={}){if(!Array.isArray(i)||i.length>ti.length||e&&i.length!==ti.length||new Set(i).size!==i.length||i.some(t=>!Ca.has(t)))throw new TypeError("\u89D2\u8272\u9806\u4F4D\u7121\u6548\u6216\u91CD\u8907\u3002")}function rs(i,e){return JSON.stringify(i)===JSON.stringify(e)}function as(i){let e=new Set(i.actedIds),t=new Set(i.characters.filter(({hp:n})=>n>0).map(({id:n})=>n));return or(i.characters,i.tieOrder).filter(n=>t.has(n)&&!e.has(n))}function La(i,e=!1){let t=new Set,n={power:0,magic:0};for(let s of i){if(!s.cards||typeof s.cards!="object"||Array.isArray(s.cards)||Object.keys(s.cards).length!==2||!Object.hasOwn(s.cards,"power")||!Object.hasOwn(s.cards,"magic"))throw new TypeError("\u653B\u64CA\u724C\u8CC7\u6599\u7121\u6548\u3002");for(let r of["power","magic"])os(s.cards[r],e?lr:Hd),n[r]+=s.cards[r];Pa(s.weapons);for(let r of s.weapons){if(t.has(r))throw new Error("\u6BCF\u4EF6\u795E\u5668\u53EA\u80FD\u7531\u4E00\u540D\u89D2\u8272\u6301\u6709\uFF0C\u8ACB\u5148\u79FB\u9664\u539F\u6301\u6709\u8005\u7684\u6B66\u5668\u3002");t.add(r)}}Object.values(n).forEach(s=>os(s))}function Cn(i){if(!i||typeof i!="object"||Array.isArray(i)||i.schemaVersion!==4||!Zm.has(i.phase)||!Number.isInteger(i.round)||i.round<1||i.round>3||!Number.isSafeInteger(i.revision)||i.revision<0)throw new TypeError("\u6230\u9B25\u539F\u578B\u7684\u72C0\u614B\u6216\u7248\u672C\u7121\u6548\u3002");if(!Array.isArray(i.characters)||i.characters.length!==ti.length)throw new TypeError("\u6230\u9B25\u539F\u578B\u9700\u8981\u5B8C\u6574\u4E03\u540D\u89D2\u8272\u3002");if(Di(i.characters.map(({id:n})=>n),{full:!0}),i.characters.forEach(({hp:n})=>Jc(n)),La(i.characters,i.phase==="loadout"||i.phase==="setup"),jc(i.rules),Ps(i.selectedId),Di(i.seatOrder,{full:!0}),Di(i.tieOrder,{full:!0}),Di(i.actedIds),Di(i.roundActionOrder),Di(i.previousRoundActionOrder),!rs(i.actedIds,i.roundActionOrder))throw new TypeError("\u672C\u8F2A\u884C\u52D5\u7D00\u9304\u4E0D\u4E00\u81F4\u3002");if(!Array.isArray(i.log)||i.log.length>Km||!Array.isArray(i.kills)||i.kills.length>ti.length)throw new TypeError("\u6230\u9B25\u4E8B\u4EF6\u7D00\u9304\u7121\u6548\u3002");let e=i.log.filter(n=>n?.type==="trade").length;if(e>Ia||i.log.length-e>Gd)throw new TypeError("\u4EA4\u6613\u6216\u6230\u9B25\u4E8B\u4EF6\u7D00\u9304\u8D85\u51FA\u4E0A\u9650\u3002");let t=new Set;for(let n of i.kills){if(!n||!Ca.has(n.killerId)||!Ca.has(n.victimId)||n.killerId===n.victimId||t.has(n.victimId)||!Number.isInteger(n.round)||n.round<1||n.round>i.round||!Number.isInteger(n.eventId)||n.eventId<1||n.eventId>i.log.length||i.characters.find(({id:s})=>s===n.victimId).hp!==0)throw new TypeError("\u64CA\u6BBA\u7D00\u9304\u7121\u6548\u3002");t.add(n.victimId)}if(i.round===1&&i.previousRoundActionOrder.length)throw new TypeError("\u9996\u8F2A\u4E0D\u80FD\u6709\u4E0A\u4E00\u8F2A\u7D00\u9304\u3002");if(i.phase==="loadout"||i.phase==="setup"){if(i.round!==1||i.actedIds.length||i.previousRoundActionOrder.length||i.kills.length)throw new TypeError("\u521D\u59CB\u8A2D\u5B9A\u4E0D\u80FD\u5305\u542B\u6230\u9B25\u9032\u5EA6\u3002");if(i.phase==="loadout"&&i.log.length)throw new TypeError("\u9053\u5177\u8A2D\u5B9A\u4E0D\u80FD\u5305\u542B\u5DF2\u78BA\u8A8D\u4E8B\u4EF6\u3002");if(i.phase==="setup"&&(i.log.length!==1||i.log[0]?.type!=="loadout"))throw new TypeError("\u7F3A\u5C11\u521D\u59CB\u9053\u5177\u7D00\u9304\u3002")}else if(i.log.length<2||i.log[0]?.type!=="loadout"||i.log[1]?.type!=="setup")throw new TypeError("\u7F3A\u5C11\u521D\u59CB\u9053\u5177\u6216\u8840\u91CF\u7D00\u9304\u3002");if(i.phase==="preparation"&&i.actedIds.length)throw new TypeError("\u6230\u524D\u6E96\u5099\u4E0D\u80FD\u5305\u542B\u672C\u8F2A\u5DF2\u884C\u52D5\u8005\u3002");if(i.phase==="battle"&&!as(i).length)throw new TypeError("\u6C92\u6709\u53EF\u884C\u52D5\u89D2\u8272\u6642\u61C9\u9032\u5165\u8F2A\u672B\u3002");if((i.phase==="round-end"||i.phase==="finished")&&as(i).length)throw new TypeError("\u4ECD\u6709\u89D2\u8272\u5C1A\u672A\u5B8C\u6210\u884C\u52D5\u3002");if(i.phase==="finished"&&i.round!==3)throw new TypeError("\u5B8C\u6210\u5C0D\u6230\u5FC5\u9808\u5DF2\u5230\u7B2C\u4E09\u8F2A\u3002")}function Qc(i){if(i.revision>=Number.MAX_SAFE_INTEGER)throw new RangeError("\u9032\u5EA6\u7248\u672C\u5DF2\u8D85\u51FA\u7BC4\u570D\uFF0C\u8ACB\u91CD\u65B0\u958B\u59CB\u539F\u578B\u3002");return i.revision+1}function ls(i,e,t={}){let n=Qc(i);return{...i,...t,revision:n,log:[...i.log,{id:i.log.length+1,revision:n,round:i.round,...e}]}}function jm(){return gi.map(i=>({...i,hp:i.initialHp,cards:{power:2,magic:2},weapons:[]}))}function cr(i={}){let e=jm();return{schemaVersion:4,characters:e,rules:Jm($m,i),seatOrder:or(e,ti),tieOrder:[...ti],selectedId:"fenrir",round:1,phase:"loadout",actedIds:[],roundActionOrder:[],previousRoundActionOrder:[],log:[],kills:[],revision:0}}function Vd(i,e,t){if(Cn(i),i.phase!=="loadout")throw new Error("\u53EA\u6709\u521D\u59CB\u9053\u5177\u968E\u6BB5\u53EF\u4EE5\u8A2D\u5B9A\u653B\u64CA\u724C\u8207\u6B66\u5668\u3002");if(Ps(e),!t||typeof t!="object"||Array.isArray(t)||Object.keys(t).some(l=>!["power","magic","weapons"].includes(l)))throw new TypeError("\u521D\u59CB\u9053\u5177\u8A2D\u5B9A\u7121\u6548\u3002");let n=i.characters.find(l=>l.id===e),s=Object.hasOwn(t,"power")?t.power:n.cards.power,r=Object.hasOwn(t,"magic")?t.magic:n.cards.magic,o=Object.hasOwn(t,"weapons")?t.weapons:n.weapons;os(s,lr),os(r,lr),Pa(o);let a={cards:{power:s,magic:r},weapons:ar.filter(l=>o.includes(l))},c=i.characters.map(l=>l.id===e?{...l,...a}:l);return La(c,!0),rs(n.cards,a.cards)&&rs(n.weapons,a.weapons)?i:{...i,characters:c,revision:Qc(i)}}function eh(i){if(Cn(i),i.phase!=="loadout")throw new Error("\u521D\u59CB\u9053\u5177\u5DF2\u78BA\u8A8D\u3002");return ls(i,{type:"loadout",rules:{...i.rules},initialLoadout:i.characters.map(({id:e,cards:t,weapons:n})=>({id:e,power:t.power,magic:t.magic,weapons:[...n]}))},{phase:"setup"})}function th(i,e,t){if(Cn(i),i.phase!=="setup")throw new Error("\u53EA\u6709\u78BA\u8A8D\u9053\u5177\u5F8C\u7684\u521D\u59CB\u8A2D\u5B9A\u968E\u6BB5\u53EF\u4EE5\u76F4\u63A5\u8ABF\u6574\u8840\u91CF\u3002");return Ps(e),Jc(t),i.characters.find(n=>n.id===e).hp===t?i:{...i,revision:Qc(i),characters:i.characters.map(n=>n.id===e?{...n,hp:t}:n)}}function Wd(i,e){return Cn(i),Ps(e),{...i,selectedId:e}}function nh(i){return Cn(i),or(i.characters,i.tieOrder)}function ih(i){return Cn(i),i.phase==="battle"?as(i):[]}function ni(i){return ih(i)[0]??null}function sh(i){if(Cn(i),i.phase!=="setup")throw new Error("\u8ACB\u5148\u78BA\u8A8D\u521D\u59CB\u9053\u5177\uFF1B\u5DF2\u5B8C\u6210\u7684\u521D\u59CB\u8840\u91CF\u4E0D\u80FD\u91CD\u8907\u78BA\u8A8D\u3002");return ls(i,{type:"setup",initialHp:i.characters.map(({id:e,hp:t})=>({id:e,hp:t}))},{phase:"preparation",seatOrder:or(i.characters,i.tieOrder)})}function rh(i){if(Cn(i),i.phase!=="preparation")throw new Error("\u53EA\u6709\u6230\u524D\u6E96\u5099\u968E\u6BB5\u53EF\u4EE5\u958B\u59CB\u6230\u9B25\u3002");return ls(i,{type:"battle-start"},{phase:as(i).length?"battle":"round-end"})}function kd(i){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==3||!["power","magic","weapons"].every(e=>Object.hasOwn(i,e)))throw new TypeError("\u4EA4\u6613\u7269\u54C1\u9700\u5305\u542B\u529B\u91CF\u724C\u3001\u9B54\u6CD5\u724C\u8207\u6B66\u5668\u6E05\u55AE\u3002");return os(i.power),os(i.magic),Pa(i.weapons),{power:i.power,magic:i.magic,weapons:ar.filter(e=>i.weapons.includes(e))}}function Qm(i,{fromId:e,toId:t,give:n,receive:s,expectedRevision:r}={}){if(Cn(i),i.phase!=="preparation")throw new Error("\u53EA\u6709\u6230\u524D\u6E96\u5099\u968E\u6BB5\u53EF\u4EE5\u4EA4\u6613\u3002");if(!Number.isSafeInteger(r)||r!==i.revision)throw new Error("\u4EA4\u6613\u9032\u5EA6\u5DF2\u6539\u8B8A\uFF0C\u8ACB\u78BA\u8A8D\u6700\u65B0\u7269\u54C1\u5F8C\u91CD\u65B0\u64CD\u4F5C\u3002");if(Ps(e),Ps(t),e===t)throw new Error("\u4EA4\u6613\u8ACB\u9078\u64C7\u53E6\u4E00\u540D\u89D2\u8272\u3002");let o=i.characters.find(h=>h.id===e),a=i.characters.find(h=>h.id===t);if(o.hp===0||a.hp===0)throw new Error("\u53EA\u6709\u5B58\u6D3B\u89D2\u8272\u53EF\u4EE5\u4EA4\u6613\u3002");let c=kd(n),l=kd(s);if(!c.power&&!c.magic&&!c.weapons.length&&!l.power&&!l.magic&&!l.weapons.length)throw new Error("\u8ACB\u81F3\u5C11\u9078\u64C7\u4E00\u9805\u8981\u4EA4\u63DB\u6216\u8D08\u9001\u7684\u7269\u54C1\u3002");if(i.round===1&&(c.power||c.magic||l.power||l.magic))throw new Error("\u7B2C\u4E00\u8F2A\u6E96\u5099\u53EA\u80FD\u4EA4\u6613\u6B66\u5668\uFF0C\u7B2C\u4E8C\u8F2A\u8D77\u624D\u53EF\u4EA4\u6613\u653B\u64CA\u724C\u3002");for(let[h,u]of[[o,c],[a,l]])if(h.cards.power<u.power||h.cards.magic<u.magic||u.weapons.some(d=>!h.weapons.includes(d)))throw new Error("\u4EA4\u6613\u6240\u9700\u7684\u724C\u6216\u6B66\u5668\u5DF2\u4E0D\u5728\u6301\u6709\u8005\u8EAB\u4E0A\uFF0C\u8ACB\u91CD\u65B0\u78BA\u8A8D\u3002");return{fromId:e,toId:t,give:c,receive:l}}function eg(i,e={}){let t=Qm(i,e);if(i.log.filter(l=>l.type==="trade").length>=Ia)throw new RangeError(`\u6BCF\u5C40\u539F\u578B\u6700\u591A\u5B8C\u6210 ${Ia} \u6B21\u4EA4\u6613\u3002`);let{fromId:n,toId:s,give:r,receive:o}=t,a=(l,h,u)=>{let d=new Set([...l.weapons.filter(f=>!h.weapons.includes(f)),...u.weapons]);return{...l,cards:{power:l.cards.power-h.power+u.power,magic:l.cards.magic-h.magic+u.magic},weapons:ar.filter(f=>d.has(f))}},c=i.characters.map(l=>l.id===n?a(l,r,o):l.id===s?a(l,o,r):l);return La(c),ls(i,{type:"trade",...t},{characters:c})}function oh(i,e,t,n=!0){if(Cn(i),i.phase!=="battle")throw new Error("\u76EE\u524D\u4E0D\u662F\u6230\u9B25\u968E\u6BB5\u3002");if((n||t!==void 0)&&(!Number.isSafeInteger(t)||t!==i.revision))throw new Error("\u884C\u52D5\u9032\u5EA6\u5DF2\u6539\u8B8A\uFF0C\u8ACB\u78BA\u8A8D\u76EE\u524D\u884C\u52D5\u8005\u5F8C\u91CD\u65B0\u9078\u64C7\u3002");if(Ps(e),as(i)[0]!==e)throw new Error("\u53EA\u80FD\u7531\u76EE\u524D\u8F2A\u5230\u7684\u89D2\u8272\u884C\u52D5\u3002")}function Xd(i,e){let t={...i,actedIds:[...i.actedIds,e],roundActionOrder:[...i.roundActionOrder,e]};return{...t,phase:as(t).length?"battle":"round-end"}}function ah(i,e,t){if(t!=="flame")return i.seatOrder.filter(o=>o!==e).map(o=>[o]);let n=i.seatOrder,s=n.indexOf(e);return[[...[(s+n.length-1)%n.length,(s+1)%n.length]].sort((o,a)=>o-a).map(o=>n[o])]}function lh(i,e,t){return t.weapon&&!e.weapons.includes(t.weapon)?`\u672A\u6301\u6709${t.name}`:e.cards.power<t.cost.power||e.cards.magic<t.cost.magic?"\u653B\u64CA\u724C\u4E0D\u8DB3":ah(i,e.id,t.id).length?"":"\u76EE\u524D\u5EA7\u4F4D\u6C92\u6709\u7B26\u5408\u898F\u5247\u7684\u5169\u540D\u76EE\u6A19"}function qd(i){if(Cn(i),i.phase!=="battle")return[];let e=i.characters.find(({id:t})=>t===as(i)[0]);return Object.values(oo).filter(t=>!t.weapon||e.weapons.includes(t.weapon)).map(t=>{let n=lh(i,e,t);return{id:t.id,name:t.name,damage:t.damage,targetCount:t.targetCount,cost:{...t.cost},available:!n,reason:n}})}function ao(i,e){if(Cn(i),i.phase!=="battle"||!Object.hasOwn(oo,e))return[];let t=i.characters.find(({id:n})=>n===as(i)[0]);return lh(i,t,oo[e])?[]:ah(i,t.id,e)}function ch(i,{actorId:e,actionId:t="power",targetIds:n,targetId:s,expectedRevision:r}={}){if(oh(i,e,r,!1),!Object.hasOwn(oo,t))throw new RangeError("\u627E\u4E0D\u5230\u9019\u7A2E\u653B\u64CA\u3002");let o=oo[t],a=i.characters.find(({id:f})=>f===e),c=lh(i,a,o);if(c)throw new Error(c);let l=n??(s===void 0?void 0:[s]);if(Di(l),l.length!==o.targetCount)throw new Error(`\u8ACB\u9078\u64C7 ${o.targetCount} \u540D\u4E0D\u540C\u7684\u653B\u64CA\u76EE\u6A19\u3002`);if(l.includes(e))throw new Error("\u653B\u64CA\u8ACB\u9078\u64C7\u5176\u4ED6\u89D2\u8272\u3002");let h=i.seatOrder.filter(f=>l.includes(f));if(!ah(i,e,t).some(f=>rs(f,h)))throw new Error("\u76EE\u6A19\u4E0D\u7B26\u5408\u76EE\u524D\u56FA\u5B9A\u5EA7\u4F4D\u7684\u76F8\u9130\u898F\u5247\u3002");let u=h.map(f=>{let p=i.characters.find(m=>m.id===f).hp,y=Math.max(0,p-o.damage);return{targetId:f,hpBefore:p,hpAfter:y,damage:p-y,killed:p>0&&y===0}}),d=u.filter(({killed:f})=>f).map(({targetId:f})=>{let p=i.characters.find(({id:y})=>y===f);return{victimId:f,power:p.cards.power,magic:p.cards.magic,weapons:[...p.weapons]}});return{actorId:e,actionId:t,targetIds:h,cost:{...o.cost},results:u,loot:d}}function hh(i,e={}){oh(i,e.actorId,e.expectedRevision);let t=ch(i,e),{actorId:n,results:s,cost:r,loot:o}=t,a=new Map(s.map(y=>[y.targetId,y])),c=new Set(o.map(({victimId:y})=>y)),l=i.characters.find(({id:y})=>y===n),h={power:l.cards.power-r.power,magic:l.cards.magic-r.magic};o.forEach(y=>{h.power+=y.power,h.magic+=y.magic});let u=new Set([...l.weapons,...o.flatMap(({weapons:y})=>y)]),d=i.characters.map(y=>{if(y.id===n)return{...y,cards:h,weapons:ar.filter(g=>u.has(g))};let m=a.get(y.id);return m?{...y,hp:m.hpAfter,...c.has(y.id)?{cards:{power:0,magic:0},weapons:[]}:{}}:y});La(d);let f=i.log.length+1,p=[...i.kills,...o.map(({victimId:y})=>({round:i.round,killerId:n,victimId:y,eventId:f}))];return Xd(ls(i,{type:"attack",...t},{characters:d,kills:p}),n)}function uh(i,{actorId:e,expectedRevision:t}={}){return oh(i,e,t),Xd(ls(i,{type:"pass",actorId:e}),e)}function dh(i){if(Cn(i),i.phase!=="round-end")throw new Error("\u672C\u8F2A\u884C\u52D5\u5168\u90E8\u7D50\u675F\u5F8C\u624D\u80FD\u63DB\u5EA7\u3002");let e=or(i.characters,i.tieOrder);return i.round===3?ls(i,{type:"finish"},{phase:"finished",seatOrder:e}):ls(i,{type:"advance",nextRound:i.round+1},{phase:"preparation",round:i.round+1,seatOrder:e,tieOrder:[...new Set([...i.roundActionOrder,...i.tieOrder])],previousRoundActionOrder:[...i.roundActionOrder],roundActionOrder:[],actedIds:[]})}function zd(i){return{schemaVersion:i.schemaVersion,rules:i.rules,participants:ti.map(e=>{let t=i.characters.find(n=>n.id===e);return{id:e,hp:t.hp,cards:t.cards,weapons:t.weapons}}),seatOrder:i.seatOrder,tieOrder:i.tieOrder,round:i.round,phase:i.phase,actedIds:i.actedIds,roundActionOrder:i.roundActionOrder,previousRoundActionOrder:i.previousRoundActionOrder,log:i.log,kills:i.kills,revision:i.revision}}function tg(i){if(!i||i.type!=="loadout"||!Number.isSafeInteger(i.revision)||i.revision<1||!Array.isArray(i.initialLoadout)||i.initialLoadout.length!==ti.length)throw new TypeError("\u521D\u59CB\u9053\u5177\u5FEB\u7167\u7121\u6548\u3002");jc(i.rules),Di(i.initialLoadout.map(({id:n})=>n),{full:!0});let e=new Map(i.initialLoadout.map(n=>[n.id,n])),t=cr(i.rules);return t.characters=t.characters.map(n=>{let s=e.get(n.id);return os(s.power,lr),os(s.magic,lr),Pa(s.weapons),{...n,cards:{power:s.power,magic:s.magic},weapons:[...s.weapons]}}),t.revision=i.revision-1,eh(t)}function fh(i){try{let e=typeof i=="string"?JSON.parse(i):i;Cn(e);let t;if(e.phase==="loadout")t=cr(e.rules),t.characters=t.characters.map(n=>{let s=e.characters.find(({id:r})=>r===n.id);return{...n,cards:{...s.cards},weapons:[...s.weapons]}}),t.revision=e.revision;else{if(t=tg(e.log[0]),!rs(e.log[0],t.log[0]))throw new TypeError("\u521D\u59CB\u9053\u5177\u4E8B\u4EF6\u4E0D\u4E00\u81F4\u3002");if(e.phase==="setup"){if(e.revision<t.revision)throw new TypeError("\u521D\u59CB\u8A2D\u5B9A\u7248\u672C\u7121\u6548\u3002");t.characters=t.characters.map(n=>({...n,hp:e.characters.find(({id:s})=>s===n.id).hp})),t.revision=e.revision}else{let n=e.log[1];if(!n||n.type!=="setup"||!Number.isSafeInteger(n.revision)||n.revision<=t.revision||!Array.isArray(n.initialHp)||n.initialHp.length!==ti.length)throw new TypeError("\u521D\u59CB\u8840\u91CF\u5FEB\u7167\u7121\u6548\u3002");Di(n.initialHp.map(({id:r})=>r),{full:!0}),n.initialHp.forEach(({hp:r})=>Jc(r));let s=new Map(n.initialHp.map(({id:r,hp:o})=>[r,o]));if(t=sh({...t,characters:t.characters.map(r=>({...r,hp:s.get(r.id)})),revision:n.revision-1}),!rs(n,t.log[1]))throw new TypeError("\u521D\u59CB\u8840\u91CF\u4E8B\u4EF6\u4E0D\u4E00\u81F4\u3002");for(let r of e.log.slice(2)){if(!r||typeof r!="object")throw new TypeError("\u4E8B\u4EF6\u7121\u6548\u3002");if(r.type==="battle-start")t=rh(t);else if(r.type==="attack")t=hh(t,{actorId:r.actorId,actionId:r.actionId,targetIds:r.targetIds,expectedRevision:t.revision});else if(r.type==="pass")t=uh(t,{actorId:r.actorId,expectedRevision:t.revision});else if(r.type==="trade")t=eg(t,{fromId:r.fromId,toId:r.toId,give:r.give,receive:r.receive,expectedRevision:t.revision});else if(r.type==="advance"||r.type==="finish")t=dh(t);else throw new TypeError("\u4E8B\u4EF6\u985E\u578B\u7121\u6548\u3002");if(!rs(r,t.log.at(-1)))throw new TypeError("\u4E8B\u4EF6\u7D50\u7B97\u4E0D\u4E00\u81F4\u3002")}}}if(!rs(zd(e),zd(t)))throw new TypeError("\u5132\u5B58\u9032\u5EA6\u8207\u884C\u52D5\u7D00\u9304\u4E0D\u4E00\u81F4\u3002");return{...t,selectedId:e.selectedId}}catch{return cr()}}var Ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gf=0,iu=1,Vf=2;var Zs=1,Wf=2,Gr=3,Ei=0,fn=1,Kn=2,Ks=0,Vr=1,su=2,ru=3,ou=4,Xf=5;var Js=100,qf=101,Yf=102,$f=103,Zf=104,Kf=200,Jf=201,jf=202,Qf=203,au=204,lu=205,ep=206,tp=207,np=208,ip=209,sp=210,rp=211,op=212,ap=213,lp=214,ll=0,cl=1,hl=2,wr=3,ul=4,dl=5,fl=6,pl=7,Fl=0,cp=1,hp=2,wi=0,cu=1,hu=2,uu=3,ra=4,du=5,fu=6,pu=7,Hh="attached",up="detached",mu=300,js=301,Wr=302,Bl=303,kl=304,$n=1e3,In=1001,Tr=1002,Yt=1003,zl=1004;var Qs=1005;var Bt=1006,Xr=1007;var xn=1008;var Dn=1009,gu=1010,_u=1011,qr=1012,Hl=1013,li=1014,Xn=1015,ci=1016,Gl=1017,Vl=1018,er=1020,xu=35902,yu=35899,vu=1021,Mu=1022,yn=1023,Gi=1026,es=1027,Wl=1028,Xl=1029,Ss=1030,ql=1031;var Yl=1033,oa=33776,aa=33777,la=33778,ca=33779,$l=35840,Zl=35841,Kl=35842,Jl=35843,jl=36196,Ql=37492,ec=37496,tc=37488,nc=37489,ha=37490,ic=37491,sc=37808,rc=37809,oc=37810,ac=37811,lc=37812,cc=37813,hc=37814,uc=37815,dc=37816,fc=37817,pc=37818,mc=37819,gc=37820,_c=37821,xc=36492,yc=36494,vc=36495,Mc=36283,Sc=36284,ua=36285,bc=36286;var Bs=2300,ks=2301,ol=2302,Gh=2303,Vh=2400,Wh=2401,Xh=2402,dp=2500;var Su=0,da=1,Yr=2,fp=3200;var fa=0,pp=1,hi="",Pt="srgb",un="srgb-linear",bo="linear",Ct="srgb";var al=7680;var mp=519,gp=512,_p=513,xp=514,bu=515,yp=516,vp=517,Eu=518,wu=519,Tu=35044;var Au="300 es",Yn=2e3,Ar=2001;function ng(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ig(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mp(){let i=Rr("canvas");return i.style.display="block",i}var Yd={},Cr=null;function Eo(...i){let e="THREE."+i.shift();Cr?Cr("log",e,...i):console.log(e,...i)}function Sp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=Sp(i);let e="THREE."+i.shift();if(Cr)Cr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function it(...i){i=Sp(i);let e="THREE."+i.shift();if(Cr)Cr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){let e=i.join(" ");e in Yd||(Yd[e]=!0,$e(...i))}function bp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ep={[ll]:ll,[hl]:fl,[ul]:ul,[wr]:dl,[cl]:cl,[fl]:hl,[pl]:pl,[dl]:wr},oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$d=1234567,yo=Math.PI/180,zs=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Ru(i,e){return(i%e+e)%e}function sg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rg(i,e,t){return i!==e?(t-i)/(e-i):0}function vo(i,e,t){return(1-t)*i+t*e}function og(i,e,t,n){return vo(i,e,1-Math.exp(-t*n))}function ag(i,e=1){return e-Math.abs(Ru(i,e*2)-e)}function lg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ug(i,e){return i+Math.random()*(e-i)}function dg(i){return i*(.5-Math.random())}function fg(i){i!==void 0&&($d=i);let e=$d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pg(i){return i*yo}function mg(i){return i*zs}function gg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function _g(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*p,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*p,a*l);break;case"ZYZ":i.set(c*p,c*f,a*h,a*l);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ec(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Iu(i,e){if(e.constructor===Float32Array)return i;let t=Ec(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Pu(i,e){if(e.constructor===Float32Array)return i;let t=Ec(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Un={DEG2RAD:yo,RAD2DEG:zs,generateUUID:ui,clamp:ft,euclideanModulo:Ru,mapLinear:sg,inverseLerp:rg,lerp:vo,damp:og,pingpong:ag,smoothstep:lg,smootherstep:cg,randInt:hg,randFloat:ug,randFloatSpread:dg,seededRandom:fg,degToRad:pg,radToDeg:mg,isPowerOfTwo:gg,ceilPowerOfTwo:_g,floorPowerOfTwo:Cu,setQuaternionFromProperEuler:xg,normalize:Pu,denormalize:Iu},ae=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],y=r[o+3];if(u!==y||c!==d||l!==f||h!==p){let m=c*d+l*f+h*p+u*y;m<0&&(d=-d,f=-f,p=-p,y=-y,m=-m);let g=1-a;if(m<.9995){let M=Math.acos(m),S=Math.sin(M);g=Math.sin(g*M)/S,a=Math.sin(a*M)/S,c=c*g+d*a,l=l*g+f*a,h=h*g+p*a,u=u*g+y*a}else{c=c*g+d*a,l=l*g+f*a,h=h*g+p*a,u=u*g+y*a;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-a*f,e[t+2]=l*p+h*f+a*d-c*u,e[t+3]=h*p-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ph=new N,Zd=new Kt,at=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],y=s[0],m=s[3],g=s[6],M=s[1],S=s[4],x=s[7],T=s[2],w=s[5],_=s[8];return r[0]=o*y+a*M+c*T,r[3]=o*m+a*S+c*w,r[6]=o*g+a*x+c*_,r[1]=l*y+h*M+u*T,r[4]=l*m+h*S+u*w,r[7]=l*g+h*x+u*_,r[2]=d*y+f*M+p*T,r[5]=d*m+f*S+p*w,r[8]=d*g+f*x+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mh=new at,Kd=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jd=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yg(){let i={enabled:!0,workingColorSpace:un,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[un]:{primaries:e,whitePoint:n,transfer:bo,toXYZ:Kd,fromXYZ:Jd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Kd,fromXYZ:Jd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}var dt=yg();function Hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hr,ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Rr("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vg=0,Ir=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gh(s[o].image)):r.push(gh(s[o]))}else r=gh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function gh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var Mg=0,_h=new N,an=class i extends oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=Bt,o=xn,a=yn,c=Dn,l=i.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=ui(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=mu;an.DEFAULT_ANISOTROPY=1;var It=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],y=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,x=(f+1)/2,T=(g+1)/2,w=(h+d)/4,_=(u+y)/4,E=(p+m)/4;return S>x&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=_/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=E/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=E/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gl=class extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends gl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},wo=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var st=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,p,y,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=l*h,y=l*u;t[0]=d+y*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,y=a*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,p=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*c,f=o*l,p=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sg,e,bg)}lookAt(e,t,n){let s=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),cs.crossVectors(n,kn),cs.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),cs.crossVectors(n,kn)),cs.normalize(),Na.crossVectors(kn,cs),s[0]=cs.x,s[4]=Na.x,s[8]=kn.x,s[1]=cs.y,s[5]=Na.y,s[9]=kn.y,s[2]=cs.z,s[6]=Na.z,s[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],y=n[6],m=n[10],g=n[14],M=n[3],S=n[7],x=n[11],T=n[15],w=s[0],_=s[4],E=s[8],L=s[12],C=s[1],D=s[5],z=s[9],Y=s[13],P=s[2],R=s[6],U=s[10],F=s[14],q=s[3],k=s[7],G=s[11],K=s[15];return r[0]=o*w+a*C+c*P+l*q,r[4]=o*_+a*D+c*R+l*k,r[8]=o*E+a*z+c*U+l*G,r[12]=o*L+a*Y+c*F+l*K,r[1]=h*w+u*C+d*P+f*q,r[5]=h*_+u*D+d*R+f*k,r[9]=h*E+u*z+d*U+f*G,r[13]=h*L+u*Y+d*F+f*K,r[2]=p*w+y*C+m*P+g*q,r[6]=p*_+y*D+m*R+g*k,r[10]=p*E+y*z+m*U+g*G,r[14]=p*L+y*Y+m*F+g*K,r[3]=M*w+S*C+x*P+T*q,r[7]=M*_+S*D+x*R+T*k,r[11]=M*E+S*z+x*U+T*G,r[15]=M*L+S*Y+x*F+T*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],y=e[7],m=e[11],g=e[15],M=c*f-l*d,S=a*f-l*u,x=a*d-c*u,T=o*f-l*h,w=o*d-c*h,_=o*u-a*h;return t*(y*M-m*S+g*x)-n*(p*M-m*T+g*w)+s*(p*S-y*T+g*_)-r*(p*x-y*w+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],y=e[13],m=e[14],g=e[15],M=t*a-n*o,S=t*c-s*o,x=t*l-r*o,T=n*c-s*a,w=n*l-r*a,_=s*l-r*c,E=h*y-u*p,L=h*m-d*p,C=h*g-f*p,D=u*m-d*y,z=u*g-f*y,Y=d*g-f*m,P=M*Y-S*z+x*D+T*C-w*L+_*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/P;return e[0]=(a*Y-c*z+l*D)*R,e[1]=(s*z-n*Y-r*D)*R,e[2]=(y*_-m*w+g*T)*R,e[3]=(d*w-u*_-f*T)*R,e[4]=(c*C-o*Y-l*L)*R,e[5]=(t*Y-s*C+r*L)*R,e[6]=(m*x-p*_-g*S)*R,e[7]=(h*_-d*x+f*S)*R,e[8]=(o*z-a*C+l*E)*R,e[9]=(n*C-t*z-r*E)*R,e[10]=(p*w-y*x+g*M)*R,e[11]=(u*x-h*w-f*M)*R,e[12]=(a*L-o*D-c*E)*R,e[13]=(t*D-n*L+s*E)*R,e[14]=(y*S-p*T-m*M)*R,e[15]=(h*T-u*S+d*M)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,p=r*u,y=o*h,m=o*u,g=a*u,M=c*l,S=c*h,x=c*u,T=n.x,w=n.y,_=n.z;return s[0]=(1-(y+g))*T,s[1]=(f+x)*T,s[2]=(p-S)*T,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(d+g))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(p+S)*_,s[9]=(m-M)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ur.set(s[0],s[1],s[2]).length(),a=ur.set(s[4],s[5],s[6]).length(),c=ur.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ii.copy(this);let l=1/o,h=1/a,u=1/c;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,t.setFromRotationMatrix(ii),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Yn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,y;if(c)p=r/(o-r),y=o*r/(o-r);else if(a===Yn)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ar)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Yn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,y;if(c)p=1/(o-r),y=o/(o-r);else if(a===Yn)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ar)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ur=new N,ii=new st,Sg=new N(0,0,0),bg=new N(1,1,1),cs=new N,Na=new N,kn=new N,jd=new st,Qd=new Kt,Pn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Eg=0,ef=new N,dr=new Kt,Ui=new st,Da=new N,lo=new N,wg=new N,Tg=new Kt,tf=new N(1,0,0),nf=new N(0,1,0),sf=new N(0,0,1),rf={type:"added"},Ag={type:"removed"},fr={type:"childadded",child:null},xh={type:"childremoved",child:null},Ot=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Pn,n=new Kt,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new at}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(tf,e)}rotateY(e){return this.rotateOnAxis(nf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return ef.copy(e).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tf,e)}translateY(e){return this.translateOnAxis(nf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Da.copy(e):Da.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(lo,Da,this.up):Ui.lookAt(Da,lo,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Ui),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),fr.child=e,this.dispatchEvent(fr),fr.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ag),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,Tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new N(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),g=this._getHandJoint(l,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function yh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Ru(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=yh(o,r,e+1/3),this.g=yh(o,r,e),this.b=yh(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return dt.workingToColorSpace(_n.copy(this),e),Math.round(ft(_n.r*255,0,255))*65536+Math.round(ft(_n.g*255,0,255))*256+Math.round(ft(_n.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(_n.copy(this),t);let n=_n.r,s=_n.g,r=_n.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Pt){dt.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,s=_n.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Ua);let n=vo(hs.h,Ua.h,t),s=vo(hs.s,Ua.s,t),r=vo(hs.l,Ua.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new Ze;Ze.NAMES=wp;var To=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hs=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},si=new N,Oi=new N,vh=new N,Fi=new N,pr=new N,mr=new N,of=new N,Mh=new N,Sh=new N,bh=new N,Eh=new It,wh=new It,Th=new It,ms=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),si.subVectors(e,t),s.cross(si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){si.subVectors(s,t),Oi.subVectors(n,t),vh.subVectors(e,t);let o=si.dot(si),a=si.dot(Oi),c=si.dot(vh),l=Oi.dot(Oi),h=Oi.dot(vh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fi.x),c.addScaledVector(o,Fi.y),c.addScaledVector(a,Fi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Eh.setScalar(0),wh.setScalar(0),Th.setScalar(0),Eh.fromBufferAttribute(e,t),wh.fromBufferAttribute(e,n),Th.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Eh,r.x),o.addScaledVector(wh,r.y),o.addScaledVector(Th,r.z),o}static isFrontFacing(e,t,n,s){return si.subVectors(n,t),Oi.subVectors(e,t),si.cross(Oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),si.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;pr.subVectors(s,n),mr.subVectors(r,n),Mh.subVectors(e,n);let c=pr.dot(Mh),l=mr.dot(Mh);if(c<=0&&l<=0)return t.copy(n);Sh.subVectors(e,s);let h=pr.dot(Sh),u=mr.dot(Sh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(pr,o);bh.subVectors(e,r);let f=pr.dot(bh),p=mr.dot(bh);if(p>=0&&f<=p)return t.copy(r);let y=f*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(mr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return of.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(of,a);let g=1/(m+y+d);return o=y*g,a=d*g,t.copy(n).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oa.copy(n.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Fa.subVectors(this.max,co),gr.subVectors(e.a,co),_r.subVectors(e.b,co),xr.subVectors(e.c,co),us.subVectors(_r,gr),ds.subVectors(xr,_r),Ls.subVectors(gr,xr);let t=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Ls.z,Ls.y,us.z,0,-us.x,ds.z,0,-ds.x,Ls.z,0,-Ls.x,-us.y,us.x,0,-ds.y,ds.x,0,-Ls.y,Ls.x,0];return!Ah(t,gr,_r,xr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!Ah(t,gr,_r,xr,Fa))?!1:(Ba.crossVectors(us,ds),t=[Ba.x,Ba.y,Ba.z],Ah(t,gr,_r,xr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new N,new N,new N,new N,new N,new N,new N,new N],ri=new N,Oa=new bn,gr=new N,_r=new N,xr=new N,us=new N,ds=new N,Ls=new N,co=new N,Fa=new N,Ba=new N,Ns=new N;function Ah(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ns.fromArray(i,r);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=e.dot(Ns),l=t.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Zt=new N,ka=new ae,Cg=0,Lt=class extends oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tu,this.updateRanges=[],this.gpuType=Xn,this.version=0,this._normalizationScale=e!==void 0?Ec(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ka.fromBufferAttribute(this,t),ka.applyMatrix3(e),this.setXY(t,ka.x,ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Iu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pu(e,this.array)}};var Ao=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ro=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ig=new bn,ho=new N,Rh=new N,Ln=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ig.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);let t=ho.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ho,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(Rh)),this.expandByPoint(ho.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pg=0,qn=new st,Ch=new Ot,yr=new N,zn=new bn,uo=new bn,on=new N,wt=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ng(e)?Ro:Ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(zn.min,uo.min),zn.expandByPoint(on),on.addVectors(zn.max,uo.max),zn.expandByPoint(on)):(zn.expandByPoint(uo.min),zn.expandByPoint(uo.max))}zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(yr.fromBufferAttribute(e,l),on.add(yr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new N,c[L]=new N;let h=new N,u=new N,d=new N,f=new ae,p=new ae,y=new ae,m=new N,g=new N;function M(L,C,D){l[L]=l[C]=l[D]=1,h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,D),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,C),y.fromBufferAttribute(r,D),u.sub(h),d.sub(h),p.sub(f),y.sub(f);let z=1/(p.x*y.y-y.x*p.y);isFinite(z)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(z),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(z),a[L].add(m),a[C].add(m),a[D].add(m),c[L].add(g),c[C].add(g),c[D].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,C=S.length;L<C;++L){let D=S[L],z=D.start,Y=D.count;for(let P=z,R=z+Y;P<R;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let x=new N,T=new N,w=new N,_=new N;function E(L){w.fromBufferAttribute(s,L),_.copy(w);let C=a[L];x.copy(C),x.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(_,C);let z=T.dot(c[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,z)}for(let L=0,C=n.count;L<C;++L)l[L]&&E(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new Lt(d,h,u)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},gs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tu,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=af(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=af(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function af(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ui()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Sn=new N,_s=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Ec(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Iu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Pu(e,this.data.array)}},Ih=new N,Lg=new N,Ng=new at,Hn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ih.subVectors(n,t).cross(Lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ih),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ng.getNormalMatrix(e),s=this.coplanarPoint(Ih).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dg=0,En=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=Vr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=lu,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=al,this.stencilZFail=al,this.stencilZPass=al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ki=new N,Ph=new N,za=new N,Ha=new N,yi=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ph.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Ha.copy(this.origin).sub(Ph);let r=e.distanceTo(t)*.5,o=-this.direction.dot(za),a=Ha.dot(this.direction),c=-Ha.dot(za),l=Ha.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ph).addScaledVector(za,d),f}intersectSphere(e,t){if(e.radius<0)return null;ki.subVectors(e.center,this.origin);let n=ki.dot(this.direction),s=ki.dot(ki)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,y=t.y-o.y,m=t.z-o.z,g=n.x-o.x,M=n.y-o.y,S=n.z-o.z,x=Math.abs(c),T=Math.abs(l),w=Math.abs(h),_,E,L,C,D,z,Y,P,R,U,F,q;if(x>=T&&x>=w?(L=c,z=u,R=p,q=g,c>=0?(_=l,E=h,C=d,D=f,Y=y,P=m,U=M,F=S):(_=h,E=l,C=f,D=d,Y=m,P=y,U=S,F=M)):T>=w?(L=l,z=d,R=y,q=M,l>=0?(_=h,E=c,C=f,D=u,Y=m,P=p,U=S,F=g):(_=c,E=h,C=u,D=f,Y=p,P=m,U=g,F=S)):(L=h,z=f,R=m,q=S,h>=0?(_=c,E=l,C=u,D=d,Y=p,P=y,U=g,F=M):(_=l,E=c,C=d,D=u,Y=y,P=p,U=M,F=g)),L===0)return null;let k=_/L,G=E/L,K=1/L,Q=C-k*z,Ae=D-G*z,$=Y-k*R,he=P-G*R,ce=U-k*q,ze=F-G*q,Re=ce*he-ze*$,We=Q*ze-Ae*ce,Mt=$*Ae-he*Q;if(s){if(Re<0||We<0||Mt<0)return null}else if((Re<0||We<0||Mt<0)&&(Re>0||We>0||Mt>0))return null;let Ke=Re+We+Mt;if(Ke===0)return null;let et=K*(Re*z+We*R+Mt*q);return(Ke>0?et<0:et>0)?null:this.at(et/Ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lf=new st,Ds=new yi,Ga=new Ln,cf=new N,Va=new N,Wa=new N,Xa=new N,Lh=new N,qa=new N,hf=new N,Ya=new N,bt=class extends Ot{constructor(e=new wt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){qa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Lh.fromBufferAttribute(u,e),o?qa.addScaledVector(Lh,h):qa.addScaledVector(Lh.sub(t),h))}t.add(qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(Ga.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Ga,cf)===null||Ds.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(lf),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,T=S;x<T;x+=3){let w=a.getX(x),_=a.getX(x+1),E=a.getX(x+2);s=$a(this,g,e,n,l,h,u,w,_,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let M=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=$a(this,o,e,n,l,h,u,M,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,T=S;x<T;x+=3){let w=x,_=x+1,E=x+2;s=$a(this,g,e,n,l,h,u,w,_,E),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let M=m,S=m+1,x=m+2;s=$a(this,o,e,n,l,h,u,M,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ug(i,e,t,n,s,r,o,a){let c;if(e.side===fn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ei,a),c===null)return null;Ya.copy(a),Ya.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ya);return l<t.near||l>t.far?null:{distance:l,point:Ya.clone(),object:i}}function $a(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Va),i.getVertexPosition(c,Wa),i.getVertexPosition(l,Xa);let h=Ug(i,e,t,n,Va,Wa,Xa,hf);if(h){let u=new N;ms.getBarycoord(hf,Va,Wa,Xa,u),s&&(h.uv=ms.getInterpolatedAttribute(s,a,c,l,u,new ae)),r&&(h.uv1=ms.getInterpolatedAttribute(r,a,c,l,u,new ae)),o&&(h.normal=ms.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new N,materialIndex:0};ms.getNormal(Va,Wa,Xa,d.normal),h.face=d,h.barycoord=u}return h}var fo=new It,uf=new It,df=new It,Og=new It,ff=new st,Za=new N,Nh=new Ln,pf=new st,Dh=new yi,Co=class extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingBox.expandByPoint(Za)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingSphere.expandByPoint(Za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nh.copy(this.boundingSphere),Nh.applyMatrix4(s),e.ray.intersectsSphere(Nh)!==!1&&(pf.copy(s).invert(),Dh.copy(e.ray).applyMatrix4(pf),!(this.boundingBox!==null&&Dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new It,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===up?this.bindMatrixInverse.copy(this.bindMatrix).invert():$e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;uf.fromBufferAttribute(s.attributes.skinIndex,e),df.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(fo.copy(t),t.set(0,0,0,0)):(fo.set(t.x,t.y,t.z,1),t.set(0,0,0)),fo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=df.getComponent(r);if(o!==0){let a=uf.getComponent(r);ff.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Og.copy(fo).applyMatrix4(ff),o)}}return t.isVector4&&(t.w=fo.w),t.applyMatrix4(this.bindMatrixInverse)}},Nr=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},vi=class extends an{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Yt,h=Yt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mf=new st,Fg=new st,Io=class i{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Fg;mf.multiplyMatrices(a,t[r]),mf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vi(t,e,e,yn,Xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&($e("Skeleton: No bone found with UUID:",r),o=new Nr),this.bones.push(o),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Vi=class extends Lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vr=new st,gf=new st,Ka=[],_f=new bn,Bg=new st,po=new bt,mo=new Ln,Gs=class extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),_f.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(_f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),mo.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(n),e.ray.intersectsSphere(mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),gf.multiplyMatrices(n,vr),po.matrixWorld=gf,po.raycast(e,Ka);for(let o=0,a=Ka.length;o<a;o++){let c=Ka[o];c.instanceId=r,c.object=this,t.push(c)}Ka.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(s*this.count),s,this.count,Wl,Xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Us=new Ln,kg=new ae(.5,.5),Ja=new N,xs=class{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],y=r[9],m=r[10],g=r[11],M=r[12],S=r[13],x=r[14],T=r[15];if(s[0].setComponents(l-o,f-h,g-p,T-M).normalize(),s[1].setComponents(l+o,f+h,g+p,T+M).normalize(),s[2].setComponents(l+a,f+u,g+y,T+S).normalize(),s[3].setComponents(l-a,f-u,g-y,T-S).normalize(),n)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,f-d,g-m,T-x).normalize();else if(s[4].setComponents(l-c,f-d,g-m,T-x).normalize(),t===Yn)s[5].setComponents(l+c,f+d,g+m,T+x).normalize();else if(t===Ar)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);let t=kg.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ja.x=s.normal.x>0?e.max.x:e.min.x,Ja.y=s.normal.y>0?e.max.y:e.min.y,Ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xf=new st,xl=class i{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];xf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new xs),n[s].setFromProjectionMatrix(xf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new xs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ys=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yl=new N,vl=new N,yf=new st,go=new yi,ja=new Ln,Uh=new N,vf=new N,Wi=class extends Ot{constructor(e=new wt,t=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yl.fromBufferAttribute(t,s-1),vl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yl.distanceTo(vl);e.setAttribute("lineDistance",new ut(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;yf.copy(s).invert(),go.copy(e.ray).applyMatrix4(yf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let y=f,m=p-1;y<m;y+=l){let g=h.getX(y),M=h.getX(y+1),S=Qa(this,e,go,c,g,M,y);S&&t.push(S)}if(this.isLineLoop){let y=h.getX(p-1),m=h.getX(f),g=Qa(this,e,go,c,y,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let y=f,m=p-1;y<m;y+=l){let g=Qa(this,e,go,c,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){let y=Qa(this,e,go,c,p-1,f,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(yl.fromBufferAttribute(a,s),vl.fromBufferAttribute(a,r),t.distanceSqToSegment(yl,vl,Uh,vf)>n)return;Uh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Uh);if(!(l<e.near||l>e.far))return{distance:l,point:vf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Mf=new N,Sf=new N,Po=class extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Mf.fromBufferAttribute(t,s),Sf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mf.distanceTo(Sf);e.setAttribute("lineDistance",new ut(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Lo=class extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Dr=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bf=new st,qh=new yi,el=new Ln,tl=new N,No=class extends Ot{constructor(e=new wt,t=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(s),el.radius+=r,e.ray.intersectsSphere(el)===!1)return;bf.copy(s).invert(),qh.copy(e.ray).applyMatrix4(bf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,y=f;p<y;p++){let m=l.getX(p);tl.fromBufferAttribute(u,m),Ef(tl,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,y=f;p<y;p++)tl.fromBufferAttribute(u,p),Ef(tl,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ef(i,e,t,n,s,r,o){let a=qh.distanceSqToPoint(i);if(a<t){let c=new N;qh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Do=class extends an{constructor(e=[],t=js,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Xi=class extends an{constructor(e,t,n=li,s,r,o,a=Yt,c=Yt,l,h=Gi,u=1){if(h!==Gi&&h!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Uo=class extends Xi{constructor(e,t=li,n=js,s,r,o=Yt,a=Yt,c,l=Gi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Oo=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ft=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function p(y,m,g,M,S,x,T,w,_,E,L){let C=x/_,D=T/E,z=x/2,Y=T/2,P=w/2,R=_+1,U=E+1,F=0,q=0,k=new N;for(let G=0;G<U;G++){let K=G*D-Y;for(let Q=0;Q<R;Q++){let Ae=Q*C-z;k[y]=Ae*M,k[m]=K*S,k[g]=P,l.push(k.x,k.y,k.z),k[y]=0,k[m]=0,k[g]=w>0?1:-1,h.push(k.x,k.y,k.z),u.push(Q/_),u.push(1-G/E),F+=1}}for(let G=0;G<E;G++)for(let K=0;K<_;K++){let Q=d+K+R*G,Ae=d+K+R*(G+1),$=d+(K+1)+R*(G+1),he=d+(K+1)+R*G;c.push(Q,Ae,he),c.push(Ae,$,he),q+=6}a.addGroup(f,q,L),f+=q,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Jt=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,y=[],m=n/2,g=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function M(){let x=new N,T=new N,w=0,_=(t-e)/n;for(let E=0;E<=r;E++){let L=[],C=E/r,D=C*(t-e)+e;for(let z=0;z<=s;z++){let Y=z/s,P=Y*c+a,R=Math.sin(P),U=Math.cos(P);T.x=D*R,T.y=-C*n+m,T.z=D*U,u.push(T.x,T.y,T.z),x.set(R,_,U).normalize(),d.push(x.x,x.y,x.z),f.push(Y,1-C),L.push(p++)}y.push(L)}for(let E=0;E<s;E++)for(let L=0;L<r;L++){let C=y[L][E],D=y[L+1][E],z=y[L+1][E+1],Y=y[L][E+1];(e>0||L!==0)&&(h.push(C,D,Y),w+=3),(t>0||L!==r-1)&&(h.push(D,z,Y),w+=3)}l.addGroup(g,w,0),g+=w}function S(x){let T=p,w=new ae,_=new N,E=0,L=x===!0?e:t,C=x===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),p++;let D=p;for(let z=0;z<=s;z++){let P=z/s*c+a,R=Math.cos(P),U=Math.sin(P);_.x=L*U,_.y=m*C,_.z=L*R,u.push(_.x,_.y,_.z),d.push(0,C,0),w.x=R*.5+.5,w.y=U*.5*C+.5,f.push(w.x,w.y),p++}for(let z=0;z<s;z++){let Y=T+z,P=D+z;x===!0?h.push(P,P+1,Y):h.push(P+1,P,Y),E+=3}l.addGroup(g,E,x===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qi=class i extends Jt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fo=class i extends wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new N,x=new N,T=new N;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],x),f(t[w+2],T),c(S,x,T,M)}function c(M,S,x,T){let w=T+1,_=[];for(let E=0;E<=w;E++){_[E]=[];let L=M.clone().lerp(x,E/w),C=S.clone().lerp(x,E/w),D=w-E;for(let z=0;z<=D;z++)z===0&&E===w?_[E][z]=L:_[E][z]=L.clone().lerp(C,z/D)}for(let E=0;E<w;E++)for(let L=0;L<2*(w-E)-1;L++){let C=Math.floor(L/2);L%2===0?(d(_[E][C+1]),d(_[E+1][C]),d(_[E][C])):(d(_[E][C+1]),d(_[E+1][C+1]),d(_[E+1][C]))}}function l(M){let S=new N;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(M),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){let M=new N;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];let x=m(M)/2/Math.PI+.5,T=g(M)/Math.PI+.5;o.push(x,1-T)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let S=o[M+0],x=o[M+2],T=o[M+4],w=Math.max(S,x,T),_=Math.min(S,x,T);w>.9&&_<.1&&(S<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,S){let x=M*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function p(){let M=new N,S=new N,x=new N,T=new N,w=new ae,_=new ae,E=new ae;for(let L=0,C=0;L<r.length;L+=9,C+=6){M.set(r[L+0],r[L+1],r[L+2]),S.set(r[L+3],r[L+4],r[L+5]),x.set(r[L+6],r[L+7],r[L+8]),w.set(o[C+0],o[C+1]),_.set(o[C+2],o[C+3]),E.set(o[C+4],o[C+5]),T.copy(M).add(S).add(x).divideScalar(3);let D=m(T);y(w,C+0,M,D),y(_,C+2,S,D),y(E,C+4,x,D)}}function y(M,S,x,T){T<0&&M.x===1&&(o[S]=M.x-1),x.x===0&&x.z===0&&(o[S]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Ur=class i extends Fo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ae:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],o=[],a=new N,c=new st;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ft(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ft(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Or=class extends Vn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ml=class extends Or{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var wf=new N,Tf=new N,Oh=new Lu,Fh=new Lu,Bh=new Lu,Fr=class extends Vn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Tf.subVectors(s[0],s[1]).add(s[0]),l=Tf);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),Oh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,y,m),Fh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,y,m),Bh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(Oh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Fh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Bh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Oh.calc(c),Fh.calc(c),Bh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Af(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function zg(i,e){let t=1-i;return t*t*e}function Hg(i,e){return 2*(1-i)*i*e}function Gg(i,e){return i*i*e}function Mo(i,e,t,n){return zg(i,e)+Hg(i,t)+Gg(i,n)}function Vg(i,e){let t=1-i;return t*t*t*e}function Wg(i,e){let t=1-i;return 3*t*t*i*e}function Xg(i,e){return 3*(1-i)*i*i*e}function qg(i,e){return i*i*i*e}function So(i,e,t,n,s){return Vg(i,e)+Wg(i,t)+Xg(i,n)+qg(i,s)}var Bo=class extends Vn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(So(e,s.x,r.x,o.x,a.x),So(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sl=class extends Vn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(So(e,s.x,r.x,o.x,a.x),So(e,s.y,r.y,o.y,a.y),So(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends Vn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends Vn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends Vn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mo(e,s.x,r.x,o.x),Mo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends Vn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mo(e,s.x,r.x,o.x),Mo(e,s.y,r.y,o.y),Mo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Af(a,c.x,l.x,h.x,u.x),Af(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},El=Object.freeze({__proto__:null,ArcCurve:Ml,CatmullRomCurve3:Fr,CubicBezierCurve:Bo,CubicBezierCurve3:Sl,EllipseCurve:Or,LineCurve:ko,LineCurve3:bl,QuadraticBezierCurve:zo,QuadraticBezierCurve3:Ho,SplineCurve:Go}),wl=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new El[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new El[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Vs=class extends wl{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ko(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new zo(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Bo(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Go(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Or(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mi=class extends Vs{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Vs().fromJSON(s))}return this}};function Yg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Tp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=jg(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Vo(r,o,t,a,c,l,0),o}function Tp(i,e,t,n,s){let r;if(s===c0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Rf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Rf(o/n|0,i[o],i[o+1],r);return r&&Br(r,r.next)&&(Xo(r),r=r.next),r}function Ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Br(t,t.next)||zt(t.prev,t,t.next)===0)){if(Xo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&i0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Zg(i,n,s,r):$g(i)){e.push(c.i,i.i,l.i),Xo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Kg(Ws(i),e),Vo(i,e,t,n,s,r,2)):o===2&&Jg(i,e,t,n,s,r):Vo(Ws(i),e,t,n,s,r,1);break}}}function $g(i){let e=i.prev,t=i,n=i.next;if(zt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&_o(s,a,r,c,o,l,p.x,p.y)&&zt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Zg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(zt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),p=Math.min(h,u,d),y=Math.max(a,c,l),m=Math.max(h,u,d),g=Yh(f,p,e,t,n),M=Yh(y,m,e,t,n),S=i.prevZ,x=i.nextZ;for(;S&&S.z>=g&&x&&x.z<=M;){if(S.x>=f&&S.x<=y&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&_o(a,h,c,u,l,d,S.x,S.y)&&zt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=y&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&_o(a,h,c,u,l,d,x.x,x.y)&&zt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=y&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&_o(a,h,c,u,l,d,S.x,S.y)&&zt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=y&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&_o(a,h,c,u,l,d,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Kg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Br(n,s)&&Rp(n,t,t.next,s)&&Wo(n,s)&&Wo(s,n)&&(e.push(n.i,t.i,s.i),Xo(t),Xo(t.next),t=i=s),t=t.next}while(t!==i);return Ws(t)}function Jg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&o0(o,a)){let c=Cp(o,a);o=Ws(o,o.next),c=Ws(c,c.next),Vo(o,e,t,n,s,r,0),Vo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function jg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Tp(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(r0(l))}s.sort(Qg);for(let r=0;r<s.length;r++)t=e0(s[r],t);return t}function Qg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function e0(i,e){let t=t0(i,e);if(!t)return e;let n=Cp(t,i);return Ws(n,n.next),Ws(t,t.next)}function t0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Br(i,t))return t;do{if(Br(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Ap(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Wo(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&n0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function n0(i,e){return zt(i.prev,i,e.prev)<0&&zt(e.next,i,i.next)<0}function i0(i,e,t,n){let s=i;do s.z===0&&(s.z=Yh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,s0(s)}function s0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Yh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function r0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ap(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function _o(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ap(i,e,t,n,s,r,o,a)}function o0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!a0(i,e)&&(Wo(i,e)&&Wo(e,i)&&l0(i,e)&&(zt(i.prev,i,e.prev)||zt(i,e.prev,e))||Br(i,e)&&zt(i.prev,i,i.next)>0&&zt(e.prev,e,e.next)>0)}function zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Br(i,e){return i.x===e.x&&i.y===e.y}function Rp(i,e,t,n){let s=il(zt(i,e,t)),r=il(zt(i,e,n)),o=il(zt(t,n,i)),a=il(zt(t,n,e));return!!(s!==r&&o!==a||s===0&&nl(i,t,e)||r===0&&nl(i,n,e)||o===0&&nl(t,i,n)||a===0&&nl(t,e,n))}function nl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function il(i){return i>0?1:i<0?-1:0}function a0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Wo(i,e){return zt(i.prev,i,i.next)<0?zt(i,e,i.next)>=0&&zt(i,i.prev,e)>=0:zt(i,e,i.prev)<0||zt(i,i.next,e)<0}function l0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cp(i,e){let t=$h(i.i,i.x,i.y),n=$h(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Rf(i,e,t,n){let s=$h(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $h(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function c0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Zh=class{static triangulate(e,t,n=2){return Yg(e,t,n)}},Os=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Cf(e),If(n,e);let o=e.length;t.forEach(Cf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,If(n,t[c]);let a=Zh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Cf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function If(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Yi=class i extends wt{constructor(e=new Mi([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:h0,S,x=!1,T,w,_,E;if(g){S=g.getSpacedPoints(h),x=!0,d=!1;let re=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,re),w=new N,_=new N,E=new N}d||(m=0,f=0,p=0,y=0);let L=a.extractPoints(l),C=L.shape,D=L.holes;if(!Os.isClockWise(C)){C=C.reverse();for(let re=0,ge=D.length;re<ge;re++){let fe=D[re];Os.isClockWise(fe)&&(D[re]=fe.reverse())}}function Y(re){let fe=10000000000000001e-36,Pe=re[0];for(let Me=1;Me<=re.length;Me++){let tt=Me%re.length,He=re[tt],nt=He.x-Pe.x,lt=He.y-Pe.y,gt=nt*nt+lt*lt,B=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(Pe.x),Math.abs(Pe.y)),me=fe*B*B;if(gt<=me){re.splice(tt,1),Me--;continue}Pe=He}}Y(C),D.forEach(Y);let P=D.length,R=C;for(let re=0;re<P;re++){let ge=D[re];C=C.concat(ge)}function U(re,ge,fe){return ge||it("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ge,fe)}let F=C.length;function q(re,ge,fe){let Pe,Me,tt,He=re.x-ge.x,nt=re.y-ge.y,lt=fe.x-re.x,gt=fe.y-re.y,B=He*He+nt*nt,me=He*gt-nt*lt;if(Math.abs(me)>Number.EPSILON){let Se=Math.sqrt(B),Ne=Math.sqrt(lt*lt+gt*gt),oe=ge.x-nt/Se,Je=ge.y+He/Se,Ce=fe.x-gt/Ne,_e=fe.y+lt/Ne,A=((Ce-oe)*gt-(_e-Je)*lt)/(He*gt-nt*lt);Pe=oe+He*A-re.x,Me=Je+nt*A-re.y;let b=Pe*Pe+Me*Me;if(b<=2)return new ae(Pe,Me);tt=Math.sqrt(b/2)}else{let Se=!1;He>Number.EPSILON?lt>Number.EPSILON&&(Se=!0):He<-Number.EPSILON?lt<-Number.EPSILON&&(Se=!0):Math.sign(nt)===Math.sign(gt)&&(Se=!0),Se?(Pe=-nt,Me=He,tt=Math.sqrt(B)):(Pe=He,Me=nt,tt=Math.sqrt(B/2))}return new ae(Pe/tt,Me/tt)}let k=[];for(let re=0,ge=R.length,fe=ge-1,Pe=re+1;re<ge;re++,fe++,Pe++)fe===ge&&(fe=0),Pe===ge&&(Pe=0),k[re]=q(R[re],R[fe],R[Pe]);let G=[],K,Q=k.concat();for(let re=0,ge=P;re<ge;re++){let fe=D[re];K=[];for(let Pe=0,Me=fe.length,tt=Me-1,He=Pe+1;Pe<Me;Pe++,tt++,He++)tt===Me&&(tt=0),He===Me&&(He=0),K[Pe]=q(fe[Pe],fe[tt],fe[He]);G.push(K),Q=Q.concat(K)}let Ae;if(m===0)Ae=Os.triangulateShape(R,D);else{let re=[],ge=[];for(let fe=0;fe<m;fe++){let Pe=fe/m,Me=f*Math.cos(Pe*Math.PI/2),tt=p*Math.sin(Pe*Math.PI/2)+y;for(let He=0,nt=R.length;He<nt;He++){let lt=U(R[He],k[He],tt);We(lt.x,lt.y,-Me),Pe===0&&re.push(lt)}for(let He=0,nt=P;He<nt;He++){let lt=D[He];K=G[He];let gt=[];for(let B=0,me=lt.length;B<me;B++){let Se=U(lt[B],K[B],tt);We(Se.x,Se.y,-Me),Pe===0&&gt.push(Se)}Pe===0&&ge.push(gt)}}Ae=Os.triangulateShape(re,ge)}let $=Ae.length,he=p+y;for(let re=0;re<F;re++){let ge=d?U(C[re],Q[re],he):C[re];x?(_.copy(T.normals[0]).multiplyScalar(ge.x),w.copy(T.binormals[0]).multiplyScalar(ge.y),E.copy(S[0]).add(_).add(w),We(E.x,E.y,E.z)):We(ge.x,ge.y,0)}for(let re=1;re<=h;re++)for(let ge=0;ge<F;ge++){let fe=d?U(C[ge],Q[ge],he):C[ge];x?(_.copy(T.normals[re]).multiplyScalar(fe.x),w.copy(T.binormals[re]).multiplyScalar(fe.y),E.copy(S[re]).add(_).add(w),We(E.x,E.y,E.z)):We(fe.x,fe.y,u/h*re)}for(let re=m-1;re>=0;re--){let ge=re/m,fe=f*Math.cos(ge*Math.PI/2),Pe=p*Math.sin(ge*Math.PI/2)+y;for(let Me=0,tt=R.length;Me<tt;Me++){let He=U(R[Me],k[Me],Pe);We(He.x,He.y,u+fe)}for(let Me=0,tt=D.length;Me<tt;Me++){let He=D[Me];K=G[Me];for(let nt=0,lt=He.length;nt<lt;nt++){let gt=U(He[nt],K[nt],Pe);x?We(gt.x,gt.y+S[h-1].y,S[h-1].x+fe):We(gt.x,gt.y,u+fe)}}}ce(),ze();function ce(){let re=s.length/3;if(d){let ge=0,fe=F*ge;for(let Pe=0;Pe<$;Pe++){let Me=Ae[Pe];Mt(Me[2]+fe,Me[1]+fe,Me[0]+fe)}ge=h+m*2,fe=F*ge;for(let Pe=0;Pe<$;Pe++){let Me=Ae[Pe];Mt(Me[0]+fe,Me[1]+fe,Me[2]+fe)}}else{for(let ge=0;ge<$;ge++){let fe=Ae[ge];Mt(fe[2],fe[1],fe[0])}for(let ge=0;ge<$;ge++){let fe=Ae[ge];Mt(fe[0]+F*h,fe[1]+F*h,fe[2]+F*h)}}n.addGroup(re,s.length/3-re,0)}function ze(){let re=s.length/3,ge=0;Re(R,ge),ge+=R.length;for(let fe=0,Pe=D.length;fe<Pe;fe++){let Me=D[fe];Re(Me,ge),ge+=Me.length}n.addGroup(re,s.length/3-re,1)}function Re(re,ge){let fe=re.length;for(;--fe>=0;){let Pe=fe,Me=fe-1;Me<0&&(Me=re.length-1);for(let tt=0,He=h+m*2;tt<He;tt++){let nt=F*tt,lt=F*(tt+1),gt=ge+Pe+nt,B=ge+Me+nt,me=ge+Me+lt,Se=ge+Pe+lt;Ke(gt,B,me,Se)}}}function We(re,ge,fe){c.push(re),c.push(ge),c.push(fe)}function Mt(re,ge,fe){et(re),et(ge),et(fe);let Pe=s.length/3,Me=M.generateTopUV(n,s,Pe-3,Pe-2,Pe-1);rt(Me[0]),rt(Me[1]),rt(Me[2])}function Ke(re,ge,fe,Pe){et(re),et(ge),et(Pe),et(ge),et(fe),et(Pe);let Me=s.length/3,tt=M.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);rt(tt[0]),rt(tt[1]),rt(tt[3]),rt(tt[1]),rt(tt[2]),rt(tt[3])}function et(re){s.push(c[re*3+0]),s.push(c[re*3+1]),s.push(c[re*3+2])}function rt(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return u0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new El[s.type]().fromJSON(s)),new i(n,e.options)}},h0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,c),new ae(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],y=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ae(o,1-c),new ae(l,1-u),new ae(d,1-p),new ae(y,1-g)]:[new ae(a,1-c),new ae(h,1-u),new ae(f,1-p),new ae(m,1-g)]}};function u0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var qo=class i extends Fo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Xs=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let M=g*d-o;for(let S=0;S<l;S++){let x=S*u-r;p.push(x,-M,0),y.push(0,0,1),m.push(S/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<a;M++){let S=M+l*g,x=M+l*(g+1),T=M+1+l*(g+1),w=M+1+l*g;f.push(S,x,w),f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Yo=class i extends wt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new N,p=new ae;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let g=0;g<n;g++){let M=g+m,S=M,x=M+n+1,T=M+n+2,w=M+1;a.push(S,x,w),a.push(x,T,w)}}this.setIndex(a),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var $o=class i extends wt{constructor(e=new Ho(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,c=new N,l=new ae,h=new N,u=[],d=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function y(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),M(),g()}function m(S){h=e.getPointAt(S/t,h);let x=o.normals[S],T=o.binormals[S];for(let w=0;w<=s;w++){let _=w/s*Math.PI*2,E=Math.sin(_),L=-Math.cos(_);c.x=L*x.x+E*T.x,c.y=L*x.y+E*T.y,c.z=L*x.z+E*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=t;S++)for(let x=1;x<=s;x++){let T=(s+1)*(S-1)+(x-1),w=(s+1)*S+(x-1),_=(s+1)*S+x,E=(s+1)*(S-1)+x;p.push(T,w,E),p.push(w,_,E)}}function M(){for(let S=0;S<=t;S++)for(let x=0;x<=s;x++)l.x=S/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new El[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function tr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Pf(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Pf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function vn(i){let e={};for(let t=0;t<i.length;t++){let n=tr(i[t]);for(let s in n)e[s]=n[s]}return e}function Pf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function d0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Ip={clone:tr,merge:vn},f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new It().fromArray(s.value);break;case"m3":this.uniforms[n].value=new at().fromArray(s.value);break;case"m4":this.uniforms[n].value=new st().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Tl=class extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ht=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wn=class extends Ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zo=class extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Al=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rl=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ps(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function m0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Lf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function g0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cl=class extends bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wh:r=e,a=2*t-n;break;case Xh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wh:o=e,c=2*n-t;break;case Xh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),y=p*p,m=y*p,g=-d*m+2*d*y-d*p,M=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*y+.5*p,x=f*m-f*y;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+M*o[l+T]+S*o[c+T]+x*o[u+T];return r}},Il=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Pl=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ll=class extends bi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),y=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let y=o[l+p],m=o[c+p],g=f*d+p*2,M=u[g],S=u[g+1],x=e*d+p*2,T=h[x],w=h[x+1],_=x0(n,t,M,T,s);r[p]=Pp(_,y,S,w,m)}return r}};function Pp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function _0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function x0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Pp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=_0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ps(t,this.TimeBufferType),this.values=ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ps(e.times,Array),values:ps(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),xo(e.settings)&&(n.settings={inTangents:ps(e.settings.inTangents,Array),outTangents:ps(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break;case Gh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return ol;case this.InterpolantFactoryMethodBezier:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;xo(this.settings)&&(Nf(this.settings.inTangents,e),Nf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;xo(this.settings)&&(Df(this.settings.inTangents,e),Df(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){it("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){it("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&ig(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){it("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ol,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let y=t[u+p];if(y!==t[d+p]||y!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,xo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Df(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=ks;var $i=class extends Nn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Bs;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Ko.prototype.ValueTypeName="color";var Zi=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};Zi.prototype.ValueTypeName="number";var Nl=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Kt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ki=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}};Ki.prototype.ValueTypeName="quaternion";Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Nn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Bs;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Nn{constructor(e,t,n,s){super(e,t,n,s)}};vs.prototype.ValueTypeName="vector";var Jo=class{constructor(e="",t=-1,n=[],s=dp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(v0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=m0(c);c=Lf(c,1,h),l=Lf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Zi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function y0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zi;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return Ko;case"quaternion":return Ki;case"bool":case"boolean":return $i;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function v0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=y0(i.type);if(i.times===void 0){let n=[],s=[];g0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),xo(i.settings)&&(t.settings={inTangents:ps(i.settings.inTangents,Float32Array),outTangents:ps(i.settings.outTangents,Float32Array)}),t}var xi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Uf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Uf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Uf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Dl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lp=new Dl,Zn=class{constructor(e){this.manager=e!==void 0?e:Lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Zn.DEFAULT_MATERIAL_NAME="__DEFAULT";var zi={},Kh=class extends Error{constructor(e,t){super(e),this.response=t}},ji=class extends Zn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:s});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&$e("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=zi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,y=0,m=new ReadableStream({start(g){M();function M(){u.read().then(({done:S,value:x})=>{if(S)g.close();else{y+=x.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:f});for(let w=0,_=h.length;w<_;w++){let E=h[w];E.onProgress&&E.onProgress(T)}g.enqueue(x),M()}},S=>{g.error(S)})}}});return new Response(m)}else throw new Kh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{xi.add(`file:${e}`,l);let h=zi[e];delete zi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=zi[e];if(h===void 0)throw this.manager.itemError(e),l;delete zi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Mr=new WeakMap,Ul=class extends Zn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Mr.get(o);u===void 0&&(u=[],Mr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Rr("img");function c(){h(),t&&t(this);let u=Mr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Mr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),xi.remove(`image:${e}`);let d=Mr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Mr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var jo=class extends Zn{constructor(e){super(e)}load(e,t,n,s){let r=new an,o=new Ul(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},qs=class extends Ot{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qo=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},kh=new st,Of=new N,Ff=new N,kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Of.setFromMatrixPosition(e.matrixWorld),t.position.copy(Of),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){kh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(kh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ar||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sl=new N,rl=new Kt,_i=new N,ea=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,rl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,rl,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sl,rl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,rl,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new N,Bf=new ae,kf=new ae,Qt=class extends ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Bf,kf),t.subVectors(kf,Bf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jh=class extends kr{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ta=class extends qs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},jh=class extends kr{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}},Ys=class extends qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$s=class extends ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qh=class extends kr{constructor(){super(new $s(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Qh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Wn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zh=new WeakMap,na=class extends Zn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&$e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&$e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{zh.has(o)===!0?(s&&s(zh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return xi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),zh.set(c,l),xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Sr=-90,br=1,zr=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(Sr,br,e,t);s.layers=this.layers,this.add(s);let r=new Qt(Sr,br,e,t);r.layers=this.layers,this.add(r);let o=new Qt(Sr,br,e,t);o.layers=this.layers,this.add(o);let a=new Qt(Sr,br,e,t);a.layers=this.layers,this.add(a);let c=new Qt(Sr,br,e,t);c.layers=this.layers,this.add(c);let l=new Qt(Sr,br,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ol=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Du="\\[\\]\\.:\\/",M0=new RegExp("["+Du+"]","g"),Uu="[^"+Du+"]",S0="[^"+Du.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",Uu),E0=/(WCOD+)?/.source.replace("WCOD",S0),w0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uu),T0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uu),A0=new RegExp("^"+b0+E0+w0+T0+"$"),R0=["material","materials","bones","map"],eu=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(M0,"")}static parseTrackName(e){let t=A0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);R0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;it("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=eu;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _S=new Float32Array(1);var zf=new st,ia=class{constructor(e,t,n=0,s=1/0){this.ray=new yi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zf),this}intersectObject(e,t=!0,n=[]){return tu(e,this,n,t),n.sort(Hf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)tu(e[s],this,n,t);return n.sort(Hf),n}};function Hf(i,e){return i.distance-e.distance}function tu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)tu(r[o],e,t,!0)}}var Hr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var nu=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var sa=class extends oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ou(i,e,t,n){let s=C0(n);switch(t){case vu:return i*e;case Wl:return i*e/s.components*s.byteLength;case Xl:return i*e/s.components*s.byteLength;case Ss:return i*e*2/s.components*s.byteLength;case ql:return i*e*2/s.components*s.byteLength;case Mu:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case Yl:return i*e*4/s.components*s.byteLength;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Jl:return Math.max(i,16)*Math.max(e,8)/4;case $l:case Kl:return Math.max(i,8)*Math.max(e,8)/2;case jl:case Ql:case tc:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ec:case ha:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xc:case yc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ua:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C0(i){switch(i){case Dn:case gu:return{byteLength:1,components:1};case qr:case _u:case ci:return{byteLength:2,components:1};case Gl:case Vl:return{byteLength:2,components:4};case li:case Hl:case Xn:return{byteLength:4,components:1};case xu:case yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function em(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function P0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],y=u[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let y=u[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var L0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,H0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,X0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,q0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,t_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,n_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,b_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,E_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,D_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ex=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ny=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:L0,alphahash_pars_fragment:N0,alphamap_fragment:D0,alphamap_pars_fragment:U0,alphatest_fragment:O0,alphatest_pars_fragment:F0,aomap_fragment:B0,aomap_pars_fragment:k0,batching_pars_vertex:z0,batching_vertex:H0,begin_vertex:G0,beginnormal_vertex:V0,bsdfs:W0,iridescence_fragment:X0,bumpmap_pars_fragment:q0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:K0,color_fragment:J0,color_pars_fragment:j0,color_pars_vertex:Q0,color_vertex:e_,common:t_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:s_,emissivemap_fragment:r_,emissivemap_pars_fragment:o_,colorspace_fragment:a_,colorspace_pars_fragment:l_,envmap_fragment:c_,envmap_common_pars_fragment:h_,envmap_pars_fragment:u_,envmap_pars_vertex:d_,envmap_physical_pars_fragment:b_,envmap_vertex:f_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:__,gradientmap_pars_fragment:x_,lightmap_pars_fragment:y_,lights_lambert_fragment:v_,lights_lambert_pars_fragment:M_,lights_pars_begin:S_,lights_toon_fragment:E_,lights_toon_pars_fragment:w_,lights_phong_fragment:T_,lights_phong_pars_fragment:A_,lights_physical_fragment:R_,lights_physical_pars_fragment:C_,lights_fragment_begin:I_,lights_fragment_maps:P_,lights_fragment_end:L_,lightprobes_pars_fragment:N_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:O_,logdepthbuf_vertex:F_,map_fragment:B_,map_pars_fragment:k_,map_particle_fragment:z_,map_particle_pars_fragment:H_,metalnessmap_fragment:G_,metalnessmap_pars_fragment:V_,morphinstance_vertex:W_,morphcolor_vertex:X_,morphnormal_vertex:q_,morphtarget_pars_vertex:Y_,morphtarget_vertex:$_,normal_fragment_begin:Z_,normal_fragment_maps:K_,normal_pars_fragment:J_,normal_pars_vertex:j_,normal_vertex:Q_,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:sx,opaque_fragment:rx,packing:ox,premultiplied_alpha_fragment:ax,project_vertex:lx,dithering_fragment:cx,dithering_pars_fragment:hx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:dx,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:gx,skinbase_vertex:_x,skinning_pars_vertex:xx,skinning_vertex:yx,skinnormal_vertex:vx,specularmap_fragment:Mx,specularmap_pars_fragment:Sx,tonemapping_fragment:bx,tonemapping_pars_fragment:Ex,transmission_fragment:wx,transmission_pars_fragment:Tx,uv_pars_fragment:Ax,uv_pars_vertex:Rx,uv_vertex:Cx,worldpos_vertex:Ix,background_vert:Px,background_frag:Lx,backgroundCube_vert:Nx,backgroundCube_frag:Dx,cube_vert:Ux,cube_frag:Ox,depth_vert:Fx,depth_frag:Bx,distance_vert:kx,distance_frag:zx,equirect_vert:Hx,equirect_frag:Gx,linedashed_vert:Vx,linedashed_frag:Wx,meshbasic_vert:Xx,meshbasic_frag:qx,meshlambert_vert:Yx,meshlambert_frag:$x,meshmatcap_vert:Zx,meshmatcap_frag:Kx,meshnormal_vert:Jx,meshnormal_frag:jx,meshphong_vert:Qx,meshphong_frag:ey,meshphysical_vert:ty,meshphysical_frag:ny,meshtoon_vert:iy,meshtoon_frag:sy,points_vert:ry,points_frag:oy,shadow_vert:ay,shadow_frag:ly,sprite_vert:cy,sprite_frag:hy},De={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ai={basic:{uniforms:vn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:vn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:vn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:vn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:vn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ze(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:vn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:vn([De.points,De.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:vn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:vn([De.common,De.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:vn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:vn([De.sprite,De.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:vn([De.common,De.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:vn([De.lights,De.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ai.physical={uniforms:vn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};var wc={r:0,b:0,g:0},uy=new st,tm=new at;tm.set(-1,0,0,0,1,0,0,0,1);function dy(i,e,t,n,s,r){let o=new Ze(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let x=M.backgroundBlurriness>0;S=e.get(S,x)}return S}function p(M){let S=!1,x=f(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,S){let x=f(S);x&&x.isCubeTexture?(l===void 0&&(l=new bt(new Ft(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:tr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tm),l.material.toneMapped=dt.getTransfer(x.colorSpace)!==Ct,(h!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new bt(new Xs(2,2),new Si({name:"BackgroundMaterial",uniforms:tr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==Ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,S){M.getRGB(wc,Nu(i)),t.buffers.color.setClear(wc.r,wc.g,wc.b,S,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:y,dispose:g}}function fy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(D,z,Y,P,R){let U=!1,F=u(D,P,Y,z);r!==F&&(r=F,l(r.object)),U=f(D,P,Y,R),U&&p(D,P,Y,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(D,z,Y,P),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,z,Y,P){let R=P.wireframe===!0,U=n[z.id];U===void 0&&(U={},n[z.id]=U);let F=D.isInstancedMesh===!0?D.id:0,q=U[F];q===void 0&&(q={},U[F]=q);let k=q[Y.id];k===void 0&&(k={},q[Y.id]=k);let G=k[R];return G===void 0&&(G=d(c()),k[R]=G),G}function d(D){let z=[],Y=[],P=[];for(let R=0;R<t;R++)z[R]=0,Y[R]=0,P[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,z,Y,P){let R=r.attributes,U=z.attributes,F=0,q=Y.getAttributes();for(let k in q)if(q[k].location>=0){let K=R[k],Q=U[k];if(Q===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),K===void 0||K.attribute!==Q||Q&&K.data!==Q.data)return!0;F++}return r.attributesNum!==F||r.index!==P}function p(D,z,Y,P){let R={},U=z.attributes,F=0,q=Y.getAttributes();for(let k in q)if(q[k].location>=0){let K=U[k];K===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));let Q={};Q.attribute=K,K&&K.data&&(Q.data=K.data),R[k]=Q,F++}r.attributes=R,r.attributesNum=F,r.index=P}function y(){let D=r.newAttributes;for(let z=0,Y=D.length;z<Y;z++)D[z]=0}function m(D){g(D,0)}function g(D,z){let Y=r.newAttributes,P=r.enabledAttributes,R=r.attributeDivisors;Y[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),R[D]!==z&&(i.vertexAttribDivisor(D,z),R[D]=z)}function M(){let D=r.newAttributes,z=r.enabledAttributes;for(let Y=0,P=z.length;Y<P;Y++)z[Y]!==D[Y]&&(i.disableVertexAttribArray(Y),z[Y]=0)}function S(D,z,Y,P,R,U,F){F===!0?i.vertexAttribIPointer(D,z,Y,R,U):i.vertexAttribPointer(D,z,Y,P,R,U)}function x(D,z,Y,P){y();let R=P.attributes,U=Y.getAttributes(),F=z.defaultAttributeValues;for(let q in U){let k=U[q];if(k.location>=0){let G=R[q];if(G===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),G!==void 0){let K=G.normalized,Q=G.itemSize,Ae=e.get(G);if(Ae===void 0)continue;let $=Ae.buffer,he=Ae.type,ce=Ae.bytesPerElement,ze=he===i.INT||he===i.UNSIGNED_INT||G.gpuType===Hl;if(G.isInterleavedBufferAttribute){let Re=G.data,We=Re.isInterleavedBuffer===!0?Re.stride:Re.itemSize,Mt=G.offset;if(Re.isInstancedInterleavedBuffer||Re.isInstancedBufferAttribute){for(let Ke=0;Ke<k.locationSize;Ke++)g(k.location+Ke,Re.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ke=0;Ke<k.locationSize;Ke++)m(k.location+Ke);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Ke=0;Ke<k.locationSize;Ke++)S(k.location+Ke,Q/k.locationSize,he,K,We*ce,(Mt+Q/k.locationSize*Ke)*ce,ze)}else{if(G.isInstancedBufferAttribute){for(let Re=0;Re<k.locationSize;Re++)g(k.location+Re,G.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Re=0;Re<k.locationSize;Re++)m(k.location+Re);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Re=0;Re<k.locationSize;Re++)S(k.location+Re,Q/k.locationSize,he,K,Q*ce,Q/k.locationSize*Re*ce,ze)}}else if(F!==void 0){let K=F[q];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(k.location,K);break;case 3:i.vertexAttrib3fv(k.location,K);break;case 4:i.vertexAttrib4fv(k.location,K);break;default:i.vertexAttrib1fv(k.location,K)}}}}M()}function T(){L();for(let D in n){let z=n[D];for(let Y in z){let P=z[Y];for(let R in P){let U=P[R];for(let F in U)h(U[F].object),delete U[F];delete P[R]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let z=n[D.id];for(let Y in z){let P=z[Y];for(let R in P){let U=P[R];for(let F in U)h(U[F].object),delete U[F];delete P[R]}}delete n[D.id]}function _(D){for(let z in n){let Y=n[z];for(let P in Y){let R=Y[P];if(R[D.id]===void 0)continue;let U=R[D.id];for(let F in U)h(U[F].object),delete U[F];delete R[D.id]}}}function E(D){for(let z in n){let Y=n[z],P=D.isInstancedMesh===!0?D.id:0,R=Y[P];if(R!==void 0){for(let U in R){let F=R[U];for(let q in F)h(F[q].object),delete F[q];delete R[U]}delete Y[P],Object.keys(Y).length===0&&delete n[z]}}}function L(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function py(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function my(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==yn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let E=_===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Dn&&_!==Xn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&($e("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,maxSamples:T,samples:w}}function gy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Hn,a=new at,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,S=M*4,x=g.clippingState||null;c.value=x,x=h(p,d,S,f);for(let T=0;T!==S;++T)x[T]=t[T];g.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,p!==!0||m===null){let g=f+y*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,x=f;S!==y;++S,x+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var ga=class extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Do(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ft(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Ks});r.uniforms.tEquirect.value=t;let o=new bt(s,r),a=t.minFilter;return t.minFilter===xn&&(t.minFilter=Bt),new zr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Np=256,_y=3,xy=20,nm=256,im=16,yy=3,vy=new N,My=new Ze,Zr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zr(1,10,null),this._boxMesh=new bt(new Ft(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=vy}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(My));let m=new zr(n,s,h);return m.position.copy(a),m.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=p,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Np,Cu(e))}_fromTexture(e,t){e.mapping===js||e.mapping===Wr?this._setSize(e.image.length===0?Np:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Dp(e,!1,!1),n=Math.log2(e)-_y;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Dp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===js||e.mapping===Wr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Up()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Sy(),this._integrationMaterial=by());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/im);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-yy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(nm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ey());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Dp(i,e,t){return new ga(i,{minFilter:xn,generateMipmaps:e,type:ci,colorSpace:un,depthBuffer:t})}function _a(i,e,t){return new Si({name:i,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:fn,blending:Ks,depthTest:!1,depthWrite:!1})}function Sy(){return _a("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${nm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function by(){return _a("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:im}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ey(){return _a("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${xy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Up(){return _a("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Op(){return _a("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function wy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Bl||f===kl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let y=new ga(p.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Bl||f===kl,y=f===js||f===Wr;if(p||y){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Zr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return p&&M&&M.height>0||y&&M&&c(M)?(n===null&&(n=new Zr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Bl?d.mapping=js:f===kl&&(d.mapping=Wr),d}function c(d){let f=0,p=6;for(let y=0;y<p;y++)d[y]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ty(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Ay(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let y=r.get(p);y&&(e.remove(y),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(p){let y=p.attributes;for(let m in y)e.update(y[m],i.ARRAY_BUFFER)}function u(p){let y=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let M=y!==null?y.array.length:m.array.length/3-1,S=m.count>=65535?Ro:Ao,x=new S(Math.ceil(M/3)*6,1),T=x.array;if(y!==null){let _=y.array;g=y.version;for(let E=0,L=0;E<M;E+=3){let C=_[E+0],D=_[E+1],z=_[E+2];T[L++]=C,T[L++]=D,T[L++]=D,T[L++]=z,T[L++]=z,T[L++]=C}}else{g=m.version;for(let _=0,E=0;_<M;_+=3){let L=_+0,C=_+1,D=_+2;T[E++]=L,T[E++]=C,T[E++]=C,T[E++]=D,T[E++]=D,T[E++]=L}}x.version=g;let w=r.get(p);w&&e.remove(w),r.set(p,x)}function d(p){let y=r.get(p);if(y){let m=p.index;m!==null&&y.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let y=s[p].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function Ry(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Cy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Iy(i,e,t){let n=new WeakMap,s=new It;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let L=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),y===!0&&(S=3);let x=a.attributes.position.count*S,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*T*4*u),_=new wo(w,x,T,u);_.type=Xn,_.needsUpdate=!0;let E=S*4;for(let C=0;C<u;C++){let D=m[C],z=g[C],Y=M[C],P=x*T*4*C;for(let R=0;R<D.count;R++){let U=R*E;f===!0&&(s.fromBufferAttribute(D,R),w[P+U+0]=s.x,w[P+U+1]=s.y,w[P+U+2]=s.z,w[P+U+3]=0),p===!0&&(s.fromBufferAttribute(z,R),w[P+U+4]=s.x,w[P+U+5]=s.y,w[P+U+6]=s.z,w[P+U+7]=0),y===!0&&(s.fromBufferAttribute(Y,R),w[P+U+8]=s.x,w[P+U+9]=s.y,w[P+U+10]=s.z,w[P+U+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new ae(x,T)},n.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Py(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Ly={[cu]:"LINEAR_TONE_MAPPING",[hu]:"REINHARD_TONE_MAPPING",[uu]:"CINEON_TONE_MAPPING",[ra]:"ACES_FILMIC_TONE_MAPPING",[fu]:"AGX_TONE_MAPPING",[pu]:"NEUTRAL_TONE_MAPPING",[du]:"CUSTOM_TONE_MAPPING"};function Ny(i,e,t,n,s,r){let o=new Gn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new wt;h.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ut([0,2,0,0,2,0],2));let u=new Tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new bt(h,u),f=new $s(-1,1,1,-1,0,1),p=null,y=null,m=!1,g,M=null,S=[],x=!1;this.setSize=function(T,w){o.setSize(T,w),a!==null&&a.setSize(T,w),c!==null&&c.setSize(T,w);for(let _=0;_<S.length;_++){let E=S[_];E.setSize&&E.setSize(T,w)}},this.setEffects=function(T){S=T,x=S.length>0&&S[0].isRenderPass===!0;let w=o.width,_=o.height;S.length>0&&a===null&&(a=new Gn(w,_,{type:ci,depthBuffer:!1,stencilBuffer:!1}),c=new Gn(w,_,{type:ci,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&S.some(L=>L.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&l===null&&(l=new Xi(w,_),r===!0&&(l.format=es,l.type=er)),o.dispose(),o.depthTexture=E?l:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let L=0;L<S.length;L++){let C=S[L];C.setSize&&C.setSize(w,_),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(T,w){if(m||T.toneMapping===wi&&S.length===0)return!1;if(M=w,w!==null){let _=w.width,E=w.height;(o.width!==_||o.height!==E)&&this.setSize(_,E)}return x===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=wi,!0},this.hasRenderPass=function(){return x},this.end=function(T,w){T.toneMapping=g,m=!0;let _=o,E=a;for(let L=0;L<S.length;L++){let C=S[L];C.enabled!==!1&&(C.render(T,E,_,w),C.needsSwap!==!1&&(_=E,E=E===a?c:a))}if(p!==T.outputColorSpace||y!==T.toneMapping){p=T.outputColorSpace,y=T.toneMapping,u.defines={},dt.getTransfer(p)===Ct&&(u.defines.SRGB_TRANSFER="");let L=Ly[y];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(M),T.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var sm=new an,rm=new Xi(1,1),om=new Uo(1),am=new wo,lm=new _l,cm=new Do,Fp=[],Bp=[],kp=new Float32Array(16),zp=new Float32Array(9),Hp=new Float32Array(4);function Kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fp[s];if(r===void 0&&(r=new Float32Array(s),Fp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rc(i,e){let t=Bp[e];t===void 0&&(t=new Int32Array(e),Bp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function By(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Hp.set(n),i.uniformMatrix2fv(this.addr,!1,Hp),tn(t,n)}}function ky(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;zp.set(n),i.uniformMatrix3fv(this.addr,!1,zp),tn(t,n)}}function zy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;kp.set(n),i.uniformMatrix4fv(this.addr,!1,kp),tn(t,n)}}function Hy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function Xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function Cc(i){return i.version===0&&(i.compareFunction=wu,i.needsUpdate=!0),i}function Zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Cc(rm):r=sm,t.setTexture2D(e||r,s)}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||lm,s)}function Jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Cc(om):r=cm,t.setTextureCube(e||r,s)}function jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||am,s)}function Qy(i){switch(i){case 5126:return Dy;case 35664:return Uy;case 35665:return Oy;case 35666:return Fy;case 35674:return By;case 35675:return ky;case 35676:return zy;case 5124:case 35670:return Hy;case 35667:case 35671:return Gy;case 35668:case 35672:return Vy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return qy;case 36295:return Yy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return jy}}function ev(i,e){i.uniform1fv(this.addr,e)}function tv(i,e){let t=Kr(e,this.size,2);i.uniform2fv(this.addr,t)}function nv(i,e){let t=Kr(e,this.size,3);i.uniform3fv(this.addr,t)}function iv(i,e){let t=Kr(e,this.size,4);i.uniform4fv(this.addr,t)}function sv(i,e){let t=Kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rv(i,e){let t=Kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ov(i,e){let t=Kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function av(i,e){i.uniform1iv(this.addr,e)}function lv(i,e){i.uniform2iv(this.addr,e)}function cv(i,e){i.uniform3iv(this.addr,e)}function hv(i,e){i.uniform4iv(this.addr,e)}function uv(i,e){i.uniform1uiv(this.addr,e)}function dv(i,e){i.uniform2uiv(this.addr,e)}function fv(i,e){i.uniform3uiv(this.addr,e)}function pv(i,e){i.uniform4uiv(this.addr,e)}function mv(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Cc(rm):o=sm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function gv(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||lm,r[o])}function _v(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Cc(om):o=cm;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function xv(i,e,t){let n=this.cache,s=e.length,r=Rc(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||am,r[o])}function yv(i){switch(i){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return ov;case 5124:case 35670:return av;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}var ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qy(t.type)}},zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yv(t.type)}},Hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Fu=/(\w+)(\])?(\[|\.)?/g;function Gp(i,e){i.seq.push(e),i.map[e.id]=e}function vv(i,e,t){let n=i.name,s=n.length;for(Fu.lastIndex=0;;){let r=Fu.exec(n),o=Fu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Gp(t,l===void 0?new ku(a,i,e):new zu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Hu(a),Gp(t,u)),t=u}}}var $r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);vv(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Vp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Mv=37297,Sv=0;function bv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Wp=new at;function Ev(i){dt._getMatrix(Wp,dt.workingColorSpace,i);let e=`mat3( ${Wp.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case bo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+bv(i.getShaderSource(e),a)}else return r}function wv(i,e){let t=Ev(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Tv={[cu]:"Linear",[hu]:"Reinhard",[uu]:"Cineon",[ra]:"ACESFilmic",[fu]:"AgX",[pu]:"Neutral",[du]:"Custom"};function Av(i,e){let t=Tv[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tc=new N;function Rv(){dt.getLuminanceCoefficients(Tc);let i=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function Iv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ma(i){return i!==""}function qp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Yp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(i){return i.replace(Lv,Nv)}function Nv(i,e){let t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Gu(t)}var Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(i){return i.replace(Dv,Uv)}function Uv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ov={[Zs]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function Fv(i){return Ov[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Bv={[Wr]:"ENVMAP_MODE_REFRACTION"};function kv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zv={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[cp]:"ENVMAP_BLENDING_MIX",[hp]:"ENVMAP_BLENDING_ADD"};function Hv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zv[i.combine]||"ENVMAP_BLENDING_NONE"}function Gv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Fv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=kv(t),u=Hv(t),d=Cv(t),f=Iv(r),p=s.createProgram(),y,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ma).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ma).join(`
`),m.length>0&&(m+=`
`)):(y=[Zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),m=[Zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?pt.tonemapping_pars_fragment:"",t.toneMapping!==wi?Av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,wv("linearToOutputTexel",t.outputColorSpace),Rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),o=Gu(o),o=qp(o,t),o=Yp(o,t),a=Gu(a),a=qp(a,t),a=Yp(a,t),o=$p(o),a=$p(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=g+y+o,S=g+m+a,x=Vp(s,s.VERTEX_SHADER,M),T=Vp(s,s.FRAGMENT_SHADER,S);s.attachShader(p,x),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(x)||"",Y=s.getShaderInfoLog(T)||"",P=D.trim(),R=z.trim(),U=Y.trim(),F=!0,q=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,x,T);else{let k=Xp(s,x,"vertex"),G=Xp(s,T,"fragment");it("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+k+`
`+G)}else P!==""?$e("WebGLProgram: Program Info Log:",P):(R===""||U==="")&&(q=!1);q&&(C.diagnostics={runnable:F,programLog:P,vertexShader:{log:R,prefix:y},fragmentShader:{log:U,prefix:m}})}s.deleteShader(x),s.deleteShader(T),_=new $r(s,p),E=Pv(s,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,Mv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=T,this}var Vv=0,Vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wu(e),t.set(e,n)),n}},Wu=class{constructor(e){this.id=Vv++,this.code=e,this.usedTimes=0}};function Wv(i){return i===Ss||i===ha||i===ua}function Xv(i,e,t,n,s,r){let o=new Pr,a=new Vu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,E,L,C,D,z){let Y=C.fog,P=D.geometry,R=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||R,U),q=d[_.type],k=n.precision;_.precision!==null&&(k=n.getMaxPrecision(_.precision),k!==_.precision&&$e("WebGLProgram.getParameters:",_.precision,"not supported, using",k,"instead."));let G=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,K=G!==void 0?G.length:0,Q=0;P.morphAttributes.position!==void 0&&(Q=1),P.morphAttributes.normal!==void 0&&(Q=2),P.morphAttributes.color!==void 0&&(Q=3);let Ae,$,he,ce;if(q){let Le=Ai[q];Ae=Le.vertexShader,$=Le.fragmentShader}else{Ae=_.vertexShader,$=_.fragmentShader;let Le=a.getVertexShaderStage(_),Et=a.getFragmentShaderStage(_);a.update(_,Le,Et),he=Le.id,ce=Et.id}let ze=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),We=D.isInstancedMesh===!0,Mt=D.isBatchedMesh===!0,Ke=!!_.map,et=!!_.matcap,rt=!!F,re=rt&&F.isPMREMTexture===!0,ge=!!_.aoMap,fe=!!_.lightMap,Pe=!!_.bumpMap&&_.wireframe===!1,Me=!!_.normalMap,tt=!!_.displacementMap,He=!!_.emissiveMap,nt=!!_.metalnessMap,lt=!!_.roughnessMap,gt=_.anisotropy>0,B=_.clearcoat>0,me=_.diffuseRoughness>0,Se=_.dispersion>0,Ne=_.retroreflectivity>0,oe=_.iridescence>0,Je=_.sheen>0,Ce=_.transmission>0,_e=gt&&!!_.anisotropyMap,A=B&&!!_.clearcoatMap,b=B&&!!_.clearcoatNormalMap,W=B&&!!_.clearcoatRoughnessMap,le=me&&!!_.diffuseRoughnessMap,se=oe&&!!_.iridescenceMap,pe=oe&&!!_.iridescenceThicknessMap,we=Je&&!!_.sheenColorMap,ee=Je&&!!_.sheenRoughnessMap,ie=!!_.specularMap,ye=!!_.specularColorMap,O=!!_.specularIntensityMap,ne=Ce&&!!_.transmissionMap,j=Ce&&!!_.thicknessMap,Te=!!_.gradientMap,xe=!!_.alphaMap,be=_.alphaTest>0,Xe=!!_.alphaHash,ot=!!_.extensions,de=wi;_.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(de=i.toneMapping);let je=re?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,ct={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Ae,fragmentShader:$,defines:_.defines,customVertexShaderID:he,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:k,batching:Mt,batchingColor:Mt&&D._colorsTexture!==null,instancing:We,instancingColor:We&&D.instanceColor!==null,instancingMorph:We&&D.morphTexture!==null,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ke,matcap:et,envMap:rt,envMapMode:rt&&F.mapping,envMapPMREM:re,envMapMaxLod:re?je.length-1:null,envMapSize:re?je[0].width:null,aoMap:ge,lightMap:fe,bumpMap:Pe,normalMap:Me,displacementMap:tt,emissiveMap:He,normalMapObjectSpace:Me&&_.normalMapType===pp,normalMapTangentSpace:Me&&_.normalMapType===fa,packedNormalMap:Me&&_.normalMapType===fa&&Wv(_.normalMap.format),metalnessMap:nt,roughnessMap:lt,anisotropy:gt,anisotropyMap:_e,clearcoat:B,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:W,diffuseRoughness:me,diffuseRoughnessMap:le,dispersion:Se,retroreflection:Ne,iridescence:oe,iridescenceMap:se,iridescenceThicknessMap:pe,sheen:Je,sheenColorMap:we,sheenRoughnessMap:ee,specularMap:ie,specularColorMap:ye,specularIntensityMap:O,transmission:Ce,transmissionMap:ne,thicknessMap:j,gradientMap:Te,opaque:_.transparent===!1&&_.blending===Vr&&_.alphaToCoverage===!1,alphaMap:xe,alphaTest:be,alphaHash:Xe,combine:_.combine,mapUv:Ke&&f(_.map.channel),aoMapUv:ge&&f(_.aoMap.channel),lightMapUv:fe&&f(_.lightMap.channel),bumpMapUv:Pe&&f(_.bumpMap.channel),normalMapUv:Me&&f(_.normalMap.channel),displacementMapUv:tt&&f(_.displacementMap.channel),emissiveMapUv:He&&f(_.emissiveMap.channel),metalnessMapUv:nt&&f(_.metalnessMap.channel),roughnessMapUv:lt&&f(_.roughnessMap.channel),anisotropyMapUv:_e&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:se&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:we&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&f(_.sheenRoughnessMap.channel),specularMapUv:ie&&f(_.specularMap.channel),specularColorMapUv:ye&&f(_.specularColorMap.channel),specularIntensityMapUv:O&&f(_.specularIntensityMap.channel),transmissionMapUv:ne&&f(_.transmissionMap.channel),thicknessMapUv:j&&f(_.thicknessMap.channel),alphaMapUv:xe&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Me||gt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ke||xe),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Re,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Q,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.filter(Le=>Le.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Ke&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===Ct,decodeVideoTextureEmissive:He&&_.emissiveMap.isVideoTexture===!0&&dt.getTransfer(_.emissiveMap.colorSpace)===Ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Kn,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ot&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&_.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function y(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)E.push(L),E.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(m(E,_),g(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function g(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let E=d[_.type],L;if(E){let C=Ai[E];L=Ip.clone(C.uniforms)}else L=_.uniforms;return L}function S(_,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new Gv(i,E,_,s),l.push(L),h.set(E,L)),L}function x(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function w(){a.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:M,acquireProgram:S,releaseProgram:x,releaseShaderCache:T,programs:l,dispose:w}}function qv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Yv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,y,m,g){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:g},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=o(d),M.groupOrder=y,M.renderOrder=d.renderOrder,M.z=m,M.group=g),e++,M}function c(d,f,p,y,m,g,M){M.reversedDepth===!0&&(m=-m);let S=a(d,f,p,y,m,g);p.transmission>0?n.push(S):p.transparent===!0?s.push(S):t.push(S)}function l(d,f,p,y,m,g){let M=a(d,f,p,y,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||Yv),n.length>1&&n.sort(f||Kp),s.length>1&&s.sort(f||Kp)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function $v(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Jp,i.set(n,[o])):s>=r.length?(o=new Jp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ze};break;case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Kv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Jv=0;function jv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qv(i){let e=new Zv,t=Kv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new st,o=new st;function a(l){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,M=0,S=0,x=0,T=0,w=0,_=0,E=0,L=0,C=0;l.sort(jv);for(let z=0,Y=l.length;z<Y;z++){let P=l[z],R=P.color,U=P.intensity,F=P.distance,q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ss?q=P.shadow.map.texture:q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=R.r*U,u+=R.g*U,d+=R.b*U;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],U);C++}else if(P.isSunLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[p]=K,n.sunShadowMap[p]=q;let Q=G.getViewportCount();for(let Ae=0;Ae<Q;Ae++)n.sunShadowMatrix[y+Ae]=G.getMatrix(Ae),n.sunShadowCascade[y+Ae]=G._cascadeData[Ae];y+=Q,p++}n.sun[f]=k,f++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=P.shadow.matrix,T++}n.directional[m]=k,m++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(R).multiplyScalar(U),k.distance=F,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[M]=k;let G=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,G.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[M]=G.matrix,P.castShadow){let K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=q,_++}M++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(R).multiplyScalar(U),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[S]=k,S++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let G=P.shadow,K=t.get(P);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=k,g++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(U),k.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[x]=k,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==M||D.rectAreaLength!==S||D.hemiLength!==x||D.numSunShadows!==p||D.numDirectionalShadows!==T||D.numPointShadows!==w||D.numSpotShadows!==_||D.numSpotMaps!==E||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=S,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-L,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=M,D.rectAreaLength=S,D.hemiLength=x,D.numSunShadows=p,D.numDirectionalShadows=T,D.numPointShadows=w,D.numSpotShadows=_,D.numSpotMaps=E,D.numLightProbes=C,n.version=Jv++)}function c(l,h){let u=0,d=0,f=0,p=0,y=0,m=0,g=h.matrixWorldInverse;for(let M=0,S=l.length;M<S;M++){let x=l[M];if(x.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(g),u++}else if(x.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(x.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let T=n.rectArea[y];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function jp(i){let e=new Qv(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function eM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new jp(i),e.set(s,[a])):r>=o.length?(a=new jp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,iM=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],sM=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Qp=new st,pa=new N,Bu=new N;function rM(i,e,t){let n=new xs,s=new ae,r=new ae,o=new It,a=new Al,c=new Rl,l={},h=t.maxTextureSize,u={[Ei]:fn,[fn]:Ei,[Kn]:Kn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:tM,fragmentShader:nM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new wt;p.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let g=this.type;this.render=function(w,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Wf&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zs);let L=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ks),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Y=g!==this.type;Y&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(R=>R.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,R=w.length;P<R;P++){let U=w[P],F=U.shadow;if(F===void 0){$e("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let q=F.getFrameExtents();s.multiply(q),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,F.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=k,F.map===null||Y===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Gr){if(U.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Gn(s.x,s.y,{format:Ss,type:ci,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new Xi(s.x,s.y,Xn),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=Gi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Yt,F.map.depthTexture.magFilter=Yt}else U.isPointLight?(F.map=new ga(s.x),F.map.depthTexture=new Uo(s.x,li)):(F.map=new Gn(s.x,s.y),F.map.depthTexture=new Xi(s.x,s.y,li)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=Gi,this.type===Zs?(F.map.depthTexture.compareFunction=k?Eu:bu,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Yt,F.map.depthTexture.magFilter=Yt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let G=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();U.isPointLight!==!0&&F.updateMatrices(U,E);let K=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:E.layers;for(let Q=0;Q<G;Q++){let Ae=F.getCamera(Q);if(U.isPointLight){let $=F.camera,he=F.matrix,ce=U.distance||$.far;ce!==$.far&&($.far=ce,$.updateProjectionMatrix()),pa.setFromMatrixPosition(U.matrixWorld),$.position.copy(pa),Bu.copy($.position),Bu.add(iM[Q]),$.up.copy(sM[Q]),$.lookAt(Bu),$.updateMatrixWorld(),he.makeTranslation(-pa.x,-pa.y,-pa.z),Qp.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Qp,$.coordinateSystem,$.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(F.map),i.clear());let $=F.getViewport(Q);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),z.viewport(o)}n=F.getFrustum(Q),x(_,E,Ae,U,K,this.type)}F.isPointLightShadow!==!0&&this.type===Gr&&M(F,E),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(L,C,D)};function M(w,_){let E=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Gn(s.x,s.y,{format:Ss,type:ci}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,E,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,E,f,y,null)}function S(w,_,E,L){let C=null,D=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=E.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=C.uuid,Y=_.uuid,P=l[z];P===void 0&&(P={},l[z]=P);let R=P[Y];R===void 0&&(R=C.clone(),P[Y]=R,_.addEventListener("dispose",T)),C=R}if(C.visible=_.visible,C.wireframe=_.wireframe,L===Gr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=i.properties.get(C);z.light=E}return C}function x(w,_,E,L,C,D){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Gr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let P=e.update(w),R=w.material;if(Array.isArray(R)){let U=P.groups;for(let F=0,q=U.length;F<q;F++){let k=U[F],G=R[k.materialIndex];if(G&&G.visible){let K=S(w,G,L,D);w.onBeforeShadow(i,w,_,E,P,K,k),i.renderBufferDirect(E,null,P,K,w,k),w.onAfterShadow(i,w,_,E,P,K,k)}}}else if(R.visible){let U=S(w,R,L,D);w.onBeforeShadow(i,w,_,E,P,U,null),i.renderBufferDirect(E,null,P,U,w,null),w.onAfterShadow(i,w,_,E,P,U,null)}}let Y=w.children;for(let P=0,R=Y.length;P<R;P++)x(Y[P],_,E,L,C,D)}function T(w){w.target.removeEventListener("dispose",T);for(let E in l){let L=l[E],C=w.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function oM(i,e){function t(){let O=!1,ne=new It,j=null,Te=new It(0,0,0,0);return{setMask:function(xe){j!==xe&&!O&&(i.colorMask(xe,xe,xe,xe),j=xe)},setLocked:function(xe){O=xe},setClear:function(xe,be,Xe,ot,de){de===!0&&(xe*=ot,be*=ot,Xe*=ot),ne.set(xe,be,Xe,ot),Te.equals(ne)===!1&&(i.clearColor(xe,be,Xe,ot),Te.copy(ne))},reset:function(){O=!1,j=null,Te.set(-1,0,0,0)}}}function n(){let O=!1,ne=!1,j=null,Te=null,xe=null;return{setReversed:function(be){if(ne!==be){let Xe=e.get("EXT_clip_control");be?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ne=be;let ot=xe;xe=null,this.setClear(ot)}},getReversed:function(){return ne},setTest:function(be){be?Re(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(be){j!==be&&!O&&(i.depthMask(be),j=be)},setFunc:function(be){if(ne&&(be=Ep[be]),Te!==be){switch(be){case ll:i.depthFunc(i.NEVER);break;case cl:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case ul:i.depthFunc(i.EQUAL);break;case dl:i.depthFunc(i.GEQUAL);break;case fl:i.depthFunc(i.GREATER);break;case pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=be}},setLocked:function(be){O=be},setClear:function(be){xe!==be&&(xe=be,ne&&(be=1-be),i.clearDepth(be))},reset:function(){O=!1,j=null,Te=null,xe=null,ne=!1}}}function s(){let O=!1,ne=null,j=null,Te=null,xe=null,be=null,Xe=null,ot=null,de=null;return{setTest:function(je){O||(je?Re(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(je){ne!==je&&!O&&(i.stencilMask(je),ne=je)},setFunc:function(je,ct,Le){(j!==je||Te!==ct||xe!==Le)&&(i.stencilFunc(je,ct,Le),j=je,Te=ct,xe=Le)},setOp:function(je,ct,Le){(be!==je||Xe!==ct||ot!==Le)&&(i.stencilOp(je,ct,Le),be=je,Xe=ct,ot=Le)},setLocked:function(je){O=je},setClear:function(je){de!==je&&(i.clearStencil(je),de=je)},reset:function(){O=!1,ne=null,j=null,Te=null,xe=null,be=null,Xe=null,ot=null,de=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],y=null,m=!1,g=null,M=null,S=null,x=null,T=null,w=null,_=null,E=new Ze(0,0,0),L=0,C=!1,D=null,z=null,Y=null,P=null,R=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=q>=2);let G=null,K={},Q=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),$=new It().fromArray(Q),he=new It().fromArray(Ae);function ce(O,ne,j,Te){let xe=new Uint8Array(4),be=i.createTexture();i.bindTexture(O,be),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<j;Xe++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ne+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return be}let ze={};ze[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),ze[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ze[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Re(i.DEPTH_TEST),o.setFunc(wr),Pe(!1),Me(iu),Re(i.CULL_FACE),ge(Ks);function Re(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function We(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Mt(O,ne){return d[O]!==ne?(i.bindFramebuffer(O,ne),d[O]=ne,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ke(O,ne){let j=p,Te=!1;if(O){j=f.get(ne),j===void 0&&(j=[],f.set(ne,j));let xe=O.textures;if(j.length!==xe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Xe=xe.length;be<Xe;be++)j[be]=i.COLOR_ATTACHMENT0+be;j.length=xe.length,Te=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Te=!0);Te&&i.drawBuffers(j)}function et(O){return y!==O?(i.useProgram(O),y=O,!0):!1}let rt={[Js]:i.FUNC_ADD,[qf]:i.FUNC_SUBTRACT,[Yf]:i.FUNC_REVERSE_SUBTRACT};rt[$f]=i.MIN,rt[Zf]=i.MAX;let re={[Kf]:i.ZERO,[Jf]:i.ONE,[jf]:i.SRC_COLOR,[au]:i.SRC_ALPHA,[sp]:i.SRC_ALPHA_SATURATE,[np]:i.DST_COLOR,[ep]:i.DST_ALPHA,[Qf]:i.ONE_MINUS_SRC_COLOR,[lu]:i.ONE_MINUS_SRC_ALPHA,[ip]:i.ONE_MINUS_DST_COLOR,[tp]:i.ONE_MINUS_DST_ALPHA,[rp]:i.CONSTANT_COLOR,[op]:i.ONE_MINUS_CONSTANT_COLOR,[ap]:i.CONSTANT_ALPHA,[lp]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(O,ne,j,Te,xe,be,Xe,ot,de,je){if(O===Ks){m===!0&&(We(i.BLEND),m=!1);return}if(m===!1&&(Re(i.BLEND),m=!0),O!==Xf){if(O!==g||je!==C){if((M!==Js||T!==Js)&&(i.blendEquation(i.FUNC_ADD),M=Js,T=Js),je)switch(O){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:it("WebGLState: Invalid blending: ",O);break}else switch(O){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ru:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",O);break}S=null,x=null,w=null,_=null,E.set(0,0,0),L=0,g=O,C=je}return}xe=xe||ne,be=be||j,Xe=Xe||Te,(ne!==M||xe!==T)&&(i.blendEquationSeparate(rt[ne],rt[xe]),M=ne,T=xe),(j!==S||Te!==x||be!==w||Xe!==_)&&(i.blendFuncSeparate(re[j],re[Te],re[be],re[Xe]),S=j,x=Te,w=be,_=Xe),(ot.equals(E)===!1||de!==L)&&(i.blendColor(ot.r,ot.g,ot.b,de),E.copy(ot),L=de),g=O,C=!1}function fe(O,ne){O.side===Kn?We(i.CULL_FACE):Re(i.CULL_FACE);let j=O.side===fn;ne&&(j=!j),Pe(j),O.blending===Vr&&O.transparent===!1?ge(Ks):ge(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Te=O.stencilWrite;a.setTest(Te),Te&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),He(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(O){D!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),D=O)}function Me(O){O!==Gf?(Re(i.CULL_FACE),O!==z&&(O===iu?i.cullFace(i.BACK):O===Vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),z=O}function tt(O){O!==Y&&(F&&i.lineWidth(O),Y=O)}function He(O,ne,j){O?(Re(i.POLYGON_OFFSET_FILL),(P!==ne||R!==j)&&(P=ne,R=j,o.getReversed()&&(ne=-ne,j=-j),i.polygonOffset(ne,j))):We(i.POLYGON_OFFSET_FILL)}function nt(O){O?Re(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function lt(O){O===void 0&&(O=i.TEXTURE0+U-1),G!==O&&(i.activeTexture(O),G=O)}function gt(O,ne,j){j===void 0&&(G===null?j=i.TEXTURE0+U-1:j=G);let Te=K[j];Te===void 0&&(Te={type:void 0,texture:void 0},K[j]=Te),(Te.type!==O||Te.texture!==ne)&&(G!==j&&(i.activeTexture(j),G=j),i.bindTexture(O,ne||ze[O]),Te.type=O,Te.texture=ne)}function B(){let O=K[G];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function Se(){try{i.compressedTexImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function Ne(){try{i.texSubImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function oe(){try{i.texSubImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function Je(){try{i.compressedTexSubImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function _e(){try{i.texStorage2D(...arguments)}catch(O){it("WebGLState:",O)}}function A(){try{i.texStorage3D(...arguments)}catch(O){it("WebGLState:",O)}}function b(){try{i.texImage2D(...arguments)}catch(O){it("WebGLState:",O)}}function W(){try{i.texImage3D(...arguments)}catch(O){it("WebGLState:",O)}}function le(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function se(O,ne){u[O]!==ne&&(i.pixelStorei(O,ne),u[O]=ne)}function pe(O){$.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),$.copy(O))}function we(O){he.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),he.copy(O))}function ee(O,ne){let j=l.get(ne);j===void 0&&(j=new WeakMap,l.set(ne,j));let Te=j.get(O);Te===void 0&&(Te=i.getUniformBlockIndex(ne,O.name),i.uniformBlockBinding(ne,Te,Te),j.set(O,Te))}function ie(O,ne,j){let xe=l.get(ne).get(O);c[xe]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,xe,j),c[xe]=j)}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},G=null,K={},d={},c={},f=new WeakMap,p=[],y=null,m=!1,g=null,M=null,S=null,x=null,T=null,w=null,_=null,E=new Ze(0,0,0),L=0,C=!1,D=null,z=null,Y=null,P=null,R=null,$.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Re,disable:We,bindFramebuffer:Mt,drawBuffers:Ke,useProgram:et,setBlending:ge,setMaterial:fe,setFlipSided:Pe,setCullFace:Me,setLineWidth:tt,setPolygonOffset:He,setScissorTest:nt,activeTexture:lt,bindTexture:gt,unbindTexture:B,compressedTexImage2D:me,compressedTexImage3D:Se,texImage2D:b,texImage3D:W,pixelStorei:se,getParameter:le,updateUBOMapping:ee,uniformBlockBinding:ie,texStorage2D:_e,texStorage3D:A,texSubImage2D:Ne,texSubImage3D:oe,compressedTexSubImage2D:Je,compressedTexSubImage3D:Ce,scissor:pe,viewport:we,reset:ye}}function aM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,y=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return m?new OffscreenCanvas(A,b):Rr("canvas")}function M(A,b,W){let le=1,se=_e(A);if((se.width>W||se.height>W)&&(le=W/Math.max(se.width,se.height)),le<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let pe=Math.floor(le*se.width),we=Math.floor(le*se.height);d===void 0&&(d=g(pe,we));let ee=b?g(pe,we):d;return ee.width=pe,ee.height=we,ee.getContext("2d").drawImage(A,0,0,pe,we),$e("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+pe+"x"+we+")."),ee}else return"data"in A&&$e("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function S(A){return A.generateMipmaps}function x(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,b,W,le,se,pe=!1){if(A!==null){if(i[A]!==void 0)return i[A];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let we;le&&(we=e.get("EXT_texture_norm16"),we||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=b;if(b===i.RED&&(W===i.FLOAT&&(ee=i.R32F),W===i.HALF_FLOAT&&(ee=i.R16F),W===i.UNSIGNED_BYTE&&(ee=i.R8),W===i.UNSIGNED_SHORT&&we&&(ee=we.R16_EXT),W===i.SHORT&&we&&(ee=we.R16_SNORM_EXT)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.R8UI),W===i.UNSIGNED_SHORT&&(ee=i.R16UI),W===i.UNSIGNED_INT&&(ee=i.R32UI),W===i.BYTE&&(ee=i.R8I),W===i.SHORT&&(ee=i.R16I),W===i.INT&&(ee=i.R32I)),b===i.RG&&(W===i.FLOAT&&(ee=i.RG32F),W===i.HALF_FLOAT&&(ee=i.RG16F),W===i.UNSIGNED_BYTE&&(ee=i.RG8),W===i.UNSIGNED_SHORT&&we&&(ee=we.RG16_EXT),W===i.SHORT&&we&&(ee=we.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RG8UI),W===i.UNSIGNED_SHORT&&(ee=i.RG16UI),W===i.UNSIGNED_INT&&(ee=i.RG32UI),W===i.BYTE&&(ee=i.RG8I),W===i.SHORT&&(ee=i.RG16I),W===i.INT&&(ee=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),W===i.UNSIGNED_INT&&(ee=i.RGB32UI),W===i.BYTE&&(ee=i.RGB8I),W===i.SHORT&&(ee=i.RGB16I),W===i.INT&&(ee=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),W===i.UNSIGNED_INT&&(ee=i.RGBA32UI),W===i.BYTE&&(ee=i.RGBA8I),W===i.SHORT&&(ee=i.RGBA16I),W===i.INT&&(ee=i.RGBA32I)),b===i.RGB&&(W===i.UNSIGNED_SHORT&&we&&(ee=we.RGB16_EXT),W===i.SHORT&&we&&(ee=we.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),b===i.RGBA){let ie=pe?bo:dt.getTransfer(se);W===i.FLOAT&&(ee=i.RGBA32F),W===i.HALF_FLOAT&&(ee=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ee=ie===Ct?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&we&&(ee=we.RGBA16_EXT),W===i.SHORT&&we&&(ee=we.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(A,b){let W;return A?b===null||b===li||b===er?W=i.DEPTH24_STENCIL8:b===Xn?W=i.DEPTH32F_STENCIL8:b===qr&&(W=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===li||b===er?W=i.DEPTH_COMPONENT24:b===Xn?W=i.DEPTH_COMPONENT32F:b===qr&&(W=i.DEPTH_COMPONENT16),W}function E(A,b){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function L(A){let b=new WeakRef(A);n.get(A).__ref=b,p.add(b),y.register(A,b,b)}function C(A){let b=n.get(A).__ref;b!==void 0&&(p.delete(b),y.unregister(b))}function D(A){Y(A.target)}function z(A){P(A.target)}function Y(A){A.removeEventListener("dispose",D),C(A),U(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function P(A){A.removeEventListener("dispose",z),C(A),q(A)}function R(){for(let A of p){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?P(b):Y(b))}p.clear(),u.clear()}function U(A){let b=n.get(A);if(b.__webglInit===void 0)return;let W=A.source,le=f.get(W);if(le){let se=le[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&F(A),Object.keys(le).length===0&&f.delete(W)}n.remove(A)}function F(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let W=A.source,le=f.get(W);delete le[b.__cacheKey],o.memory.textures--}function q(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let W=A.depthTexture;if(W&&W.renderTarget===A&&Y(W),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let pe=0;pe<b.__webglFramebuffer[se].length;pe++)i.deleteFramebuffer(b.__webglFramebuffer[se][pe]);else i.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)i.deleteFramebuffer(b.__webglFramebuffer[se]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let le=A.textures;for(let se=0,pe=le.length;se<pe;se++){let we=n.get(le[se]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(le[se])}n.remove(A)}let k=0;function G(){k=0}function K(){return k}function Q(A){k=A}function Ae(){let A=k;return A>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,A}function $(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function he(A,b){let W=n.get(A);if(A.isVideoTexture&&Je(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&W.__version!==A.version){let le=A.image;if(le===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(W,A,b);return}}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function ce(A,b){let W=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){fe(W,A,b);return}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function ze(A,b){let W=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){fe(W,A,b);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function Re(A,b){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Pe(W,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}let We={[$n]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},Mt={[Yt]:i.NEAREST,[zl]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[xn]:i.LINEAR_MIPMAP_LINEAR},Ke={[gp]:i.NEVER,[wu]:i.ALWAYS,[_p]:i.LESS,[bu]:i.LEQUAL,[xp]:i.EQUAL,[Eu]:i.GEQUAL,[yp]:i.GREATER,[vp]:i.NOTEQUAL};function et(A,b){if(b.type===Xn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bt||b.magFilter===Xr||b.magFilter===Qs||b.magFilter===xn||b.minFilter===Bt||b.minFilter===Xr||b.minFilter===Qs||b.minFilter===xn)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,We[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,We[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,We[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Mt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ke[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yt||b.minFilter!==Qs&&b.minFilter!==xn||b.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function rt(A,b){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",D),L(b));let le=b.source,se=f.get(le);se===void 0&&(se={},f.set(le,se));let pe=$(b);if(pe!==A.__cacheKey){se[pe]===void 0&&(se[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),se[pe].usedTimes++;let we=se[A.__cacheKey];we!==void 0&&(se[A.__cacheKey].usedTimes--,we.usedTimes===0&&F(b)),A.__cacheKey=pe,A.__webglTexture=se[pe].texture}return W}function re(A,b,W){return Math.floor(Math.floor(A/W)/b)}function ge(A,b,W,le){let pe=A.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,W,le,b.data);else{pe.sort((O,ne)=>O.start-ne.start);let we=0;for(let O=1;O<pe.length;O++){let ne=pe[we],j=pe[O],Te=ne.start+ne.count,xe=re(j.start,b.width,4),be=re(ne.start,b.width,4);j.start<=Te+1&&xe===be&&re(j.start+j.count-1,b.width,4)===xe?ne.count=Math.max(ne.count,j.start+j.count-ne.start):(++we,pe[we]=j)}pe.length=we+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let O=0,ne=pe.length;O<ne;O++){let j=pe[O],Te=Math.floor(j.start/4),xe=Math.ceil(j.count/4),be=Te%b.width,Xe=Math.floor(Te/b.width),ot=xe,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,be),t.pixelStorei(i.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(i.TEXTURE_2D,0,be,Xe,ot,de,W,le,b.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function fe(A,b,W){let le=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(le=i.TEXTURE_3D);let se=rt(A,b),pe=b.source;t.bindTexture(le,A.__webglTexture,i.TEXTURE0+W);let we=n.get(pe);if(pe.version!==we.__version||se===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let de=dt.getPrimaries(dt.workingColorSpace),je=b.colorSpace===hi?null:dt.getPrimaries(b.colorSpace),ct=b.colorSpace===hi||de===je?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ie=M(b.image,!1,s.maxTextureSize);ie=Ce(b,ie);let ye=r.convert(b.format,b.colorSpace),O=r.convert(b.type),ne=w(b.internalFormat,ye,O,b.normalized,b.colorSpace,b.isVideoTexture);et(le,b);let j,Te=b.mipmaps,xe=b.isVideoTexture!==!0,be=we.__version===void 0||se===!0,Xe=pe.dataReady,ot=E(b,ie);if(b.isDepthTexture)ne=_(b.format===es,b.type),be&&(xe?t.texStorage2D(i.TEXTURE_2D,1,ne,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ne,ie.width,ie.height,0,ye,O,null));else if(b.isDataTexture)if(Te.length>0){xe&&be&&t.texStorage2D(i.TEXTURE_2D,ot,ne,Te[0].width,Te[0].height);for(let de=0,je=Te.length;de<je;de++)j=Te[de],xe?Xe&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,j.width,j.height,ye,O,j.data):t.texImage2D(i.TEXTURE_2D,de,ne,j.width,j.height,0,ye,O,j.data);b.generateMipmaps=!1}else xe?(be&&t.texStorage2D(i.TEXTURE_2D,ot,ne,ie.width,ie.height),Xe&&ge(b,ie,ye,O)):t.texImage2D(i.TEXTURE_2D,0,ne,ie.width,ie.height,0,ye,O,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){xe&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ne,Te[0].width,Te[0].height,ie.depth);for(let de=0,je=Te.length;de<je;de++)if(j=Te[de],b.format!==yn)if(ye!==null)if(xe){if(Xe)if(b.layerUpdates.size>0){let ct=Ou(j.width,j.height,b.format,b.type);for(let Le of b.layerUpdates){let Et=j.data.subarray(Le*ct/j.data.BYTES_PER_ELEMENT,(Le+1)*ct/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,Le,j.width,j.height,1,ye,Et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,j.width,j.height,ie.depth,ye,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,ne,j.width,j.height,ie.depth,0,j.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,j.width,j.height,ie.depth,ye,O,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,ne,j.width,j.height,ie.depth,0,ye,O,j.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{xe&&be&&t.texStorage2D(i.TEXTURE_2D,ot,ne,Te[0].width,Te[0].height);for(let de=0,je=Te.length;de<je;de++)j=Te[de],b.format!==yn?ye!==null?xe?Xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,j.width,j.height,ye,j.data):t.compressedTexImage2D(i.TEXTURE_2D,de,ne,j.width,j.height,0,j.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Xe&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,j.width,j.height,ye,O,j.data):t.texImage2D(i.TEXTURE_2D,de,ne,j.width,j.height,0,ye,O,j.data)}else if(b.isDataArrayTexture)if(xe){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ne,ie.width,ie.height,ie.depth),Xe)if(b.layerUpdates.size>0){let de=Ou(ie.width,ie.height,b.format,b.type);for(let je of b.layerUpdates){let ct=ie.data.subarray(je*de/ie.data.BYTES_PER_ELEMENT,(je+1)*de/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,je,ie.width,ie.height,1,ye,O,ct)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,O,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,ie.width,ie.height,ie.depth,0,ye,O,ie.data);else if(b.isData3DTexture)xe?(be&&t.texStorage3D(i.TEXTURE_3D,ot,ne,ie.width,ie.height,ie.depth),Xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,O,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ne,ie.width,ie.height,ie.depth,0,ye,O,ie.data);else if(b.isFramebufferTexture){if(be)if(xe)t.texStorage2D(i.TEXTURE_2D,ot,ne,ie.width,ie.height);else{let de=ie.width,je=ie.height;for(let ct=0;ct<ot;ct++)t.texImage2D(i.TEXTURE_2D,ct,ne,de,je,0,ye,O,null),de>>=1,je>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),ie.parentNode!==de){de.appendChild(ie),u.add(b),de.onpaint=je=>{let ct=je.changedElements;for(let Le of u)ct.includes(Le.image)&&(Le.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let ct=i.RGBA,Le=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ct,Le,Et,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(xe&&be){let de=_e(Te[0]);t.texStorage2D(i.TEXTURE_2D,ot,ne,de.width,de.height)}for(let de=0,je=Te.length;de<je;de++)j=Te[de],xe?Xe&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ye,O,j):t.texImage2D(i.TEXTURE_2D,de,ne,ye,O,j);b.generateMipmaps=!1}else if(xe){if(be){let de=_e(ie);t.texStorage2D(i.TEXTURE_2D,ot,ne,de.width,de.height)}Xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,O,ie)}else t.texImage2D(i.TEXTURE_2D,0,ne,ye,O,ie);S(b)&&b.mipmapsAutoUpdate===!0&&x(le),we.__version=pe.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Pe(A,b,W){if(b.image.length!==6)return;let le=rt(A,b),se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let pe=n.get(se);if(se.version!==pe.__version||le===!0){t.activeTexture(i.TEXTURE0+W);let we=dt.getPrimaries(dt.workingColorSpace),ee=b.colorSpace===hi?null:dt.getPrimaries(b.colorSpace),ie=b.colorSpace===hi||we===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ye=b.isCompressedTexture||b.image[0].isCompressedTexture,O=b.image[0]&&b.image[0].isDataTexture,ne=[];for(let Le=0;Le<6;Le++)!ye&&!O?ne[Le]=M(b.image[Le],!0,s.maxCubemapSize):ne[Le]=O?b.image[Le].image:b.image[Le],ne[Le]=Ce(b,ne[Le]);let j=ne[0],Te=r.convert(b.format,b.colorSpace),xe=r.convert(b.type),be=w(b.internalFormat,Te,xe,b.normalized,b.colorSpace),Xe=b.isVideoTexture!==!0,ot=pe.__version===void 0||le===!0,de=se.dataReady,je=E(b,j);et(i.TEXTURE_CUBE_MAP,b);let ct;if(b.isDepthTexture){if(be=_(b.format===es,b.type),ot)if(Xe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,be,j.width,j.height);else for(let Le=0;Le<6;Le++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,be,j.width,j.height,0,Te,xe,null)}else if(ye){Xe&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,je,be,j.width,j.height);for(let Le=0;Le<6;Le++){ct=ne[Le].mipmaps;for(let Et=0;Et<ct.length;Et++){let qt=ct[Et];b.format!==yn?Te!==null?Xe?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Et,0,0,qt.width,qt.height,Te,qt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Et,be,qt.width,qt.height,0,qt.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Et,0,0,qt.width,qt.height,Te,xe,qt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Et,be,qt.width,qt.height,0,Te,xe,qt.data)}}}else{if(ct=b.mipmaps,Xe&&ot){ct.length>0&&je++;let Le=_e(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,je,be,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(O){Xe?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,ne[Le].width,ne[Le].height,Te,xe,ne[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,be,ne[Le].width,ne[Le].height,0,Te,xe,ne[Le].data);for(let Et=0;Et<ct.length;Et++){let jn=ct[Et].image[Le].image;Xe?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Et+1,0,0,jn.width,jn.height,Te,xe,jn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Et+1,be,jn.width,jn.height,0,Te,xe,jn.data)}}else{Xe?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Te,xe,ne[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,be,Te,xe,ne[Le]);for(let Et=0;Et<ct.length;Et++){let qt=ct[Et];Xe?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Et+1,0,0,Te,xe,qt.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Et+1,be,Te,xe,qt.image[Le])}}}S(b)&&b.mipmapsAutoUpdate===!0&&x(i.TEXTURE_CUBE_MAP),pe.__version=se.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Me(A,b,W,le,se,pe){let we=r.convert(W.format,W.colorSpace),ee=r.convert(W.type),ie=w(W.internalFormat,we,ee,W.normalized,W.colorSpace),ye=n.get(b),O=n.get(W);if(O.__renderTarget=b,!ye.__hasExternalTextures){let ne=Math.max(1,b.width>>pe),j=Math.max(1,b.height>>pe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,pe,ie,ne,j,b.depth,0,we,ee,null):t.texImage2D(se,pe,ie,ne,j,0,we,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),oe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,se,O.__webglTexture,0,Ne(b)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,se,O.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(A,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let le=b.depthTexture,se=le&&le.isDepthTexture?le.type:null,pe=_(b.stencilBuffer,se),we=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;oe(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(b),pe,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(b),pe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,pe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,A)}else{let le=b.textures;for(let se=0;se<le.length;se++){let pe=le[se],we=r.convert(pe.format,pe.colorSpace),ee=r.convert(pe.type),ie=w(pe.internalFormat,we,ee,pe.normalized,pe.colorSpace);oe(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(b),ie,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(b),ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ie,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(A,b,W){let le=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(b.depthTexture);se.__renderTarget=b;let pe=le?b.depthTexture.image[0]:b.depthTexture.image;(!se.__webglTexture||pe.width!==b.width||pe.height!==b.height)&&(pe.width=b.width,pe.height=b.height,b.depthTexture.needsUpdate=!0),le?Re(b.depthTexture,0):he(b.depthTexture,0);let we=se.__webglTexture,ee=Ne(b),ie=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ye=b.depthTexture.format===es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Gi)oe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ie,we,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,ye,ie,we,0);else if(b.depthTexture.format===es)oe(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ie,we,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,ye,ie,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){let b=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let le=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),le){let se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,le.removeEventListener("dispose",se)};le.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=le}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let le=0;le<6;le++)He(b.__webglFramebuffer[le],A,le);else A.texture.mipmaps.length>0?He(b.__webglFramebuffer[0],A,0):He(b.__webglFramebuffer,A,0);else if(W){b.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[le]),b.__webglDepthbuffer[le]===void 0)b.__webglDepthbuffer[le]=i.createRenderbuffer(),tt(b.__webglDepthbuffer[le],A,!1);else{let se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,pe)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),tt(b.__webglDepthbuffer,A,!1);else{let se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,pe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,b,W){let le=n.get(A);b!==void 0&&Me(le.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&nt(A)}function gt(A){let b=A.texture,W=n.get(A),le=n.get(b);A.addEventListener("dispose",z),L(A);let se=A.textures,pe=A.isWebGLCubeRenderTarget===!0,we=se.length>1;if(we||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=b.version,o.memory.textures++),pe){W.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(b.mipmaps.length>0){W.__webglFramebuffer[ee]=[];for(let ie=0;ie<b.mipmaps.length;ie++)W.__webglFramebuffer[ee][ie]=i.createFramebuffer()}else W.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(b.mipmaps.length>0){W.__webglFramebuffer=[];for(let ee=0;ee<b.mipmaps.length;ee++)W.__webglFramebuffer[ee]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(we)for(let ee=0,ie=se.length;ee<ie;ee++){let ye=n.get(se[ee]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&oe(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ee=0;ee<se.length;ee++){let ie=se[ee];W.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ee]);let ye=r.convert(ie.format,ie.colorSpace),O=r.convert(ie.type),ne=w(ie.internalFormat,ye,O,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),j=Ne(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,ne,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,W.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),et(i.TEXTURE_CUBE_MAP,b);for(let ee=0;ee<6;ee++)if(b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)Me(W.__webglFramebuffer[ee][ie],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else Me(W.__webglFramebuffer[ee],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);S(b)?x(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(we){for(let ee=0,ie=se.length;ee<ie;ee++){let ye=se[ee],O=n.get(ye),ne=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,O.__webglTexture),et(ne,ye),Me(W.__webglFramebuffer,A,ye,i.COLOR_ATTACHMENT0+ee,ne,0),S(ye)&&x(ne)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,le.__webglTexture),et(ee,b),b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)Me(W.__webglFramebuffer[ie],A,b,i.COLOR_ATTACHMENT0,ee,ie);else Me(W.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ee,0);S(b)?x(ee):b.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&nt(A)}function B(A){let b=A.textures;for(let W=0,le=b.length;W<le;W++){let se=b[W];if(S(se)&&se.mipmapsAutoUpdate===!0){let pe=T(A),we=n.get(se).__webglTexture;t.bindTexture(pe,we),x(pe),t.unbindTexture()}}}let me=[];function Se(A){if(A.samples>0){if(oe(A)===!1){let b=A.textures,W=A.width,le=A.height,se=i.COLOR_BUFFER_BIT,pe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(A),ee=b.length>1;if(ee)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[ye]);let O=n.get(b[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,W,le,0,0,W,le,se,i.NEAREST),c===!0&&(me.length=0,me.push(i.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&me.push(pe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,we.__webglColorRenderbuffer[ye]);let O=n.get(b[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ne(A){return Math.min(s.maxSamples,A.samples)}function oe(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Je(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Ce(A,b){let W=A.colorSpace,le=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==un&&W!==hi&&(dt.getTransfer(W)===Ct?(le!==yn||se!==Dn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",W)),b}function _e(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Ae,this.resetTextureUnits=G,this.getTextureUnits=K,this.setTextureUnits=Q,this.setTexture2D=he,this.setTexture2DArray=ce,this.setTexture3D=ze,this.setTextureCube=Re,this.rebindTextures=lt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=oe,this.dispose=R}function lM(i,e){function t(n,s=hi){let r,o=dt.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Gl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gu)return i.BYTE;if(n===_u)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Hl)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===ci)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===Mu)return i.RGB;if(n===yn)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===Ss)return i.RG;if(n===ql)return i.RG_INTEGER;if(n===Yl)return i.RGBA_INTEGER;if(n===oa||n===aa||n===la||n===ca)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$l||n===Zl||n===Kl||n===Jl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jl||n===Ql||n===ec||n===tc||n===nc||n===ha||n===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jl||n===Ql)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ec)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tc)return r.COMPRESSED_R11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ha)return r.COMPRESSED_RG11_EAC;if(n===ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xc||n===yc||n===vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xc)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===Sc||n===ua||n===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var cM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Si({vertexShader:cM,fragmentShader:hM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qu=class extends oi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,y=typeof XRWebGLBinding<"u",m=new Xu,g={},M=t.getContextAttributes(),S=null,x=null,T=[],w=[],_=new ae,E=null,L=null,C=new Qt;C.viewport=new It;let D=new Qt;D.viewport=new It;let z=[C,D],Y=new Ol,P=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=T[$];return he===void 0&&(he=new Lr,T[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=T[$];return he===void 0&&(he=new Lr,T[$]=he),he.getGripSpace()},this.getHand=function($){let he=T[$];return he===void 0&&(he=new Lr,T[$]=he),he.getHandSpace()};function U($){let he=w.indexOf($.inputSource);if(he===-1)return;let ce=T[he];ce!==void 0&&(ce.update($.inputSource,$.frame,l||o),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",q);for(let $=0;$<T.length;$++){let he=w[$];he!==null&&(w[$]=null,T[$].disconnect(he))}P=null,R=null,m.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,x=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),L!==null){let $=L.camera;$.fov=L.fov,$.zoom=L.zoom,$.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",q),M.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ze=null,Re=null;M.depth&&(Re=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=M.stencil?es:Gi,ze=M.stencil?er:li);let We={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Gn(d.textureWidth,d.textureHeight,{format:yn,type:Dn,depthTexture:new Xi(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Gn(f.framebufferWidth,f.framebufferHeight,{format:yn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q($){for(let he=0;he<$.removed.length;he++){let ce=$.removed[he],ze=w.indexOf(ce);ze>=0&&(w[ze]=null,T[ze].disconnect(ce))}for(let he=0;he<$.added.length;he++){let ce=$.added[he],ze=w.indexOf(ce);if(ze===-1){for(let We=0;We<T.length;We++)if(We>=w.length){w.push(ce),ze=We;break}else if(w[We]===null){w[We]=ce,ze=We;break}if(ze===-1)break}let Re=T[ze];Re&&Re.connect(ce)}}function k($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let he=$.near,ce=$.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),Y.near=D.near=C.near=he,Y.far=D.far=C.far=ce,(P!==Y.near||R!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),P=Y.near,R=Y.far),Y.layers.mask=$.layers.mask|6,C.layers.mask=Y.layers.mask&-5,D.layers.mask=Y.layers.mask&-3;let ze=$.parent,Re=Y.cameras;k(Y,ze);for(let We=0;We<Re.length;We++)k(Re[We],ze);Y.projectionMatrix.copy(C.projectionMatrix),Y.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&$.isPerspectiveCamera&&(L={camera:$,fov:$.fov,zoom:$.zoom}),G($,Y,ze)};function G($,he,ce){ce===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=zs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function($){return g[$]};let K=null;function Q($,he){if(h=he.getViewerPose(l||o),p=he,h!==null){let ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ze=!1;ce.length!==Y.cameras.length&&(Y.cameras.length=0,ze=!0);for(let Ke=0;Ke<ce.length;Ke++){let et=ce[Ke],rt=null;if(f!==null)rt=f.getViewport(et);else{let ge=u.getViewSubImage(d,et);rt=ge.viewport,Ke===0&&(e.setRenderTargetTextures(x,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(x))}let re=z[Ke];re===void 0&&(re=new Qt,re.layers.enable(Ke),re.viewport=new It,z[Ke]=re),re.matrix.fromArray(et.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(et.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(rt.x,rt.y,rt.width,rt.height),Ke===0&&(Y.matrix.copy(re.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ze===!0&&Y.cameras.push(re)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Ke=u.getDepthInformation(ce[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,s.renderState)}if(Re&&Re.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Ke=0;Ke<ce.length;Ke++){let et=ce[Ke].camera;if(et){let rt=g[et];rt||(rt=new Oo,g[et]=rt);let re=u.getCameraImage(et);rt.sourceTexture=re}}}}for(let ce=0;ce<T.length;ce++){let ze=w[ce],Re=T[ce];ze!==null&&Re!==void 0&&Re.update(ze,he,l||o)}K&&K($,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),p=null}let Ae=new em;Ae.setAnimationLoop(Q),this.setAnimationLoop=function($){K=$},this.dispose=function(){}}},uM=new st,hm=new at;hm.set(-1,0,0,0,1,0,0,0,1);function dM(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Nu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,S,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,M,S):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(uM.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,M,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fM(i,e,t,n){let s={},r={};function o(M,S){let x=S.program;n.uniformBlockBinding(M,x,s[M.id])}function a(M,S){let x=s[M.id];x===void 0&&(p(M),x=c(M),s[M.id]=x,M.addEventListener("dispose",m));let T=S.program;n.updateUBOMapping(M,T);let w=e.render.frame;r[M.id]!==w&&(l(M),r[M.id]=w)}function c(M){let S=i.createBuffer(),x=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,x,T),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function l(M){let S=s[M.id],x=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,_=x.length;w<_;w++){let E=x[w];if(Array.isArray(E))for(let L=0,C=E.length;L<C;L++)h(E[L],w,L,T);else h(E,w,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,S,x,T){if(d(M,S,x,T)===!0){let w=M.__offset,_=M.value;if(Array.isArray(_)){let E=0;for(let L=0;L<_.length;L++){let C=_[L],D=y(C,!0);u(C,M.__data,E),E+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,M.__data)}}function u(M,S,x){typeof M=="number"||typeof M=="boolean"?S[x]=M:M.isMatrix3?(S[x]=M.elements[0],S[x+1]=M.elements[1],S[x+2]=M.elements[2],S[x+3]=0,S[x+4]=M.elements[3],S[x+5]=M.elements[4],S[x+6]=M.elements[5],S[x+7]=0,S[x+8]=M.elements[6],S[x+9]=M.elements[7],S[x+10]=M.elements[8],S[x+11]=0):ArrayBuffer.isView(M)?S.set(M.subarray(0,S.length-x),x):M.toArray(S,x)}function d(M,S,x,T){let w=M.value,_=S+"_"+x;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let E=T[_],L=!1;for(let C=0;C<w.length;C++)f(w[C],E,C)===!0&&(L=!0);return L}return f(w,T,_)}function f(M,S,x){if(S[x]===void 0)return typeof M=="number"||typeof M=="boolean"?S[x]=M:ArrayBuffer.isView(M)?S[x]=M.slice():S[x]=M.clone(),!0;{let T=S[x];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return S[x]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function p(M){let S=M.uniforms,x=0,T=16;for(let _=0,E=S.length;_<E;_++){let L=Array.isArray(S[_])?S[_]:[S[_]];for(let C=0,D=L.length;C<D;C++){let z=L[C],Y=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(S[_])||Array.isArray(z.value),R=x;for(let F=0,q=Y.length;F<q;F++){let k=Y[F],G=y(k,P),K=x%T,Q=K%G.boundary,Ae=K+Q;x+=Q,Ae!==0&&T-Ae<G.storage&&(x+=T-Ae),F===0&&(R=x),x+=G.storage}let U=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new U((x-R)/Float32Array.BYTES_PER_ELEMENT),z.__offset=R}}let w=x%T;return w>0&&(x+=T-w),M.__size=x,M.__cache={},this}function y(M,S){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=16,x.storage=48):M.isMatrix4?(x.boundary=16,x.storage=64):M.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(x.boundary=16,x.storage=M.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",M),S===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function m(M){let S=M.target;S.removeEventListener("dispose",m),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:g}}var pM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function mM(){return Ti===null&&(Ti=new vi(pM,16,16,Ss,ci),Ti.name="DFG_LUT",Ti.minFilter=Bt,Ti.magFilter=Bt,Ti.wrapS=In,Ti.wrapT=In,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var Ac=class{constructor(e={}){let{canvas:t=Mp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Dn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let y=f,m=new Set([Yl,ql,Xl]),g=new Set([Dn,li,qr,er,Gl,Vl]),M=new Uint32Array(4),S=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],E=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,z=null,Y=null,P=null,R=null;this._outputColorSpace=Pt;let U=0,F=0,q=null,k=-1,G=null,K=new It,Q=new It,Ae=null,$=new Ze(0),he=0,ce=t.width,ze=t.height,Re=1,We=null,Mt=null,Ke=new It(0,0,ce,ze),et=new It(0,0,ce,ze),rt=!1,re=new xs,ge=new xl,fe=!1,Pe=!1,Me=new st,tt=new N,He=new It,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function gt(){return q===null?Re:1}let B=n;function me(v,I){return t.getContext(v,I)}let Se,Ne,oe,Je,Ce,_e,A,b,W,le,se,pe,we,ee,ie,ye,O,ne,j,Te,xe,be,Xe;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Le,!1),B===null){let I="webgl2";if(B=me(I,v),B===null)throw me(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(v){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),it("WebGLRenderer: "+v.message),v}function ot(){Se=new Ty(B),Se.init(),xe=new lM(B,Se),Ne=new my(B,Se,e,xe),oe=new oM(B,Se),Ne.reversedDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),Y=B.createFramebuffer(),P=B.createFramebuffer(),R=B.createFramebuffer(),Je=new Cy(B),Ce=new qv,_e=new aM(B,Se,oe,Ce,Ne,xe,Je),A=new wy(C),b=new P0(B),be=new fy(B,b),W=new Ay(B,b,Je,be),le=new Py(B,W,b,be,Je),ne=new Iy(B,Ne,_e),ie=new gy(Ce),se=new Xv(C,A,Se,Ne,be,ie),pe=new dM(C,Ce),we=new $v,ee=new eM(Se),O=new dy(C,A,oe,le,p,c),ye=new rM(C,le,Ne),Xe=new fM(B,Je,Ne,oe),j=new py(B,Se,Je),Te=new Ry(B,Se,Je),Je.programs=se.programs,C.capabilities=Ne,C.extensions=Se,C.properties=Ce,C.renderLists=we,C.shadowMap=ye,C.state=oe,C.info=Je}y!==Dn&&(L=new Ny(y,t.width,t.height,a,s,r));let de=new qu(C,B);this.xr=de,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let v=Se.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Se.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(v){v!==void 0&&(Re=v,this.setSize(ce,ze,!1))},this.getSize=function(v){return v.set(ce,ze)},this.setSize=function(v,I,H=!0){if(de.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=v,ze=I,t.width=Math.floor(v*Re),t.height=Math.floor(I*Re),H===!0&&(t.style.width=v+"px",t.style.height=I+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(ce*Re,ze*Re).floor()},this.setDrawingBufferSize=function(v,I,H){ce=v,ze=I,Re=H,t.width=Math.floor(v*H),t.height=Math.floor(I*H),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(y===Dn){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(K)},this.getViewport=function(v){return v.copy(Ke)},this.setViewport=function(v,I,H,V){v.isVector4?Ke.set(v.x,v.y,v.z,v.w):Ke.set(v,I,H,V),oe.viewport(K.copy(Ke).multiplyScalar(gt()).round())},this.getScissor=function(v){return v.copy(et)},this.setScissor=function(v,I,H,V){v.isVector4?et.set(v.x,v.y,v.z,v.w):et.set(v,I,H,V),oe.scissor(Q.copy(et).multiplyScalar(gt()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(v){oe.setScissorTest(rt=v)},this.setOpaqueSort=function(v){We=v},this.setTransparentSort=function(v){Mt=v},this.getClearColor=function(v){return v.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,H=!0){let V=0;if(v){let X=!1;if(q!==null){let ve=q.texture.format;X=m.has(ve)}if(X){let ve=q.texture.type,ke=g.has(ve),Ee=O.getClearColor(),Fe=O.getClearAlpha(),Ye=Ee.r,ht=Ee.g,yt=Ee.b;ke?(M[0]=Ye,M[1]=ht,M[2]=yt,M[3]=Fe,B.clearBufferuiv(B.COLOR,0,M)):(S[0]=Ye,S[1]=ht,S[2]=yt,S[3]=Fe,B.clearBufferiv(B.COLOR,0,S))}else V|=B.COLOR_BUFFER_BIT}I&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),O.dispose(),we.dispose(),ee.dispose(),_e.dispose(),Ce.dispose(),A.dispose(),le.dispose(),W.dispose(),be.dispose(),Xe.dispose(),se.dispose(),de.dispose(),de.removeEventListener("sessionstart",so),de.removeEventListener("sessionend",ro),mi.stop()};function je(v){v.preventDefault(),Eo("WebGLRenderer: Context Lost."),D=!0}function ct(){Eo("WebGLRenderer: Context Restored."),D=!1;let v=Je.autoReset,I=ye.enabled,H=ye.autoUpdate,V=ye.needsUpdate,X=ye.type;ot(),Je.autoReset=v,ye.enabled=I,ye.autoUpdate=H,ye.needsUpdate=V,ye.type=X}function Le(v){it("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Et(v){let I=v.target;I.removeEventListener("dispose",Et),qt(I)}function qt(v){jn(v),Ce.remove(v)}function jn(v){let I=Ce.get(v).programs;I!==void 0&&(I.forEach(function(H){se.releaseProgram(H)}),v.isShaderMaterial&&se.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,H,V,X,ve){I===null&&(I=nt);let ke=X.isMesh&&X.matrixWorld.determinantAffine()<0,Ee=Oe(v,I,H,V,X);oe.setMaterial(V,ke);let Fe=H.index,Ye=1;if(V.wireframe===!0){if(Fe=W.getWireframeAttribute(H),Fe===void 0)return;Ye=2}let ht=H.drawRange,yt=H.attributes.position,Ge=ht.start*Ye,vt=(ht.start+ht.count)*Ye;ve!==null&&(Ge=Math.max(Ge,ve.start*Ye),vt=Math.min(vt,(ve.start+ve.count)*Ye)),Fe!==null?(Ge=Math.max(Ge,0),vt=Math.min(vt,Fe.count)):yt!=null&&(Ge=Math.max(Ge,0),vt=Math.min(vt,yt.count));let $t=vt-Ge;if($t<0||$t===1/0)return;be.setup(X,V,Ee,H,Fe);let Ut,Nt=j;if(Fe!==null&&(Ut=b.get(Fe),Nt=Te,Nt.setIndex(Ut)),X.isMesh)V.wireframe===!0?(oe.setLineWidth(V.wireframeLinewidth*gt()),Nt.setMode(B.LINES)):Nt.setMode(B.TRIANGLES);else if(X.isLine){let pn=V.linewidth;pn===void 0&&(pn=1),oe.setLineWidth(pn*gt()),X.isLineSegments?Nt.setMode(B.LINES):X.isLineLoop?Nt.setMode(B.LINE_LOOP):Nt.setMode(B.LINE_STRIP)}else X.isPoints?Nt.setMode(B.POINTS):X.isSprite&&Nt.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))Nt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let pn=X._multiDrawStarts,Ve=X._multiDrawCounts,Mn=X._multiDrawCount,At=Fe?b.get(Fe).bytesPerElement:1,Cs=Ce.get(V).currentProgram.getUniforms();for(let mn=0;mn<Mn;mn++)Cs.setValue(B,"_gl_DrawID",mn),Nt.render(pn[mn]/At,Ve[mn])}else if(X.isInstancedMesh)Nt.renderInstances(Ge,$t,X.count);else if(H.isInstancedBufferGeometry){let pn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ve=Math.min(H.instanceCount,pn);Nt.renderInstances(Ge,$t,Ve)}else Nt.render(Ge,$t)};function io(v,I,H,V){z!==null&&v.isNodeMaterial&&z.setObject(V,v),fe===!0&&ie.setState(v,H,!1),v.transparent===!0&&v.side===Kn&&v.forceSinglePass===!1?(v.side=fn,v.needsUpdate=!0,J(v,I,V),v.side=Ei,v.needsUpdate=!0,J(v,I,V),v.side=Kn):J(v,I,V)}this.compile=function(v,I,H=null){H===null&&(H=v),z!==null&&z.renderStart(v,I,H),w=ee.get(H),w.init(I),E.push(w),H.traverseVisible(function(X){X.isLight&&X.layers.test(I.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),v!==H&&v.traverseVisible(function(X){X.isLight&&X.layers.test(I.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Pe=this.localClippingEnabled,fe=ie.init(this.clippingPlanes,Pe),fe===!0&&ie.setGlobalState(this.clippingPlanes,I),z!==null&&ye.render(w.state.shadowsArray,H,I);let V=new Set;return v.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ve=X.material;if(ve)if(Array.isArray(ve))for(let ke=0;ke<ve.length;ke++){let Ee=ve[ke];io(Ee,H,I,X),V.add(Ee)}else io(ve,H,I,X),V.add(ve)}),w=E.pop(),z!==null&&z.renderEnd(),V},this.compileAsync=function(v,I,H=null){let V=this.compile(v,I,H);return new Promise(X=>{function ve(){if(V.forEach(function(ke){let Fe=Ce.get(ke).currentProgram;(Fe===void 0||Fe.isReady())&&V.delete(ke)}),V.size===0){X(v);return}setTimeout(ve,10)}Se.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Qn=null;function wa(v){Qn&&Qn(v)}function so(){mi.stop()}function ro(){mi.start()}let mi=new em;mi.setAnimationLoop(wa),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(v){Qn=v,de.setAnimationLoop(v),v===null?mi.stop():mi.start()},de.addEventListener("sessionstart",so),de.addEventListener("sessionend",ro),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(v,I);let H=de.enabled===!0&&de.isPresenting===!0,V=L!==null&&(q===null||H)&&L.begin(C,q);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(I),I=de.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,I,q),w=ee.get(v,E.length),w.init(I),w.state.textureUnits=_e.getTextureUnits(),E.push(w),Me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?ge.setFromArrayCamera(I):re.setFromProjectionMatrix(Me,Yn,I.reversedDepth),Pe=this.localClippingEnabled,fe=ie.init(this.clippingPlanes,Pe),T=we.get(v,_.length),T.init(),_.push(T),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){let ke=C.xr.getDepthSensingMesh();ke!==null&&sr(ke,I,-1/0,C.sortObjects)}sr(v,I,0,C.sortObjects),T.finish(),z!==null&&z.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(We,Mt),lt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,lt&&O.addToRenderList(T,v),this.info.autoReset===!0&&this.info.reset(),fe===!0&&ie.beginShadows();let X=w.state.shadowsArray;if(ye.render(X,v,I),fe===!0&&ie.endShadows(),(V&&L.hasRenderPass())===!1){let ke=T.opaque,Ee=T.transmissive;if(w.setupLights(),I.isArrayCamera){let Fe=I.cameras;if(Ee.length>0)for(let Ye=0,ht=Fe.length;Ye<ht;Ye++){let yt=Fe[Ye];Rs(ke,Ee,v,yt)}lt&&O.render(v);for(let Ye=0,ht=Fe.length;Ye<ht;Ye++){let yt=Fe[Ye];As(T,v,yt,yt.viewport)}}else Ee.length>0&&Rs(ke,Ee,v,I),lt&&O.render(v),As(T,v,I)}q!==null&&F===0&&(_e.updateMultisampleRenderTarget(q),_e.updateRenderTargetMipmap(q)),V&&L.end(C),v.isScene===!0&&v.onAfterRender(C,v,I),be.resetDefaultState(),k=-1,G=null,E.pop(),E.length>0?(w=E[E.length-1],_e.setTextureUnits(w.state.textureUnits),fe===!0&&ie.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,z!==null&&z.renderEnd()};function sr(v,I,H,V){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){let ke=I.isArrayCamera?ge:re;if(!v.frustumCulled||v.intersectsFrustum(ke)){V&&He.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Me);let Ee=le.update(v),Fe=v.material;Fe.visible&&T.push(v,Ee,Fe,H,He.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){let ke=I.isArrayCamera?ge:re;if(!v.frustumCulled||v.intersectsFrustum(ke)){let Ee=le.update(v),Fe=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),He.copy(v.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),He.copy(Ee.boundingSphere.center)),He.applyMatrix4(v.matrixWorld).applyMatrix4(Me)),Array.isArray(Fe)){let Ye=Ee.groups;for(let ht=0,yt=Ye.length;ht<yt;ht++){let Ge=Ye[ht],vt=Fe[Ge.materialIndex];vt&&vt.visible&&T.push(v,Ee,vt,H,He.z,Ge,I)}}else Fe.visible&&T.push(v,Ee,Fe,H,He.z,null,I)}}}let ve=v.children;for(let ke=0,Ee=ve.length;ke<Ee;ke++)sr(ve[ke],I,H,V)}function As(v,I,H,V){let{opaque:X,transmissive:ve,transparent:ke}=v;w.setupLightsView(H),fe===!0&&ie.setGlobalState(C.clippingPlanes,H),V&&oe.viewport(K.copy(V)),X.length>0&&rr(X,I,H),ve.length>0&&rr(ve,I,H),ke.length>0&&rr(ke,I,H),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Rs(v,I,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Ge=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Gn(1,1,{generateMipmaps:!0,type:Ge?ci:Dn,minFilter:xn,samples:Math.max(4,Ne.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let ve=w.state.transmissionRenderTarget[V.id],ke=V.viewport||K;ve.setSize(ke.z*C.transmissionResolutionScale,ke.w*C.transmissionResolutionScale);let Ee=C.getRenderTarget(),Fe=C.getActiveCubeFace(),Ye=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor($),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),lt&&O.render(H);let ht=C.toneMapping;C.toneMapping=wi;let yt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),fe===!0&&ie.setGlobalState(C.clippingPlanes,V),rr(v,H,V),_e.updateMultisampleRenderTarget(ve),_e.updateRenderTargetMipmap(ve),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let vt=0,$t=I.length;vt<$t;vt++){let Ut=I[vt],{object:Nt,geometry:pn,material:Ve,group:Mn}=Ut;if(Ve.side===Kn&&Nt.layers.test(V.layers)){let At=Ve.side;Ve.side=fn,Ve.needsUpdate=!0,Li(Nt,H,V,pn,Ve,Mn),Ve.side=At,Ve.needsUpdate=!0,Ge=!0}}Ge===!0&&(_e.updateMultisampleRenderTarget(ve),_e.updateRenderTargetMipmap(ve))}C.setRenderTarget(Ee,Fe,Ye),C.setClearColor($,he),yt!==void 0&&(V.viewport=yt),C.toneMapping=ht}function rr(v,I,H){let V=I.isScene===!0?I.overrideMaterial:null;for(let X=0,ve=v.length;X<ve;X++){let ke=v[X],{object:Ee,geometry:Fe,group:Ye}=ke,ht=ke.material;ht.allowOverride===!0&&V!==null&&(ht=V),Ee.layers.test(H.layers)&&Li(Ee,I,H,Fe,ht,Ye)}}function Li(v,I,H,V,X,ve){z!==null&&X.isNodeMaterial&&z.setObject(v,X),v.onBeforeRender(C,I,H,V,X,ve),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),X.onBeforeRender(C,I,H,V,v,ve),X.transparent===!0&&X.side===Kn&&X.forceSinglePass===!1?(X.side=fn,X.needsUpdate=!0,C.renderBufferDirect(H,I,V,X,v,ve),X.side=Ei,X.needsUpdate=!0,C.renderBufferDirect(H,I,V,X,v,ve),X.side=Kn):C.renderBufferDirect(H,I,V,X,v,ve),v.onAfterRender(C,I,H,V,X,ve)}function Ta(v){let I=0;for(let H of v)H.texture!==null&&I++;return I}function J(v,I,H){I.isScene!==!0&&(I=nt);let V=Ce.get(v),X=w.state.lights,ve=w.state.shadowsArray,ke=X.state.version,Ee=se.getParameters(v,X.state,ve,I,H,w.state.lightProbeGridArray),Fe=se.getProgramCacheKey(Ee),Ye=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;let ht=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=A.get(v.envMap||V.environment,ht),V.envMapRotation=V.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ye===void 0&&(v.addEventListener("dispose",Et),Ye=new Map,V.programs=Ye,V.programVariants=new Map);let yt=Ye.get(Fe);if(yt!==void 0){if(V.currentProgram===yt&&V.lightsStateVersion===ke)return Ue(v,Ee),yt}else Ee.uniforms=se.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,H,Ee),v.onBeforeCompile(Ee,C),yt=se.acquireProgram(Ee,Fe),Ye.set(Fe,yt),V.uniforms=Ee.uniforms;let Ge=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ge.clippingPlanes=ie.uniform),Ue(v,Ee),V.needsLights=Be(v),V.lightsStateVersion=ke,V.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.sunLights.value=X.state.sun,Ge.sunLightShadows.value=X.state.sunShadow,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.sunShadowMatrix.value=X.state.sunShadowMatrix,Ge.sunShadowCascade.value=X.state.sunShadowCascade,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=Ta(w.state.lightProbeGridArray),V.currentProgram=yt,V.uniformsList=null,yt}function ue(v,I,H,V,X){let ve=Ce.get(v),ke=ve.currentProgram.id+","+V+","+X,Ee=ve.programVariants.get(ke);return Ee===void 0?(Ee=J(v,I,H),ve.programVariants.set(ke,Ee)):(ve.currentProgram=Ee,ve.uniformsList=null,ve.outputColorSpace=V,ve.toneMapping=X),Ee}function Ie(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=$r.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Ue(v,I){let H=Ce.get(v);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Oe(v,I,H,V,X){I.isScene!==!0&&(I=nt),_e.resetTextureUnits();let ve=I.fog,ke=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,Ee=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:dt.workingColorSpace,Fe=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ye=A.get(V.envMap||ke,Fe),ht=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,yt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ge=!!H.morphAttributes.position,vt=!!H.morphAttributes.normal,$t=!!H.morphAttributes.color,Ut=wi;V.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ut=C.toneMapping);let Nt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pn=Nt!==void 0?Nt.length:0,Ve=Ce.get(V),Mn=w.state.lights;if(fe===!0&&(Pe===!0||v!==G)){let kt=v===G&&V.id===k;ie.setState(V,v,kt)}let At=!1,Cs=!1;V.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==Mn.state.version||X.isBatchedMesh&&Ve.batching===!1||!X.isBatchedMesh&&Ve.batching===!0||X.isBatchedMesh&&Ve.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ve.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||X.isInstancedMesh&&Ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ve.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ve.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ve.instancingMorph===!1&&X.morphTexture!==null||Ve.envMap!==Ye||V.fog===!0&&Ve.fog!==ve||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ie.numPlanes||Ve.numIntersection!==ie.numIntersection)||Ve.vertexAlphas!==ht||Ve.vertexTangents!==yt||Ve.morphTargets!==Ge||Ve.morphNormals!==vt||Ve.morphColors!==$t||Ve.morphTargetsCount!==pn||Ve.numLightProbeGrids!==Ta(w.state.lightProbeGridArray)?At=!0:(Ve.outputColorSpace!==Ee||Ve.toneMapping!==Ut)&&(Cs=!0):(At=!0,Ve.__version=V.version);let mn=Ve.currentProgram;(At===!0||Cs===!0)&&(mn=Cs===!0?ue(V,I,X,Ee,Ut):J(V,I,X),z&&V.isNodeMaterial&&z.onUpdateProgram(V,mn,Ve));let Aa=!1,ss=!1,Is=!1,St=mn.getUniforms(),hn=Ve.uniforms;if(oe.useProgram(mn.program)&&(Aa=!0,ss=!0,Is=!0),V.id!==k&&(k=V.id,ss=!0),Aa||G!==v){oe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),St.setValue(B,"projectionMatrix",v.projectionMatrix),St.setValue(B,"viewMatrix",v.matrixWorldInverse);let rn=St.map.cameraPosition;rn!==void 0&&rn.setValue(B,tt.setFromMatrixPosition(v.matrixWorld)),Ne.logarithmicDepthBuffer&&St.setValue(B,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(B,"isOrthographic",v.isOrthographicCamera===!0),G!==v&&(G=v,ss=!0,Is=!0)}if(Ve.needsLights&&(Mn.state.sunShadowMap.length>0&&St.setValue(B,"sunShadowMap",Mn.state.sunShadowMap,_e),Mn.state.directionalShadowMap.length>0&&St.setValue(B,"directionalShadowMap",Mn.state.directionalShadowMap,_e),Mn.state.spotShadowMap.length>0&&St.setValue(B,"spotShadowMap",Mn.state.spotShadowMap,_e),Mn.state.pointShadowMap.length>0&&St.setValue(B,"pointShadowMap",Mn.state.pointShadowMap,_e)),X.isSkinnedMesh){St.setOptional(B,X,"bindMatrix"),St.setOptional(B,X,"bindMatrixInverse");let kt=X.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),St.setValue(B,"boneTexture",kt.boneTexture,_e))}X.isBatchedMesh&&(St.setOptional(B,X,"batchingTexture"),St.setValue(B,"batchingTexture",X._matricesTexture,_e),St.setOptional(B,X,"batchingIdTexture"),St.setValue(B,"batchingIdTexture",X._indirectTexture,_e),St.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&St.setValue(B,"batchingColorTexture",X._colorsTexture,_e));let ei=H.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&ne.update(X,H,mn),(ss||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,St.setValue(B,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(hn.envMapIntensity.value=I.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=mM()),ss){if(St.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ve.needsLights&&qe(hn,Is),ve&&V.fog===!0&&pe.refreshFogUniforms(hn,ve),pe.refreshMaterialUniforms(hn,V,Re,ze,w.state.transmissionRenderTarget[v.id]),Ve.needsLights&&Ve.numLightProbeGrids>0){let kt=x,rn=0;for(let Ni of w.state.lightProbeGridArray)Ni.texture!==null&&(kt.textures[rn]=Ni.texture,kt.min[rn]=Ni.boundingBox.min,kt.max[rn]=Ni.boundingBox.max,kt.resolution[rn]=Ni.resolution,rn++);for(let Ni in kt)kt[Ni].length=rn;hn.probesSH.value=kt.textures,hn.probesMin.value=kt.min,hn.probesMax.value=kt.max,hn.probesResolution.value=kt.resolution}$r.upload(B,Ie(Ve),hn,_e)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&($r.upload(B,Ie(Ve),hn,_e),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(B,"center",X.center),St.setValue(B,"modelViewMatrix",X.modelViewMatrix),St.setValue(B,"normalMatrix",X.normalMatrix),St.setValue(B,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){let kt=V.uniformsGroups;for(let rn=0,Ni=kt.length;rn<Ni;rn++){let Fd=kt[rn];Xe.update(Fd,mn),Xe.bind(Fd,mn)}}return mn}function qe(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Be(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(v,I,H){let V=Ce.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ce.get(v.texture).__webglTexture=I,Ce.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let H=Ce.get(v);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,H=0){q=v,U=I,F=H;let V=null,X=!1,ve=!1;if(v){let Ee=Ce.get(v);if(Ee.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(B.FRAMEBUFFER,Ee.__webglFramebuffer),K.copy(v.viewport),Q.copy(v.scissor),Ae=v.scissorTest,oe.viewport(K),oe.scissor(Q),oe.setScissorTest(Ae),k=-1;return}else if(Ee.__webglFramebuffer===void 0)_e.setupRenderTarget(v);else if(Ee.__hasExternalTextures)_e.rebindTextures(v,Ce.get(v.texture).__webglTexture,Ce.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ht=v.depthTexture;if(Ee.__boundDepthTexture!==ht){if(ht!==null&&Ce.has(ht)&&(v.width!==ht.image.width||v.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(v)}}let Fe=v.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);let Ye=Ce.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ye[I])?V=Ye[I][H]:V=Ye[I],X=!0):v.samples>0&&_e.useMultisampledRTT(v)===!1?V=Ce.get(v).__webglMultisampledFramebuffer:Array.isArray(Ye)?V=Ye[H]:V=Ye,K.copy(v.viewport),Q.copy(v.scissor),Ae=v.scissorTest}else K.copy(Ke).multiplyScalar(Re).floor(),Q.copy(et).multiplyScalar(Re).floor(),Ae=rt;if(H!==0&&(V=Y),oe.bindFramebuffer(B.FRAMEBUFFER,V)&&oe.drawBuffers(v,V),oe.viewport(K),oe.scissor(Q),oe.setScissorTest(Ae),X){let Ee=Ce.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,H)}else if(ve){let Ee=I;for(let Fe=0;Fe<v.textures.length;Fe++){let Ye=Ce.get(v.textures[Fe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Fe,Ye.__webglTexture,H,Ee)}}else if(v!==null&&H!==0){let Ee=Ce.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ee.__webglTexture,H)}k=-1};function Qe(v){let I=Ce.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=Ne.textureFormatReadable(v.format),I.__typeReadable=Ne.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,H,V,X,ve,ke,Ee=0){if(!(v&&v.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ce.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ke!==void 0&&(Fe=Fe[ke],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){oe.bindFramebuffer(B.FRAMEBUFFER,Fe);try{let Ye=v.textures[Ee],ht=Ye.format,yt=Ye.type;v.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ee);let Ge=Qe(Ye);if(Ge.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-V&&H>=0&&H<=v.height-X&&B.readPixels(I,H,V,X,xe.convert(ht),xe.convert(yt),ve)}finally{let Ye=q!==null?Ce.get(q).__webglFramebuffer:null;oe.bindFramebuffer(B.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(v,I,H,V,X,ve,ke,Ee=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ce.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ke!==void 0&&(Fe=Fe[ke],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(I>=0&&I<=v.width-V&&H>=0&&H<=v.height-X){oe.bindFramebuffer(B.FRAMEBUFFER,Fe);let Ye=v.textures[Ee],ht=Ye.format,yt=Ye.type;v.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ee);let Ge=Qe(Ye);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.bufferData(B.PIXEL_PACK_BUFFER,ve.byteLength,B.STREAM_READ),B.readPixels(I,H,V,X,xe.convert(ht),xe.convert(yt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let $t=q!==null?Ce.get(q).__webglFramebuffer:null;oe.bindFramebuffer(B.FRAMEBUFFER,$t);let Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await bp(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ve),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(vt),B.deleteSync(Ut),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,H=0){let V=Math.pow(2,-H),X=Math.floor(v.image.width*V),ve=Math.floor(v.image.height*V),ke=I!==null?I.x:0,Ee=I!==null?I.y:0;_e.setTexture2D(v,0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,ke,Ee,X,ve),oe.unbindTexture()},this.copyTextureToTexture=function(v,I,H=null,V=null,X=0,ve=0){let ke,Ee,Fe,Ye,ht,yt,Ge,vt,$t,Ut=v.isCompressedTexture?v.mipmaps[ve]:v.image;if(H!==null)ke=H.max.x-H.min.x,Ee=H.max.y-H.min.y,Fe=H.isBox3?H.max.z-H.min.z:1,Ye=H.min.x,ht=H.min.y,yt=H.isBox3?H.min.z:0;else{let St=Math.pow(2,-X);ke=Math.floor(Ut.width*St),Ee=Math.floor(Ut.height*St),v.isDataArrayTexture?Fe=Ut.depth:v.isData3DTexture?Fe=Math.floor(Ut.depth*St):Fe=1,Ye=0,ht=0,yt=0}V!==null?(Ge=V.x,vt=V.y,$t=V.z):(Ge=0,vt=0,$t=0);let Nt=xe.convert(I.format),pn=xe.convert(I.type),Ve;I.isData3DTexture?(_e.setTexture3D(I,0),Ve=B.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(_e.setTexture2DArray(I,0),Ve=B.TEXTURE_2D_ARRAY):(_e.setTexture2D(I,0),Ve=B.TEXTURE_2D),oe.activeTexture(B.TEXTURE0),oe.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,I.flipY),oe.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),oe.pixelStorei(B.UNPACK_ALIGNMENT,I.unpackAlignment);let Mn=oe.getParameter(B.UNPACK_ROW_LENGTH),At=oe.getParameter(B.UNPACK_IMAGE_HEIGHT),Cs=oe.getParameter(B.UNPACK_SKIP_PIXELS),mn=oe.getParameter(B.UNPACK_SKIP_ROWS),Aa=oe.getParameter(B.UNPACK_SKIP_IMAGES);oe.pixelStorei(B.UNPACK_ROW_LENGTH,Ut.width),oe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut.height),oe.pixelStorei(B.UNPACK_SKIP_PIXELS,Ye),oe.pixelStorei(B.UNPACK_SKIP_ROWS,ht),oe.pixelStorei(B.UNPACK_SKIP_IMAGES,yt);let ss=v.isDataArrayTexture||v.isData3DTexture,Is=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let St=Ce.get(v),hn=Ce.get(I),ei=Ce.get(St.__renderTarget),kt=Ce.get(hn.__renderTarget);oe.bindFramebuffer(B.READ_FRAMEBUFFER,ei.__webglFramebuffer),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let rn=0;rn<Fe;rn++)ss&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.get(v).__webglTexture,X,yt+rn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.get(I).__webglTexture,ve,$t+rn)),B.blitFramebuffer(Ye,ht,Ye+ke,ht+Ee,Ge,vt,Ge+ke,vt+Ee,B.DEPTH_BUFFER_BIT,B.NEAREST);oe.bindFramebuffer(B.READ_FRAMEBUFFER,null),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||v.isRenderTargetTexture||Ce.has(v)){let St=Ce.get(v),hn=Ce.get(I);oe.bindFramebuffer(B.READ_FRAMEBUFFER,P),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,R);for(let ei=0;ei<Fe;ei++)ss?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,St.__webglTexture,X,yt+ei):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,St.__webglTexture,X),Is?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hn.__webglTexture,ve,$t+ei):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hn.__webglTexture,ve),X!==0?B.blitFramebuffer(Ye,ht,Ye+ke,ht+Ee,Ge,vt,Ge+ke,vt+Ee,B.COLOR_BUFFER_BIT,B.NEAREST):Is?B.copyTexSubImage3D(Ve,ve,Ge,vt,$t+ei,Ye,ht,ke,Ee):B.copyTexSubImage2D(Ve,ve,Ge,vt,Ye,ht,ke,Ee);oe.bindFramebuffer(B.READ_FRAMEBUFFER,null),oe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Is?v.isDataTexture||v.isData3DTexture?B.texSubImage3D(Ve,ve,Ge,vt,$t,ke,Ee,Fe,Nt,pn,Ut.data):I.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,ve,Ge,vt,$t,ke,Ee,Fe,Nt,Ut.data):B.texSubImage3D(Ve,ve,Ge,vt,$t,ke,Ee,Fe,Nt,pn,Ut):v.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ve,Ge,vt,ke,Ee,Nt,pn,Ut.data):v.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ve,Ge,vt,Ut.width,Ut.height,Nt,Ut.data):B.texSubImage2D(B.TEXTURE_2D,ve,Ge,vt,ke,Ee,Nt,pn,Ut);oe.pixelStorei(B.UNPACK_ROW_LENGTH,Mn),oe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At),oe.pixelStorei(B.UNPACK_SKIP_PIXELS,Cs),oe.pixelStorei(B.UNPACK_SKIP_ROWS,mn),oe.pixelStorei(B.UNPACK_SKIP_IMAGES,Aa),ve===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&B.generateMipmap(Ve),oe.unbindTexture()},this.initRenderTarget=function(v){Ce.get(v).__webglFramebuffer===void 0&&_e.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?_e.setTextureCube(v,0):v.isData3DTexture?_e.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?_e.setTexture2DArray(v,0):_e.setTexture2D(v,0),oe.unbindTexture()},this.resetState=function(){U=0,F=0,q=null,oe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var um={type:"change"},$u={type:"start"},fm={type:"end"},Pc=new yi,dm=new Hn,gM=Math.cos(70*Un.DEG2RAD),nn=new N,On=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yu=1e-6,Lc=class extends sa{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Kt,this._lastTargetPosition=new N,this._quat=new Kt().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hr,this._sphericalDelta=new Hr,this._scale=1,this._panOffset=new N,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new N,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xM.bind(this),this._onPointerDown=_M.bind(this),this._onPointerUp=yM.bind(this),this._onContextMenu=TM.bind(this),this._onMouseWheel=SM.bind(this),this._onKeyDown=bM.bind(this),this._onTouchStart=EM.bind(this),this._onTouchMove=wM.bind(this),this._onMouseDown=vM.bind(this),this._onMouseMove=MM.bind(this),this._interceptControlDown=AM.bind(this),this._interceptControlUp=RM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Rt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(um),this.update(),this.state=Rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;nn.copy(t).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=On:n>Math.PI&&(n-=On),s<-Math.PI?s+=On:s>Math.PI&&(s-=On),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),t.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=nn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Pc.origin.copy(this.object.position),Pc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pc.direction))<gM?this.object.lookAt(this.target):(dm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pc.intersectPlane(dm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yu||this._lastTargetPosition.distanceToSquared(this.target)>Yu?(this.dispatchEvent(um),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){nn.setFromMatrixColumn(t,0),nn.multiplyScalar(-e),this._panOffset.add(nn)}_panUp(e,t){this.screenSpacePanning===!0?nn.setFromMatrixColumn(t,1):(nn.setFromMatrixColumn(t,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(e),this._panOffset.add(nn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;nn.copy(s).sub(this.target);let r=nn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(On*this._rotateDelta.x/t.clientHeight),this._rotateUp(On*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function _M(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function xM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function yM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fm),this.state=Rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Rt.DOLLY;break;case Ms.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Rt.ROTATE}break;case Ms.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent($u)}function MM(i){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function SM(i){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(i.preventDefault(),this.dispatchEvent($u),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fm))}function bM(i){this.enabled!==!1&&this._handleKeyDown(i)}function EM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ai.ROTATE:if(this.enableRotate===!1){this.state=Rt.NONE;break}this._handleTouchStartRotate(i),this.state=Rt.TOUCH_ROTATE;break;case ai.PAN:if(this.enablePan===!1){this.state=Rt.NONE;break}this._handleTouchStartPan(i),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Rt.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent($u)}function wM(i){switch(this._trackPointer(i),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Rt.NONE}}function TM(i){this.enabled!==!1&&i.preventDefault()}function AM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new wt;c.morphTargetsRelative=a;let l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=pm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let p=pm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function pm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Lt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let y=h.getComponent(d,p);a.setComponent(d+u,p,y)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Zu(i,e){if(e===Su)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yr||e===da){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Yr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function mm(i){let e=new Map,t=new Map,n=i.clone();return gm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function gm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)gm(i.children[n],e.children[n],t)}var Dc=class extends Zn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Uc(t,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Uc(t,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Wn.extractUrlBase(e);o=Wn.resolveURL(l,this.path)}else o=Wn.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ji(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Mm){try{o[mt.KHR_BINARY_GLTF]=new _d(e)}catch(u){s&&s(u);return}r=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ed(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case mt.KHR_MATERIALS_UNLIT:o[u]=new ed;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[u]=new xd(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[u]=new yd;break;case mt.KHR_MESH_QUANTIZATION:o[u]=new vd;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function CM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Gt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qu=class{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],un);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Qi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ys(h),l.distance=u;break;case"spot":l=new ta(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ri(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},ed=class{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return dn}extendParams(e,t,n){let s=[];e.color=new Ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],un),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},nd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(r,r)}return Promise.all(s)}},id=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},rd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Pt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ad=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ze().setRGB(r[0],r[1],r[2],un),Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},hd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ze().setRGB(r[0],r[1],r[2],un),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Pt)),Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wn:null}extendMaterialParams(e,t){let n=Gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},pd=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},md=class{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Uc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},gd=class{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Jn.TRIANGLES&&l.mode!==Jn.TRIANGLE_STRIP&&l.mode!==Jn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let p of u){let y=new st,m=new N,g=new Kt,M=new N(1,1,1),S=new Gs(p.geometry,p.material,d);for(let T=0;T<d;T++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,T),c.SCALE&&M.fromBufferAttribute(c.SCALE,T),S.setMatrixAt(T,y.compose(m,g,M));let x=null;for(let T in c)if(T==="_COLOR_0"){let w=c[T];S.instanceColor=new Vi(w.array,w.itemSize,w.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(x===null){let _=S.geometry;x=new wt,x.name=_.name;for(let E in _.attributes)x.setAttribute(E,_.attributes[E]);for(let E in _.morphAttributes)x.morphAttributes[E]=_.morphAttributes[E];_.index!==null&&x.setIndex(_.index),x.morphTargetsRelative=_.morphTargetsRelative;for(let E of _.groups)x.addGroup(E.start,E.count,E.materialIndex);_.boundingBox!==null&&(x.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(x.boundingSphere=_.boundingSphere.clone()),x.drawRange.start=_.drawRange.start,x.drawRange.count=_.drawRange.count,x.userData=Object.assign({},_.userData),S.geometry=x}let w=c[T];x.setAttribute(T,new Vi(w.array,w.itemSize,w.normalized))}Ot.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Mm="glTF",xa=12,_m={JSON:1313821514,BIN:5130562},_d=class{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-xa,r=new DataView(e,xa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===_m.JSON){let l=new Uint8Array(e,xa+o,a);this.content=n.decode(l)}else if(c===_m.BIN){let l=xa+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Sd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Sd[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Jr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let y=f.attributes[p],m=c[p];m!==void 0&&(y.normalized=m)}u(f)},a,l,un,d)})})}},yd=class{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},vd=class{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}},Oc=class extends bi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,y=p-l,m=-2*f+3*d,g=f-d,M=1-m,S=g-d+u;for(let x=0;x!==a;x++){let T=o[y+x+a],w=o[y+x+c]*h,_=o[p+x+a],E=o[p+x]*h;r[x]=M*T+S*w+m*_+g*E}return r}},IM=new Kt,Md=class extends Oc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return IM.fromArray(r).normalize().toArray(r),r}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xm={9728:Yt,9729:Bt,9984:zl,9985:Xr,9986:Qs,9987:xn},ym={33071:In,33648:Tr,10497:$n},Ku={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PM={CUBICSPLINE:void 0,LINEAR:ks,STEP:Bs},Ju={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function LM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ei})),i.DefaultMaterial}function nr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function NM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function DM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function UM(i){let e,t=i.extensions&&i.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ju(t.attributes):e=i.indices+":"+ju(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ju(i.targets[n]);return e}function ju(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function bd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var FM=new st,Ed=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new CM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new jo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new na(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ji(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return nr(r,a,s),Ri(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Wn.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Ku[s.type],a=Jr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Lt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Ku[s.type],l=Jr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,y,m;if(f&&f!==u){let g=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,S=t.cache.get(M);S||(y=new l(a,g*f,s.count*f/h),S=new gs(y,f/h),t.cache.add(M,S)),m=new _s(S,c,d%f/h,p)}else a===null?y=new l(s.count*c):y=new l(a,d,s.count*c),m=new Lt(y,c,p);if(s.sparse!==void 0){let g=Ku.SCALAR,M=Jr[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,T=new M(o[1],S,s.sparse.count*g),w=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,E=T.length;_<E;_++){let L=T[_];if(m.setX(L,w[_*c]),c>=2&&m.setY(L,w[_*c+1]),c>=3&&m.setZ(L,w[_*c+2]),c>=4&&m.setW(L,w[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=xm[d.magFilter]||Bt,h.minFilter=xm[d.minFilter]||xn,h.wrapS=ym[d.wrapS]||$n,h.wrapT=ym[d.wrapT]||$n,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==Bt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,p){let y=f;t.isImageBitmapLoader===!0&&(y=function(m){let g=new an(m);g.needsUpdate=!0,f(g)}),t.load(Wn.resolveURL(d,r.path),y,void 0,p)})})}let u=h.then(function(d){return l===!0&&a.revokeObjectURL(c),Ri(d,o),d.userData.mimeType=o.mimeType||OM(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[mt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Dr,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ys,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ht}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[mt.KHR_MATERIALS_UNLIT]){let u=s[mt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ze(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],un),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Kn);let h=r.alphaMode||Ju.OPAQUE;if(h===Ju.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ju.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==dn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==dn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==dn){let u=r.emissiveFactor;a.emissive=new Ze().setRGB(u[0],u[1],u[2],un)}return r.emissiveTexture!==void 0&&o!==dn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ri(u,r),t.associations.set(u,{materials:e}),r.extensions&&nr(s,u,r),u})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return vm(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=UM(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=vm(new wt,l,t),l.mode===Jn.TRIANGLE_STRIP?d=d.then(f=>Zu(f,da)):l.mode===Jn.TRIANGLE_FAN&&(d=d.then(f=>Zu(f,Yr))),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?LM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let y=h[f],m=o[f],g,M=l[f];if(m.mode===Jn.TRIANGLES||m.mode===Jn.TRIANGLE_STRIP||m.mode===Jn.TRIANGLE_FAN||m.mode===void 0){let S=r.isSkinnedMesh===!0,x=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");S&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=S&&x?new Co(y,M):new bt(y,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Jn.LINES)g=new Po(y,M);else if(m.mode===Jn.LINE_STRIP)g=new Wi(y,M);else if(m.mode===Jn.LINE_LOOP)g=new Lo(y,M);else if(m.mode===Jn.POINTS)g=new No(y,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&DM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ri(g,r),m.extensions&&nr(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&nr(s,u[0],r),u[0];let d=new Vt;r.extensions&&nr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(Un.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new $s(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new st;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Io(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],y=f.target,m=y.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,M=s.parameters!==void 0?s.parameters[p.output]:p.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",M)),l.push(p),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],y=u[3],m=u[4],g=[];for(let S=0,x=d.length;S<x;S++){let T=d[S],w=f[S],_=p[S],E=y[S],L=m[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let C=n._createAnimationTracks(T,w,_,E,L);if(C)for(let D=0;D<C.length;D++)g.push(C[D])}let M=new Jo(r,void 0,g);return Ri(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,FM)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new N().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Nr:l.length>1?h=new Vt:l.length===1?h=l[0]:h=new Ot,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ri(h,r),r.extensions&&nr(n,h,r),r.matrix!==void 0){let u=new st;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Vt;n.name&&(r.name=s.createUniqueName(n.name)),Ri(r,n),n.extensions&&nr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(mm(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof En||d instanceof an)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}bs[r.path]===bs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(bs[r.path]){case bs.weights:h=Zi;break;case bs.rotation:h=Ki;break;case bs.translation:case bs.scale:h=vs;break;default:n.itemSize===1?h=Zi:h=vs;break}let u=s.interpolation!==void 0?PM[s.interpolation]:ks,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let y=new h(c[f]+"."+bs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ki?Md:Oc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function BM(i,e,t){let n=e.attributes,s=new bn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){let h=bd(Jr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new N,c=new N;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let y=bd(Jr[d.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function vm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Sd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return dt.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),Ri(i,e),BM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?NM(i,e.targets,t):i})}var wd=new WeakMap,kM=new URL("../libs/draco/draco_decoder.wasm",import.meta.url).toString(),zM=new URL("../libs/draco/draco_wasm_wrapper.js",import.meta.url).toString(),HM=new URL("../libs/draco/draco_decoder.js",import.meta.url).toString(),ow={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",import.meta.url).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",import.meta.url).toString()},Fc=class extends Zn{constructor(e){super(e),this.decoderPaths={js:zM,wasm:kM,dep_js:HM},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Wn.resolveURL("draco_wasm_wrapper.js",e),t.wasm=Wn.resolveURL("draco_decoder.wasm",e),t.dep_js=Wn.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new ji(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Pt,n).catch(n)}decodeDracoFile(e,t,n,s,r=un,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(wd.has(e)){let c=wd.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),wd.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new wt;e.index&&t.setIndex(new Lt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:s,array:r,itemSize:o,stride:a,vertexColorSpace:c}=e.attributes[n],l;if(o===a)l=new Lt(r,o);else{let h=new gs(r,a);l=new _s(h,o,0)}s==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(r instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Pt)return;let n=new Ze;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),dt.colorSpaceToWorking(n,Pt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new ji(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(s=>{let r=s[0];e||(this.decoderConfig.wasmBinary=s[1]);let o=GM.toString(),a=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function GM(){let i,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(c),l),p=f.attributes.map(y=>y.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){let h=l.attributeIDs,u=l.attributeTypes,d,f,p=a.GetEncodedGeometryType(c);if(p===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(p===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let y={index:null,attributes:[]};for(let m in h){let g=self[u[m]],M,S;if(l.useUniqueIDs)S=h[m],M=a.GetAttributeByUniqueId(d,S);else{if(S=a.GetAttributeId(d,o[h[m]]),S===-1)continue;M=a.GetAttribute(d,S)}let x=s(o,a,d,m,g,M);m==="color"&&(x.vertexColorSpace=l.vertexColorSpace),y.attributes.push(x)}return p===o.TRIANGULAR_MESH&&(y.index=n(o,a,d)),o.destroy(d),y}function n(o,a,c){let h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);let f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,c,l,h,u){let d=c.num_points(),f=u.num_components(),p=r(o,h),y=f*h.BYTES_PER_ELEMENT,m=Math.ceil(y/4)*4,g=m/h.BYTES_PER_ELEMENT,M=d*y,S=d*m,x=o._malloc(M);a.GetAttributeDataArrayForAllPoints(c,u,p,M,x);let T=new h(o.HEAPF32.buffer,x,M/h.BYTES_PER_ELEMENT),w;if(y===m)w=T.slice();else{w=new h(S/h.BYTES_PER_ELEMENT);let _=0;for(let E=0;E<d;E++){for(let L=0;L<f;L++)w[_+L]=T[E*f+L];_+=g}}return o._free(x),{name:l,count:d,itemSize:f,array:w,stride:g}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Bc=class extends Hs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ft;e.deleteAttribute("uv");let t=new Ht({side:fn}),n=new Ht,s=new Ys(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new bt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Gs(e,n,6),a=new Ot;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new bt(e,jr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new bt(e,jr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new bt(e,jr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new bt(e,jr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new bt(e,jr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new bt(e,jr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function jr(i){return new Zo({color:0,emissive:16777215,emissiveIntensity:i})}function Sm({height:i=1,materials:e}={}){if(!e||["stone","darkStone","bronze","darkBronze","inlay"].some(R=>!e[R]?.isMaterial))throw new TypeError("\u5E2D\u53F0\u9700\u8981\u5B8C\u6574\u7684\u77F3\u6750\u3001\u6DF1\u77F3\u3001\u9752\u9285\u3001\u6DF1\u9752\u9285\u8207\u5D4C\u98FE\u6750\u8CEA\u3002");let t=Number(i);if(!Number.isFinite(t)||t<.34)throw new RangeError("\u5E2D\u53F0\u9AD8\u5EA6\u5FC5\u9808\u81F3\u5C11\u70BA 0.34\u3002");let n=new Vt;n.name="oathkeeper-wolf-seat",n.userData={artStudy:!0,standingHeight:t+.075,inwardAxis:"+Z",materialsOwnedByCaller:!0};let s=Object.fromEntries(Object.keys(e).map(R=>[R,[]])),r=new Kt,o=new st,a=new N,c=new N(1,1,1);function l(R,U,F=[0,0,0],q=[0,0,0]){r.setFromEuler(new Pn(...q)),o.compose(a.set(...F),r,c),U.applyMatrix4(o);let k=U.attributes.position,G=U.attributes.normal,K=new Float32Array(k.count*2);for(let Q=0;Q<k.count;Q++){let Ae=Math.abs(G.getX(Q)),$=Math.abs(G.getY(Q)),he=Math.abs(G.getZ(Q));$>=Ae&&$>=he?(K[Q*2]=k.getX(Q),K[Q*2+1]=k.getZ(Q)):Ae>he?(K[Q*2]=k.getZ(Q),K[Q*2+1]=k.getY(Q)):(K[Q*2]=k.getX(Q),K[Q*2+1]=k.getY(Q))}if(U.userData.keepSurfaceUv||U.setAttribute("uv",new Lt(K,2)),!U.getAttribute("color")||!U.getAttribute("uv1")){let Q=new Float32Array(k.count*3),Ae=new Float32Array(k.count*2),$=R==="bronze"||R==="darkBronze";for(let he=0;he<k.count;he++){let ce=G.getY(he),ze=Math.abs(G.getX(he)),Re=Math.abs(G.getZ(he)),We=Math.min(1,(1-Math.max(ze,Math.abs(ce),Re))*3),Mt=ce<-.25?.34:.08,Ke=$?.1+We*.47:.04+We*.17,et=1-Mt*($?.12:.09)+We*($?.045:.035);Q.set([et,et,et],he*3),Ae.set([Ke,Mt],he*2)}U.getAttribute("color")||U.setAttribute("color",new Lt(Q,3)),U.getAttribute("uv1")||U.setAttribute("uv1",new Lt(Ae,2))}s[R].push(U)}function h(R,U,F=.18,q=0){let k=R/2,G=U/2,K=q>.02&&R>1.78,Q=R>1.78&&R<1.86;return[[-k+F,-G],[k-F,-G],[k,-G+F],[k,G-F],[k-F,G],...Q?[[.46,G],[.43,G-.012],[.385,G-.016],[.35,G]]:[],[-k+F+(K&&!Q?q*1.6:0),G],...K&&!Q?[[-k+F*.55,G-q*.65]]:[],[-k,G-F],[-k,-G+F]]}function u(R,U,F=.014){let q=Math.min(F,U*.22),k=new Mi(R.map(([G,K])=>new ae(G,-K)));return new Yi(k,{depth:U-q*2,bevelEnabled:q>0,bevelThickness:q,bevelSize:q,bevelSegments:2,steps:1,curveSegments:1}).rotateX(-Math.PI/2).translate(0,-U/2+q,0)}function d(R,U,F,q,k,G=.17,K=0,Q=0,Ae=0){l(R,u(h(U,F,G,K),q,Math.min(.014,q*.15)),[Q,k,Ae])}function f(R,U,F=.006,q=[]){let k=Math.min(F,U*.2),G=new Mi(R.map(([K,Q])=>new ae(K,Q)));for(let K of q)G.holes.push(new Vs(K.map(([Q,Ae])=>new ae(Q,Ae))));return new Yi(G,{depth:U-k*2,bevelEnabled:k>0,bevelThickness:k,bevelSize:k,bevelSegments:2,steps:1,curveSegments:1}).translate(0,0,k)}function p(R,U,F,q=[0,0,0]){let k=[];for(let K of F)for(let Q of K)k.push(...U[Q]);let G=new wt;G.setAttribute("position",new ut(k,3)),G.computeVertexNormals(),l(R,G,q)}function y(R,U){let F=(me,Se=0,Ne=1)=>Math.max(Se,Math.min(Ne,me)),q=(me,Se,Ne)=>Math.exp(-Math.pow((me-Se)/Ne,2)),k=(me,Se,Ne)=>{let oe=F((Ne-me)/(Se-me));return oe*oe*(3-2*oe)},G=[[-.285,.015],[-.26,.038],[-.205,.084],[-.14,.118],[-.075,.16],[-.008,.192],[.055,.205],[.11,.184],[.16,.147],[.205,.088],[.228,.034]],K=[[-.285,.028],[-.25,.065],[-.21,.119],[-.17,.143],[-.12,.132],[-.05,.102],[.025,.064],[.1,.029],[.17,.012],[.228,0]],Q=new Map;function Ae(me,Se){let Ne=Q.get(me);if(!Ne){let oe=[],Je=[];for(let _e=1;_e<me.length;_e++){let A=me[_e][0]-me[_e-1][0];oe.push(A),Je.push((me[_e][1]-me[_e-1][1])/A)}let Ce=(_e,A,b,W)=>{let le=((2*b+W)*_e-b*A)/(b+W);return le*_e<=0?0:_e*A<0&&Math.abs(le)>Math.abs(3*_e)?3*_e:le};Ne=[Ce(Je[0],Je[1],oe[0],oe[1])];for(let _e=1;_e<me.length-1;_e++){let A=Je[_e-1],b=Je[_e],W=2*oe[_e]+oe[_e-1],le=oe[_e]+2*oe[_e-1];Ne.push(A*b<=0?0:(W+le)/(W/A+le/b))}Ne.push(Ce(Je.at(-1),Je.at(-2),oe.at(-1),oe.at(-2))),Q.set(me,Ne)}for(let oe=1;oe<me.length;oe++)if(Se<=me[oe][0]){let[Je,Ce]=me[oe-1],[_e,A]=me[oe],b=F((Se-Je)/(_e-Je)),W=b*b,le=W*b;return(2*le-3*W+1)*Ce+(le-2*W+b)*(_e-Je)*Ne[oe-1]+(-2*le+3*W)*A+(le-W)*(_e-Je)*Ne[oe]}return me.at(-1)[1]}function $(me,Se){let Ne=Math.abs(me),oe=Ae(G,Se),Je=F(Ne/oe),Ce=q(Ne,.128,.067)*q(Se,-.026,.087),_e=(1-Je*Je)*q(Se,.115,.13),A=.022+Ne*.35,b=q(Ne,.107,.047)*q(Se,A,.0085),W=q(Ne,.108,.059)*q(Se,A+.025,.0105),le=.026+.044*(1-k(-.2,.12,Se)),se=Math.exp(-Math.pow(Ne/le,4)),pe=(1-k(.056,.088,Ne))*q(Se,-.24+Ne*.29,.0034),we=q(Ne,.105-Se*.3,.0048)*q(Se,-.044,.07),ee=q(Ne,.034+(Se-.1)*.16,.0028)*q(Se,.153,.05),ie=.805+_e*.052+Ce*.037+W*.018+Ae(K,Se)*se-b*.021-pe*.01-we*.0028-ee*.0027,ye=q(Ne,.038,.011)*q(Se,-.184,.0055);ie-=ye*.008;let O=F(b*.72+pe*.88+we*.3+ee*.45+ye*.75),ne=F(.11+W*.3+se*q(Se,-.09,.18)*.32+(1-k(.025,.075,1-Je))*.25-O*.1,.03,.82),j=1-O*.24;return{z:Math.max(.801,ie),cavity:O,wear:ne,color:[j+ne*.035,j+ne*.016,j-ne*.008]}}let he=128,ce=64,ze=[],Re=[],We=[],Mt=[],Ke=[];for(let me=0;me<=he;me++){let Se=.228-.513*me/he,Ne=Ae(G,Se);for(let oe=0;oe<=ce;oe++){let Je=Ne*(oe/ce*2-1),Ce=$(Je,Se);ze.push(Je,Se*R+U,Ce.z),Ke.push(Je,Se*R+U),Re.push(...Ce.color),We.push(Ce.wear,Ce.cavity)}}for(let me=0;me<he;me++)for(let Se=0;Se<ce;Se++){let Ne=me*(ce+1)+Se,oe=Ne+ce+1;Mt.push(Ne,oe,Ne+1,Ne+1,oe,oe+1)}let et=new wt;et.setAttribute("position",new ut(ze,3)),et.setAttribute("color",new ut(Re,3)),et.setAttribute("uv1",new ut(We,2)),et.setAttribute("uv",new ut(Ke,2)),et.userData.keepSurfaceUv=!0,et.setIndex(Mt),et.computeVertexNormals(),l("bronze",et);let rt=[];for(let me=0;me<=ce;me++)rt.push(me);for(let me=1;me<=he;me++)rt.push(me*(ce+1)+ce);for(let me=ce-1;me>=0;me--)rt.push(he*(ce+1)+me);for(let me=he-1;me>0;me--)rt.push(me*(ce+1));let re=[],ge=[];rt.forEach(me=>{re.push(...ze.slice(me*3,me*3+3),ze[me*3],ze[me*3+1],.785)});for(let me=0;me<rt.length;me++){let Se=me*2,Ne=(me+1)%rt.length*2;ge.push(Se,Se+1,Ne,Ne,Se+1,Ne+1)}let fe=new wt;fe.setAttribute("position",new ut(re,3)),fe.setIndex(ge),fe.computeVertexNormals(),l("bronze",fe);for(let me of[-1,1]){let Se=Je=>{let Ce=Je.attributes.position;for(let _e=0;_e<Ce.count;_e++){let A=1-k(.14,.23,Ce.getY(_e));Ce.setX(_e,Ce.getX(_e)-me*.006*A),Ce.setZ(_e,Ce.getZ(_e)-.02*A)}return Je.computeVertexNormals(),Je.scale(1,R,1)};l("bronze",Se(f([[.077,.133],[.109,.221],[.158,.294],[.178,.302],[.182,.276],[.155,.183],[.129,.133]].map(([Je,Ce])=>[me*Je,Ce]),.043,.006)),[0,U,.799]),l("darkBronze",Se(f([[.123,.19],[.142,.247],[.163,.278],[.157,.239],[.145,.19]].map(([Je,Ce])=>[me*Je,Ce]),.002,4e-4)),[0,U,.841])}let Pe=12,Me=28,tt=[],He=[],nt=[],lt=[],gt=[];for(let me=0;me<=Pe;me++){let Se=me/Pe,Ne=-.159-.061*Se,oe=.059*Math.pow(Math.sin(Math.PI*(.12+.76*Se)),.55);for(let Je=0;Je<=Me;Je++){let Ce=oe*(2*Je/Me-1),_e=$(Ce,Ne);tt.push(Ce,Ne*R+U,_e.z+.0013),gt.push(Ce,Ne*R+U);let A=.91-_e.cavity*.17;He.push(A,A,A),nt.push(.17+_e.wear*.3,_e.cavity)}}for(let me=0;me<Pe;me++)for(let Se=0;Se<Me;Se++){let Ne=me*(Me+1)+Se,oe=Ne+Me+1;lt.push(Ne,oe,Ne+1,Ne+1,oe,oe+1)}let B=new wt;B.setAttribute("position",new ut(tt,3)),B.setAttribute("color",new ut(He,3)),B.setAttribute("uv1",new ut(nt,2)),B.setAttribute("uv",new ut(gt,2)),B.userData.keepSurfaceUv=!0,B.setIndex(lt),B.computeVertexNormals(),l("darkBronze",B)}function m(R,U,F,q="bronze"){let k=[],G=[];for(let K=0;K<R.length;K++){let Q=R[Math.max(0,K-1)],Ae=R[Math.min(R.length-1,K+1)],$=Ae[0]-Q[0],he=Ae[1]-Q[1],ce=Math.hypot($,he)||1;k.push([R[K][0]-he/ce*U/2,R[K][1]+$/ce*U/2]),G.push([R[K][0]+he/ce*U/2,R[K][1]-$/ce*U/2])}return{key:q,geometry:f([...k,...G.reverse()],F,.002)}}function g(R,U,F,q=.019,k=0){let G=new Jt(q,q*1.05,.012,8).rotateX(Math.PI/2);l("bronze",G,[R,U,F],[0,0,k]),l("darkBronze",new Ft(q*.7,.004,.002),[R,U,F+.0065],[0,0,k])}[[[-1.005,-1.005],[-.1,-1.005],[-.1,-.84],[-.78,-.78],[-1.005,-.86]],[[-.075,-1.005],[.68,-1.005],[.995,-.83],[.84,-.69],[-.075,-.8]],[[-1.005,-.83],[-.82,-.74],[-.81,.13],[-1.005,.24]],[[-1.005,.265],[-.82,.155],[-.7,.81],[-.89,1.005],[-1.005,.94]],[[-.865,1.005],[-.69,.835],[.04,.84],[.08,1.005]],[[.105,1.005],[.065,.84],[.74,.815],[1.005,.97],[.93,1.005]],[[1.005,.94],[.83,.76],[.84,.04],[1.005,-.06]],[[1.005,-.095],[.845,.015],[.83,-.66],[1.005,-.8]]].forEach((R,U)=>l(U%3===0?"darkStone":"stone",u(R,.025,.003),[0,.054+U%2*.003,0])),d("darkStone",1.9,1.91,.11,.116,.27,.035),d("stone",1.83,1.84,.085,.2035,.25,.022),d("darkStone",1.68,1.7,.035,.26,.23,.015);let S=.245,x=t-.095,T=Math.max(.035,x-S),w=Math.max(1,Math.round(T/.26)),_=T/w;for(let R=0;R<w;R++){let U=R/Math.max(1,w-1);d(R===0?"darkStone":"stone",1.48-U*.055,1.51-U*.055,Math.max(.02,_-.014),S+_*(R+.5),.205,R===1?.023:.006)}let E=.18,L=Math.max(.26,t-.09);for(let R of[-1,1])for(let U of[-1,1]){let F=[[R*.44,E,U*.8],[R*.77,E,U*.77],[R*.8,E,U*.44],[R*.55,E,U*.5],[R*.46,L,U*.66],[R*.65,L,U*.65],[R*.66,L,U*.46],[R*.52,L,U*.52]],q=[[0,1,5],[0,5,4],[1,2,6],[1,6,5],[2,3,7],[2,7,6],[3,0,4],[3,4,7],[4,5,6],[4,6,7]];R*U<0&&(q=q.map(G=>[...G].reverse())),p("darkStone",F,q);let k=.29;l("darkBronze",f([[-.11,-.055],[.11,-.055],[.085,.055],[-.085,.055]],.016,.004),[R*.65,k,U*.762],[0,U<0?Math.PI:0,0]),g(R*.65,k,U*.776,.016)}d("darkStone",1.63,1.67,.075,t-.065,.225,.012),d("bronze",1.7,1.74,.022,t-.0225,.235,.008),d("stone",1.76,1.8,.068,t+.018,.235,.018),[[[-.625,-.855],[.035,-.855],[.035,.12],[-.855,.12],[-.855,-.625]],[[.049,-.855],[.625,-.855],[.855,-.625],[.855,-.19],[.049,-.19]],[[.049,-.176],[.855,-.176],[.855,.625],[.625,.855],[.3,.855],[.265,.836],[.21,.855],[.049,.855]],[[-.855,.134],[.035,.134],[.035,.855],[-.625,.855],[-.855,.625]]].forEach((R,U)=>l(U===1?"darkStone":"stone",u(R,.019,.002),[0,t+.0625,0]));for(let R of[-1,1])for(let U of[-1,1]){let F=[[R*.63,U*.85],[R*.85,U*.63],[R*.85,U*.42],[R*.42,U*.85]];l("bronze",u(F,.005,7e-4),[0,t+.072,0]),l("darkBronze",new Jt(.018,.018,.003,8),[R*.68,t+.0735,U*.68])}let D=Math.min(1,Math.max(.28,(t-.3)/.7)),z=S+T*.51,Y=[[-.36,-.3],[.36,-.3],[.43,-.2],[.43,.19],[.33,.29],[-.33,.29],[-.43,.19],[-.43,-.2]];l("stone",f(Y,.031,.009).scale(1,D,1),[0,z,.746]),l("darkStone",f(Y.map(([R,U])=>[R*.94,U*.93]),.012,.005).scale(1,D,1),[0,z,.778]),y(D,z);for(let R of[-1,1])for(let U of[-.195,.195])g(R*.351,z+U*D,.797,.013,R*.24);l("inlay",new Ft(.055,.005,.002),[-.26,z-.248*D,.792]),l("darkBronze",f([[-.56,-.026],[.56,-.026],[.59,.026],[-.59,.026]],.012,.002),[0,t-.006,.881]);for(let R of[-1,1]){let U=m([[R*.08,-.012],[R*.21,.012],[R*.34,-.012],[R*.47,.012]],.014,.006);l("bronze",U.geometry,[0,t-.006,.895]),g(R*.55,t-.006,.895,.012)}let P={stone:"dressed-stone-and-crown",darkStone:"basalt-bearing-and-recesses",bronze:"cast-wolf-and-bronze-bindings",darkBronze:"oxidized-metal-recesses",inlay:"mineral-chisel-edge"};for(let R of["stone","darkStone","bronze","darkBronze","inlay"]){let U=s[R];if(!U.length)continue;let F=U.map(G=>G.index?G.toNonIndexed():G),q=Nc(F,!1);if(new Set([...U,...F]).forEach(G=>G.dispose()),!q)throw new Error(`\u5E2D\u53F0\u5E7E\u4F55\u7121\u6CD5\u5408\u4F75\uFF1A${R}`);q.computeBoundingBox(),q.computeBoundingSphere();let k=new bt(q,e[R]);k.name=P[R],k.castShadow=R!=="inlay",k.receiveShadow=!0,n.add(k)}return n.userData.meshes=n.children.length,n.userData.triangles=n.children.reduce((R,U)=>R+U.geometry.attributes.position.count/3,0),n}var xt=512,Es=128,VM=Math.PI*2,ws=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),kc=(i,e,t)=>i+(e-i)*t,Bn=(i,e,t)=>{let n=ws((t-i)/(e-i));return n*n*(3-2*n)};function Fn(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^t;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function Tn(i,e,t,n,s){let r=i*t,o=e*n,a=Math.floor(r),c=Math.floor(o),l=r-a,h=o-c,u=l*l*(3-2*l),d=h*h*(3-2*h),f=(a%t+t)%t,p=(c%n+n)%n,y=(f+1)%t,m=(p+1)%n;return kc(kc(Fn(f,p,s),Fn(y,p,s),u),kc(Fn(f,m,s),Fn(y,m,s),u),d)}function ya(i,e,t=!1,n=xt){let s=new vi(i,n,n,yn);return s.name=e,s.colorSpace=t?Pt:hi,s.wrapS=s.wrapT=$n,s.magFilter=Bt,s.minFilter=xn,s.generateMipmaps=!0,s.anisotropy=2,s.needsUpdate=!0,s}function bm(i,e){let t=new Uint8Array(xt*xt*4),n=(r,o)=>i[(o+xt)%xt*xt+(r+xt)%xt],s=xt/2;for(let r=0;r<xt;r+=1)for(let o=0;o<xt;o+=1){let a=-(n(o+1,r)-n(o-1,r))*s,c=-(n(o,r+1)-n(o,r-1))*s,l=Math.hypot(a,c,1),h=(r*xt+o)*4;t[h]=Math.round((a/l*.5+.5)*255),t[h+1]=Math.round((c/l*.5+.5)*255),t[h+2]=Math.round((1/l*.5+.5)*255),t[h+3]=255}return ya(t,e)}function WM(){let i=new Uint8Array(Es*Es*4);for(let t=0;t<Es;t+=1){let n=t/(Es-1);for(let s=0;s<Es;s+=1){let r=s/(Es-1),o=(t*Es+s)*4;i[o]=Math.round(255*(1-n*.38*(1-r*.45))),i[o+1]=Math.round(255*ws(.87-r*.53+n*.14-Bn(.45,.85,r)*.1,.29,.99)),i[o+2]=Math.round(255*ws(.96-n*.44+r*.025)),i[o+3]=255}}let e=ya(i,"hero-position-wear-cavity-response-linear",!1,Es);return e.channel=1,e.wrapS=e.wrapT=In,e.generateMipmaps=!1,e.minFilter=Bt,e}function XM(){return Array.from({length:42},(i,e)=>{let t=e%7,n=Math.floor(e/7);if(Fn(t,n,90071)<.66)return null;let s=-.95+Fn(t,n,6587)*1.9;return{x:.26+Fn(t,n,9067)*.48,y:.25+Fn(t,n,4729)*.5,cos:Math.cos(s),sin:Math.sin(s),reach:.017+Fn(t,n,137)*.023,step:.008+Fn(t,n,6329)*.007,widths:[-1,0,1].map(r=>.0018+Fn(t+r,n,691)*.0016)}})}function qM(i,e,t){let n=Math.floor(i*7),s=Math.floor(e*6),r=t[s*7+n];if(!r)return 0;let o=(i*7-n-r.x)/7,a=(e*6-s-r.y)/6,c=o*r.cos-a*r.sin,l=o*r.sin+a*r.cos,h=1-Bn(r.reach*.55,r.reach,Math.abs(c));if(h===0||Math.abs(l)>r.step+.0035)return 0;let u=.8+Tn(i,e,61,67,4831)*.2,d=0;for(let f=-1;f<=1;f+=1){let p=l-f*r.step,y=r.widths[f+1];d=Math.max(d,(1-Bn(y*.12,y,Math.abs(p)))*h*u)}return d}function YM(){let i=new Uint8Array(xt*xt*4),e=new Uint8Array(xt*xt*4),t=new Float32Array(xt*xt),n=XM();for(let s=0;s<xt;s+=1)for(let r=0;r<xt;r+=1){let o=r/xt,a=s/xt,c=Tn(o,a,3,4,741),l=(Tn(o,a,5,6,8021)-.5)*.17,h=(Tn(o,a,6,5,6029)-.5)*.17,u=Tn(o+l,a+h,11,9,1283),d=Tn(o+h,a-l,23,21,2801),f=Tn(o,a,47,53,2291),p=Tn(o,a,181,173,3779),y=Tn(o+l*.7,a+h*.7,7,8,1619),m=(1-Bn(.009,.035,Math.abs(y-.53)))*Bn(.55,.73,Tn(o,a,5,7,3251)),g=(1-Bn(.004,.018,Math.abs(u-.42)))*Bn(.59,.78,c)*(.5+d*.5),M=Bn(.64,.83,u*.55+d*.45),S=qM(o,a,n),x=Math.floor(o*83),T=Math.floor(a*83),w=Fn(x,T,44701),_=o*83-x-(.22+Fn(x,T,331)*.56),E=a*83-T-(.22+Fn(x,T,991)*.56),L=w>.88&&d>.43?1-Bn(.025,.14,Math.hypot(_,E*1.4)):0,C=(c-.5)*13+(u-.5)*11+(d-.5)*8+(f-.5)*5+(p-.5)*2,D=(s*xt+r)*4;i[D]=ws(76+C+m*5+M*4-g*7-L*17-S*7,0,255),i[D+1]=ws(78+C+m*5+M*4-g*7-L*16-S*7,0,255),i[D+2]=ws(81+C+m*4+M*4-g*6-L*14-S*6,0,255),i[D+3]=255,e[D]=255-L*45-g*12-S*22,e[D+1]=ws(222+(u-.5)*19+L*19+S*16-m*9-M*4,181,250),e[D+2]=2,e[D+3]=255,t[s*xt+r]=(d-.5)*.0012+(f-.5)*.0018+(p-.5)*3e-4+m*12e-5-g*38e-5-L*.0017-S*.0014}return{base:ya(i,"hero-cut-stone-base-srgb",!0),response:ya(e,"hero-cut-stone-surface-linear"),normal:bm(t,"hero-cut-stone-normal-linear")}}function $M(){let i=new Uint8Array(xt*xt*4),e=new Float32Array(xt*xt),t=0;for(let n=0;n<xt;n+=1)for(let s=0;s<xt;s+=1){let r=s/xt,o=n/xt,a=Tn(r,o,7,9,2341),c=Tn(r,o,4,5,6301),l=Tn(r,o,23,19,7517),h=Tn(r,o,173,151,2017),u=Tn(r,o,251,19,3067),d=Bn(.71,.84,c*.72+l*.28)*Bn(.48,.69,l),f=Bn(.62,.84,a*.6+c*.4),p=VM*(r*151+o*3)+(a-.5)*1.1,y=(1-Bn(.018,.052,Math.abs(Math.sin(p))))*Bn(.42,.64,l)*(1-d),m=(a-.5)*8+(h-.5)*3+(u-.5)*2,g=[132+m,109+m*.85,76+m*.65],M=[99+m*.4,109+m*.4,91+m*.4],S=(n*xt+s)*4;for(let x=0;x<3;x+=1)i[S+x]=ws(kc(g[x]-f*7,M[x],d*.65)+y*5,0,255);i[S+3]=255,e[n*xt+s]=(h-.5)*16e-5+(u-.5)*7e-5+d*13e-5-y*15e-5,t+=d}return{base:ya(i,"hero-cast-bronze-base-srgb",!0),normal:bm(e,"hero-cast-bronze-normal-linear"),oxidationCoverage:t/(xt*xt)}}function Em(){let i=performance.now(),e=YM(),t=$M(),n=WM(),s=(g,M,S,x)=>new Ht({name:g,color:M,map:e.base,normalMap:e.normal,vertexColors:!0,normalScale:new ae(S,S),roughnessMap:n,roughness:x,metalness:.015,aoMap:e.response,aoMapIntensity:.65}),r=s("hand-cut-northern-stone",12567494,.95,1),o=s("recessed-northern-basalt",9673118,.9,1),a=(g,M,S,x)=>new Ht({name:g,color:M,map:t.base,normalMap:t.normal,vertexColors:!0,normalScale:new ae(x,x),roughnessMap:n,metalnessMap:n,aoMap:n,aoMapIntensity:.65,roughness:S,metalness:1}),c=a("aged-bronze-castwork",14077885,.86,.85),l=a("bronze-recess-and-shadow",11841181,.96,.9),h=new Ht({name:"pale-mineral-inlay",color:12567986,vertexColors:!0,roughnessMap:e.response,roughness:.82,metalness:.03,normalMap:e.normal,normalScale:new ae(.25,.25)}),u=[r,o,c,l,h],d=[...new Set([e.base,e.response,e.normal,t.base,t.normal,n])],f=d.reduce((g,M)=>g+M.image.data.byteLength,0),p=Object.freeze({textureCount:d.length,textureSize:xt,textureSizes:d.map(g=>[g.image.width,g.image.height]),cpuImageBytes:f,estimatedGpuBytesWithMipmaps:Math.ceil(d.reduce((g,M)=>g+M.image.data.byteLength*(M.generateMipmaps?4/3:1),0)),bronzeMeanOxidation:t.oxidationCoverage,generatedInMs:performance.now()-i,uvMetresPerTile:1,positionDrivenResponse:{channel:1,u:"polished wear",v:"recess cavity and oxidation"},note:"GPU estimate assumes RGBA8 and mips only for the five detail maps; excludes geometry, programs and driver overhead."});u.forEach(g=>{g.userData.heroSeatTextureStats=p});let y=!1;function m(){y||(y=!0,d.forEach(g=>g.dispose()),u.forEach(g=>g.dispose()))}return{stone:r,darkStone:o,bronze:c,darkBronze:l,inlay:h,dispose:m,stats:p}}var wm=Object.freeze([Object.freeze({x:-.105,z:.065,radiusX:.095,radiusZ:.155}),Object.freeze({x:.105,z:.065,radiusX:.095,radiusZ:.155})]);function Am(i){let e=i.getObjectByName("Web Fenrir_Body_Low_Prototype");if(e?.geometry||i.traverse(l=>{!e?.geometry&&l.isMesh&&/body.*low.*prototype/i.test(l.name)&&(e=l)}),!e?.geometry?.attributes.position)return null;i.updateMatrixWorld(!0);let t=e.geometry.attributes.position,n=new N,s=1/0;for(let l=0;l<t.count;l+=1)n.fromBufferAttribute(t,l).applyMatrix4(e.matrixWorld),s=Math.min(s,n.y);let r=[];for(let l=0;l<t.count;l+=1)n.fromBufferAttribute(t,l).applyMatrix4(e.matrixWorld),n.y<=s+.035&&r.push([n.x,n.z]);if(r.length<8)return null;let o=r.map(([l])=>l),a=(Math.min(...o)+Math.max(...o))/2,c=[-1,1].map(l=>{let h=r.filter(([g])=>(g-a)*l>0);if(!h.length)return null;let u=h.map(g=>g[0]),d=h.map(g=>g[1]),f=Math.min(...u),p=Math.max(...u),y=Math.min(...d),m=Math.max(...d);return{x:(f+p)/2,z:(y+m)/2,radiusX:Un.clamp((p-f)/2+.018,.07,.21),radiusZ:Un.clamp((m-y)/2+.022,.1,.27)}});return c.every(Boolean)?c:null}function Tm(i,e,t){let n=new wt;n.setAttribute("position",new ut(i,3));let s=t.flatMap(r=>[1,1,1,r]);return n.setAttribute("color",new ut(s,4)),n.setIndex(e),n}function Rm({height:i=1,x:e=0,z:t=0,heading:n=0}={}){let s=new Vt;s.name="seat-contact-occlusion";let r=new dn({name:"soft-local-contact",color:1384487,vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),o=[[-.68,-.955],[.68,-.955],[.95,-.685],[.95,.685],[.68,.955],[-.68,.955],[-.95,.685],[-.95,-.685]],a=[],c=[],l=[];for(let y of[.002,.048])for(let[m,g]of o){let M=Math.hypot(m,g);a.push(m+m/M*y,.071,g+g/M*y),c.push(y<.01?.27:0)}for(let y=0;y<8;y+=1){let m=(y+1)%8;l.push(y,m,y+8,m,m+8,y+8)}let h=new bt(Tm(a,l,c),r);h.name="foundation-contact-band",h.renderOrder=1,s.add(h);let u=new bt(new wt,r);u.name="occupant-sole-contact",u.renderOrder=-1,u.visible=!1,u.position.y=i+.077,s.add(u);let d=null;function f(y){if(d===y)return;d=y;let m=[],g=[],M=[],S=20;for(let x of d){let T=m.length/3;m.push(x.x,0,x.z),g.push(.27);for(let[w,_]of[[.65,.18],[1,0]])for(let E=0;E<S;E+=1){let L=E/S*Math.PI*2,C=.91+Math.max(0,Math.sin(L))*.09;m.push(x.x+Math.cos(L)*x.radiusX*w*C,0,x.z+Math.sin(L)*x.radiusZ*w),g.push(_)}for(let w=0;w<S;w+=1){let _=(w+1)%S;M.push(T,T+1+_,T+1+w,T+1+w,T+1+_,T+1+S+w,T+1+_,T+1+S+_,T+1+S+w)}}u.geometry.dispose(),u.geometry=Tm(m,M,g)}f(wm);function p(y,m=null,g=!1){let M=y&&y.root.position.distanceToSquared(y.target)<4e-4;if(u.visible=!!M,!M)return;f(g&&m?m:wm);let S=y.root.position.x-e,x=y.root.position.z-t;u.position.x=Math.cos(n)*S-Math.sin(n)*x,u.position.z=Math.sin(n)*S+Math.cos(n)*x,u.rotation.y=y.root.rotation.y-n}return{group:s,update:p}}function Cm({render:i,onIdle:e=()=>{},maxFps:t=()=>60,requestFrame:n=requestAnimationFrame,cancelFrame:s=cancelAnimationFrame}){let r=null,o=!0,a=!1,c=!1,l=null;function h(){!a&&o&&r===null&&(r=n(d))}function u(){c=!0,h()}function d(y){if(r=null,a||!o)return;let m=1e3/t();if(l!==null&&y-l+.1<m){h();return}let g=l===null?1/60:Math.max(0,(y-l)/1e3);l=y,c=!1,i(y,g)===!0||c?h():(l=null,e())}function f(y){a||o===!!y||(o=!!y,l=null,o?u():(r!==null&&s(r),r=null))}function p(){a=!0,r!==null&&s(r),r=null}return{invalidate:u,setActive:f,dispose:p}}var zc={sky:1322043,fog:1322043,stone:4217191,stoneDark:2637387,bronze:11506800,cyan:7391696,ivory:14410719},ts=7,ZM=[1.66,1.44,1.22,1,.78,.56,.34],Hc=Math.PI*2;function Tt(i,e=[0,0,0],t=[0,0,0],n=[1,1,1]){let s=new st().compose(new N(...e),new Kt().setFromEuler(new Pn(...t)),new N(...n));return i.applyMatrix4(s),i}function Vc(i,e){if(!i.length)return new Vt;let t=i.map(r=>r.index?r.toNonIndexed():r),n=Nc(t,!1);if(new Set([...i,...t]).forEach(r=>r.dispose()),!n)throw new Error("\u821E\u53F0\u5E7E\u4F55\u5408\u4F75\u5931\u6557\u3002");let s=new bt(n,e);return s.castShadow=!0,s.receiveShadow=!0,s}function KM(){let e=new Uint8Array(65536),t=1747;for(let s=0;s<16384;s+=1){t=1664525*t+1013904223>>>0;let r=(t/4294967296-.5)*18;e[s*4]=116+r,e[s*4+1]=130+r,e[s*4+2]=138+r,e[s*4+3]=255}let n=new vi(e,128,128,yn);return n.colorSpace=Pt,n.wrapS=n.wrapT=$n,n.repeat.set(3,3),n.magFilter=Bt,n.minFilter=xn,n.generateMipmaps=!0,n.needsUpdate=!0,n}function Gc(i,e,t,n,s=112){let r=new bt(new Yo(i,e,s),t);return r.rotation.x=-Math.PI/2,r.position.y=n,r.receiveShadow=!0,r}function JM(i){let e=String(i.id),t=new Vt;t.name=`${e}-stand-in`;let n=new Ht({color:i.color||6069410,metalness:.35,roughness:.53}),s=new Ht({color:2440008,metalness:.35,roughness:.72}),r=new Ht({color:12700616,metalness:.12,roughness:.74}),o=[],a=[],c=[],l=/frigga|frigg|sif/i.test(e),h=/fenrir/i.test(e),u=/thor|heimdall|fenrir/i.test(e)?1.15:1;return a.push(Tt(new Jt(.24*u,.17,.55,6),[0,1.04,0])),o.push(Tt(new Jt(.18,l?.31:.22,l?.76:.28,7),[0,l?.53:.71,0])),l||(a.push(Tt(new Jt(.078,.065,.57,5),[-.105,.32,0])),a.push(Tt(new Jt(.078,.065,.57,5),[.105,.32,0]))),a.push(Tt(new Ft(.16,.095,.28),[-.105,.05,.065])),a.push(Tt(new Ft(.16,.095,.28),[.105,.05,.065])),[-1,1].forEach(d=>{o.push(Tt(new Jt(.11,.07,.45,5),[d*.29*u,.99,.015],[0,0,d*.23])),c.push(Tt(new Ur(.082,0),[d*.34*u,.75,.015])),o.push(Tt(new Ur(.17,0),[d*.25*u,1.22,0],[0,.4,0],[1.1,.55,1]))}),c.push(Tt(new qo(h?.16:.14,1),[0,1.48,h?.03:0],[0,0,0],[1,1.15,1])),o.push(Tt(new Jt(.155,.15,.12,6),[0,1.57,0])),h?(c.push(Tt(new qi(.1,.31,5),[0,1.46,.18],[Math.PI/2,0,0])),[-1,1].forEach(d=>{o.push(Tt(new qi(.08,.23,3),[d*.12,1.71,0])),o.push(Tt(new qi(.15,.32,4),[d*.19,1.27,-.06],[0,0,-d*.8]))}),a.push(Tt(new Ft(.32,.34,.14),[0,1.25,-.13]))):/loki/i.test(e)?[-1,1].forEach(d=>{let f=new Fr([new N(d*.11,1.59,0),new N(d*.23,1.79,-.015),new N(d*.23,1.98,.04),new N(d*.16,2.05,.12)]);o.push(new $o(f,8,.035,4,!1))}):/valkyrie|valkyr|valkiri/i.test(e)?[-1,1].forEach(d=>o.push(Tt(new qi(.1,.27,3),[d*.21,1.58,0],[0,0,-d*1.05]))):/frigga|frigg|sif/i.test(e)?(o.push(Tt(new qi(.16,.14,7),[0,1.66,0])),a.push(Tt(new Ft(.27,.5,.1),[0,1.32,-.135]))):o.push(Tt(new Ft(.05,.2,.26),[0,1.66,0])),t.add(Vc(a,s),Vc(o,n),Vc(c,r)),t.userData.coloredMaterial=n,t}function Im({canvas:i,onSelect:e=()=>{},onStatus:t=()=>{},onMetrics:n=()=>{},onFrame:s=()=>{},initialQuality:r="balanced"}){if(!i)throw new Error("\u627E\u4E0D\u5230\u821E\u53F0\u756B\u5E03\u3002");let o;try{o=new Ac({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(J){throw new Error(`\u6B64\u700F\u89BD\u5668\u7121\u6CD5\u555F\u7528 3D \u821E\u53F0\uFF0C\u8ACB\u4F7F\u7528\u652F\u63F4 WebGL \u7684 Safari \u6216 Chrome\u3002${J.message?` (${J.message})`:""}`)}o.outputColorSpace=Pt,o.toneMapping=ra,o.toneMappingExposure=1.18,o.shadowMap.enabled=!0,o.shadowMap.type=Zs;let a=new Hs;a.background=new Ze(zc.sky),a.fog=new To(zc.fog,18,46);function c(){let J=new Bc,ue=new Zr(o);try{return ue.fromScene(J,.04,.1,100,{size:256})}finally{J.dispose(),ue.dispose()}}let l=c();a.environment=l.texture,a.environmentIntensity=.65;let h=new Qt(38,1,.1,90),u=new Lc(h,i);u.enableDamping=!0,u.dampingFactor=.075,u.enablePan=!1,u.minDistance=3,u.maxDistance=28,u.minPolarAngle=.035,u.maxPolarAngle=Math.PI*.475,u.rotateSpeed=.68,u.zoomSpeed=.75,u.touches.ONE=ai.ROTATE,u.touches.TWO=ai.DOLLY_PAN;let d=window.matchMedia("(prefers-reduced-motion: reduce)"),f=d.matches,p="balanced",y=!1,m=null,g="overview",M=!0,S=null,x=null,T=!0,w=!0,_=!0,E=()=>x?.invalidate(),L=1,C=1,D=null,z=[],Y=[],P=!0,R=null,U=null,F=null,q=!1,k=null,G=null,K=null,Q=new Map,Ae=[],$=[],he=new Qo(12575471,2306620,1.4);a.add(he);let ce=new Qi(16769972,3.1);ce.position.set(-5,13,7),ce.castShadow=!0,ce.shadow.mapSize.set(1024,1024),ce.shadow.camera.left=-7,ce.shadow.camera.right=7,ce.shadow.camera.top=7,ce.shadow.camera.bottom=-7,ce.shadow.camera.near=1,ce.shadow.camera.far=30,ce.shadow.normalBias=.012,ce.shadow.bias=-1e-4,a.add(ce);let ze=new Qi(8181486,1.35);ze.position.set(5,7,-8),a.add(ze);let Re=new Qi(15003887,.5);Re.position.set(5,4,10),a.add(Re);let We=KM(),Mt=new Ht({color:zc.stone,map:We,roughness:.94,metalness:.06}),Ke=new Ht({color:1583406,roughness:.91,metalness:.08}),et=new Ht({color:9335120,metalness:.62,roughness:.52}),rt=new Ht({vertexColors:!0,roughness:.82,metalness:.12}),re=new bt(new Xs(150,150),new Ht({color:1650492,roughness:1}));re.rotation.x=-Math.PI/2,re.position.y=-.5,re.receiveShadow=!0,a.add(re);let ge=[],fe=[],Pe=[],Me=[],tt=new Vt;tt.name="northern-council-stage";let He=Em();function nt(J,ue,Ie,Ue=.12,Oe=.018){let qe=Math.min(Oe,Ie*.22),Be=J/2-qe,Qe=ue/2-qe,v=Math.min(Ue,Be*.65,Qe*.65),I=new Mi([new ae(-Be+v,-Qe),new ae(Be-v,-Qe),new ae(Be,-Qe+v),new ae(Be,Qe-v),new ae(Be-v,Qe),new ae(-Be+v,Qe),new ae(-Be,Qe-v),new ae(-Be,-Qe+v)]);return new Yi(I,{depth:Ie-qe*2,bevelEnabled:qe>0,bevelThickness:qe,bevelSize:qe,bevelSegments:1,steps:1,curveSegments:1}).rotateX(-Math.PI/2).translate(0,-Ie/2+qe,0)}function lt(J,ue=8886683){let Ie=new Ze(ue),Ue=new Float32Array(J.attributes.position.count*3);for(let Oe=0;Oe<Ue.length;Oe+=3)Ue[Oe]=Ie.r,Ue[Oe+1]=Ie.g,Ue[Oe+2]=Ie.b;J.setAttribute("color",new Lt(Ue,3)),Me.push(J)}function gt(J,ue,Ie,Ue,Oe,qe,Be,Qe=.012){let v=Ue-ue,I=Oe-Ie;J.push(Tt(new Ft(Math.hypot(v,I),Qe,qe),[(ue+Ue)/2,Be,(Ie+Oe)/2],[0,-Math.atan2(I,v),0]))}fe.push(Tt(new Jt(5.24,5.4,.44,28),[0,-.27,0])),ge.push(Tt(new Jt(5.1,5.18,.09,28),[0,-.005,0]));for(let J=0;J<ts*2;J+=1){let ue=-Math.PI/2+(J+.5)/(ts*2)*Hc,Ie=-ue+Math.PI/2;ge.push(Tt(nt(2,.24,.13,.055),[Math.cos(ue)*5.02,.045,Math.sin(ue)*5.02],[0,Ie,0])),Pe.push(Tt(new Ft(1.64,.012,.024),[Math.cos(ue)*5.04,.116,Math.sin(ue)*5.04],[0,Ie,0]))}fe.push(Tt(new Jt(2.31,2.4,.13,28),[0,.095,0])),Pe.push(Tt(new Jt(2.315,2.315,.018,28,1,!0),[0,.145,0]));let B=[[-.2,.5],[-.48,1.36],[-.75,1.91],[-.62,2.13],[.62,2.13],[.75,1.91],[.48,1.36],[.2,.5]];for(let J=0;J<ts;J+=1){let ue=-Math.PI/2+J/ts*Hc,Ie=-ue+Math.PI/2,Ue=new Mi(B.map(([v,I])=>new ae(v,-I))),Oe=new Yi(Ue,{depth:.027,bevelEnabled:!1,steps:1,curveSegments:1});Oe.rotateX(-Math.PI/2),ge.push(Tt(Oe,[0,.161,0],[0,Ie,0]));let qe=(v,I)=>new N(v,0,I).applyAxisAngle(new N(0,1,0),Ie),Be=qe(-.49,2.04),Qe=qe(.49,2.04);gt(Pe,Be.x,Be.z,Qe.x,Qe.z,.027,.196);for(let v of[-1,1]){let I=qe(v*.17,.76),H=qe(v*.34,1.33);gt(Pe,I.x,I.z,H.x,H.z,.018,.196)}lt(Tt(nt(.12,.08,.009,.025,0),[Math.cos(ue)*1.73,.196,Math.sin(ue)*1.73],[0,Ie,0]),6266026),J!==3&&fe.push(Tt(nt(.74,.3,.055,.08),[Math.cos(ue)*2.62,.066,Math.sin(ue)*2.62],[0,Ie,0]))}Pe.push(Tt(new Jt(.43,.43,.045,7),[0,.188,0])),lt(Tt(new Jt(.32,.32,.015,7),[0,.219,0]),14537908);for(let J=0;J<ts;J+=1){let ue=-Math.PI/2+J/ts*Hc,Ie=Math.cos(ue)*3.64,Ue=Math.sin(ue)*3.64,Oe=ZM[J];Ae.push(new N(Ie,Oe+.075,Ue));let qe=-ue-Math.PI/2;if(J===3){let I=Sm({height:Oe,materials:He});I.position.set(Ie,0,Ue),I.rotation.y=qe,G=Rm({height:Oe,x:Ie,z:Ue,heading:qe}),I.add(G.group),tt.add(I);continue}let Be=(I,H,V,X)=>{let ve=new N(H,0,X).applyAxisAngle(new N(0,1,0),qe);return Tt(I,[Ie+ve.x,V,Ue+ve.z],[0,qe,0])};ge.push(Be(nt(1.66,1.7,.12,.23),0,.072,0)),fe.push(Be(nt(1.48,1.53,.065,.2),0,.161,0)),fe.push(Be(nt(1.3,1.38,Oe-.15,.2,.025),0,(Oe+.15)/2-.035,0)),Pe.push(Be(nt(1.55,1.59,.026,.19,.004),0,Oe-.037,0)),ge.push(Be(nt(1.58,1.62,.11,.2,.02),0,Oe+.02,0));let Qe=.18,v=Oe-.085;for(let I of[-1,1])Pe.push(Be(new Ft(.032,v-Qe,.022),I*.48,(v+Qe)/2,.697));for(let I of[Qe,v])Pe.push(Be(new Ft(.99,.032,.022),0,I,.697));for(let I=0;I<=J;I+=1){let H=(I-J/2)*.068;lt(Be(new Ft(.024,Math.min(.105,v-Qe-.022),.014),H,(v+Qe)/2,.713))}for(let I of[-1,1])lt(Be(new Ft(.15,.006,.022),I*.59,Oe+.078,-.65),14537908),lt(Be(new Ft(.022,.006,.13),I*.66,Oe+.078,-.59),14537908)}[["slate-masonry",ge,Mt],["basalt-foundation",fe,Ke],["bronze-framework",Pe,et],["stone-and-chalk-insets",Me,rt]].forEach(([J,ue,Ie])=>{let Ue=Vc(ue,Ie);Ue.name=J,Ie===rt&&(Ue.castShadow=!1),tt.add(Ue)}),a.add(tt);function me(){let J=Q.get("fenrir");J&&(J.proxy.visible=!F||!P,F&&(F.visible=P),E())}async function Se(){if(R||y)return R;q=!1,t({kind:"loading",phase:"model",message:"\u6B63\u5728\u8F09\u5165\u82AC\u91CC\u723E 3D \u6A23\u672C\u2026"});let J=new Fc;return J.setDecoderPath(new URL("./assets/draco/",document.baseURI).href),J.setWorkerLimit(1),U=J,R=new Dc().setDRACOLoader(J).loadAsync(new URL("./assets/fenrir.glb",document.baseURI).href).then(Ie=>{if(y){Li(Ie.scene);return}let Ue=new bn().setFromObject(Ie.scene),Oe=Ue.getSize(new N),qe=Ue.getCenter(new N);if(!Number.isFinite(Oe.y)||Oe.y<=0)throw new Error("\u6A21\u578B\u6C92\u6709\u53EF\u898B\u7684\u5E7E\u4F55\u7BC4\u570D\u3002");let Be=1.82/Oe.y,Qe=new Vt;Qe.name="fenrir-browser-sample",Qe.scale.setScalar(Be),Ie.scene.position.sub(new N(qe.x,Ue.min.y,qe.z)),Ie.scene.traverse(I=>{I.isMesh&&(I.castShadow=!0,I.receiveShadow=!0,(Array.isArray(I.material)?I.material:[I.material]).forEach(V=>{V.map&&(V.map.anisotropy=Math.min(4,o.capabilities.getMaxAnisotropy()))}))}),Qe.add(Ie.scene),k=Am(Qe),F=Qe;let v=Q.get("fenrir");v&&v.root.add(Qe),me(),t({kind:"loaded",phase:"model",message:"\u82AC\u91CC\u723E 3D \u6A23\u672C\u5DF2\u8F09\u5165",source:"adopted-blender-asset"})}).catch(Ie=>{q=!0,R=null,y||t({kind:"error",phase:"model",message:"\u82AC\u91CC\u723E\u6A23\u672C\u66AB\u6642\u7121\u6CD5\u8F09\u5165\uFF0C\u5148\u986F\u793A\u89D2\u8272\u8349\u6A21\u3002",detail:Ie.message})}).finally(()=>{J.dispose(),U===J&&(U=null)}),R}function Ne(J){let ue=new Vt;ue.name=`character-${J.id}`,ue.userData.characterId=String(J.id);let Ie=JM(J);ue.add(Ie);let Ue=new dn({color:zc.cyan,transparent:!0,opacity:.7,depthWrite:!1}),Oe=Gc(.4,.48,Ue,.016,42);ue.add(Oe);let qe=(I,H,V,X,ve)=>{let ke=new dn({color:V,transparent:!0,opacity:X,depthWrite:!1}),Ee=Gc(I,H,ke,ve,40);return Ee.visible=!1,Ee.renderOrder=3,ue.add(Ee),Ee},Be={active:qe(.515,.585,14859127,.95,.03),target:qe(.635,.705,15567227,.95,.035),acted:qe(.525,.555,7440273,.54,.029),dead:new Vt};Be.dead.name="death-status-marker";let Qe=new dn({color:9544361,transparent:!0,opacity:.65,depthWrite:!1});Be.dead.add(Gc(.375,.425,Qe,.032,32)),[-1,1].forEach(I=>{let H=new bt(new Ft(.3,.012,.028),Qe);H.position.y=.038,H.rotation.y=I*Math.PI/4,Be.dead.add(H)}),Be.dead.visible=!1,ue.add(Be.dead),a.add(ue);let v={root:ue,proxy:Ie,halo:Oe,cues:Be,target:new N,initialized:!1,character:J};return Q.set(String(J.id),v),String(J.id)==="fenrir"&&(F&&ue.add(F),P&&Se(),me()),v}function oe({characters:J=z,seatOrder:ue,selectedId:Ie=m,combat:Ue=K}={}){let Oe=m;z=J,m=Ie==null?null:String(Ie),K=Ue==null?null:{activeId:Ue.activeId==null?null:String(Ue.activeId),targetId:Ue.targetId==null?null:String(Ue.targetId),targetIds:[...new Set((Array.isArray(Ue.targetIds)?Ue.targetIds:Ue.targetId==null?[]:[Ue.targetId]).filter(v=>v!=null).map(String))],actedIds:new Set([...Ue.actedIds||[]].map(String))};let qe=new Set(z.map(v=>String(v.id)));for(let[v,I]of Q)qe.has(v)||(ie(H=>H.actorId===v||H.targetId===v),a.remove(I.root),v==="fenrir"&&F&&F.removeFromParent(),Li(I.root),Q.delete(v));let Be=ue??(Y.length?Y:z.map(v=>v.id)),Qe=[...new Set(Be.map(String))].filter(v=>qe.has(v));z.forEach(v=>{Qe.includes(String(v.id))||Qe.push(String(v.id))}),Y=Qe.slice(0,ts),z.slice(0,ts).forEach(v=>{let I=String(v.id),H=Q.get(I)||Ne(v);H.character=v,H.target.copy(Ae[Math.min(Qe.indexOf(I),ts-1)]);let V=Number(v.hp)<=0,X=!V&&K?.activeId===I;H.halo.visible=!K&&I===m,H.cues.active.visible=X,H.cues.target.visible=!!K?.targetIds.includes(I),H.cues.acted.visible=!!K?.actedIds.has(I)&&!X,H.cues.dead.visible=V;let ve=H.proxy.userData.coloredMaterial.color;ve.set(v.color||6069410),V&&ve.lerp(new Ze(6648699),.78),(!H.initialized||f)&&(H.root.position.copy(H.target),H.root.rotation.y=Math.atan2(-H.target.x,-H.target.z),H.initialized=!0)}),me(),g==="focus"&&(M||m!==Oe)&&A("focus"),E()}function Je(J,ue){let Ie=J.clone().sub(ue).normalize(),Ue=new N().crossVectors(h.up,Ie).normalize(),Oe=new N().crossVectors(Ie,Ue),qe=Math.tan(Un.degToRad(h.fov/2)),Be=qe*L/C,Qe=J.distanceTo(ue);for(let v=0;v<28;v+=1){let I=v/28*Hc;for(let H of[-.5,3.9]){let V=new N(Math.cos(I)*5.5,H,Math.sin(I)*5.5).sub(ue),X=V.dot(Ie);Qe=Math.max(Qe,X+Math.abs(V.dot(Ue))*1.1/Be,X+Math.abs(V.dot(Oe))*1.1/qe)}}return ue.clone().addScaledVector(Ie,Qe)}function Ce(){return Je(new N(8.7,9.1,13.1),new N(0,.7,0))}function _e(J,ue){let Ie=J.distanceTo(ue);u.maxDistance=Math.max(28,Ie*1.25),a.fog.near=Math.max(18,Ie),a.fog.far=Math.max(46,Ie+28),f?(h.position.copy(J),u.target.copy(ue),u.update(),D=null):D={position:J,target:ue},E()}function A(J){if(S=null,M=!0,g=["overview","top","focus"].includes(J)?J:"overview",g==="top"){let ue=new N(0,.4,0);_e(Je(new N(.57,20.5,.57),ue),ue)}else if(g==="focus"){let ue=Q.get(m)||Q.values().next().value;if(!ue)return _e(Ce(),new N(0,.7,0));let Ie=L<C,Ue=Y.indexOf(String(ue.character.id))===3,Oe=ue.target.clone().add(new N(0,Ue?Ie?.1:.25:Ie?.85:.95,0)),qe=new N(ue.target.x,0,ue.target.z).normalize(),Be=new N(-qe.z,0,qe.x),Qe=Ue?Ie?-6.6:-5.7:Ie?-3.85:-3.3,v=Oe.clone().addScaledVector(qe,Qe).addScaledVector(Be,Ue?2:.85).add(new N(0,Ue?1.65:1,0));_e(v,Oe)}else _e(Ce(),new N(0,.7,0))}function b(){A("overview")}function W(J){p=J==="low"?"low":"balanced",o.setPixelRatio(Math.min(window.devicePixelRatio||1,p==="low"?1:1.65)),o.shadowMap.enabled=p!=="low",ce.castShadow=p!=="low",se()}function le(J){return P=!!J,P&&!R&&Se(),me(),{enabled:P,loaded:!!F,failed:q}}function se(){if(y)return;let J=i.getBoundingClientRect(),ue=L!==Math.max(1,J.width)||C!==Math.max(1,J.height);L=Math.max(1,J.width),C=Math.max(1,J.height),o.setSize(L,C,!1),h.aspect=L/C,h.updateProjectionMatrix(),ue&&M&&A(g),E()}let pe=new N;function we(){return[...Q].map(([J,ue])=>(pe.copy(ue.root.position).add(new N(0,J==="loki"?2.18:1.99,0)),pe.project(h),{id:J,x:(pe.x*.5+.5)*L,y:(-pe.y*.5+.5)*C,visible:pe.z>-1&&pe.z<1&&Math.abs(pe.x)<1.1&&Math.abs(pe.y)<1.15}))}function ee(J){J.line.removeFromParent(),J.pulse.removeFromParent(),J.line.geometry.dispose(),J.line.material.dispose(),J.pulse.geometry.dispose(),J.pulse.material.dispose()}function ie(J=()=>!0){for(let ue=$.length-1;ue>=0;ue-=1)J($[ue])&&(ee($[ue]),$.splice(ue,1))}function ye({actorId:J,targetId:ue,killed:Ie=!1}={},Ue=performance.now()){if(y||J==null||ue==null)return;let Oe=String(J),qe=String(ue);if(!Q.has(Oe)||!Q.has(qe))return;for(;$.length>=3;)ee($.shift());let Be=20,Qe=new wt,v=new Lt(new Float32Array((Be+1)*3),3);Qe.setAttribute("position",v);let I=Ie?15699326:14794108,H=new Wi(Qe,new ys({color:I,transparent:!0,opacity:.85,depthWrite:!1}));H.frustumCulled=!1,H.renderOrder=4,a.add(H);let V=Gc(.72,.78,new dn({color:15567227,transparent:!0,opacity:.72,depthWrite:!1}),.052,40);V.renderOrder=4,Q.get(qe).root.add(V);let X={actorId:Oe,targetId:qe,line:H,pulse:V,positions:v,segments:Be,started:Ue,duration:f?350:Ie?850:650};$.push(X),Te(X,0),E()}function O({actorId:J,targets:ue=[]}={}){if(y||J==null||!Array.isArray(ue))return;let Ie=performance.now(),Ue=new Set;for(let Oe of ue){if(Ue.size>=2)break;if(Oe?.targetId==null)continue;let qe=String(Oe.targetId);Ue.has(qe)||(Ue.add(qe),ye({actorId:J,targetId:qe,killed:!!Oe.killed},Ie))}}let ne=new N,j=new N;function Te(J,ue){let Ie=Q.get(J.actorId),Ue=Q.get(J.targetId);if(!(!Ie||!Ue)){ne.copy(Ie.root.position),ne.y+=1.02,j.copy(Ue.root.position),j.y+=.92;for(let Oe=0;Oe<=J.segments;Oe+=1){let qe=Oe/J.segments;J.positions.setXYZ(Oe,Un.lerp(ne.x,j.x,qe),Un.lerp(ne.y,j.y,qe)+Math.sin(qe*Math.PI)*.48,Un.lerp(ne.z,j.z,qe))}if(J.positions.needsUpdate=!0,f)J.line.geometry.setDrawRange(0,J.segments+1),J.line.material.opacity=.65,J.pulse.scale.setScalar(1),J.pulse.material.opacity=.55;else{J.line.geometry.setDrawRange(0,Math.min(J.segments+1,Math.ceil(Math.min(1,ue/.32)*(J.segments+1))));let Oe=ue<.45?1:Math.max(0,(1-ue)/.55);J.line.material.opacity=.85*Oe,J.pulse.scale.setScalar(.88+Math.sin(Math.min(1,ue)*Math.PI/2)*.26),J.pulse.material.opacity=.72*Math.sin(ue*Math.PI)}}}function xe(J){for(let ue=$.length-1;ue>=0;ue-=1){let Ie=$[ue],Ue=(J-Ie.started)/Ie.duration;Ue>=1||!Q.has(Ie.actorId)||!Q.has(Ie.targetId)?(ee(Ie),$.splice(ue,1)):Te(Ie,Math.max(0,Ue))}}let be=new ia,Xe=new ae,ot=new Map,de=!1;function je(J){J.button!==0&&J.pointerType==="mouse"||(ot.set(J.pointerId,{x:J.clientX,y:J.clientY,time:performance.now()}),ot.size>1&&(de=!0))}function ct(J){let ue=ot.get(J.pointerId);ot.delete(J.pointerId);let Ie=ue&&!de&&Math.hypot(J.clientX-ue.x,J.clientY-ue.y)<7&&performance.now()-ue.time<900;if(ot.size===0&&(de=!1),!Ie)return;let Ue=i.getBoundingClientRect();Xe.set((J.clientX-Ue.left)/Ue.width*2-1,-(J.clientY-Ue.top)/Ue.height*2+1),be.setFromCamera(Xe,h);let qe=be.intersectObjects([...Q.values()].map(Be=>Be.root),!0).find(Be=>{let Qe=Be.object;for(;Qe;){if(!Qe.visible)return!1;Qe=Qe.parent}return!0});if(qe){let Be=qe.object;for(;Be&&!Be.userData.characterId;)Be=Be.parent;Be?.userData.characterId&&e(Be.userData.characterId)}}function Le(J){ot.delete(J.pointerId),ot.size||(de=!1)}function Et(){D=null,S={position:h.position.clone(),target:u.target.clone()},E()}function qt(){S&&(h.position.distanceToSquared(S.position)>1e-8||u.target.distanceToSquared(S.target)>1e-8)&&(M=!1),E()}function jn(){S=null,E()}function io(J){f=J.matches,E()}function Qn(){let J=!document.hidden&&T&&w;J||(_=!0),x?.setActive(J)}function wa(){Qn(),E()}function so(J){J.preventDefault(),w=!1,Qn(),Li(a),F&&!F.parent&&Li(F),a.environment=null,l?.dispose(),l=null,ce.shadow.map?.dispose(),ce.shadow.mapPass?.dispose(),ce.shadow.map=ce.shadow.mapPass=null,t({kind:"error",phase:"webgl",message:"\u624B\u6A5F\u66AB\u6642\u91CB\u653E\u4E86 3D \u8CC7\u6E90\uFF0C\u6B63\u5728\u7B49\u5019\u6062\u5FA9\u3002"})}function ro(){y||(l=c(),a.environment=l.texture,ce.shadow.needsUpdate=!0,w=!0,Qn(),E(),t({kind:"loaded",phase:"webgl",message:"3D \u821E\u53F0\u5DF2\u6062\u5FA9\u3002"}))}i.addEventListener("pointerdown",je,{passive:!0}),i.addEventListener("pointerup",ct,{passive:!0}),i.addEventListener("pointercancel",Le,{passive:!0}),i.addEventListener("webglcontextlost",so,!1),i.addEventListener("webglcontextrestored",ro,!1),u.addEventListener("start",Et),u.addEventListener("change",qt),u.addEventListener("end",jn),d.addEventListener?.("change",io);let mi=typeof ResizeObserver<"u"?new ResizeObserver(se):null;mi?.observe(i.parentElement||i),window.addEventListener("resize",se,{passive:!0}),document.addEventListener("visibilitychange",Qn),window.addEventListener("pageshow",wa);let sr=typeof IntersectionObserver<"u"?new IntersectionObserver(J=>{T=J.some(ue=>ue.isIntersecting&&ue.intersectionRatio>0),Qn()}):null;sr?.observe(i);let As=performance.now(),Rs=0;function rr(J,ue){if(y)return!1;_&&(As=J,Rs=0,_=!1);let Ie=f?1:1-Math.exp(-7.5*ue),Ue=!1;for(let Be of Q.values()){Be.root.position.lerp(Be.target,Ie);let Qe=Math.atan2(-Be.target.x,-Be.target.z),v=Math.atan2(Math.sin(Qe-Be.root.rotation.y),Math.cos(Qe-Be.root.rotation.y));Be.root.rotation.y+=v*Ie,Be.root.position.distanceToSquared(Be.target)<1e-8?Be.root.position.copy(Be.target):Ue=!0,Math.abs(v)<1e-5?Be.root.rotation.y=Qe:Ue=!0}let Oe=Q.get(Y[3]);G?.update(Oe,k,Oe?.character.id==="fenrir"&&!!F?.visible),D&&(h.position.lerp(D.position,Ie),u.target.lerp(D.target,Ie),h.position.distanceToSquared(D.position)<1e-4&&u.target.distanceToSquared(D.target)<1e-4&&(h.position.copy(D.position),u.target.copy(D.target),D=null)),xe(J),u.dampingFactor=1-Math.pow(1-.075,ue*60);let qe=u.update();return o.render(a,h),s(),Rs+=1,J-As>1500&&(n({fps:Math.round(Rs*1e3/(J-As)),drawCalls:o.info.render.calls,triangles:o.info.render.triangles,pixelRatio:o.getPixelRatio(),quality:p,modelLoaded:!!F,idle:!1}),As=J,Rs=0),Ue||!!D||qe||$.length>0}function Li(J){let ue=new Set,Ie=new Set,Ue=new Set;J.traverse(Oe=>{Oe.geometry&&ue.add(Oe.geometry),(Oe.material?Array.isArray(Oe.material)?Oe.material:[Oe.material]:[]).forEach(Be=>Ie.add(Be))}),Ie.forEach(Oe=>Object.values(Oe).forEach(qe=>{qe?.isTexture&&Ue.add(qe)})),ue.forEach(Oe=>Oe.dispose()),Ue.forEach(Oe=>Oe.dispose()),Ie.forEach(Oe=>Oe.dispose())}function Ta(){y||(y=!0,x?.dispose(),mi?.disconnect(),sr?.disconnect(),window.removeEventListener("resize",se),document.removeEventListener("visibilitychange",Qn),window.removeEventListener("pageshow",wa),i.removeEventListener("pointerdown",je),i.removeEventListener("pointerup",ct),i.removeEventListener("pointercancel",Le),i.removeEventListener("webglcontextlost",so),i.removeEventListener("webglcontextrestored",ro),d.removeEventListener?.("change",io),u.removeEventListener("start",Et),u.removeEventListener("change",qt),u.removeEventListener("end",jn),u.dispose(),U?.dispose(),U=null,ie(),a.environment=null,l?.dispose(),Li(a),F&&!F.parent&&Li(F),o.dispose(),Q.clear())}return x=Cm({render:rr,maxFps:()=>p==="low"?30:60,onIdle:()=>{_=!0,n({idle:!0,quality:p,drawCalls:o.info.render.calls,triangles:o.info.render.triangles,pixelRatio:o.getPixelRatio(),modelLoaded:!!F})}}),Qn(),se(),h.position.copy(Ce()),u.target.set(0,.7,0),u.update(),W(r),b(),E(),t({kind:"loaded",phase:"arena",message:"\u4E03\u5E2D\u821E\u53F0\u5DF2\u5C31\u7DD2\u3002"}),{update:oe,setView:A,resetCamera:b,setQuality:W,setFenrirEnabled:le,resize:se,getLabels:we,playAttack:ye,playAttackBatch:O,dispose:Ta}}var Td="fenrir-room-session-v1";var Lm=new Set(["thor","sif","loki","valkyrie","heimdall","frigga","fenrir"]);function Nm(i=""){let e;try{e=new URL(String(i).trim()||globalThis.location?.origin)}catch{throw new Error("\u8ACB\u586B\u5BEB\u5B8C\u6574\u7684 HTTPS \u9023\u7DDA\u670D\u52D9\u7DB2\u5740\uFF1B\u540C\u4E00\u7DB2\u7AD9\u53EF\u7559\u767D\u3002")}let t=["localhost","127.0.0.1"].includes(e.hostname);if(e.protocol!=="https:"&&!(e.protocol==="http:"&&t))throw new Error("\u9023\u7DDA\u670D\u52D9\u9700\u4F7F\u7528 HTTPS\uFF1B\u672C\u6A5F\u6E2C\u8A66\u53EF\u4F7F\u7528 localhost \u6216 127.0.0.1\u3002");if(e.username||e.password||e.search||e.hash||!["","/"].includes(e.pathname))throw new Error("\u8ACB\u53EA\u586B\u670D\u52D9\u7684\u6839\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u3001\u5E33\u865F\u3001\u53C3\u6578\u6216\u623F\u9593\u8CC7\u6599\u3002");return e.origin}function Pm(i){if(!i||typeof i!="object"||Array.isArray(i))return null;try{let e=Nm(i.apiBase),t=String(i.roomCode||"").trim().toUpperCase();if(!/^[A-Z0-9]{6,8}$/.test(t)||!/^[A-Za-z0-9_-]{20,256}$/.test(i.token||"")||i.role!=="host"&&i.role!=="player")return null;let n=i.role==="host"?null:i.characterId;return i.role==="player"&&!Lm.has(n)?null:{apiBase:e,roomCode:t,token:i.token,role:i.role,characterId:n}}catch{return null}}function Ad(i){return!i?.status&&i?.name!=="RoomSessionChanged"}function Dm({onSnapshot:i=()=>{},onStatus:e=()=>{},onSession:t=()=>{}}={}){let n=null,s=0,r=!1,o=null,a=null,c=-1,l=null,h=!1,u=new Set,d=()=>{try{return Pm(JSON.parse(globalThis.localStorage?.getItem(Td)||"null"))}catch{return null}},f=()=>{try{n?globalThis.localStorage?.setItem(Td,JSON.stringify(n)):globalThis.localStorage?.removeItem(Td)}catch{}},p=(R,U)=>{r||e({state:R,message:U})},y=()=>n?{...n}:null,m=()=>Object.assign(new Error("\u623F\u9593\u5DF2\u5207\u63DB\uFF0C\u8ACB\u4EE5\u76EE\u524D\u756B\u9762\u7E7C\u7E8C\u3002"),{name:"RoomSessionChanged"}),g=R=>!r&&R===s;function M(){clearTimeout(o),o=null;for(let R of u)R.abort();u.clear(),a=null}function S(R,{notify:U=!0,keepStored:F=!1}={}){s+=1,M(),n=R,c=-1,l=null,F||f(),U&&!r&&t(y())}function x(){if(r)throw new Error("\u9023\u7DDA\u5DF2\u7D50\u675F\uFF0C\u8ACB\u91CD\u65B0\u8F09\u5165\u7DB2\u9801\u3002");if(!n)throw new Error("\u8ACB\u5148\u5EFA\u7ACB\u6216\u52A0\u5165\u623F\u9593\u3002");return n}async function T(R,U,{token:F,method:q="GET",body:k,ticket:G=s}={}){let K=new AbortController;u.add(K);let Q=setTimeout(()=>K.abort(),15e3);try{let Ae=await fetch(R+U,{method:q,headers:{Accept:"application/json",...k===void 0?{}:{"Content-Type":"application/json"},...F?{Authorization:`Bearer ${F}`}:{}},...k===void 0?{}:{body:JSON.stringify(k)},signal:K.signal,credentials:"omit",cache:"no-store",referrerPolicy:"no-referrer"});if(!g(G))throw m();let $;try{$=await Ae.json()}catch{throw Object.assign(new Error("\u9023\u7DDA\u670D\u52D9\u6C92\u6709\u56DE\u50B3\u6709\u6548\u8CC7\u6599\uFF0C\u8ACB\u78BA\u8A8D\u670D\u52D9\u7DB2\u5740\u3002"),{status:Ae.status||502})}if(!g(G))throw m();if(!Ae.ok)throw Object.assign(new Error($?.message||"\u9023\u7DDA\u670D\u52D9\u66AB\u6642\u7121\u6CD5\u5B8C\u6210\u64CD\u4F5C\u3002"),{status:Ae.status,code:$?.error});return $}catch(Ae){throw g(G)?Ae.name==="AbortError"?new Error("\u9023\u7DDA\u903E\u6642\uFF0C\u6B63\u5728\u7B49\u5019\u9023\u7DDA\u6062\u5FA9\u3002"):Ae:m()}finally{clearTimeout(Q),u.delete(K)}}function w(R,U){if(g(U)){if(!R||typeof R!="object"||!Number.isSafeInteger(R.revision)||!R.combat||R.roomCode!==n?.roomCode)throw new Error("\u623F\u9593\u72C0\u614B\u7121\u6548\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u670D\u52D9\u7248\u672C\u3002");R.revision<c||(c=R.revision,i(R),p("online","\u5DF2\u9023\u7DDA\uFF0C\u623F\u9593\u9032\u5EA6\u6703\u81EA\u52D5\u540C\u6B65\u3002"))}}function _(R,U){!g(U)||R.name==="RoomSessionChanged"||([401,404].includes(R.status)?(S(null),p("error",R.status===404?"\u627E\u4E0D\u5230\u9019\u500B\u623F\u9593\uFF0C\u8ACB\u91CD\u65B0\u52A0\u5165\u6216\u5EFA\u7ACB\u623F\u9593\u3002":"\u623F\u9593\u8EAB\u5206\u5DF2\u5931\u6548\uFF0C\u8ACB\u91CD\u65B0\u52A0\u5165\u623F\u9593\u3002")):Ad(R)?p("offline","\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6062\u5FA9\u7DB2\u8DEF\u5F8C\u6703\u81EA\u52D5\u63A5\u56DE\u623F\u9593\u3002"):p("error",R.message))}function E(){clearTimeout(o),!r&&n&&(o=setTimeout(()=>{L().catch(()=>{})},5e3))}async function L(){if(!n||r)return null;if(a)return a;let R=y(),U=s,F=(async()=>{try{let q=await T(R.apiBase,`/api/rooms/${R.roomCode}/snapshot`,{token:R.token,ticket:U});return w(q,U),q}catch(q){throw _(q,U),q}finally{g(U)&&(a=null,E())}})();return a=F,F}async function C(R,U,F){if(r)throw new Error("\u9023\u7DDA\u5DF2\u7D50\u675F\uFF0C\u8ACB\u91CD\u65B0\u8F09\u5165\u7DB2\u9801\u3002");if(n||h)throw new Error("\u8ACB\u5148\u96E2\u958B\u76EE\u524D\u623F\u9593\uFF0C\u518D\u5EFA\u7ACB\u6216\u52A0\u5165\u53E6\u4E00\u500B\u623F\u9593\u3002");let q=Nm(R),k=s;h=!0,p("connecting","\u6B63\u5728\u9023\u63A5\u623F\u9593\u2026");try{let G=await T(q,U,{method:"POST",body:F,ticket:k}),K=Pm({...G,apiBase:q});if(!K||!Number.isSafeInteger(G.snapshot?.revision)||!G.snapshot?.combat||G.snapshot.roomCode!==K.roomCode)throw new Error("\u623F\u9593\u8EAB\u5206\u8CC7\u6599\u7121\u6548\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u670D\u52D9\u7248\u672C\u3002");return S(K),w(G.snapshot,s),E(),G.snapshot}catch(G){throw g(k)&&p(Ad(G)?"offline":"error",G.message),G}finally{h=!1}}let D=async()=>{if(r)return null;if(!n){let R=d();if(!R)return p("idle","\u76EE\u524D\u4F7F\u7528\u55AE\u6A5F\u6A21\u5F0F\u3002"),null;S(R),p("connecting","\u6B63\u5728\u63A5\u56DE\u4E0A\u6B21\u7684\u623F\u9593\u2026")}return L()},z=()=>{globalThis.document?.visibilityState==="visible"&&n&&L().catch(()=>{})},Y=()=>{n&&(p("connecting","\u7DB2\u8DEF\u5DF2\u6062\u5FA9\uFF0C\u6B63\u5728\u540C\u6B65\u623F\u9593\u2026"),L().catch(()=>{}))},P=()=>{n&&p("offline","\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6062\u5FA9\u7DB2\u8DEF\u5F8C\u6703\u81EA\u52D5\u63A5\u56DE\u623F\u9593\u3002")};return globalThis.document?.addEventListener("visibilitychange",z),globalThis.window?.addEventListener("online",Y),globalThis.window?.addEventListener("offline",P),{create:(R="")=>C(R,"/api/rooms",{}),join:(R="",U,F)=>{let q=String(U||"").trim().toUpperCase();return/^[A-Z0-9]{6,8}$/.test(q)?Lm.has(F)?C(R,`/api/rooms/${q}/join`,{characterId:F}):Promise.reject(new Error("\u8ACB\u9078\u64C7\u8981\u64CD\u4F5C\u7684\u89D2\u8272\u3002")):Promise.reject(new Error("\u8ACB\u8F38\u5165 6\u20138 \u78BC\u7684\u623F\u9593\u4EE3\u78BC\u3002"))},resume:D,leave({forget:R=!1}={}){r||(S(null,{keepStored:!R}),p("idle","\u5DF2\u66AB\u96E2\u623F\u9593\uFF0C\u53EF\u8FD4\u56DE\u4E0A\u6B21\u623F\u9593\uFF1B\u55AE\u6A5F\u9032\u5EA6\u4ECD\u4FDD\u7559\u3002"))},async command(R,U={},F){let q={...x()},k=s;if(l)throw new Error("\u4E0A\u4E00\u500B\u64CD\u4F5C\u6B63\u5728\u78BA\u8A8D\uFF0C\u8ACB\u7A0D\u5019\u3002");if(!Number.isSafeInteger(F)||F<0)throw new Error("\u623F\u9593\u9032\u5EA6\u5C1A\u672A\u540C\u6B65\uFF0C\u8ACB\u7A0D\u5019\u518D\u64CD\u4F5C\u3002");let G=Symbol("room-command");l=G;let K={commandId:crypto.randomUUID(),expectedRevision:F,type:R,payload:U};try{let Q;for(let Ae=0;Ae<2;Ae+=1)try{Q=await T(q.apiBase,`/api/rooms/${q.roomCode}/commands`,{token:q.token,method:"POST",body:K,ticket:k});break}catch($){if(!Ad($)||Ae===1||!g(k))throw $}return w(Q,k),Q}catch(Q){if(Q.status===409&&g(k))try{await L()}catch{}throw _(Q,k),Q}finally{l===G&&(l=null),g(k)&&E()}},getSession:y,destroy(){r=!0,s+=1,M(),globalThis.document?.removeEventListener("visibilitychange",z),globalThis.window?.removeEventListener("online",Y),globalThis.window?.removeEventListener("offline",P)}}}var Wc=["axe","flame"],jM={axe:"\u6230\u65A7",flame:"\u708E\u528D"},QM=()=>({power:0,magic:0,weapons:[]}),eS={accepted:"\u4EA4\u6613\u5B8C\u6210",declined:"\u5C0D\u65B9\u5A49\u62D2",cancelled:"\u5DF2\u53D6\u6D88"},Um={items_changed:"\u7269\u54C1\u5DF2\u8B8A\u66F4\uFF0C\u63D0\u6848\u5931\u6548",battle_started:"\u5DF2\u958B\u6230\uFF0C\u672A\u5B8C\u6210\u63D0\u6848\u53D6\u6D88",cancelled_by_sender:"\u63D0\u6848\u8005\u5DF2\u53D6\u6D88",declined_by_recipient:"\u6536\u4EF6\u8005\u5DF2\u5A49\u62D2",trade_limit:"\u672C\u5C40\u4EA4\u6613\u6B21\u6578\u5DF2\u9054\u4E0A\u9650",round_changed:"\u8F2A\u6B21\u5DF2\u6539\u8B8A",participant_dead:"\u4EA4\u6613\u89D2\u8272\u5DF2\u6B7B\u4EA1"};function Ci(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function va(i={}){if(!i||typeof i!="object")return"\u7121";let e=[];i.power&&e.push(`\u529B\u91CF\u724C ${i.power} \u5F35`),i.magic&&e.push(`\u9B54\u6CD5\u724C ${i.magic} \u5F35`);for(let t of Wc)i.weapons?.includes(t)&&e.push(jM[t]);return e.join("\u3001")||"\u7121"}function Qr(i){return i.power>0||i.magic>0||i.weapons.length>0}function Om({onCommand:i,nameOf:e=t=>t}={}){let t=x=>document.getElementById(x),n=t("trade-panel"),s=t("trade-form"),r=t("trade-recipient"),o=null,a="",c="",l="",h=!1;function u(x=""){t("trade-message").textContent=x,t("trade-message").hidden=!x}function d(x){for(let T of["power","magic"])t(`trade-${x}-${T}`).value="0";for(let T of Wc)t(`trade-${x}-${T}`).checked=!1}function f(x){let T=QM();for(let w of["power","magic"])T[w]=Number(t(`trade-${x}-${w}`).value);return T.weapons=Wc.filter(w=>t(`trade-${x}-${w}`).checked),T}function p(){return!o?.snapshot||o.session?.role!=="player"?null:o.snapshot.combat.characters.find(x=>x.id===o.session.characterId)||null}function y(){let x=p();return!!(o?.online&&!o.busy&&!h&&x?.hp>0&&Array.isArray(o.snapshot.trades)&&o.snapshot.combat.phase==="preparation")}function m(){if(!o?.snapshot)return;let x=o.snapshot.combat,T=p(),w=x.characters.find(D=>D.id===r.value),_=y()&&w?.hp>0;r.disabled=!y()||r.options.length===0;for(let[D,z]of[["give",T],["receive",w]]){t(`trade-${D}-cards`).hidden=x.round===1;for(let Y of["power","magic"]){let P=t(`trade-${D}-${Y}`);P.disabled=!_||x.round===1,P.max=String(z?.cards?.[Y]??0),x.round===1&&(P.value="0")}for(let Y of Wc){let P=t(`trade-${D}-${Y}`),R=!!z?.weapons.includes(Y);P.disabled=!_||!R,R||(P.checked=!1),P.closest("label").classList.toggle("is-unavailable",!R)}t(`trade-${D}-stock`).textContent=z?`${e(z.id)}\u6301\u6709\uFF1A${va({...z.cards,weapons:z.weapons})}`:"\u6C92\u6709\u53EF\u4EA4\u6613\u7684\u5C0D\u8C61"}let E=f("give"),L=f("receive"),C=["give","receive"].every(D=>["power","magic"].every(z=>{let Y=t(`trade-${D}-${z}`),P=Number(Y.value);return Y.value!==""&&Number.isSafeInteger(P)&&P>=0&&P<=Number(Y.max)}));t("trade-propose").disabled=!_||!C||!Qr(E)&&!Qr(L),t("trade-propose").textContent=h?"\u6B63\u5728\u78BA\u8A8D\u4EA4\u6613\u2026":!Qr(L)&&Qr(E)?"\u9001\u51FA\u8D08\u9001\u63D0\u6848":!Qr(E)&&Qr(L)?"\u9001\u51FA\u7D22\u53D6\u63D0\u6848":"\u9001\u51FA\u4EA4\u63DB\u63D0\u6848",t("trade-preview").textContent=w?`\u6211\u4EA4\u51FA\uFF1A${va(E)}
\u5E0C\u671B${e(w.id)}\u4EA4\u51FA\uFF1A${va(L)}`:"\u76EE\u524D\u6C92\u6709\u5176\u4ED6\u5B58\u6D3B\u89D2\u8272\u53EF\u4EA4\u6613\u3002"}function g(x,T){let w=Ci("li",`trade-offer trade-offer-${x.status}`);w.dataset.offerId=x.id;let _=Ci("div","trade-offer-heading");_.append(Ci("strong","",`${e(x.fromId)} \u2192 ${e(x.toId)}`),Ci("span","trade-offer-state",x.status==="pending"?`\u7B49\u5F85${e(x.toId)}\u63A5\u53D7`:eS[x.status]||"\u63D0\u6848\u5DF2\u66F4\u65B0")),w.append(_,Ci("p","",`${e(x.fromId)}\u4EA4\u51FA\uFF1A${va(x.give)}`),Ci("p","",`${e(x.toId)}\u4EA4\u51FA\uFF1A${va(x.receive)}`));let E=[`\u7B2C ${x.round} \u8F2A`];if(x.reason&&Um[x.reason]&&E.push(Um[x.reason]),w.append(Ci("small","trade-offer-meta",E.join(" \xB7 "))),x.status==="pending"&&o.session.role==="player"){let L=Ci("div","trade-offer-actions"),C=(D,z,Y=!1)=>{let P=Ci("button",Y?"trade-accept":"",z);P.type="button",P.dataset.tradeAction=D,P.dataset.offerId=x.id,P.disabled=!T,L.append(P)};x.toId===o.session.characterId&&(C("trade-accept","\u63A5\u53D7\u4EA4\u6613",!0),C("trade-decline","\u5A49\u62D2")),x.fromId===o.session.characterId&&C("trade-cancel","\u53D6\u6D88\u63D0\u6848"),L.childElementCount&&w.append(L)}return w}function M(x){let T=y(),w=JSON.stringify([x,o.session.role,o.session.characterId,T]);if(w===l)return;l=w;let _=x.filter(L=>L.status==="pending").slice().reverse(),E=x.filter(L=>L.status!=="pending").slice(-10).reverse();t("trade-pending-count").textContent=`${_.length} \u7B46\u5F85\u78BA\u8A8D`,t("trade-empty").hidden=_.length>0,t("trade-list").replaceChildren(..._.map(L=>g(L,T))),t("trade-history").hidden=E.length===0,t("trade-history-list").replaceChildren(...E.map(L=>g(L,!1)))}function S(x){o=x;let{snapshot:T,session:w}=x||{},_=T?.combat;if(n.hidden=!w||_?.phase!=="preparation",n.hidden)return;let E=`${T.roomCode}:${w.role}:${w.characterId||""}:${_.round}`;E!==a&&(a=E,c="",l="",s.reset(),d("give"),d("receive"),u()),t("trade-round-label").textContent=`\u7B2C ${_.round} \u8F2A\u6E96\u5099`,t("trade-rule").textContent=_.round===1?"\u7B2C\u4E00\u8F2A\u53EA\u4EA4\u6613\u6B66\u5668\u3002\u5C0D\u65B9\u63A5\u53D7\u5F8C\uFF0C\u624D\u6703\u79FB\u8F49\u7269\u54C1\u3002":"\u53EF\u4EA4\u63DB\u6216\u8D08\u9001\u6B66\u5668\u3001\u529B\u91CF\u724C\u8207\u9B54\u6CD5\u724C\u3002\u5C0D\u65B9\u63A5\u53D7\u5F8C\u624D\u6703\u79FB\u8F49\u3002";let L=Array.isArray(T.trades),C=p();s.hidden=!L||w.role!=="player"||!(C?.hp>0),t("trade-role-note").textContent=L?w.role==="host"?"\u4E3B\u6301\u4EBA\u53EF\u6AA2\u8996\u5168\u90E8\u63D0\u6848\u3002\u958B\u59CB\u6230\u9B25\u6703\u53D6\u6D88\u6240\u6709\u5C1A\u672A\u5B8C\u6210\u7684\u4EA4\u6613\uFF0C\u76F4\u63A5\u958B\u6230\u3002":C?.hp===0?"\u89D2\u8272\u5DF2\u6B7B\u4EA1\uFF0C\u7269\u54C1\u5DF2\u79FB\u4EA4\u64CA\u6BBA\u8005\uFF0C\u7121\u6CD5\u518D\u53C3\u8207\u4EA4\u6613\u3002":x.online?"\u53EA\u6709\u5B58\u6D3B\u89D2\u8272\u53EF\u4EE5\u4EA4\u6613\u3002\u5C1A\u672A\u5B8C\u6210\u7684\u63D0\u6848\u6703\u5728\u958B\u6230\u6642\u53D6\u6D88\u3002":"\u76EE\u524D\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6062\u5FA9\u9023\u7DDA\u5F8C\u624D\u80FD\u63D0\u51FA\u6216\u78BA\u8A8D\u4EA4\u6613\u3002":"\u9023\u7DDA\u670D\u52D9\u7248\u672C\u5C1A\u672A\u63D0\u4F9B\u4EA4\u6613\uFF0C\u8ACB\u4E3B\u6301\u4EBA\u66F4\u65B0\u5F8C\u7AEF\u3002";let D=_.characters.filter(P=>P.id!==w.characterId&&P.hp>0&&T.members?.some(R=>R.characterId===P.id&&R.claimed)),z=D.map(P=>P.id).join(",");if(z!==c){c=z;let P=r.value;r.replaceChildren(...D.map(R=>{let U=Ci("option","",e(R.id));return U.value=R.id,U})),D.some(R=>R.id===P)?r.value=P:d("receive")}m();let Y=L?T.trades.filter(P=>P&&typeof P.id=="string"&&(w.role==="host"||P.fromId===w.characterId||P.toId===w.characterId)):[];M(Y)}return s.addEventListener("input",()=>{u(),m()}),s.addEventListener("change",x=>{x.target===r&&d("receive"),u(),m()}),s.addEventListener("submit",async x=>{if(x.preventDefault(),!y()||t("trade-propose").disabled||!s.reportValidity())return;let T=r.value,w={toId:T,give:f("give"),receive:f("receive")};h=!0,u(),S(o);try{let _=await i("trade-propose",w);_===!0?(d("give"),d("receive"),u("\u63D0\u6848\u5DF2\u9001\u51FA\uFF0C\u7B49\u5F85\u5C0D\u65B9\u63A5\u53D7\u3002")):_===!1&&u("\u63D0\u6848\u5C1A\u672A\u9001\u51FA\uFF0C\u8ACB\u4F9D\u6700\u65B0\u7269\u54C1\u8207\u9023\u7DDA\u72C0\u614B\u78BA\u8A8D\u5F8C\u518D\u8A66\u3002")}catch(_){u(_?.message||"\u63D0\u6848\u5C1A\u672A\u9001\u51FA\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002")}finally{h=!1,o&&S(o)}}),t("trade-list").addEventListener("click",async x=>{let T=x.target.closest("[data-trade-action]");if(!(!T||T.disabled||!y())){h=!0,u(),S(o);try{await i(T.dataset.tradeAction,{offerId:T.dataset.offerId})===!1&&u("\u4EA4\u6613\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u78BA\u8A8D\u6700\u65B0\u63D0\u6848\u8207\u7269\u54C1\u3002")}catch(w){u(w?.message||"\u4EA4\u6613\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002")}finally{h=!1,o&&S(o)}}}),{render:S,hide(){n.hidden=!0,o=null,a="",l=""}}}var zm="fenrir-seven-seats-combat-v4",Hm="fenrir-room-mode-v1",Gm="fenrir-display-quality-v1",tS=["fenrir-seven-seats-combat-v3","fenrir-seven-seats-combat-v2"],Z=i=>document.getElementById(i),jt=i=>gi.find(e=>e.id===i)?.name||"\u89D2\u8272",nS={axe:"\u6230\u65A7",flame:"\u708E\u528D"},te,Kc=!1;try{let i=localStorage.getItem(zm);Kc=!i&&tS.some(e=>!!localStorage.getItem(e)),te=fh(i)}catch{te=cr()}var Ma=te,Ii,Id,_t=!1,Wt=null,ln=null,no={state:"idle",message:"\u76EE\u524D\u70BA\u55AE\u6A5F\u6A21\u5F0F"},pi=!1,ns=!1,di=null,Xt=[],cn=null,An=null,Fm,eo=!1,Pd="loading",$c="\u82AC\u91CC\u723E\u70BA\u65E2\u6709\u4E3B\u6A94\u7684\u975C\u614B\u7DB2\u9801\u6A23\u672C\uFF0C\u6BDB\u9AEE\u8207\u6750\u8CEA\u63A1\u9810\u89BD\u7C21\u5316\u7248\u672C\u3002",Ud=new Map,Rd={loadout:"\u521D\u59CB\u9053\u5177",setup:"\u521D\u59CB\u8840\u91CF",preparation:"\u6230\u524D\u6E96\u5099",battle:"\u6230\u9B25\u4E2D","round-end":"\u672C\u8F2A\u7D50\u675F",finished:"\u4E09\u8F2A\u7D50\u675F"},Od=i=>nS[i]||"\u6B66\u5668",ba=({power:i=0,magic:e=0})=>`\u529B\u91CF ${i}\u3001\u9B54\u6CD5 ${e}`,Ld=i=>`${ba(i.cards)}${i.weapons.length?" \xB7 "+i.weapons.map(Od).join("\u3001"):""}`,Bm=({power:i=0,magic:e=0,weapons:t=[]}={})=>[i?`\u529B\u91CF\u724C ${i}`:"",e?`\u9B54\u6CD5\u724C ${e}`:"",...t.map(Od)].filter(Boolean).join("\u3001")||"\u7121\u7269\u54C1";function Nd(){try{localStorage.setItem(Hm,_t?"room":"solo")}catch{}}function iS(){try{let i=localStorage.getItem(Gm);if(i==="balanced"||i==="low")return i}catch{}return window.matchMedia?.("(pointer: coarse)")?.matches?"low":"balanced"}function ir(){if(!_t){Ma=te;try{localStorage.setItem(zm,JSON.stringify(te))}catch{}}}var to=()=>!_t||Wt?.role==="host",Ea=()=>!_t||!!(ln&&Wt&&no.state==="online"&&!pi),is=()=>to()&&Ea();function fi(){if(!_t)return!0;if(!Ea()||te.phase!=="battle")return!1;let i=ni(te);return Wt.role==="host"?ln.takeoverCharacterId===i:Wt.characterId===i&&ln.takeoverCharacterId!==i}function Pi(){_t&&Wt&&ln?Id?.render({snapshot:ln,session:Wt,busy:pi,online:no.state==="online"}):Id?.hide(),Z("room-mode-local").setAttribute("aria-pressed",String(!_t)),Z("room-mode-online").setAttribute("aria-pressed",String(_t)),Z("room-connect-fields").hidden=!_t||!!Wt,Z("room-session").hidden=!Wt,Z("room-status").textContent=no.message,Z("room-status").dataset.state=no.state,Z("room-mode-caption").textContent=_t?Wt?.role==="host"?"\u623F\u9593\u4E3B\u6301\u4EBA":Wt?`${jt(Wt.characterId)}\u7684\u64CD\u4F5C\u756B\u9762`:"\u9023\u7DDA\u5F8C\u7531\u5404\u73A9\u5BB6\u64CD\u4F5C":"\u540C\u4E00\u88DD\u7F6E\u8F2A\u6D41\u64CD\u4F5C",Z("prototype-badge").textContent=_t?"\u516B\u7AEF\u9023\u7DDA\u539F\u578B":"\u4E09\u8F2A\u55AE\u6A5F\u539F\u578B",document.body.dataset.mode=_t?"room":"solo";for(let t of["room-create","room-join","room-resume","room-api-base","room-code","room-character"])Z(t).disabled=ns;if(Z("room-mode-local").disabled=ns||pi,Z("room-mode-online").disabled=ns||pi,Z("room-leave").disabled=pi||ns,!Wt)return;Z("room-session-code").textContent=Wt.roomCode,Z("room-session-role").textContent=Wt.role==="host"?"\u4E3B\u6301\u4EBA":jt(Wt.characterId),Z("room-members").replaceChildren(...gi.map(t=>{let n=ln?.members.find(a=>a.characterId===t.id),s=document.createElement("li"),r=document.createElement("span"),o=document.createElement("small");return r.textContent=t.name+"\uFF1A",o.textContent=`${n?.claimed?n.online?"\u5DF2\u9023\u7DDA":"\u66AB\u6642\u96E2\u7DDA":"\u5C1A\u672A\u52A0\u5165"}${ln?.takeoverCharacterId===t.id?"\uFF08\u4E3B\u6301\u4EBA\u63A5\u7BA1\uFF09":""}`,s.append(r,o),s.classList.toggle("is-online",!!n?.online),s.classList.toggle("is-self",Wt.characterId===t.id),s}));let i=Wt.role==="host",e=ni(te);Z("room-takeover-controls").hidden=!i||te.phase!=="battle",Z("room-takeover").hidden=!i||te.phase!=="battle"||!!ln?.takeoverCharacterId,Z("room-takeover").disabled=!Ea()||!e,Z("room-takeover").textContent=e?`\u63A5\u7BA1${jt(e)}\u672C\u6B21\u884C\u52D5`:"\u63A5\u7BA1\u76EE\u524D\u884C\u52D5\u8005",Z("room-release").hidden=!i||!ln?.takeoverCharacterId,Z("room-release").disabled=!Ea()}function sS(i){let e=fh(i.combat);if(JSON.stringify(e)!==JSON.stringify(i.combat))throw new Error("\u623F\u9593\u6230\u9B25\u8CC7\u6599\u7121\u6CD5\u9A57\u8B49\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u670D\u52D9\u7248\u672C\u3002");i={...i,combat:e};let t=ln,n=!t,s=n||i.combat.revision!==t.combat.revision,r=n||i.takeoverCharacterId!==t.takeoverCharacterId;if(!(!n&&i.revision<t.revision)){if(ln=i,s){let o=n?1/0:te.log.at(-1)?.id||0,a=n&&Wt?.characterId?Wt.characterId:te.selectedId;te={...i.combat,selectedId:a},Xt=[],cn=null,An=null,sn({preserveInput:!n});for(let c of te.log.filter(l=>l.id>o&&l.type==="attack"))di?.playAttackBatch?.({actorId:c.actorId,targets:c.results.map(({targetId:l,killed:h})=>({targetId:l,killed:h}))})}else r?(Xt=[],cn=null,An=null,sn({preserveInput:!0})):t.revision!==i.revision&&(An=null,Z("attack-button").dataset.revision=i.revision,te.phase==="battle"&&Vm(te.characters.find(o=>o.id===ni(te))));Pi()}}async function Ts(i,e={},t=""){if(!_t||!Ea())return!1;pi=!0,document.querySelectorAll("#battle-controls input, #battle-controls button, #loadout-character").forEach(n=>{n.disabled=!0}),Pi();try{return await Ii.command(i,e,ln.revision),t&&Rn(t),!0}catch(n){return Rn(n.message||"\u64CD\u4F5C\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u72C0\u614B"),!1}finally{pi=!1,sn(),Pi()}}async function Xc(i){if(!(ns||Wt)){_t||(ir(),Ma=te),_t=!0,Nd(),ns=!0,sn(),Pi();try{await i()}catch(e){Rn(e.message||"\u7121\u6CD5\u9023\u7DDA\uFF0C\u8ACB\u6AA2\u67E5\u623F\u78BC\u8207\u5F8C\u7AEF\u7DB2\u5740")}finally{ns=!1,sn(),Pi()}}}function rS(){Ii=Dm({onSnapshot:sS,onStatus:i=>{let e=no.state!==i.state;no=i,e&&sn({preserveInput:!0}),Pi()},onSession:i=>{Wt=i,i?(_t=!0,ln=null):(_t=!1,ln=null,te=Ma,Xt=[],cn=null,An=null),Nd(),sn(),Pi()}}),Z("room-mode-local").addEventListener("click",()=>{ns||pi||(Ii.leave(),_t=!1,te=Ma,sn(),Pi())}),Z("room-mode-online").addEventListener("click",()=>{ns||pi||(_t||(ir(),Ma=te),_t=!0,Nd(),sn(),Pi())}),Z("room-create").addEventListener("click",()=>Xc(()=>Ii.create(Z("room-api-base").value))),Z("room-join").addEventListener("click",()=>Xc(()=>Ii.join(Z("room-api-base").value,Z("room-code").value,Z("room-character").value))),Z("room-resume").addEventListener("click",()=>Xc(()=>Ii.resume())),Z("room-leave").addEventListener("click",()=>Ii.leave()),Z("room-takeover").addEventListener("click",()=>Ts("takeover",{characterId:ni(te)},"\u5DF2\u63A5\u7BA1\u672C\u6B21\u884C\u52D5")),Z("room-release").addEventListener("click",()=>Ts("takeover",{characterId:null},"\u5DF2\u4EA4\u56DE\u73A9\u5BB6\u64CD\u4F5C"));try{localStorage.getItem("fenrir-room-session-v1")&&localStorage.getItem(Hm)!=="solo"&&Xc(()=>Ii.resume())}catch{}}function Rn(i){clearTimeout(Fm),Z("toast").textContent=i,Z("toast").classList.add("visible"),Fm=setTimeout(()=>Z("toast").classList.remove("visible"),3200)}function Zc(i,e){if(_t)return!1;try{return te=i(te),Xt=[],cn=null,An=null,sn(),ir(),e&&Rn(e),!0}catch(t){return Rn(t.message||"\u8ACB\u78BA\u8A8D\u76EE\u524D\u7684\u884C\u52D5\u8005\u8207\u968E\u6BB5\u3002"),!1}}function Sa(i){_t&&pi||(te=Wd(te,i),te.phase==="battle"&&fi()&&oS(i),sn(),ir())}function oS(i){if(An=null,cn==="flame"){Xt=[...ao(te,cn)[0]||[]];return}if(i===ni(te)){Xt=[];return}if(!cn){Rn("\u76EE\u524D\u6C92\u6709\u53EF\u7528\u7684\u653B\u64CA\u724C\uFF0C\u53EF\u653E\u68C4\u672C\u6B21\u884C\u52D5");return}if(!ao(te,cn).some(t=>t.includes(i))){Rn("\u9019\u500B\u89D2\u8272\u4E0D\u5728\u672C\u6B21\u653B\u64CA\u7684\u5408\u6CD5\u7BC4\u570D\u5167");return}Xt=Xt.includes(i)?[]:[i]}async function qc(i,e,t){eo||(eo=!0,_t?(!is()||!await Ts(t,{},e))&&(eo=!1):Zc(i,e)||(eo=!1),setTimeout(()=>{eo=!1,Wm()},500))}function Yc(i){return i.hp===0?"\u5DF2\u6B7B\u4EA1":te.phase==="battle"&&i.id===ni(te)?"\u76EE\u524D\u884C\u52D5":te.actedIds.includes(i.id)?"\u5DF2\u884C\u52D5":te.phase==="battle"?"\u5F85\u884C\u52D5":"\u5B58\u6D3B"}function aS(){Z("loadout-character").innerHTML=gi.map(i=>`<option value="${i.id}">${i.name}</option>`).join(""),Z("roster").innerHTML=gi.map(i=>`<div class="roster-row" data-character="${i.id}">
    <span class="seat-number" data-seat="${i.id}"></span>
    <button class="roster-portrait" type="button" data-select="${i.id}" aria-label="\u6AA2\u8996${i.name}"><img src="./${i.portrait}" alt="" loading="lazy"></button>
    <button class="roster-name" type="button" data-select="${i.id}">${i.name}<small data-status="${i.id}"></small><span class="roster-items" data-items="${i.id}"></span></button>
    <div class="hp-stepper"><button type="button" data-delta="-1" data-id="${i.id}" aria-label="${i.name}\u8840\u91CF\u6E1B\u4E00">\u2212</button>
    <input type="number" min="0" max="999" step="1" inputmode="numeric" id="hp-${i.id}" data-hp="${i.id}" aria-label="${i.name}\u8840\u91CF">
    <button type="button" data-delta="1" data-id="${i.id}" aria-label="${i.name}\u8840\u91CF\u52A0\u4E00">\uFF0B</button></div></div>`).join("");for(let i of gi){let e=document.createElement("button");e.type="button",e.className="seat-label",e.dataset.label=i.id,e.innerHTML='<span class="seat-name"></span><span class="seat-meta"></span><span class="seat-state"></span>',e.addEventListener("click",()=>Sa(i.id)),Z("labels").append(e),Ud.set(i.id,e)}}function lS(i){if(i.type==="loadout")return"\u4E3B\u6301\u4EBA\u78BA\u5B9A\u521D\u59CB\u724C\u6578\u8207\u6B66\u5668\uFF0C\u9032\u5165\u8840\u91CF\u8A2D\u5B9A";if(i.type==="setup")return"\u4E3B\u6301\u4EBA\u78BA\u5B9A\u521D\u59CB\u8840\u91CF\uFF0C\u89D2\u8272\u4F9D\u8840\u91CF\u5C31\u5EA7";if(i.type==="battle-start")return"\u4E3B\u6301\u4EBA\u958B\u59CB\u672C\u8F2A\u6230\u9B25";if(i.type==="pass")return`${jt(i.actorId)}\u653E\u68C4\u672C\u6B21\u884C\u52D5`;if(i.type==="trade")return`${jt(i.fromId)}\u4EA4\u51FA${Bm(i.give)}\uFF0C${jt(i.toId)}\u4EA4\u51FA${Bm(i.receive)}\uFF0C\u5B8C\u6210\u4EA4\u6613`;if(i.type==="attack"){let e={power:"\u529B\u91CF\u653B\u64CA",magic:"\u9B54\u6CD5\u653B\u64CA",axe:"\u6230\u65A7",flame:"\u708E\u528D"},t=i.results.map(s=>`${jt(s.targetId)} ${s.hpBefore} \u2192 ${s.hpAfter} \u8840${s.killed?"\uFF08\u64CA\u6BBA\uFF09":s.hpBefore===0?"\uFF08\u539F\u5DF2\u6B7B\u4EA1\uFF09":""}`).join("\uFF1B"),n=i.loot.map(s=>`\u53D6\u5F97${jt(s.victimId)}\u7684${ba(s)}${s.weapons.length?"\u3001"+s.weapons.map(Od).join("\u3001"):""}`).join("\uFF1B");return`${jt(i.actorId)}\u4F7F\u7528${e[i.actionId]}\uFF0C\u6D88\u8017${ba(i.cost)}\uFF1A${t}${n?"\uFF1B"+n:""}`}return i.type==="advance"?`\u8F2A\u672B\u63DB\u5EA7\u5B8C\u6210\uFF0C\u9032\u5165\u7B2C ${i.nextRound} \u8F2A\u6E96\u5099`:i.type==="finish"?"\u5B8C\u6210\u6700\u7D42\u63DB\u5EA7\uFF0C\u4E09\u8F2A\u5C0D\u6230\u7D50\u675F":"\u968E\u6BB5\u5DF2\u66F4\u65B0"}function cS(){Z("record-empty").hidden=te.log.length>0,Z("record-count").textContent=te.log.length?`${te.log.length} \u7B46`:"\u5C1A\u672A\u958B\u59CB",Z("combat-log").innerHTML=[...te.log].reverse().map(i=>{let t=ln?.audit.find(n=>n.combatEventId===i.id)?.operatorRole==="host"&&["attack","pass"].includes(i.type)?"\u4E3B\u6301\u4EBA\u4EE3\u64CD\u4F5C\uFF1A":"";return`<li class="${i.results?.some(n=>n.killed)?"kill-event":""}"><span>\u7B2C ${i.round} \u8F2A</span><p>${t}${lS(i)}</p></li>`}).join(""),Z("kills-empty").hidden=te.kills.length>0,Z("kill-list").innerHTML=te.kills.map(i=>`<li>\u7B2C ${i.round} \u8F2A\uFF1A${jt(i.killerId)}\u64CA\u6BBA${jt(i.victimId)}</li>`).join("")}function Dd(){if(Z("loadout-panel").hidden=te.phase!=="loadout",Z("legacy-notice").hidden=_t||!Kc||te.phase!=="loadout",te.phase!=="loadout")return;let i=te.characters.find(e=>e.id===te.selectedId);Z("loadout-character").disabled=_t&&pi,Z("loadout-character").value=i.id,Z("loadout-name").textContent=`${i.name}\u7684\u521D\u59CB\u9053\u5177`;for(let e of["power","magic"]){let t=Z("initial-"+e);document.activeElement!==t&&(t.value=i.cards[e]),t.disabled=!is()}for(let e of["axe","flame"]){let t=Z("initial-"+e),n=te.characters.find(s=>s.weapons.includes(e));t.checked=i.weapons.includes(e),t.disabled=!is()||!!(n&&n.id!==i.id),Z("owner-"+e).textContent=n&&n.id!==i.id?`${n.name}\u6301\u6709\uFF0C\u9700\u5148\u79FB\u9664`:e==="axe"?"\u529B\u91CF\u724C\u55AE\u9AD4\u50B7\u5BB3 3":"\u4F7F\u7528\u8005\u5DE6\u53F3\u5169\u5074\u5404 2 \u50B7\u5BB3"}Z("flame-fixed-rule").hidden=!te.characters.some(e=>e.weapons.includes("flame"))}function Vm(i){let e=qd(te);e.some(r=>r.id===cn&&r.available)||(cn=e.find(r=>r.available)?.id||null);let t=e.find(r=>r.id===cn),n=t?ao(te,cn):[];Z("action-title").textContent=`${i.name}\u884C\u52D5`,Z("actor-hp").textContent=`${i.hp} \u8840`,Z("actor-cards").textContent=`\u6301\u6709${Ld(i)}`,Z("attack-methods").innerHTML=e.map(r=>`<button type="button" data-action="${r.id}" aria-pressed="${r.id===cn}"${r.available&&fi()?"":" disabled"}><span>${r.name}</span><small>${r.available?`\u6D88\u8017${ba(r.cost)} \xB7 ${r.targetCount} \u76EE\u6A19`:r.reason}</small></button>`).join(""),Z("attack-rule").textContent=t?`${t.name}\uFF1A\u6D88\u8017${ba(t.cost)}\uFF0C${t.targetCount===2?"\u4F7F\u7528\u8005\u5DE6\u53F3\u5169\u5074\u5404":"\u9020\u6210"} ${t.damage} \u9EDE\u50B7\u5BB3\u3002${t.id==="flame"?"\u76EE\u6A19\u5DF2\u56FA\u5B9A\uFF1B\u7B2C 1 \u5E2D\u8207\u7B2C 7 \u5E2D\u76F8\u9130\u3002":""}`:"\u6C92\u6709\u53EF\u7528\u7684\u653B\u64CA\u724C\uFF0C\u8ACB\u653E\u68C4\u672C\u6B21\u884C\u52D5\u3002",Z("target-grid").innerHTML=te.characters.filter(r=>r.id!==i.id).map(r=>{let o=Xt.includes(r.id),a=[r.id],c=o||n.some(h=>a.every(u=>h.includes(u))),l=t?.id==="flame"?`\u6AA2\u8996${r.name}${o?"\uFF0C\u708E\u528D\u56FA\u5B9A\u76EE\u6A19":""}`:`\u9078\u64C7${r.name}\u70BA\u653B\u64CA\u76EE\u6A19`;return`<button type="button" data-target="${r.id}" aria-label="${l}" aria-pressed="${o}" class="target-choice${o?" is-target":""}${r.hp===0?" is-dead":""}"${c&&fi()?"":" disabled"}><span>${r.name}</span><small>\u7B2C ${te.seatOrder.indexOf(r.id)+1} \u5E2D \xB7 ${r.hp===0?"\u5DF2\u6B7B\u4EA1":r.hp+" \u8840"}</small></button>`}).join("");let s=null;if(t&&Xt.length===t.targetCount)try{s=ch(te,{actorId:i.id,actionId:cn,targetIds:Xt})}catch{}Z("target-detail").textContent=s?s.results.map(r=>`${jt(r.targetId)}\uFF1A${r.hpBefore} \u2192 ${r.hpAfter} \u8840${r.hpBefore===0?"\uFF08\u7121\u65B0\u589E\u64CA\u6BBA\u6216\u6230\u5229\u54C1\uFF09":r.killed?"\uFF08\u64CA\u6BBA\u4E26\u53D6\u5F97\u5176\u724C\u8207\u6B66\u5668\uFF09":""}`).join(`
`):t?`\u5DF2\u9078 ${Xt.length}\uFF0F${t.targetCount} \u500B\u76EE\u6A19${t.id==="flame"?"\uFF0C\u4F9D\u672C\u8F2A\u56FA\u5B9A\u5EA7\u4F4D\u5224\u65B7\u7BC4\u570D":""}`:"\u6C92\u6709\u53EF\u7528\u653B\u64CA",Z("clear-targets").hidden=t?.id==="flame"||Xt.length===0,Z("target-grid").setAttribute("aria-label",t?.id==="flame"?"\u708E\u528D\u56FA\u5B9A\u76EE\u6A19":"\u9078\u64C7\u653B\u64CA\u76EE\u6A19"),Z("attack-button").disabled=!fi()||!s||!!An,Z("attack-button").textContent=s?`\u78BA\u8A8D${t.name}\uFF08${Xt.map(jt).join("\u3001")}\uFF09`:"\u9078\u5B9A\u5408\u6CD5\u76EE\u6A19\u5F8C\u51FA\u62DB",Z("attack-button").dataset.actor=i.id,Z("attack-button").dataset.revision=_t?ln?.revision??-1:te.revision,Z("pass-button").hidden=!!An,Z("pass-button").disabled=!fi(),Z("confirm-pass").disabled=!fi(),Z("pass-confirm").hidden=!An,Z("pass-question").textContent=`\u78BA\u5B9A\u8B93${i.name}\u653E\u68C4\u672C\u8F2A\u884C\u52D5\uFF1F\u4E0D\u6703\u6D88\u8017\u724C\u3002`}function Wm(){let i=ni(te),e=te.characters.find(o=>o.id===i),t={loadout:"\u5148\u8A2D\u5B9A\u4E03\u540D\u89D2\u8272\u7684\u724C\u8207\u6B66\u5668",setup:"\u518D\u8A2D\u5B9A\u4E03\u540D\u89D2\u8272\u7684\u521D\u59CB\u8840\u91CF",preparation:`\u7B2C ${te.round} \u8F2A\uFF0C\u7B49\u5F85\u4E3B\u6301\u4EBA\u958B\u6230`,battle:e?`${e.name}\u884C\u52D5`:"\u672C\u8F2A\u6C92\u6709\u53EF\u884C\u52D5\u7684\u89D2\u8272","round-end":`\u7B2C ${te.round} \u8F2A\u884C\u52D5\u7D50\u675F`,finished:"\u4E09\u8F2A\u5C0D\u6230\u5DF2\u5B8C\u6210"},n={loadout:"\u9EDE\u9078\u89D2\u8272\u8A2D\u5B9A\u521D\u59CB\u724C\u6578\u8207\u6B66\u5668\u3002\u529B\u91CF 2\u3001\u9B54\u6CD5 2 \u662F\u53EF\u4FEE\u6539\u7684\u793A\u7BC4\u503C\uFF0C\u8ACB\u4F9D\u524D\u7F6E\u904A\u6232\u7D50\u679C\u8ABF\u6574\u3002",setup:"\u521D\u59CB\u9053\u5177\u5DF2\u78BA\u5B9A\uFF0C\u7531\u4E3B\u6301\u4EBA\u8A2D\u5B9A\u8840\u91CF\uFF0C\u518D\u78BA\u8A8D\u5C31\u5EA7\u3002\u9053\u5177\u4E0D\u6703\u5728\u6BCF\u8F2A\u81EA\u52D5\u88DC\u5145\u3002",preparation:_t?`\u7B2C ${te.round} \u8F2A\u6230\u524D\u6E96\u5099\u3002${te.round===1?"\u53EF\u4EA4\u63DB\u6216\u8D08\u9001\u6B66\u5668\u3002":"\u53EF\u4EA4\u63DB\u6216\u8D08\u9001\u6B66\u5668\u8207\u653B\u64CA\u724C\u3002"}\u4E3B\u6301\u4EBA\u958B\u6230\u6642\u6703\u53D6\u6D88\u5C1A\u672A\u5B8C\u6210\u7684\u63D0\u6848\u3002`:`\u7B2C ${te.round} \u8F2A\u6230\u524D\u6E96\u5099\u3002\u7531\u4E3B\u6301\u4EBA\u958B\u59CB\u6230\u9B25\uFF1B\u4EA4\u6613\u529F\u80FD\u8ACB\u4F7F\u7528\u9023\u7DDA\u623F\u9593\u6A21\u5F0F\u3002`,battle:"\u4F9D\u6700\u65B0\u8840\u91CF\u5B89\u6392\u5C1A\u672A\u884C\u52D5\u7684\u5B58\u6D3B\u89D2\u8272\u3002\u6BCF\u4EBA\u672C\u8F2A\u53EA\u80FD\u884C\u52D5\u4E00\u6B21\uFF0C\u5EA7\u4F4D\u4FDD\u6301\u56FA\u5B9A\u3002","round-end":te.round<3?"\u672C\u8F2A\u5DF2\u6C92\u6709\u53EF\u884C\u52D5\u7684\u89D2\u8272\u3002\u78BA\u8A8D\u7D00\u9304\u5F8C\u63DB\u5EA7\uFF0C\u518D\u9032\u5165\u4E0B\u4E00\u8F2A\u6E96\u5099\u3002":"\u7B2C\u4E09\u8F2A\u884C\u52D5\u7D50\u675F\u3002\u78BA\u8A8D\u7D00\u9304\u5F8C\u5B8C\u6210\u6700\u7D42\u63DB\u5EA7\u3002",finished:"\u4E09\u8F2A\u5DF2\u7D50\u675F\u3002\u53EF\u67E5\u770B\u6700\u7D42\u8840\u91CF\u8207\u64CA\u6BBA\u7D00\u9304\uFF1B\u672C\u7248\u5C1A\u672A\u5224\u5B9A\u9663\u71DF\u52DD\u8CA0\u3002"};Z("round-number").textContent=te.round,Z("phase-caption").textContent=`\uFF0F ${Rd[te.phase]}`,document.body.dataset.phase=te.phase,Z("battle-status").textContent=Rd[te.phase],Z("battle-headline").textContent=t[te.phase],Z("battle-banner").dataset.phase=te.phase,Z("host-title").textContent=te.phase==="battle"?"\u672C\u6B21\u884C\u52D5":Rd[te.phase];let s=_t&&!to()&&["loadout","setup","preparation","round-end"].includes(te.phase)?" \u8ACB\u7B49\u5F85\u4E3B\u6301\u4EBA\u78BA\u8A8D\u3002":_t&&te.phase==="battle"&&!fi()?ln?.takeoverCharacterId?" \u4E3B\u6301\u4EBA\u6B63\u5728\u4EE3\u64CD\u4F5C\u3002":" \u8ACB\u7B49\u5F85\u76EE\u524D\u884C\u52D5\u7684\u73A9\u5BB6\u51FA\u62DB\u3002":"";Z("phase-description").textContent=n[te.phase]+s,document.querySelectorAll("[data-round]").forEach(o=>{let a=Number(o.dataset.round);o.classList.toggle("is-current",a===te.round&&te.phase!=="finished"),o.classList.toggle("is-complete",a<te.round||te.phase==="finished"),a===te.round?o.setAttribute("aria-current","step"):o.removeAttribute("aria-current")}),Z("loadout-confirm").hidden=te.phase!=="loadout"||!to(),Z("setup-confirm").hidden=te.phase!=="setup"||!to(),Z("start-battle").hidden=te.phase!=="preparation"||!to(),Z("start-battle").textContent=`\u4E3B\u6301\u4EBA\u958B\u59CB\u7B2C ${te.round} \u8F2A\u6230\u9B25`,Z("advance-round").hidden=te.phase!=="round-end"||!to(),Z("advance-round").textContent=te.round<3?`\u63DB\u5EA7\u4E26\u9032\u5165\u7B2C ${te.round+1} \u8F2A\u6E96\u5099`:"\u5B8C\u6210\u6700\u7D42\u63DB\u5EA7\u8207\u5C0D\u6230";for(let o of["loadout-confirm","setup-confirm","start-battle","advance-round"])Z(o).disabled=eo||!is();for(let o of["reset-all","reset-preview"])Z(o).hidden=_t;Z("action-panel").hidden=te.phase!=="battle";let r=te.phase==="battle"?ih(te):["loadout","setup","preparation"].includes(te.phase)?nh(te).filter(o=>te.characters.find(a=>a.id===o).hp>0):[];Z("queue-title").textContent=te.phase==="battle"?"\u5F85\u884C\u52D5":["round-end","finished"].includes(te.phase)?"\u672C\u8F2A\u5DF2\u7D50\u675F":"\u9810\u8A08\u9806\u5E8F",Z("action-queue").innerHTML=r.length?r.map(o=>`<li class="${i===o?"queue-active":""}">${jt(o)}</li>`).join(""):'<li class="queue-empty">\u6C92\u6709\u5C1A\u5F85\u884C\u52D5\u7684\u89D2\u8272</li>',Z("tie-note").textContent=te.round===1?"\u9996\u8F2A\u540C\u8840\u91CF\u5148\u4F9D\u793A\u7BC4\u9806\u4F4D\uFF0C\u6B63\u5F0F\u898F\u5247\u5F85\u78BA\u8A8D\u3002":"\u540C\u8840\u91CF\u53C3\u7167\u4E0A\u4E00\u8F2A\u884C\u52D5\u9806\u5E8F\uFF1B\u672A\u884C\u52D5\u8005\u66AB\u6CBF\u7528\u539F\u9806\u4F4D\u3002",Z("roster-hint").textContent=te.phase==="loadout"?"\u9EDE\u89D2\u8272\u8A2D\u5B9A\u9053\u5177":te.phase==="setup"?"\u6B64\u968E\u6BB5\u53EF\u4FEE\u6539\u8840\u91CF":te.phase==="battle"?"\u9EDE\u89D2\u8272\u4E5F\u53EF\u9078\u64C7\u76EE\u6A19":"\u521D\u59CB\u8A2D\u5B9A\u5DF2\u9396\u5B9A",Dd(),e&&Vm(e)}function sn({preserveInput:i=!1}={}){let e=ni(te),t=te.characters.find(n=>n.id===te.selectedId);te.seatOrder.forEach((n,s)=>{let r=te.characters.find(l=>l.id===n),o=document.querySelector(`[data-character="${n}"]`);o.style.order=s;for(let[l,h]of[["is-selected",n===te.selectedId],["is-active",n===e],["is-target",Xt.includes(n)],["is-dead",r.hp===0]])o.classList.toggle(l,h);document.querySelector(`[data-seat="${n}"]`).textContent=s+1,document.querySelector(`[data-status="${n}"]`).textContent=Yc(r),document.querySelector(`[data-items="${n}"]`).textContent=Ld(r);let a=Z("hp-"+n);(!i||document.activeElement!==a)&&(a.value=r.hp),a.disabled=te.phase!=="setup"||!is(),o.querySelector('[data-delta="-1"]').disabled=te.phase!=="setup"||!is()||r.hp===0,o.querySelector('[data-delta="1"]').disabled=te.phase!=="setup"||!is()||r.hp===999;let c=Ud.get(n);for(let[l,h]of[["selected",n===te.selectedId],["dead",r.hp===0],["is-active",n===e],["is-target",Xt.includes(n)],["has-acted",te.actedIds.includes(n)]])c.classList.toggle(l,h);c.querySelector(".seat-name").textContent=r.name,c.querySelector(".seat-meta").textContent=`\u7B2C ${s+1} \u5E2D \xB7 ${r.hp} \u8840`,c.querySelector(".seat-state").textContent=Xt.includes(n)?"\u653B\u64CA\u76EE\u6A19":Yc(r),c.setAttribute("aria-label",`${r.name}\uFF0C\u7B2C${s+1}\u5E2D\uFF0C\u8840\u91CF${r.hp}\uFF0C${Yc(r)}${Xt.includes(n)?"\uFF0C\u653B\u64CA\u76EE\u6A19":""}`),c.setAttribute("aria-pressed",String(n===te.selectedId))}),Z("selected-name").textContent=t.name,Z("selected-subtitle").textContent=`${t.subtitle} \xB7 ${Yc(t)}`,Z("selected-hp").textContent=t.hp,Z("selected-seat").textContent=`\u76EE\u524D\u7B2C ${te.seatOrder.indexOf(t.id)+1} \u5E2D`,Z("selected-description").textContent=t.id==="fenrir"?"\u72FC\u9762\u7532\u8207\u5B9A\u5411\u9B03\u6BDB\u7684\u975C\u614B\u6A23\u672C\uFF0C\u6B63\u5F0F\u52D5\u4F5C\u4ECD\u5F85\u88FD\u4F5C\u3002":"\u76EE\u524D\u4F7F\u7528\u7AD9\u4F4D\u66FF\u8EAB\uFF0C\u6B63\u5F0F\u9020\u578B\u4F9D\u89D2\u8272\u6D77\u5831\u88FD\u4F5C\u3002",Z("selected-portrait").src="./"+t.portrait,Z("selected-portrait").alt=t.name+"\u89D2\u8272\u6D77\u5831",Z("selected-items").textContent=Ld(t),Z("rank-preview").hidden=!["setup","round-end"].includes(te.phase),Z("rank-list").innerHTML=nh(te).map((n,s)=>`<li><span>${s+1}</span>${jt(n)}</li>`).join(""),Wm(),cS(),Pi(),di?.update({characters:te.characters,seatOrder:te.seatOrder,selectedId:te.selectedId,combat:te.phase==="battle"?{activeId:e,targetIds:Xt,actedIds:te.actedIds}:null})}function Cd(i,e,t=!1){if(_t){if(!is())return;try{return th(te,i,e),Z("hp-"+i).removeAttribute("aria-invalid"),Ts("set-hp",{characterId:i,hp:e})}catch(n){Z("hp-"+i).setAttribute("aria-invalid","true"),Rn(n.message);return}}try{te=th(te,i,e),Z("hp-"+i).removeAttribute("aria-invalid"),sn({preserveInput:t}),ir()}catch(n){Z("hp-"+i).setAttribute("aria-invalid","true"),Rn(n.message)}}function km(){if(_t&&!is())return!1;let i=te.characters.find(t=>t.id===te.selectedId),e=[Z("initial-power"),Z("initial-magic")];if(e.some(t=>t.value===""||!t.checkValidity())){for(let t of e)t.value=i.cards[t.id==="initial-power"?"power":"magic"];return Rn("\u521D\u59CB\u724C\u6578\u8ACB\u8F38\u5165 0\u201399 \u7684\u6574\u6578"),Dd(),!1}try{let t={power:Number(e[0].value),magic:Number(e[1].value),weapons:["axe","flame"].filter(s=>Z("initial-"+s).checked)},n=Vd(te,i.id,t);return _t?Ts("set-loadout",{characterId:i.id,...t}):(te=n,sn(),ir(),!0)}catch(t){return Rn(t.message),Dd(),!1}}function hS(){Z("loadout-character").addEventListener("change",i=>Sa(i.target.value));for(let i of["initial-power","initial-magic","initial-axe","initial-flame"])Z(i).addEventListener("change",km);Z("loadout-confirm").addEventListener("click",async()=>{await km()&&(Kc=!1,qc(eh,"\u521D\u59CB\u9053\u5177\u5DF2\u78BA\u5B9A\uFF0C\u63A5\u8457\u8A2D\u5B9A\u8840\u91CF","finish-loadout"))}),Z("roster").addEventListener("click",i=>{let e=i.target.closest("[data-select]");if(e){Sa(e.dataset.select);return}let t=i.target.closest("[data-delta]");if(t){let n=te.characters.find(s=>s.id===t.dataset.id);Cd(n.id,n.hp+Number(t.dataset.delta))}}),Z("roster").addEventListener("input",i=>{!_t&&i.target.matches("[data-hp]")&&i.target.value!==""&&Cd(i.target.dataset.hp,Number(i.target.value),!0)}),Z("roster").addEventListener("change",i=>{if(!i.target.matches("[data-hp]"))return;let e=i.target,t=Number(e.value);e.value===""||!Number.isInteger(t)||t<0||t>999?(e.value=te.characters.find(n=>n.id===e.dataset.hp).hp,e.removeAttribute("aria-invalid"),Rn("\u5DF2\u9084\u539F\u4E0A\u4E00\u6B21\u6709\u6548\u8840\u91CF")):Cd(e.dataset.hp,t)}),Z("setup-confirm").addEventListener("click",()=>{let i=[...document.querySelectorAll("[data-hp]")].find(e=>e.value===""||!e.checkValidity());if(i){i.focus(),Rn("\u8ACB\u5148\u5B8C\u6210\u6709\u6548\u7684\u521D\u59CB\u8840\u91CF\u8A2D\u5B9A");return}qc(sh,"\u521D\u59CB\u8840\u91CF\u5DF2\u78BA\u5B9A\uFF0C\u7B49\u5F85\u4E3B\u6301\u4EBA\u958B\u6230","finish-setup")}),Z("start-battle").addEventListener("click",()=>qc(rh,`\u7B2C ${te.round} \u8F2A\u6230\u9B25\u958B\u59CB`,"start-battle")),Z("advance-round").addEventListener("click",()=>qc(dh,te.round<3?`\u5DF2\u63DB\u5EA7\uFF0C\u9032\u5165\u7B2C ${te.round+1} \u8F2A\u6E96\u5099`:"\u6700\u7D42\u63DB\u5EA7\u5B8C\u6210\uFF0C\u4E09\u8F2A\u5C0D\u6230\u7D50\u675F","advance-round")),Z("target-grid").addEventListener("click",i=>{let e=i.target.closest("[data-target]");e&&Sa(e.dataset.target)}),Z("attack-methods").addEventListener("click",i=>{let e=i.target.closest("[data-action]");e&&!e.disabled&&fi()&&(cn=e.dataset.action,Xt=cn==="flame"?[...ao(te,cn)[0]||[]]:[],An=null,sn())}),Z("clear-targets").addEventListener("click",()=>{Xt=[],sn()}),Z("attack-button").addEventListener("click",async i=>{if(!fi())return;let e={actorId:i.currentTarget.dataset.actor,actionId:cn,targetIds:[...Xt],expectedRevision:Number(i.currentTarget.dataset.revision)};if(!(!e.targetIds.length||An)){if(_t){await Ts("attack",{actorId:e.actorId,actionId:e.actionId,targetIds:e.targetIds});return}if(Zc(t=>hh(t,e))){let t=te.log.at(-1);di?.playAttackBatch?.({actorId:e.actorId,targets:t.results.map(({targetId:n,killed:s})=>({targetId:n,killed:s}))}),Rn(te.phase==="round-end"?"\u672C\u8F2A\u884C\u52D5\u7D50\u675F\uFF0C\u8ACB\u78BA\u8A8D\u7D00\u9304\u4E26\u63DB\u5EA7":`${jt(e.actorId)}\u5DF2\u884C\u52D5\uFF0C\u63A5\u8457\u7531${jt(ni(te))}\u884C\u52D5`)}}}),Z("pass-button").addEventListener("click",()=>{let i=ni(te);i&&fi()&&(An={actorId:i,expectedRevision:_t?ln.revision:te.revision},sn())}),Z("confirm-pass").addEventListener("click",()=>{if(An&&fi()){let i={...An};_t?Ts("pass",{actorId:i.actorId},`${jt(i.actorId)}\u5DF2\u653E\u68C4\u672C\u6B21\u884C\u52D5`):Zc(e=>uh(e,i),`${jt(i.actorId)}\u5DF2\u653E\u68C4\u672C\u6B21\u884C\u52D5`)}}),Z("cancel-pass").addEventListener("click",()=>{An=null,sn()});for(let i of["reset-all","reset-preview"])Z(i).addEventListener("click",()=>{_t||Z("reset-dialog").showModal()});Z("cancel-reset").addEventListener("click",()=>Z("reset-dialog").close()),Z("confirm-reset").addEventListener("click",()=>{Z("reset-dialog").close(),Kc=!1,Zc(()=>cr(),"\u5DF2\u91CD\u65B0\u958B\u5C40\uFF0C\u8ACB\u5148\u8A2D\u5B9A\u521D\u59CB\u9053\u5177"),document.querySelector('[data-view="overview"]').click()}),document.querySelectorAll("[data-view]").forEach(i=>i.addEventListener("click",()=>{di?.setView(i.dataset.view),document.querySelectorAll("[data-view]").forEach(e=>{let t=e===i;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))})})),Z("reset-camera").addEventListener("click",()=>{di?.resetCamera(),document.querySelector('[data-view="overview"]').click()}),Z("fenrir-toggle").addEventListener("change",i=>di?.setFenrirEnabled(i.target.checked)),Z("quality").addEventListener("change",i=>{let e=i.target.value==="low"?"low":"balanced";try{localStorage.setItem(Gm,e)}catch{}di?.setQuality(e)})}function uS(i){if(i.phase==="webgl"){Rn(i.kind==="error"?"3D \u756B\u9762\u66AB\u505C\uFF0C\u6B63\u5728\u7B49\u5F85\u6062\u5FA9\u3002\u5C0D\u6230\u64CD\u4F5C\u4ECD\u53EF\u4F7F\u7528\u3002":"3D \u821E\u53F0\u5DF2\u6062\u5FA9");return}i.phase&&i.phase!=="model"||(Pd=i.kind,["loaded","ready","success"].includes(i.kind)?(Z("model-badge").textContent="\u82AC\u91CC\u723E 3D \u5DF2\u8F09\u5165",Z("asset-detail").textContent=$c):i.kind==="error"?(Z("model-badge").textContent="\u6A21\u578B\u672A\u8F09\u5165\u30FB\u4F7F\u7528\u66FF\u8EAB",Z("asset-detail").textContent="\u6A21\u578B\u672A\u6210\u529F\u8F09\u5165\uFF0C\u821E\u53F0\u4ECD\u53EF\u4F7F\u7528\u7AD9\u4F4D\u66FF\u8EAB\u3002\u91CD\u65B0\u6574\u7406\u53EF\u518D\u6B21\u5617\u8A66\u3002"):i.kind==="loading"&&(Z("model-badge").textContent="\u8F09\u5165\u82AC\u91CC\u723E\u6A23\u672C\u2026"))}function dS(){if(di?.getLabels){let i=Z("stage").clientWidth,e=Z("stage").clientHeight,t=[],n=di.getLabels().sort((s,r)=>s.y-r.y||s.x-r.x);for(let s of n){let r=Ud.get(s.id);if(!r||(r.hidden=!s.visible,!s.visible))continue;let o=r.offsetWidth,a=r.offsetHeight,c=o/2+7,l=Math.max(c,Math.min(i-c,s.x)),h=Math.max(80,Math.min(e-91,s.y)),u=null;e:for(let d of[0,-a-6,a+6,-2*a-12,2*a+12])for(let f of[0,-o/2-6,o/2+6,-o-6,o+6]){let p=Math.max(c,Math.min(i-c,l+f)),y=Math.max(80,Math.min(e-91,h+d)),m={left:p-o/2,right:p+o/2,top:y-a,bottom:y},M=t.reduce((S,x)=>S+Math.max(0,Math.min(m.right+3,x.right)-Math.max(m.left-3,x.left))*Math.max(0,Math.min(m.bottom+3,x.bottom)-Math.max(m.top-3,x.top)),0)*1e6+(p-l)**2+(y-h)**2;if((!u||M<u.score)&&(u={x:p,y,box:m,score:M}),M===0)break e}r.style.left=u.x+"px",r.style.top=u.y+"px",t.push(u.box)}}}function fS(){aS(),hS(),Id=Om({onCommand:(i,e)=>Ts(i,e),nameOf:jt}),rS(),sn();try{let i=iS();Z("quality").value=i,di=Im({canvas:Z("arena"),initialQuality:i,onSelect:Sa,onStatus:uS,onFrame:dS,onMetrics:e=>{e.idle===!0?Z("performance-detail").textContent="\u756B\u9762\u975C\u6B62\u6642\u66AB\u505C\u7E6A\u88FD\uFF0C\u64CD\u4F5C\u5F8C\u6703\u7E7C\u7E8C\u66F4\u65B0\u3002":Number.isFinite(e.fps)&&(Z("performance-detail").textContent=`\u76EE\u524D\u88DD\u7F6E\uFF1A\u7D04 ${Math.round(e.fps)} FPS\uFF1B\u6B64\u6578\u503C\u50C5\u4EE3\u8868\u76EE\u524D\u700F\u89BD\u5668\uFF0C\u9700\u53E6\u5916\u6E2C\u8A66\u771F\u5BE6\u624B\u6A5F\u3002`)}}),sn()}catch(i){console.error("Arena initialization failed",i),Z("stage-error").hidden=!1,Z("stage-error").innerHTML='<h2>\u76EE\u524D\u7121\u6CD5\u958B\u555F 3D \u821E\u53F0</h2><p>\u8ACB\u4F7F\u7528\u652F\u63F4 WebGL \u7684 Safari \u6216 Chrome\uFF0C\u6216\u91CD\u65B0\u958B\u555F\u9019\u500B\u7DB2\u9801\u3002\u5C0D\u6230\u64CD\u4F5C\u4ECD\u53EF\u4F7F\u7528\u3002</p><button type="button" id="reload-page">\u91CD\u65B0\u8F09\u5165</button>',Z("reload-page").addEventListener("click",()=>location.reload()),Z("model-badge").textContent="3D \u821E\u53F0\u672A\u555F\u52D5"}fetch(new URL("assets/fenrir-report.json",document.baseURI)).then(i=>{if(!i.ok)throw new Error("No export report");return i.json()}).then(i=>{let e=i.file_bytes||i.glb_bytes||i.bytes||i.file_size_bytes;$c=`\u82AC\u91CC\u723E\u7531 B89 \u4E3B\u6A94\u532F\u51FA\u70BA\u975C\u614B\u7DB2\u9801\u6A23\u672C${e?`\uFF0C\u6A21\u578B\u7D04 ${(e/1048576).toFixed(1)} MB`:""}\u3002\u6BDB\u9AEE\u8207\u6750\u8CEA\u5DF2\u91DD\u5C0D\u9810\u89BD\u7C21\u5316\uFF0C\u6B63\u5F0F\u52D5\u4F5C\u8207\u89D2\u8272\u512A\u5316\u4ECD\u5F85\u88FD\u4F5C\u3002`,Pd!=="error"&&(Z("asset-detail").textContent=$c)}).catch(()=>{Pd!=="error"&&(Z("asset-detail").textContent=$c)}),window.addEventListener("pagehide",i=>{ir(),i.persisted||(Ii?.destroy(),di?.dispose())}),window.addEventListener("pageshow",i=>{i.persisted&&Wt&&Ii.resume().catch(()=>{})})}if(Z("battle-banner")&&Z("room-panel")&&Z("trade-panel")&&Z("trade-form")&&Z("flame-fixed-rule")&&Z("attack-methods")&&Z("reset-dialog"))fS();else{let i=new URL(location.href);i.searchParams.get("build")!=="trades-p3b-v1"?(i.searchParams.set("build","trades-p3b-v1"),location.replace(i.href)):(document.body.innerHTML='<main class="reset-dialog" style="margin:32px auto"><h1>\u7DB2\u9801\u6B63\u5728\u66F4\u65B0</h1><p>\u8ACB\u7A0D\u5F8C\u91CD\u65B0\u8F09\u5165\uFF0C\u5373\u53EF\u7E7C\u7E8C\u4E09\u8F2A\u5C0D\u6230\u3002\u5DF2\u4FDD\u5B58\u7684\u9032\u5EA6\u6703\u4FDD\u7559\u3002</p><button type="button" id="retry-version">\u91CD\u65B0\u8F09\u5165</button></main>',Z("retry-version").addEventListener("click",()=>location.reload()))}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
