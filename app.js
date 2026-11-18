var yi=Object.freeze([{id:"thor",name:"\u6258\u723E",subtitle:"\u96F7\u795E",color:"#7aa7c5",initialHp:15},{id:"sif",name:"\u5E0C\u8299",subtitle:"\u9752\u6625\u5973\u795E",color:"#d998ad",initialHp:14},{id:"loki",name:"\u6D1B\u57FA",subtitle:"\u8A6D\u8A08\u4E4B\u795E",color:"#79b29e",initialHp:9},{id:"valkyrie",name:"\u74E6\u57FA\u91CC",subtitle:"\u5973\u6B66\u795E",color:"#c4d3d6",initialHp:15},{id:"heimdall",name:"\u6D77\u59C6\u9054\u723E",subtitle:"\u5B88\u8B77\u795E",color:"#c4a879",initialHp:12},{id:"frigga",name:"\u5F17\u9E97\u5609",subtitle:"\u795E\u540E",color:"#d9c6a1",initialHp:8},{id:"fenrir",name:"\u82AC\u91CC\u723E",subtitle:"\u5DE8\u72FC",color:"#b77362",initialHp:13}].map(i=>Object.freeze({...i,portrait:`assets/portraits/${i.id}.webp`})));var wa=yi.map(({id:i})=>i),Fd=new Set(wa);function zm(i){if(!Number.isInteger(i)||i<0||i>999)throw new RangeError("\u9810\u89BD\u8840\u91CF\u8ACB\u8F38\u5165 0\u2013999 \u7684\u6574\u6578\uFF1B\u6B64\u7BC4\u570D\u4E0D\u662F\u6B63\u5F0F\u904A\u6232\u8840\u91CF\u4E0A\u9650\u3002")}function Hm(i){if(!Array.isArray(i)||i.length!==wa.length)throw new TypeError("\u9810\u89BD\u9700\u8981\u5B8C\u6574\u7684\u4E03\u540D\u89D2\u8272\u3002");let e=new Set;for(let t of i){if(!t||!Fd.has(t.id)||e.has(t.id))throw new TypeError("\u89D2\u8272\u8EAB\u5206\u7121\u6548\u6216\u91CD\u8907\u3002");e.add(t.id),zm(t.hp)}}function Gm(i){if(!Array.isArray(i)||i.length!==wa.length||new Set(i).size!==wa.length||i.some(e=>!Fd.has(e)))throw new TypeError("\u5EA7\u4F4D\u8207\u540C\u8840\u91CF\u9806\u4F4D\u5FC5\u9808\u5404\u5305\u542B\u4E03\u540D\u4E0D\u91CD\u8907\u89D2\u8272\u3002")}function or(i,e){Hm(i),Gm(e);let t=new Map(e.map((n,s)=>[n,s]));return[...i].sort((n,s)=>s.hp-n.hp||t.get(n.id)-t.get(s.id)).map(({id:n})=>n)}var ar=Object.freeze(["axe","flame"]),Vm=Object.freeze({flameTargeting:"flanks",circularAdjacency:!0});var ni=yi.map(({id:i})=>i),Ta=new Set(ni),Wm=new Set(["loadout","setup","preparation","battle","round-end","finished"]),lr=99,zd=ni.length*lr,Aa=60,Hd=29,Xm=Hd+Aa,so=Object.freeze({power:{id:"power",name:"\u529B\u91CF\u724C",damage:2,targetCount:1,cost:{power:1,magic:0}},magic:{id:"magic",name:"\u9B54\u6CD5\u724C",damage:1,targetCount:1,cost:{power:0,magic:1}},axe:{id:"axe",name:"\u6230\u65A7",damage:3,targetCount:1,cost:{power:1,magic:0},weapon:"axe"},flame:{id:"flame",name:"\u708E\u528D",damage:2,targetCount:2,cost:{power:1,magic:0},weapon:"flame"}});function Ps(i){if(!Ta.has(i))throw new RangeError("\u627E\u4E0D\u5230\u9019\u540D\u89D2\u8272\u3002")}function $c(i){if(!Number.isInteger(i)||i<0||i>999)throw new RangeError("\u539F\u578B\u8840\u91CF\u8ACB\u8F38\u5165 0\u2013999 \u7684\u6574\u6578\uFF1B\u6B64\u7BC4\u570D\u4E0D\u662F\u6B63\u5F0F\u904A\u6232\u8840\u91CF\u4E0A\u9650\u3002")}function cs(i,e=zd){if(!Number.isInteger(i)||i<0||i>e)throw new RangeError(`\u653B\u64CA\u724C\u8ACB\u8F38\u5165 0\u2013${e} \u7684\u6574\u6578\uFF1B\u6B64\u7BC4\u570D\u662F\u539F\u578B\u64CD\u4F5C\u9650\u5236\u3002`)}function Ra(i){if(!Array.isArray(i)||i.length>ar.length||new Set(i).size!==i.length||i.some(e=>!ar.includes(e)))throw new TypeError("\u6B66\u5668\u5FC5\u9808\u662F\u672A\u91CD\u8907\u7684\u6230\u65A7\u6216\u708E\u528D\u3002")}function Kc(i){if(!i||typeof i!="object"||Array.isArray(i)||!Object.hasOwn(i,"flameTargeting")||!Object.hasOwn(i,"circularAdjacency")||Object.keys(i).some(e=>!["flameTargeting","circularAdjacency"].includes(e))||i.flameTargeting!=="flanks"||i.circularAdjacency!==!0)throw new TypeError("\u708E\u528D\u56FA\u5B9A\u653B\u64CA\u81EA\u5DF1\u5169\u5074\u5EA7\u4F4D\uFF0C\u7B2C 1 \u8207\u7B2C 7 \u5E2D\u76F8\u9130\uFF1B\u4E0D\u80FD\u8B8A\u66F4\u6B64\u898F\u5247\u3002")}function qm(i,e){if(!e||typeof e!="object"||Array.isArray(e))throw new TypeError("\u898F\u5247\u8A2D\u5B9A\u7121\u6548\u3002");let t={...i,...e};return Kc(t),t}function Fi(i,{full:e=!1}={}){if(!Array.isArray(i)||i.length>ni.length||e&&i.length!==ni.length||new Set(i).size!==i.length||i.some(t=>!Ta.has(t)))throw new TypeError("\u89D2\u8272\u9806\u4F4D\u7121\u6548\u6216\u91CD\u8907\u3002")}function ls(i,e){return JSON.stringify(i)===JSON.stringify(e)}function hs(i){let e=new Set(i.actedIds),t=new Set(i.characters.filter(({hp:n})=>n>0).map(({id:n})=>n));return or(i.characters,i.tieOrder).filter(n=>t.has(n)&&!e.has(n))}function Ca(i,e=!1){let t=new Set,n={power:0,magic:0};for(let s of i){if(!s.cards||typeof s.cards!="object"||Array.isArray(s.cards)||Object.keys(s.cards).length!==2||!Object.hasOwn(s.cards,"power")||!Object.hasOwn(s.cards,"magic"))throw new TypeError("\u653B\u64CA\u724C\u8CC7\u6599\u7121\u6548\u3002");for(let r of["power","magic"])cs(s.cards[r],e?lr:zd),n[r]+=s.cards[r];Ra(s.weapons);for(let r of s.weapons){if(t.has(r))throw new Error("\u6BCF\u4EF6\u795E\u5668\u53EA\u80FD\u7531\u4E00\u540D\u89D2\u8272\u6301\u6709\uFF0C\u8ACB\u5148\u79FB\u9664\u539F\u6301\u6709\u8005\u7684\u6B66\u5668\u3002");t.add(r)}}Object.values(n).forEach(s=>cs(s))}function Nn(i){if(!i||typeof i!="object"||Array.isArray(i)||i.schemaVersion!==4||!Wm.has(i.phase)||!Number.isInteger(i.round)||i.round<1||i.round>3||!Number.isSafeInteger(i.revision)||i.revision<0)throw new TypeError("\u6230\u9B25\u539F\u578B\u7684\u72C0\u614B\u6216\u7248\u672C\u7121\u6548\u3002");if(!Array.isArray(i.characters)||i.characters.length!==ni.length)throw new TypeError("\u6230\u9B25\u539F\u578B\u9700\u8981\u5B8C\u6574\u4E03\u540D\u89D2\u8272\u3002");if(Fi(i.characters.map(({id:n})=>n),{full:!0}),i.characters.forEach(({hp:n})=>$c(n)),Ca(i.characters,i.phase==="loadout"||i.phase==="setup"),Kc(i.rules),Ps(i.selectedId),Fi(i.seatOrder,{full:!0}),Fi(i.tieOrder,{full:!0}),Fi(i.actedIds),Fi(i.roundActionOrder),Fi(i.previousRoundActionOrder),!ls(i.actedIds,i.roundActionOrder))throw new TypeError("\u672C\u8F2A\u884C\u52D5\u7D00\u9304\u4E0D\u4E00\u81F4\u3002");if(!Array.isArray(i.log)||i.log.length>Xm||!Array.isArray(i.kills)||i.kills.length>ni.length)throw new TypeError("\u6230\u9B25\u4E8B\u4EF6\u7D00\u9304\u7121\u6548\u3002");let e=i.log.filter(n=>n?.type==="trade").length;if(e>Aa||i.log.length-e>Hd)throw new TypeError("\u4EA4\u6613\u6216\u6230\u9B25\u4E8B\u4EF6\u7D00\u9304\u8D85\u51FA\u4E0A\u9650\u3002");let t=new Set;for(let n of i.kills){if(!n||!Ta.has(n.killerId)||!Ta.has(n.victimId)||n.killerId===n.victimId||t.has(n.victimId)||!Number.isInteger(n.round)||n.round<1||n.round>i.round||!Number.isInteger(n.eventId)||n.eventId<1||n.eventId>i.log.length||i.characters.find(({id:s})=>s===n.victimId).hp!==0)throw new TypeError("\u64CA\u6BBA\u7D00\u9304\u7121\u6548\u3002");t.add(n.victimId)}if(i.round===1&&i.previousRoundActionOrder.length)throw new TypeError("\u9996\u8F2A\u4E0D\u80FD\u6709\u4E0A\u4E00\u8F2A\u7D00\u9304\u3002");if(i.phase==="loadout"||i.phase==="setup"){if(i.round!==1||i.actedIds.length||i.previousRoundActionOrder.length||i.kills.length)throw new TypeError("\u521D\u59CB\u8A2D\u5B9A\u4E0D\u80FD\u5305\u542B\u6230\u9B25\u9032\u5EA6\u3002");if(i.phase==="loadout"&&i.log.length)throw new TypeError("\u9053\u5177\u8A2D\u5B9A\u4E0D\u80FD\u5305\u542B\u5DF2\u78BA\u8A8D\u4E8B\u4EF6\u3002");if(i.phase==="setup"&&(i.log.length!==1||i.log[0]?.type!=="loadout"))throw new TypeError("\u7F3A\u5C11\u521D\u59CB\u9053\u5177\u7D00\u9304\u3002")}else if(i.log.length<2||i.log[0]?.type!=="loadout"||i.log[1]?.type!=="setup")throw new TypeError("\u7F3A\u5C11\u521D\u59CB\u9053\u5177\u6216\u8840\u91CF\u7D00\u9304\u3002");if(i.phase==="preparation"&&i.actedIds.length)throw new TypeError("\u6230\u524D\u6E96\u5099\u4E0D\u80FD\u5305\u542B\u672C\u8F2A\u5DF2\u884C\u52D5\u8005\u3002");if(i.phase==="battle"&&!hs(i).length)throw new TypeError("\u6C92\u6709\u53EF\u884C\u52D5\u89D2\u8272\u6642\u61C9\u9032\u5165\u8F2A\u672B\u3002");if((i.phase==="round-end"||i.phase==="finished")&&hs(i).length)throw new TypeError("\u4ECD\u6709\u89D2\u8272\u5C1A\u672A\u5B8C\u6210\u884C\u52D5\u3002");if(i.phase==="finished"&&i.round!==3)throw new TypeError("\u5B8C\u6210\u5C0D\u6230\u5FC5\u9808\u5DF2\u5230\u7B2C\u4E09\u8F2A\u3002")}function Zc(i){if(i.revision>=Number.MAX_SAFE_INTEGER)throw new RangeError("\u9032\u5EA6\u7248\u672C\u5DF2\u8D85\u51FA\u7BC4\u570D\uFF0C\u8ACB\u91CD\u65B0\u958B\u59CB\u539F\u578B\u3002");return i.revision+1}function us(i,e,t={}){let n=Zc(i);return{...i,...t,revision:n,log:[...i.log,{id:i.log.length+1,revision:n,round:i.round,...e}]}}function Ym(){return yi.map(i=>({...i,hp:i.initialHp,cards:{power:2,magic:2},weapons:[]}))}function cr(i={}){let e=Ym();return{schemaVersion:4,characters:e,rules:qm(Vm,i),seatOrder:or(e,ni),tieOrder:[...ni],selectedId:"fenrir",round:1,phase:"loadout",actedIds:[],roundActionOrder:[],previousRoundActionOrder:[],log:[],kills:[],revision:0}}function Gd(i,e,t){if(Nn(i),i.phase!=="loadout")throw new Error("\u53EA\u6709\u521D\u59CB\u9053\u5177\u968E\u6BB5\u53EF\u4EE5\u8A2D\u5B9A\u653B\u64CA\u724C\u8207\u6B66\u5668\u3002");if(Ps(e),!t||typeof t!="object"||Array.isArray(t)||Object.keys(t).some(l=>!["power","magic","weapons"].includes(l)))throw new TypeError("\u521D\u59CB\u9053\u5177\u8A2D\u5B9A\u7121\u6548\u3002");let n=i.characters.find(l=>l.id===e),s=Object.hasOwn(t,"power")?t.power:n.cards.power,r=Object.hasOwn(t,"magic")?t.magic:n.cards.magic,o=Object.hasOwn(t,"weapons")?t.weapons:n.weapons;cs(s,lr),cs(r,lr),Ra(o);let a={cards:{power:s,magic:r},weapons:ar.filter(l=>o.includes(l))},c=i.characters.map(l=>l.id===e?{...l,...a}:l);return Ca(c,!0),ls(n.cards,a.cards)&&ls(n.weapons,a.weapons)?i:{...i,characters:c,revision:Zc(i)}}function Jc(i){if(Nn(i),i.phase!=="loadout")throw new Error("\u521D\u59CB\u9053\u5177\u5DF2\u78BA\u8A8D\u3002");return us(i,{type:"loadout",rules:{...i.rules},initialLoadout:i.characters.map(({id:e,cards:t,weapons:n})=>({id:e,power:t.power,magic:t.magic,weapons:[...n]}))},{phase:"setup"})}function jc(i,e,t){if(Nn(i),i.phase!=="setup")throw new Error("\u53EA\u6709\u78BA\u8A8D\u9053\u5177\u5F8C\u7684\u521D\u59CB\u8A2D\u5B9A\u968E\u6BB5\u53EF\u4EE5\u76F4\u63A5\u8ABF\u6574\u8840\u91CF\u3002");return Ps(e),$c(t),i.characters.find(n=>n.id===e).hp===t?i:{...i,revision:Zc(i),characters:i.characters.map(n=>n.id===e?{...n,hp:t}:n)}}function Vd(i,e){return Nn(i),Ps(e),{...i,selectedId:e}}function Qc(i){return Nn(i),or(i.characters,i.tieOrder)}function eh(i){return Nn(i),i.phase==="battle"?hs(i):[]}function ii(i){return eh(i)[0]??null}function th(i){if(Nn(i),i.phase!=="setup")throw new Error("\u8ACB\u5148\u78BA\u8A8D\u521D\u59CB\u9053\u5177\uFF1B\u5DF2\u5B8C\u6210\u7684\u521D\u59CB\u8840\u91CF\u4E0D\u80FD\u91CD\u8907\u78BA\u8A8D\u3002");return us(i,{type:"setup",initialHp:i.characters.map(({id:e,hp:t})=>({id:e,hp:t}))},{phase:"preparation",seatOrder:or(i.characters,i.tieOrder)})}function nh(i){if(Nn(i),i.phase!=="preparation")throw new Error("\u53EA\u6709\u6230\u524D\u6E96\u5099\u968E\u6BB5\u53EF\u4EE5\u958B\u59CB\u6230\u9B25\u3002");return us(i,{type:"battle-start"},{phase:hs(i).length?"battle":"round-end"})}function Bd(i){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==3||!["power","magic","weapons"].every(e=>Object.hasOwn(i,e)))throw new TypeError("\u4EA4\u6613\u7269\u54C1\u9700\u5305\u542B\u529B\u91CF\u724C\u3001\u9B54\u6CD5\u724C\u8207\u6B66\u5668\u6E05\u55AE\u3002");return cs(i.power),cs(i.magic),Ra(i.weapons),{power:i.power,magic:i.magic,weapons:ar.filter(e=>i.weapons.includes(e))}}function $m(i,{fromId:e,toId:t,give:n,receive:s,expectedRevision:r}={}){if(Nn(i),i.phase!=="preparation")throw new Error("\u53EA\u6709\u6230\u524D\u6E96\u5099\u968E\u6BB5\u53EF\u4EE5\u4EA4\u6613\u3002");if(!Number.isSafeInteger(r)||r!==i.revision)throw new Error("\u4EA4\u6613\u9032\u5EA6\u5DF2\u6539\u8B8A\uFF0C\u8ACB\u78BA\u8A8D\u6700\u65B0\u7269\u54C1\u5F8C\u91CD\u65B0\u64CD\u4F5C\u3002");if(Ps(e),Ps(t),e===t)throw new Error("\u4EA4\u6613\u8ACB\u9078\u64C7\u53E6\u4E00\u540D\u89D2\u8272\u3002");let o=i.characters.find(h=>h.id===e),a=i.characters.find(h=>h.id===t);if(o.hp===0||a.hp===0)throw new Error("\u53EA\u6709\u5B58\u6D3B\u89D2\u8272\u53EF\u4EE5\u4EA4\u6613\u3002");let c=Bd(n),l=Bd(s);if(!c.power&&!c.magic&&!c.weapons.length&&!l.power&&!l.magic&&!l.weapons.length)throw new Error("\u8ACB\u81F3\u5C11\u9078\u64C7\u4E00\u9805\u8981\u4EA4\u63DB\u6216\u8D08\u9001\u7684\u7269\u54C1\u3002");if(i.round===1&&(c.power||c.magic||l.power||l.magic))throw new Error("\u7B2C\u4E00\u8F2A\u6E96\u5099\u53EA\u80FD\u4EA4\u6613\u6B66\u5668\uFF0C\u7B2C\u4E8C\u8F2A\u8D77\u624D\u53EF\u4EA4\u6613\u653B\u64CA\u724C\u3002");for(let[h,u]of[[o,c],[a,l]])if(h.cards.power<u.power||h.cards.magic<u.magic||u.weapons.some(d=>!h.weapons.includes(d)))throw new Error("\u4EA4\u6613\u6240\u9700\u7684\u724C\u6216\u6B66\u5668\u5DF2\u4E0D\u5728\u6301\u6709\u8005\u8EAB\u4E0A\uFF0C\u8ACB\u91CD\u65B0\u78BA\u8A8D\u3002");return{fromId:e,toId:t,give:c,receive:l}}function Km(i,e={}){let t=$m(i,e);if(i.log.filter(l=>l.type==="trade").length>=Aa)throw new RangeError(`\u6BCF\u5C40\u539F\u578B\u6700\u591A\u5B8C\u6210 ${Aa} \u6B21\u4EA4\u6613\u3002`);let{fromId:n,toId:s,give:r,receive:o}=t,a=(l,h,u)=>{let d=new Set([...l.weapons.filter(f=>!h.weapons.includes(f)),...u.weapons]);return{...l,cards:{power:l.cards.power-h.power+u.power,magic:l.cards.magic-h.magic+u.magic},weapons:ar.filter(f=>d.has(f))}},c=i.characters.map(l=>l.id===n?a(l,r,o):l.id===s?a(l,o,r):l);return Ca(c),us(i,{type:"trade",...t},{characters:c})}function ih(i,e,t,n=!0){if(Nn(i),i.phase!=="battle")throw new Error("\u76EE\u524D\u4E0D\u662F\u6230\u9B25\u968E\u6BB5\u3002");if((n||t!==void 0)&&(!Number.isSafeInteger(t)||t!==i.revision))throw new Error("\u884C\u52D5\u9032\u5EA6\u5DF2\u6539\u8B8A\uFF0C\u8ACB\u78BA\u8A8D\u76EE\u524D\u884C\u52D5\u8005\u5F8C\u91CD\u65B0\u9078\u64C7\u3002");if(Ps(e),hs(i)[0]!==e)throw new Error("\u53EA\u80FD\u7531\u76EE\u524D\u8F2A\u5230\u7684\u89D2\u8272\u884C\u52D5\u3002")}function Wd(i,e){let t={...i,actedIds:[...i.actedIds,e],roundActionOrder:[...i.roundActionOrder,e]};return{...t,phase:hs(t).length?"battle":"round-end"}}function sh(i,e,t){if(t!=="flame")return i.seatOrder.filter(o=>o!==e).map(o=>[o]);let n=i.seatOrder,s=n.indexOf(e);return[[...[(s+n.length-1)%n.length,(s+1)%n.length]].sort((o,a)=>o-a).map(o=>n[o])]}function rh(i,e,t){return t.weapon&&!e.weapons.includes(t.weapon)?`\u672A\u6301\u6709${t.name}`:e.cards.power<t.cost.power||e.cards.magic<t.cost.magic?"\u653B\u64CA\u724C\u4E0D\u8DB3":sh(i,e.id,t.id).length?"":"\u76EE\u524D\u5EA7\u4F4D\u6C92\u6709\u7B26\u5408\u898F\u5247\u7684\u5169\u540D\u76EE\u6A19"}function Xd(i){if(Nn(i),i.phase!=="battle")return[];let e=i.characters.find(({id:t})=>t===hs(i)[0]);return Object.values(so).filter(t=>!t.weapon||e.weapons.includes(t.weapon)).map(t=>{let n=rh(i,e,t);return{id:t.id,name:t.name,damage:t.damage,targetCount:t.targetCount,cost:{...t.cost},available:!n,reason:n}})}function ro(i,e){if(Nn(i),i.phase!=="battle"||!Object.hasOwn(so,e))return[];let t=i.characters.find(({id:n})=>n===hs(i)[0]);return rh(i,t,so[e])?[]:sh(i,t.id,e)}function oh(i,{actorId:e,actionId:t="power",targetIds:n,targetId:s,expectedRevision:r}={}){if(ih(i,e,r,!1),!Object.hasOwn(so,t))throw new RangeError("\u627E\u4E0D\u5230\u9019\u7A2E\u653B\u64CA\u3002");let o=so[t],a=i.characters.find(({id:f})=>f===e),c=rh(i,a,o);if(c)throw new Error(c);let l=n??(s===void 0?void 0:[s]);if(Fi(l),l.length!==o.targetCount)throw new Error(`\u8ACB\u9078\u64C7 ${o.targetCount} \u540D\u4E0D\u540C\u7684\u653B\u64CA\u76EE\u6A19\u3002`);if(l.includes(e))throw new Error("\u653B\u64CA\u8ACB\u9078\u64C7\u5176\u4ED6\u89D2\u8272\u3002");let h=i.seatOrder.filter(f=>l.includes(f));if(!sh(i,e,t).some(f=>ls(f,h)))throw new Error("\u76EE\u6A19\u4E0D\u7B26\u5408\u76EE\u524D\u56FA\u5B9A\u5EA7\u4F4D\u7684\u76F8\u9130\u898F\u5247\u3002");let u=h.map(f=>{let p=i.characters.find(m=>m.id===f).hp,y=Math.max(0,p-o.damage);return{targetId:f,hpBefore:p,hpAfter:y,damage:p-y,killed:p>0&&y===0}}),d=u.filter(({killed:f})=>f).map(({targetId:f})=>{let p=i.characters.find(({id:y})=>y===f);return{victimId:f,power:p.cards.power,magic:p.cards.magic,weapons:[...p.weapons]}});return{actorId:e,actionId:t,targetIds:h,cost:{...o.cost},results:u,loot:d}}function ah(i,e={}){ih(i,e.actorId,e.expectedRevision);let t=oh(i,e),{actorId:n,results:s,cost:r,loot:o}=t,a=new Map(s.map(y=>[y.targetId,y])),c=new Set(o.map(({victimId:y})=>y)),l=i.characters.find(({id:y})=>y===n),h={power:l.cards.power-r.power,magic:l.cards.magic-r.magic};o.forEach(y=>{h.power+=y.power,h.magic+=y.magic});let u=new Set([...l.weapons,...o.flatMap(({weapons:y})=>y)]),d=i.characters.map(y=>{if(y.id===n)return{...y,cards:h,weapons:ar.filter(g=>u.has(g))};let m=a.get(y.id);return m?{...y,hp:m.hpAfter,...c.has(y.id)?{cards:{power:0,magic:0},weapons:[]}:{}}:y});Ca(d);let f=i.log.length+1,p=[...i.kills,...o.map(({victimId:y})=>({round:i.round,killerId:n,victimId:y,eventId:f}))];return Wd(us(i,{type:"attack",...t},{characters:d,kills:p}),n)}function lh(i,{actorId:e,expectedRevision:t}={}){return ih(i,e,t),Wd(us(i,{type:"pass",actorId:e}),e)}function ch(i){if(Nn(i),i.phase!=="round-end")throw new Error("\u672C\u8F2A\u884C\u52D5\u5168\u90E8\u7D50\u675F\u5F8C\u624D\u80FD\u63DB\u5EA7\u3002");let e=or(i.characters,i.tieOrder);return i.round===3?us(i,{type:"finish"},{phase:"finished",seatOrder:e}):us(i,{type:"advance",nextRound:i.round+1},{phase:"preparation",round:i.round+1,seatOrder:e,tieOrder:[...new Set([...i.roundActionOrder,...i.tieOrder])],previousRoundActionOrder:[...i.roundActionOrder],roundActionOrder:[],actedIds:[]})}function kd(i){return{schemaVersion:i.schemaVersion,rules:i.rules,participants:ni.map(e=>{let t=i.characters.find(n=>n.id===e);return{id:e,hp:t.hp,cards:t.cards,weapons:t.weapons}}),seatOrder:i.seatOrder,tieOrder:i.tieOrder,round:i.round,phase:i.phase,actedIds:i.actedIds,roundActionOrder:i.roundActionOrder,previousRoundActionOrder:i.previousRoundActionOrder,log:i.log,kills:i.kills,revision:i.revision}}function Zm(i){if(!i||i.type!=="loadout"||!Number.isSafeInteger(i.revision)||i.revision<1||!Array.isArray(i.initialLoadout)||i.initialLoadout.length!==ni.length)throw new TypeError("\u521D\u59CB\u9053\u5177\u5FEB\u7167\u7121\u6548\u3002");Kc(i.rules),Fi(i.initialLoadout.map(({id:n})=>n),{full:!0});let e=new Map(i.initialLoadout.map(n=>[n.id,n])),t=cr(i.rules);return t.characters=t.characters.map(n=>{let s=e.get(n.id);return cs(s.power,lr),cs(s.magic,lr),Ra(s.weapons),{...n,cards:{power:s.power,magic:s.magic},weapons:[...s.weapons]}}),t.revision=i.revision-1,Jc(t)}function hh(i){try{let e=typeof i=="string"?JSON.parse(i):i;Nn(e);let t;if(e.phase==="loadout")t=cr(e.rules),t.characters=t.characters.map(n=>{let s=e.characters.find(({id:r})=>r===n.id);return{...n,cards:{...s.cards},weapons:[...s.weapons]}}),t.revision=e.revision;else{if(t=Zm(e.log[0]),!ls(e.log[0],t.log[0]))throw new TypeError("\u521D\u59CB\u9053\u5177\u4E8B\u4EF6\u4E0D\u4E00\u81F4\u3002");if(e.phase==="setup"){if(e.revision<t.revision)throw new TypeError("\u521D\u59CB\u8A2D\u5B9A\u7248\u672C\u7121\u6548\u3002");t.characters=t.characters.map(n=>({...n,hp:e.characters.find(({id:s})=>s===n.id).hp})),t.revision=e.revision}else{let n=e.log[1];if(!n||n.type!=="setup"||!Number.isSafeInteger(n.revision)||n.revision<=t.revision||!Array.isArray(n.initialHp)||n.initialHp.length!==ni.length)throw new TypeError("\u521D\u59CB\u8840\u91CF\u5FEB\u7167\u7121\u6548\u3002");Fi(n.initialHp.map(({id:r})=>r),{full:!0}),n.initialHp.forEach(({hp:r})=>$c(r));let s=new Map(n.initialHp.map(({id:r,hp:o})=>[r,o]));if(t=th({...t,characters:t.characters.map(r=>({...r,hp:s.get(r.id)})),revision:n.revision-1}),!ls(n,t.log[1]))throw new TypeError("\u521D\u59CB\u8840\u91CF\u4E8B\u4EF6\u4E0D\u4E00\u81F4\u3002");for(let r of e.log.slice(2)){if(!r||typeof r!="object")throw new TypeError("\u4E8B\u4EF6\u7121\u6548\u3002");if(r.type==="battle-start")t=nh(t);else if(r.type==="attack")t=ah(t,{actorId:r.actorId,actionId:r.actionId,targetIds:r.targetIds,expectedRevision:t.revision});else if(r.type==="pass")t=lh(t,{actorId:r.actorId,expectedRevision:t.revision});else if(r.type==="trade")t=Km(t,{fromId:r.fromId,toId:r.toId,give:r.give,receive:r.receive,expectedRevision:t.revision});else if(r.type==="advance"||r.type==="finish")t=ch(t);else throw new TypeError("\u4E8B\u4EF6\u985E\u578B\u7121\u6548\u3002");if(!ls(r,t.log.at(-1)))throw new TypeError("\u4E8B\u4EF6\u7D50\u7B97\u4E0D\u4E00\u81F4\u3002")}}}if(!ls(kd(e),kd(t)))throw new TypeError("\u5132\u5B58\u9032\u5EA6\u8207\u884C\u52D5\u7D00\u9304\u4E0D\u4E00\u81F4\u3002");return{...t,selectedId:e.selectedId}}catch{return cr()}}var ws={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hf=0,eu=1,Gf=2;var $s=1,Vf=2,Gr=3,Ai=0,gn=1,Qn=2,Ks=0,Vr=1,tu=2,nu=3,iu=4,Wf=5;var Zs=100,Xf=101,qf=102,Yf=103,$f=104,Kf=200,Zf=201,Jf=202,jf=203,su=204,ru=205,Qf=206,ep=207,tp=208,np=209,ip=210,sp=211,rp=212,op=213,ap=214,rl=0,ol=1,al=2,wr=3,ll=4,cl=5,hl=6,ul=7,Dl=0,lp=1,cp=2,Ri=0,ou=1,au=2,lu=3,ia=4,cu=5,hu=6,uu=7,Bh="attached",hp="detached",du=300,Js=301,Wr=302,Ul=303,Ol=304,Jn=1e3,Kn=1001,Tr=1002,Zt=1003,Fl=1004;var js=1005;var Vt=1006,Xr=1007;var Sn=1008;var Fn=1009,fu=1010,pu=1011,qr=1012,Bl=1013,hi=1014,qn=1015,ui=1016,kl=1017,zl=1018,Qs=1020,mu=35902,gu=35899,_u=1021,xu=1022,Mn=1023,Xi=1026,ns=1027,Hl=1028,Gl=1029,Ts=1030,Vl=1031;var Wl=1033,sa=33776,ra=33777,oa=33778,aa=33779,Xl=35840,ql=35841,Yl=35842,$l=35843,Kl=36196,Zl=37492,Jl=37496,jl=37488,Ql=37489,la=37490,ec=37491,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,mc=36492,gc=36494,_c=36495,xc=36283,yc=36284,ca=36285,vc=36286;var Bs=2300,ks=2301,il=2302,kh=2303,zh=2400,Hh=2401,Gh=2402,up=2500;var yu=0,ha=1,Yr=2,dp=3200;var ua=0,fp=1,di="",Lt="srgb",mn="srgb-linear",So="linear",Rt="srgb";var sl=7680;var pp=519,mp=512,gp=513,_p=514,vu=515,xp=516,yp=517,Su=518,Mu=519,bu=35044;var Eu="300 es",Zn=2e3,Ar=2001;function Jm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vp(){let i=Rr("canvas");return i.style.display="block",i}var qd={},Cr=null;function Mo(...i){let e="THREE."+i.shift();Cr?Cr("log",e,...i):console.log(e,...i)}function Sp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=Sp(i);let e="THREE."+i.shift();if(Cr)Cr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=Sp(i);let e="THREE."+i.shift();if(Cr)Cr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fs(...i){let e=i.join(" ");e in qd||(qd[e]=!0,Ye(...i))}function Mp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var bp={[rl]:rl,[al]:hl,[ll]:ll,[wr]:cl,[ol]:ol,[hl]:al,[ul]:ul,[cl]:wr},ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=1234567,_o=Math.PI/180,zs=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function wu(i,e){return(i%e+e)%e}function Qm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function eg(i,e,t){return i!==e?(t-i)/(e-i):0}function xo(i,e,t){return(1-t)*i+t*e}function tg(i,e,t,n){return xo(i,e,1-Math.exp(-t*n))}function ng(i,e=1){return e-Math.abs(wu(i,e*2)-e)}function ig(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function og(i,e){return i+Math.random()*(e-i)}function ag(i){return i*(.5-Math.random())}function lg(i){i!==void 0&&(Yd=i);let e=Yd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cg(i){return i*_o}function hg(i){return i*zs}function ug(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function dg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*p,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*p,a*l);break;case"ZYZ":i.set(c*p,c*f,a*h,a*l);break;default:Ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Au(i,e){if(e.constructor===Float32Array)return i;let t=Sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ru(i,e){if(e.constructor===Float32Array)return i;let t=Sc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var pi={DEG2RAD:_o,RAD2DEG:zs,generateUUID:fi,clamp:ut,euclideanModulo:wu,mapLinear:Qm,inverseLerp:eg,lerp:xo,damp:tg,pingpong:ng,smoothstep:ig,smootherstep:sg,randInt:rg,randFloat:og,randFloatSpread:ag,seededRandom:lg,degToRad:cg,radToDeg:hg,isPowerOfTwo:ug,ceilPowerOfTwo:dg,floorPowerOfTwo:Tu,setQuaternionFromProperEuler:fg,normalize:Ru,denormalize:Au},ae=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],y=r[o+3];if(u!==y||c!==d||l!==f||h!==p){let m=c*d+l*f+h*p+u*y;m<0&&(d=-d,f=-f,p=-p,y=-y,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);g=Math.sin(g*v)/S,a=Math.sin(a*v)/S,c=c*g+d*a,l=l*g+f*a,h=h*g+p*a,u=u*g+y*a}else{c=c*g+d*a,l=l*g+f*a,h=h*g+p*a,u=u*g+y*a;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-a*f,e[t+2]=l*p+h*f+a*d-c*u,e[t+3]=h*p-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uh=new L,$d=new en,it=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],y=s[0],m=s[3],g=s[6],v=s[1],S=s[4],x=s[7],T=s[2],E=s[5],_=s[8];return r[0]=o*y+a*v+c*T,r[3]=o*m+a*S+c*E,r[6]=o*g+a*x+c*_,r[1]=l*y+h*v+u*T,r[4]=l*m+h*S+u*E,r[7]=l*g+h*x+u*_,r[2]=d*y+f*v+p*T,r[5]=d*m+f*S+p*E,r[8]=d*g+f*x+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dh.makeScale(e,t)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dh.makeRotation(-e)),this}translate(e,t){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dh=new it,Kd=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zd=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pg(){let i={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Rt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?So:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mn]:{primaries:e,whitePoint:n,transfer:So,toXYZ:Kd,fromXYZ:Zd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:Kd,fromXYZ:Zd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}var ht=pg();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hr,dl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Rr("canvas")),hr.width=e.width,hr.height=e.height;let s=hr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mg=0,Ir=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fh(s[o].image)):r.push(fh(s[o]))}else r=fh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function fh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var gg=0,ph=new L,un=class i extends ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=Vt,o=Sn,a=Mn,c=Fn,l=i.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=fi(),this.name="",this.source=new Ir(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=du;un.DEFAULT_ANISOTROPY=1;var Pt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],y=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,x=(f+1)/2,T=(g+1)/2,E=(h+d)/4,_=(u+y)/4,M=(p+m)/4;return S>x&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=_/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=M/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=M/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-y)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fl=class extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new un({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ir(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends fl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bo=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var pl=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var tt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,p,y,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=l*h,y=l*u;t[0]=d+y*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,y=a*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,p=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*c,f=o*l,p=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_g,e,xg)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ds.crossVectors(n,zn),ds.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ds.crossVectors(n,zn)),ds.normalize(),Ia.crossVectors(zn,ds),s[0]=ds.x,s[4]=Ia.x,s[8]=zn.x,s[1]=ds.y,s[5]=Ia.y,s[9]=zn.y,s[2]=ds.z,s[6]=Ia.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],y=n[6],m=n[10],g=n[14],v=n[3],S=n[7],x=n[11],T=n[15],E=s[0],_=s[4],M=s[8],P=s[12],I=s[1],D=s[5],F=s[9],G=s[13],C=s[2],U=s[6],q=s[10],H=s[14],le=s[3],R=s[7],O=s[11],W=s[15];return r[0]=o*E+a*I+c*C+l*le,r[4]=o*_+a*D+c*U+l*R,r[8]=o*M+a*F+c*q+l*O,r[12]=o*P+a*G+c*H+l*W,r[1]=h*E+u*I+d*C+f*le,r[5]=h*_+u*D+d*U+f*R,r[9]=h*M+u*F+d*q+f*O,r[13]=h*P+u*G+d*H+f*W,r[2]=p*E+y*I+m*C+g*le,r[6]=p*_+y*D+m*U+g*R,r[10]=p*M+y*F+m*q+g*O,r[14]=p*P+y*G+m*H+g*W,r[3]=v*E+S*I+x*C+T*le,r[7]=v*_+S*D+x*U+T*R,r[11]=v*M+S*F+x*q+T*O,r[15]=v*P+S*G+x*H+T*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],y=e[7],m=e[11],g=e[15],v=c*f-l*d,S=a*f-l*u,x=a*d-c*u,T=o*f-l*h,E=o*d-c*h,_=o*u-a*h;return t*(y*v-m*S+g*x)-n*(p*v-m*T+g*E)+s*(p*S-y*T+g*_)-r*(p*x-y*E+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],y=e[13],m=e[14],g=e[15],v=t*a-n*o,S=t*c-s*o,x=t*l-r*o,T=n*c-s*a,E=n*l-r*a,_=s*l-r*c,M=h*y-u*p,P=h*m-d*p,I=h*g-f*p,D=u*m-d*y,F=u*g-f*y,G=d*g-f*m,C=v*G-S*F+x*D+T*I-E*P+_*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=(a*G-c*F+l*D)*U,e[1]=(s*F-n*G-r*D)*U,e[2]=(y*_-m*E+g*T)*U,e[3]=(d*E-u*_-f*T)*U,e[4]=(c*I-o*G-l*P)*U,e[5]=(t*G-s*I+r*P)*U,e[6]=(m*x-p*_-g*S)*U,e[7]=(h*_-d*x+f*S)*U,e[8]=(o*F-a*I+l*M)*U,e[9]=(n*I-t*F-r*M)*U,e[10]=(p*E-y*x+g*v)*U,e[11]=(u*x-h*E-f*v)*U,e[12]=(a*P-o*D-c*M)*U,e[13]=(t*D-n*P+s*M)*U,e[14]=(y*S-p*T-m*v)*U,e[15]=(h*T-u*S+d*v)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,p=r*u,y=o*h,m=o*u,g=a*u,v=c*l,S=c*h,x=c*u,T=n.x,E=n.y,_=n.z;return s[0]=(1-(y+g))*T,s[1]=(f+x)*T,s[2]=(p-S)*T,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+g))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(p+S)*_,s[9]=(m-v)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ur.set(s[0],s[1],s[2]).length(),a=ur.set(s[4],s[5],s[6]).length(),c=ur.set(s[8],s[9],s[10]).length();r<0&&(o=-o),si.copy(this);let l=1/o,h=1/a,u=1/c;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,t.setFromRotationMatrix(si),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Zn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,y;if(c)p=r/(o-r),y=o*r/(o-r);else if(a===Zn)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ar)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Zn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,y;if(c)p=1/(o-r),y=o/(o-r);else if(a===Zn)p=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ar)p=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ur=new L,si=new tt,_g=new L(0,0,0),xg=new L(1,1,1),ds=new L,Ia=new L,zn=new L,Jd=new tt,jd=new en,Dn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yg=0,Qd=new L,dr=new en,Bi=new tt,Pa=new L,oo=new L,vg=new L,Sg=new en,ef=new L(1,0,0),tf=new L(0,1,0),nf=new L(0,0,1),sf={type:"added"},Mg={type:"removed"},fr={type:"childadded",child:null},mh={type:"childremoved",child:null},Bt=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Dn,n=new en,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new it}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(oo,Pa,this.up):Bi.lookAt(Pa,oo,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Bi),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sf),fr.child=e,this.dispatchEvent(fr),fr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mg),mh.child=e,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sf),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,Sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new L(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},bg={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),g=this._getHandJoint(l,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},La={h:0,s:0,l:0};function gh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var $e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=wu(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gh(o,r,e+1/3),this.g=gh(o,r,e),this.b=gh(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Ep[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return ht.workingToColorSpace(vn.copy(this),e),Math.round(ut(vn.r*255,0,255))*65536+Math.round(ut(vn.g*255,0,255))*256+Math.round(ut(vn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(vn.copy(this),t);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Lt){ht.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,s=vn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(La);let n=xo(fs.h,La.h,t),s=xo(fs.s,La.s,t),r=xo(fs.l,La.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new $e;$e.NAMES=Ep;var Eo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hs=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new L,ki=new L,_h=new L,zi=new L,pr=new L,mr=new L,rf=new L,xh=new L,yh=new L,vh=new L,Sh=new Pt,Mh=new Pt,bh=new Pt,xs=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ri.subVectors(s,t),ki.subVectors(n,t),_h.subVectors(e,t);let o=ri.dot(ri),a=ri.dot(ki),c=ri.dot(_h),l=ki.dot(ki),h=ki.dot(_h),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zi.x),c.addScaledVector(o,zi.y),c.addScaledVector(a,zi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Sh.setScalar(0),Mh.setScalar(0),bh.setScalar(0),Sh.fromBufferAttribute(e,t),Mh.fromBufferAttribute(e,n),bh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Sh,r.x),o.addScaledVector(Mh,r.y),o.addScaledVector(bh,r.z),o}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),ki.subVectors(e,t),ri.cross(ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ri.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;pr.subVectors(s,n),mr.subVectors(r,n),xh.subVectors(e,n);let c=pr.dot(xh),l=mr.dot(xh);if(c<=0&&l<=0)return t.copy(n);yh.subVectors(e,s);let h=pr.dot(yh),u=mr.dot(yh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(pr,o);vh.subVectors(e,r);let f=pr.dot(vh),p=mr.dot(vh);if(p>=0&&f<=p)return t.copy(r);let y=f*l-c*p;if(y<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(mr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return rf.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(rf,a);let g=1/(m+y+d);return o=y*g,a=d*g,t.copy(n).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},An=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Da.subVectors(this.max,ao),gr.subVectors(e.a,ao),_r.subVectors(e.b,ao),xr.subVectors(e.c,ao),ps.subVectors(_r,gr),ms.subVectors(xr,_r),Ls.subVectors(gr,xr);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Ls.z,Ls.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Ls.z,0,-Ls.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Ls.y,Ls.x,0];return!Eh(t,gr,_r,xr,Da)||(t=[1,0,0,0,1,0,0,0,1],!Eh(t,gr,_r,xr,Da))?!1:(Ua.crossVectors(ps,ms),t=[Ua.x,Ua.y,Ua.z],Eh(t,gr,_r,xr,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new L,new L,new L,new L,new L,new L,new L,new L],oi=new L,Na=new An,gr=new L,_r=new L,xr=new L,ps=new L,ms=new L,Ls=new L,ao=new L,Da=new L,Ua=new L,Ns=new L;function Eh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ns.fromArray(i,r);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),c=e.dot(Ns),l=t.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var jt=new L,Oa=new ae,Eg=0,Ft=class extends ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bu,this.updateRanges=[],this.gpuType=qn,this.version=0,this._normalizationScale=e!==void 0?Sc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Au(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ru(e,this.array)}};var wo=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var To=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var bt=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},wg=new An,lo=new L,wh=new L,Un=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(lo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(wh)),this.expandByPoint(lo.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tg=0,$n=new tt,Th=new Bt,yr=new L,Hn=new An,co=new An,hn=new L,Ut=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?To:wo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];co.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Hn.min,co.min),Hn.expandByPoint(hn),hn.addVectors(Hn.max,co.max),Hn.expandByPoint(hn)):(Hn.expandByPoint(co.min),Hn.expandByPoint(co.max))}Hn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)hn.fromBufferAttribute(a,l),c&&(yr.fromBufferAttribute(e,l),hn.add(yr)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new L,c[P]=new L;let h=new L,u=new L,d=new L,f=new ae,p=new ae,y=new ae,m=new L,g=new L;function v(P,I,D){l[P]=l[I]=l[D]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,D),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,I),y.fromBufferAttribute(r,D),u.sub(h),d.sub(h),p.sub(f),y.sub(f);let F=1/(p.x*y.y-y.x*p.y);isFinite(F)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(F),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(F),a[P].add(m),a[I].add(m),a[D].add(m),c[P].add(g),c[I].add(g),c[D].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,I=S.length;P<I;++P){let D=S[P],F=D.start,G=D.count;for(let C=F,U=F+G;C<U;C+=3)v(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let x=new L,T=new L,E=new L,_=new L;function M(P){E.fromBufferAttribute(s,P),_.copy(E);let I=a[P];x.copy(I),x.sub(E.multiplyScalar(E.dot(I))).normalize(),T.crossVectors(_,I);let F=T.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,F)}for(let P=0,I=n.count;P<I;++P)l[P]&&M(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new Ft(d,h,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ys=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bu,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=of(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=of(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function of(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=fi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Tn=new L,vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Sc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Au(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ru(e,this.data.array)}},Ah=new L,Ag=new L,Rg=new it,Gn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ah.subVectors(n,t).cross(Ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ah),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rg.getNormalMatrix(e),s=this.coplanarPoint(Ah).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cg=0,Rn=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Vr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=ru,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gi=new L,Rh=new L,Fa=new L,Ba=new L,Mi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rh.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),Ba.copy(this.origin).sub(Rh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Fa),a=Ba.dot(this.direction),c=-Ba.dot(Fa),l=Ba.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let y=1/h;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Rh).addScaledVector(Fa,d),f}intersectSphere(e,t){if(e.radius<0)return null;Gi.subVectors(e.center,this.origin);let n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,y=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,S=n.z-o.z,x=Math.abs(c),T=Math.abs(l),E=Math.abs(h),_,M,P,I,D,F,G,C,U,q,H,le;if(x>=T&&x>=E?(P=c,F=u,U=p,le=g,c>=0?(_=l,M=h,I=d,D=f,G=y,C=m,q=v,H=S):(_=h,M=l,I=f,D=d,G=m,C=y,q=S,H=v)):T>=E?(P=l,F=d,U=y,le=v,l>=0?(_=h,M=c,I=f,D=u,G=m,C=p,q=S,H=g):(_=c,M=h,I=u,D=f,G=p,C=m,q=g,H=S)):(P=h,F=f,U=m,le=S,h>=0?(_=c,M=l,I=u,D=d,G=p,C=y,q=g,H=v):(_=l,M=c,I=d,D=u,G=y,C=p,q=v,H=g)),P===0)return null;let R=_/P,O=M/P,W=1/P,se=I-R*F,oe=D-O*F,z=G-R*U,re=C-O*U,ce=q-R*le,De=H-O*le,fe=ce*re-De*z,Le=se*De-oe*ce,ot=z*oe-re*se;if(s){if(fe<0||Le<0||ot<0)return null}else if((fe<0||Le<0||ot<0)&&(fe>0||Le>0||ot>0))return null;let Ue=fe+Le+ot;if(Ue===0)return null;let Ze=W*(fe*F+Le*U+ot*le);return(Ue>0?Ze<0:Ze>0)?null:this.at(Ze/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},af=new tt,Ds=new Mi,ka=new Un,lf=new L,za=new L,Ha=new L,Ga=new L,Ch=new L,Va=new L,cf=new L,Wa=new L,Ct=class extends Bt{constructor(e=new Ut,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Va.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ch.fromBufferAttribute(u,e),o?Va.addScaledVector(Ch,h):Va.addScaledVector(Ch.sub(t),h))}t.add(Va)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(ka.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(ka,lf)===null||Ds.origin.distanceToSquared(lf)>(e.far-e.near)**2))&&(af.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(af),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,T=S;x<T;x+=3){let E=a.getX(x),_=a.getX(x+1),M=a.getX(x+2);s=Xa(this,g,e,n,l,h,u,E,_,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let v=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=Xa(this,o,e,n,l,h,u,v,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,y=d.length;p<y;p++){let m=d[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,T=S;x<T;x+=3){let E=x,_=x+1,M=x+2;s=Xa(this,g,e,n,l,h,u,E,_,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let v=m,S=m+1,x=m+2;s=Xa(this,o,e,n,l,h,u,v,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ig(i,e,t,n,s,r,o,a){let c;if(e.side===gn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ai,a),c===null)return null;Wa.copy(a),Wa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Wa);return l<t.near||l>t.far?null:{distance:l,point:Wa.clone(),object:i}}function Xa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,za),i.getVertexPosition(c,Ha),i.getVertexPosition(l,Ga);let h=Ig(i,e,t,n,za,Ha,Ga,cf);if(h){let u=new L;xs.getBarycoord(cf,za,Ha,Ga,u),s&&(h.uv=xs.getInterpolatedAttribute(s,a,c,l,u,new ae)),r&&(h.uv1=xs.getInterpolatedAttribute(r,a,c,l,u,new ae)),o&&(h.normal=xs.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};xs.getNormal(za,Ha,Ga,d.normal),h.face=d,h.barycoord=u}return h}var ho=new Pt,hf=new Pt,uf=new Pt,Pg=new Pt,df=new tt,qa=new L,Ih=new Un,ff=new tt,Ph=new Mi,Ao=class extends Ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bh,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qa),this.boundingBox.expandByPoint(qa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qa),this.boundingSphere.expandByPoint(qa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ih.copy(this.boundingSphere),Ih.applyMatrix4(s),e.ray.intersectsSphere(Ih)!==!1&&(ff.copy(s).invert(),Ph.copy(e.ray).applyMatrix4(ff),!(this.boundingBox!==null&&Ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;hf.fromBufferAttribute(s.attributes.skinIndex,e),uf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ho.copy(t),t.set(0,0,0,0)):(ho.set(t.x,t.y,t.z,1),t.set(0,0,0)),ho.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=uf.getComponent(r);if(o!==0){let a=hf.getComponent(r);df.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pg.copy(ho).applyMatrix4(df),o)}}return t.isVector4&&(t.w=ho.w),t.applyMatrix4(this.bindMatrixInverse)}},Nr=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},bi=class extends un{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Zt,h=Zt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pf=new tt,Lg=new tt,Ro=class i{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Lg;pf.multiplyMatrices(a,t[r]),pf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new bi(t,e,e,Mn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ye("Skeleton: No bone found with UUID:",r),o=new Nr),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},qi=class extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vr=new tt,mf=new tt,Ya=[],gf=new An,Ng=new tt,uo=new Ct,fo=new Un,Gs=class extends Ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ng)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),gf.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(gf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),fo.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(uo.geometry=this.geometry,uo.material=this.material,uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),e.ray.intersectsSphere(fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vr),mf.multiplyMatrices(n,vr),uo.matrixWorld=mf,uo.raycast(e,Ya);for(let o=0,a=Ya.length;o<a;o++){let c=Ya[o];c.instanceId=r,c.object=this,t.push(c)}Ya.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bi(new Float32Array(s*this.count),s,this.count,Hl,qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Us=new Un,Dg=new ae(.5,.5),$a=new L,Ss=class{constructor(e=new Gn,t=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],y=r[9],m=r[10],g=r[11],v=r[12],S=r[13],x=r[14],T=r[15];if(s[0].setComponents(l-o,f-h,g-p,T-v).normalize(),s[1].setComponents(l+o,f+h,g+p,T+v).normalize(),s[2].setComponents(l+a,f+u,g+y,T+S).normalize(),s[3].setComponents(l-a,f-u,g-y,T-S).normalize(),n)s[4].setComponents(c,d,m,x).normalize(),s[5].setComponents(l-c,f-d,g-m,T-x).normalize();else if(s[4].setComponents(l-c,f-d,g-m,T-x).normalize(),t===Zn)s[5].setComponents(l+c,f+d,g+m,T+x).normalize();else if(t===Ar)s[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);let t=Dg.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_f=new tt,ml=class i{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];_f.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ss),n[s].setFromProjectionMatrix(_f,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ss),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ms=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gl=new L,_l=new L,xf=new tt,po=new Mi,Ka=new Un,Lh=new L,yf=new L,Yi=class extends Bt{constructor(e=new Ut,t=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)gl.fromBufferAttribute(t,s-1),_l.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=gl.distanceTo(_l);e.setAttribute("lineDistance",new bt(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;xf.copy(s).invert(),po.copy(e.ray).applyMatrix4(xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let y=f,m=p-1;y<m;y+=l){let g=h.getX(y),v=h.getX(y+1),S=Za(this,e,po,c,g,v,y);S&&t.push(S)}if(this.isLineLoop){let y=h.getX(p-1),m=h.getX(f),g=Za(this,e,po,c,y,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let y=f,m=p-1;y<m;y+=l){let g=Za(this,e,po,c,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){let y=Za(this,e,po,c,p-1,f,p-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Za(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(gl.fromBufferAttribute(a,s),_l.fromBufferAttribute(a,r),t.distanceSqToSegment(gl,_l,Lh,yf)>n)return;Lh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Lh);if(!(l<e.near||l>e.far))return{distance:l,point:yf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var vf=new L,Sf=new L,Co=class extends Yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vf.fromBufferAttribute(t,s),Sf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vf.distanceTo(Sf);e.setAttribute("lineDistance",new bt(n,1))}else Ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Io=class extends Yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Dr=class extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mf=new tt,Vh=new Mi,Ja=new Un,ja=new L,Po=class extends Bt{constructor(e=new Ut,t=new Dr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,e.ray.intersectsSphere(Ja)===!1)return;Mf.copy(s).invert(),Vh.copy(e.ray).applyMatrix4(Mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,y=f;p<y;p++){let m=l.getX(p);ja.fromBufferAttribute(u,m),bf(ja,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,y=f;p<y;p++)ja.fromBufferAttribute(u,p),bf(ja,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bf(i,e,t,n,s,r,o){let a=Vh.distanceSqToPoint(i);if(a<t){let c=new L;Vh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Lo=class extends un{constructor(e=[],t=Js,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var $i=class extends un{constructor(e,t,n=hi,s,r,o,a=Zt,c=Zt,l,h=Xi,u=1){if(h!==Xi&&h!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ir(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},No=class extends $i{constructor(e,t=hi,n=Js,s,r,o=Zt,a=Zt,c,l=Xi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Do=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zt=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(u,2));function p(y,m,g,v,S,x,T,E,_,M,P){let I=x/_,D=T/M,F=x/2,G=T/2,C=E/2,U=_+1,q=M+1,H=0,le=0,R=new L;for(let O=0;O<q;O++){let W=O*D-G;for(let se=0;se<U;se++){let oe=se*I-F;R[y]=oe*v,R[m]=W*S,R[g]=C,l.push(R.x,R.y,R.z),R[y]=0,R[m]=0,R[g]=E>0?1:-1,h.push(R.x,R.y,R.z),u.push(se/_),u.push(1-O/M),H+=1}}for(let O=0;O<M;O++)for(let W=0;W<_;W++){let se=d+W+U*O,oe=d+W+U*(O+1),z=d+(W+1)+U*(O+1),re=d+(W+1)+U*O;c.push(se,oe,re),c.push(oe,z,re),le+=6}a.addGroup(f,le,P),f+=le,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var tn=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,y=[],m=n/2,g=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function v(){let x=new L,T=new L,E=0,_=(t-e)/n;for(let M=0;M<=r;M++){let P=[],I=M/r,D=I*(t-e)+e;for(let F=0;F<=s;F++){let G=F/s,C=G*c+a,U=Math.sin(C),q=Math.cos(C);T.x=D*U,T.y=-I*n+m,T.z=D*q,u.push(T.x,T.y,T.z),x.set(U,_,q).normalize(),d.push(x.x,x.y,x.z),f.push(G,1-I),P.push(p++)}y.push(P)}for(let M=0;M<s;M++)for(let P=0;P<r;P++){let I=y[P][M],D=y[P+1][M],F=y[P+1][M+1],G=y[P][M+1];(e>0||P!==0)&&(h.push(I,D,G),E+=3),(t>0||P!==r-1)&&(h.push(D,F,G),E+=3)}l.addGroup(g,E,0),g+=E}function S(x){let T=p,E=new ae,_=new L,M=0,P=x===!0?e:t,I=x===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*I,0),d.push(0,I,0),f.push(.5,.5),p++;let D=p;for(let F=0;F<=s;F++){let C=F/s*c+a,U=Math.cos(C),q=Math.sin(C);_.x=P*q,_.y=m*I,_.z=P*U,u.push(_.x,_.y,_.z),d.push(0,I,0),E.x=U*.5+.5,E.y=q*.5*I+.5,f.push(E.x,E.y),p++}for(let F=0;F<s;F++){let G=T+F,C=D+F;x===!0?h.push(C,C+1,G):h.push(C+1,C,G),M+=3}l.addGroup(g,M,x===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ki=class i extends tn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Uo=class i extends Ut{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let S=new L,x=new L,T=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],x),f(t[E+2],T),c(S,x,T,v)}function c(v,S,x,T){let E=T+1,_=[];for(let M=0;M<=E;M++){_[M]=[];let P=v.clone().lerp(x,M/E),I=S.clone().lerp(x,M/E),D=E-M;for(let F=0;F<=D;F++)F===0&&M===E?_[M][F]=P:_[M][F]=P.clone().lerp(I,F/D)}for(let M=0;M<E;M++)for(let P=0;P<2*(E-M)-1;P++){let I=Math.floor(P/2);P%2===0?(d(_[M][I+1]),d(_[M+1][I]),d(_[M][I])):(d(_[M][I+1]),d(_[M+1][I+1]),d(_[M+1][I]))}}function l(v){let S=new L;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(v),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){let v=new L;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let x=m(v)/2/Math.PI+.5,T=g(v)/Math.PI+.5;o.push(x,1-T)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){let S=o[v+0],x=o[v+2],T=o[v+4],E=Math.max(S,x,T),_=Math.min(S,x,T);E>.9&&_<.1&&(S<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,S){let x=v*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function p(){let v=new L,S=new L,x=new L,T=new L,E=new ae,_=new ae,M=new ae;for(let P=0,I=0;P<r.length;P+=9,I+=6){v.set(r[P+0],r[P+1],r[P+2]),S.set(r[P+3],r[P+4],r[P+5]),x.set(r[P+6],r[P+7],r[P+8]),E.set(o[I+0],o[I+1]),_.set(o[I+2],o[I+3]),M.set(o[I+4],o[I+5]),T.copy(v).add(S).add(x).divideScalar(3);let D=m(T);y(E,I+0,v,D),y(_,I+2,S,D),y(M,I+4,x,D)}}function y(v,S,x,T){T<0&&v.x===1&&(o[S]=v.x-1),x.x===0&&x.z===0&&(o[S]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Ur=class i extends Uo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ae:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new tt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Or=class extends Wn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xl=class extends Or{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Cu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Ef=new L,wf=new L,Nh=new Cu,Dh=new Cu,Uh=new Cu,Fr=class extends Wn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(wf.subVectors(s[0],s[1]).add(s[0]),l=wf);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ef.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ef),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),Nh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,y,m),Dh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,y,m),Uh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(Nh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Dh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Uh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Nh.calc(c),Dh.calc(c),Uh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Ug(i,e){let t=1-i;return t*t*e}function Og(i,e){return 2*(1-i)*i*e}function Fg(i,e){return i*i*e}function yo(i,e,t,n){return Ug(i,e)+Og(i,t)+Fg(i,n)}function Bg(i,e){let t=1-i;return t*t*t*e}function kg(i,e){let t=1-i;return 3*t*t*i*e}function zg(i,e){return 3*(1-i)*i*i*e}function Hg(i,e){return i*i*i*e}function vo(i,e,t,n,s){return Bg(i,e)+kg(i,t)+zg(i,n)+Hg(i,s)}var Oo=class extends Wn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vo(e,s.x,r.x,o.x,a.x),vo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yl=class extends Wn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vo(e,s.x,r.x,o.x,a.x),vo(e,s.y,r.y,o.y,a.y),vo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fo=class extends Wn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends Wn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends Wn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(yo(e,s.x,r.x,o.x),yo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends Wn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(yo(e,s.x,r.x,o.x),yo(e,s.y,r.y,o.y),yo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zo=class extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Tf(a,c.x,l.x,h.x,u.x),Tf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Sl=Object.freeze({__proto__:null,ArcCurve:xl,CatmullRomCurve3:Fr,CubicBezierCurve:Oo,CubicBezierCurve3:yl,EllipseCurve:Or,LineCurve:Fo,LineCurve3:vl,QuadraticBezierCurve:Bo,QuadraticBezierCurve3:ko,SplineCurve:zo}),Ml=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Sl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},bs=class extends Ml{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Fo(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Bo(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Oo(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new zo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Or(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},li=class extends bs{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new bs().fromJSON(s))}return this}};function Gg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=wp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Yg(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Ho(r,o,t,a,c,l,0),o}function wp(i,e,t,n,s){let r;if(s===s0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Af(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Af(o/n|0,i[o],i[o+1],r);return r&&Br(r,r.next)&&(Vo(r),r=r.next),r}function Vs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Br(t,t.next)||Gt(t.prev,t,t.next)===0)){if(Vo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ho(i,e,t,n,s,r,o){if(!i)return;!o&&r&&jg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Wg(i,n,s,r):Vg(i)){e.push(c.i,i.i,l.i),Vo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Xg(Vs(i),e),Ho(i,e,t,n,s,r,2)):o===2&&qg(i,e,t,n,s,r):Ho(Vs(i),e,t,n,s,r,1);break}}}function Vg(i){let e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&mo(s,a,r,c,o,l,p.x,p.y)&&Gt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Wg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Gt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),p=Math.min(h,u,d),y=Math.max(a,c,l),m=Math.max(h,u,d),g=Wh(f,p,e,t,n),v=Wh(y,m,e,t,n),S=i.prevZ,x=i.nextZ;for(;S&&S.z>=g&&x&&x.z<=v;){if(S.x>=f&&S.x<=y&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&mo(a,h,c,u,l,d,S.x,S.y)&&Gt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=y&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&mo(a,h,c,u,l,d,x.x,x.y)&&Gt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=y&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&mo(a,h,c,u,l,d,S.x,S.y)&&Gt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=y&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&mo(a,h,c,u,l,d,x.x,x.y)&&Gt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Xg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Br(n,s)&&Ap(n,t,t.next,s)&&Go(n,s)&&Go(s,n)&&(e.push(n.i,t.i,s.i),Vo(t),Vo(t.next),t=i=s),t=t.next}while(t!==i);return Vs(t)}function qg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&t0(o,a)){let c=Rp(o,a);o=Vs(o,o.next),c=Vs(c,c.next),Ho(o,e,t,n,s,r,0),Ho(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Yg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=wp(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(e0(l))}s.sort($g);for(let r=0;r<s.length;r++)t=Kg(s[r],t);return t}function $g(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Kg(i,e){let t=Zg(i,e);if(!t)return e;let n=Rp(t,i);return Vs(n,n.next),Vs(t,t.next)}function Zg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Br(i,t))return t;do{if(Br(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Tp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Go(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Jg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Jg(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function jg(i,e,t,n){let s=i;do s.z===0&&(s.z=Wh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qg(s)}function Qg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Wh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function e0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Tp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function mo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Tp(i,e,t,n,s,r,o,a)}function t0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!n0(i,e)&&(Go(i,e)&&Go(e,i)&&i0(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||Br(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Br(i,e){return i.x===e.x&&i.y===e.y}function Ap(i,e,t,n){let s=el(Gt(i,e,t)),r=el(Gt(i,e,n)),o=el(Gt(t,n,i)),a=el(Gt(t,n,e));return!!(s!==r&&o!==a||s===0&&Qa(i,t,e)||r===0&&Qa(i,n,e)||o===0&&Qa(t,i,n)||a===0&&Qa(t,e,n))}function Qa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function el(i){return i>0?1:i<0?-1:0}function n0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ap(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Go(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function i0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Rp(i,e){let t=Xh(i.i,i.x,i.y),n=Xh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Af(i,e,t,n){let s=Xh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function s0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var qh=class{static triangulate(e,t,n=2){return Gg(e,t,n)}},Os=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Rf(e),Cf(n,e);let o=e.length;t.forEach(Rf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Cf(n,t[c]);let a=qh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Rf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ei=class i extends Ut{constructor(e=new li([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:r0,S,x=!1,T,E,_,M;if(g){S=g.getSpacedPoints(h),x=!0,d=!1;let Q=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,Q),E=new L,_=new L,M=new L}d||(m=0,f=0,p=0,y=0);let P=a.extractPoints(l),I=P.shape,D=P.holes;if(!Os.isClockWise(I)){I=I.reverse();for(let Q=0,pe=D.length;Q<pe;Q++){let me=D[Q];Os.isClockWise(me)&&(D[Q]=me.reverse())}}function G(Q){let me=10000000000000001e-36,Ne=Q[0];for(let ve=1;ve<=Q.length;ve++){let nt=ve%Q.length,Ge=Q[nt],pt=Ge.x-Ne.x,mt=Ge.y-Ne.y,xt=pt*pt+mt*mt,k=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(Ne.x),Math.abs(Ne.y)),kt=me*k*k;if(xt<=kt){Q.splice(nt,1),ve--;continue}Ne=Ge}}G(I),D.forEach(G);let C=D.length,U=I;for(let Q=0;Q<C;Q++){let pe=D[Q];I=I.concat(pe)}function q(Q,pe,me){return pe||et("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(pe,me)}let H=I.length;function le(Q,pe,me){let Ne,ve,nt,Ge=Q.x-pe.x,pt=Q.y-pe.y,mt=me.x-Q.x,xt=me.y-Q.y,k=Ge*Ge+pt*pt,kt=Ge*xt-pt*mt;if(Math.abs(kt)>Number.EPSILON){let lt=Math.sqrt(k),At=Math.sqrt(mt*mt+xt*xt),Ee=pe.x-pt/lt,It=pe.y+Ge/lt,ze=me.x-xt/At,Qe=me.y+mt/At,A=((ze-Ee)*xt-(Qe-It)*mt)/(Ge*xt-pt*mt);Ne=Ee+Ge*A-Q.x,ve=It+pt*A-Q.y;let b=Ne*Ne+ve*ve;if(b<=2)return new ae(Ne,ve);nt=Math.sqrt(b/2)}else{let lt=!1;Ge>Number.EPSILON?mt>Number.EPSILON&&(lt=!0):Ge<-Number.EPSILON?mt<-Number.EPSILON&&(lt=!0):Math.sign(pt)===Math.sign(xt)&&(lt=!0),lt?(Ne=-pt,ve=Ge,nt=Math.sqrt(k)):(Ne=Ge,ve=pt,nt=Math.sqrt(k/2))}return new ae(Ne/nt,ve/nt)}let R=[];for(let Q=0,pe=U.length,me=pe-1,Ne=Q+1;Q<pe;Q++,me++,Ne++)me===pe&&(me=0),Ne===pe&&(Ne=0),R[Q]=le(U[Q],U[me],U[Ne]);let O=[],W,se=R.concat();for(let Q=0,pe=C;Q<pe;Q++){let me=D[Q];W=[];for(let Ne=0,ve=me.length,nt=ve-1,Ge=Ne+1;Ne<ve;Ne++,nt++,Ge++)nt===ve&&(nt=0),Ge===ve&&(Ge=0),W[Ne]=le(me[Ne],me[nt],me[Ge]);O.push(W),se=se.concat(W)}let oe;if(m===0)oe=Os.triangulateShape(U,D);else{let Q=[],pe=[];for(let me=0;me<m;me++){let Ne=me/m,ve=f*Math.cos(Ne*Math.PI/2),nt=p*Math.sin(Ne*Math.PI/2)+y;for(let Ge=0,pt=U.length;Ge<pt;Ge++){let mt=q(U[Ge],R[Ge],nt);Le(mt.x,mt.y,-ve),Ne===0&&Q.push(mt)}for(let Ge=0,pt=C;Ge<pt;Ge++){let mt=D[Ge];W=O[Ge];let xt=[];for(let k=0,kt=mt.length;k<kt;k++){let lt=q(mt[k],W[k],nt);Le(lt.x,lt.y,-ve),Ne===0&&xt.push(lt)}Ne===0&&pe.push(xt)}}oe=Os.triangulateShape(Q,pe)}let z=oe.length,re=p+y;for(let Q=0;Q<H;Q++){let pe=d?q(I[Q],se[Q],re):I[Q];x?(_.copy(T.normals[0]).multiplyScalar(pe.x),E.copy(T.binormals[0]).multiplyScalar(pe.y),M.copy(S[0]).add(_).add(E),Le(M.x,M.y,M.z)):Le(pe.x,pe.y,0)}for(let Q=1;Q<=h;Q++)for(let pe=0;pe<H;pe++){let me=d?q(I[pe],se[pe],re):I[pe];x?(_.copy(T.normals[Q]).multiplyScalar(me.x),E.copy(T.binormals[Q]).multiplyScalar(me.y),M.copy(S[Q]).add(_).add(E),Le(M.x,M.y,M.z)):Le(me.x,me.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){let pe=Q/m,me=f*Math.cos(pe*Math.PI/2),Ne=p*Math.sin(pe*Math.PI/2)+y;for(let ve=0,nt=U.length;ve<nt;ve++){let Ge=q(U[ve],R[ve],Ne);Le(Ge.x,Ge.y,u+me)}for(let ve=0,nt=D.length;ve<nt;ve++){let Ge=D[ve];W=O[ve];for(let pt=0,mt=Ge.length;pt<mt;pt++){let xt=q(Ge[pt],W[pt],Ne);x?Le(xt.x,xt.y+S[h-1].y,S[h-1].x+me):Le(xt.x,xt.y,u+me)}}}ce(),De();function ce(){let Q=s.length/3;if(d){let pe=0,me=H*pe;for(let Ne=0;Ne<z;Ne++){let ve=oe[Ne];ot(ve[2]+me,ve[1]+me,ve[0]+me)}pe=h+m*2,me=H*pe;for(let Ne=0;Ne<z;Ne++){let ve=oe[Ne];ot(ve[0]+me,ve[1]+me,ve[2]+me)}}else{for(let pe=0;pe<z;pe++){let me=oe[pe];ot(me[2],me[1],me[0])}for(let pe=0;pe<z;pe++){let me=oe[pe];ot(me[0]+H*h,me[1]+H*h,me[2]+H*h)}}n.addGroup(Q,s.length/3-Q,0)}function De(){let Q=s.length/3,pe=0;fe(U,pe),pe+=U.length;for(let me=0,Ne=D.length;me<Ne;me++){let ve=D[me];fe(ve,pe),pe+=ve.length}n.addGroup(Q,s.length/3-Q,1)}function fe(Q,pe){let me=Q.length;for(;--me>=0;){let Ne=me,ve=me-1;ve<0&&(ve=Q.length-1);for(let nt=0,Ge=h+m*2;nt<Ge;nt++){let pt=H*nt,mt=H*(nt+1),xt=pe+Ne+pt,k=pe+ve+pt,kt=pe+ve+mt,lt=pe+Ne+mt;Ue(xt,k,kt,lt)}}}function Le(Q,pe,me){c.push(Q),c.push(pe),c.push(me)}function ot(Q,pe,me){Ze(Q),Ze(pe),Ze(me);let Ne=s.length/3,ve=v.generateTopUV(n,s,Ne-3,Ne-2,Ne-1);je(ve[0]),je(ve[1]),je(ve[2])}function Ue(Q,pe,me,Ne){Ze(Q),Ze(pe),Ze(Ne),Ze(pe),Ze(me),Ze(Ne);let ve=s.length/3,nt=v.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);je(nt[0]),je(nt[1]),je(nt[3]),je(nt[1]),je(nt[2]),je(nt[3])}function Ze(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function je(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return o0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Sl[s.type]().fromJSON(s)),new i(n,e.options)}},r0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,c),new ae(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],y=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ae(o,1-c),new ae(l,1-u),new ae(d,1-p),new ae(y,1-g)]:[new ae(a,1-c),new ae(h,1-u),new ae(f,1-p),new ae(m,1-g)]}};function o0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Wo=class i extends Uo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ws=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let v=g*d-o;for(let S=0;S<l;S++){let x=S*u-r;p.push(x,-v,0),y.push(0,0,1),m.push(S/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<a;v++){let S=v+l*g,x=v+l*(g+1),T=v+1+l*(g+1),E=v+1+l*g;f.push(S,x,E),f.push(x,T,E)}this.setIndex(f),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(y,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Xo=class i extends Ut{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new L,p=new ae;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let g=0;g<n;g++){let v=g+m,S=v,x=v+n+1,T=v+n+2,E=v+1;a.push(S,x,E),a.push(x,T,E)}}this.setIndex(a),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var qo=class i extends Ut{constructor(e=new ko(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new ae,h=new L,u=[],d=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(f,2));function y(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),v(),g()}function m(S){h=e.getPointAt(S/t,h);let x=o.normals[S],T=o.binormals[S];for(let E=0;E<=s;E++){let _=E/s*Math.PI*2,M=Math.sin(_),P=-Math.cos(_);c.x=P*x.x+M*T.x,c.y=P*x.y+M*T.y,c.z=P*x.z+M*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=t;S++)for(let x=1;x<=s;x++){let T=(s+1)*(S-1)+(x-1),E=(s+1)*S+(x-1),_=(s+1)*S+x,M=(s+1)*(S-1)+x;p.push(T,E,M),p.push(E,_,M)}}function v(){for(let S=0;S<=t;S++)for(let x=0;x<=s;x++)l.x=S/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Sl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function er(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(If(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(If(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=er(i[t]);for(let s in n)e[s]=n[s]}return e}function If(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function a0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Iu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Cp={clone:er,merge:bn},l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wi=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=c0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=a0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new it().fromArray(s.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bl=class extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wt=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},In=class extends Wt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Yo=class extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Dl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},El=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wl=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function go(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function h0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Pf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function u0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ti=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hh:r=e,a=2*t-n;break;case Gh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hh:o=e,c=2*n-t;break;case Gh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),y=p*p,m=y*p,g=-d*m+2*d*y-d*p,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*p+1,S=(-1-f)*m+(1.5+f)*y+.5*p,x=f*m-f*y;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[l+T]+S*o[c+T]+x*o[u+T];return r}},Al=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Rl=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cl=class extends Ti{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),y=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*y+o[c+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let y=o[l+p],m=o[c+p],g=f*d+p*2,v=u[g],S=u[g+1],x=e*d+p*2,T=h[x],E=h[x+1],_=f0(n,t,v,T,s);r[p]=Ip(_,y,S,E,m)}return r}};function Ip(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function d0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function f0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Ip(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=d0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),go(e.settings)&&(n.settings={inTangents:_s(e.settings.inTangents,Array),outTangents:_s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Cl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case ks:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break;case kh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return kh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;go(this.settings)&&(Lf(this.settings.inTangents,e),Lf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;go(this.settings)&&(Nf(this.settings.inTangents,e),Nf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){et("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&jm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){et("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===il,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let y=t[u+p];if(y!==t[d+p]||y!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Nf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=ks;var Zi=class extends On{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Bs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};$o.prototype.ValueTypeName="color";var Ji=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};Ji.prototype.ValueTypeName="number";var Il=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},ji=class extends On{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};ji.prototype.ValueTypeName="quaternion";ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends On{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Bs;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};Es.prototype.ValueTypeName="vector";var Ko=class{constructor(e="",t=-1,n=[],s=up){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=fi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(m0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=h0(c);c=Pf(c,1,h),l=Pf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ji(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function p0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return $o;case"quaternion":return ji;case"bool":case"boolean":return Zi;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function m0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=p0(i.type);if(i.times===void 0){let n=[],s=[];u0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),go(i.settings)&&(t.settings={inTangents:_s(i.settings.inTangents,Float32Array),outTangents:_s(i.settings.outTangents,Float32Array)}),t}var Si={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Df(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Df(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Df(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Pl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pp=new Pl,jn=class{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};jn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vi={},Yh=class extends Error{constructor(e,t){super(e),this.response=t}},es=class extends jn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Vi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,y=0,m=new ReadableStream({start(g){v();function v(){u.read().then(({done:S,value:x})=>{if(S)g.close();else{y+=x.byteLength;let T=new ProgressEvent("progress",{lengthComputable:p,loaded:y,total:f});for(let E=0,_=h.length;E<_;E++){let M=h[E];M.onProgress&&M.onProgress(T)}g.enqueue(x),v()}},S=>{g.error(S)})}}});return new Response(m)}else throw new Yh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Si.add(`file:${e}`,l);let h=Vi[e];delete Vi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Vi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Vi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Sr=new WeakMap,Ll=class extends jn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Sr.get(o);u===void 0&&(u=[],Sr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Rr("img");function c(){h(),t&&t(this);let u=Sr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Sr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Si.remove(`image:${e}`);let d=Sr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Si.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Zo=class extends jn{constructor(e){super(e)}load(e,t,n,s){let r=new un,o=new Ll(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Xs=class extends Bt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Jo=class extends Xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Oh=new tt,Uf=new L,Of=new L,kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),Of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Of),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Oh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Oh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ar||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tl=new L,nl=new en,vi=new L,jo=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tl,nl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tl,nl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gs=new L,Ff=new ae,Bf=new ae,sn=class extends jo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,Ff,Bf),t.subVectors(Bf,Ff)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_o*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$h=class extends kr{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Qo=class extends Xs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Kh=class extends kr{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},qs=class extends Xs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ys=class extends jo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zh=class extends kr{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ts=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Zh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Xn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fh=new WeakMap,ea=class extends jn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Si.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Fh.has(o)===!0?(s&&s(Fh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Si.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Fh.set(c,l),Si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Si.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Mr=-90,br=1,zr=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Mr,br,e,t);s.layers=this.layers,this.add(s);let r=new sn(Mr,br,e,t);r.layers=this.layers,this.add(r);let o=new sn(Mr,br,e,t);o.layers=this.layers,this.add(o);let a=new sn(Mr,br,e,t);a.layers=this.layers,this.add(a);let c=new sn(Mr,br,e,t);c.layers=this.layers,this.add(c);let l=new sn(Mr,br,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Nl=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Pu="\\[\\]\\.:\\/",g0=new RegExp("["+Pu+"]","g"),Lu="[^"+Pu+"]",_0="[^"+Pu.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",Lu),y0=/(WCOD+)?/.source.replace("WCOD",_0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),M0=new RegExp("^"+x0+y0+v0+S0+"$"),b0=["material","materials","bones","map"],Jh=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(e){let t=M0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);b0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Jh;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aM=new Float32Array(1);var kf=new tt,ta=class{constructor(e,t,n=0,s=1/0){this.ray=new Mi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kf),this}intersectObject(e,t=!0,n=[]){return jh(e,this,n,t),n.sort(zf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)jh(e[s],this,n,t);return n.sort(zf),n}};function zf(i,e){return i.distance-e.distance}function jh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)jh(r[o],e,t,!0)}}var Hr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Qh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var na=class extends ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Nu(i,e,t,n){let s=E0(n);switch(t){case _u:return i*e;case Hl:return i*e/s.components*s.byteLength;case Gl:return i*e/s.components*s.byteLength;case Ts:return i*e*2/s.components*s.byteLength;case Vl:return i*e*2/s.components*s.byteLength;case xu:return i*e*3/s.components*s.byteLength;case Mn:return i*e*4/s.components*s.byteLength;case Wl:return i*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ql:case $l:return Math.max(i,16)*Math.max(e,8)/4;case Xl:case Yl:return Math.max(i,8)*Math.max(e,8)/2;case Kl:case Zl:case jl:case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jl:case la:case ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case _c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xc:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ca:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E0(i){switch(i){case Fn:case fu:return{byteLength:1,components:1};case qr:case pu:case ui:return{byteLength:2,components:1};case kl:case zl:return{byteLength:2,components:4};case hi:case Bl:case qn:return{byteLength:4,components:1};case mu:case gu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Qp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function T0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],y=u[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let y=u[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
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
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U0=`#ifdef USE_BATCHING
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
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n_="gl_FragColor = linearToOutputTexel( gl_FragColor );",i_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s_=`#ifdef USE_ENVMAP
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
#endif`,r_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
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
}`,p_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,__=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,x_=`#ifdef USE_ENVMAP
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
#endif`,y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
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
#endif`,E_=`uniform sampler2D dfgLUT;
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
}`,w_=`
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
#endif`,T_=`#if defined( RE_IndirectDiffuse )
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
#endif`,A_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,C_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O_=`#if defined( USE_POINTS_UV )
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
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z_=`#if defined( USE_MORPHCOLORS )
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
#endif`,H_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`#ifdef USE_MORPHTARGETS
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
#endif`,V_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,K_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ux=`float getShadowMask() {
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
}`,dx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mx=`#ifdef USE_SKINNING
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
#endif`,gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
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
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform float backgroundBlurriness;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
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
}`,Nx=`#if DEPTH_PACKING == 3200
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
}`,Dx=`#define DISTANCE
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
}`,Ux=`#define DISTANCE
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`uniform float scale;
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
}`,kx=`uniform vec3 diffuse;
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
}`,zx=`#include <common>
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Gx=`#define LAMBERT
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
}`,Vx=`#define LAMBERT
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define MATCAP
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
}`,qx=`#define NORMAL
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
}`,Yx=`#define NORMAL
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
}`,$x=`#define PHONG
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
}`,Kx=`#define PHONG
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
}`,Zx=`#define STANDARD
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
}`,Jx=`#define STANDARD
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
}`,jx=`#define TOON
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
}`,Qx=`#define TOON
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
}`,ey=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ny=`#include <common>
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
}`,iy=`uniform vec3 color;
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
}`,sy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:A0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:I0,alphatest_fragment:P0,alphatest_pars_fragment:L0,aomap_fragment:N0,aomap_pars_fragment:D0,batching_pars_vertex:U0,batching_vertex:O0,begin_vertex:F0,beginnormal_vertex:B0,bsdfs:k0,iridescence_fragment:z0,bumpmap_pars_fragment:H0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:q0,color_pars_fragment:Y0,color_pars_vertex:$0,color_vertex:K0,common:Z0,defaultnormal_vertex:J0,displacementmap_pars_vertex:j0,displacementmap_vertex:Q0,emissivemap_fragment:e_,emissivemap_pars_fragment:t_,colorspace_fragment:n_,colorspace_pars_fragment:i_,envmap_fragment:s_,envmap_common_pars_fragment:r_,envmap_pars_fragment:o_,envmap_pars_vertex:a_,envmap_physical_pars_fragment:x_,envmap_vertex:l_,fog_vertex:c_,fog_pars_vertex:h_,fog_fragment:u_,fog_pars_fragment:d_,gradientmap_pars_fragment:f_,lightmap_pars_fragment:p_,lights_lambert_fragment:m_,lights_lambert_pars_fragment:g_,lights_pars_begin:__,lights_toon_fragment:y_,lights_toon_pars_fragment:v_,lights_phong_fragment:S_,lights_phong_pars_fragment:M_,lights_physical_fragment:b_,lights_physical_pars_fragment:E_,lights_fragment_begin:w_,lights_fragment_maps:T_,lights_fragment_end:A_,lightprobes_pars_fragment:R_,logdepthbuf_fragment:C_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:P_,logdepthbuf_vertex:L_,map_fragment:N_,map_pars_fragment:D_,map_particle_fragment:U_,map_particle_pars_fragment:O_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:B_,morphinstance_vertex:k_,morphcolor_vertex:z_,morphnormal_vertex:H_,morphtarget_pars_vertex:G_,morphtarget_vertex:V_,normal_fragment_begin:W_,normal_fragment_maps:X_,normal_pars_fragment:q_,normal_pars_vertex:Y_,normal_vertex:$_,normalmap_pars_fragment:K_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:J_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:Q_,opaque_fragment:ex,packing:tx,premultiplied_alpha_fragment:nx,project_vertex:ix,dithering_fragment:sx,dithering_pars_fragment:rx,roughnessmap_fragment:ox,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:lx,shadowmap_pars_vertex:cx,shadowmap_vertex:hx,shadowmask_pars_fragment:ux,skinbase_vertex:dx,skinning_pars_vertex:fx,skinning_vertex:px,skinnormal_vertex:mx,specularmap_fragment:gx,specularmap_pars_fragment:_x,tonemapping_fragment:xx,tonemapping_pars_fragment:yx,transmission_fragment:vx,transmission_pars_fragment:Sx,uv_pars_fragment:Mx,uv_pars_vertex:bx,uv_vertex:Ex,worldpos_vertex:wx,background_vert:Tx,background_frag:Ax,backgroundCube_vert:Rx,backgroundCube_frag:Cx,cube_vert:Ix,cube_frag:Px,depth_vert:Lx,depth_frag:Nx,distance_vert:Dx,distance_frag:Ux,equirect_vert:Ox,equirect_frag:Fx,linedashed_vert:Bx,linedashed_frag:kx,meshbasic_vert:zx,meshbasic_frag:Hx,meshlambert_vert:Gx,meshlambert_frag:Vx,meshmatcap_vert:Wx,meshmatcap_frag:Xx,meshnormal_vert:qx,meshnormal_frag:Yx,meshphong_vert:$x,meshphong_frag:Kx,meshphysical_vert:Zx,meshphysical_frag:Jx,meshtoon_vert:jx,meshtoon_frag:Qx,points_vert:ey,points_frag:ty,shadow_vert:ny,shadow_frag:iy,sprite_vert:sy,sprite_frag:ry},Ce={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ii={basic:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:bn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:bn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:bn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new $e(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:bn([Ce.points,Ce.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:bn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:bn([Ce.common,Ce.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:bn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:bn([Ce.sprite,Ce.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:bn([Ce.common,Ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:bn([Ce.lights,Ce.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ii.physical={uniforms:bn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var Mc={r:0,b:0,g:0},oy=new tt,em=new it;em.set(-1,0,0,0,1,0,0,0,1);function ay(i,e,t,n,s,r){let o=new $e(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let x=v.backgroundBlurriness>0;S=e.get(S,x)}return S}function p(v){let S=!1,x=f(v);x===null?m(o,a):x&&x.isColor&&(m(x,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(v,S){let x=f(S);x&&x.isCubeTexture?(l===void 0&&(l=new Ct(new zt(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:er(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(oy.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(em),l.material.toneMapped=ht.getTransfer(x.colorSpace)!==Rt,(h!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ct(new Ws(2,2),new wi({name:"BackgroundMaterial",uniforms:er(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ht.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,S){v.getRGB(Mc,Iu(i)),t.buffers.color.setClear(Mc.r,Mc.g,Mc.b,S,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:y,dispose:g}}function ly(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(D,F,G,C,U){let q=!1,H=u(D,C,G,F);r!==H&&(r=H,l(r.object)),q=f(D,C,G,U),q&&p(D,C,G,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(D,F,G,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,F,G,C){let U=C.wireframe===!0,q=n[F.id];q===void 0&&(q={},n[F.id]=q);let H=D.isInstancedMesh===!0?D.id:0,le=q[H];le===void 0&&(le={},q[H]=le);let R=le[G.id];R===void 0&&(R={},le[G.id]=R);let O=R[U];return O===void 0&&(O=d(c()),R[U]=O),O}function d(D){let F=[],G=[],C=[];for(let U=0;U<t;U++)F[U]=0,G[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:C,object:D,attributes:{},index:null}}function f(D,F,G,C){let U=r.attributes,q=F.attributes,H=0,le=G.getAttributes();for(let R in le)if(le[R].location>=0){let W=U[R],se=q[R];if(se===void 0&&(R==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),R==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),W===void 0||W.attribute!==se||se&&W.data!==se.data)return!0;H++}return r.attributesNum!==H||r.index!==C}function p(D,F,G,C){let U={},q=F.attributes,H=0,le=G.getAttributes();for(let R in le)if(le[R].location>=0){let W=q[R];W===void 0&&(R==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),R==="instanceColor"&&D.instanceColor&&(W=D.instanceColor));let se={};se.attribute=W,W&&W.data&&(se.data=W.data),U[R]=se,H++}r.attributes=U,r.attributesNum=H,r.index=C}function y(){let D=r.newAttributes;for(let F=0,G=D.length;F<G;F++)D[F]=0}function m(D){g(D,0)}function g(D,F){let G=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;G[D]=1,C[D]===0&&(i.enableVertexAttribArray(D),C[D]=1),U[D]!==F&&(i.vertexAttribDivisor(D,F),U[D]=F)}function v(){let D=r.newAttributes,F=r.enabledAttributes;for(let G=0,C=F.length;G<C;G++)F[G]!==D[G]&&(i.disableVertexAttribArray(G),F[G]=0)}function S(D,F,G,C,U,q,H){H===!0?i.vertexAttribIPointer(D,F,G,U,q):i.vertexAttribPointer(D,F,G,C,U,q)}function x(D,F,G,C){y();let U=C.attributes,q=G.getAttributes(),H=F.defaultAttributeValues;for(let le in q){let R=q[le];if(R.location>=0){let O=U[le];if(O===void 0&&(le==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),le==="instanceColor"&&D.instanceColor&&(O=D.instanceColor)),O!==void 0){let W=O.normalized,se=O.itemSize,oe=e.get(O);if(oe===void 0)continue;let z=oe.buffer,re=oe.type,ce=oe.bytesPerElement,De=re===i.INT||re===i.UNSIGNED_INT||O.gpuType===Bl;if(O.isInterleavedBufferAttribute){let fe=O.data,Le=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,ot=O.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Ue=0;Ue<R.locationSize;Ue++)g(R.location+Ue,fe.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ue=0;Ue<R.locationSize;Ue++)m(R.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,z);for(let Ue=0;Ue<R.locationSize;Ue++)S(R.location+Ue,se/R.locationSize,re,W,Le*ce,(ot+se/R.locationSize*Ue)*ce,De)}else{if(O.isInstancedBufferAttribute){for(let fe=0;fe<R.locationSize;fe++)g(R.location+fe,O.meshPerAttribute);D.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let fe=0;fe<R.locationSize;fe++)m(R.location+fe);i.bindBuffer(i.ARRAY_BUFFER,z);for(let fe=0;fe<R.locationSize;fe++)S(R.location+fe,se/R.locationSize,re,W,se*ce,se/R.locationSize*fe*ce,De)}}else if(H!==void 0){let W=H[le];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(R.location,W);break;case 3:i.vertexAttrib3fv(R.location,W);break;case 4:i.vertexAttrib4fv(R.location,W);break;default:i.vertexAttrib1fv(R.location,W)}}}}v()}function T(){P();for(let D in n){let F=n[D];for(let G in F){let C=F[G];for(let U in C){let q=C[U];for(let H in q)h(q[H].object),delete q[H];delete C[U]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let G in F){let C=F[G];for(let U in C){let q=C[U];for(let H in q)h(q[H].object),delete q[H];delete C[U]}}delete n[D.id]}function _(D){for(let F in n){let G=n[F];for(let C in G){let U=G[C];if(U[D.id]===void 0)continue;let q=U[D.id];for(let H in q)h(q[H].object),delete q[H];delete U[D.id]}}}function M(D){for(let F in n){let G=n[F],C=D.isInstancedMesh===!0?D.id:0,U=G[C];if(U!==void 0){for(let q in U){let H=U[q];for(let le in H)h(H[le].object),delete H[le];delete U[q]}delete G[C],Object.keys(G).length===0&&delete n[F]}}}function P(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function cy(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function hy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Mn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Fn&&_!==qn&&!M&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ye("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:T,samples:E}}function uy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Gn,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,S=v*4,x=g.clippingState||null;c.value=x,x=h(p,d,S,f);for(let T=0;T!==S;++T)x[T]=t[T];g.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,p!==!0||m===null){let g=f+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,x=f;S!==y;++S,x+=4)o.copy(u[S]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var pa=class extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ks});r.uniforms.tEquirect.value=t;let o=new Ct(s,r),a=t.minFilter;return t.minFilter===Sn&&(t.minFilter=Vt),new zr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Lp=256,dy=3,fy=20,tm=256,nm=16,py=3,my=new L,gy=new $e,Kr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zr(1,10,null),this._boxMesh=new Ct(new zt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=my}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(gy));let m=new zr(n,s,h);return m.position.copy(a),m.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=p,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Lp,Tu(e))}_fromTexture(e,t){e.mapping===Js||e.mapping===Wr?this._setSize(e.image.length===0?Lp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Np(e,!1,!1),n=Math.log2(e)-dy;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Np(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Js||e.mapping===Wr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=_y(),this._integrationMaterial=xy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/nm);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-py)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(tm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=yy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Np(i,e,t){return new pa(i,{minFilter:Sn,generateMipmaps:e,type:ui,colorSpace:mn,depthBuffer:t})}function ma(i,e,t){return new wi({name:i,uniforms:e,vertexShader:dt.cube_vert,fragmentShader:t,side:gn,blending:Ks,depthTest:!1,depthWrite:!1})}function _y(){return ma("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tm}u

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
	`)}function xy(){return ma("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nm}},`

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
	`)}function yy(){return ma("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fy}
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
	`)}function Dp(){return ma("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Up(){return ma("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ul||f===Ol)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let y=new pa(p.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Ul||f===Ol,y=f===Js||f===Wr;if(p||y){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Kr(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||y&&v&&c(v)?(n===null&&(n=new Kr(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Ul?d.mapping=Js:f===Ol&&(d.mapping=Wr),d}function c(d){let f=0,p=6;for(let y=0;y<p;y++)d[y]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Sy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function My(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let y=r.get(p);y&&(e.remove(y),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",a),s[y.id]=new WeakRef(y),o.register(y,y.id,y),t.memory.geometries++),y}function h(p){let y=p.attributes;for(let m in y)e.update(y[m],i.ARRAY_BUFFER)}function u(p){let y=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=y!==null?y.array.length:m.array.length/3-1,S=m.count>=65535?To:wo,x=new S(Math.ceil(v/3)*6,1),T=x.array;if(y!==null){let _=y.array;g=y.version;for(let M=0,P=0;M<v;M+=3){let I=_[M+0],D=_[M+1],F=_[M+2];T[P++]=I,T[P++]=D,T[P++]=D,T[P++]=F,T[P++]=F,T[P++]=I}}else{g=m.version;for(let _=0,M=0;_<v;_+=3){let P=_+0,I=_+1,D=_+2;T[M++]=P,T[M++]=I,T[M++]=I,T[M++]=D,T[M++]=D,T[M++]=P}}x.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,x)}function d(p){let y=r.get(p);if(y){let m=p.index;m!==null&&y.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let y=s[p].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function by(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ey(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function wy(i,e,t){let n=new WeakMap,s=new Pt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let P=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),y===!0&&(S=3);let x=a.attributes.position.count*S,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*T*4*u),_=new bo(E,x,T,u);_.type=qn,_.needsUpdate=!0;let M=S*4;for(let I=0;I<u;I++){let D=m[I],F=g[I],G=v[I],C=x*T*4*I;for(let U=0;U<D.count;U++){let q=U*M;f===!0&&(s.fromBufferAttribute(D,U),E[C+q+0]=s.x,E[C+q+1]=s.y,E[C+q+2]=s.z,E[C+q+3]=0),p===!0&&(s.fromBufferAttribute(F,U),E[C+q+4]=s.x,E[C+q+5]=s.y,E[C+q+6]=s.z,E[C+q+7]=0),y===!0&&(s.fromBufferAttribute(G,U),E[C+q+8]=s.x,E[C+q+9]=s.y,E[C+q+10]=s.z,E[C+q+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new ae(x,T)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ty(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Ay={[ou]:"LINEAR_TONE_MAPPING",[au]:"REINHARD_TONE_MAPPING",[lu]:"CINEON_TONE_MAPPING",[ia]:"ACES_FILMIC_TONE_MAPPING",[hu]:"AGX_TONE_MAPPING",[uu]:"NEUTRAL_TONE_MAPPING",[cu]:"CUSTOM_TONE_MAPPING"};function Ry(i,e,t,n,s,r){let o=new Vn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Ut;h.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new bt([0,2,0,0,2,0],2));let u=new bl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ct(h,u),f=new Ys(-1,1,1,-1,0,1),p=null,y=null,m=!1,g,v=null,S=[],x=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),c!==null&&c.setSize(T,E);for(let _=0;_<S.length;_++){let M=S[_];M.setSize&&M.setSize(T,E)}},this.setEffects=function(T){S=T,x=S.length>0&&S[0].isRenderPass===!0;let E=o.width,_=o.height;S.length>0&&a===null&&(a=new Vn(E,_,{type:ui,depthBuffer:!1,stencilBuffer:!1}),c=new Vn(E,_,{type:ui,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&S.some(P=>P.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&l===null&&(l=new $i(E,_),r===!0&&(l.format=ns,l.type=Qs)),o.dispose(),o.depthTexture=M?l:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let P=0;P<S.length;P++){let I=S[P];I.setSize&&I.setSize(E,_),M&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(T,E){if(m||T.toneMapping===Ri&&S.length===0)return!1;if(v=E,E!==null){let _=E.width,M=E.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return x===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Ri,!0},this.hasRenderPass=function(){return x},this.end=function(T,E){T.toneMapping=g,m=!0;let _=o,M=a;for(let P=0;P<S.length;P++){let I=S[P];I.enabled!==!1&&(I.render(T,M,_,E),I.needsSwap!==!1&&(_=M,M=M===a?c:a))}if(p!==T.outputColorSpace||y!==T.toneMapping){p=T.outputColorSpace,y=T.toneMapping,u.defines={},ht.getTransfer(p)===Rt&&(u.defines.SRGB_TRANSFER="");let P=Ay[y];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var im=new un,sm=new $i(1,1),rm=new No(1),om=new bo,am=new pl,lm=new Lo,Op=[],Fp=[],Bp=new Float32Array(16),kp=new Float32Array(9),zp=new Float32Array(4);function Zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Op[s];if(r===void 0&&(r=new Float32Array(s),Op[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wc(i,e){let t=Fp[e];t===void 0&&(t=new Int32Array(e),Fp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function Ny(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;zp.set(n),i.uniformMatrix2fv(this.addr,!1,zp),on(t,n)}}function Dy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;kp.set(n),i.uniformMatrix3fv(this.addr,!1,kp),on(t,n)}}function Uy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;Bp.set(n),i.uniformMatrix4fv(this.addr,!1,Bp),on(t,n)}}function Oy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function Tc(i){return i.version===0&&(i.compareFunction=Mu,i.needsUpdate=!0),i}function Wy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Tc(sm):r=im,t.setTexture2D(e||r,s)}function Xy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||am,s)}function qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Tc(rm):r=lm,t.setTextureCube(e||r,s)}function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||om,s)}function $y(i){switch(i){case 5126:return Cy;case 35664:return Iy;case 35665:return Py;case 35666:return Ly;case 35674:return Ny;case 35675:return Dy;case 35676:return Uy;case 5124:case 35670:return Oy;case 35667:case 35671:return Fy;case 35668:case 35672:return By;case 35669:case 35673:return ky;case 5125:return zy;case 36294:return Hy;case 36295:return Gy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}function Ky(i,e){i.uniform1fv(this.addr,e)}function Zy(i,e){let t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jy(i,e){let t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function jy(i,e){let t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function Qy(i,e){let t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ev(i,e){let t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tv(i,e){let t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nv(i,e){i.uniform1iv(this.addr,e)}function iv(i,e){i.uniform2iv(this.addr,e)}function sv(i,e){i.uniform3iv(this.addr,e)}function rv(i,e){i.uniform4iv(this.addr,e)}function ov(i,e){i.uniform1uiv(this.addr,e)}function av(i,e){i.uniform2uiv(this.addr,e)}function lv(i,e){i.uniform3uiv(this.addr,e)}function cv(i,e){i.uniform4uiv(this.addr,e)}function hv(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Tc(sm):o=im;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function uv(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||am,r[o])}function dv(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Tc(rm):o=lm;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function fv(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||om,r[o])}function pv(i){switch(i){case 5126:return Ky;case 35664:return Zy;case 35665:return Jy;case 35666:return jy;case 35674:return Qy;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}var Ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$y(t.type)}},Fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}},Bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Du=/(\w+)(\])?(\[|\.)?/g;function Hp(i,e){i.seq.push(e),i.map[e.id]=e}function mv(i,e,t){let n=i.name,s=n.length;for(Du.lastIndex=0;;){let r=Du.exec(n),o=Du.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Hp(t,l===void 0?new Ou(a,i,e):new Fu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Bu(a),Hp(t,u)),t=u}}}var $r=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);mv(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Gp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gv=37297,_v=0;function xv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Vp=new it;function yv(i){ht._getMatrix(Vp,ht.workingColorSpace,i);let e=`mat3( ${Vp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case So:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+xv(i.getShaderSource(e),a)}else return r}function vv(i,e){let t=yv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Sv={[ou]:"Linear",[au]:"Reinhard",[lu]:"Cineon",[ia]:"ACESFilmic",[hu]:"AgX",[uu]:"Neutral",[cu]:"Custom"};function Mv(i,e){let t=Sv[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bc=new L;function bv(){ht.getLuminanceCoefficients(bc);let i=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function wv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fa(i){return i!==""}function Xp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function qp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(i){return i.replace(Av,Rv)}function Rv(i,e){let t=dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ku(t)}var Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(i){return i.replace(Cv,Iv)}function Iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $p(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Pv={[$s]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function Lv(i){return Pv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nv={[Wr]:"ENVMAP_MODE_REFRACTION"};function Dv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Uv={[Dl]:"ENVMAP_BLENDING_MULTIPLY",[lp]:"ENVMAP_BLENDING_MIX",[cp]:"ENVMAP_BLENDING_ADD"};function Ov(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Uv[i.combine]||"ENVMAP_BLENDING_NONE"}function Fv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Lv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Dv(t),u=Ov(t),d=Ev(t),f=wv(r),p=s.createProgram(),y,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(fa).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(fa).join(`
`),m.length>0&&(m+=`
`)):(y=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),m=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,vv("linearToOutputTexel",t.outputColorSpace),bv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),o=ku(o),o=Xp(o,t),o=qp(o,t),a=ku(a),a=Xp(a,t),a=qp(a,t),o=Yp(o),a=Yp(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+y+o,S=g+m+a,x=Gp(s,s.VERTEX_SHADER,v),T=Gp(s,s.FRAGMENT_SHADER,S);s.attachShader(p,x),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(x)||"",G=s.getShaderInfoLog(T)||"",C=D.trim(),U=F.trim(),q=G.trim(),H=!0,le=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,x,T);else{let R=Wp(s,x,"vertex"),O=Wp(s,T,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+C+`
`+R+`
`+O)}else C!==""?Ye("WebGLProgram: Program Info Log:",C):(U===""||q==="")&&(le=!1);le&&(I.diagnostics={runnable:H,programLog:C,vertexShader:{log:U,prefix:y},fragmentShader:{log:q,prefix:m}})}s.deleteShader(x),s.deleteShader(T),_=new $r(s,p),M=Tv(s,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,gv)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=T,this}var Bv=0,zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hu(e),t.set(e,n)),n}},Hu=class{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}};function kv(i){return i===Ts||i===la||i===ca}function zv(i,e,t,n,s,r){let o=new Pr,a=new zu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,M,P,I,D,F){let G=I.fog,C=D.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||U,q),le=d[_.type],R=n.precision;_.precision!==null&&(R=n.getMaxPrecision(_.precision),R!==_.precision&&Ye("WebGLProgram.getParameters:",_.precision,"not supported, using",R,"instead."));let O=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,W=O!==void 0?O.length:0,se=0;C.morphAttributes.position!==void 0&&(se=1),C.morphAttributes.normal!==void 0&&(se=2),C.morphAttributes.color!==void 0&&(se=3);let oe,z,re,ce;if(le){let Ae=Ii[le];oe=Ae.vertexShader,z=Ae.fragmentShader}else{oe=_.vertexShader,z=_.fragmentShader;let Ae=a.getVertexShaderStage(_),St=a.getFragmentShaderStage(_);a.update(_,Ae,St),re=Ae.id,ce=St.id}let De=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Le=D.isInstancedMesh===!0,ot=D.isBatchedMesh===!0,Ue=!!_.map,Ze=!!_.matcap,je=!!H,Q=je&&H.isPMREMTexture===!0,pe=!!_.aoMap,me=!!_.lightMap,Ne=!!_.bumpMap&&_.wireframe===!1,ve=!!_.normalMap,nt=!!_.displacementMap,Ge=!!_.emissiveMap,pt=!!_.metalnessMap,mt=!!_.roughnessMap,xt=_.anisotropy>0,k=_.clearcoat>0,kt=_.diffuseRoughness>0,lt=_.dispersion>0,At=_.retroreflectivity>0,Ee=_.iridescence>0,It=_.sheen>0,ze=_.transmission>0,Qe=xt&&!!_.anisotropyMap,A=k&&!!_.clearcoatMap,b=k&&!!_.clearcoatNormalMap,V=k&&!!_.clearcoatRoughnessMap,he=kt&&!!_.diffuseRoughnessMap,ie=Ee&&!!_.iridescenceMap,_e=Ee&&!!_.iridescenceThicknessMap,be=It&&!!_.sheenColorMap,ee=It&&!!_.sheenRoughnessMap,te=!!_.specularMap,Se=!!_.specularColorMap,N=!!_.specularIntensityMap,ne=ze&&!!_.transmissionMap,Z=ze&&!!_.thicknessMap,Me=!!_.gradientMap,ge=!!_.alphaMap,xe=_.alphaTest>0,Ve=!!_.alphaHash,at=!!_.extensions,ue=Ri;_.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Ke=Q?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,st={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:oe,fragmentShader:z,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:R,batching:ot,batchingColor:ot&&D._colorsTexture!==null,instancing:Le,instancingColor:Le&&D.instanceColor!==null,instancingMorph:Le&&D.morphTexture!==null,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ue,matcap:Ze,envMap:je,envMapMode:je&&H.mapping,envMapPMREM:Q,envMapMaxLod:Q?Ke.length-1:null,envMapSize:Q?Ke[0].width:null,aoMap:pe,lightMap:me,bumpMap:Ne,normalMap:ve,displacementMap:nt,emissiveMap:Ge,normalMapObjectSpace:ve&&_.normalMapType===fp,normalMapTangentSpace:ve&&_.normalMapType===ua,packedNormalMap:ve&&_.normalMapType===ua&&kv(_.normalMap.format),metalnessMap:pt,roughnessMap:mt,anisotropy:xt,anisotropyMap:Qe,clearcoat:k,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:V,diffuseRoughness:kt,diffuseRoughnessMap:he,dispersion:lt,retroreflection:At,iridescence:Ee,iridescenceMap:ie,iridescenceThicknessMap:_e,sheen:It,sheenColorMap:be,sheenRoughnessMap:ee,specularMap:te,specularColorMap:Se,specularIntensityMap:N,transmission:ze,transmissionMap:ne,thicknessMap:Z,gradientMap:Me,opaque:_.transparent===!1&&_.blending===Vr&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:xe,alphaHash:Ve,combine:_.combine,mapUv:Ue&&f(_.map.channel),aoMapUv:pe&&f(_.aoMap.channel),lightMapUv:me&&f(_.lightMap.channel),bumpMapUv:Ne&&f(_.bumpMap.channel),normalMapUv:ve&&f(_.normalMap.channel),displacementMapUv:nt&&f(_.displacementMap.channel),emissiveMapUv:Ge&&f(_.emissiveMap.channel),metalnessMapUv:pt&&f(_.metalnessMap.channel),roughnessMapUv:mt&&f(_.roughnessMap.channel),anisotropyMapUv:Qe&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&f(_.sheenRoughnessMap.channel),specularMapUv:te&&f(_.specularMap.channel),specularColorMapUv:Se&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:ne&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:ge&&f(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ve||xt),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!C.attributes.uv&&(Ue||ge),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:se,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:F.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ue&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===Rt,decodeVideoTextureEmissive:Ge&&_.emissiveMap.isVideoTexture===!0&&ht.getTransfer(_.emissiveMap.colorSpace)===Rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Qn,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:at&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&_.extensions.multiDraw===!0||ot)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function y(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)M.push(P),M.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(m(M,_),g(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let M=d[_.type],P;if(M){let I=Ii[M];P=Cp.clone(I.uniforms)}else P=_.uniforms;return P}function S(_,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new Fv(i,M,_,s),l.push(P),h.set(M,P)),P}function x(_){if(--_.usedTimes===0){let M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:v,acquireProgram:S,releaseProgram:x,releaseShaderCache:T,programs:l,dispose:E}}function Hv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,y,m,g){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:g},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=p,v.materialVariant=o(d),v.groupOrder=y,v.renderOrder=d.renderOrder,v.z=m,v.group=g),e++,v}function c(d,f,p,y,m,g,v){v.reversedDepth===!0&&(m=-m);let S=a(d,f,p,y,m,g);p.transmission>0?n.push(S):p.transparent===!0?s.push(S):t.push(S)}function l(d,f,p,y,m,g){let v=a(d,f,p,y,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Gv),n.length>1&&n.sort(f||Kp),s.length>1&&s.sort(f||Kp)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Vv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Zp,i.set(n,[o])):s>=r.length?(o=new Zp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new $e};break;case"SpotLight":t={position:new L,direction:new L,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qv=0;function Yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $v(i){let e=new Wv,t=Xv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new tt,o=new tt;function a(l){let h=0,u=0,d=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,v=0,S=0,x=0,T=0,E=0,_=0,M=0,P=0,I=0;l.sort(Yv);for(let F=0,G=l.length;F<G;F++){let C=l[F],U=C.color,q=C.intensity,H=C.distance,le=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ts?le=C.shadow.map.texture:le=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*q,u+=U.g*q,d+=U.b*q;else if(C.isLightProbe){for(let R=0;R<9;R++)n.probe[R].addScaledVector(C.sh.coefficients[R],q);I++}else if(C.isSunLight){let R=e.get(C);if(R.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,W=t.get(C);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[p]=W,n.sunShadowMap[p]=le;let se=O.getViewportCount();for(let oe=0;oe<se;oe++)n.sunShadowMatrix[y+oe]=O.getMatrix(oe),n.sunShadowCascade[y+oe]=O._cascadeData[oe];y+=se,p++}n.sun[f]=R,f++}else if(C.isDirectionalLight){let R=e.get(C);if(R.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,W=t.get(C);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=le,n.directionalShadowMatrix[m]=C.shadow.matrix,T++}n.directional[m]=R,m++}else if(C.isSpotLight){let R=e.get(C);R.position.setFromMatrixPosition(C.matrixWorld),R.color.copy(U).multiplyScalar(q),R.distance=H,R.coneCos=Math.cos(C.angle),R.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),R.decay=C.decay,n.spot[v]=R;let O=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,O.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[v]=O.matrix,C.castShadow){let W=t.get(C);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=le,_++}v++}else if(C.isRectAreaLight){let R=e.get(C);R.color.copy(U).multiplyScalar(q),R.halfWidth.set(C.width*.5,0,0),R.halfHeight.set(0,C.height*.5,0),n.rectArea[S]=R,S++}else if(C.isPointLight){let R=e.get(C);if(R.color.copy(C.color).multiplyScalar(C.intensity),R.distance=C.distance,R.decay=C.decay,C.castShadow){let O=C.shadow,W=t.get(C);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,W.shadowCameraNear=O.camera.near,W.shadowCameraFar=O.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=le,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=R,g++}else if(C.isHemisphereLight){let R=e.get(C);R.skyColor.copy(C.color).multiplyScalar(q),R.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[x]=R,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==x||D.numSunShadows!==p||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==M||D.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=I,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=x,D.numSunShadows=p,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=M,D.numLightProbes=I,n.version=qv++)}function c(l,h){let u=0,d=0,f=0,p=0,y=0,m=0,g=h.matrixWorldInverse;for(let v=0,S=l.length;v<S;v++){let x=l[v];if(x.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(g),u++}else if(x.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(x.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let T=n.rectArea[y];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function Jp(i){let e=new $v(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Kv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Jp(i),e.set(s,[a])):r>=o.length?(a=new Jp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jv=`uniform sampler2D shadow_pass;
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
}`,jv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Qv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],jp=new tt,da=new L,Uu=new L;function eS(i,e,t){let n=new Ss,s=new ae,r=new ae,o=new Pt,a=new El,c=new wl,l={},h=t.maxTextureSize,u={[Ai]:gn,[gn]:Ai,[Qn]:Qn},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Zv,fragmentShader:Jv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ut;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ct(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let g=this.type;this.render=function(E,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Vf&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$s);let P=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ks),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=g!==this.type;G&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=E.length;C<U;C++){let q=E[C],H=q.shadow;if(H===void 0){Ye("WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let le=H.getFrameExtents();s.multiply(le),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,H.mapSize.y=r.y));let R=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=R,H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Gr){if(q.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vn(s.x,s.y,{format:Ts,type:ui,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),H.map.texture.name=q.name+".shadowMap",H.map.depthTexture=new $i(s.x,s.y,qn),H.map.depthTexture.name=q.name+".shadowMapDepth",H.map.depthTexture.format=Xi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Zt,H.map.depthTexture.magFilter=Zt}else q.isPointLight?(H.map=new pa(s.x),H.map.depthTexture=new No(s.x,hi)):(H.map=new Vn(s.x,s.y),H.map.depthTexture=new $i(s.x,s.y,hi)),H.map.depthTexture.name=q.name+".shadowMap",H.map.depthTexture.format=Xi,this.type===$s?(H.map.depthTexture.compareFunction=R?Su:vu,H.map.depthTexture.minFilter=Vt,H.map.depthTexture.magFilter=Vt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Zt,H.map.depthTexture.magFilter=Zt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let O=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();q.isPointLight!==!0&&H.updateMatrices(q,M);let W=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let se=0;se<O;se++){let oe=H.getCamera(se);if(q.isPointLight){let z=H.camera,re=H.matrix,ce=q.distance||z.far;ce!==z.far&&(z.far=ce,z.updateProjectionMatrix()),da.setFromMatrixPosition(q.matrixWorld),z.position.copy(da),Uu.copy(z.position),Uu.add(jv[se]),z.up.copy(Qv[se]),z.lookAt(Uu),z.updateMatrixWorld(),re.makeTranslation(-da.x,-da.y,-da.z),jp.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(jp,z.coordinateSystem,z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,se),i.clear();else{se===0&&(i.setRenderTarget(H.map),i.clear());let z=H.getViewport(se);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),F.viewport(o)}n=H.getFrustum(se),x(_,M,oe,q,W,this.type)}H.isPointLightShadow!==!0&&this.type===Gr&&v(H,M),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(P,I,D)};function v(E,_){let M=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Vn(s.x,s.y,{format:Ts,type:ui}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,M,d,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,M,f,y,null)}function S(E,_,M,P){let I=null,D=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)I=D;else if(I=M.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=I.uuid,G=_.uuid,C=l[F];C===void 0&&(C={},l[F]=C);let U=C[G];U===void 0&&(U=I.clone(),C[G]=U,_.addEventListener("dispose",T)),I=U}if(I.visible=_.visible,I.wireframe=_.wireframe,P===Gr?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:u[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,M.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=M}return I}function x(E,_,M,P,I,D){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Gr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let C=e.update(E),U=E.material;if(Array.isArray(U)){let q=C.groups;for(let H=0,le=q.length;H<le;H++){let R=q[H],O=U[R.materialIndex];if(O&&O.visible){let W=S(E,O,P,D);E.onBeforeShadow(i,E,_,M,C,W,R),i.renderBufferDirect(M,null,C,W,E,R),E.onAfterShadow(i,E,_,M,C,W,R)}}}else if(U.visible){let q=S(E,U,P,D);E.onBeforeShadow(i,E,_,M,C,q,null),i.renderBufferDirect(M,null,C,q,E,null),E.onAfterShadow(i,E,_,M,C,q,null)}}let G=E.children;for(let C=0,U=G.length;C<U;C++)x(G[C],_,M,P,I,D)}function T(E){E.target.removeEventListener("dispose",T);for(let M in l){let P=l[M],I=E.target.uuid;I in P&&(P[I].dispose(),delete P[I])}}}function tS(i,e){function t(){let N=!1,ne=new Pt,Z=null,Me=new Pt(0,0,0,0);return{setMask:function(ge){Z!==ge&&!N&&(i.colorMask(ge,ge,ge,ge),Z=ge)},setLocked:function(ge){N=ge},setClear:function(ge,xe,Ve,at,ue){ue===!0&&(ge*=at,xe*=at,Ve*=at),ne.set(ge,xe,Ve,at),Me.equals(ne)===!1&&(i.clearColor(ge,xe,Ve,at),Me.copy(ne))},reset:function(){N=!1,Z=null,Me.set(-1,0,0,0)}}}function n(){let N=!1,ne=!1,Z=null,Me=null,ge=null;return{setReversed:function(xe){if(ne!==xe){let Ve=e.get("EXT_clip_control");xe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ne=xe;let at=ge;ge=null,this.setClear(at)}},getReversed:function(){return ne},setTest:function(xe){xe?fe(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(xe){Z!==xe&&!N&&(i.depthMask(xe),Z=xe)},setFunc:function(xe){if(ne&&(xe=bp[xe]),Me!==xe){switch(xe){case rl:i.depthFunc(i.NEVER);break;case ol:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case ll:i.depthFunc(i.EQUAL);break;case cl:i.depthFunc(i.GEQUAL);break;case hl:i.depthFunc(i.GREATER);break;case ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=xe}},setLocked:function(xe){N=xe},setClear:function(xe){ge!==xe&&(ge=xe,ne&&(xe=1-xe),i.clearDepth(xe))},reset:function(){N=!1,Z=null,Me=null,ge=null,ne=!1}}}function s(){let N=!1,ne=null,Z=null,Me=null,ge=null,xe=null,Ve=null,at=null,ue=null;return{setTest:function(Ke){N||(Ke?fe(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Ke){ne!==Ke&&!N&&(i.stencilMask(Ke),ne=Ke)},setFunc:function(Ke,st,Ae){(Z!==Ke||Me!==st||ge!==Ae)&&(i.stencilFunc(Ke,st,Ae),Z=Ke,Me=st,ge=Ae)},setOp:function(Ke,st,Ae){(xe!==Ke||Ve!==st||at!==Ae)&&(i.stencilOp(Ke,st,Ae),xe=Ke,Ve=st,at=Ae)},setLocked:function(Ke){N=Ke},setClear:function(Ke){ue!==Ke&&(i.clearStencil(Ke),ue=Ke)},reset:function(){N=!1,ne=null,Z=null,Me=null,ge=null,xe=null,Ve=null,at=null,ue=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],y=null,m=!1,g=null,v=null,S=null,x=null,T=null,E=null,_=null,M=new $e(0,0,0),P=0,I=!1,D=null,F=null,G=null,C=null,U=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,le=0,R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(R)[1]),H=le>=1):R.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),H=le>=2);let O=null,W={},se=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),z=new Pt().fromArray(se),re=new Pt().fromArray(oe);function ce(N,ne,Z,Me){let ge=new Uint8Array(4),xe=i.createTexture();i.bindTexture(N,xe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Z;Ve++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ne+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return xe}let De={};De[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),o.setFunc(wr),Ne(!1),ve(eu),fe(i.CULL_FACE),pe(Ks);function fe(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Le(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function ot(N,ne){return d[N]!==ne?(i.bindFramebuffer(N,ne),d[N]=ne,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ue(N,ne){let Z=p,Me=!1;if(N){Z=f.get(ne),Z===void 0&&(Z=[],f.set(ne,Z));let ge=N.textures;if(Z.length!==ge.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ve=ge.length;xe<Ve;xe++)Z[xe]=i.COLOR_ATTACHMENT0+xe;Z.length=ge.length,Me=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,Me=!0);Me&&i.drawBuffers(Z)}function Ze(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let je={[Zs]:i.FUNC_ADD,[Xf]:i.FUNC_SUBTRACT,[qf]:i.FUNC_REVERSE_SUBTRACT};je[Yf]=i.MIN,je[$f]=i.MAX;let Q={[Kf]:i.ZERO,[Zf]:i.ONE,[Jf]:i.SRC_COLOR,[su]:i.SRC_ALPHA,[ip]:i.SRC_ALPHA_SATURATE,[tp]:i.DST_COLOR,[Qf]:i.DST_ALPHA,[jf]:i.ONE_MINUS_SRC_COLOR,[ru]:i.ONE_MINUS_SRC_ALPHA,[np]:i.ONE_MINUS_DST_COLOR,[ep]:i.ONE_MINUS_DST_ALPHA,[sp]:i.CONSTANT_COLOR,[rp]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[ap]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(N,ne,Z,Me,ge,xe,Ve,at,ue,Ke){if(N===Ks){m===!0&&(Le(i.BLEND),m=!1);return}if(m===!1&&(fe(i.BLEND),m=!0),N!==Wf){if(N!==g||Ke!==I){if((v!==Zs||T!==Zs)&&(i.blendEquation(i.FUNC_ADD),v=Zs,T=Zs),Ke)switch(N){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tu:i.blendFunc(i.ONE,i.ONE);break;case nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",N);break}else switch(N){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nu:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",N);break}S=null,x=null,E=null,_=null,M.set(0,0,0),P=0,g=N,I=Ke}return}ge=ge||ne,xe=xe||Z,Ve=Ve||Me,(ne!==v||ge!==T)&&(i.blendEquationSeparate(je[ne],je[ge]),v=ne,T=ge),(Z!==S||Me!==x||xe!==E||Ve!==_)&&(i.blendFuncSeparate(Q[Z],Q[Me],Q[xe],Q[Ve]),S=Z,x=Me,E=xe,_=Ve),(at.equals(M)===!1||ue!==P)&&(i.blendColor(at.r,at.g,at.b,ue),M.copy(at),P=ue),g=N,I=!1}function me(N,ne){N.side===Qn?Le(i.CULL_FACE):fe(i.CULL_FACE);let Z=N.side===gn;ne&&(Z=!Z),Ne(Z),N.blending===Vr&&N.transparent===!1?pe(Ks):pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Me=N.stencilWrite;a.setTest(Me),Me&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){D!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),D=N)}function ve(N){N!==Hf?(fe(i.CULL_FACE),N!==F&&(N===eu?i.cullFace(i.BACK):N===Gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),F=N}function nt(N){N!==G&&(H&&i.lineWidth(N),G=N)}function Ge(N,ne,Z){N?(fe(i.POLYGON_OFFSET_FILL),(C!==ne||U!==Z)&&(C=ne,U=Z,o.getReversed()&&(ne=-ne,Z=-Z),i.polygonOffset(ne,Z))):Le(i.POLYGON_OFFSET_FILL)}function pt(N){N?fe(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function mt(N){N===void 0&&(N=i.TEXTURE0+q-1),O!==N&&(i.activeTexture(N),O=N)}function xt(N,ne,Z){Z===void 0&&(O===null?Z=i.TEXTURE0+q-1:Z=O);let Me=W[Z];Me===void 0&&(Me={type:void 0,texture:void 0},W[Z]=Me),(Me.type!==N||Me.texture!==ne)&&(O!==Z&&(i.activeTexture(Z),O=Z),i.bindTexture(N,ne||De[N]),Me.type=N,Me.texture=ne)}function k(){let N=W[O];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function kt(){try{i.compressedTexImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function lt(){try{i.compressedTexImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function At(){try{i.texSubImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function Ee(){try{i.texSubImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function It(){try{i.compressedTexSubImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function Qe(){try{i.texStorage2D(...arguments)}catch(N){et("WebGLState:",N)}}function A(){try{i.texStorage3D(...arguments)}catch(N){et("WebGLState:",N)}}function b(){try{i.texImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function V(){try{i.texImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function he(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function ie(N,ne){u[N]!==ne&&(i.pixelStorei(N,ne),u[N]=ne)}function _e(N){z.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),z.copy(N))}function be(N){re.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),re.copy(N))}function ee(N,ne){let Z=l.get(ne);Z===void 0&&(Z=new WeakMap,l.set(ne,Z));let Me=Z.get(N);Me===void 0&&(Me=i.getUniformBlockIndex(ne,N.name),i.uniformBlockBinding(ne,Me,Me),Z.set(N,Me))}function te(N,ne,Z){let ge=l.get(ne).get(N);c[ge]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,Z),c[ge]=Z)}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},O=null,W={},d={},c={},f=new WeakMap,p=[],y=null,m=!1,g=null,v=null,S=null,x=null,T=null,E=null,_=null,M=new $e(0,0,0),P=0,I=!1,D=null,F=null,G=null,C=null,U=null,z.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Le,bindFramebuffer:ot,drawBuffers:Ue,useProgram:Ze,setBlending:pe,setMaterial:me,setFlipSided:Ne,setCullFace:ve,setLineWidth:nt,setPolygonOffset:Ge,setScissorTest:pt,activeTexture:mt,bindTexture:xt,unbindTexture:k,compressedTexImage2D:kt,compressedTexImage3D:lt,texImage2D:b,texImage3D:V,pixelStorei:ie,getParameter:he,updateUBOMapping:ee,uniformBlockBinding:te,texStorage2D:Qe,texStorage3D:A,texSubImage2D:At,texSubImage3D:Ee,compressedTexSubImage2D:It,compressedTexSubImage3D:ze,scissor:_e,viewport:be,reset:Se}}function nS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,y=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return m?new OffscreenCanvas(A,b):Rr("canvas")}function v(A,b,V){let he=1,ie=Qe(A);if((ie.width>V||ie.height>V)&&(he=V/Math.max(ie.width,ie.height)),he<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let _e=Math.floor(he*ie.width),be=Math.floor(he*ie.height);d===void 0&&(d=g(_e,be));let ee=b?g(_e,be):d;return ee.width=_e,ee.height=be,ee.getContext("2d").drawImage(A,0,0,_e,be),Ye("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+_e+"x"+be+")."),ee}else return"data"in A&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function S(A){return A.generateMipmaps}function x(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,b,V,he,ie,_e=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let be;he&&(be=e.get("EXT_texture_norm16"),be||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=b;if(b===i.RED&&(V===i.FLOAT&&(ee=i.R32F),V===i.HALF_FLOAT&&(ee=i.R16F),V===i.UNSIGNED_BYTE&&(ee=i.R8),V===i.UNSIGNED_SHORT&&be&&(ee=be.R16_EXT),V===i.SHORT&&be&&(ee=be.R16_SNORM_EXT)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.R8UI),V===i.UNSIGNED_SHORT&&(ee=i.R16UI),V===i.UNSIGNED_INT&&(ee=i.R32UI),V===i.BYTE&&(ee=i.R8I),V===i.SHORT&&(ee=i.R16I),V===i.INT&&(ee=i.R32I)),b===i.RG&&(V===i.FLOAT&&(ee=i.RG32F),V===i.HALF_FLOAT&&(ee=i.RG16F),V===i.UNSIGNED_BYTE&&(ee=i.RG8),V===i.UNSIGNED_SHORT&&be&&(ee=be.RG16_EXT),V===i.SHORT&&be&&(ee=be.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RG8UI),V===i.UNSIGNED_SHORT&&(ee=i.RG16UI),V===i.UNSIGNED_INT&&(ee=i.RG32UI),V===i.BYTE&&(ee=i.RG8I),V===i.SHORT&&(ee=i.RG16I),V===i.INT&&(ee=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),V===i.UNSIGNED_INT&&(ee=i.RGB32UI),V===i.BYTE&&(ee=i.RGB8I),V===i.SHORT&&(ee=i.RGB16I),V===i.INT&&(ee=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),V===i.UNSIGNED_INT&&(ee=i.RGBA32UI),V===i.BYTE&&(ee=i.RGBA8I),V===i.SHORT&&(ee=i.RGBA16I),V===i.INT&&(ee=i.RGBA32I)),b===i.RGB&&(V===i.UNSIGNED_SHORT&&be&&(ee=be.RGB16_EXT),V===i.SHORT&&be&&(ee=be.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),b===i.RGBA){let te=_e?So:ht.getTransfer(ie);V===i.FLOAT&&(ee=i.RGBA32F),V===i.HALF_FLOAT&&(ee=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ee=te===Rt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&be&&(ee=be.RGBA16_EXT),V===i.SHORT&&be&&(ee=be.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(A,b){let V;return A?b===null||b===hi||b===Qs?V=i.DEPTH24_STENCIL8:b===qn?V=i.DEPTH32F_STENCIL8:b===qr&&(V=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hi||b===Qs?V=i.DEPTH_COMPONENT24:b===qn?V=i.DEPTH_COMPONENT32F:b===qr&&(V=i.DEPTH_COMPONENT16),V}function M(A,b){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==Vt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function P(A){let b=new WeakRef(A);n.get(A).__ref=b,p.add(b),y.register(A,b,b)}function I(A){let b=n.get(A).__ref;b!==void 0&&(p.delete(b),y.unregister(b))}function D(A){G(A.target)}function F(A){C(A.target)}function G(A){A.removeEventListener("dispose",D),I(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function C(A){A.removeEventListener("dispose",F),I(A),le(A)}function U(){for(let A of p){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):G(b))}p.clear(),u.clear()}function q(A){let b=n.get(A);if(b.__webglInit===void 0)return;let V=A.source,he=f.get(V);if(he){let ie=he[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&H(A),Object.keys(he).length===0&&f.delete(V)}n.remove(A)}function H(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let V=A.source,he=f.get(V);delete he[b.__cacheKey],o.memory.textures--}function le(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let V=A.depthTexture;if(V&&V.renderTarget===A&&G(V),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let _e=0;_e<b.__webglFramebuffer[ie].length;_e++)i.deleteFramebuffer(b.__webglFramebuffer[ie][_e]);else i.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)i.deleteFramebuffer(b.__webglFramebuffer[ie]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let he=A.textures;for(let ie=0,_e=he.length;ie<_e;ie++){let be=n.get(he[ie]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(he[ie])}n.remove(A)}let R=0;function O(){R=0}function W(){return R}function se(A){R=A}function oe(){let A=R;return A>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function z(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function re(A,b){let V=n.get(A);if(A.isVideoTexture&&It(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let he=A.image;if(he===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,A,b);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function ce(A,b){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){me(V,A,b);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function De(A,b){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){me(V,A,b);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function fe(A,b){let V=n.get(A);if(A.version>0&&V.__version!==A.version){Ne(V,A,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}let Le={[Jn]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},ot={[Zt]:i.NEAREST,[Fl]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},Ue={[mp]:i.NEVER,[Mu]:i.ALWAYS,[gp]:i.LESS,[vu]:i.LEQUAL,[_p]:i.EQUAL,[Su]:i.GEQUAL,[xp]:i.GREATER,[yp]:i.NOTEQUAL};function Ze(A,b){if(b.type===qn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Vt||b.magFilter===Xr||b.magFilter===js||b.magFilter===Sn||b.minFilter===Vt||b.minFilter===Xr||b.minFilter===js||b.minFilter===Sn)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Le[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Le[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Le[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ot[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ot[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zt||b.minFilter!==js&&b.minFilter!==Sn||b.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function je(A,b){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",D),P(b));let he=b.source,ie=f.get(he);ie===void 0&&(ie={},f.set(he,ie));let _e=z(b);if(_e!==A.__cacheKey){ie[_e]===void 0&&(ie[_e]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ie[_e].usedTimes++;let be=ie[A.__cacheKey];be!==void 0&&(ie[A.__cacheKey].usedTimes--,be.usedTimes===0&&H(b)),A.__cacheKey=_e,A.__webglTexture=ie[_e].texture}return V}function Q(A,b,V){return Math.floor(Math.floor(A/V)/b)}function pe(A,b,V,he){let _e=A.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,V,he,b.data);else{_e.sort((N,ne)=>N.start-ne.start);let be=0;for(let N=1;N<_e.length;N++){let ne=_e[be],Z=_e[N],Me=ne.start+ne.count,ge=Q(Z.start,b.width,4),xe=Q(ne.start,b.width,4);Z.start<=Me+1&&ge===xe&&Q(Z.start+Z.count-1,b.width,4)===ge?ne.count=Math.max(ne.count,Z.start+Z.count-ne.start):(++be,_e[be]=Z)}_e.length=be+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let N=0,ne=_e.length;N<ne;N++){let Z=_e[N],Me=Math.floor(Z.start/4),ge=Math.ceil(Z.count/4),xe=Me%b.width,Ve=Math.floor(Me/b.width),at=ge,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(i.TEXTURE_2D,0,xe,Ve,at,ue,V,he,b.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function me(A,b,V){let he=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=i.TEXTURE_3D);let ie=je(A,b),_e=b.source;t.bindTexture(he,A.__webglTexture,i.TEXTURE0+V);let be=n.get(_e);if(_e.version!==be.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ue=ht.getPrimaries(ht.workingColorSpace),Ke=b.colorSpace===di?null:ht.getPrimaries(b.colorSpace),st=b.colorSpace===di||ue===Ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let te=v(b.image,!1,s.maxTextureSize);te=ze(b,te);let Se=r.convert(b.format,b.colorSpace),N=r.convert(b.type),ne=E(b.internalFormat,Se,N,b.normalized,b.colorSpace,b.isVideoTexture);Ze(he,b);let Z,Me=b.mipmaps,ge=b.isVideoTexture!==!0,xe=be.__version===void 0||ie===!0,Ve=_e.dataReady,at=M(b,te);if(b.isDepthTexture)ne=_(b.format===ns,b.type),xe&&(ge?t.texStorage2D(i.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,Se,N,null));else if(b.isDataTexture)if(Me.length>0){ge&&xe&&t.texStorage2D(i.TEXTURE_2D,at,ne,Me[0].width,Me[0].height);for(let ue=0,Ke=Me.length;ue<Ke;ue++)Z=Me[ue],ge?Ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Z.width,Z.height,Se,N,Z.data):t.texImage2D(i.TEXTURE_2D,ue,ne,Z.width,Z.height,0,Se,N,Z.data);b.generateMipmaps=!1}else ge?(xe&&t.texStorage2D(i.TEXTURE_2D,at,ne,te.width,te.height),Ve&&pe(b,te,Se,N)):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,Se,N,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ge&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,at,ne,Me[0].width,Me[0].height,te.depth);for(let ue=0,Ke=Me.length;ue<Ke;ue++)if(Z=Me[ue],b.format!==Mn)if(Se!==null)if(ge){if(Ve)if(b.layerUpdates.size>0){let st=Nu(Z.width,Z.height,b.format,b.type);for(let Ae of b.layerUpdates){let St=Z.data.subarray(Ae*st/Z.data.BYTES_PER_ELEMENT,(Ae+1)*st/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Ae,Z.width,Z.height,1,Se,St)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Z.width,Z.height,te.depth,Se,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ne,Z.width,Z.height,te.depth,0,Z.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Z.width,Z.height,te.depth,Se,N,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ne,Z.width,Z.height,te.depth,0,Se,N,Z.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ge&&xe&&t.texStorage2D(i.TEXTURE_2D,at,ne,Me[0].width,Me[0].height);for(let ue=0,Ke=Me.length;ue<Ke;ue++)Z=Me[ue],b.format!==Mn?Se!==null?ge?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Z.width,Z.height,Se,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ne,Z.width,Z.height,0,Z.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Z.width,Z.height,Se,N,Z.data):t.texImage2D(i.TEXTURE_2D,ue,ne,Z.width,Z.height,0,Se,N,Z.data)}else if(b.isDataArrayTexture)if(ge){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,at,ne,te.width,te.height,te.depth),Ve)if(b.layerUpdates.size>0){let ue=Nu(te.width,te.height,b.format,b.type);for(let Ke of b.layerUpdates){let st=te.data.subarray(Ke*ue/te.data.BYTES_PER_ELEMENT,(Ke+1)*ue/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ke,te.width,te.height,1,Se,N,st)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Se,N,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,Se,N,te.data);else if(b.isData3DTexture)ge?(xe&&t.texStorage3D(i.TEXTURE_3D,at,ne,te.width,te.height,te.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Se,N,te.data)):t.texImage3D(i.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,Se,N,te.data);else if(b.isFramebufferTexture){if(xe)if(ge)t.texStorage2D(i.TEXTURE_2D,at,ne,te.width,te.height);else{let ue=te.width,Ke=te.height;for(let st=0;st<at;st++)t.texImage2D(i.TEXTURE_2D,st,ne,ue,Ke,0,Se,N,null),ue>>=1,Ke>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),te.parentNode!==ue){ue.appendChild(te),u.add(b),ue.onpaint=Ke=>{let st=Ke.changedElements;for(let Ae of u)st.includes(Ae.image)&&(Ae.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let st=i.RGBA,Ae=i.RGBA,St=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,st,Ae,St,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(ge&&xe){let ue=Qe(Me[0]);t.texStorage2D(i.TEXTURE_2D,at,ne,ue.width,ue.height)}for(let ue=0,Ke=Me.length;ue<Ke;ue++)Z=Me[ue],ge?Ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Se,N,Z):t.texImage2D(i.TEXTURE_2D,ue,ne,Se,N,Z);b.generateMipmaps=!1}else if(ge){if(xe){let ue=Qe(te);t.texStorage2D(i.TEXTURE_2D,at,ne,ue.width,ue.height)}Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,N,te)}else t.texImage2D(i.TEXTURE_2D,0,ne,Se,N,te);S(b)&&b.mipmapsAutoUpdate===!0&&x(he),be.__version=_e.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ne(A,b,V){if(b.image.length!==6)return;let he=je(A,b),ie=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let _e=n.get(ie);if(ie.version!==_e.__version||he===!0){t.activeTexture(i.TEXTURE0+V);let be=ht.getPrimaries(ht.workingColorSpace),ee=b.colorSpace===di?null:ht.getPrimaries(b.colorSpace),te=b.colorSpace===di||be===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Se=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,ne=[];for(let Ae=0;Ae<6;Ae++)!Se&&!N?ne[Ae]=v(b.image[Ae],!0,s.maxCubemapSize):ne[Ae]=N?b.image[Ae].image:b.image[Ae],ne[Ae]=ze(b,ne[Ae]);let Z=ne[0],Me=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),xe=E(b.internalFormat,Me,ge,b.normalized,b.colorSpace),Ve=b.isVideoTexture!==!0,at=_e.__version===void 0||he===!0,ue=ie.dataReady,Ke=M(b,Z);Ze(i.TEXTURE_CUBE_MAP,b);let st;if(b.isDepthTexture){if(xe=_(b.format===ns,b.type),at)if(Ve)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,xe,Z.width,Z.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,xe,Z.width,Z.height,0,Me,ge,null)}else if(Se){Ve&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,xe,Z.width,Z.height);for(let Ae=0;Ae<6;Ae++){st=ne[Ae].mipmaps;for(let St=0;St<st.length;St++){let qt=st[St];b.format!==Mn?Me!==null?Ve?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St,0,0,qt.width,qt.height,Me,qt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St,xe,qt.width,qt.height,0,qt.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St,0,0,qt.width,qt.height,Me,ge,qt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St,xe,qt.width,qt.height,0,Me,ge,qt.data)}}}else{if(st=b.mipmaps,Ve&&at){st.length>0&&Ke++;let Ae=Qe(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,xe,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(N){Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ne[Ae].width,ne[Ae].height,Me,ge,ne[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,xe,ne[Ae].width,ne[Ae].height,0,Me,ge,ne[Ae].data);for(let St=0;St<st.length;St++){let Yn=st[St].image[Ae].image;Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St+1,0,0,Yn.width,Yn.height,Me,ge,Yn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St+1,xe,Yn.width,Yn.height,0,Me,ge,Yn.data)}}else{Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Me,ge,ne[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,xe,Me,ge,ne[Ae]);for(let St=0;St<st.length;St++){let qt=st[St];Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St+1,0,0,Me,ge,qt.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,St+1,xe,Me,ge,qt.image[Ae])}}}S(b)&&b.mipmapsAutoUpdate===!0&&x(i.TEXTURE_CUBE_MAP),_e.__version=ie.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ve(A,b,V,he,ie,_e){let be=r.convert(V.format,V.colorSpace),ee=r.convert(V.type),te=E(V.internalFormat,be,ee,V.normalized,V.colorSpace),Se=n.get(b),N=n.get(V);if(N.__renderTarget=b,!Se.__hasExternalTextures){let ne=Math.max(1,b.width>>_e),Z=Math.max(1,b.height>>_e);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,_e,te,ne,Z,b.depth,0,be,ee,null):t.texImage2D(ie,_e,te,ne,Z,0,be,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ee(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,ie,N.__webglTexture,0,At(b)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,ie,N.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(A,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let he=b.depthTexture,ie=he&&he.isDepthTexture?he.type:null,_e=_(b.stencilBuffer,ie),be=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ee(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(b),_e,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(b),_e,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,_e,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,A)}else{let he=b.textures;for(let ie=0;ie<he.length;ie++){let _e=he[ie],be=r.convert(_e.format,_e.colorSpace),ee=r.convert(_e.type),te=E(_e.internalFormat,be,ee,_e.normalized,_e.colorSpace);Ee(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(b),te,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(b),te,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,te,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(A,b,V){let he=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(b.depthTexture);ie.__renderTarget=b;let _e=he?b.depthTexture.image[0]:b.depthTexture.image;(!ie.__webglTexture||_e.width!==b.width||_e.height!==b.height)&&(_e.width=b.width,_e.height=b.height,b.depthTexture.needsUpdate=!0),he?fe(b.depthTexture,0):re(b.depthTexture,0);let be=ie.__webglTexture,ee=At(b),te=he?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,Se=b.depthTexture.format===ns?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Xi)Ee(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,te,be,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,Se,te,be,0);else if(b.depthTexture.format===ns)Ee(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,te,be,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,Se,te,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(A){let b=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let he=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){let ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",ie)};he.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=he}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(V)for(let he=0;he<6;he++)Ge(b.__webglFramebuffer[he],A,he);else A.texture.mipmaps.length>0?Ge(b.__webglFramebuffer[0],A,0):Ge(b.__webglFramebuffer,A,0);else if(V){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=i.createRenderbuffer(),nt(b.__webglDepthbuffer[he],A,!1);else{let ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=b.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,_e)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),nt(b.__webglDepthbuffer,A,!1);else{let ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(A,b,V){let he=n.get(A);b!==void 0&&ve(he.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&pt(A)}function xt(A){let b=A.texture,V=n.get(A),he=n.get(b);A.addEventListener("dispose",F),P(A);let ie=A.textures,_e=A.isWebGLCubeRenderTarget===!0,be=ie.length>1;if(be||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=b.version,o.memory.textures++),_e){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(b.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let te=0;te<b.mipmaps.length;te++)V.__webglFramebuffer[ee][te]=i.createFramebuffer()}else V.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(b.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<b.mipmaps.length;ee++)V.__webglFramebuffer[ee]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(be)for(let ee=0,te=ie.length;ee<te;ee++){let Se=n.get(ie[ee]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ee(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<ie.length;ee++){let te=ie[ee];V.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);let Se=r.convert(te.format,te.colorSpace),N=r.convert(te.type),ne=E(te.internalFormat,Se,N,te.normalized,te.colorSpace,A.isXRRenderTarget===!0),Z=At(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,ne,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,b);for(let ee=0;ee<6;ee++)if(b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)ve(V.__webglFramebuffer[ee][te],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,te);else ve(V.__webglFramebuffer[ee],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);S(b)?x(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(be){for(let ee=0,te=ie.length;ee<te;ee++){let Se=ie[ee],N=n.get(Se),ne=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),Ze(ne,Se),ve(V.__webglFramebuffer,A,Se,i.COLOR_ATTACHMENT0+ee,ne,0),S(Se)&&x(ne)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,he.__webglTexture),Ze(ee,b),b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)ve(V.__webglFramebuffer[te],A,b,i.COLOR_ATTACHMENT0,ee,te);else ve(V.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ee,0);S(b)?x(ee):b.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&pt(A)}function k(A){let b=A.textures;for(let V=0,he=b.length;V<he;V++){let ie=b[V];if(S(ie)&&ie.mipmapsAutoUpdate===!0){let _e=T(A),be=n.get(ie).__webglTexture;t.bindTexture(_e,be),x(_e),t.unbindTexture()}}}let kt=[];function lt(A){if(A.samples>0){if(Ee(A)===!1){let b=A.textures,V=A.width,he=A.height,ie=i.COLOR_BUFFER_BIT,_e=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(A),ee=b.length>1;if(ee)for(let Se=0;Se<b.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Se=0;Se<b.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);let N=n.get(b[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,V,he,0,0,V,he,ie,i.NEAREST),c===!0&&(kt.length=0,kt.push(i.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&kt.push(_e),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let Se=0;Se<b.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);let N=n.get(b[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function At(A){return Math.min(s.maxSamples,A.samples)}function Ee(A){let b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function It(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function ze(A,b){let V=A.colorSpace,he=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==mn&&V!==di&&(ht.getTransfer(V)===Rt?(he!==Mn||ie!==Fn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",V)),b}function Qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=oe,this.resetTextureUnits=O,this.getTextureUnits=W,this.setTextureUnits=se,this.setTexture2D=re,this.setTexture2DArray=ce,this.setTexture3D=De,this.setTextureCube=fe,this.rebindTextures=mt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ee,this.dispose=U}function iS(i,e){function t(n,s=di){let r,o=ht.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fu)return i.BYTE;if(n===pu)return i.SHORT;if(n===qr)return i.UNSIGNED_SHORT;if(n===Bl)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===ui)return i.HALF_FLOAT;if(n===_u)return i.ALPHA;if(n===xu)return i.RGB;if(n===Mn)return i.RGBA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===Gl)return i.RED_INTEGER;if(n===Ts)return i.RG;if(n===Vl)return i.RG_INTEGER;if(n===Wl)return i.RGBA_INTEGER;if(n===sa||n===ra||n===oa||n===aa)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xl||n===ql||n===Yl||n===$l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===Zl||n===Jl||n===jl||n===Ql||n===la||n===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===Zl)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return r.COMPRESSED_R11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===la)return r.COMPRESSED_RG11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ac)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mc||n===gc||n===_c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mc)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===yc||n===ca||n===vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var sS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rS=`
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

}`,Gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Do(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wi({vertexShader:sS,fragmentShader:rS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vu=class extends ai{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,y=typeof XRWebGLBinding<"u",m=new Gu,g={},v=t.getContextAttributes(),S=null,x=null,T=[],E=[],_=new ae,M=null,P=null,I=new sn;I.viewport=new Pt;let D=new sn;D.viewport=new Pt;let F=[I,D],G=new Nl,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let re=T[z];return re===void 0&&(re=new Lr,T[z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(z){let re=T[z];return re===void 0&&(re=new Lr,T[z]=re),re.getGripSpace()},this.getHand=function(z){let re=T[z];return re===void 0&&(re=new Lr,T[z]=re),re.getHandSpace()};function q(z){let re=E.indexOf(z.inputSource);if(re===-1)return;let ce=T[re];ce!==void 0&&(ce.update(z.inputSource,z.frame,l||o),ce.dispatchEvent({type:z.type,data:z.inputSource}))}function H(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",le);for(let z=0;z<T.length;z++){let re=E[z];re!==null&&(E[z]=null,T[z].disconnect(re))}C=null,U=null,m.reset();for(let z in g)delete g[z];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,x=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),P!==null){let z=P.camera;z.fov=P.fov,z.zoom=P.zoom,z.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",H),s.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,De=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?ns:Xi,De=v.stencil?Qs:hi);let Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Vn(d.textureWidth,d.textureHeight,{format:Mn,type:Fn,depthTexture:new $i(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Vn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function le(z){for(let re=0;re<z.removed.length;re++){let ce=z.removed[re],De=E.indexOf(ce);De>=0&&(E[De]=null,T[De].disconnect(ce))}for(let re=0;re<z.added.length;re++){let ce=z.added[re],De=E.indexOf(ce);if(De===-1){for(let Le=0;Le<T.length;Le++)if(Le>=E.length){E.push(ce),De=Le;break}else if(E[Le]===null){E[Le]=ce,De=Le;break}if(De===-1)break}let fe=T[De];fe&&fe.connect(ce)}}function R(z,re){re===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(re.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let re=z.near,ce=z.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),G.near=D.near=I.near=re,G.far=D.far=I.far=ce,(C!==G.near||U!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),C=G.near,U=G.far),G.layers.mask=z.layers.mask|6,I.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let De=z.parent,fe=G.cameras;R(G,De);for(let Le=0;Le<fe.length;Le++)R(fe[Le],De);G.projectionMatrix.copy(I.projectionMatrix),G.projectionMatrixInverse.copy(I.projectionMatrixInverse),P===null&&z.isPerspectiveCamera&&(P={camera:z,fov:z.fov,zoom:z.zoom}),O(z,G,De)};function O(z,re,ce){ce===null?z.matrix.copy(re.matrixWorld):(z.matrix.copy(ce.matrixWorld),z.matrix.invert(),z.matrix.multiply(re.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(re.projectionMatrix),z.projectionMatrixInverse.copy(re.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=zs*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(z){return g[z]};let W=null;function se(z,re){if(h=re.getViewerPose(l||o),p=re,h!==null){let ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let De=!1;ce.length!==G.cameras.length&&(G.cameras.length=0,De=!0);for(let Ue=0;Ue<ce.length;Ue++){let Ze=ce[Ue],je=null;if(f!==null)je=f.getViewport(Ze);else{let pe=u.getViewSubImage(d,Ze);je=pe.viewport,Ue===0&&(e.setRenderTargetTextures(x,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(x))}let Q=F[Ue];Q===void 0&&(Q=new sn,Q.layers.enable(Ue),Q.viewport=new Pt,F[Ue]=Q),Q.matrix.fromArray(Ze.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ze.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(je.x,je.y,je.width,je.height),Ue===0&&(G.matrix.copy(Q.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),De===!0&&G.cameras.push(Q)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let Ue=u.getDepthInformation(ce[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,s.renderState)}if(fe&&fe.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let Ue=0;Ue<ce.length;Ue++){let Ze=ce[Ue].camera;if(Ze){let je=g[Ze];je||(je=new Do,g[Ze]=je);let Q=u.getCameraImage(Ze);je.sourceTexture=Q}}}}for(let ce=0;ce<T.length;ce++){let De=E[ce],fe=T[ce];De!==null&&fe!==void 0&&fe.update(De,re,l||o)}W&&W(z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),p=null}let oe=new Qp;oe.setAnimationLoop(se),this.setAnimationLoop=function(z){W=z},this.dispose=function(){}}},oS=new tt,cm=new it;cm.set(-1,0,0,0,1,0,0,0,1);function aS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Iu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,S,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,v,S):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===gn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===gn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(oS.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lS(i,e,t,n){let s={},r={};function o(v,S){let x=S.program;n.uniformBlockBinding(v,x,s[v.id])}function a(v,S){let x=s[v.id];x===void 0&&(p(v),x=c(v),s[v.id]=x,v.addEventListener("dispose",m));let T=S.program;n.updateUBOMapping(v,T);let E=e.render.frame;r[v.id]!==E&&(l(v),r[v.id]=E)}function c(v){let S=i.createBuffer(),x=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,x,T),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function l(v){let S=s[v.id],x=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,_=x.length;E<_;E++){let M=x[E];if(Array.isArray(M))for(let P=0,I=M.length;P<I;P++)h(M[P],E,P,T);else h(M,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,S,x,T){if(d(v,S,x,T)===!0){let E=v.__offset,_=v.value;if(Array.isArray(_)){let M=0;for(let P=0;P<_.length;P++){let I=_[P],D=y(I,!0);u(I,v.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,v.__data)}}function u(v,S,x){typeof v=="number"||typeof v=="boolean"?S[x]=v:v.isMatrix3?(S[x]=v.elements[0],S[x+1]=v.elements[1],S[x+2]=v.elements[2],S[x+3]=0,S[x+4]=v.elements[3],S[x+5]=v.elements[4],S[x+6]=v.elements[5],S[x+7]=0,S[x+8]=v.elements[6],S[x+9]=v.elements[7],S[x+10]=v.elements[8],S[x+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-x),x):v.toArray(S,x)}function d(v,S,x,T){let E=v.value,_=S+"_"+x;if(Array.isArray(E)){T[_]===void 0&&(T[_]=[]);let M=T[_],P=!1;for(let I=0;I<E.length;I++)f(E[I],M,I)===!0&&(P=!0);return P}return f(E,T,_)}function f(v,S,x){if(S[x]===void 0)return typeof v=="number"||typeof v=="boolean"?S[x]=v:ArrayBuffer.isView(v)?S[x]=v.slice():S[x]=v.clone(),!0;{let T=S[x];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return S[x]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let S=v.uniforms,x=0,T=16;for(let _=0,M=S.length;_<M;_++){let P=Array.isArray(S[_])?S[_]:[S[_]];for(let I=0,D=P.length;I<D;I++){let F=P[I],G=Array.isArray(F.value)?F.value:[F.value],C=Array.isArray(S[_])||Array.isArray(F.value),U=x;for(let H=0,le=G.length;H<le;H++){let R=G[H],O=y(R,C),W=x%T,se=W%O.boundary,oe=W+se;x+=se,oe!==0&&T-oe<O.storage&&(x+=T-oe),H===0&&(U=x),x+=O.storage}let q=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new q((x-U)/Float32Array.BYTES_PER_ELEMENT),F.__offset=U}}let E=x%T;return E>0&&(x+=T-E),v.__size=x,v.__cache={},this}function y(v,S){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=16,x.storage=48):v.isMatrix4?(x.boundary=16,x.storage=64):v.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(x.boundary=16,x.storage=v.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function m(v){let S=v.target;S.removeEventListener("dispose",m),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var cS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function hS(){return Ci===null&&(Ci=new bi(cS,16,16,Ts,ui),Ci.name="DFG_LUT",Ci.minFilter=Vt,Ci.magFilter=Vt,Ci.wrapS=Kn,Ci.wrapT=Kn,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var Ec=class{constructor(e={}){let{canvas:t=vp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Fn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let y=f,m=new Set([Wl,Vl,Gl]),g=new Set([Fn,hi,qr,Qs,kl,zl]),v=new Uint32Array(4),S=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},T=null,E=null,_=[],M=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,F=null,G=null,C=null,U=null;this._outputColorSpace=Lt;let q=0,H=0,le=null,R=-1,O=null,W=new Pt,se=new Pt,oe=null,z=new $e(0),re=0,ce=t.width,De=t.height,fe=1,Le=null,ot=null,Ue=new Pt(0,0,ce,De),Ze=new Pt(0,0,ce,De),je=!1,Q=new Ss,pe=new ml,me=!1,Ne=!1,ve=new tt,nt=new L,Ge=new Pt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function xt(){return le===null?fe:1}let k=n;function kt(w,B){return t.getContext(w,B)}let lt,At,Ee,It,ze,Qe,A,b,V,he,ie,_e,be,ee,te,Se,N,ne,Z,Me,ge,xe,Ve;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),k===null){let B="webgl2";if(k=kt(B,w),k===null)throw kt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(w){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),et("WebGLRenderer: "+w.message),w}function at(){lt=new Sy(k),lt.init(),ge=new iS(k,lt),At=new hy(k,lt,e,ge),Ee=new tS(k,lt),At.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),G=k.createFramebuffer(),C=k.createFramebuffer(),U=k.createFramebuffer(),It=new Ey(k),ze=new Hv,Qe=new nS(k,lt,Ee,ze,At,ge,It),A=new vy(I),b=new T0(k),xe=new ly(k,b),V=new My(k,b,It,xe),he=new Ty(k,V,b,xe,It),ne=new wy(k,At,Qe),te=new uy(ze),ie=new zv(I,A,lt,At,xe,te),_e=new aS(I,ze),be=new Vv,ee=new Kv(lt),N=new ay(I,A,Ee,he,p,c),Se=new eS(I,he,At),Ve=new lS(k,It,At,Ee),Z=new cy(k,lt,It),Me=new by(k,lt,It),It.programs=ie.programs,I.capabilities=At,I.extensions=lt,I.properties=ze,I.renderLists=be,I.shadowMap=Se,I.state=Ee,I.info=It}y!==Fn&&(P=new Ry(y,t.width,t.height,a,s,r));let ue=new Vu(I,k);this.xr=ue,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=lt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=lt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(w){w!==void 0&&(fe=w,this.setSize(ce,De,!1))},this.getSize=function(w){return w.set(ce,De)},this.setSize=function(w,B,K=!0){if(ue.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=w,De=B,t.width=Math.floor(w*fe),t.height=Math.floor(B*fe),K===!0&&(t.style.width=w+"px",t.style.height=B+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(ce*fe,De*fe).floor()},this.setDrawingBufferSize=function(w,B,K){ce=w,De=B,fe=K,t.width=Math.floor(w*K),t.height=Math.floor(B*K),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(y===Fn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(W)},this.getViewport=function(w){return w.copy(Ue)},this.setViewport=function(w,B,K,X){w.isVector4?Ue.set(w.x,w.y,w.z,w.w):Ue.set(w,B,K,X),Ee.viewport(W.copy(Ue).multiplyScalar(xt()).round())},this.getScissor=function(w){return w.copy(Ze)},this.setScissor=function(w,B,K,X){w.isVector4?Ze.set(w.x,w.y,w.z,w.w):Ze.set(w,B,K,X),Ee.scissor(se.copy(Ze).multiplyScalar(xt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){Ee.setScissorTest(je=w)},this.setOpaqueSort=function(w){Le=w},this.setTransparentSort=function(w){ot=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,K=!0){let X=0;if(w){let Y=!1;if(le!==null){let Te=le.texture.format;Y=m.has(Te)}if(Y){let Te=le.texture.type,Fe=g.has(Te),we=N.getClearColor(),Pe=N.getClearAlpha(),qe=we.r,rt=we.g,yt=we.b;Fe?(v[0]=qe,v[1]=rt,v[2]=yt,v[3]=Pe,k.clearBufferuiv(k.COLOR,0,v)):(S[0]=qe,S[1]=rt,S[2]=yt,S[3]=Pe,k.clearBufferiv(k.COLOR,0,S))}else X|=k.COLOR_BUFFER_BIT}B&&(X|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&k.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),F=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),N.dispose(),be.dispose(),ee.dispose(),Qe.dispose(),ze.dispose(),A.dispose(),he.dispose(),V.dispose(),xe.dispose(),Ve.dispose(),ie.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",J),ue.removeEventListener("sessionend",de),ye.stop()};function Ke(w){w.preventDefault(),Mo("WebGLRenderer: Context Lost."),D=!0}function st(){Mo("WebGLRenderer: Context Restored."),D=!1;let w=It.autoReset,B=Se.enabled,K=Se.autoUpdate,X=Se.needsUpdate,Y=Se.type;at(),It.autoReset=w,Se.enabled=B,Se.autoUpdate=K,Se.needsUpdate=X,Se.type=Y}function Ae(w){et("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function St(w){let B=w.target;B.removeEventListener("dispose",St),qt(B)}function qt(w){Yn(w),ze.remove(w)}function Yn(w){let B=ze.get(w).programs;B!==void 0&&(B.forEach(function(K){ie.releaseProgram(K)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,K,X,Y,Te){B===null&&(B=pt);let Fe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,we=Ui(w,B,K,X,Y);Ee.setMaterial(X,Fe);let Pe=K.index,qe=1;if(X.wireframe===!0){if(Pe=V.getWireframeAttribute(K),Pe===void 0)return;qe=2}let rt=K.drawRange,yt=K.attributes.position,Be=rt.start*qe,vt=(rt.start+rt.count)*qe;Te!==null&&(Be=Math.max(Be,Te.start*qe),vt=Math.min(vt,(Te.start+Te.count)*qe)),Pe!==null?(Be=Math.max(Be,0),vt=Math.min(vt,Pe.count)):yt!=null&&(Be=Math.max(Be,0),vt=Math.min(vt,yt.count));let Jt=vt-Be;if(Jt<0||Jt===1/0)return;xe.setup(Y,X,we,K,Pe);let Ot,Nt=Z;if(Pe!==null&&(Ot=b.get(Pe),Nt=Me,Nt.setIndex(Ot)),Y.isMesh)X.wireframe===!0?(Ee.setLineWidth(X.wireframeLinewidth*xt()),Nt.setMode(k.LINES)):Nt.setMode(k.TRIANGLES);else if(Y.isLine){let _n=X.linewidth;_n===void 0&&(_n=1),Ee.setLineWidth(_n*xt()),Y.isLineSegments?Nt.setMode(k.LINES):Y.isLineLoop?Nt.setMode(k.LINE_LOOP):Nt.setMode(k.LINE_STRIP)}else Y.isPoints?Nt.setMode(k.POINTS):Y.isSprite&&Nt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let _n=Y._multiDrawStarts,ke=Y._multiDrawCounts,wn=Y._multiDrawCount,wt=Pe?b.get(Pe).bytesPerElement:1,Cs=ze.get(X).currentProgram.getUniforms();for(let xn=0;xn<wn;xn++)Cs.setValue(k,"_gl_DrawID",xn),Nt.render(_n[xn]/wt,ke[xn])}else if(Y.isInstancedMesh)Nt.renderInstances(Be,Jt,Y.count);else if(K.isInstancedBufferGeometry){let _n=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ke=Math.min(K.instanceCount,_n);Nt.renderInstances(Be,Jt,ke)}else Nt.render(Be,Jt)};function io(w,B,K,X){F!==null&&w.isNodeMaterial&&F.setObject(X,w),me===!0&&te.setState(w,K,!1),w.transparent===!0&&w.side===Qn&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,Xe(w,B,X),w.side=Ai,w.needsUpdate=!0,Xe(w,B,X),w.side=Qn):Xe(w,B,X)}this.compile=function(w,B,K=null){K===null&&(K=w),F!==null&&F.renderStart(w,B,K),E=ee.get(K),E.init(B),M.push(E),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),w!==K&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),Ne=this.localClippingEnabled,me=te.init(this.clippingPlanes,Ne),me===!0&&te.setGlobalState(this.clippingPlanes,B),F!==null&&Se.render(E.state.shadowsArray,K,B);let X=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Te=Y.material;if(Te)if(Array.isArray(Te))for(let Fe=0;Fe<Te.length;Fe++){let we=Te[Fe];io(we,K,B,Y),X.add(we)}else io(Te,K,B,Y),X.add(Te)}),E=M.pop(),F!==null&&F.renderEnd(),X},this.compileAsync=function(w,B,K=null){let X=this.compile(w,B,K);return new Promise(Y=>{function Te(){if(X.forEach(function(Fe){let Pe=ze.get(Fe).currentProgram;(Pe===void 0||Pe.isReady())&&X.delete(Fe)}),X.size===0){Y(w);return}setTimeout(Te,10)}lt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let os=null;function qc(w){os&&os(w)}function J(){ye.stop()}function de(){ye.start()}let ye=new Qp;ye.setAnimationLoop(qc),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(w){os=w,ue.setAnimationLoop(w),w===null?ye.stop():ye.start()},ue.addEventListener("sessionstart",J),ue.addEventListener("sessionend",de),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(w,B);let K=ue.enabled===!0&&ue.isPresenting===!0,X=P!==null&&(le===null||K)&&P.begin(I,le);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(B),B=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,B,le),E=ee.get(w,M.length),E.init(B),E.state.textureUnits=Qe.getTextureUnits(),M.push(E),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?pe.setFromArrayCamera(B):Q.setFromProjectionMatrix(ve,Zn,B.reversedDepth),Ne=this.localClippingEnabled,me=te.init(this.clippingPlanes,Ne),T=be.get(w,_.length),T.init(),_.push(T),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let Fe=I.xr.getDepthSensingMesh();Fe!==null&&Re(Fe,B,-1/0,I.sortObjects)}Re(w,B,0,I.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),I.sortObjects===!0&&T.sort(Le,ot),mt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,mt&&N.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),me===!0&&te.beginShadows();let Y=E.state.shadowsArray;if(Se.render(Y,w,B),me===!0&&te.endShadows(),(X&&P.hasRenderPass())===!1){let Fe=T.opaque,we=T.transmissive;if(E.setupLights(),B.isArrayCamera){let Pe=B.cameras;if(we.length>0)for(let qe=0,rt=Pe.length;qe<rt;qe++){let yt=Pe[qe];We(Fe,we,w,yt)}mt&&N.render(w);for(let qe=0,rt=Pe.length;qe<rt;qe++){let yt=Pe[qe];Ie(T,w,yt,yt.viewport)}}else we.length>0&&We(Fe,we,w,B),mt&&N.render(w),Ie(T,w,B)}le!==null&&H===0&&(Qe.updateMultisampleRenderTarget(le),Qe.updateRenderTargetMipmap(le)),X&&P.end(I),w.isScene===!0&&w.onAfterRender(I,w,B),xe.resetDefaultState(),R=-1,O=null,M.pop(),M.length>0?(E=M[M.length-1],Qe.setTextureUnits(E.state.textureUnits),me===!0&&te.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,F!==null&&F.renderEnd()};function Re(w,B,K,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Fe=B.isArrayCamera?pe:Q;if(!w.frustumCulled||w.intersectsFrustum(Fe)){X&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);let we=he.update(w),Pe=w.material;Pe.visible&&T.push(w,we,Pe,K,Ge.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){let Fe=B.isArrayCamera?pe:Q;if(!w.frustumCulled||w.intersectsFrustum(Fe)){let we=he.update(w),Pe=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ge.copy(we.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(Pe)){let qe=we.groups;for(let rt=0,yt=qe.length;rt<yt;rt++){let Be=qe[rt],vt=Pe[Be.materialIndex];vt&&vt.visible&&T.push(w,we,vt,K,Ge.z,Be,B)}}else Pe.visible&&T.push(w,we,Pe,K,Ge.z,null,B)}}}let Te=w.children;for(let Fe=0,we=Te.length;Fe<we;Fe++)Re(Te[Fe],B,K,X)}function Ie(w,B,K,X){let{opaque:Y,transmissive:Te,transparent:Fe}=w;E.setupLightsView(K),me===!0&&te.setGlobalState(I.clippingPlanes,K),X&&Ee.viewport(W.copy(X)),Y.length>0&&He(Y,B,K),Te.length>0&&He(Te,B,K),Fe.length>0&&He(Fe,B,K),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function We(w,B,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Be=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new Vn(1,1,{generateMipmaps:!0,type:Be?ui:Fn,minFilter:Sn,samples:Math.max(4,At.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let Te=E.state.transmissionRenderTarget[X.id],Fe=X.viewport||W;Te.setSize(Fe.z*I.transmissionResolutionScale,Fe.w*I.transmissionResolutionScale);let we=I.getRenderTarget(),Pe=I.getActiveCubeFace(),qe=I.getActiveMipmapLevel();I.setRenderTarget(Te),I.getClearColor(z),re=I.getClearAlpha(),re<1&&I.setClearColor(16777215,.5),I.clear(),mt&&N.render(K);let rt=I.toneMapping;I.toneMapping=Ri;let yt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),me===!0&&te.setGlobalState(I.clippingPlanes,X),He(w,K,X),Qe.updateMultisampleRenderTarget(Te),Qe.updateRenderTargetMipmap(Te),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let vt=0,Jt=B.length;vt<Jt;vt++){let Ot=B[vt],{object:Nt,geometry:_n,material:ke,group:wn}=Ot;if(ke.side===Qn&&Nt.layers.test(X.layers)){let wt=ke.side;ke.side=gn,ke.needsUpdate=!0,Je(Nt,K,X,_n,ke,wn),ke.side=wt,ke.needsUpdate=!0,Be=!0}}Be===!0&&(Qe.updateMultisampleRenderTarget(Te),Qe.updateRenderTargetMipmap(Te))}I.setRenderTarget(we,Pe,qe),I.setClearColor(z,re),yt!==void 0&&(X.viewport=yt),I.toneMapping=rt}function He(w,B,K){let X=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Te=w.length;Y<Te;Y++){let Fe=w[Y],{object:we,geometry:Pe,group:qe}=Fe,rt=Fe.material;rt.allowOverride===!0&&X!==null&&(rt=X),we.layers.test(K.layers)&&Je(we,B,K,Pe,rt,qe)}}function Je(w,B,K,X,Y,Te){F!==null&&Y.isNodeMaterial&&F.setObject(w,Y),w.onBeforeRender(I,B,K,X,Y,Te),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(I,B,K,X,w,Te),Y.transparent===!0&&Y.side===Qn&&Y.forceSinglePass===!1?(Y.side=gn,Y.needsUpdate=!0,I.renderBufferDirect(K,B,X,Y,w,Te),Y.side=Ai,Y.needsUpdate=!0,I.renderBufferDirect(K,B,X,Y,w,Te),Y.side=Qn):I.renderBufferDirect(K,B,X,Y,w,Te),w.onAfterRender(I,B,K,X,Y,Te)}function Oe(w){let B=0;for(let K of w)K.texture!==null&&B++;return B}function Xe(w,B,K){B.isScene!==!0&&(B=pt);let X=ze.get(w),Y=E.state.lights,Te=E.state.shadowsArray,Fe=Y.state.version,we=ie.getParameters(w,Y.state,Te,B,K,E.state.lightProbeGridArray),Pe=ie.getProgramCacheKey(we),qe=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=A.get(w.envMap||X.environment,rt),X.envMapRotation=X.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,qe===void 0&&(w.addEventListener("dispose",St),qe=new Map,X.programs=qe,X.programVariants=new Map);let yt=qe.get(Pe);if(yt!==void 0){if(X.currentProgram===yt&&X.lightsStateVersion===Fe)return En(w,we),yt}else we.uniforms=ie.getUniforms(w),F!==null&&w.isNodeMaterial&&F.build(w,K,we),w.onBeforeCompile(we,I),yt=ie.acquireProgram(we,Pe),qe.set(Pe,yt),X.uniforms=we.uniforms;let Be=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=te.uniform),En(w,we),X.needsLights=rr(w),X.lightsStateVersion=Fe,X.needsLights&&(Be.ambientLightColor.value=Y.state.ambient,Be.lightProbe.value=Y.state.probe,Be.sunLights.value=Y.state.sun,Be.sunLightShadows.value=Y.state.sunShadow,Be.directionalLights.value=Y.state.directional,Be.directionalLightShadows.value=Y.state.directionalShadow,Be.spotLights.value=Y.state.spot,Be.spotLightShadows.value=Y.state.spotShadow,Be.rectAreaLights.value=Y.state.rectArea,Be.ltc_1.value=Y.state.rectAreaLTC1,Be.ltc_2.value=Y.state.rectAreaLTC2,Be.pointLights.value=Y.state.point,Be.pointLightShadows.value=Y.state.pointShadow,Be.hemisphereLights.value=Y.state.hemi,Be.sunShadowMatrix.value=Y.state.sunShadowMatrix,Be.sunShadowCascade.value=Y.state.sunShadowCascade,Be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Be.spotLightMatrix.value=Y.state.spotLightMatrix,Be.spotLightMap.value=Y.state.spotLightMap,Be.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.numLightProbeGrids=Oe(E.state.lightProbeGridArray),X.currentProgram=yt,X.uniformsList=null,yt}function ct(w,B,K,X,Y){let Te=ze.get(w),Fe=Te.currentProgram.id+","+X+","+Y,we=Te.programVariants.get(Fe);return we===void 0?(we=Xe(w,B,K),Te.programVariants.set(Fe,we)):(Te.currentProgram=we,Te.uniformsList=null,Te.outputColorSpace=X,Te.toneMapping=Y),we}function Kt(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=$r.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function En(w,B){let K=ze.get(w);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Ui(w,B,K,X,Y){B.isScene!==!0&&(B=pt),Qe.resetTextureUnits();let Te=B.fog,Fe=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,we=le===null?I.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ht.workingColorSpace,Pe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,qe=A.get(X.envMap||Fe,Pe),rt=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,yt=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!K.morphAttributes.position,vt=!!K.morphAttributes.normal,Jt=!!K.morphAttributes.color,Ot=Ri;X.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ot=I.toneMapping);let Nt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_n=Nt!==void 0?Nt.length:0,ke=ze.get(X),wn=E.state.lights;if(me===!0&&(Ne===!0||w!==O)){let Ht=w===O&&X.id===R;te.setState(X,w,Ht)}let wt=!1,Cs=!1;X.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==wn.state.version||Y.isBatchedMesh&&ke.batching===!1||!Y.isBatchedMesh&&ke.batching===!0||Y.isBatchedMesh&&ke.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&ke.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&ke.instancing===!1||!Y.isInstancedMesh&&ke.instancing===!0||Y.isSkinnedMesh&&ke.skinning===!1||!Y.isSkinnedMesh&&ke.skinning===!0||Y.isInstancedMesh&&ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ke.instancingMorph===!1&&Y.morphTexture!==null||ke.envMap!==qe||X.fog===!0&&ke.fog!==Te||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==te.numPlanes||ke.numIntersection!==te.numIntersection)||ke.vertexAlphas!==rt||ke.vertexTangents!==yt||ke.morphTargets!==Be||ke.morphNormals!==vt||ke.morphColors!==Jt||ke.morphTargetsCount!==_n||ke.numLightProbeGrids!==Oe(E.state.lightProbeGridArray)?wt=!0:(ke.outputColorSpace!==we||ke.toneMapping!==Ot)&&(Cs=!0):(wt=!0,ke.__version=X.version);let xn=ke.currentProgram;(wt===!0||Cs===!0)&&(xn=Cs===!0?ct(X,B,Y,we,Ot):Xe(X,B,Y),F&&X.isNodeMaterial&&F.onUpdateProgram(X,xn,ke));let Ea=!1,as=!1,Is=!1,Mt=xn.getUniforms(),pn=ke.uniforms;if(Ee.useProgram(xn.program)&&(Ea=!0,as=!0,Is=!0),X.id!==R&&(R=X.id,as=!0),Ea||O!==w){Ee.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Mt.setValue(k,"projectionMatrix",w.projectionMatrix),Mt.setValue(k,"viewMatrix",w.matrixWorldInverse);let cn=Mt.map.cameraPosition;cn!==void 0&&cn.setValue(k,nt.setFromMatrixPosition(w.matrixWorld)),At.logarithmicDepthBuffer&&Mt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Mt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,as=!0,Is=!0)}if(ke.needsLights&&(wn.state.sunShadowMap.length>0&&Mt.setValue(k,"sunShadowMap",wn.state.sunShadowMap,Qe),wn.state.directionalShadowMap.length>0&&Mt.setValue(k,"directionalShadowMap",wn.state.directionalShadowMap,Qe),wn.state.spotShadowMap.length>0&&Mt.setValue(k,"spotShadowMap",wn.state.spotShadowMap,Qe),wn.state.pointShadowMap.length>0&&Mt.setValue(k,"pointShadowMap",wn.state.pointShadowMap,Qe)),Y.isSkinnedMesh){Mt.setOptional(k,Y,"bindMatrix"),Mt.setOptional(k,Y,"bindMatrixInverse");let Ht=Y.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Mt.setValue(k,"boneTexture",Ht.boneTexture,Qe))}Y.isBatchedMesh&&(Mt.setOptional(k,Y,"batchingTexture"),Mt.setValue(k,"batchingTexture",Y._matricesTexture,Qe),Mt.setOptional(k,Y,"batchingIdTexture"),Mt.setValue(k,"batchingIdTexture",Y._indirectTexture,Qe),Mt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Mt.setValue(k,"batchingColorTexture",Y._colorsTexture,Qe));let ti=K.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&ne.update(Y,K,xn),(as||ke.receiveShadow!==Y.receiveShadow)&&(ke.receiveShadow=Y.receiveShadow,Mt.setValue(k,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(pn.envMapIntensity.value=B.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=hS()),as){if(Mt.setValue(k,"toneMappingExposure",I.toneMappingExposure),ke.needsLights&&Yc(pn,Is),Te&&X.fog===!0&&_e.refreshFogUniforms(pn,Te),_e.refreshMaterialUniforms(pn,X,fe,De,E.state.transmissionRenderTarget[w.id]),ke.needsLights&&ke.numLightProbeGrids>0){let Ht=x,cn=0;for(let Oi of E.state.lightProbeGridArray)Oi.texture!==null&&(Ht.textures[cn]=Oi.texture,Ht.min[cn]=Oi.boundingBox.min,Ht.max[cn]=Oi.boundingBox.max,Ht.resolution[cn]=Oi.resolution,cn++);for(let Oi in Ht)Ht[Oi].length=cn;pn.probesSH.value=Ht.textures,pn.probesMin.value=Ht.min,pn.probesMax.value=Ht.max,pn.probesResolution.value=Ht.resolution}$r.upload(k,Kt(ke),pn,Qe)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&($r.upload(k,Kt(ke),pn,Qe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Mt.setValue(k,"center",Y.center),Mt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),Mt.setValue(k,"normalMatrix",Y.normalMatrix),Mt.setValue(k,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Ht=X.uniformsGroups;for(let cn=0,Oi=Ht.length;cn<Oi;cn++){let Od=Ht[cn];Ve.update(Od,xn),Ve.bind(Od,xn)}}return xn}function Yc(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function rr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(w,B,K){let X=ze.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ze.get(w.texture).__webglTexture=B,ze.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let K=ze.get(w);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,K=0){le=w,q=B,H=K;let X=null,Y=!1,Te=!1;if(w){let we=ze.get(w);if(we.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(k.FRAMEBUFFER,we.__webglFramebuffer),W.copy(w.viewport),se.copy(w.scissor),oe=w.scissorTest,Ee.viewport(W),Ee.scissor(se),Ee.setScissorTest(oe),R=-1;return}else if(we.__webglFramebuffer===void 0)Qe.setupRenderTarget(w);else if(we.__hasExternalTextures)Qe.rebindTextures(w,ze.get(w.texture).__webglTexture,ze.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let rt=w.depthTexture;if(we.__boundDepthTexture!==rt){if(rt!==null&&ze.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(w)}}let Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Te=!0);let qe=ze.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[B])?X=qe[B][K]:X=qe[B],Y=!0):w.samples>0&&Qe.useMultisampledRTT(w)===!1?X=ze.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?X=qe[K]:X=qe,W.copy(w.viewport),se.copy(w.scissor),oe=w.scissorTest}else W.copy(Ue).multiplyScalar(fe).floor(),se.copy(Ze).multiplyScalar(fe).floor(),oe=je;if(K!==0&&(X=G),Ee.bindFramebuffer(k.FRAMEBUFFER,X)&&Ee.drawBuffers(w,X),Ee.viewport(W),Ee.scissor(se),Ee.setScissorTest(oe),Y){let we=ze.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,K)}else if(Te){let we=B;for(let Pe=0;Pe<w.textures.length;Pe++){let qe=ze.get(w.textures[Pe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Pe,qe.__webglTexture,K,we)}}else if(w!==null&&K!==0){let we=ze.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,we.__webglTexture,K)}R=-1};function Ud(w){let B=ze.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=At.textureFormatReadable(w.format),B.__typeReadable=At.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,K,X,Y,Te,Fe,we=0){if(!(w&&w.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ze.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(Pe=Pe[Fe],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){Ee.bindFramebuffer(k.FRAMEBUFFER,Pe);try{let qe=w.textures[we],rt=qe.format,yt=qe.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we);let Be=Ud(qe);if(Be.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&K>=0&&K<=w.height-Y&&k.readPixels(B,K,X,Y,ge.convert(rt),ge.convert(yt),Te)}finally{let qe=le!==null?ze.get(le).__webglFramebuffer:null;Ee.bindFramebuffer(k.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(w,B,K,X,Y,Te,Fe,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ze.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(Pe=Pe[Fe],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(B>=0&&B<=w.width-X&&K>=0&&K<=w.height-Y){Ee.bindFramebuffer(k.FRAMEBUFFER,Pe);let qe=w.textures[we],rt=qe.format,yt=qe.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+we);let Be=Ud(qe);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let vt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,vt),k.bufferData(k.PIXEL_PACK_BUFFER,Te.byteLength,k.STREAM_READ),k.readPixels(B,K,X,Y,ge.convert(rt),ge.convert(yt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Jt=le!==null?ze.get(le).__webglFramebuffer:null;Ee.bindFramebuffer(k.FRAMEBUFFER,Jt);let Ot=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Mp(k,Ot,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,vt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Te),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(vt),k.deleteSync(Ot),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,K=0){let X=Math.pow(2,-K),Y=Math.floor(w.image.width*X),Te=Math.floor(w.image.height*X),Fe=B!==null?B.x:0,we=B!==null?B.y:0;Qe.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,Fe,we,Y,Te),Ee.unbindTexture()},this.copyTextureToTexture=function(w,B,K=null,X=null,Y=0,Te=0){let Fe,we,Pe,qe,rt,yt,Be,vt,Jt,Ot=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(K!==null)Fe=K.max.x-K.min.x,we=K.max.y-K.min.y,Pe=K.isBox3?K.max.z-K.min.z:1,qe=K.min.x,rt=K.min.y,yt=K.isBox3?K.min.z:0;else{let Mt=Math.pow(2,-Y);Fe=Math.floor(Ot.width*Mt),we=Math.floor(Ot.height*Mt),w.isDataArrayTexture?Pe=Ot.depth:w.isData3DTexture?Pe=Math.floor(Ot.depth*Mt):Pe=1,qe=0,rt=0,yt=0}X!==null?(Be=X.x,vt=X.y,Jt=X.z):(Be=0,vt=0,Jt=0);let Nt=ge.convert(B.format),_n=ge.convert(B.type),ke;B.isData3DTexture?(Qe.setTexture3D(B,0),ke=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Qe.setTexture2DArray(B,0),ke=k.TEXTURE_2D_ARRAY):(Qe.setTexture2D(B,0),ke=k.TEXTURE_2D),Ee.activeTexture(k.TEXTURE0),Ee.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),Ee.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Ee.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let wn=Ee.getParameter(k.UNPACK_ROW_LENGTH),wt=Ee.getParameter(k.UNPACK_IMAGE_HEIGHT),Cs=Ee.getParameter(k.UNPACK_SKIP_PIXELS),xn=Ee.getParameter(k.UNPACK_SKIP_ROWS),Ea=Ee.getParameter(k.UNPACK_SKIP_IMAGES);Ee.pixelStorei(k.UNPACK_ROW_LENGTH,Ot.width),Ee.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot.height),Ee.pixelStorei(k.UNPACK_SKIP_PIXELS,qe),Ee.pixelStorei(k.UNPACK_SKIP_ROWS,rt),Ee.pixelStorei(k.UNPACK_SKIP_IMAGES,yt);let as=w.isDataArrayTexture||w.isData3DTexture,Is=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let Mt=ze.get(w),pn=ze.get(B),ti=ze.get(Mt.__renderTarget),Ht=ze.get(pn.__renderTarget);Ee.bindFramebuffer(k.READ_FRAMEBUFFER,ti.__webglFramebuffer),Ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let cn=0;cn<Pe;cn++)as&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(w).__webglTexture,Y,yt+cn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.get(B).__webglTexture,Te,Jt+cn)),k.blitFramebuffer(qe,rt,qe+Fe,rt+we,Be,vt,Be+Fe,vt+we,k.DEPTH_BUFFER_BIT,k.NEAREST);Ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||ze.has(w)){let Mt=ze.get(w),pn=ze.get(B);Ee.bindFramebuffer(k.READ_FRAMEBUFFER,C),Ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let ti=0;ti<Pe;ti++)as?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Mt.__webglTexture,Y,yt+ti):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Mt.__webglTexture,Y),Is?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pn.__webglTexture,Te,Jt+ti):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pn.__webglTexture,Te),Y!==0?k.blitFramebuffer(qe,rt,qe+Fe,rt+we,Be,vt,Be+Fe,vt+we,k.COLOR_BUFFER_BIT,k.NEAREST):Is?k.copyTexSubImage3D(ke,Te,Be,vt,Jt+ti,qe,rt,Fe,we):k.copyTexSubImage2D(ke,Te,Be,vt,qe,rt,Fe,we);Ee.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Is?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(ke,Te,Be,vt,Jt,Fe,we,Pe,Nt,_n,Ot.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(ke,Te,Be,vt,Jt,Fe,we,Pe,Nt,Ot.data):k.texSubImage3D(ke,Te,Be,vt,Jt,Fe,we,Pe,Nt,_n,Ot):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Te,Be,vt,Fe,we,Nt,_n,Ot.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Te,Be,vt,Ot.width,Ot.height,Nt,Ot.data):k.texSubImage2D(k.TEXTURE_2D,Te,Be,vt,Fe,we,Nt,_n,Ot);Ee.pixelStorei(k.UNPACK_ROW_LENGTH,wn),Ee.pixelStorei(k.UNPACK_IMAGE_HEIGHT,wt),Ee.pixelStorei(k.UNPACK_SKIP_PIXELS,Cs),Ee.pixelStorei(k.UNPACK_SKIP_ROWS,xn),Ee.pixelStorei(k.UNPACK_SKIP_IMAGES,Ea),Te===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&k.generateMipmap(ke),Ee.unbindTexture()},this.initRenderTarget=function(w){ze.get(w).__webglFramebuffer===void 0&&Qe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Qe.setTextureCube(w,0):w.isData3DTexture?Qe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Qe.setTexture2DArray(w,0):Qe.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){q=0,H=0,le=null,Ee.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var hm={type:"change"},qu={type:"start"},dm={type:"end"},Ac=new Mi,um=new Gn,uS=Math.cos(70*pi.DEG2RAD),an=new L,Bn=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xu=1e-6,Rc=class extends na{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new en,this._lastTargetPosition=new L,this._quat=new en().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hr,this._sphericalDelta=new Hr,this._scale=1,this._panOffset=new L,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new L,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fS.bind(this),this._onPointerDown=dS.bind(this),this._onPointerUp=pS.bind(this),this._onContextMenu=SS.bind(this),this._onMouseWheel=_S.bind(this),this._onKeyDown=xS.bind(this),this._onTouchStart=yS.bind(this),this._onTouchMove=vS.bind(this),this._onMouseDown=mS.bind(this),this._onMouseMove=gS.bind(this),this._interceptControlDown=MS.bind(this),this._interceptControlUp=bS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Tt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hm),this.update(),this.state=Tt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bn:n>Math.PI&&(n-=Bn),s<-Math.PI?s+=Bn:s>Math.PI&&(s-=Bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=an.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<uS?this.object.lookAt(this.target):(um.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(um,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xu||this._lastTargetPosition.distanceToSquared(this.target)>Xu?(this.dispatchEvent(hm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bn/60*this.autoRotateSpeed*e:Bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;an.copy(s).sub(this.target);let r=an.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function dS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function pS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dm),this.state=Tt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function mS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Tt.DOLLY;break;case ws.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Tt.ROTATE}break;case ws.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(qu)}function gS(i){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _S(i){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(i.preventDefault(),this.dispatchEvent(qu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(dm))}function xS(i){this.enabled!==!1&&this._handleKeyDown(i)}function yS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1){this.state=Tt.NONE;break}this._handleTouchStartRotate(i),this.state=Tt.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1){this.state=Tt.NONE;break}this._handleTouchStartPan(i),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Tt.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(qu)}function vS(i){switch(this._trackPointer(i),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Tt.NONE}}function SS(i){this.enabled!==!1&&i.preventDefault()}function MS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ut;c.morphTargetsRelative=a;let l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=fm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][d]);let p=fm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function fm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ft(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let y=h.getComponent(d,p);a.setComponent(d+u,p,y)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Yu(i,e){if(e===yu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Yr||e===ha){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Yr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function pm(i){let e=new Map,t=new Map,n=i.clone();return mm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function mm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)mm(i.children[n],e.children[n],t)}var Ic=class extends jn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new Pc(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pc(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new pd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Xn.extractUrlBase(e);o=Xn.resolveURL(l,this.path)}else o=Xn.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new es(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===vm){try{o[gt.KHR_BINARY_GLTF]=new md(e)}catch(u){s&&s(u);return}r=JSON.parse(o[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Md(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case gt.KHR_MATERIALS_UNLIT:o[u]=new ju;break;case gt.KHR_DRACO_MESH_COMPRESSION:o[u]=new gd(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:o[u]=new _d;break;case gt.KHR_MESH_QUANTIZATION:o[u]=new xd;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ES(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Xt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ju=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new $e(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],mn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ts(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qs(h),l.distance=u;break;case"spot":l=new Qo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},ju=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){let s=[];e.color=new $e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ed=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(r,r)}return Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},id=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Lt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(r[0],r[1],r[2],mn),Promise.all(s)}},ad=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ld=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(r[0],r[1],r[2],mn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Lt)),Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},hd=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Xt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){let n=Xt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},dd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},fd=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Pc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},pd=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ei.TRIANGLES&&l.mode!==ei.TRIANGLE_STRIP&&l.mode!==ei.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let p of u){let y=new tt,m=new L,g=new en,v=new L(1,1,1),S=new Gs(p.geometry,p.material,d);for(let T=0;T<d;T++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,T),c.SCALE&&v.fromBufferAttribute(c.SCALE,T),S.setMatrixAt(T,y.compose(m,g,v));let x=null;for(let T in c)if(T==="_COLOR_0"){let E=c[T];S.instanceColor=new qi(E.array,E.itemSize,E.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(x===null){let _=S.geometry;x=new Ut,x.name=_.name;for(let M in _.attributes)x.setAttribute(M,_.attributes[M]);for(let M in _.morphAttributes)x.morphAttributes[M]=_.morphAttributes[M];_.index!==null&&x.setIndex(_.index),x.morphTargetsRelative=_.morphTargetsRelative;for(let M of _.groups)x.addGroup(M.start,M.count,M.materialIndex);_.boundingBox!==null&&(x.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(x.boundingSphere=_.boundingSphere.clone()),x.drawRange.start=_.drawRange.start,x.drawRange.count=_.drawRange.count,x.userData=Object.assign({},_.userData),S.geometry=x}let E=c[T];x.setAttribute(T,new qi(E.array,E.itemSize,E.normalized))}Bt.prototype.copy.call(S,p),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},vm="glTF",ga=12,gm={JSON:1313821514,BIN:5130562},md=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ga),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ga,r=new DataView(e,ga),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===gm.JSON){let l=new Uint8Array(e,ga+o,a);this.content=n.decode(l)}else if(c===gm.BIN){let l=ga+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},gd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=vd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=vd[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Jr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let y=f.attributes[p],m=c[p];m!==void 0&&(y.normalized=m)}u(f)},a,l,mn,d)})})}},_d=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},xd=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},Lc=class extends Ti{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,y=p-l,m=-2*f+3*d,g=f-d,v=1-m,S=g-d+u;for(let x=0;x!==a;x++){let T=o[y+x+a],E=o[y+x+c]*h,_=o[p+x+a],M=o[p+x]*h;r[x]=v*T+S*E+m*_+g*M}return r}},wS=new en,yd=class extends Lc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return wS.fromArray(r).normalize().toArray(r),r}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_m={9728:Zt,9729:Vt,9984:Fl,9985:Xr,9986:js,9987:Sn},xm={33071:Kn,33648:Tr,10497:Jn},$u={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},As={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},TS={CUBICSPLINE:void 0,LINEAR:ks,STEP:Bs},Ku={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function AS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Wt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),i.DefaultMaterial}function tr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function RS(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function CS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function IS(i){let e,t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zu(t.attributes):e=i.indices+":"+Zu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Zu(i.targets[n]);return e}function Zu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Sd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var LS=new tt,Md=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ES,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Zo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ea(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new es(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return tr(r,a,s),Pi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Xn.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=$u[s.type],a=Jr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ft(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=$u[s.type],l=Jr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,y,m;if(f&&f!==u){let g=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,S=t.cache.get(v);S||(y=new l(a,g*f,s.count*f/h),S=new ys(y,f/h),t.cache.add(v,S)),m=new vs(S,c,d%f/h,p)}else a===null?y=new l(s.count*c):y=new l(a,d,s.count*c),m=new Ft(y,c,p);if(s.sparse!==void 0){let g=$u.SCALAR,v=Jr[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,T=new v(o[1],S,s.sparse.count*g),E=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,M=T.length;_<M;_++){let P=T[_];if(m.setX(P,E[_*c]),c>=2&&m.setY(P,E[_*c+1]),c>=3&&m.setZ(P,E[_*c+2]),c>=4&&m.setW(P,E[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=_m[d.magFilter]||Vt,h.minFilter=_m[d.minFilter]||Sn,h.wrapS=xm[d.wrapS]||Jn,h.wrapT=xm[d.wrapT]||Jn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Zt&&h.minFilter!==Vt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,p){let y=f;t.isImageBitmapLoader===!0&&(y=function(m){let g=new un(m);g.needsUpdate=!0,f(g)}),t.load(Xn.resolveURL(d,r.path),y,void 0,p)})})}let u=h.then(function(d){return l===!0&&a.revokeObjectURL(c),Pi(d,o),d.userData.mimeType=o.mimeType||PS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Dr,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ms,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Wt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[gt.KHR_MATERIALS_UNLIT]){let u=s[gt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],mn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Lt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Qn);let h=r.alphaMode||Ku.OPAQUE;if(h===Ku.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ku.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Cn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Cn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Cn){let u=r.emissiveFactor;a.emissive=new $e().setRGB(u[0],u[1],u[2],mn)}return r.emissiveTexture!==void 0&&o!==Cn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&tr(s,u,r),u})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ym(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=IS(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ym(new Ut,l,t),l.mode===ei.TRIANGLE_STRIP?d=d.then(f=>Yu(f,ha)):l.mode===ei.TRIANGLE_FAN&&(d=d.then(f=>Yu(f,Yr))),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?AS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let y=h[f],m=o[f],g,v=l[f];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0){let S=r.isSkinnedMesh===!0,x=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");S&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=S&&x?new Ao(y,v):new Ct(y,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ei.LINES)g=new Co(y,v);else if(m.mode===ei.LINE_STRIP)g=new Yi(y,v);else if(m.mode===ei.LINE_LOOP)g=new Io(y,v);else if(m.mode===ei.POINTS)g=new Po(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&CS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Pi(g,r),m.extensions&&tr(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&tr(s,u[0],r),u[0];let d=new Qt;r.extensions&&tr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(pi.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ys(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new tt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ro(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],y=f.target,m=y.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),l.push(p),h.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],y=u[3],m=u[4],g=[];for(let S=0,x=d.length;S<x;S++){let T=d[S],E=f[S],_=p[S],M=y[S],P=m[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let I=n._createAnimationTracks(T,E,_,M,P);if(I)for(let D=0;D<I.length;D++)g.push(I[D])}let v=new Ko(r,void 0,g);return Pi(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,LS)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Nr:l.length>1?h=new Qt:l.length===1?h=l[0]:h=new Bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Pi(h,r),r.extensions&&tr(n,h,r),r.matrix!==void 0){let u=new tt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Qt;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&tr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(pm(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Rn||d instanceof un)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}As[r.path]===As.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(As[r.path]){case As.weights:h=Ji;break;case As.rotation:h=ji;break;case As.translation:case As.scale:h=Es;break;default:n.itemSize===1?h=Ji:h=Es;break}let u=s.interpolation!==void 0?TS[s.interpolation]:ks,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let y=new h(c[f]+"."+As[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),o.push(y)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Sd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ji?yd:Lc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function NS(i,e,t){let n=e.attributes,s=new An;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let h=Sd(Jr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let y=Sd(Jr[d.componentType]);c.multiplyScalar(y)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Un;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ym(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=vd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ht.workingColorSpace!==mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Pi(i,e),NS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?RS(i,e.targets,t):i})}var bd=new WeakMap,DS=new URL("../libs/draco/draco_decoder.wasm",import.meta.url).toString(),US=new URL("../libs/draco/draco_wasm_wrapper.js",import.meta.url).toString(),OS=new URL("../libs/draco/draco_decoder.js",import.meta.url).toString(),ZE={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",import.meta.url).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",import.meta.url).toString()},Nc=class extends jn{constructor(e){super(e),this.decoderPaths={js:US,wasm:DS,dep_js:OS},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Xn.resolveURL("draco_wasm_wrapper.js",e),t.wasm=Xn.resolveURL("draco_decoder.wasm",e),t.dep_js=Xn.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new es(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Lt,n).catch(n)}decodeDracoFile(e,t,n,s,r=mn,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(bd.has(e)){let c=bd.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),bd.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new Ut;e.index&&t.setIndex(new Ft(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:s,array:r,itemSize:o,stride:a,vertexColorSpace:c}=e.attributes[n],l;if(o===a)l=new Ft(r,o);else{let h=new ys(r,a);l=new vs(h,o,0)}s==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(r instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Lt)return;let n=new $e;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),ht.colorSpaceToWorking(n,Lt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new es(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(s=>{let r=s[0];e||(this.decoderConfig.wasmBinary=s[1]);let o=FS.toString(),a=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function FS(){let i,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(c),l),p=f.attributes.map(y=>y.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){let h=l.attributeIDs,u=l.attributeTypes,d,f,p=a.GetEncodedGeometryType(c);if(p===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(p===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let y={index:null,attributes:[]};for(let m in h){let g=self[u[m]],v,S;if(l.useUniqueIDs)S=h[m],v=a.GetAttributeByUniqueId(d,S);else{if(S=a.GetAttributeId(d,o[h[m]]),S===-1)continue;v=a.GetAttribute(d,S)}let x=s(o,a,d,m,g,v);m==="color"&&(x.vertexColorSpace=l.vertexColorSpace),y.attributes.push(x)}return p===o.TRIANGULAR_MESH&&(y.index=n(o,a,d)),o.destroy(d),y}function n(o,a,c){let h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);let f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,c,l,h,u){let d=c.num_points(),f=u.num_components(),p=r(o,h),y=f*h.BYTES_PER_ELEMENT,m=Math.ceil(y/4)*4,g=m/h.BYTES_PER_ELEMENT,v=d*y,S=d*m,x=o._malloc(v);a.GetAttributeDataArrayForAllPoints(c,u,p,v,x);let T=new h(o.HEAPF32.buffer,x,v/h.BYTES_PER_ELEMENT),E;if(y===m)E=T.slice();else{E=new h(S/h.BYTES_PER_ELEMENT);let _=0;for(let M=0;M<d;M++){for(let P=0;P<f;P++)E[_+P]=T[M*f+P];_+=g}}return o._free(x),{name:l,count:d,itemSize:f,array:E,stride:g}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Dc=class extends Hs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new zt;e.deleteAttribute("uv");let t=new Wt({side:gn}),n=new Wt,s=new qs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ct(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Gs(e,n,6),a=new Bt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new Ct(e,jr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ct(e,jr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Ct(e,jr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ct(e,jr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ct(e,jr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ct(e,jr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function jr(i){return new Yo({color:0,emissive:16777215,emissiveIntensity:i})}function Sm({height:i=1,materials:e}={}){if(!e||["stone","darkStone","bronze","darkBronze","inlay"].some(R=>!e[R]?.isMaterial))throw new TypeError("\u5E2D\u53F0\u9700\u8981\u5B8C\u6574\u7684\u77F3\u6750\u3001\u6DF1\u77F3\u3001\u9752\u9285\u3001\u6DF1\u9752\u9285\u8207\u5D4C\u98FE\u6750\u8CEA\u3002");let t=Number(i);if(!Number.isFinite(t)||t<.34)throw new RangeError("\u5E2D\u53F0\u9AD8\u5EA6\u5FC5\u9808\u81F3\u5C11\u70BA 0.34\u3002");let n=new Qt;n.name="oathkeeper-wolf-seat",n.userData={artStudy:!0,standingHeight:t+.075,inwardAxis:"+Z",materialsOwnedByCaller:!0};let s=Object.fromEntries(Object.keys(e).map(R=>[R,[]])),r=new en,o=new tt,a=new L,c=new L(1,1,1);function l(R,O,W=[0,0,0],se=[0,0,0]){r.setFromEuler(new Dn(...se)),o.compose(a.set(...W),r,c),O.applyMatrix4(o);let oe=O.attributes.position,z=O.attributes.normal,re=new Float32Array(oe.count*2);for(let ce=0;ce<oe.count;ce++){let De=Math.abs(z.getX(ce)),fe=Math.abs(z.getY(ce)),Le=Math.abs(z.getZ(ce));fe>=De&&fe>=Le?(re[ce*2]=oe.getX(ce),re[ce*2+1]=oe.getZ(ce)):De>Le?(re[ce*2]=oe.getZ(ce),re[ce*2+1]=oe.getY(ce)):(re[ce*2]=oe.getX(ce),re[ce*2+1]=oe.getY(ce))}O.setAttribute("uv",new Ft(re,2)),s[R].push(O)}function h(R,O,W=.18,se=0){let oe=R/2,z=O/2,re=se>.02&&R>1.78;return[[-oe+W,-z],[oe-W,-z],[oe,-z+W],[oe,z-W],[oe-W,z],[-oe+W+(re?se*1.6:0),z],...re?[[-oe+W*.55,z-se*.65]]:[],[-oe,z-W],[-oe,-z+W]]}function u(R,O,W=.014){let se=Math.min(W,O*.22),oe=new li(R.map(([z,re])=>new ae(z,-re)));return new Ei(oe,{depth:O-se*2,bevelEnabled:se>0,bevelThickness:se,bevelSize:se,bevelSegments:2,steps:1,curveSegments:1}).rotateX(-Math.PI/2).translate(0,-O/2+se,0)}function d(R,O,W,se,oe,z=.17,re=0,ce=0,De=0){l(R,u(h(O,W,z,re),se,Math.min(.014,se*.15)),[ce,oe,De])}function f(R,O,W=.006,se=[]){let oe=Math.min(W,O*.2),z=new li(R.map(([re,ce])=>new ae(re,ce)));for(let re of se)z.holes.push(new bs(re.map(([ce,De])=>new ae(ce,De))));return new Ei(z,{depth:O-oe*2,bevelEnabled:oe>0,bevelThickness:oe,bevelSize:oe,bevelSegments:2,steps:1,curveSegments:1}).translate(0,0,oe)}function p(R,O,W=.006){let se=Math.min(W,O*.2);return new Ei(R,{depth:O-se*2,bevelEnabled:se>0,bevelThickness:se,bevelSize:se,bevelSegments:2,steps:1,curveSegments:8}).translate(0,0,se)}function y(R,O,W){let oe=[],z=[];R.forEach(([Ue,Ze,je,Q])=>{let pe=[[1,Q],[.9,je-.012],[.59,je],[0,je+.004],[-.59,je],[-.9,je-.012],[-1,Q],[-.75,Q-.012],[.75,Q-.012]];for(let me=0;me<=9;me++){let[Ne,ve]=pe[me%9];oe.push(Ne*Ze,Ue*O+W,ve)}});for(let Ue=0;Ue<R.length-1;Ue++)for(let Ze=0;Ze<9;Ze++){let je=Ue*10+Ze,Q=je+9+1;z.push(je,je+1,Q,je+1,Q+1,Q)}let re=R[0],ce=R.at(-1),De=oe.length/3;oe.push(0,re[0]*O+W,(re[2]+re[3])/2);let fe=oe.length/3;oe.push(0,ce[0]*O+W,(ce[2]+ce[3])/2);for(let Ue=0;Ue<9;Ue++){let Ze=(R.length-1)*10+Ue;z.push(De,Ue+1,Ue,fe,Ze,Ze+1)}let Le=new Ut;Le.setAttribute("position",new bt(oe,3)),Le.setIndex(z);let ot=Le.toNonIndexed();return Le.dispose(),ot.computeVertexNormals(),ot}function m(R,O,W,se=[0,0,0]){let oe=[];for(let re of W)for(let ce of re)oe.push(...O[ce]);let z=new Ut;z.setAttribute("position",new bt(oe,3)),z.computeVertexNormals(),l(R,z,se)}function g(R,O,W,se="bronze"){let oe=[],z=[];for(let re=0;re<R.length;re++){let ce=R[Math.max(0,re-1)],De=R[Math.min(R.length-1,re+1)],fe=De[0]-ce[0],Le=De[1]-ce[1],ot=Math.hypot(fe,Le)||1;oe.push([R[re][0]-Le/ot*O/2,R[re][1]+fe/ot*O/2]),z.push([R[re][0]+Le/ot*O/2,R[re][1]-fe/ot*O/2])}return{key:se,geometry:f([...oe,...z.reverse()],W,.002)}}function v(R,O,W,se=.019,oe=0){let z=new tn(se,se*1.05,.012,8).rotateX(Math.PI/2);l("bronze",z,[R,O,W],[0,0,oe]),l("darkBronze",new zt(se*.7,.004,.002),[R,O,W+.0065],[0,0,oe])}[[[-1.005,-1.005],[-.1,-1.005],[-.1,-.84],[-.78,-.78],[-1.005,-.86]],[[-.075,-1.005],[.68,-1.005],[.995,-.83],[.84,-.69],[-.075,-.8]],[[-1.005,-.83],[-.82,-.74],[-.81,.13],[-1.005,.24]],[[-1.005,.265],[-.82,.155],[-.7,.81],[-.89,1.005],[-1.005,.94]],[[-.865,1.005],[-.69,.835],[.04,.84],[.08,1.005]],[[.105,1.005],[.065,.84],[.74,.815],[1.005,.97],[.93,1.005]],[[1.005,.94],[.83,.76],[.84,.04],[1.005,-.06]],[[1.005,-.095],[.845,.015],[.83,-.66],[1.005,-.8]]].forEach((R,O)=>l(O%3===0?"darkStone":"stone",u(R,.025,.003),[0,.054+O%2*.003,0])),d("darkStone",1.9,1.91,.11,.116,.27,.035),d("stone",1.83,1.84,.085,.2035,.25,.022),d("darkStone",1.68,1.7,.035,.26,.23,.015);let x=.245,T=t-.095,E=Math.max(.035,T-x),_=Math.max(1,Math.round(E/.26)),M=E/_;for(let R=0;R<_;R++){let O=R/Math.max(1,_-1);d(R===0?"darkStone":"stone",1.48-O*.055,1.51-O*.055,Math.max(.02,M-.014),x+M*(R+.5),.205,R===1?.023:.006)}let P=.18,I=Math.max(.26,t-.09);for(let R of[-1,1])for(let O of[-1,1]){let W=[[R*.44,P,O*.8],[R*.77,P,O*.77],[R*.8,P,O*.44],[R*.55,P,O*.5],[R*.46,I,O*.66],[R*.65,I,O*.65],[R*.66,I,O*.46],[R*.52,I,O*.52]],se=[[0,1,5],[0,5,4],[1,2,6],[1,6,5],[2,3,7],[2,7,6],[3,0,4],[3,4,7],[4,5,6],[4,6,7]];R*O<0&&(se=se.map(z=>[...z].reverse())),m("darkStone",W,se);let oe=.29;l("darkBronze",f([[-.11,-.055],[.11,-.055],[.085,.055],[-.085,.055]],.016,.004),[R*.65,oe,O*.762],[0,O<0?Math.PI:0,0]),v(R*.65,oe,O*.776,.016)}d("darkStone",1.63,1.67,.075,t-.065,.225,.012),d("bronze",1.7,1.74,.022,t-.0225,.235,.008),d("stone",1.76,1.8,.068,t+.018,.235,.018),[[[-.625,-.855],[.035,-.855],[.035,.12],[-.855,.12],[-.855,-.625]],[[.049,-.855],[.625,-.855],[.855,-.625],[.855,-.19],[.049,-.19]],[[.049,-.176],[.855,-.176],[.855,.625],[.625,.855],[.3,.855],[.265,.836],[.21,.855],[.049,.855]],[[-.855,.134],[.035,.134],[.035,.855],[-.625,.855],[-.855,.625]]].forEach((R,O)=>l(O===1?"darkStone":"stone",u(R,.019,.002),[0,t+.0625,0]));for(let R of[-1,1])for(let O of[-1,1]){let W=[[R*.63,O*.85],[R*.85,O*.63],[R*.85,O*.42],[R*.42,O*.85]];l("bronze",u(W,.005,7e-4),[0,t+.072,0]),l("darkBronze",new tn(.018,.018,.003,8),[R*.68,t+.0735,O*.68])}let F=Math.min(1,Math.max(.28,(t-.3)/.7)),G=x+E*.51,C=[[-.36,-.3],[.36,-.3],[.43,-.2],[.43,.19],[.33,.29],[-.33,.29],[-.43,.19],[-.43,-.2]];l("stone",f(C,.031,.009).scale(1,F,1),[0,G,.746]),l("darkStone",f(C.map(([R,O])=>[R*.94,O*.93]),.012,.005).scale(1,F,1),[0,G,.778]);let U=new li([[-.024,-.277],[-.08,-.227],[-.112,-.141],[-.177,-.064],[-.215,.015],[-.191,.105],[-.139,.163],[-.181,.258],[-.171,.281],[-.148,.265],[-.097,.197],[-.045,.218],[0,.209],[.045,.218],[.097,.197],[.148,.265],[.171,.281],[.181,.258],[.139,.163],[.191,.105],[.215,.015],[.177,-.064],[.112,-.141],[.08,-.227],[.024,-.277]].map(([R,O])=>new ae(R,O)));for(let R of[-1,1]){let O=new bs;O.moveTo(R*.054,.058),O.lineTo(R*.164,.094),O.lineTo(R*.148,.074),O.quadraticCurveTo(R*.103,.052,R*.063,.044),O.closePath(),U.holes.push(O)}l("bronze",p(U,.041,.005).scale(1,F,1),[0,G,.791]);for(let R of[-1,1])l("bronze",f([[.035,.1],[.149,.147],[.177,.121],[.159,.103],[.063,.074]].map(([z,re])=>[R*z,re]),.029,.004).scale(1,F,1),[0,G,.831]),l("bronze",f([[.173,.04],[.197,-.023],[.171,-.073],[.142,-.103],[.099,-.187],[.083,-.166],[.103,-.067],[.14,-.018]].map(([z,re])=>[R*z,re]),.028,.004).scale(1,F,1),[0,G,.831]),l("darkBronze",f([[.157,.249],[.15,.214],[.129,.174],[.114,.196],[.139,.232]].map(([z,re])=>[R*z,re]),.005,.001).scale(1,F,1),[0,G,.833]),l("darkBronze",f([[.057,.057],[.161,.091],[.148,.073],[.063,.044]].map(([z,re])=>[R*z,re]),.004,5e-4).scale(1,F,1),[0,G,.799]);l("bronze",y([[.158,.028,.858,.824],[.106,.034,.879,.829],[.033,.038,.903,.835],[-.048,.043,.925,.841],[-.119,.052,.94,.854],[-.169,.057,.944,.861],[-.204,.049,.927,.855]],F,G)),l("darkBronze",f([[-.055,-.157],[.055,-.157],[.057,-.173],[.026,-.195],[-.026,-.195],[-.057,-.173]],.009,.0025).scale(1,F,1),[0,G,.942]);for(let R of[-1,1])l("darkStone",f([[.027,-.162],[.045,-.165],[.041,-.174],[.027,-.171]].map(([W,se])=>[R*W,se]),.001,0).scale(1,F,1),[0,G,.951]);l("bronze",f([[-.075,-.214],[-.034,-.267],[-.013,-.281],[.013,-.281],[.034,-.267],[.075,-.214],[.028,-.236],[-.028,-.236]],.025,.004).scale(1,F,1),[0,G,.844]);for(let R of[-1,1])for(let O of[-.195,.195])v(R*.351,G+O*F,.797,.013,R*.24);l("inlay",new zt(.055,.005,.002),[-.26,G-.248*F,.792]),l("darkBronze",f([[-.56,-.026],[.56,-.026],[.59,.026],[-.59,.026]],.012,.002),[0,t-.006,.881]);for(let R of[-1,1]){let O=g([[R*.08,-.012],[R*.21,.012],[R*.34,-.012],[R*.47,.012]],.014,.006);l("bronze",O.geometry,[0,t-.006,.895]),v(R*.55,t-.006,.895,.012)}let le={stone:"dressed-stone-and-crown",darkStone:"basalt-bearing-and-recesses",bronze:"cast-wolf-and-bronze-bindings",darkBronze:"oxidized-metal-recesses",inlay:"mineral-chisel-edge"};for(let R of["stone","darkStone","bronze","darkBronze","inlay"]){let O=s[R];if(!O.length)continue;let W=O.map(z=>z.index?z.toNonIndexed():z),se=Cc(W,!1);if(new Set([...O,...W]).forEach(z=>z.dispose()),!se)throw new Error(`\u5E2D\u53F0\u5E7E\u4F55\u7121\u6CD5\u5408\u4F75\uFF1A${R}`);se.computeBoundingBox(),se.computeBoundingSphere();let oe=new Ct(se,e[R]);oe.name=le[R],oe.castShadow=R!=="inlay",oe.receiveShadow=!0,n.add(oe)}return n.userData.meshes=n.children.length,n.userData.triangles=n.children.reduce((R,O)=>R+O.geometry.attributes.position.count/3,0),n}var ft=512,BS=Math.PI*2,nr=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),_a=(i,e,t)=>i+(e-i)*t,mi=(i,e,t)=>{let n=nr((t-i)/(e-i));return n*n*(3-2*n)};function ir(i,e,t){let n=Math.imul(i,374761393)^Math.imul(e,668265263)^t;return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function kn(i,e,t,n,s){let r=i*t,o=e*n,a=Math.floor(r),c=Math.floor(o),l=r-a,h=o-c,u=l*l*(3-2*l),d=h*h*(3-2*h),f=(a%t+t)%t,p=(c%n+n)%n,y=(f+1)%t,m=(p+1)%n;return _a(_a(ir(f,p,s),ir(y,p,s),u),_a(ir(f,m,s),ir(y,m,s),u),d)}function xa(i,e,t=!1){let n=new bi(i,ft,ft,Mn);return n.name=e,n.colorSpace=t?Lt:di,n.wrapS=n.wrapT=Jn,n.magFilter=Vt,n.minFilter=Sn,n.generateMipmaps=!0,n.anisotropy=2,n.needsUpdate=!0,n}function Mm(i,e){let t=new Uint8Array(ft*ft*4),n=(r,o)=>i[(o+ft)%ft*ft+(r+ft)%ft],s=ft/2;for(let r=0;r<ft;r+=1)for(let o=0;o<ft;o+=1){let a=-(n(o+1,r)-n(o-1,r))*s,c=-(n(o,r+1)-n(o,r-1))*s,l=Math.hypot(a,c,1),h=(r*ft+o)*4;t[h]=Math.round((a/l*.5+.5)*255),t[h+1]=Math.round((c/l*.5+.5)*255),t[h+2]=Math.round((1/l*.5+.5)*255),t[h+3]=255}return xa(t,e)}function kS(){let i=new Uint8Array(ft*ft*4),e=new Uint8Array(ft*ft*4),t=new Float32Array(ft*ft);for(let n=0;n<ft;n+=1)for(let s=0;s<ft;s+=1){let r=s/ft,o=n/ft,a=kn(r,o,3,4,741),c=(kn(r,o,5,6,8021)-.5)*.17,l=(kn(r,o,6,5,6029)-.5)*.17,h=kn(r+c,o+l,11,9,1283),u=kn(r+l,o-c,23,21,2801),d=kn(r,o,47,53,2291),f=kn(r,o,181,173,3779),p=kn(r+c*.7,o+l*.7,7,8,1619),y=(1-mi(.009,.035,Math.abs(p-.53)))*mi(.55,.73,kn(r,o,5,7,3251)),m=(1-mi(.004,.018,Math.abs(h-.42)))*mi(.59,.78,a)*(.5+u*.5),g=mi(.64,.83,h*.55+u*.45),v=Math.floor(r*83),S=Math.floor(o*83),x=ir(v,S,44701),T=r*83-v-(.22+ir(v,S,331)*.56),E=o*83-S-(.22+ir(v,S,991)*.56),_=x>.83?1-mi(.025,.14,Math.hypot(T,E*1.4)):0,M=(a-.5)*13+(h-.5)*11+(u-.5)*8+(d-.5)*5+(f-.5)*2,P=(n*ft+s)*4;i[P]=nr(76+M+y*5+g*4-m*7-_*17,0,255),i[P+1]=nr(78+M+y*5+g*4-m*7-_*16,0,255),i[P+2]=nr(81+M+y*4+g*4-m*6-_*14,0,255),i[P+3]=255,e[P]=255-_*45-m*12,e[P+1]=nr(222+(h-.5)*19+_*19-y*9-g*4,181,250),e[P+2]=2,e[P+3]=255,t[n*ft+s]=(u-.5)*6e-4+(d-.5)*.00105+(f-.5)*23e-5+y*12e-5-m*38e-5-_*.0017}return{base:xa(i,"hero-cut-stone-base-srgb",!0),response:xa(e,"hero-cut-stone-surface-linear"),normal:Mm(t,"hero-cut-stone-normal-linear")}}function zS(){let i=new Uint8Array(ft*ft*4),e=new Uint8Array(ft*ft*4),t=new Float32Array(ft*ft),n=0;for(let s=0;s<ft;s+=1)for(let r=0;r<ft;r+=1){let o=r/ft,a=s/ft,c=kn(o,a,7,9,2341),l=kn(o,a,4,5,6301),h=kn(o,a,23,19,7517),u=kn(o,a,173,151,2017),d=kn(o,a,251,19,3067),f=mi(.71,.84,l*.72+h*.28)*mi(.48,.69,h),p=mi(.62,.84,c*.6+l*.4),y=BS*(o*151+a*3)+(c-.5)*1.1,m=(1-mi(.018,.052,Math.abs(Math.sin(y))))*mi(.42,.64,h)*(1-f),g=(c-.5)*8+(u-.5)*3+(d-.5)*2,v=[143+g,122+g*.85,91+g*.65],S=[117+g*.4,120+g*.4,102+g*.4],x=(s*ft+r)*4;for(let T=0;T<3;T+=1)i[x+T]=nr(_a(v[T]-p*7,S[T],f*.65)+m*5,0,255);i[x+3]=255,e[x]=255-p*20,e[x+1]=nr(135+(c-.5)*20+f*31+p*11-m*15,109,204),e[x+2]=Math.round(_a(240,145,f)),e[x+3]=255,t[s*ft+r]=(u-.5)*16e-5+(d-.5)*7e-5+f*13e-5-m*15e-5,n+=f}return{base:xa(i,"hero-cast-bronze-base-srgb",!0),response:xa(e,"hero-cast-bronze-surface-linear"),normal:Mm(t,"hero-cast-bronze-normal-linear"),oxidationCoverage:n/(ft*ft)}}function bm(){let i=performance.now(),e=kS(),t=zS(),n=(m,g,v,S)=>new Wt({name:m,color:g,map:e.base,normalMap:e.normal,normalScale:new ae(v,v),roughnessMap:e.response,roughness:S,metalness:.015}),s=n("hand-cut-northern-stone",12567494,.95,1),r=n("recessed-northern-basalt",9673118,.9,1),o=(m,g,v,S)=>new Wt({name:m,color:g,map:t.base,normalMap:t.normal,normalScale:new ae(S,S),roughnessMap:t.response,metalnessMap:t.response,roughness:v,metalness:1}),a=o("aged-bronze-castwork",13881025,.95,.7),c=o("bronze-recess-and-shadow",12105901,1,.8),l=new Wt({name:"pale-mineral-inlay",color:12567986,roughnessMap:e.response,roughness:.82,metalness:.03,normalMap:e.normal,normalScale:new ae(.25,.25)}),h=[s,r,a,c,l],u=[...new Set([e.base,e.response,e.normal,t.base,t.response,t.normal])],d=u.reduce((m,g)=>m+g.image.data.byteLength,0),f=Object.freeze({textureCount:u.length,textureSize:ft,cpuImageBytes:d,estimatedGpuBytesWithMipmaps:Math.ceil(d*4/3),bronzeMeanOxidation:t.oxidationCoverage,generatedInMs:performance.now()-i,uvMetresPerTile:1,note:"GPU estimate assumes RGBA8 plus a full mip chain; excludes geometry, material programs and driver overhead."});h.forEach(m=>{m.userData.heroSeatTextureStats=f});let p=!1;function y(){p||(p=!0,u.forEach(m=>m.dispose()),h.forEach(m=>m.dispose()))}return{stone:s,darkStone:r,bronze:a,darkBronze:c,inlay:l,dispose:y,stats:f}}var Uc={sky:1322043,fog:1322043,stone:4217191,stoneDark:2637387,bronze:11506800,cyan:7391696,ivory:14410719},is=7,HS=[1.66,1.44,1.22,1,.78,.56,.34],Oc=Math.PI*2;function Et(i,e=[0,0,0],t=[0,0,0],n=[1,1,1]){let s=new tt().compose(new L(...e),new en().setFromEuler(new Dn(...t)),new L(...n));return i.applyMatrix4(s),i}function Bc(i,e){if(!i.length)return new Qt;let t=i.map(r=>r.index?r.toNonIndexed():r),n=Cc(t,!1);if(new Set([...i,...t]).forEach(r=>r.dispose()),!n)throw new Error("\u821E\u53F0\u5E7E\u4F55\u5408\u4F75\u5931\u6557\u3002");let s=new Ct(n,e);return s.castShadow=!0,s.receiveShadow=!0,s}function GS(){let e=new Uint8Array(65536),t=1747;for(let s=0;s<16384;s+=1){t=1664525*t+1013904223>>>0;let r=(t/4294967296-.5)*18;e[s*4]=116+r,e[s*4+1]=130+r,e[s*4+2]=138+r,e[s*4+3]=255}let n=new bi(e,128,128,Mn);return n.colorSpace=Lt,n.wrapS=n.wrapT=Jn,n.repeat.set(3,3),n.magFilter=Vt,n.minFilter=Sn,n.generateMipmaps=!0,n.needsUpdate=!0,n}function Fc(i,e,t,n,s=112){let r=new Ct(new Xo(i,e,s),t);return r.rotation.x=-Math.PI/2,r.position.y=n,r.receiveShadow=!0,r}function VS(i){let e=String(i.id),t=new Qt;t.name=`${e}-stand-in`;let n=new Wt({color:i.color||6069410,metalness:.35,roughness:.53}),s=new Wt({color:2440008,metalness:.35,roughness:.72}),r=new Wt({color:12700616,metalness:.12,roughness:.74}),o=[],a=[],c=[],l=/frigga|frigg|sif/i.test(e),h=/fenrir/i.test(e),u=/thor|heimdall|fenrir/i.test(e)?1.15:1;return a.push(Et(new tn(.24*u,.17,.55,6),[0,1.04,0])),o.push(Et(new tn(.18,l?.31:.22,l?.76:.28,7),[0,l?.53:.71,0])),l||(a.push(Et(new tn(.078,.065,.57,5),[-.105,.32,0])),a.push(Et(new tn(.078,.065,.57,5),[.105,.32,0]))),a.push(Et(new zt(.16,.095,.28),[-.105,.05,.065])),a.push(Et(new zt(.16,.095,.28),[.105,.05,.065])),[-1,1].forEach(d=>{o.push(Et(new tn(.11,.07,.45,5),[d*.29*u,.99,.015],[0,0,d*.23])),c.push(Et(new Ur(.082,0),[d*.34*u,.75,.015])),o.push(Et(new Ur(.17,0),[d*.25*u,1.22,0],[0,.4,0],[1.1,.55,1]))}),c.push(Et(new Wo(h?.16:.14,1),[0,1.48,h?.03:0],[0,0,0],[1,1.15,1])),o.push(Et(new tn(.155,.15,.12,6),[0,1.57,0])),h?(c.push(Et(new Ki(.1,.31,5),[0,1.46,.18],[Math.PI/2,0,0])),[-1,1].forEach(d=>{o.push(Et(new Ki(.08,.23,3),[d*.12,1.71,0])),o.push(Et(new Ki(.15,.32,4),[d*.19,1.27,-.06],[0,0,-d*.8]))}),a.push(Et(new zt(.32,.34,.14),[0,1.25,-.13]))):/loki/i.test(e)?[-1,1].forEach(d=>{let f=new Fr([new L(d*.11,1.59,0),new L(d*.23,1.79,-.015),new L(d*.23,1.98,.04),new L(d*.16,2.05,.12)]);o.push(new qo(f,8,.035,4,!1))}):/valkyrie|valkyr|valkiri/i.test(e)?[-1,1].forEach(d=>o.push(Et(new Ki(.1,.27,3),[d*.21,1.58,0],[0,0,-d*1.05]))):/frigga|frigg|sif/i.test(e)?(o.push(Et(new Ki(.16,.14,7),[0,1.66,0])),a.push(Et(new zt(.27,.5,.1),[0,1.32,-.135]))):o.push(Et(new zt(.05,.2,.26),[0,1.66,0])),t.add(Bc(a,s),Bc(o,n),Bc(c,r)),t.userData.coloredMaterial=n,t}function Em({canvas:i,onSelect:e=()=>{},onStatus:t=()=>{},onMetrics:n=()=>{}}){if(!i)throw new Error("\u627E\u4E0D\u5230\u821E\u53F0\u756B\u5E03\u3002");let s;try{s=new Ec({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(J){throw new Error(`\u6B64\u700F\u89BD\u5668\u7121\u6CD5\u555F\u7528 3D \u821E\u53F0\uFF0C\u8ACB\u4F7F\u7528\u652F\u63F4 WebGL \u7684 Safari \u6216 Chrome\u3002${J.message?` (${J.message})`:""}`)}s.outputColorSpace=Lt,s.toneMapping=ia,s.toneMappingExposure=1.18,s.shadowMap.enabled=!0,s.shadowMap.type=$s;let r=new Hs;r.background=new $e(Uc.sky),r.fog=new Eo(Uc.fog,18,46);let o=new Dc,a=new Kr(s),c=a.fromScene(o,.04,.1,100,{size:256});r.environment=c.texture,r.environmentIntensity=.65,o.dispose(),a.dispose();let l=new sn(38,1,.1,90),h=new Rc(l,i);h.enableDamping=!0,h.dampingFactor=.075,h.enablePan=!1,h.minDistance=3,h.maxDistance=28,h.minPolarAngle=.035,h.maxPolarAngle=Math.PI*.475,h.rotateSpeed=.68,h.zoomSpeed=.75,h.touches.ONE=ci.ROTATE,h.touches.TWO=ci.DOLLY_PAN;let u=window.matchMedia("(prefers-reduced-motion: reduce)"),d=u.matches,f="balanced",p=!1,y=null,m="overview",g=!0,v=null,S=0,x=1,T=1,E=null,_=[],M=[],P=!0,I=null,D=null,F=null,G=!1,C=null,U=new Map,q=[],H=[],le=new Jo(12575471,2306620,1.4);r.add(le);let R=new ts(16769972,3.1);R.position.set(-5,13,7),R.castShadow=!0,R.shadow.mapSize.set(1024,1024),R.shadow.camera.left=-7,R.shadow.camera.right=7,R.shadow.camera.top=7,R.shadow.camera.bottom=-7,R.shadow.camera.near=1,R.shadow.camera.far=30,R.shadow.normalBias=.025,R.shadow.bias=-1e-4,r.add(R);let O=new ts(8181486,1.35);O.position.set(5,7,-8),r.add(O);let W=new ts(15003887,.5);W.position.set(5,4,10),r.add(W);let se=GS(),oe=new Wt({color:Uc.stone,map:se,roughness:.94,metalness:.06}),z=new Wt({color:1583406,roughness:.91,metalness:.08}),re=new Wt({color:9335120,metalness:.62,roughness:.52}),ce=new Wt({vertexColors:!0,roughness:.82,metalness:.12}),De=new Ct(new Ws(150,150),new Wt({color:1650492,roughness:1}));De.rotation.x=-Math.PI/2,De.position.y=-.5,De.receiveShadow=!0,r.add(De);let fe=[],Le=[],ot=[],Ue=[],Ze=new Qt;Ze.name="northern-council-stage";let je=bm();function Q(J,de,ye,Re=.12,Ie=.018){let We=Math.min(Ie,ye*.22),He=J/2-We,Je=de/2-We,Oe=Math.min(Re,He*.65,Je*.65),Xe=new li([new ae(-He+Oe,-Je),new ae(He-Oe,-Je),new ae(He,-Je+Oe),new ae(He,Je-Oe),new ae(He-Oe,Je),new ae(-He+Oe,Je),new ae(-He,Je-Oe),new ae(-He,-Je+Oe)]);return new Ei(Xe,{depth:ye-We*2,bevelEnabled:We>0,bevelThickness:We,bevelSize:We,bevelSegments:1,steps:1,curveSegments:1}).rotateX(-Math.PI/2).translate(0,-ye/2+We,0)}function pe(J,de=8886683){let ye=new $e(de),Re=new Float32Array(J.attributes.position.count*3);for(let Ie=0;Ie<Re.length;Ie+=3)Re[Ie]=ye.r,Re[Ie+1]=ye.g,Re[Ie+2]=ye.b;J.setAttribute("color",new Ft(Re,3)),Ue.push(J)}function me(J,de,ye,Re,Ie,We,He,Je=.012){let Oe=Re-de,Xe=Ie-ye;J.push(Et(new zt(Math.hypot(Oe,Xe),Je,We),[(de+Re)/2,He,(ye+Ie)/2],[0,-Math.atan2(Xe,Oe),0]))}Le.push(Et(new tn(5.24,5.4,.44,28),[0,-.27,0])),fe.push(Et(new tn(5.1,5.18,.09,28),[0,-.005,0]));for(let J=0;J<is*2;J+=1){let de=-Math.PI/2+(J+.5)/(is*2)*Oc,ye=-de+Math.PI/2;fe.push(Et(Q(2,.24,.13,.055),[Math.cos(de)*5.02,.045,Math.sin(de)*5.02],[0,ye,0])),ot.push(Et(new zt(1.64,.012,.024),[Math.cos(de)*5.04,.116,Math.sin(de)*5.04],[0,ye,0]))}Le.push(Et(new tn(2.31,2.4,.13,28),[0,.095,0])),ot.push(Et(new tn(2.315,2.315,.018,28,1,!0),[0,.145,0]));let Ne=[[-.2,.5],[-.48,1.36],[-.75,1.91],[-.62,2.13],[.62,2.13],[.75,1.91],[.48,1.36],[.2,.5]];for(let J=0;J<is;J+=1){let de=-Math.PI/2+J/is*Oc,ye=-de+Math.PI/2,Re=new li(Ne.map(([Oe,Xe])=>new ae(Oe,-Xe))),Ie=new Ei(Re,{depth:.027,bevelEnabled:!1,steps:1,curveSegments:1});Ie.rotateX(-Math.PI/2),fe.push(Et(Ie,[0,.161,0],[0,ye,0]));let We=(Oe,Xe)=>new L(Oe,0,Xe).applyAxisAngle(new L(0,1,0),ye),He=We(-.49,2.04),Je=We(.49,2.04);me(ot,He.x,He.z,Je.x,Je.z,.027,.196);for(let Oe of[-1,1]){let Xe=We(Oe*.17,.76),ct=We(Oe*.34,1.33);me(ot,Xe.x,Xe.z,ct.x,ct.z,.018,.196)}pe(Et(Q(.12,.08,.009,.025,0),[Math.cos(de)*1.73,.196,Math.sin(de)*1.73],[0,ye,0]),6266026),J!==3&&Le.push(Et(Q(.74,.3,.055,.08),[Math.cos(de)*2.62,.066,Math.sin(de)*2.62],[0,ye,0]))}ot.push(Et(new tn(.43,.43,.045,7),[0,.188,0])),pe(Et(new tn(.32,.32,.015,7),[0,.219,0]),14537908);for(let J=0;J<is;J+=1){let de=-Math.PI/2+J/is*Oc,ye=Math.cos(de)*3.64,Re=Math.sin(de)*3.64,Ie=HS[J];q.push(new L(ye,Ie+.075,Re));let We=-de-Math.PI/2;if(J===3){let Xe=Sm({height:Ie,materials:je});Xe.position.set(ye,0,Re),Xe.rotation.y=We,Ze.add(Xe);continue}let He=(Xe,ct,Kt,En)=>{let Ui=new L(ct,0,En).applyAxisAngle(new L(0,1,0),We);return Et(Xe,[ye+Ui.x,Kt,Re+Ui.z],[0,We,0])};fe.push(He(Q(1.66,1.7,.12,.23),0,.072,0)),Le.push(He(Q(1.48,1.53,.065,.2),0,.161,0)),Le.push(He(Q(1.3,1.38,Ie-.15,.2,.025),0,(Ie+.15)/2-.035,0)),ot.push(He(Q(1.55,1.59,.026,.19,.004),0,Ie-.037,0)),fe.push(He(Q(1.58,1.62,.11,.2,.02),0,Ie+.02,0));let Je=.18,Oe=Ie-.085;for(let Xe of[-1,1])ot.push(He(new zt(.032,Oe-Je,.022),Xe*.48,(Oe+Je)/2,.697));for(let Xe of[Je,Oe])ot.push(He(new zt(.99,.032,.022),0,Xe,.697));for(let Xe=0;Xe<=J;Xe+=1){let ct=(Xe-J/2)*.068;pe(He(new zt(.024,Math.min(.105,Oe-Je-.022),.014),ct,(Oe+Je)/2,.713))}for(let Xe of[-1,1])pe(He(new zt(.15,.006,.022),Xe*.59,Ie+.078,-.65),14537908),pe(He(new zt(.022,.006,.13),Xe*.66,Ie+.078,-.59),14537908)}[["slate-masonry",fe,oe],["basalt-foundation",Le,z],["bronze-framework",ot,re],["stone-and-chalk-insets",Ue,ce]].forEach(([J,de,ye])=>{let Re=Bc(de,ye);Re.name=J,ye===ce&&(Re.castShadow=!1),Ze.add(Re)}),r.add(Ze);function ve(){let J=U.get("fenrir");J&&(J.proxy.visible=!F||!P,F&&(F.visible=P))}async function nt(){if(I||p)return I;G=!1,t({kind:"loading",phase:"model",message:"\u6B63\u5728\u8F09\u5165\u82AC\u91CC\u723E 3D \u6A23\u672C\u2026"});let J=new Nc;return J.setDecoderPath(new URL("./assets/draco/",document.baseURI).href),J.setWorkerLimit(1),D=J,I=new Ic().setDRACOLoader(J).loadAsync(new URL("./assets/fenrir.glb",document.baseURI).href).then(ye=>{if(p){os(ye.scene);return}let Re=new An().setFromObject(ye.scene),Ie=Re.getSize(new L),We=Re.getCenter(new L);if(!Number.isFinite(Ie.y)||Ie.y<=0)throw new Error("\u6A21\u578B\u6C92\u6709\u53EF\u898B\u7684\u5E7E\u4F55\u7BC4\u570D\u3002");let He=1.82/Ie.y,Je=new Qt;Je.name="fenrir-browser-sample",Je.scale.setScalar(He),ye.scene.position.sub(new L(We.x,Re.min.y,We.z)),ye.scene.traverse(Xe=>{Xe.isMesh&&(Xe.castShadow=!0,Xe.receiveShadow=!0,(Array.isArray(Xe.material)?Xe.material:[Xe.material]).forEach(Kt=>{Kt.map&&(Kt.map.anisotropy=Math.min(4,s.capabilities.getMaxAnisotropy()))}))}),Je.add(ye.scene),F=Je;let Oe=U.get("fenrir");Oe&&Oe.root.add(Je),ve(),t({kind:"loaded",phase:"model",message:"\u82AC\u91CC\u723E 3D \u6A23\u672C\u5DF2\u8F09\u5165",source:"adopted-blender-asset"})}).catch(ye=>{G=!0,I=null,p||t({kind:"error",phase:"model",message:"\u82AC\u91CC\u723E\u6A23\u672C\u66AB\u6642\u7121\u6CD5\u8F09\u5165\uFF0C\u5148\u986F\u793A\u89D2\u8272\u8349\u6A21\u3002",detail:ye.message})}).finally(()=>{J.dispose(),D===J&&(D=null)}),I}function Ge(J){let de=new Qt;de.name=`character-${J.id}`,de.userData.characterId=String(J.id);let ye=VS(J);de.add(ye);let Re=new Cn({color:Uc.cyan,transparent:!0,opacity:.7,depthWrite:!1}),Ie=Fc(.4,.48,Re,.016,42);de.add(Ie);let We=(Xe,ct,Kt,En,Ui)=>{let Yc=new Cn({color:Kt,transparent:!0,opacity:En,depthWrite:!1}),rr=Fc(Xe,ct,Yc,Ui,40);return rr.visible=!1,rr.renderOrder=3,de.add(rr),rr},He={active:We(.515,.585,14859127,.95,.03),target:We(.635,.705,15567227,.95,.035),acted:We(.525,.555,7440273,.54,.029),dead:new Qt};He.dead.name="death-status-marker";let Je=new Cn({color:9544361,transparent:!0,opacity:.65,depthWrite:!1});He.dead.add(Fc(.375,.425,Je,.032,32)),[-1,1].forEach(Xe=>{let ct=new Ct(new zt(.3,.012,.028),Je);ct.position.y=.038,ct.rotation.y=Xe*Math.PI/4,He.dead.add(ct)}),He.dead.visible=!1,de.add(He.dead),r.add(de);let Oe={root:de,proxy:ye,halo:Ie,cues:He,target:new L,initialized:!1,character:J};return U.set(String(J.id),Oe),String(J.id)==="fenrir"&&(F&&de.add(F),P&&nt(),ve()),Oe}function pt({characters:J=_,seatOrder:de,selectedId:ye=y,combat:Re=C}={}){let Ie=y;_=J,y=ye==null?null:String(ye),C=Re==null?null:{activeId:Re.activeId==null?null:String(Re.activeId),targetId:Re.targetId==null?null:String(Re.targetId),targetIds:[...new Set((Array.isArray(Re.targetIds)?Re.targetIds:Re.targetId==null?[]:[Re.targetId]).filter(Oe=>Oe!=null).map(String))],actedIds:new Set([...Re.actedIds||[]].map(String))};let We=new Set(_.map(Oe=>String(Oe.id)));for(let[Oe,Xe]of U)We.has(Oe)||(b(ct=>ct.actorId===Oe||ct.targetId===Oe),r.remove(Xe.root),Oe==="fenrir"&&F&&F.removeFromParent(),os(Xe.root),U.delete(Oe));let He=de??(M.length?M:_.map(Oe=>Oe.id)),Je=[...new Set(He.map(String))].filter(Oe=>We.has(Oe));_.forEach(Oe=>{Je.includes(String(Oe.id))||Je.push(String(Oe.id))}),M=Je.slice(0,is),_.slice(0,is).forEach(Oe=>{let Xe=String(Oe.id),ct=U.get(Xe)||Ge(Oe);ct.character=Oe,ct.target.copy(q[Math.min(Je.indexOf(Xe),is-1)]);let Kt=Number(Oe.hp)<=0,En=!Kt&&C?.activeId===Xe;ct.halo.visible=!C&&Xe===y,ct.cues.active.visible=En,ct.cues.target.visible=!!C?.targetIds.includes(Xe),ct.cues.acted.visible=!!C?.actedIds.has(Xe)&&!En,ct.cues.dead.visible=Kt;let Ui=ct.proxy.userData.coloredMaterial.color;Ui.set(Oe.color||6069410),Kt&&Ui.lerp(new $e(6648699),.78),(!ct.initialized||d)&&(ct.root.position.copy(ct.target),ct.root.rotation.y=Math.atan2(-ct.target.x,-ct.target.z),ct.initialized=!0)}),ve(),m==="focus"&&(g||y!==Ie)&&kt("focus")}function mt(J,de){let ye=J.clone().sub(de).normalize(),Re=new L().crossVectors(l.up,ye).normalize(),Ie=new L().crossVectors(ye,Re),We=Math.tan(pi.degToRad(l.fov/2)),He=We*x/T,Je=J.distanceTo(de);for(let Oe=0;Oe<28;Oe+=1){let Xe=Oe/28*Oc;for(let ct of[-.5,3.9]){let Kt=new L(Math.cos(Xe)*5.5,ct,Math.sin(Xe)*5.5).sub(de),En=Kt.dot(ye);Je=Math.max(Je,En+Math.abs(Kt.dot(Re))*1.1/He,En+Math.abs(Kt.dot(Ie))*1.1/We)}}return de.clone().addScaledVector(ye,Je)}function xt(){return mt(new L(8.7,9.1,13.1),new L(0,.7,0))}function k(J,de){let ye=J.distanceTo(de);h.maxDistance=Math.max(28,ye*1.25),r.fog.near=Math.max(18,ye),r.fog.far=Math.max(46,ye+28),d?(l.position.copy(J),h.target.copy(de),h.update(),E=null):E={position:J,target:de}}function kt(J){if(v=null,g=!0,m=["overview","top","focus"].includes(J)?J:"overview",m==="top"){let de=new L(0,.4,0);k(mt(new L(.57,20.5,.57),de),de)}else if(m==="focus"){let de=U.get(y)||U.values().next().value;if(!de)return k(xt(),new L(0,.7,0));let ye=x<T,Re=M.indexOf(String(de.character.id))===3,Ie=de.target.clone().add(new L(0,Re?ye?.1:.25:ye?.85:.95,0)),We=new L(de.target.x,0,de.target.z).normalize(),He=new L(-We.z,0,We.x),Je=Re?ye?-6.6:-5.7:ye?-3.85:-3.3,Oe=Ie.clone().addScaledVector(We,Je).addScaledVector(He,Re?2:.85).add(new L(0,Re?1.65:1,0));k(Oe,Ie)}else k(xt(),new L(0,.7,0))}function lt(){kt("overview")}function At(J){f=J==="low"?"low":"balanced",s.setPixelRatio(Math.min(window.devicePixelRatio||1,f==="low"?1:1.65)),s.shadowMap.enabled=f!=="low",R.castShadow=f!=="low",It()}function Ee(J){return P=!!J,P&&!I&&nt(),ve(),{enabled:P,loaded:!!F,failed:G}}function It(){if(p)return;let J=i.getBoundingClientRect(),de=x!==Math.max(1,J.width)||T!==Math.max(1,J.height);x=Math.max(1,J.width),T=Math.max(1,J.height),s.setSize(x,T,!1),l.aspect=x/T,l.updateProjectionMatrix(),de&&g&&kt(m)}let ze=new L;function Qe(){return[...U].map(([J,de])=>(ze.copy(de.root.position).add(new L(0,J==="loki"?2.18:1.99,0)),ze.project(l),{id:J,x:(ze.x*.5+.5)*x,y:(-ze.y*.5+.5)*T,visible:ze.z>-1&&ze.z<1&&Math.abs(ze.x)<1.1&&Math.abs(ze.y)<1.15}))}function A(J){J.line.removeFromParent(),J.pulse.removeFromParent(),J.line.geometry.dispose(),J.line.material.dispose(),J.pulse.geometry.dispose(),J.pulse.material.dispose()}function b(J=()=>!0){for(let de=H.length-1;de>=0;de-=1)J(H[de])&&(A(H[de]),H.splice(de,1))}function V({actorId:J,targetId:de,killed:ye=!1}={},Re=performance.now()){if(p||J==null||de==null)return;let Ie=String(J),We=String(de);if(!U.has(Ie)||!U.has(We))return;for(;H.length>=3;)A(H.shift());let He=20,Je=new Ut,Oe=new Ft(new Float32Array((He+1)*3),3);Je.setAttribute("position",Oe);let Xe=ye?15699326:14794108,ct=new Yi(Je,new Ms({color:Xe,transparent:!0,opacity:.85,depthWrite:!1}));ct.frustumCulled=!1,ct.renderOrder=4,r.add(ct);let Kt=Fc(.72,.78,new Cn({color:15567227,transparent:!0,opacity:.72,depthWrite:!1}),.052,40);Kt.renderOrder=4,U.get(We).root.add(Kt);let En={actorId:Ie,targetId:We,line:ct,pulse:Kt,positions:Oe,segments:He,started:Re,duration:d?350:ye?850:650};H.push(En),be(En,0)}function he({actorId:J,targets:de=[]}={}){if(p||J==null||!Array.isArray(de))return;let ye=performance.now(),Re=new Set;for(let Ie of de){if(Re.size>=2)break;if(Ie?.targetId==null)continue;let We=String(Ie.targetId);Re.has(We)||(Re.add(We),V({actorId:J,targetId:We,killed:!!Ie.killed},ye))}}let ie=new L,_e=new L;function be(J,de){let ye=U.get(J.actorId),Re=U.get(J.targetId);if(!(!ye||!Re)){ie.copy(ye.root.position),ie.y+=1.02,_e.copy(Re.root.position),_e.y+=.92;for(let Ie=0;Ie<=J.segments;Ie+=1){let We=Ie/J.segments;J.positions.setXYZ(Ie,pi.lerp(ie.x,_e.x,We),pi.lerp(ie.y,_e.y,We)+Math.sin(We*Math.PI)*.48,pi.lerp(ie.z,_e.z,We))}if(J.positions.needsUpdate=!0,d)J.line.geometry.setDrawRange(0,J.segments+1),J.line.material.opacity=.65,J.pulse.scale.setScalar(1),J.pulse.material.opacity=.55;else{J.line.geometry.setDrawRange(0,Math.min(J.segments+1,Math.ceil(Math.min(1,de/.32)*(J.segments+1))));let Ie=de<.45?1:Math.max(0,(1-de)/.55);J.line.material.opacity=.85*Ie,J.pulse.scale.setScalar(.88+Math.sin(Math.min(1,de)*Math.PI/2)*.26),J.pulse.material.opacity=.72*Math.sin(de*Math.PI)}}}function ee(J){for(let de=H.length-1;de>=0;de-=1){let ye=H[de],Re=(J-ye.started)/ye.duration;Re>=1||!U.has(ye.actorId)||!U.has(ye.targetId)?(A(ye),H.splice(de,1)):be(ye,Math.max(0,Re))}}let te=new ta,Se=new ae,N=new Map,ne=!1;function Z(J){J.button!==0&&J.pointerType==="mouse"||(N.set(J.pointerId,{x:J.clientX,y:J.clientY,time:performance.now()}),N.size>1&&(ne=!0))}function Me(J){let de=N.get(J.pointerId);N.delete(J.pointerId);let ye=de&&!ne&&Math.hypot(J.clientX-de.x,J.clientY-de.y)<7&&performance.now()-de.time<900;if(N.size===0&&(ne=!1),!ye)return;let Re=i.getBoundingClientRect();Se.set((J.clientX-Re.left)/Re.width*2-1,-(J.clientY-Re.top)/Re.height*2+1),te.setFromCamera(Se,l);let We=te.intersectObjects([...U.values()].map(He=>He.root),!0).find(He=>{let Je=He.object;for(;Je;){if(!Je.visible)return!1;Je=Je.parent}return!0});if(We){let He=We.object;for(;He&&!He.userData.characterId;)He=He.parent;He?.userData.characterId&&e(He.userData.characterId)}}function ge(J){N.delete(J.pointerId),N.size||(ne=!1)}function xe(){E=null,v={position:l.position.clone(),target:h.target.clone()}}function Ve(){v&&(l.position.distanceToSquared(v.position)>1e-8||h.target.distanceToSquared(v.target)>1e-8)&&(g=!1)}function at(){v=null}function ue(J){d=J.matches}function Ke(J){J.preventDefault(),t({kind:"error",phase:"webgl",message:"\u624B\u6A5F\u66AB\u6642\u91CB\u653E\u4E86 3D \u8CC7\u6E90\uFF0C\u6B63\u5728\u7B49\u5019\u6062\u5FA9\u3002"})}function st(){t({kind:"loaded",phase:"webgl",message:"3D \u821E\u53F0\u5DF2\u6062\u5FA9\u3002"})}i.addEventListener("pointerdown",Z,{passive:!0}),i.addEventListener("pointerup",Me,{passive:!0}),i.addEventListener("pointercancel",ge,{passive:!0}),i.addEventListener("webglcontextlost",Ke,!1),i.addEventListener("webglcontextrestored",st,!1),h.addEventListener("start",xe),h.addEventListener("change",Ve),h.addEventListener("end",at),u.addEventListener?.("change",ue);let Ae=typeof ResizeObserver<"u"?new ResizeObserver(It):null;Ae?.observe(i.parentElement||i),window.addEventListener("resize",It,{passive:!0});let St=performance.now(),qt=St,Yn=0;function io(J){if(p)return;S=requestAnimationFrame(io);let de=Math.min((J-St)/1e3,.05);St=J;let ye=d?1:1-Math.exp(-7.5*de);for(let Re of U.values()){Re.root.position.lerp(Re.target,ye);let Ie=Math.atan2(-Re.target.x,-Re.target.z),We=Math.atan2(Math.sin(Ie-Re.root.rotation.y),Math.cos(Ie-Re.root.rotation.y));Re.root.rotation.y+=We*ye}E&&(l.position.lerp(E.position,ye),h.target.lerp(E.target,ye),l.position.distanceToSquared(E.position)<1e-4&&h.target.distanceToSquared(E.target)<1e-4&&(E=null)),ee(J),h.update(),s.render(r,l),Yn+=1,J-qt>1500&&(n({fps:Math.round(Yn*1e3/(J-qt)),drawCalls:s.info.render.calls,triangles:s.info.render.triangles,pixelRatio:s.getPixelRatio(),quality:f,modelLoaded:!!F}),qt=J,Yn=0)}function os(J){let de=new Set,ye=new Set,Re=new Set;J.traverse(Ie=>{Ie.geometry&&de.add(Ie.geometry),(Ie.material?Array.isArray(Ie.material)?Ie.material:[Ie.material]:[]).forEach(He=>ye.add(He))}),ye.forEach(Ie=>Object.values(Ie).forEach(We=>{We?.isTexture&&Re.add(We)})),de.forEach(Ie=>Ie.dispose()),Re.forEach(Ie=>Ie.dispose()),ye.forEach(Ie=>Ie.dispose())}function qc(){p||(p=!0,cancelAnimationFrame(S),Ae?.disconnect(),window.removeEventListener("resize",It),i.removeEventListener("pointerdown",Z),i.removeEventListener("pointerup",Me),i.removeEventListener("pointercancel",ge),i.removeEventListener("webglcontextlost",Ke),i.removeEventListener("webglcontextrestored",st),u.removeEventListener?.("change",ue),h.removeEventListener("start",xe),h.removeEventListener("change",Ve),h.removeEventListener("end",at),h.dispose(),D?.dispose(),D=null,b(),r.environment=null,c.dispose(),os(r),F&&!F.parent&&os(F),s.dispose(),U.clear())}return It(),l.position.copy(xt()),h.target.set(0,.7,0),h.update(),At("balanced"),lt(),S=requestAnimationFrame(io),t({kind:"loaded",phase:"arena",message:"\u4E03\u5E2D\u821E\u53F0\u5DF2\u5C31\u7DD2\u3002"}),{update:pt,setView:kt,resetCamera:lt,setQuality:At,setFenrirEnabled:Ee,resize:It,getLabels:Qe,playAttack:V,playAttackBatch:he,dispose:qc}}var Ed="fenrir-room-session-v1";var Tm=new Set(["thor","sif","loki","valkyrie","heimdall","frigga","fenrir"]);function Am(i=""){let e;try{e=new URL(String(i).trim()||globalThis.location?.origin)}catch{throw new Error("\u8ACB\u586B\u5BEB\u5B8C\u6574\u7684 HTTPS \u9023\u7DDA\u670D\u52D9\u7DB2\u5740\uFF1B\u540C\u4E00\u7DB2\u7AD9\u53EF\u7559\u767D\u3002")}let t=["localhost","127.0.0.1"].includes(e.hostname);if(e.protocol!=="https:"&&!(e.protocol==="http:"&&t))throw new Error("\u9023\u7DDA\u670D\u52D9\u9700\u4F7F\u7528 HTTPS\uFF1B\u672C\u6A5F\u6E2C\u8A66\u53EF\u4F7F\u7528 localhost \u6216 127.0.0.1\u3002");if(e.username||e.password||e.search||e.hash||!["","/"].includes(e.pathname))throw new Error("\u8ACB\u53EA\u586B\u670D\u52D9\u7684\u6839\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u3001\u5E33\u865F\u3001\u53C3\u6578\u6216\u623F\u9593\u8CC7\u6599\u3002");return e.origin}function wm(i){if(!i||typeof i!="object"||Array.isArray(i))return null;try{let e=Am(i.apiBase),t=String(i.roomCode||"").trim().toUpperCase();if(!/^[A-Z0-9]{6,8}$/.test(t)||!/^[A-Za-z0-9_-]{20,256}$/.test(i.token||"")||i.role!=="host"&&i.role!=="player")return null;let n=i.role==="host"?null:i.characterId;return i.role==="player"&&!Tm.has(n)?null:{apiBase:e,roomCode:t,token:i.token,role:i.role,characterId:n}}catch{return null}}function wd(i){return!i?.status&&i?.name!=="RoomSessionChanged"}function Rm({onSnapshot:i=()=>{},onStatus:e=()=>{},onSession:t=()=>{}}={}){let n=null,s=0,r=!1,o=null,a=null,c=-1,l=null,h=!1,u=new Set,d=()=>{try{return wm(JSON.parse(globalThis.localStorage?.getItem(Ed)||"null"))}catch{return null}},f=()=>{try{n?globalThis.localStorage?.setItem(Ed,JSON.stringify(n)):globalThis.localStorage?.removeItem(Ed)}catch{}},p=(U,q)=>{r||e({state:U,message:q})},y=()=>n?{...n}:null,m=()=>Object.assign(new Error("\u623F\u9593\u5DF2\u5207\u63DB\uFF0C\u8ACB\u4EE5\u76EE\u524D\u756B\u9762\u7E7C\u7E8C\u3002"),{name:"RoomSessionChanged"}),g=U=>!r&&U===s;function v(){clearTimeout(o),o=null;for(let U of u)U.abort();u.clear(),a=null}function S(U,{notify:q=!0,keepStored:H=!1}={}){s+=1,v(),n=U,c=-1,l=null,H||f(),q&&!r&&t(y())}function x(){if(r)throw new Error("\u9023\u7DDA\u5DF2\u7D50\u675F\uFF0C\u8ACB\u91CD\u65B0\u8F09\u5165\u7DB2\u9801\u3002");if(!n)throw new Error("\u8ACB\u5148\u5EFA\u7ACB\u6216\u52A0\u5165\u623F\u9593\u3002");return n}async function T(U,q,{token:H,method:le="GET",body:R,ticket:O=s}={}){let W=new AbortController;u.add(W);let se=setTimeout(()=>W.abort(),15e3);try{let oe=await fetch(U+q,{method:le,headers:{Accept:"application/json",...R===void 0?{}:{"Content-Type":"application/json"},...H?{Authorization:`Bearer ${H}`}:{}},...R===void 0?{}:{body:JSON.stringify(R)},signal:W.signal,credentials:"omit",cache:"no-store",referrerPolicy:"no-referrer"});if(!g(O))throw m();let z;try{z=await oe.json()}catch{throw Object.assign(new Error("\u9023\u7DDA\u670D\u52D9\u6C92\u6709\u56DE\u50B3\u6709\u6548\u8CC7\u6599\uFF0C\u8ACB\u78BA\u8A8D\u670D\u52D9\u7DB2\u5740\u3002"),{status:oe.status||502})}if(!g(O))throw m();if(!oe.ok)throw Object.assign(new Error(z?.message||"\u9023\u7DDA\u670D\u52D9\u66AB\u6642\u7121\u6CD5\u5B8C\u6210\u64CD\u4F5C\u3002"),{status:oe.status,code:z?.error});return z}catch(oe){throw g(O)?oe.name==="AbortError"?new Error("\u9023\u7DDA\u903E\u6642\uFF0C\u6B63\u5728\u7B49\u5019\u9023\u7DDA\u6062\u5FA9\u3002"):oe:m()}finally{clearTimeout(se),u.delete(W)}}function E(U,q){if(g(q)){if(!U||typeof U!="object"||!Number.isSafeInteger(U.revision)||!U.combat||U.roomCode!==n?.roomCode)throw new Error("\u623F\u9593\u72C0\u614B\u7121\u6548\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u670D\u52D9\u7248\u672C\u3002");U.revision<c||(c=U.revision,i(U),p("online","\u5DF2\u9023\u7DDA\uFF0C\u623F\u9593\u9032\u5EA6\u6703\u81EA\u52D5\u540C\u6B65\u3002"))}}function _(U,q){!g(q)||U.name==="RoomSessionChanged"||([401,404].includes(U.status)?(S(null),p("error",U.status===404?"\u627E\u4E0D\u5230\u9019\u500B\u623F\u9593\uFF0C\u8ACB\u91CD\u65B0\u52A0\u5165\u6216\u5EFA\u7ACB\u623F\u9593\u3002":"\u623F\u9593\u8EAB\u5206\u5DF2\u5931\u6548\uFF0C\u8ACB\u91CD\u65B0\u52A0\u5165\u623F\u9593\u3002")):wd(U)?p("offline","\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6062\u5FA9\u7DB2\u8DEF\u5F8C\u6703\u81EA\u52D5\u63A5\u56DE\u623F\u9593\u3002"):p("error",U.message))}function M(){clearTimeout(o),!r&&n&&(o=setTimeout(()=>{P().catch(()=>{})},5e3))}async function P(){if(!n||r)return null;if(a)return a;let U=y(),q=s,H=(async()=>{try{let le=await T(U.apiBase,`/api/rooms/${U.roomCode}/snapshot`,{token:U.token,ticket:q});return E(le,q),le}catch(le){throw _(le,q),le}finally{g(q)&&(a=null,M())}})();return a=H,H}async function I(U,q,H){if(r)throw new Error("\u9023\u7DDA\u5DF2\u7D50\u675F\uFF0C\u8ACB\u91CD\u65B0\u8F09\u5165\u7DB2\u9801\u3002");if(n||h)throw new Error("\u8ACB\u5148\u96E2\u958B\u76EE\u524D\u623F\u9593\uFF0C\u518D\u5EFA\u7ACB\u6216\u52A0\u5165\u53E6\u4E00\u500B\u623F\u9593\u3002");let le=Am(U),R=s;h=!0,p("connecting","\u6B63\u5728\u9023\u63A5\u623F\u9593\u2026");try{let O=await T(le,q,{method:"POST",body:H,ticket:R}),W=wm({...O,apiBase:le});if(!W||!Number.isSafeInteger(O.snapshot?.revision)||!O.snapshot?.combat||O.snapshot.roomCode!==W.roomCode)throw new Error("\u623F\u9593\u8EAB\u5206\u8CC7\u6599\u7121\u6548\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u670D\u52D9\u7248\u672C\u3002");return S(W),E(O.snapshot,s),M(),O.snapshot}catch(O){throw g(R)&&p(wd(O)?"offline":"error",O.message),O}finally{h=!1}}let D=async()=>{if(r)return null;if(!n){let U=d();if(!U)return p("idle","\u76EE\u524D\u4F7F\u7528\u55AE\u6A5F\u6A21\u5F0F\u3002"),null;S(U),p("connecting","\u6B63\u5728\u63A5\u56DE\u4E0A\u6B21\u7684\u623F\u9593\u2026")}return P()},F=()=>{globalThis.document?.visibilityState==="visible"&&n&&P().catch(()=>{})},G=()=>{n&&(p("connecting","\u7DB2\u8DEF\u5DF2\u6062\u5FA9\uFF0C\u6B63\u5728\u540C\u6B65\u623F\u9593\u2026"),P().catch(()=>{}))},C=()=>{n&&p("offline","\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6062\u5FA9\u7DB2\u8DEF\u5F8C\u6703\u81EA\u52D5\u63A5\u56DE\u623F\u9593\u3002")};return globalThis.document?.addEventListener("visibilitychange",F),globalThis.window?.addEventListener("online",G),globalThis.window?.addEventListener("offline",C),{create:(U="")=>I(U,"/api/rooms",{}),join:(U="",q,H)=>{let le=String(q||"").trim().toUpperCase();return/^[A-Z0-9]{6,8}$/.test(le)?Tm.has(H)?I(U,`/api/rooms/${le}/join`,{characterId:H}):Promise.reject(new Error("\u8ACB\u9078\u64C7\u8981\u64CD\u4F5C\u7684\u89D2\u8272\u3002")):Promise.reject(new Error("\u8ACB\u8F38\u5165 6\u20138 \u78BC\u7684\u623F\u9593\u4EE3\u78BC\u3002"))},resume:D,leave({forget:U=!1}={}){r||(S(null,{keepStored:!U}),p("idle","\u5DF2\u66AB\u96E2\u623F\u9593\uFF0C\u53EF\u8FD4\u56DE\u4E0A\u6B21\u623F\u9593\uFF1B\u55AE\u6A5F\u9032\u5EA6\u4ECD\u4FDD\u7559\u3002"))},async command(U,q={},H){let le={...x()},R=s;if(l)throw new Error("\u4E0A\u4E00\u500B\u64CD\u4F5C\u6B63\u5728\u78BA\u8A8D\uFF0C\u8ACB\u7A0D\u5019\u3002");if(!Number.isSafeInteger(H)||H<0)throw new Error("\u623F\u9593\u9032\u5EA6\u5C1A\u672A\u540C\u6B65\uFF0C\u8ACB\u7A0D\u5019\u518D\u64CD\u4F5C\u3002");let O=Symbol("room-command");l=O;let W={commandId:crypto.randomUUID(),expectedRevision:H,type:U,payload:q};try{let se;for(let oe=0;oe<2;oe+=1)try{se=await T(le.apiBase,`/api/rooms/${le.roomCode}/commands`,{token:le.token,method:"POST",body:W,ticket:R});break}catch(z){if(!wd(z)||oe===1||!g(R))throw z}return E(se,R),se}catch(se){if(se.status===409&&g(R))try{await P()}catch{}throw _(se,R),se}finally{l===O&&(l=null),g(R)&&M()}},getSession:y,destroy(){r=!0,s+=1,v(),globalThis.document?.removeEventListener("visibilitychange",F),globalThis.window?.removeEventListener("online",G),globalThis.window?.removeEventListener("offline",C)}}}var kc=["axe","flame"],WS={axe:"\u6230\u65A7",flame:"\u708E\u528D"},XS=()=>({power:0,magic:0,weapons:[]}),qS={accepted:"\u4EA4\u6613\u5B8C\u6210",declined:"\u5C0D\u65B9\u5A49\u62D2",cancelled:"\u5DF2\u53D6\u6D88"},Cm={items_changed:"\u7269\u54C1\u5DF2\u8B8A\u66F4\uFF0C\u63D0\u6848\u5931\u6548",battle_started:"\u5DF2\u958B\u6230\uFF0C\u672A\u5B8C\u6210\u63D0\u6848\u53D6\u6D88",cancelled_by_sender:"\u63D0\u6848\u8005\u5DF2\u53D6\u6D88",declined_by_recipient:"\u6536\u4EF6\u8005\u5DF2\u5A49\u62D2",trade_limit:"\u672C\u5C40\u4EA4\u6613\u6B21\u6578\u5DF2\u9054\u4E0A\u9650",round_changed:"\u8F2A\u6B21\u5DF2\u6539\u8B8A",participant_dead:"\u4EA4\u6613\u89D2\u8272\u5DF2\u6B7B\u4EA1"};function Li(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function ya(i={}){if(!i||typeof i!="object")return"\u7121";let e=[];i.power&&e.push(`\u529B\u91CF\u724C ${i.power} \u5F35`),i.magic&&e.push(`\u9B54\u6CD5\u724C ${i.magic} \u5F35`);for(let t of kc)i.weapons?.includes(t)&&e.push(WS[t]);return e.join("\u3001")||"\u7121"}function Qr(i){return i.power>0||i.magic>0||i.weapons.length>0}function Im({onCommand:i,nameOf:e=t=>t}={}){let t=x=>document.getElementById(x),n=t("trade-panel"),s=t("trade-form"),r=t("trade-recipient"),o=null,a="",c="",l="",h=!1;function u(x=""){t("trade-message").textContent=x,t("trade-message").hidden=!x}function d(x){for(let T of["power","magic"])t(`trade-${x}-${T}`).value="0";for(let T of kc)t(`trade-${x}-${T}`).checked=!1}function f(x){let T=XS();for(let E of["power","magic"])T[E]=Number(t(`trade-${x}-${E}`).value);return T.weapons=kc.filter(E=>t(`trade-${x}-${E}`).checked),T}function p(){return!o?.snapshot||o.session?.role!=="player"?null:o.snapshot.combat.characters.find(x=>x.id===o.session.characterId)||null}function y(){let x=p();return!!(o?.online&&!o.busy&&!h&&x?.hp>0&&Array.isArray(o.snapshot.trades)&&o.snapshot.combat.phase==="preparation")}function m(){if(!o?.snapshot)return;let x=o.snapshot.combat,T=p(),E=x.characters.find(D=>D.id===r.value),_=y()&&E?.hp>0;r.disabled=!y()||r.options.length===0;for(let[D,F]of[["give",T],["receive",E]]){t(`trade-${D}-cards`).hidden=x.round===1;for(let G of["power","magic"]){let C=t(`trade-${D}-${G}`);C.disabled=!_||x.round===1,C.max=String(F?.cards?.[G]??0),x.round===1&&(C.value="0")}for(let G of kc){let C=t(`trade-${D}-${G}`),U=!!F?.weapons.includes(G);C.disabled=!_||!U,U||(C.checked=!1),C.closest("label").classList.toggle("is-unavailable",!U)}t(`trade-${D}-stock`).textContent=F?`${e(F.id)}\u6301\u6709\uFF1A${ya({...F.cards,weapons:F.weapons})}`:"\u6C92\u6709\u53EF\u4EA4\u6613\u7684\u5C0D\u8C61"}let M=f("give"),P=f("receive"),I=["give","receive"].every(D=>["power","magic"].every(F=>{let G=t(`trade-${D}-${F}`),C=Number(G.value);return G.value!==""&&Number.isSafeInteger(C)&&C>=0&&C<=Number(G.max)}));t("trade-propose").disabled=!_||!I||!Qr(M)&&!Qr(P),t("trade-propose").textContent=h?"\u6B63\u5728\u78BA\u8A8D\u4EA4\u6613\u2026":!Qr(P)&&Qr(M)?"\u9001\u51FA\u8D08\u9001\u63D0\u6848":!Qr(M)&&Qr(P)?"\u9001\u51FA\u7D22\u53D6\u63D0\u6848":"\u9001\u51FA\u4EA4\u63DB\u63D0\u6848",t("trade-preview").textContent=E?`\u6211\u4EA4\u51FA\uFF1A${ya(M)}
\u5E0C\u671B${e(E.id)}\u4EA4\u51FA\uFF1A${ya(P)}`:"\u76EE\u524D\u6C92\u6709\u5176\u4ED6\u5B58\u6D3B\u89D2\u8272\u53EF\u4EA4\u6613\u3002"}function g(x,T){let E=Li("li",`trade-offer trade-offer-${x.status}`);E.dataset.offerId=x.id;let _=Li("div","trade-offer-heading");_.append(Li("strong","",`${e(x.fromId)} \u2192 ${e(x.toId)}`),Li("span","trade-offer-state",x.status==="pending"?`\u7B49\u5F85${e(x.toId)}\u63A5\u53D7`:qS[x.status]||"\u63D0\u6848\u5DF2\u66F4\u65B0")),E.append(_,Li("p","",`${e(x.fromId)}\u4EA4\u51FA\uFF1A${ya(x.give)}`),Li("p","",`${e(x.toId)}\u4EA4\u51FA\uFF1A${ya(x.receive)}`));let M=[`\u7B2C ${x.round} \u8F2A`];if(x.reason&&Cm[x.reason]&&M.push(Cm[x.reason]),E.append(Li("small","trade-offer-meta",M.join(" \xB7 "))),x.status==="pending"&&o.session.role==="player"){let P=Li("div","trade-offer-actions"),I=(D,F,G=!1)=>{let C=Li("button",G?"trade-accept":"",F);C.type="button",C.dataset.tradeAction=D,C.dataset.offerId=x.id,C.disabled=!T,P.append(C)};x.toId===o.session.characterId&&(I("trade-accept","\u63A5\u53D7\u4EA4\u6613",!0),I("trade-decline","\u5A49\u62D2")),x.fromId===o.session.characterId&&I("trade-cancel","\u53D6\u6D88\u63D0\u6848"),P.childElementCount&&E.append(P)}return E}function v(x){let T=y(),E=JSON.stringify([x,o.session.role,o.session.characterId,T]);if(E===l)return;l=E;let _=x.filter(P=>P.status==="pending").slice().reverse(),M=x.filter(P=>P.status!=="pending").slice(-10).reverse();t("trade-pending-count").textContent=`${_.length} \u7B46\u5F85\u78BA\u8A8D`,t("trade-empty").hidden=_.length>0,t("trade-list").replaceChildren(..._.map(P=>g(P,T))),t("trade-history").hidden=M.length===0,t("trade-history-list").replaceChildren(...M.map(P=>g(P,!1)))}function S(x){o=x;let{snapshot:T,session:E}=x||{},_=T?.combat;if(n.hidden=!E||_?.phase!=="preparation",n.hidden)return;let M=`${T.roomCode}:${E.role}:${E.characterId||""}:${_.round}`;M!==a&&(a=M,c="",l="",s.reset(),d("give"),d("receive"),u()),t("trade-round-label").textContent=`\u7B2C ${_.round} \u8F2A\u6E96\u5099`,t("trade-rule").textContent=_.round===1?"\u7B2C\u4E00\u8F2A\u53EA\u4EA4\u6613\u6B66\u5668\u3002\u5C0D\u65B9\u63A5\u53D7\u5F8C\uFF0C\u624D\u6703\u79FB\u8F49\u7269\u54C1\u3002":"\u53EF\u4EA4\u63DB\u6216\u8D08\u9001\u6B66\u5668\u3001\u529B\u91CF\u724C\u8207\u9B54\u6CD5\u724C\u3002\u5C0D\u65B9\u63A5\u53D7\u5F8C\u624D\u6703\u79FB\u8F49\u3002";let P=Array.isArray(T.trades),I=p();s.hidden=!P||E.role!=="player"||!(I?.hp>0),t("trade-role-note").textContent=P?E.role==="host"?"\u4E3B\u6301\u4EBA\u53EF\u6AA2\u8996\u5168\u90E8\u63D0\u6848\u3002\u958B\u59CB\u6230\u9B25\u6703\u53D6\u6D88\u6240\u6709\u5C1A\u672A\u5B8C\u6210\u7684\u4EA4\u6613\uFF0C\u76F4\u63A5\u958B\u6230\u3002":I?.hp===0?"\u89D2\u8272\u5DF2\u6B7B\u4EA1\uFF0C\u7269\u54C1\u5DF2\u79FB\u4EA4\u64CA\u6BBA\u8005\uFF0C\u7121\u6CD5\u518D\u53C3\u8207\u4EA4\u6613\u3002":x.online?"\u53EA\u6709\u5B58\u6D3B\u89D2\u8272\u53EF\u4EE5\u4EA4\u6613\u3002\u5C1A\u672A\u5B8C\u6210\u7684\u63D0\u6848\u6703\u5728\u958B\u6230\u6642\u53D6\u6D88\u3002":"\u76EE\u524D\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6062\u5FA9\u9023\u7DDA\u5F8C\u624D\u80FD\u63D0\u51FA\u6216\u78BA\u8A8D\u4EA4\u6613\u3002":"\u9023\u7DDA\u670D\u52D9\u7248\u672C\u5C1A\u672A\u63D0\u4F9B\u4EA4\u6613\uFF0C\u8ACB\u4E3B\u6301\u4EBA\u66F4\u65B0\u5F8C\u7AEF\u3002";let D=_.characters.filter(C=>C.id!==E.characterId&&C.hp>0&&T.members?.some(U=>U.characterId===C.id&&U.claimed)),F=D.map(C=>C.id).join(",");if(F!==c){c=F;let C=r.value;r.replaceChildren(...D.map(U=>{let q=Li("option","",e(U.id));return q.value=U.id,q})),D.some(U=>U.id===C)?r.value=C:d("receive")}m();let G=P?T.trades.filter(C=>C&&typeof C.id=="string"&&(E.role==="host"||C.fromId===E.characterId||C.toId===E.characterId)):[];v(G)}return s.addEventListener("input",()=>{u(),m()}),s.addEventListener("change",x=>{x.target===r&&d("receive"),u(),m()}),s.addEventListener("submit",async x=>{if(x.preventDefault(),!y()||t("trade-propose").disabled||!s.reportValidity())return;let T=r.value,E={toId:T,give:f("give"),receive:f("receive")};h=!0,u(),S(o);try{let _=await i("trade-propose",E);_===!0?(d("give"),d("receive"),u("\u63D0\u6848\u5DF2\u9001\u51FA\uFF0C\u7B49\u5F85\u5C0D\u65B9\u63A5\u53D7\u3002")):_===!1&&u("\u63D0\u6848\u5C1A\u672A\u9001\u51FA\uFF0C\u8ACB\u4F9D\u6700\u65B0\u7269\u54C1\u8207\u9023\u7DDA\u72C0\u614B\u78BA\u8A8D\u5F8C\u518D\u8A66\u3002")}catch(_){u(_?.message||"\u63D0\u6848\u5C1A\u672A\u9001\u51FA\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002")}finally{h=!1,o&&S(o)}}),t("trade-list").addEventListener("click",async x=>{let T=x.target.closest("[data-trade-action]");if(!(!T||T.disabled||!y())){h=!0,u(),S(o);try{await i(T.dataset.tradeAction,{offerId:T.dataset.offerId})===!1&&u("\u4EA4\u6613\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u78BA\u8A8D\u6700\u65B0\u63D0\u6848\u8207\u7269\u54C1\u3002")}catch(E){u(E?.message||"\u4EA4\u6613\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002")}finally{h=!1,o&&S(o)}}}),{render:S,hide(){n.hidden=!0,o=null,a="",l=""}}}var Dm="fenrir-seven-seats-combat-v4",Um="fenrir-room-mode-v1",YS=["fenrir-seven-seats-combat-v3","fenrir-seven-seats-combat-v2"],$=i=>document.getElementById(i),nn=i=>yi.find(e=>e.id===i)?.name||"\u89D2\u8272",$S={axe:"\u6230\u65A7",flame:"\u708E\u528D"},j,Xc=!1;try{let i=localStorage.getItem(Dm);Xc=!i&&YS.some(e=>!!localStorage.getItem(e)),j=hh(i)}catch{j=cr()}var va=j,Ni,Rd,_t=!1,Yt=null,dn=null,no={state:"idle",message:"\u76EE\u524D\u70BA\u55AE\u6A5F\u6A21\u5F0F"},xi=!1,ss=!1,gi=null,$t=[],fn=null,Pn=null,Pm,Om,eo=!1,Cd="loading",Vc="\u82AC\u91CC\u723E\u70BA\u65E2\u6709\u4E3B\u6A94\u7684\u975C\u614B\u7DB2\u9801\u6A23\u672C\uFF0C\u6BDB\u9AEE\u8207\u6750\u8CEA\u63A1\u9810\u89BD\u7C21\u5316\u7248\u672C\u3002",Nd=new Map,Td={loadout:"\u521D\u59CB\u9053\u5177",setup:"\u521D\u59CB\u8840\u91CF",preparation:"\u6230\u524D\u6E96\u5099",battle:"\u6230\u9B25\u4E2D","round-end":"\u672C\u8F2A\u7D50\u675F",finished:"\u4E09\u8F2A\u7D50\u675F"},Dd=i=>$S[i]||"\u6B66\u5668",Ma=({power:i=0,magic:e=0})=>`\u529B\u91CF ${i}\u3001\u9B54\u6CD5 ${e}`,Id=i=>`${Ma(i.cards)}${i.weapons.length?" \xB7 "+i.weapons.map(Dd).join("\u3001"):""}`,Lm=({power:i=0,magic:e=0,weapons:t=[]}={})=>[i?`\u529B\u91CF\u724C ${i}`:"",e?`\u9B54\u6CD5\u724C ${e}`:"",...t.map(Dd)].filter(Boolean).join("\u3001")||"\u7121\u7269\u54C1";function Pd(){try{localStorage.setItem(Um,_t?"room":"solo")}catch{}}function sr(){if(!_t){va=j;try{localStorage.setItem(Dm,JSON.stringify(j))}catch{}}}var to=()=>!_t||Yt?.role==="host",ba=()=>!_t||!!(dn&&Yt&&no.state==="online"&&!xi),rs=()=>to()&&ba();function _i(){if(!_t)return!0;if(!ba()||j.phase!=="battle")return!1;let i=ii(j);return Yt.role==="host"?dn.takeoverCharacterId===i:Yt.characterId===i&&dn.takeoverCharacterId!==i}function Di(){_t&&Yt&&dn?Rd?.render({snapshot:dn,session:Yt,busy:xi,online:no.state==="online"}):Rd?.hide(),$("room-mode-local").setAttribute("aria-pressed",String(!_t)),$("room-mode-online").setAttribute("aria-pressed",String(_t)),$("room-connect-fields").hidden=!_t||!!Yt,$("room-session").hidden=!Yt,$("room-status").textContent=no.message,$("room-status").dataset.state=no.state,$("room-mode-caption").textContent=_t?Yt?.role==="host"?"\u623F\u9593\u4E3B\u6301\u4EBA":Yt?`${nn(Yt.characterId)}\u7684\u64CD\u4F5C\u756B\u9762`:"\u9023\u7DDA\u5F8C\u7531\u5404\u73A9\u5BB6\u64CD\u4F5C":"\u540C\u4E00\u88DD\u7F6E\u8F2A\u6D41\u64CD\u4F5C",$("prototype-badge").textContent=_t?"\u516B\u7AEF\u9023\u7DDA\u539F\u578B":"\u4E09\u8F2A\u55AE\u6A5F\u539F\u578B",document.body.dataset.mode=_t?"room":"solo";for(let t of["room-create","room-join","room-resume","room-api-base","room-code","room-character"])$(t).disabled=ss;if($("room-mode-local").disabled=ss||xi,$("room-mode-online").disabled=ss||xi,$("room-leave").disabled=xi||ss,!Yt)return;$("room-session-code").textContent=Yt.roomCode,$("room-session-role").textContent=Yt.role==="host"?"\u4E3B\u6301\u4EBA":nn(Yt.characterId),$("room-members").replaceChildren(...yi.map(t=>{let n=dn?.members.find(a=>a.characterId===t.id),s=document.createElement("li"),r=document.createElement("span"),o=document.createElement("small");return r.textContent=t.name+"\uFF1A",o.textContent=`${n?.claimed?n.online?"\u5DF2\u9023\u7DDA":"\u66AB\u6642\u96E2\u7DDA":"\u5C1A\u672A\u52A0\u5165"}${dn?.takeoverCharacterId===t.id?"\uFF08\u4E3B\u6301\u4EBA\u63A5\u7BA1\uFF09":""}`,s.append(r,o),s.classList.toggle("is-online",!!n?.online),s.classList.toggle("is-self",Yt.characterId===t.id),s}));let i=Yt.role==="host",e=ii(j);$("room-takeover-controls").hidden=!i||j.phase!=="battle",$("room-takeover").hidden=!i||j.phase!=="battle"||!!dn?.takeoverCharacterId,$("room-takeover").disabled=!ba()||!e,$("room-takeover").textContent=e?`\u63A5\u7BA1${nn(e)}\u672C\u6B21\u884C\u52D5`:"\u63A5\u7BA1\u76EE\u524D\u884C\u52D5\u8005",$("room-release").hidden=!i||!dn?.takeoverCharacterId,$("room-release").disabled=!ba()}function KS(i){let e=hh(i.combat);if(JSON.stringify(e)!==JSON.stringify(i.combat))throw new Error("\u623F\u9593\u6230\u9B25\u8CC7\u6599\u7121\u6CD5\u9A57\u8B49\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u670D\u52D9\u7248\u672C\u3002");i={...i,combat:e};let t=dn,n=!t,s=n||i.combat.revision!==t.combat.revision,r=n||i.takeoverCharacterId!==t.takeoverCharacterId;if(!(!n&&i.revision<t.revision)){if(dn=i,s){let o=n?1/0:j.log.at(-1)?.id||0,a=n&&Yt?.characterId?Yt.characterId:j.selectedId;j={...i.combat,selectedId:a},$t=[],fn=null,Pn=null,ln({preserveInput:!n});for(let c of j.log.filter(l=>l.id>o&&l.type==="attack"))gi?.playAttackBatch?.({actorId:c.actorId,targets:c.results.map(({targetId:l,killed:h})=>({targetId:l,killed:h}))})}else r?($t=[],fn=null,Pn=null,ln({preserveInput:!0})):t.revision!==i.revision&&(Pn=null,$("attack-button").dataset.revision=i.revision,j.phase==="battle"&&Fm(j.characters.find(o=>o.id===ii(j))));Di()}}async function Rs(i,e={},t=""){if(!_t||!ba())return!1;xi=!0,document.querySelectorAll("#battle-controls input, #battle-controls button, #loadout-character").forEach(n=>{n.disabled=!0}),Di();try{return await Ni.command(i,e,dn.revision),t&&Ln(t),!0}catch(n){return Ln(n.message||"\u64CD\u4F5C\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u72C0\u614B"),!1}finally{xi=!1,ln(),Di()}}async function zc(i){if(!(ss||Yt)){_t||(sr(),va=j),_t=!0,Pd(),ss=!0,ln(),Di();try{await i()}catch(e){Ln(e.message||"\u7121\u6CD5\u9023\u7DDA\uFF0C\u8ACB\u6AA2\u67E5\u623F\u78BC\u8207\u5F8C\u7AEF\u7DB2\u5740")}finally{ss=!1,ln(),Di()}}}function ZS(){Ni=Rm({onSnapshot:KS,onStatus:i=>{let e=no.state!==i.state;no=i,e&&ln({preserveInput:!0}),Di()},onSession:i=>{Yt=i,i?(_t=!0,dn=null):(_t=!1,dn=null,j=va,$t=[],fn=null,Pn=null),Pd(),ln(),Di()}}),$("room-mode-local").addEventListener("click",()=>{ss||xi||(Ni.leave(),_t=!1,j=va,ln(),Di())}),$("room-mode-online").addEventListener("click",()=>{ss||xi||(_t||(sr(),va=j),_t=!0,Pd(),ln(),Di())}),$("room-create").addEventListener("click",()=>zc(()=>Ni.create($("room-api-base").value))),$("room-join").addEventListener("click",()=>zc(()=>Ni.join($("room-api-base").value,$("room-code").value,$("room-character").value))),$("room-resume").addEventListener("click",()=>zc(()=>Ni.resume())),$("room-leave").addEventListener("click",()=>Ni.leave()),$("room-takeover").addEventListener("click",()=>Rs("takeover",{characterId:ii(j)},"\u5DF2\u63A5\u7BA1\u672C\u6B21\u884C\u52D5")),$("room-release").addEventListener("click",()=>Rs("takeover",{characterId:null},"\u5DF2\u4EA4\u56DE\u73A9\u5BB6\u64CD\u4F5C"));try{localStorage.getItem("fenrir-room-session-v1")&&localStorage.getItem(Um)!=="solo"&&zc(()=>Ni.resume())}catch{}}function Ln(i){clearTimeout(Pm),$("toast").textContent=i,$("toast").classList.add("visible"),Pm=setTimeout(()=>$("toast").classList.remove("visible"),3200)}function Wc(i,e){if(_t)return!1;try{return j=i(j),$t=[],fn=null,Pn=null,ln(),sr(),e&&Ln(e),!0}catch(t){return Ln(t.message||"\u8ACB\u78BA\u8A8D\u76EE\u524D\u7684\u884C\u52D5\u8005\u8207\u968E\u6BB5\u3002"),!1}}function Sa(i){_t&&xi||(j=Vd(j,i),j.phase==="battle"&&_i()&&JS(i),ln(),sr())}function JS(i){if(Pn=null,fn==="flame"){$t=[...ro(j,fn)[0]||[]];return}if(i===ii(j)){$t=[];return}if(!fn){Ln("\u76EE\u524D\u6C92\u6709\u53EF\u7528\u7684\u653B\u64CA\u724C\uFF0C\u53EF\u653E\u68C4\u672C\u6B21\u884C\u52D5");return}if(!ro(j,fn).some(t=>t.includes(i))){Ln("\u9019\u500B\u89D2\u8272\u4E0D\u5728\u672C\u6B21\u653B\u64CA\u7684\u5408\u6CD5\u7BC4\u570D\u5167");return}$t=$t.includes(i)?[]:[i]}async function Hc(i,e,t){eo||(eo=!0,_t?(!rs()||!await Rs(t,{},e))&&(eo=!1):Wc(i,e)||(eo=!1),setTimeout(()=>{eo=!1,Bm()},500))}function Gc(i){return i.hp===0?"\u5DF2\u6B7B\u4EA1":j.phase==="battle"&&i.id===ii(j)?"\u76EE\u524D\u884C\u52D5":j.actedIds.includes(i.id)?"\u5DF2\u884C\u52D5":j.phase==="battle"?"\u5F85\u884C\u52D5":"\u5B58\u6D3B"}function jS(){$("loadout-character").innerHTML=yi.map(i=>`<option value="${i.id}">${i.name}</option>`).join(""),$("roster").innerHTML=yi.map(i=>`<div class="roster-row" data-character="${i.id}">
    <span class="seat-number" data-seat="${i.id}"></span>
    <button class="roster-portrait" type="button" data-select="${i.id}" aria-label="\u6AA2\u8996${i.name}"><img src="./${i.portrait}" alt="" loading="lazy"></button>
    <button class="roster-name" type="button" data-select="${i.id}">${i.name}<small data-status="${i.id}"></small><span class="roster-items" data-items="${i.id}"></span></button>
    <div class="hp-stepper"><button type="button" data-delta="-1" data-id="${i.id}" aria-label="${i.name}\u8840\u91CF\u6E1B\u4E00">\u2212</button>
    <input type="number" min="0" max="999" step="1" inputmode="numeric" id="hp-${i.id}" data-hp="${i.id}" aria-label="${i.name}\u8840\u91CF">
    <button type="button" data-delta="1" data-id="${i.id}" aria-label="${i.name}\u8840\u91CF\u52A0\u4E00">\uFF0B</button></div></div>`).join("");for(let i of yi){let e=document.createElement("button");e.type="button",e.className="seat-label",e.dataset.label=i.id,e.innerHTML='<span class="seat-name"></span><span class="seat-meta"></span><span class="seat-state"></span>',e.addEventListener("click",()=>Sa(i.id)),$("labels").append(e),Nd.set(i.id,e)}}function QS(i){if(i.type==="loadout")return"\u4E3B\u6301\u4EBA\u78BA\u5B9A\u521D\u59CB\u724C\u6578\u8207\u6B66\u5668\uFF0C\u9032\u5165\u8840\u91CF\u8A2D\u5B9A";if(i.type==="setup")return"\u4E3B\u6301\u4EBA\u78BA\u5B9A\u521D\u59CB\u8840\u91CF\uFF0C\u89D2\u8272\u4F9D\u8840\u91CF\u5C31\u5EA7";if(i.type==="battle-start")return"\u4E3B\u6301\u4EBA\u958B\u59CB\u672C\u8F2A\u6230\u9B25";if(i.type==="pass")return`${nn(i.actorId)}\u653E\u68C4\u672C\u6B21\u884C\u52D5`;if(i.type==="trade")return`${nn(i.fromId)}\u4EA4\u51FA${Lm(i.give)}\uFF0C${nn(i.toId)}\u4EA4\u51FA${Lm(i.receive)}\uFF0C\u5B8C\u6210\u4EA4\u6613`;if(i.type==="attack"){let e={power:"\u529B\u91CF\u653B\u64CA",magic:"\u9B54\u6CD5\u653B\u64CA",axe:"\u6230\u65A7",flame:"\u708E\u528D"},t=i.results.map(s=>`${nn(s.targetId)} ${s.hpBefore} \u2192 ${s.hpAfter} \u8840${s.killed?"\uFF08\u64CA\u6BBA\uFF09":s.hpBefore===0?"\uFF08\u539F\u5DF2\u6B7B\u4EA1\uFF09":""}`).join("\uFF1B"),n=i.loot.map(s=>`\u53D6\u5F97${nn(s.victimId)}\u7684${Ma(s)}${s.weapons.length?"\u3001"+s.weapons.map(Dd).join("\u3001"):""}`).join("\uFF1B");return`${nn(i.actorId)}\u4F7F\u7528${e[i.actionId]}\uFF0C\u6D88\u8017${Ma(i.cost)}\uFF1A${t}${n?"\uFF1B"+n:""}`}return i.type==="advance"?`\u8F2A\u672B\u63DB\u5EA7\u5B8C\u6210\uFF0C\u9032\u5165\u7B2C ${i.nextRound} \u8F2A\u6E96\u5099`:i.type==="finish"?"\u5B8C\u6210\u6700\u7D42\u63DB\u5EA7\uFF0C\u4E09\u8F2A\u5C0D\u6230\u7D50\u675F":"\u968E\u6BB5\u5DF2\u66F4\u65B0"}function eM(){$("record-empty").hidden=j.log.length>0,$("record-count").textContent=j.log.length?`${j.log.length} \u7B46`:"\u5C1A\u672A\u958B\u59CB",$("combat-log").innerHTML=[...j.log].reverse().map(i=>{let t=dn?.audit.find(n=>n.combatEventId===i.id)?.operatorRole==="host"&&["attack","pass"].includes(i.type)?"\u4E3B\u6301\u4EBA\u4EE3\u64CD\u4F5C\uFF1A":"";return`<li class="${i.results?.some(n=>n.killed)?"kill-event":""}"><span>\u7B2C ${i.round} \u8F2A</span><p>${t}${QS(i)}</p></li>`}).join(""),$("kills-empty").hidden=j.kills.length>0,$("kill-list").innerHTML=j.kills.map(i=>`<li>\u7B2C ${i.round} \u8F2A\uFF1A${nn(i.killerId)}\u64CA\u6BBA${nn(i.victimId)}</li>`).join("")}function Ld(){if($("loadout-panel").hidden=j.phase!=="loadout",$("legacy-notice").hidden=_t||!Xc||j.phase!=="loadout",j.phase!=="loadout")return;let i=j.characters.find(e=>e.id===j.selectedId);$("loadout-character").disabled=_t&&xi,$("loadout-character").value=i.id,$("loadout-name").textContent=`${i.name}\u7684\u521D\u59CB\u9053\u5177`;for(let e of["power","magic"]){let t=$("initial-"+e);document.activeElement!==t&&(t.value=i.cards[e]),t.disabled=!rs()}for(let e of["axe","flame"]){let t=$("initial-"+e),n=j.characters.find(s=>s.weapons.includes(e));t.checked=i.weapons.includes(e),t.disabled=!rs()||!!(n&&n.id!==i.id),$("owner-"+e).textContent=n&&n.id!==i.id?`${n.name}\u6301\u6709\uFF0C\u9700\u5148\u79FB\u9664`:e==="axe"?"\u529B\u91CF\u724C\u55AE\u9AD4\u50B7\u5BB3 3":"\u4F7F\u7528\u8005\u5DE6\u53F3\u5169\u5074\u5404 2 \u50B7\u5BB3"}$("flame-fixed-rule").hidden=!j.characters.some(e=>e.weapons.includes("flame"))}function Fm(i){let e=Xd(j);e.some(r=>r.id===fn&&r.available)||(fn=e.find(r=>r.available)?.id||null);let t=e.find(r=>r.id===fn),n=t?ro(j,fn):[];$("action-title").textContent=`${i.name}\u884C\u52D5`,$("actor-hp").textContent=`${i.hp} \u8840`,$("actor-cards").textContent=`\u6301\u6709${Id(i)}`,$("attack-methods").innerHTML=e.map(r=>`<button type="button" data-action="${r.id}" aria-pressed="${r.id===fn}"${r.available&&_i()?"":" disabled"}><span>${r.name}</span><small>${r.available?`\u6D88\u8017${Ma(r.cost)} \xB7 ${r.targetCount} \u76EE\u6A19`:r.reason}</small></button>`).join(""),$("attack-rule").textContent=t?`${t.name}\uFF1A\u6D88\u8017${Ma(t.cost)}\uFF0C${t.targetCount===2?"\u4F7F\u7528\u8005\u5DE6\u53F3\u5169\u5074\u5404":"\u9020\u6210"} ${t.damage} \u9EDE\u50B7\u5BB3\u3002${t.id==="flame"?"\u76EE\u6A19\u5DF2\u56FA\u5B9A\uFF1B\u7B2C 1 \u5E2D\u8207\u7B2C 7 \u5E2D\u76F8\u9130\u3002":""}`:"\u6C92\u6709\u53EF\u7528\u7684\u653B\u64CA\u724C\uFF0C\u8ACB\u653E\u68C4\u672C\u6B21\u884C\u52D5\u3002",$("target-grid").innerHTML=j.characters.filter(r=>r.id!==i.id).map(r=>{let o=$t.includes(r.id),a=[r.id],c=o||n.some(h=>a.every(u=>h.includes(u))),l=t?.id==="flame"?`\u6AA2\u8996${r.name}${o?"\uFF0C\u708E\u528D\u56FA\u5B9A\u76EE\u6A19":""}`:`\u9078\u64C7${r.name}\u70BA\u653B\u64CA\u76EE\u6A19`;return`<button type="button" data-target="${r.id}" aria-label="${l}" aria-pressed="${o}" class="target-choice${o?" is-target":""}${r.hp===0?" is-dead":""}"${c&&_i()?"":" disabled"}><span>${r.name}</span><small>\u7B2C ${j.seatOrder.indexOf(r.id)+1} \u5E2D \xB7 ${r.hp===0?"\u5DF2\u6B7B\u4EA1":r.hp+" \u8840"}</small></button>`}).join("");let s=null;if(t&&$t.length===t.targetCount)try{s=oh(j,{actorId:i.id,actionId:fn,targetIds:$t})}catch{}$("target-detail").textContent=s?s.results.map(r=>`${nn(r.targetId)}\uFF1A${r.hpBefore} \u2192 ${r.hpAfter} \u8840${r.hpBefore===0?"\uFF08\u7121\u65B0\u589E\u64CA\u6BBA\u6216\u6230\u5229\u54C1\uFF09":r.killed?"\uFF08\u64CA\u6BBA\u4E26\u53D6\u5F97\u5176\u724C\u8207\u6B66\u5668\uFF09":""}`).join(`
`):t?`\u5DF2\u9078 ${$t.length}\uFF0F${t.targetCount} \u500B\u76EE\u6A19${t.id==="flame"?"\uFF0C\u4F9D\u672C\u8F2A\u56FA\u5B9A\u5EA7\u4F4D\u5224\u65B7\u7BC4\u570D":""}`:"\u6C92\u6709\u53EF\u7528\u653B\u64CA",$("clear-targets").hidden=t?.id==="flame"||$t.length===0,$("target-grid").setAttribute("aria-label",t?.id==="flame"?"\u708E\u528D\u56FA\u5B9A\u76EE\u6A19":"\u9078\u64C7\u653B\u64CA\u76EE\u6A19"),$("attack-button").disabled=!_i()||!s||!!Pn,$("attack-button").textContent=s?`\u78BA\u8A8D${t.name}\uFF08${$t.map(nn).join("\u3001")}\uFF09`:"\u9078\u5B9A\u5408\u6CD5\u76EE\u6A19\u5F8C\u51FA\u62DB",$("attack-button").dataset.actor=i.id,$("attack-button").dataset.revision=_t?dn?.revision??-1:j.revision,$("pass-button").hidden=!!Pn,$("pass-button").disabled=!_i(),$("confirm-pass").disabled=!_i(),$("pass-confirm").hidden=!Pn,$("pass-question").textContent=`\u78BA\u5B9A\u8B93${i.name}\u653E\u68C4\u672C\u8F2A\u884C\u52D5\uFF1F\u4E0D\u6703\u6D88\u8017\u724C\u3002`}function Bm(){let i=ii(j),e=j.characters.find(o=>o.id===i),t={loadout:"\u5148\u8A2D\u5B9A\u4E03\u540D\u89D2\u8272\u7684\u724C\u8207\u6B66\u5668",setup:"\u518D\u8A2D\u5B9A\u4E03\u540D\u89D2\u8272\u7684\u521D\u59CB\u8840\u91CF",preparation:`\u7B2C ${j.round} \u8F2A\uFF0C\u7B49\u5F85\u4E3B\u6301\u4EBA\u958B\u6230`,battle:e?`${e.name}\u884C\u52D5`:"\u672C\u8F2A\u6C92\u6709\u53EF\u884C\u52D5\u7684\u89D2\u8272","round-end":`\u7B2C ${j.round} \u8F2A\u884C\u52D5\u7D50\u675F`,finished:"\u4E09\u8F2A\u5C0D\u6230\u5DF2\u5B8C\u6210"},n={loadout:"\u9EDE\u9078\u89D2\u8272\u8A2D\u5B9A\u521D\u59CB\u724C\u6578\u8207\u6B66\u5668\u3002\u529B\u91CF 2\u3001\u9B54\u6CD5 2 \u662F\u53EF\u4FEE\u6539\u7684\u793A\u7BC4\u503C\uFF0C\u8ACB\u4F9D\u524D\u7F6E\u904A\u6232\u7D50\u679C\u8ABF\u6574\u3002",setup:"\u521D\u59CB\u9053\u5177\u5DF2\u78BA\u5B9A\uFF0C\u7531\u4E3B\u6301\u4EBA\u8A2D\u5B9A\u8840\u91CF\uFF0C\u518D\u78BA\u8A8D\u5C31\u5EA7\u3002\u9053\u5177\u4E0D\u6703\u5728\u6BCF\u8F2A\u81EA\u52D5\u88DC\u5145\u3002",preparation:_t?`\u7B2C ${j.round} \u8F2A\u6230\u524D\u6E96\u5099\u3002${j.round===1?"\u53EF\u4EA4\u63DB\u6216\u8D08\u9001\u6B66\u5668\u3002":"\u53EF\u4EA4\u63DB\u6216\u8D08\u9001\u6B66\u5668\u8207\u653B\u64CA\u724C\u3002"}\u4E3B\u6301\u4EBA\u958B\u6230\u6642\u6703\u53D6\u6D88\u5C1A\u672A\u5B8C\u6210\u7684\u63D0\u6848\u3002`:`\u7B2C ${j.round} \u8F2A\u6230\u524D\u6E96\u5099\u3002\u7531\u4E3B\u6301\u4EBA\u958B\u59CB\u6230\u9B25\uFF1B\u4EA4\u6613\u529F\u80FD\u8ACB\u4F7F\u7528\u9023\u7DDA\u623F\u9593\u6A21\u5F0F\u3002`,battle:"\u4F9D\u6700\u65B0\u8840\u91CF\u5B89\u6392\u5C1A\u672A\u884C\u52D5\u7684\u5B58\u6D3B\u89D2\u8272\u3002\u6BCF\u4EBA\u672C\u8F2A\u53EA\u80FD\u884C\u52D5\u4E00\u6B21\uFF0C\u5EA7\u4F4D\u4FDD\u6301\u56FA\u5B9A\u3002","round-end":j.round<3?"\u672C\u8F2A\u5DF2\u6C92\u6709\u53EF\u884C\u52D5\u7684\u89D2\u8272\u3002\u78BA\u8A8D\u7D00\u9304\u5F8C\u63DB\u5EA7\uFF0C\u518D\u9032\u5165\u4E0B\u4E00\u8F2A\u6E96\u5099\u3002":"\u7B2C\u4E09\u8F2A\u884C\u52D5\u7D50\u675F\u3002\u78BA\u8A8D\u7D00\u9304\u5F8C\u5B8C\u6210\u6700\u7D42\u63DB\u5EA7\u3002",finished:"\u4E09\u8F2A\u5DF2\u7D50\u675F\u3002\u53EF\u67E5\u770B\u6700\u7D42\u8840\u91CF\u8207\u64CA\u6BBA\u7D00\u9304\uFF1B\u672C\u7248\u5C1A\u672A\u5224\u5B9A\u9663\u71DF\u52DD\u8CA0\u3002"};$("round-number").textContent=j.round,$("phase-caption").textContent=`\uFF0F ${Td[j.phase]}`,document.body.dataset.phase=j.phase,$("battle-status").textContent=Td[j.phase],$("battle-headline").textContent=t[j.phase],$("battle-banner").dataset.phase=j.phase,$("host-title").textContent=j.phase==="battle"?"\u672C\u6B21\u884C\u52D5":Td[j.phase];let s=_t&&!to()&&["loadout","setup","preparation","round-end"].includes(j.phase)?" \u8ACB\u7B49\u5F85\u4E3B\u6301\u4EBA\u78BA\u8A8D\u3002":_t&&j.phase==="battle"&&!_i()?dn?.takeoverCharacterId?" \u4E3B\u6301\u4EBA\u6B63\u5728\u4EE3\u64CD\u4F5C\u3002":" \u8ACB\u7B49\u5F85\u76EE\u524D\u884C\u52D5\u7684\u73A9\u5BB6\u51FA\u62DB\u3002":"";$("phase-description").textContent=n[j.phase]+s,document.querySelectorAll("[data-round]").forEach(o=>{let a=Number(o.dataset.round);o.classList.toggle("is-current",a===j.round&&j.phase!=="finished"),o.classList.toggle("is-complete",a<j.round||j.phase==="finished"),a===j.round?o.setAttribute("aria-current","step"):o.removeAttribute("aria-current")}),$("loadout-confirm").hidden=j.phase!=="loadout"||!to(),$("setup-confirm").hidden=j.phase!=="setup"||!to(),$("start-battle").hidden=j.phase!=="preparation"||!to(),$("start-battle").textContent=`\u4E3B\u6301\u4EBA\u958B\u59CB\u7B2C ${j.round} \u8F2A\u6230\u9B25`,$("advance-round").hidden=j.phase!=="round-end"||!to(),$("advance-round").textContent=j.round<3?`\u63DB\u5EA7\u4E26\u9032\u5165\u7B2C ${j.round+1} \u8F2A\u6E96\u5099`:"\u5B8C\u6210\u6700\u7D42\u63DB\u5EA7\u8207\u5C0D\u6230";for(let o of["loadout-confirm","setup-confirm","start-battle","advance-round"])$(o).disabled=eo||!rs();for(let o of["reset-all","reset-preview"])$(o).hidden=_t;$("action-panel").hidden=j.phase!=="battle";let r=j.phase==="battle"?eh(j):["loadout","setup","preparation"].includes(j.phase)?Qc(j).filter(o=>j.characters.find(a=>a.id===o).hp>0):[];$("queue-title").textContent=j.phase==="battle"?"\u5F85\u884C\u52D5":["round-end","finished"].includes(j.phase)?"\u672C\u8F2A\u5DF2\u7D50\u675F":"\u9810\u8A08\u9806\u5E8F",$("action-queue").innerHTML=r.length?r.map(o=>`<li class="${i===o?"queue-active":""}">${nn(o)}</li>`).join(""):'<li class="queue-empty">\u6C92\u6709\u5C1A\u5F85\u884C\u52D5\u7684\u89D2\u8272</li>',$("tie-note").textContent=j.round===1?"\u9996\u8F2A\u540C\u8840\u91CF\u5148\u4F9D\u793A\u7BC4\u9806\u4F4D\uFF0C\u6B63\u5F0F\u898F\u5247\u5F85\u78BA\u8A8D\u3002":"\u540C\u8840\u91CF\u53C3\u7167\u4E0A\u4E00\u8F2A\u884C\u52D5\u9806\u5E8F\uFF1B\u672A\u884C\u52D5\u8005\u66AB\u6CBF\u7528\u539F\u9806\u4F4D\u3002",$("roster-hint").textContent=j.phase==="loadout"?"\u9EDE\u89D2\u8272\u8A2D\u5B9A\u9053\u5177":j.phase==="setup"?"\u6B64\u968E\u6BB5\u53EF\u4FEE\u6539\u8840\u91CF":j.phase==="battle"?"\u9EDE\u89D2\u8272\u4E5F\u53EF\u9078\u64C7\u76EE\u6A19":"\u521D\u59CB\u8A2D\u5B9A\u5DF2\u9396\u5B9A",Ld(),e&&Fm(e)}function ln({preserveInput:i=!1}={}){let e=ii(j),t=j.characters.find(n=>n.id===j.selectedId);j.seatOrder.forEach((n,s)=>{let r=j.characters.find(l=>l.id===n),o=document.querySelector(`[data-character="${n}"]`);o.style.order=s;for(let[l,h]of[["is-selected",n===j.selectedId],["is-active",n===e],["is-target",$t.includes(n)],["is-dead",r.hp===0]])o.classList.toggle(l,h);document.querySelector(`[data-seat="${n}"]`).textContent=s+1,document.querySelector(`[data-status="${n}"]`).textContent=Gc(r),document.querySelector(`[data-items="${n}"]`).textContent=Id(r);let a=$("hp-"+n);(!i||document.activeElement!==a)&&(a.value=r.hp),a.disabled=j.phase!=="setup"||!rs(),o.querySelector('[data-delta="-1"]').disabled=j.phase!=="setup"||!rs()||r.hp===0,o.querySelector('[data-delta="1"]').disabled=j.phase!=="setup"||!rs()||r.hp===999;let c=Nd.get(n);for(let[l,h]of[["selected",n===j.selectedId],["dead",r.hp===0],["is-active",n===e],["is-target",$t.includes(n)],["has-acted",j.actedIds.includes(n)]])c.classList.toggle(l,h);c.querySelector(".seat-name").textContent=r.name,c.querySelector(".seat-meta").textContent=`\u7B2C ${s+1} \u5E2D \xB7 ${r.hp} \u8840`,c.querySelector(".seat-state").textContent=$t.includes(n)?"\u653B\u64CA\u76EE\u6A19":Gc(r),c.setAttribute("aria-label",`${r.name}\uFF0C\u7B2C${s+1}\u5E2D\uFF0C\u8840\u91CF${r.hp}\uFF0C${Gc(r)}${$t.includes(n)?"\uFF0C\u653B\u64CA\u76EE\u6A19":""}`),c.setAttribute("aria-pressed",String(n===j.selectedId))}),$("selected-name").textContent=t.name,$("selected-subtitle").textContent=`${t.subtitle} \xB7 ${Gc(t)}`,$("selected-hp").textContent=t.hp,$("selected-seat").textContent=`\u76EE\u524D\u7B2C ${j.seatOrder.indexOf(t.id)+1} \u5E2D`,$("selected-description").textContent=t.id==="fenrir"?"\u72FC\u9762\u7532\u8207\u5B9A\u5411\u9B03\u6BDB\u7684\u975C\u614B\u6A23\u672C\uFF0C\u6B63\u5F0F\u52D5\u4F5C\u4ECD\u5F85\u88FD\u4F5C\u3002":"\u76EE\u524D\u4F7F\u7528\u7AD9\u4F4D\u66FF\u8EAB\uFF0C\u6B63\u5F0F\u9020\u578B\u4F9D\u89D2\u8272\u6D77\u5831\u88FD\u4F5C\u3002",$("selected-portrait").src="./"+t.portrait,$("selected-portrait").alt=t.name+"\u89D2\u8272\u6D77\u5831",$("selected-items").textContent=Id(t),$("rank-preview").hidden=!["setup","round-end"].includes(j.phase),$("rank-list").innerHTML=Qc(j).map((n,s)=>`<li><span>${s+1}</span>${nn(n)}</li>`).join(""),Bm(),eM(),Di(),gi?.update({characters:j.characters,seatOrder:j.seatOrder,selectedId:j.selectedId,combat:j.phase==="battle"?{activeId:e,targetIds:$t,actedIds:j.actedIds}:null})}function Ad(i,e,t=!1){if(_t){if(!rs())return;try{return jc(j,i,e),$("hp-"+i).removeAttribute("aria-invalid"),Rs("set-hp",{characterId:i,hp:e})}catch(n){$("hp-"+i).setAttribute("aria-invalid","true"),Ln(n.message);return}}try{j=jc(j,i,e),$("hp-"+i).removeAttribute("aria-invalid"),ln({preserveInput:t}),sr()}catch(n){$("hp-"+i).setAttribute("aria-invalid","true"),Ln(n.message)}}function Nm(){if(_t&&!rs())return!1;let i=j.characters.find(t=>t.id===j.selectedId),e=[$("initial-power"),$("initial-magic")];if(e.some(t=>t.value===""||!t.checkValidity())){for(let t of e)t.value=i.cards[t.id==="initial-power"?"power":"magic"];return Ln("\u521D\u59CB\u724C\u6578\u8ACB\u8F38\u5165 0\u201399 \u7684\u6574\u6578"),Ld(),!1}try{let t={power:Number(e[0].value),magic:Number(e[1].value),weapons:["axe","flame"].filter(s=>$("initial-"+s).checked)},n=Gd(j,i.id,t);return _t?Rs("set-loadout",{characterId:i.id,...t}):(j=n,ln(),sr(),!0)}catch(t){return Ln(t.message),Ld(),!1}}function tM(){$("loadout-character").addEventListener("change",i=>Sa(i.target.value));for(let i of["initial-power","initial-magic","initial-axe","initial-flame"])$(i).addEventListener("change",Nm);$("loadout-confirm").addEventListener("click",async()=>{await Nm()&&(Xc=!1,Hc(Jc,"\u521D\u59CB\u9053\u5177\u5DF2\u78BA\u5B9A\uFF0C\u63A5\u8457\u8A2D\u5B9A\u8840\u91CF","finish-loadout"))}),$("roster").addEventListener("click",i=>{let e=i.target.closest("[data-select]");if(e){Sa(e.dataset.select);return}let t=i.target.closest("[data-delta]");if(t){let n=j.characters.find(s=>s.id===t.dataset.id);Ad(n.id,n.hp+Number(t.dataset.delta))}}),$("roster").addEventListener("input",i=>{!_t&&i.target.matches("[data-hp]")&&i.target.value!==""&&Ad(i.target.dataset.hp,Number(i.target.value),!0)}),$("roster").addEventListener("change",i=>{if(!i.target.matches("[data-hp]"))return;let e=i.target,t=Number(e.value);e.value===""||!Number.isInteger(t)||t<0||t>999?(e.value=j.characters.find(n=>n.id===e.dataset.hp).hp,e.removeAttribute("aria-invalid"),Ln("\u5DF2\u9084\u539F\u4E0A\u4E00\u6B21\u6709\u6548\u8840\u91CF")):Ad(e.dataset.hp,t)}),$("setup-confirm").addEventListener("click",()=>{let i=[...document.querySelectorAll("[data-hp]")].find(e=>e.value===""||!e.checkValidity());if(i){i.focus(),Ln("\u8ACB\u5148\u5B8C\u6210\u6709\u6548\u7684\u521D\u59CB\u8840\u91CF\u8A2D\u5B9A");return}Hc(th,"\u521D\u59CB\u8840\u91CF\u5DF2\u78BA\u5B9A\uFF0C\u7B49\u5F85\u4E3B\u6301\u4EBA\u958B\u6230","finish-setup")}),$("start-battle").addEventListener("click",()=>Hc(nh,`\u7B2C ${j.round} \u8F2A\u6230\u9B25\u958B\u59CB`,"start-battle")),$("advance-round").addEventListener("click",()=>Hc(ch,j.round<3?`\u5DF2\u63DB\u5EA7\uFF0C\u9032\u5165\u7B2C ${j.round+1} \u8F2A\u6E96\u5099`:"\u6700\u7D42\u63DB\u5EA7\u5B8C\u6210\uFF0C\u4E09\u8F2A\u5C0D\u6230\u7D50\u675F","advance-round")),$("target-grid").addEventListener("click",i=>{let e=i.target.closest("[data-target]");e&&Sa(e.dataset.target)}),$("attack-methods").addEventListener("click",i=>{let e=i.target.closest("[data-action]");e&&!e.disabled&&_i()&&(fn=e.dataset.action,$t=fn==="flame"?[...ro(j,fn)[0]||[]]:[],Pn=null,ln())}),$("clear-targets").addEventListener("click",()=>{$t=[],ln()}),$("attack-button").addEventListener("click",async i=>{if(!_i())return;let e={actorId:i.currentTarget.dataset.actor,actionId:fn,targetIds:[...$t],expectedRevision:Number(i.currentTarget.dataset.revision)};if(!(!e.targetIds.length||Pn)){if(_t){await Rs("attack",{actorId:e.actorId,actionId:e.actionId,targetIds:e.targetIds});return}if(Wc(t=>ah(t,e))){let t=j.log.at(-1);gi?.playAttackBatch?.({actorId:e.actorId,targets:t.results.map(({targetId:n,killed:s})=>({targetId:n,killed:s}))}),Ln(j.phase==="round-end"?"\u672C\u8F2A\u884C\u52D5\u7D50\u675F\uFF0C\u8ACB\u78BA\u8A8D\u7D00\u9304\u4E26\u63DB\u5EA7":`${nn(e.actorId)}\u5DF2\u884C\u52D5\uFF0C\u63A5\u8457\u7531${nn(ii(j))}\u884C\u52D5`)}}}),$("pass-button").addEventListener("click",()=>{let i=ii(j);i&&_i()&&(Pn={actorId:i,expectedRevision:_t?dn.revision:j.revision},ln())}),$("confirm-pass").addEventListener("click",()=>{if(Pn&&_i()){let i={...Pn};_t?Rs("pass",{actorId:i.actorId},`${nn(i.actorId)}\u5DF2\u653E\u68C4\u672C\u6B21\u884C\u52D5`):Wc(e=>lh(e,i),`${nn(i.actorId)}\u5DF2\u653E\u68C4\u672C\u6B21\u884C\u52D5`)}}),$("cancel-pass").addEventListener("click",()=>{Pn=null,ln()});for(let i of["reset-all","reset-preview"])$(i).addEventListener("click",()=>{_t||$("reset-dialog").showModal()});$("cancel-reset").addEventListener("click",()=>$("reset-dialog").close()),$("confirm-reset").addEventListener("click",()=>{$("reset-dialog").close(),Xc=!1,Wc(()=>cr(),"\u5DF2\u91CD\u65B0\u958B\u5C40\uFF0C\u8ACB\u5148\u8A2D\u5B9A\u521D\u59CB\u9053\u5177"),document.querySelector('[data-view="overview"]').click()}),document.querySelectorAll("[data-view]").forEach(i=>i.addEventListener("click",()=>{gi?.setView(i.dataset.view),document.querySelectorAll("[data-view]").forEach(e=>{let t=e===i;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))})})),$("reset-camera").addEventListener("click",()=>{gi?.resetCamera(),document.querySelector('[data-view="overview"]').click()}),$("fenrir-toggle").addEventListener("change",i=>gi?.setFenrirEnabled(i.target.checked)),$("quality").addEventListener("change",i=>gi?.setQuality(i.target.value))}function nM(i){if(i.phase==="webgl"){Ln(i.kind==="error"?"3D \u756B\u9762\u66AB\u505C\uFF0C\u6B63\u5728\u7B49\u5F85\u6062\u5FA9\u3002\u5C0D\u6230\u64CD\u4F5C\u4ECD\u53EF\u4F7F\u7528\u3002":"3D \u821E\u53F0\u5DF2\u6062\u5FA9");return}i.phase&&i.phase!=="model"||(Cd=i.kind,["loaded","ready","success"].includes(i.kind)?($("model-badge").textContent="\u82AC\u91CC\u723E 3D \u5DF2\u8F09\u5165",$("asset-detail").textContent=Vc):i.kind==="error"?($("model-badge").textContent="\u6A21\u578B\u672A\u8F09\u5165\u30FB\u4F7F\u7528\u66FF\u8EAB",$("asset-detail").textContent="\u6A21\u578B\u672A\u6210\u529F\u8F09\u5165\uFF0C\u821E\u53F0\u4ECD\u53EF\u4F7F\u7528\u7AD9\u4F4D\u66FF\u8EAB\u3002\u91CD\u65B0\u6574\u7406\u53EF\u518D\u6B21\u5617\u8A66\u3002"):i.kind==="loading"&&($("model-badge").textContent="\u8F09\u5165\u82AC\u91CC\u723E\u6A23\u672C\u2026"))}function km(){if(gi?.getLabels){let i=$("stage").clientWidth,e=$("stage").clientHeight,t=[],n=gi.getLabels().sort((s,r)=>s.y-r.y||s.x-r.x);for(let s of n){let r=Nd.get(s.id);if(!r||(r.hidden=!s.visible,!s.visible))continue;let o=r.offsetWidth,a=r.offsetHeight,c=o/2+7,l=Math.max(c,Math.min(i-c,s.x)),h=Math.max(80,Math.min(e-91,s.y)),u=null;e:for(let d of[0,-a-6,a+6,-2*a-12,2*a+12])for(let f of[0,-o/2-6,o/2+6,-o-6,o+6]){let p=Math.max(c,Math.min(i-c,l+f)),y=Math.max(80,Math.min(e-91,h+d)),m={left:p-o/2,right:p+o/2,top:y-a,bottom:y},v=t.reduce((S,x)=>S+Math.max(0,Math.min(m.right+3,x.right)-Math.max(m.left-3,x.left))*Math.max(0,Math.min(m.bottom+3,x.bottom)-Math.max(m.top-3,x.top)),0)*1e6+(p-l)**2+(y-h)**2;if((!u||v<u.score)&&(u={x:p,y,box:m,score:v}),v===0)break e}r.style.left=u.x+"px",r.style.top=u.y+"px",t.push(u.box)}}Om=requestAnimationFrame(km)}function iM(){jS(),tM(),Rd=Im({onCommand:(i,e)=>Rs(i,e),nameOf:nn}),ZS(),ln();try{gi=Em({canvas:$("arena"),onSelect:Sa,onStatus:nM,onMetrics:i=>{Number.isFinite(i.fps)&&($("performance-detail").textContent=`\u76EE\u524D\u88DD\u7F6E\uFF1A\u7D04 ${Math.round(i.fps)} FPS\uFF1B\u6B64\u6578\u503C\u50C5\u4EE3\u8868\u76EE\u524D\u700F\u89BD\u5668\uFF0C\u9700\u53E6\u5916\u6E2C\u8A66\u771F\u5BE6\u624B\u6A5F\u3002`)}}),ln(),km()}catch(i){console.error("Arena initialization failed",i),$("stage-error").hidden=!1,$("stage-error").innerHTML='<h2>\u76EE\u524D\u7121\u6CD5\u958B\u555F 3D \u821E\u53F0</h2><p>\u8ACB\u4F7F\u7528\u652F\u63F4 WebGL \u7684 Safari \u6216 Chrome\uFF0C\u6216\u91CD\u65B0\u958B\u555F\u9019\u500B\u7DB2\u9801\u3002\u5C0D\u6230\u64CD\u4F5C\u4ECD\u53EF\u4F7F\u7528\u3002</p><button type="button" id="reload-page">\u91CD\u65B0\u8F09\u5165</button>',$("reload-page").addEventListener("click",()=>location.reload()),$("model-badge").textContent="3D \u821E\u53F0\u672A\u555F\u52D5"}fetch(new URL("assets/fenrir-report.json",document.baseURI)).then(i=>{if(!i.ok)throw new Error("No export report");return i.json()}).then(i=>{let e=i.file_bytes||i.glb_bytes||i.bytes||i.file_size_bytes;Vc=`\u82AC\u91CC\u723E\u7531 B89 \u4E3B\u6A94\u532F\u51FA\u70BA\u975C\u614B\u7DB2\u9801\u6A23\u672C${e?`\uFF0C\u6A21\u578B\u7D04 ${(e/1048576).toFixed(1)} MB`:""}\u3002\u6BDB\u9AEE\u8207\u6750\u8CEA\u5DF2\u91DD\u5C0D\u9810\u89BD\u7C21\u5316\uFF0C\u6B63\u5F0F\u52D5\u4F5C\u8207\u89D2\u8272\u512A\u5316\u4ECD\u5F85\u88FD\u4F5C\u3002`,Cd!=="error"&&($("asset-detail").textContent=Vc)}).catch(()=>{Cd!=="error"&&($("asset-detail").textContent=Vc)}),window.addEventListener("pagehide",i=>{sr(),i.persisted||(Ni?.destroy(),cancelAnimationFrame(Om),gi?.dispose())}),window.addEventListener("pageshow",i=>{i.persisted&&Yt&&Ni.resume().catch(()=>{})})}if($("battle-banner")&&$("room-panel")&&$("trade-panel")&&$("trade-form")&&$("flame-fixed-rule")&&$("attack-methods")&&$("reset-dialog"))iM();else{let i=new URL(location.href);i.searchParams.get("build")!=="trades-p3b-v1"?(i.searchParams.set("build","trades-p3b-v1"),location.replace(i.href)):(document.body.innerHTML='<main class="reset-dialog" style="margin:32px auto"><h1>\u7DB2\u9801\u6B63\u5728\u66F4\u65B0</h1><p>\u8ACB\u7A0D\u5F8C\u91CD\u65B0\u8F09\u5165\uFF0C\u5373\u53EF\u7E7C\u7E8C\u4E09\u8F2A\u5C0D\u6230\u3002\u5DF2\u4FDD\u5B58\u7684\u9032\u5EA6\u6703\u4FDD\u7559\u3002</p><button type="button" id="retry-version">\u91CD\u65B0\u8F09\u5165</button></main>',$("retry-version").addEventListener("click",()=>location.reload()))}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
