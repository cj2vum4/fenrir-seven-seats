var ci=Object.freeze([{id:"thor",name:"\u6258\u723E",subtitle:"\u96F7\u795E",color:"#7aa7c5",initialHp:15},{id:"sif",name:"\u5E0C\u8299",subtitle:"\u9752\u6625\u5973\u795E",color:"#d998ad",initialHp:14},{id:"loki",name:"\u6D1B\u57FA",subtitle:"\u8A6D\u8A08\u4E4B\u795E",color:"#79b29e",initialHp:9},{id:"valkyrie",name:"\u74E6\u57FA\u91CC",subtitle:"\u5973\u6B66\u795E",color:"#c4d3d6",initialHp:15},{id:"heimdall",name:"\u6D77\u59C6\u9054\u723E",subtitle:"\u5B88\u8B77\u795E",color:"#c4a879",initialHp:12},{id:"frigga",name:"\u5F17\u9E97\u5609",subtitle:"\u795E\u540E",color:"#d9c6a1",initialHp:8},{id:"fenrir",name:"\u82AC\u91CC\u723E",subtitle:"\u5DE8\u72FC",color:"#b77362",initialHp:13}].map(i=>Object.freeze({...i,portrait:`assets/portraits/${i.id}.webp`})));var va=ci.map(({id:i})=>i),Nd=new Set(va);function Gm(i){if(!Number.isInteger(i)||i<0||i>999)throw new RangeError("\u9810\u89BD\u8840\u91CF\u8ACB\u8F38\u5165 0\u2013999 \u7684\u6574\u6578\uFF1B\u6B64\u7BC4\u570D\u4E0D\u662F\u6B63\u5F0F\u904A\u6232\u8840\u91CF\u4E0A\u9650\u3002")}function Vm(i){if(!Array.isArray(i)||i.length!==va.length)throw new TypeError("\u9810\u89BD\u9700\u8981\u5B8C\u6574\u7684\u4E03\u540D\u89D2\u8272\u3002");let e=new Set;for(let t of i){if(!t||!Nd.has(t.id)||e.has(t.id))throw new TypeError("\u89D2\u8272\u8EAB\u5206\u7121\u6548\u6216\u91CD\u8907\u3002");e.add(t.id),Gm(t.hp)}}function Wm(i){if(!Array.isArray(i)||i.length!==va.length||new Set(i).size!==va.length||i.some(e=>!Nd.has(e)))throw new TypeError("\u5EA7\u4F4D\u8207\u540C\u8840\u91CF\u9806\u4F4D\u5FC5\u9808\u5404\u5305\u542B\u4E03\u540D\u4E0D\u91CD\u8907\u89D2\u8272\u3002")}function js(i,e){Vm(i),Wm(e);let t=new Map(e.map((n,s)=>[n,s]));return[...i].sort((n,s)=>s.hp-n.hp||t.get(n.id)-t.get(s.id)).map(({id:n})=>n)}var Qs=Object.freeze(["axe","flame"]),Xm=Object.freeze({flameTargeting:"flanks",circularAdjacency:!0});var Yn=ci.map(({id:i})=>i),Sa=new Set(Yn),qm=new Set(["loadout","setup","preparation","battle","round-end","finished"]),er=99,Od=Yn.length*er,Ma=60,Fd=29,Ym=Fd+Ma,Qr=Object.freeze({power:{id:"power",name:"\u529B\u91CF\u724C",damage:2,targetCount:1,cost:{power:1,magic:0}},magic:{id:"magic",name:"\u9B54\u6CD5\u724C",damage:1,targetCount:1,cost:{power:0,magic:1}},axe:{id:"axe",name:"\u6230\u65A7",damage:3,targetCount:1,cost:{power:1,magic:0},weapon:"axe"},flame:{id:"flame",name:"\u708E\u528D",damage:2,targetCount:2,cost:{power:1,magic:0},weapon:"flame"}});function bs(i){if(!Sa.has(i))throw new RangeError("\u627E\u4E0D\u5230\u9019\u540D\u89D2\u8272\u3002")}function Wc(i){if(!Number.isInteger(i)||i<0||i>999)throw new RangeError("\u539F\u578B\u8840\u91CF\u8ACB\u8F38\u5165 0\u2013999 \u7684\u6574\u6578\uFF1B\u6B64\u7BC4\u570D\u4E0D\u662F\u6B63\u5F0F\u904A\u6232\u8840\u91CF\u4E0A\u9650\u3002")}function es(i,e=Od){if(!Number.isInteger(i)||i<0||i>e)throw new RangeError(`\u653B\u64CA\u724C\u8ACB\u8F38\u5165 0\u2013${e} \u7684\u6574\u6578\uFF1B\u6B64\u7BC4\u570D\u662F\u539F\u578B\u64CD\u4F5C\u9650\u5236\u3002`)}function ba(i){if(!Array.isArray(i)||i.length>Qs.length||new Set(i).size!==i.length||i.some(e=>!Qs.includes(e)))throw new TypeError("\u6B66\u5668\u5FC5\u9808\u662F\u672A\u91CD\u8907\u7684\u6230\u65A7\u6216\u708E\u528D\u3002")}function Xc(i){if(!i||typeof i!="object"||Array.isArray(i)||!Object.hasOwn(i,"flameTargeting")||!Object.hasOwn(i,"circularAdjacency")||Object.keys(i).some(e=>!["flameTargeting","circularAdjacency"].includes(e))||i.flameTargeting!=="flanks"||i.circularAdjacency!==!0)throw new TypeError("\u708E\u528D\u56FA\u5B9A\u653B\u64CA\u81EA\u5DF1\u5169\u5074\u5EA7\u4F4D\uFF0C\u7B2C 1 \u8207\u7B2C 7 \u5E2D\u76F8\u9130\uFF1B\u4E0D\u80FD\u8B8A\u66F4\u6B64\u898F\u5247\u3002")}function $m(i,e){if(!e||typeof e!="object"||Array.isArray(e))throw new TypeError("\u898F\u5247\u8A2D\u5B9A\u7121\u6548\u3002");let t={...i,...e};return Xc(t),t}function Ri(i,{full:e=!1}={}){if(!Array.isArray(i)||i.length>Yn.length||e&&i.length!==Yn.length||new Set(i).size!==i.length||i.some(t=>!Sa.has(t)))throw new TypeError("\u89D2\u8272\u9806\u4F4D\u7121\u6548\u6216\u91CD\u8907\u3002")}function Qi(i,e){return JSON.stringify(i)===JSON.stringify(e)}function ts(i){let e=new Set(i.actedIds),t=new Set(i.characters.filter(({hp:n})=>n>0).map(({id:n})=>n));return js(i.characters,i.tieOrder).filter(n=>t.has(n)&&!e.has(n))}function Ea(i,e=!1){let t=new Set,n={power:0,magic:0};for(let s of i){if(!s.cards||typeof s.cards!="object"||Array.isArray(s.cards)||Object.keys(s.cards).length!==2||!Object.hasOwn(s.cards,"power")||!Object.hasOwn(s.cards,"magic"))throw new TypeError("\u653B\u64CA\u724C\u8CC7\u6599\u7121\u6548\u3002");for(let r of["power","magic"])es(s.cards[r],e?er:Od),n[r]+=s.cards[r];ba(s.weapons);for(let r of s.weapons){if(t.has(r))throw new Error("\u6BCF\u4EF6\u795E\u5668\u53EA\u80FD\u7531\u4E00\u540D\u89D2\u8272\u6301\u6709\uFF0C\u8ACB\u5148\u79FB\u9664\u539F\u6301\u6709\u8005\u7684\u6B66\u5668\u3002");t.add(r)}}Object.values(n).forEach(s=>es(s))}function bn(i){if(!i||typeof i!="object"||Array.isArray(i)||i.schemaVersion!==4||!qm.has(i.phase)||!Number.isInteger(i.round)||i.round<1||i.round>3||!Number.isSafeInteger(i.revision)||i.revision<0)throw new TypeError("\u6230\u9B25\u539F\u578B\u7684\u72C0\u614B\u6216\u7248\u672C\u7121\u6548\u3002");if(!Array.isArray(i.characters)||i.characters.length!==Yn.length)throw new TypeError("\u6230\u9B25\u539F\u578B\u9700\u8981\u5B8C\u6574\u4E03\u540D\u89D2\u8272\u3002");if(Ri(i.characters.map(({id:n})=>n),{full:!0}),i.characters.forEach(({hp:n})=>Wc(n)),Ea(i.characters,i.phase==="loadout"||i.phase==="setup"),Xc(i.rules),bs(i.selectedId),Ri(i.seatOrder,{full:!0}),Ri(i.tieOrder,{full:!0}),Ri(i.actedIds),Ri(i.roundActionOrder),Ri(i.previousRoundActionOrder),!Qi(i.actedIds,i.roundActionOrder))throw new TypeError("\u672C\u8F2A\u884C\u52D5\u7D00\u9304\u4E0D\u4E00\u81F4\u3002");if(!Array.isArray(i.log)||i.log.length>Ym||!Array.isArray(i.kills)||i.kills.length>Yn.length)throw new TypeError("\u6230\u9B25\u4E8B\u4EF6\u7D00\u9304\u7121\u6548\u3002");let e=i.log.filter(n=>n?.type==="trade").length;if(e>Ma||i.log.length-e>Fd)throw new TypeError("\u4EA4\u6613\u6216\u6230\u9B25\u4E8B\u4EF6\u7D00\u9304\u8D85\u51FA\u4E0A\u9650\u3002");let t=new Set;for(let n of i.kills){if(!n||!Sa.has(n.killerId)||!Sa.has(n.victimId)||n.killerId===n.victimId||t.has(n.victimId)||!Number.isInteger(n.round)||n.round<1||n.round>i.round||!Number.isInteger(n.eventId)||n.eventId<1||n.eventId>i.log.length||i.characters.find(({id:s})=>s===n.victimId).hp!==0)throw new TypeError("\u64CA\u6BBA\u7D00\u9304\u7121\u6548\u3002");t.add(n.victimId)}if(i.round===1&&i.previousRoundActionOrder.length)throw new TypeError("\u9996\u8F2A\u4E0D\u80FD\u6709\u4E0A\u4E00\u8F2A\u7D00\u9304\u3002");if(i.phase==="loadout"||i.phase==="setup"){if(i.round!==1||i.actedIds.length||i.previousRoundActionOrder.length||i.kills.length)throw new TypeError("\u521D\u59CB\u8A2D\u5B9A\u4E0D\u80FD\u5305\u542B\u6230\u9B25\u9032\u5EA6\u3002");if(i.phase==="loadout"&&i.log.length)throw new TypeError("\u9053\u5177\u8A2D\u5B9A\u4E0D\u80FD\u5305\u542B\u5DF2\u78BA\u8A8D\u4E8B\u4EF6\u3002");if(i.phase==="setup"&&(i.log.length!==1||i.log[0]?.type!=="loadout"))throw new TypeError("\u7F3A\u5C11\u521D\u59CB\u9053\u5177\u7D00\u9304\u3002")}else if(i.log.length<2||i.log[0]?.type!=="loadout"||i.log[1]?.type!=="setup")throw new TypeError("\u7F3A\u5C11\u521D\u59CB\u9053\u5177\u6216\u8840\u91CF\u7D00\u9304\u3002");if(i.phase==="preparation"&&i.actedIds.length)throw new TypeError("\u6230\u524D\u6E96\u5099\u4E0D\u80FD\u5305\u542B\u672C\u8F2A\u5DF2\u884C\u52D5\u8005\u3002");if(i.phase==="battle"&&!ts(i).length)throw new TypeError("\u6C92\u6709\u53EF\u884C\u52D5\u89D2\u8272\u6642\u61C9\u9032\u5165\u8F2A\u672B\u3002");if((i.phase==="round-end"||i.phase==="finished")&&ts(i).length)throw new TypeError("\u4ECD\u6709\u89D2\u8272\u5C1A\u672A\u5B8C\u6210\u884C\u52D5\u3002");if(i.phase==="finished"&&i.round!==3)throw new TypeError("\u5B8C\u6210\u5C0D\u6230\u5FC5\u9808\u5DF2\u5230\u7B2C\u4E09\u8F2A\u3002")}function qc(i){if(i.revision>=Number.MAX_SAFE_INTEGER)throw new RangeError("\u9032\u5EA6\u7248\u672C\u5DF2\u8D85\u51FA\u7BC4\u570D\uFF0C\u8ACB\u91CD\u65B0\u958B\u59CB\u539F\u578B\u3002");return i.revision+1}function ns(i,e,t={}){let n=qc(i);return{...i,...t,revision:n,log:[...i.log,{id:i.log.length+1,revision:n,round:i.round,...e}]}}function Zm(){return ci.map(i=>({...i,hp:i.initialHp,cards:{power:2,magic:2},weapons:[]}))}function tr(i={}){let e=Zm();return{schemaVersion:4,characters:e,rules:$m(Xm,i),seatOrder:js(e,Yn),tieOrder:[...Yn],selectedId:"fenrir",round:1,phase:"loadout",actedIds:[],roundActionOrder:[],previousRoundActionOrder:[],log:[],kills:[],revision:0}}function Bd(i,e,t){if(bn(i),i.phase!=="loadout")throw new Error("\u53EA\u6709\u521D\u59CB\u9053\u5177\u968E\u6BB5\u53EF\u4EE5\u8A2D\u5B9A\u653B\u64CA\u724C\u8207\u6B66\u5668\u3002");if(bs(e),!t||typeof t!="object"||Array.isArray(t)||Object.keys(t).some(l=>!["power","magic","weapons"].includes(l)))throw new TypeError("\u521D\u59CB\u9053\u5177\u8A2D\u5B9A\u7121\u6548\u3002");let n=i.characters.find(l=>l.id===e),s=Object.hasOwn(t,"power")?t.power:n.cards.power,r=Object.hasOwn(t,"magic")?t.magic:n.cards.magic,o=Object.hasOwn(t,"weapons")?t.weapons:n.weapons;es(s,er),es(r,er),ba(o);let a={cards:{power:s,magic:r},weapons:Qs.filter(l=>o.includes(l))},c=i.characters.map(l=>l.id===e?{...l,...a}:l);return Ea(c,!0),Qi(n.cards,a.cards)&&Qi(n.weapons,a.weapons)?i:{...i,characters:c,revision:qc(i)}}function Yc(i){if(bn(i),i.phase!=="loadout")throw new Error("\u521D\u59CB\u9053\u5177\u5DF2\u78BA\u8A8D\u3002");return ns(i,{type:"loadout",rules:{...i.rules},initialLoadout:i.characters.map(({id:e,cards:t,weapons:n})=>({id:e,power:t.power,magic:t.magic,weapons:[...n]}))},{phase:"setup"})}function $c(i,e,t){if(bn(i),i.phase!=="setup")throw new Error("\u53EA\u6709\u78BA\u8A8D\u9053\u5177\u5F8C\u7684\u521D\u59CB\u8A2D\u5B9A\u968E\u6BB5\u53EF\u4EE5\u76F4\u63A5\u8ABF\u6574\u8840\u91CF\u3002");return bs(e),Wc(t),i.characters.find(n=>n.id===e).hp===t?i:{...i,revision:qc(i),characters:i.characters.map(n=>n.id===e?{...n,hp:t}:n)}}function kd(i,e){return bn(i),bs(e),{...i,selectedId:e}}function Zc(i){return bn(i),js(i.characters,i.tieOrder)}function Kc(i){return bn(i),i.phase==="battle"?ts(i):[]}function $n(i){return Kc(i)[0]??null}function Jc(i){if(bn(i),i.phase!=="setup")throw new Error("\u8ACB\u5148\u78BA\u8A8D\u521D\u59CB\u9053\u5177\uFF1B\u5DF2\u5B8C\u6210\u7684\u521D\u59CB\u8840\u91CF\u4E0D\u80FD\u91CD\u8907\u78BA\u8A8D\u3002");return ns(i,{type:"setup",initialHp:i.characters.map(({id:e,hp:t})=>({id:e,hp:t}))},{phase:"preparation",seatOrder:js(i.characters,i.tieOrder)})}function jc(i){if(bn(i),i.phase!=="preparation")throw new Error("\u53EA\u6709\u6230\u524D\u6E96\u5099\u968E\u6BB5\u53EF\u4EE5\u958B\u59CB\u6230\u9B25\u3002");return ns(i,{type:"battle-start"},{phase:ts(i).length?"battle":"round-end"})}function Dd(i){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).length!==3||!["power","magic","weapons"].every(e=>Object.hasOwn(i,e)))throw new TypeError("\u4EA4\u6613\u7269\u54C1\u9700\u5305\u542B\u529B\u91CF\u724C\u3001\u9B54\u6CD5\u724C\u8207\u6B66\u5668\u6E05\u55AE\u3002");return es(i.power),es(i.magic),ba(i.weapons),{power:i.power,magic:i.magic,weapons:Qs.filter(e=>i.weapons.includes(e))}}function Km(i,{fromId:e,toId:t,give:n,receive:s,expectedRevision:r}={}){if(bn(i),i.phase!=="preparation")throw new Error("\u53EA\u6709\u6230\u524D\u6E96\u5099\u968E\u6BB5\u53EF\u4EE5\u4EA4\u6613\u3002");if(!Number.isSafeInteger(r)||r!==i.revision)throw new Error("\u4EA4\u6613\u9032\u5EA6\u5DF2\u6539\u8B8A\uFF0C\u8ACB\u78BA\u8A8D\u6700\u65B0\u7269\u54C1\u5F8C\u91CD\u65B0\u64CD\u4F5C\u3002");if(bs(e),bs(t),e===t)throw new Error("\u4EA4\u6613\u8ACB\u9078\u64C7\u53E6\u4E00\u540D\u89D2\u8272\u3002");let o=i.characters.find(h=>h.id===e),a=i.characters.find(h=>h.id===t);if(o.hp===0||a.hp===0)throw new Error("\u53EA\u6709\u5B58\u6D3B\u89D2\u8272\u53EF\u4EE5\u4EA4\u6613\u3002");let c=Dd(n),l=Dd(s);if(!c.power&&!c.magic&&!c.weapons.length&&!l.power&&!l.magic&&!l.weapons.length)throw new Error("\u8ACB\u81F3\u5C11\u9078\u64C7\u4E00\u9805\u8981\u4EA4\u63DB\u6216\u8D08\u9001\u7684\u7269\u54C1\u3002");if(i.round===1&&(c.power||c.magic||l.power||l.magic))throw new Error("\u7B2C\u4E00\u8F2A\u6E96\u5099\u53EA\u80FD\u4EA4\u6613\u6B66\u5668\uFF0C\u7B2C\u4E8C\u8F2A\u8D77\u624D\u53EF\u4EA4\u6613\u653B\u64CA\u724C\u3002");for(let[h,u]of[[o,c],[a,l]])if(h.cards.power<u.power||h.cards.magic<u.magic||u.weapons.some(d=>!h.weapons.includes(d)))throw new Error("\u4EA4\u6613\u6240\u9700\u7684\u724C\u6216\u6B66\u5668\u5DF2\u4E0D\u5728\u6301\u6709\u8005\u8EAB\u4E0A\uFF0C\u8ACB\u91CD\u65B0\u78BA\u8A8D\u3002");return{fromId:e,toId:t,give:c,receive:l}}function Jm(i,e={}){let t=Km(i,e);if(i.log.filter(l=>l.type==="trade").length>=Ma)throw new RangeError(`\u6BCF\u5C40\u539F\u578B\u6700\u591A\u5B8C\u6210 ${Ma} \u6B21\u4EA4\u6613\u3002`);let{fromId:n,toId:s,give:r,receive:o}=t,a=(l,h,u)=>{let d=new Set([...l.weapons.filter(f=>!h.weapons.includes(f)),...u.weapons]);return{...l,cards:{power:l.cards.power-h.power+u.power,magic:l.cards.magic-h.magic+u.magic},weapons:Qs.filter(f=>d.has(f))}},c=i.characters.map(l=>l.id===n?a(l,r,o):l.id===s?a(l,o,r):l);return Ea(c),ns(i,{type:"trade",...t},{characters:c})}function Qc(i,e,t,n=!0){if(bn(i),i.phase!=="battle")throw new Error("\u76EE\u524D\u4E0D\u662F\u6230\u9B25\u968E\u6BB5\u3002");if((n||t!==void 0)&&(!Number.isSafeInteger(t)||t!==i.revision))throw new Error("\u884C\u52D5\u9032\u5EA6\u5DF2\u6539\u8B8A\uFF0C\u8ACB\u78BA\u8A8D\u76EE\u524D\u884C\u52D5\u8005\u5F8C\u91CD\u65B0\u9078\u64C7\u3002");if(bs(e),ts(i)[0]!==e)throw new Error("\u53EA\u80FD\u7531\u76EE\u524D\u8F2A\u5230\u7684\u89D2\u8272\u884C\u52D5\u3002")}function zd(i,e){let t={...i,actedIds:[...i.actedIds,e],roundActionOrder:[...i.roundActionOrder,e]};return{...t,phase:ts(t).length?"battle":"round-end"}}function eh(i,e,t){if(t!=="flame")return i.seatOrder.filter(o=>o!==e).map(o=>[o]);let n=i.seatOrder,s=n.indexOf(e);return[[...[(s+n.length-1)%n.length,(s+1)%n.length]].sort((o,a)=>o-a).map(o=>n[o])]}function th(i,e,t){return t.weapon&&!e.weapons.includes(t.weapon)?`\u672A\u6301\u6709${t.name}`:e.cards.power<t.cost.power||e.cards.magic<t.cost.magic?"\u653B\u64CA\u724C\u4E0D\u8DB3":eh(i,e.id,t.id).length?"":"\u76EE\u524D\u5EA7\u4F4D\u6C92\u6709\u7B26\u5408\u898F\u5247\u7684\u5169\u540D\u76EE\u6A19"}function Hd(i){if(bn(i),i.phase!=="battle")return[];let e=i.characters.find(({id:t})=>t===ts(i)[0]);return Object.values(Qr).filter(t=>!t.weapon||e.weapons.includes(t.weapon)).map(t=>{let n=th(i,e,t);return{id:t.id,name:t.name,damage:t.damage,targetCount:t.targetCount,cost:{...t.cost},available:!n,reason:n}})}function eo(i,e){if(bn(i),i.phase!=="battle"||!Object.hasOwn(Qr,e))return[];let t=i.characters.find(({id:n})=>n===ts(i)[0]);return th(i,t,Qr[e])?[]:eh(i,t.id,e)}function nh(i,{actorId:e,actionId:t="power",targetIds:n,targetId:s,expectedRevision:r}={}){if(Qc(i,e,r,!1),!Object.hasOwn(Qr,t))throw new RangeError("\u627E\u4E0D\u5230\u9019\u7A2E\u653B\u64CA\u3002");let o=Qr[t],a=i.characters.find(({id:f})=>f===e),c=th(i,a,o);if(c)throw new Error(c);let l=n??(s===void 0?void 0:[s]);if(Ri(l),l.length!==o.targetCount)throw new Error(`\u8ACB\u9078\u64C7 ${o.targetCount} \u540D\u4E0D\u540C\u7684\u653B\u64CA\u76EE\u6A19\u3002`);if(l.includes(e))throw new Error("\u653B\u64CA\u8ACB\u9078\u64C7\u5176\u4ED6\u89D2\u8272\u3002");let h=i.seatOrder.filter(f=>l.includes(f));if(!eh(i,e,t).some(f=>Qi(f,h)))throw new Error("\u76EE\u6A19\u4E0D\u7B26\u5408\u76EE\u524D\u56FA\u5B9A\u5EA7\u4F4D\u7684\u76F8\u9130\u898F\u5247\u3002");let u=h.map(f=>{let g=i.characters.find(p=>p.id===f).hp,x=Math.max(0,g-o.damage);return{targetId:f,hpBefore:g,hpAfter:x,damage:g-x,killed:g>0&&x===0}}),d=u.filter(({killed:f})=>f).map(({targetId:f})=>{let g=i.characters.find(({id:x})=>x===f);return{victimId:f,power:g.cards.power,magic:g.cards.magic,weapons:[...g.weapons]}});return{actorId:e,actionId:t,targetIds:h,cost:{...o.cost},results:u,loot:d}}function ih(i,e={}){Qc(i,e.actorId,e.expectedRevision);let t=nh(i,e),{actorId:n,results:s,cost:r,loot:o}=t,a=new Map(s.map(x=>[x.targetId,x])),c=new Set(o.map(({victimId:x})=>x)),l=i.characters.find(({id:x})=>x===n),h={power:l.cards.power-r.power,magic:l.cards.magic-r.magic};o.forEach(x=>{h.power+=x.power,h.magic+=x.magic});let u=new Set([...l.weapons,...o.flatMap(({weapons:x})=>x)]),d=i.characters.map(x=>{if(x.id===n)return{...x,cards:h,weapons:Qs.filter(m=>u.has(m))};let p=a.get(x.id);return p?{...x,hp:p.hpAfter,...c.has(x.id)?{cards:{power:0,magic:0},weapons:[]}:{}}:x});Ea(d);let f=i.log.length+1,g=[...i.kills,...o.map(({victimId:x})=>({round:i.round,killerId:n,victimId:x,eventId:f}))];return zd(ns(i,{type:"attack",...t},{characters:d,kills:g}),n)}function sh(i,{actorId:e,expectedRevision:t}={}){return Qc(i,e,t),zd(ns(i,{type:"pass",actorId:e}),e)}function rh(i){if(bn(i),i.phase!=="round-end")throw new Error("\u672C\u8F2A\u884C\u52D5\u5168\u90E8\u7D50\u675F\u5F8C\u624D\u80FD\u63DB\u5EA7\u3002");let e=js(i.characters,i.tieOrder);return i.round===3?ns(i,{type:"finish"},{phase:"finished",seatOrder:e}):ns(i,{type:"advance",nextRound:i.round+1},{phase:"preparation",round:i.round+1,seatOrder:e,tieOrder:[...new Set([...i.roundActionOrder,...i.tieOrder])],previousRoundActionOrder:[...i.roundActionOrder],roundActionOrder:[],actedIds:[]})}function Ud(i){return{schemaVersion:i.schemaVersion,rules:i.rules,participants:Yn.map(e=>{let t=i.characters.find(n=>n.id===e);return{id:e,hp:t.hp,cards:t.cards,weapons:t.weapons}}),seatOrder:i.seatOrder,tieOrder:i.tieOrder,round:i.round,phase:i.phase,actedIds:i.actedIds,roundActionOrder:i.roundActionOrder,previousRoundActionOrder:i.previousRoundActionOrder,log:i.log,kills:i.kills,revision:i.revision}}function jm(i){if(!i||i.type!=="loadout"||!Number.isSafeInteger(i.revision)||i.revision<1||!Array.isArray(i.initialLoadout)||i.initialLoadout.length!==Yn.length)throw new TypeError("\u521D\u59CB\u9053\u5177\u5FEB\u7167\u7121\u6548\u3002");Xc(i.rules),Ri(i.initialLoadout.map(({id:n})=>n),{full:!0});let e=new Map(i.initialLoadout.map(n=>[n.id,n])),t=tr(i.rules);return t.characters=t.characters.map(n=>{let s=e.get(n.id);return es(s.power,er),es(s.magic,er),ba(s.weapons),{...n,cards:{power:s.power,magic:s.magic},weapons:[...s.weapons]}}),t.revision=i.revision-1,Yc(t)}function oh(i){try{let e=typeof i=="string"?JSON.parse(i):i;bn(e);let t;if(e.phase==="loadout")t=tr(e.rules),t.characters=t.characters.map(n=>{let s=e.characters.find(({id:r})=>r===n.id);return{...n,cards:{...s.cards},weapons:[...s.weapons]}}),t.revision=e.revision;else{if(t=jm(e.log[0]),!Qi(e.log[0],t.log[0]))throw new TypeError("\u521D\u59CB\u9053\u5177\u4E8B\u4EF6\u4E0D\u4E00\u81F4\u3002");if(e.phase==="setup"){if(e.revision<t.revision)throw new TypeError("\u521D\u59CB\u8A2D\u5B9A\u7248\u672C\u7121\u6548\u3002");t.characters=t.characters.map(n=>({...n,hp:e.characters.find(({id:s})=>s===n.id).hp})),t.revision=e.revision}else{let n=e.log[1];if(!n||n.type!=="setup"||!Number.isSafeInteger(n.revision)||n.revision<=t.revision||!Array.isArray(n.initialHp)||n.initialHp.length!==Yn.length)throw new TypeError("\u521D\u59CB\u8840\u91CF\u5FEB\u7167\u7121\u6548\u3002");Ri(n.initialHp.map(({id:r})=>r),{full:!0}),n.initialHp.forEach(({hp:r})=>Wc(r));let s=new Map(n.initialHp.map(({id:r,hp:o})=>[r,o]));if(t=Jc({...t,characters:t.characters.map(r=>({...r,hp:s.get(r.id)})),revision:n.revision-1}),!Qi(n,t.log[1]))throw new TypeError("\u521D\u59CB\u8840\u91CF\u4E8B\u4EF6\u4E0D\u4E00\u81F4\u3002");for(let r of e.log.slice(2)){if(!r||typeof r!="object")throw new TypeError("\u4E8B\u4EF6\u7121\u6548\u3002");if(r.type==="battle-start")t=jc(t);else if(r.type==="attack")t=ih(t,{actorId:r.actorId,actionId:r.actionId,targetIds:r.targetIds,expectedRevision:t.revision});else if(r.type==="pass")t=sh(t,{actorId:r.actorId,expectedRevision:t.revision});else if(r.type==="trade")t=Jm(t,{fromId:r.fromId,toId:r.toId,give:r.give,receive:r.receive,expectedRevision:t.revision});else if(r.type==="advance"||r.type==="finish")t=rh(t);else throw new TypeError("\u4E8B\u4EF6\u985E\u578B\u7121\u6548\u3002");if(!Qi(r,t.log.at(-1)))throw new TypeError("\u4E8B\u4EF6\u7D50\u7B97\u4E0D\u4E00\u81F4\u3002")}}}if(!Qi(Ud(e),Ud(t)))throw new TypeError("\u5132\u5B58\u9032\u5EA6\u8207\u884C\u52D5\u7D00\u9304\u4E0D\u4E00\u81F4\u3002");return{...t,selectedId:e.selectedId}}catch{return tr()}}var ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ff=0,Kh=1,Bf=2;var Hs=1,kf=2,Dr=3,_i=0,ln=1,Vn=2,Gs=0,Ur=1,Jh=2,jh=3,Qh=4,zf=5;var Vs=100,Hf=101,Gf=102,Vf=103,Wf=104,Xf=200,qf=201,Yf=202,$f=203,eu=204,tu=205,Zf=206,Kf=207,Jf=208,jf=209,Qf=210,ep=211,tp=212,np=213,ip=214,el=0,tl=1,nl=2,_r=3,il=4,sl=5,rl=6,ol=7,Cl=0,sp=1,rp=2,xi=0,nu=1,iu=2,su=3,jo=4,ru=5,ou=6,au=7,Dh="attached",op="detached",lu=300,Ws=301,Or=302,Il=303,Pl=304,Hn=1e3,En=1001,xr=1002,Gt=1003,Ll=1004;var Xs=1005;var Nt=1006,Fr=1007;var fn=1008;var Rn=1009,cu=1010,hu=1011,Br=1012,Nl=1013,ei=1014,Bn=1015,ti=1016,Dl=1017,Ul=1018,qs=1020,uu=35902,du=35899,fu=1021,pu=1022,pn=1023,Oi=1026,$i=1027,Ol=1028,Fl=1029,gs=1030,Bl=1031;var kl=1033,Qo=33776,ea=33777,ta=33778,na=33779,zl=35840,Hl=35841,Gl=35842,Vl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37488,$l=37489,ia=37490,Zl=37491,Kl=37808,Jl=37809,jl=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,sc=37816,rc=37817,oc=37818,ac=37819,lc=37820,cc=37821,hc=36492,uc=36494,dc=36495,fc=36283,pc=36284,sa=36285,mc=36286;var Is=2300,Ps=2301,ja=2302,Uh=2303,Oh=2400,Fh=2401,Bh=2402,ap=2500;var mu=0,ra=1,kr=2,lp=3200;var oa=0,cp=1,ni="",Tt="srgb",on="srgb-linear",go="linear",Et="srgb";var Qa=7680;var hp=519,up=512,dp=513,fp=514,gu=515,pp=516,mp=517,_u=518,xu=519,yu=35044;var vu="300 es",zn=2e3,yr=2001;function Qm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function eg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gp(){let i=vr("canvas");return i.style.display="block",i}var Gd={},Sr=null;function _o(...i){let e="THREE."+i.shift();Sr?Sr("log",e,...i):console.log(e,...i)}function _p(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=_p(i);let e="THREE."+i.shift();if(Sr)Sr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=_p(i);let e="THREE."+i.shift();if(Sr)Sr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Cs(...i){let e=i.join(" ");e in Gd||(Gd[e]=!0,qe(...i))}function xp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var yp={[el]:el,[nl]:rl,[il]:il,[_r]:sl,[tl]:tl,[rl]:nl,[ol]:ol,[sl]:_r},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=1234567,uo=Math.PI/180,Ls=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Su(i,e){return(i%e+e)%e}function tg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ng(i,e,t){return i!==e?(t-i)/(e-i):0}function fo(i,e,t){return(1-t)*i+t*e}function ig(i,e,t,n){return fo(i,e,1-Math.exp(-t*n))}function sg(i,e=1){return e-Math.abs(Su(i,e*2)-e)}function rg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ag(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lg(i,e){return i+Math.random()*(e-i)}function cg(i){return i*(.5-Math.random())}function hg(i){i!==void 0&&(Vd=i);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ug(i){return i*uo}function dg(i){return i*Ls}function fg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function pg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function bu(i,e){if(e.constructor===Float32Array)return i;let t=gc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Eu(i,e){if(e.constructor===Float32Array)return i;let t=gc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Cn={DEG2RAD:uo,RAD2DEG:Ls,generateUUID:ii,clamp:ut,euclideanModulo:Su,mapLinear:tg,inverseLerp:ng,lerp:fo,damp:ig,pingpong:sg,smoothstep:rg,smootherstep:og,randInt:ag,randFloat:lg,randFloatSpread:cg,seededRandom:hg,degToRad:ug,radToDeg:dg,isPowerOfTwo:fg,ceilPowerOfTwo:pg,floorPowerOfTwo:Mu,setQuaternionFromProperEuler:mg,normalize:Eu,denormalize:bu},le=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==f||h!==g){let p=c*d+l*f+h*g+u*x;p<0&&(d=-d,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let v=Math.acos(p),b=Math.sin(v);m=Math.sin(m*v)/b,a=Math.sin(a*v)/b,c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+x*a}else{c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+x*a;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ah=new D,Wd=new Xt,it=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],v=s[1],b=s[4],_=s[7],T=s[2],w=s[5],y=s[8];return r[0]=o*x+a*v+c*T,r[3]=o*p+a*b+c*w,r[6]=o*m+a*_+c*y,r[1]=l*x+h*v+u*T,r[4]=l*p+h*b+u*w,r[7]=l*m+h*_+u*y,r[2]=d*x+f*v+g*T,r[5]=d*p+f*b+g*w,r[8]=d*m+f*_+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lh.makeScale(e,t)),this}rotate(e){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lh.makeRotation(-e)),this}translate(e,t){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lh=new it,Xd=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qd=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gg(){let i={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[on]:{primaries:e,whitePoint:n,transfer:go,toXYZ:Xd,fromXYZ:qd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Xd,fromXYZ:qd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var ht=gg();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var nr,al=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nr===void 0&&(nr=vr("canvas")),nr.width=e.width,nr.height=e.height;let s=nr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=nr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_g=0,Mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ch(s[o].image)):r.push(ch(s[o]))}else r=ch(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ch(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var xg=0,hh=new D,tn=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=En,s=En,r=Nt,o=fn,a=pn,c=Rn,l=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=ii(),this.name="",this.source=new Mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hn:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hn:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=lu;tn.DEFAULT_ANISOTROPY=1;var wt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,_=(f+1)/2,T=(m+1)/2,w=(h+d)/4,y=(u+x)/4,S=(g+p)/4;return b>_&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=y/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=S/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=y/r,s=S/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ll=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new tn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends ll{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},xo=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var cl=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Qe=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,p)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ir.setFromMatrixColumn(e,0).length(),r=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yg,e,vg)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),is.crossVectors(n,Ln),is.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),is.crossVectors(n,Ln)),is.normalize(),wa.crossVectors(Ln,is),s[0]=is.x,s[4]=wa.x,s[8]=Ln.x,s[1]=is.y,s[5]=wa.y,s[9]=Ln.y,s[2]=is.z,s[6]=wa.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],b=n[7],_=n[11],T=n[15],w=s[0],y=s[4],S=s[8],P=s[12],C=s[1],I=s[5],H=s[9],$=s[13],L=s[2],A=s[6],U=s[10],B=s[14],q=s[3],k=s[7],W=s[11],K=s[15];return r[0]=o*w+a*C+c*L+l*q,r[4]=o*y+a*I+c*A+l*k,r[8]=o*S+a*H+c*U+l*W,r[12]=o*P+a*$+c*B+l*K,r[1]=h*w+u*C+d*L+f*q,r[5]=h*y+u*I+d*A+f*k,r[9]=h*S+u*H+d*U+f*W,r[13]=h*P+u*$+d*B+f*K,r[2]=g*w+x*C+p*L+m*q,r[6]=g*y+x*I+p*A+m*k,r[10]=g*S+x*H+p*U+m*W,r[14]=g*P+x*$+p*B+m*K,r[3]=v*w+b*C+_*L+T*q,r[7]=v*y+b*I+_*A+T*k,r[11]=v*S+b*H+_*U+T*W,r[15]=v*P+b*$+_*B+T*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],v=c*f-l*d,b=a*f-l*u,_=a*d-c*u,T=o*f-l*h,w=o*d-c*h,y=o*u-a*h;return t*(x*v-p*b+m*_)-n*(g*v-p*T+m*w)+s*(g*b-x*T+m*y)-r*(g*_-x*w+p*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=t*a-n*o,b=t*c-s*o,_=t*l-r*o,T=n*c-s*a,w=n*l-r*a,y=s*l-r*c,S=h*x-u*g,P=h*p-d*g,C=h*m-f*g,I=u*p-d*x,H=u*m-f*x,$=d*m-f*p,L=v*$-b*H+_*I+T*C-w*P+y*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/L;return e[0]=(a*$-c*H+l*I)*A,e[1]=(s*H-n*$-r*I)*A,e[2]=(x*y-p*w+m*T)*A,e[3]=(d*w-u*y-f*T)*A,e[4]=(c*C-o*$-l*P)*A,e[5]=(t*$-s*C+r*P)*A,e[6]=(p*_-g*y-m*b)*A,e[7]=(h*y-d*_+f*b)*A,e[8]=(o*H-a*C+l*S)*A,e[9]=(n*C-t*H-r*S)*A,e[10]=(g*w-x*_+m*v)*A,e[11]=(u*_-h*w-f*v)*A,e[12]=(a*P-o*I-c*S)*A,e[13]=(t*I-n*P+s*S)*A,e[14]=(x*b-g*T-p*v)*A,e[15]=(h*T-u*b+d*v)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,v=c*l,b=c*h,_=c*u,T=n.x,w=n.y,y=n.z;return s[0]=(1-(x+m))*T,s[1]=(f+_)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(d+m))*w,s[6]=(p+v)*w,s[7]=0,s[8]=(g+b)*y,s[9]=(p-v)*y,s[10]=(1-(d+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ir.set(s[0],s[1],s[2]).length(),a=ir.set(s[4],s[5],s[6]).length(),c=ir.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Zn.copy(this);let l=1/o,h=1/a,u=1/c;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=zn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===yr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=zn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===zn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===yr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ir=new D,Zn=new Qe,yg=new D(0,0,0),vg=new D(1,1,1),is=new D,wa=new D,Ln=new D,Yd=new Qe,$d=new Xt,wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $d.setFromEuler(this),this.setFromQuaternion($d,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sg=0,Zd=new D,sr=new Xt,Ci=new Qe,Ta=new D,to=new D,Mg=new D,bg=new Xt,Kd=new D(1,0,0),Jd=new D(0,1,0),jd=new D(0,0,1),Qd={type:"added"},Eg={type:"removed"},rr={type:"childadded",child:null},uh={type:"childremoved",child:null},Pt=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new wn,n=new Xt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new it}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(Jd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Zd.copy(e).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(Jd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(to,Ta,this.up):Ci.lookAt(Ta,to,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(Ci),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qd),rr.child=e,this.dispatchEvent(rr),rr.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eg),uh.child=e,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qd),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,bg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pt.DEFAULT_UP=new D(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wg={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function dh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=Su(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=dh(o,r,e+1/3),this.g=dh(o,r,e),this.b=dh(o,r,e-1/3)}return ht.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=vp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ht.workingToColorSpace(dn.copy(this),e),Math.round(ut(dn.r*255,0,255))*65536+Math.round(ut(dn.g*255,0,255))*256+Math.round(ut(dn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Tt){ht.workingToColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Aa);let n=fo(ss.h,Aa.h,t),s=fo(ss.s,Aa.s,t),r=fo(ss.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Ye;Ye.NAMES=vp;var yo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ns=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new D,Ii=new D,fh=new D,Pi=new D,or=new D,ar=new D,ef=new D,ph=new D,mh=new D,gh=new D,_h=new wt,xh=new wt,yh=new wt,cs=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kn.subVectors(s,t),Ii.subVectors(n,t),fh.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(Ii),c=Kn.dot(fh),l=Ii.dot(Ii),h=Ii.dot(fh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pi.x),c.addScaledVector(o,Pi.y),c.addScaledVector(a,Pi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return _h.setScalar(0),xh.setScalar(0),yh.setScalar(0),_h.fromBufferAttribute(e,t),xh.fromBufferAttribute(e,n),yh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(_h,r.x),o.addScaledVector(xh,r.y),o.addScaledVector(yh,r.z),o}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),Ii.subVectors(e,t),Kn.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Kn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;or.subVectors(s,n),ar.subVectors(r,n),ph.subVectors(e,n);let c=or.dot(ph),l=ar.dot(ph);if(c<=0&&l<=0)return t.copy(n);mh.subVectors(e,s);let h=or.dot(mh),u=ar.dot(mh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(or,o);gh.subVectors(e,r);let f=or.dot(gh),g=ar.dot(gh);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ar,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return ef.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(ef,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ra.copy(n.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),Ca.subVectors(this.max,no),lr.subVectors(e.a,no),cr.subVectors(e.b,no),hr.subVectors(e.c,no),rs.subVectors(cr,lr),os.subVectors(hr,cr),Es.subVectors(lr,hr);let t=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Es.z,Es.y,rs.z,0,-rs.x,os.z,0,-os.x,Es.z,0,-Es.x,-rs.y,rs.x,0,-os.y,os.x,0,-Es.y,Es.x,0];return!vh(t,lr,cr,hr,Ca)||(t=[1,0,0,0,1,0,0,0,1],!vh(t,lr,cr,hr,Ca))?!1:(Ia.crossVectors(rs,os),t=[Ia.x,Ia.y,Ia.z],vh(t,lr,cr,hr,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new D,new D,new D,new D,new D,new D,new D,new D],Jn=new D,Ra=new yn,lr=new D,cr=new D,hr=new D,rs=new D,os=new D,Es=new D,no=new D,Ca=new D,Ia=new D,ws=new D;function vh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),c=e.dot(ws),l=t.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Wt=new D,Pa=new le,Tg=0,At=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yu,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=e!==void 0?gc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):bu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Eu(e,this.array)}};var vo=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var So=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ag=new yn,io=new D,Sh=new D,Tn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ag.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);let t=io.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(io,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Sh)),this.expandByPoint(io.copy(e.center).sub(Sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rg=0,kn=new Qe,Mh=new Pt,ur=new D,Nn=new yn,so=new yn,en=new D,vt=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qm(e)?So:vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Nn.min,so.min),Nn.expandByPoint(en),en.addVectors(Nn.max,so.max),Nn.expandByPoint(en)):(Nn.expandByPoint(so.min),Nn.expandByPoint(so.max))}Nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)en.fromBufferAttribute(a,l),c&&(ur.fromBufferAttribute(e,l),en.add(ur)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new At(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new D,c[P]=new D;let h=new D,u=new D,d=new D,f=new le,g=new le,x=new le,p=new D,m=new D;function v(P,C,I){l[P]=l[C]=l[I]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,I),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,I),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let H=1/(g.x*x.y-x.x*g.y);isFinite(H)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(H),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(H),a[P].add(p),a[C].add(p),a[I].add(p),c[P].add(m),c[C].add(m),c[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,C=b.length;P<C;++P){let I=b[P],H=I.start,$=I.count;for(let L=H,A=H+$;L<A;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let _=new D,T=new D,w=new D,y=new D;function S(P){w.fromBufferAttribute(s,P),y.copy(w);let C=a[P];_.copy(C),_.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(y,C);let H=T.dot(c[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,H)}for(let P=0,C=n.count;P<C;++P)l[P]&&S(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new At(d,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yu,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function tf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ii()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var xn=new D,us=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?gc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):bu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Eu(e,this.data.array)}},bh=new D,Cg=new D,Ig=new it,Dn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bh.subVectors(n,t).cross(Cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(bh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ig.getNormalMatrix(e),s=this.coplanarPoint(bh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pg=0,vn=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ur,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Dn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ni=new D,Eh=new D,La=new D,Na=new D,di=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Eh.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Na.copy(this.origin).sub(Eh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(La),a=Na.dot(this.direction),c=-Na.dot(La),l=Na.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eh).addScaledVector(La,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,x=t.y-o.y,p=t.z-o.z,m=n.x-o.x,v=n.y-o.y,b=n.z-o.z,_=Math.abs(c),T=Math.abs(l),w=Math.abs(h),y,S,P,C,I,H,$,L,A,U,B,q;if(_>=T&&_>=w?(P=c,H=u,A=g,q=m,c>=0?(y=l,S=h,C=d,I=f,$=x,L=p,U=v,B=b):(y=h,S=l,C=f,I=d,$=p,L=x,U=b,B=v)):T>=w?(P=l,H=d,A=x,q=v,l>=0?(y=h,S=c,C=f,I=u,$=p,L=g,U=b,B=m):(y=c,S=h,C=u,I=f,$=g,L=p,U=m,B=b)):(P=h,H=f,A=p,q=b,h>=0?(y=c,S=l,C=u,I=d,$=g,L=x,U=m,B=v):(y=l,S=c,C=d,I=u,$=x,L=g,U=v,B=m)),P===0)return null;let k=y/P,W=S/P,K=1/P,oe=C-k*H,be=I-W*H,Y=$-k*A,he=L-W*A,ue=U-k*q,ze=B-W*q,me=ue*he-ze*Y,He=oe*ze-be*ue,gt=Y*be-he*oe;if(s){if(me<0||He<0||gt<0)return null}else if((me<0||He<0||gt<0)&&(me>0||He>0||gt>0))return null;let $e=me+He+gt;if($e===0)return null;let Je=K*(me*H+He*A+gt*q);return($e>0?Je<0:Je>0)?null:this.at(Je/$e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nf=new Qe,Ts=new di,Da=new Tn,sf=new D,Ua=new D,Oa=new D,Fa=new D,wh=new D,Ba=new D,rf=new D,ka=new D,xt=class extends Pt{constructor(e=new vt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(wh.fromBufferAttribute(u,e),o?Ba.addScaledVector(wh,h):Ba.addScaledVector(wh.sub(t),h))}t.add(Ba)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(Da.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Da,sf)===null||Ts.origin.distanceToSquared(sf)>(e.far-e.near)**2))&&(nf.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(nf),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=v,T=b;_<T;_+=3){let w=a.getX(_),y=a.getX(_+1),S=a.getX(_+2);s=za(this,m,e,n,l,h,u,w,y,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),b=a.getX(p+1),_=a.getX(p+2);s=za(this,o,e,n,l,h,u,v,b,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),b=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let _=v,T=b;_<T;_+=3){let w=_,y=_+1,S=_+2;s=za(this,m,e,n,l,h,u,w,y,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,b=p+1,_=p+2;s=za(this,o,e,n,l,h,u,v,b,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Lg(i,e,t,n,s,r,o,a){let c;if(e.side===ln?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===_i,a),c===null)return null;ka.copy(a),ka.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ka);return l<t.near||l>t.far?null:{distance:l,point:ka.clone(),object:i}}function za(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ua),i.getVertexPosition(c,Oa),i.getVertexPosition(l,Fa);let h=Lg(i,e,t,n,Ua,Oa,Fa,rf);if(h){let u=new D;cs.getBarycoord(rf,Ua,Oa,Fa,u),s&&(h.uv=cs.getInterpolatedAttribute(s,a,c,l,u,new le)),r&&(h.uv1=cs.getInterpolatedAttribute(r,a,c,l,u,new le)),o&&(h.normal=cs.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};cs.getNormal(Ua,Oa,Fa,d.normal),h.face=d,h.barycoord=u}return h}var ro=new wt,of=new wt,af=new wt,Ng=new wt,lf=new Qe,Ha=new D,Th=new Tn,cf=new Qe,Ah=new di,Mo=class extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dh,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingBox.expandByPoint(Ha)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingSphere.expandByPoint(Ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Th.copy(this.boundingSphere),Th.applyMatrix4(s),e.ray.intersectsSphere(Th)!==!1&&(cf.copy(s).invert(),Ah.copy(e.ray).applyMatrix4(cf),!(this.boundingBox!==null&&Ah.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ah)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===op?this.bindMatrixInverse.copy(this.bindMatrix).invert():qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;of.fromBufferAttribute(s.attributes.skinIndex,e),af.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ro.copy(t),t.set(0,0,0,0)):(ro.set(t.x,t.y,t.z,1),t.set(0,0,0)),ro.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=af.getComponent(r);if(o!==0){let a=of.getComponent(r);lf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ng.copy(ro).applyMatrix4(lf),o)}}return t.isVector4&&(t.w=ro.w),t.applyMatrix4(this.bindMatrixInverse)}},wr=class extends Pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},fi=class extends tn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Gt,h=Gt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hf=new Qe,Dg=new Qe,bo=class i{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Dg;hf.multiplyMatrices(a,t[r]),hf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fi(t,e,e,pn,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(qe("Skeleton: No bone found with UUID:",r),o=new wr),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Fi=class extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},dr=new Qe,uf=new Qe,Ga=[],df=new yn,Ug=new Qe,oo=new xt,ao=new Tn,Ds=class extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ug)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),df.copy(e.boundingBox).applyMatrix4(dr),this.boundingBox.union(df)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dr),ao.copy(e.boundingSphere).applyMatrix4(dr),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,dr),uf.multiplyMatrices(n,dr),oo.matrixWorld=uf,oo.raycast(e,Ga);for(let o=0,a=Ga.length;o<a;o++){let c=Ga[o];c.instanceId=r,c.object=this,t.push(c)}Ga.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(s*this.count),s,this.count,Ol,Bn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new Tn,Og=new le(.5,.5),Va=new D,ds=class{constructor(e=new Dn,t=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],v=r[12],b=r[13],_=r[14],T=r[15];if(s[0].setComponents(l-o,f-h,m-g,T-v).normalize(),s[1].setComponents(l+o,f+h,m+g,T+v).normalize(),s[2].setComponents(l+a,f+u,m+x,T+b).normalize(),s[3].setComponents(l-a,f-u,m-x,T-b).normalize(),n)s[4].setComponents(c,d,p,_).normalize(),s[5].setComponents(l-c,f-d,m-p,T-_).normalize();else if(s[4].setComponents(l-c,f-d,m-p,T-_).normalize(),t===zn)s[5].setComponents(l+c,f+d,m+p,T+_).normalize();else if(t===yr)s[5].setComponents(c,d,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);let t=Og.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Va.x=s.normal.x>0?e.max.x:e.min.x,Va.y=s.normal.y>0?e.max.y:e.min.y,Va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ff=new Qe,hl=class i{constructor(){this.coordinateSystem=zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ff.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ds),n[s].setFromProjectionMatrix(ff,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ds),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var fs=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ul=new D,dl=new D,pf=new Qe,lo=new di,Wa=new Tn,Rh=new D,mf=new D,Bi=class extends Pt{constructor(e=new vt,t=new fs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ul.fromBufferAttribute(t,s-1),dl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ul.distanceTo(dl);e.setAttribute("lineDistance",new at(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;pf.copy(s).invert(),lo.copy(e.ray).applyMatrix4(pf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=h.getX(x),v=h.getX(x+1),b=Xa(this,e,lo,c,m,v,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=Xa(this,e,lo,c,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=Xa(this,e,lo,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Xa(this,e,lo,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(ul.fromBufferAttribute(a,s),dl.fromBufferAttribute(a,r),t.distanceSqToSegment(ul,dl,Rh,mf)>n)return;Rh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Rh);if(!(l<e.near||l>e.far))return{distance:l,point:mf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var gf=new D,_f=new D,Eo=class extends Bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gf.fromBufferAttribute(t,s),_f.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gf.distanceTo(_f);e.setAttribute("lineDistance",new at(n,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wo=class extends Bi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Tr=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xf=new Qe,kh=new di,qa=new Tn,Ya=new D,To=class extends Pt{constructor(e=new vt,t=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;xf.copy(s).invert(),kh.copy(e.ray).applyMatrix4(xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let p=l.getX(g);Ya.fromBufferAttribute(u,p),yf(Ya,p,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Ya.fromBufferAttribute(u,g),yf(Ya,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yf(i,e,t,n,s,r,o){let a=kh.distanceSqToPoint(i);if(a<t){let c=new D;kh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ao=class extends tn{constructor(e=[],t=Ws,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ki=class extends tn{constructor(e,t,n=ei,s,r,o,a=Gt,c=Gt,l,h=Oi,u=1){if(h!==Oi&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ro=class extends ki{constructor(e,t=ei,n=Ws,s,r,o=Gt,a=Gt,c,l=Oi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Co=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(x,p,m,v,b,_,T,w,y,S,P){let C=_/y,I=T/S,H=_/2,$=T/2,L=w/2,A=y+1,U=S+1,B=0,q=0,k=new D;for(let W=0;W<U;W++){let K=W*I-$;for(let oe=0;oe<A;oe++){let be=oe*C-H;k[x]=be*v,k[p]=K*b,k[m]=L,l.push(k.x,k.y,k.z),k[x]=0,k[p]=0,k[m]=w>0?1:-1,h.push(k.x,k.y,k.z),u.push(oe/y),u.push(1-W/S),B+=1}}for(let W=0;W<S;W++)for(let K=0;K<y;K++){let oe=d+K+A*W,be=d+K+A*(W+1),Y=d+(K+1)+A*(W+1),he=d+(K+1)+A*W;c.push(oe,be,he),c.push(be,Y,he),q+=6}a.addGroup(f,q,P),f+=q,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var qt=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=n/2,m=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function v(){let _=new D,T=new D,w=0,y=(t-e)/n;for(let S=0;S<=r;S++){let P=[],C=S/r,I=C*(t-e)+e;for(let H=0;H<=s;H++){let $=H/s,L=$*c+a,A=Math.sin(L),U=Math.cos(L);T.x=I*A,T.y=-C*n+p,T.z=I*U,u.push(T.x,T.y,T.z),_.set(A,y,U).normalize(),d.push(_.x,_.y,_.z),f.push($,1-C),P.push(g++)}x.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let C=x[P][S],I=x[P+1][S],H=x[P+1][S+1],$=x[P][S+1];(e>0||P!==0)&&(h.push(C,I,$),w+=3),(t>0||P!==r-1)&&(h.push(I,H,$),w+=3)}l.addGroup(m,w,0),m+=w}function b(_){let T=g,w=new le,y=new D,S=0,P=_===!0?e:t,C=_===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),g++;let I=g;for(let H=0;H<=s;H++){let L=H/s*c+a,A=Math.cos(L),U=Math.sin(L);y.x=P*U,y.y=p*C,y.z=P*A,u.push(y.x,y.y,y.z),d.push(0,C,0),w.x=A*.5+.5,w.y=U*.5*C+.5,f.push(w.x,w.y),g++}for(let H=0;H<s;H++){let $=T+H,L=I+H;_===!0?h.push(L,L+1,$):h.push(L+1,L,$),S+=3}l.addGroup(m,S,_===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zi=class i extends qt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Io=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new D,_=new D,T=new D;for(let w=0;w<t.length;w+=3)f(t[w+0],b),f(t[w+1],_),f(t[w+2],T),c(b,_,T,v)}function c(v,b,_,T){let w=T+1,y=[];for(let S=0;S<=w;S++){y[S]=[];let P=v.clone().lerp(_,S/w),C=b.clone().lerp(_,S/w),I=w-S;for(let H=0;H<=I;H++)H===0&&S===w?y[S][H]=P:y[S][H]=P.clone().lerp(C,H/I)}for(let S=0;S<w;S++)for(let P=0;P<2*(w-S)-1;P++){let C=Math.floor(P/2);P%2===0?(d(y[S][C+1]),d(y[S+1][C]),d(y[S][C])):(d(y[S][C+1]),d(y[S+1][C+1]),d(y[S+1][C]))}}function l(v){let b=new D;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(v),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let v=new D;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let _=p(v)/2/Math.PI+.5,T=m(v)/Math.PI+.5;o.push(_,1-T)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let b=o[v+0],_=o[v+2],T=o[v+4],w=Math.max(b,_,T),y=Math.min(b,_,T);w>.9&&y<.1&&(b<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,b){let _=v*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let v=new D,b=new D,_=new D,T=new D,w=new le,y=new le,S=new le;for(let P=0,C=0;P<r.length;P+=9,C+=6){v.set(r[P+0],r[P+1],r[P+2]),b.set(r[P+3],r[P+4],r[P+5]),_.set(r[P+6],r[P+7],r[P+8]),w.set(o[C+0],o[C+1]),y.set(o[C+2],o[C+3]),S.set(o[C+4],o[C+5]),T.copy(v).add(b).add(_).divideScalar(3);let I=p(T);x(w,C+0,v,I),x(y,C+2,b,I),x(S,C+4,_,I)}}function x(v,b,_,T){T<0&&v.x===1&&(o[b]=v.x-1),_.x===0&&_.z===0&&(o[b]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Ar=class i extends Io{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new le:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],o=[],a=new D,c=new Qe;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Rr=class extends On{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fl=class extends Rr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var vf=new D,Sf=new D,Ch=new wu,Ih=new wu,Ph=new wu,Cr=class extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Sf.subVectors(s[0],s[1]).add(s[0]),l=Sf);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Ch.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,p),Ih.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,p),Ph.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Ch.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ih.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ph.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ch.calc(c),Ih.calc(c),Ph.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Fg(i,e){let t=1-i;return t*t*e}function Bg(i,e){return 2*(1-i)*i*e}function kg(i,e){return i*i*e}function po(i,e,t,n){return Fg(i,e)+Bg(i,t)+kg(i,n)}function zg(i,e){let t=1-i;return t*t*t*e}function Hg(i,e){let t=1-i;return 3*t*t*i*e}function Gg(i,e){return 3*(1-i)*i*i*e}function Vg(i,e){return i*i*i*e}function mo(i,e,t,n,s){return zg(i,e)+Hg(i,t)+Gg(i,n)+Vg(i,s)}var Po=class extends On{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends On{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y),mo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends On{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends On{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends On{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends On{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y),po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Mf(a,c.x,l.x,h.x,u.x),Mf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},gl=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:Cr,CubicBezierCurve:Po,CubicBezierCurve3:pl,EllipseCurve:Rr,LineCurve:Lo,LineCurve3:ml,QuadraticBezierCurve:No,QuadraticBezierCurve3:Do,SplineCurve:Uo}),_l=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new gl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Us=class extends _l{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Lo(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new No(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Po(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Uo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Rr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pi=class extends Us{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Us().fromJSON(s))}return this}};function Wg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Sp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Zg(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Oo(r,o,t,a,c,l,0),o}function Sp(i,e,t,n,s){let r;if(s===o0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=bf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=bf(o/n|0,i[o],i[o+1],r);return r&&Ir(r,r.next)&&(Bo(r),r=r.next),r}function Os(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ir(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Bo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Oo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&e0(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?qg(i,n,s,r):Xg(i)){e.push(c.i,i.i,l.i),Bo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Yg(Os(i),e),Oo(i,e,t,n,s,r,2)):o===2&&$g(i,e,t,n,s,r):Oo(Os(i),e,t,n,s,r,1);break}}}function Xg(i){let e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&co(s,a,r,c,o,l,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ut(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),x=Math.max(a,c,l),p=Math.max(h,u,d),m=zh(f,g,e,t,n),v=zh(x,p,e,t,n),b=i.prevZ,_=i.nextZ;for(;b&&b.z>=m&&_&&_.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&co(a,h,c,u,l,d,b.x,b.y)&&Ut(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&co(a,h,c,u,l,d,_.x,_.y)&&Ut(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&co(a,h,c,u,l,d,b.x,b.y)&&Ut(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&co(a,h,c,u,l,d,_.x,_.y)&&Ut(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Yg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ir(n,s)&&bp(n,t,t.next,s)&&Fo(n,s)&&Fo(s,n)&&(e.push(n.i,t.i,s.i),Bo(t),Bo(t.next),t=i=s),t=t.next}while(t!==i);return Os(t)}function $g(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&i0(o,a)){let c=Ep(o,a);o=Os(o,o.next),c=Os(c,c.next),Oo(o,e,t,n,s,r,0),Oo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Zg(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Sp(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(n0(l))}s.sort(Kg);for(let r=0;r<s.length;r++)t=Jg(s[r],t);return t}function Kg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Jg(i,e){let t=jg(i,e);if(!t)return e;let n=Ep(t,i);return Os(n,n.next),Os(t,t.next)}function jg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ir(i,t))return t;do{if(Ir(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Mp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Fo(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Qg(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Qg(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function e0(i,e,t,n){let s=i;do s.z===0&&(s.z=zh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,t0(s)}function t0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function zh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function n0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function co(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Mp(i,e,t,n,s,r,o,a)}function i0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!s0(i,e)&&(Fo(i,e)&&Fo(e,i)&&r0(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Ir(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ir(i,e){return i.x===e.x&&i.y===e.y}function bp(i,e,t,n){let s=Za(Ut(i,e,t)),r=Za(Ut(i,e,n)),o=Za(Ut(t,n,i)),a=Za(Ut(t,n,e));return!!(s!==r&&o!==a||s===0&&$a(i,t,e)||r===0&&$a(i,n,e)||o===0&&$a(t,i,n)||a===0&&$a(t,e,n))}function $a(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Za(i){return i>0?1:i<0?-1:0}function s0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Fo(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function r0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ep(i,e){let t=Hh(i.i,i.x,i.y),n=Hh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bf(i,e,t,n){let s=Hh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function o0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Gh=class{static triangulate(e,t,n=2){return Wg(e,t,n)}},Rs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ef(e),wf(n,e);let o=e.length;t.forEach(Ef);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,wf(n,t[c]);let a=Gh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ef(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Hi=class i extends vt{constructor(e=new pi([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:a0,b,_=!1,T,w,y,S;if(m){b=m.getSpacedPoints(h),_=!0,d=!1;let ae=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,ae),w=new D,y=new D,S=new D}d||(p=0,f=0,g=0,x=0);let P=a.extractPoints(l),C=P.shape,I=P.holes;if(!Rs.isClockWise(C)){C=C.reverse();for(let ae=0,we=I.length;ae<we;ae++){let _e=I[ae];Rs.isClockWise(_e)&&(I[ae]=_e.reverse())}}function $(ae){let _e=10000000000000001e-36,De=ae[0];for(let ye=1;ye<=ae.length;ye++){let Ke=ye%ae.length,ke=ae[Ke],st=ke.x-De.x,lt=ke.y-De.y,rt=st*st+lt*lt,G=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(De.x),Math.abs(De.y)),ve=_e*G*G;if(rt<=ve){ae.splice(Ke,1),ye--;continue}De=ke}}$(C),I.forEach($);let L=I.length,A=C;for(let ae=0;ae<L;ae++){let we=I[ae];C=C.concat(we)}function U(ae,we,_e){return we||je("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(we,_e)}let B=C.length;function q(ae,we,_e){let De,ye,Ke,ke=ae.x-we.x,st=ae.y-we.y,lt=_e.x-ae.x,rt=_e.y-ae.y,G=ke*ke+st*st,ve=ke*rt-st*lt;if(Math.abs(ve)>Number.EPSILON){let Re=Math.sqrt(G),Ue=Math.sqrt(lt*lt+rt*rt),se=we.x-st/Re,Ze=we.y+ke/Re,Pe=_e.x-rt/Ue,Se=_e.y+lt/Ue,R=((Pe-se)*rt-(Se-Ze)*lt)/(ke*rt-st*lt);De=se+ke*R-ae.x,ye=Ze+st*R-ae.y;let E=De*De+ye*ye;if(E<=2)return new le(De,ye);Ke=Math.sqrt(E/2)}else{let Re=!1;ke>Number.EPSILON?lt>Number.EPSILON&&(Re=!0):ke<-Number.EPSILON?lt<-Number.EPSILON&&(Re=!0):Math.sign(st)===Math.sign(rt)&&(Re=!0),Re?(De=-st,ye=ke,Ke=Math.sqrt(G)):(De=ke,ye=st,Ke=Math.sqrt(G/2))}return new le(De/Ke,ye/Ke)}let k=[];for(let ae=0,we=A.length,_e=we-1,De=ae+1;ae<we;ae++,_e++,De++)_e===we&&(_e=0),De===we&&(De=0),k[ae]=q(A[ae],A[_e],A[De]);let W=[],K,oe=k.concat();for(let ae=0,we=L;ae<we;ae++){let _e=I[ae];K=[];for(let De=0,ye=_e.length,Ke=ye-1,ke=De+1;De<ye;De++,Ke++,ke++)Ke===ye&&(Ke=0),ke===ye&&(ke=0),K[De]=q(_e[De],_e[Ke],_e[ke]);W.push(K),oe=oe.concat(K)}let be;if(p===0)be=Rs.triangulateShape(A,I);else{let ae=[],we=[];for(let _e=0;_e<p;_e++){let De=_e/p,ye=f*Math.cos(De*Math.PI/2),Ke=g*Math.sin(De*Math.PI/2)+x;for(let ke=0,st=A.length;ke<st;ke++){let lt=U(A[ke],k[ke],Ke);He(lt.x,lt.y,-ye),De===0&&ae.push(lt)}for(let ke=0,st=L;ke<st;ke++){let lt=I[ke];K=W[ke];let rt=[];for(let G=0,ve=lt.length;G<ve;G++){let Re=U(lt[G],K[G],Ke);He(Re.x,Re.y,-ye),De===0&&rt.push(Re)}De===0&&we.push(rt)}}be=Rs.triangulateShape(ae,we)}let Y=be.length,he=g+x;for(let ae=0;ae<B;ae++){let we=d?U(C[ae],oe[ae],he):C[ae];_?(y.copy(T.normals[0]).multiplyScalar(we.x),w.copy(T.binormals[0]).multiplyScalar(we.y),S.copy(b[0]).add(y).add(w),He(S.x,S.y,S.z)):He(we.x,we.y,0)}for(let ae=1;ae<=h;ae++)for(let we=0;we<B;we++){let _e=d?U(C[we],oe[we],he):C[we];_?(y.copy(T.normals[ae]).multiplyScalar(_e.x),w.copy(T.binormals[ae]).multiplyScalar(_e.y),S.copy(b[ae]).add(y).add(w),He(S.x,S.y,S.z)):He(_e.x,_e.y,u/h*ae)}for(let ae=p-1;ae>=0;ae--){let we=ae/p,_e=f*Math.cos(we*Math.PI/2),De=g*Math.sin(we*Math.PI/2)+x;for(let ye=0,Ke=A.length;ye<Ke;ye++){let ke=U(A[ye],k[ye],De);He(ke.x,ke.y,u+_e)}for(let ye=0,Ke=I.length;ye<Ke;ye++){let ke=I[ye];K=W[ye];for(let st=0,lt=ke.length;st<lt;st++){let rt=U(ke[st],K[st],De);_?He(rt.x,rt.y+b[h-1].y,b[h-1].x+_e):He(rt.x,rt.y,u+_e)}}}ue(),ze();function ue(){let ae=s.length/3;if(d){let we=0,_e=B*we;for(let De=0;De<Y;De++){let ye=be[De];gt(ye[2]+_e,ye[1]+_e,ye[0]+_e)}we=h+p*2,_e=B*we;for(let De=0;De<Y;De++){let ye=be[De];gt(ye[0]+_e,ye[1]+_e,ye[2]+_e)}}else{for(let we=0;we<Y;we++){let _e=be[we];gt(_e[2],_e[1],_e[0])}for(let we=0;we<Y;we++){let _e=be[we];gt(_e[0]+B*h,_e[1]+B*h,_e[2]+B*h)}}n.addGroup(ae,s.length/3-ae,0)}function ze(){let ae=s.length/3,we=0;me(A,we),we+=A.length;for(let _e=0,De=I.length;_e<De;_e++){let ye=I[_e];me(ye,we),we+=ye.length}n.addGroup(ae,s.length/3-ae,1)}function me(ae,we){let _e=ae.length;for(;--_e>=0;){let De=_e,ye=_e-1;ye<0&&(ye=ae.length-1);for(let Ke=0,ke=h+p*2;Ke<ke;Ke++){let st=B*Ke,lt=B*(Ke+1),rt=we+De+st,G=we+ye+st,ve=we+ye+lt,Re=we+De+lt;$e(rt,G,ve,Re)}}}function He(ae,we,_e){c.push(ae),c.push(we),c.push(_e)}function gt(ae,we,_e){Je(ae),Je(we),Je(_e);let De=s.length/3,ye=v.generateTopUV(n,s,De-3,De-2,De-1);et(ye[0]),et(ye[1]),et(ye[2])}function $e(ae,we,_e,De){Je(ae),Je(we),Je(De),Je(we),Je(_e),Je(De);let ye=s.length/3,Ke=v.generateSideWallUV(n,s,ye-6,ye-3,ye-2,ye-1);et(Ke[0]),et(Ke[1]),et(Ke[3]),et(Ke[1]),et(Ke[2]),et(Ke[3])}function Je(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function et(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return l0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new gl[s.type]().fromJSON(s)),new i(n,e.options)}},a0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,c),new le(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new le(o,1-c),new le(l,1-u),new le(d,1-g),new le(x,1-m)]:[new le(a,1-c),new le(h,1-u),new le(f,1-g),new le(p,1-m)]}};function l0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ko=class i extends Io{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Fs=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let v=m*d-o;for(let b=0;b<l;b++){let _=b*u-r;g.push(_,-v,0),x.push(0,0,1),p.push(b/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let b=v+l*m,_=v+l*(m+1),T=v+1+l*(m+1),w=v+1+l*m;f.push(b,_,w),f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},zo=class i extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new D,g=new le;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let v=m+p,b=v,_=v+n+1,T=v+n+2,w=v+1;a.push(b,_,w),a.push(_,T,w)}}this.setIndex(a),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ho=class i extends vt{constructor(e=new Do(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,c=new D,l=new le,h=new D,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function x(){for(let b=0;b<t;b++)p(b);p(r===!1?t:0),v(),m()}function p(b){h=e.getPointAt(b/t,h);let _=o.normals[b],T=o.binormals[b];for(let w=0;w<=s;w++){let y=w/s*Math.PI*2,S=Math.sin(y),P=-Math.cos(y);c.x=P*_.x+S*T.x,c.y=P*_.y+S*T.y,c.z=P*_.z+S*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=t;b++)for(let _=1;_<=s;_++){let T=(s+1)*(b-1)+(_-1),w=(s+1)*b+(_-1),y=(s+1)*b+_,S=(s+1)*(b-1)+_;g.push(T,w,S),g.push(w,y,S)}}function v(){for(let b=0;b<=t;b++)for(let _=0;_<=s;_++)l.x=b/t,l.y=_/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new gl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Tf(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Tf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=Ys(i[t]);for(let s in n)e[s]=n[s]}return e}function Tf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function c0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var wp={clone:Ys,merge:mn},h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new it().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xl=class extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ot=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends Ot{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Go=class extends vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Cl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yl=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vl=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ls(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ho(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function d0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Af(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function f0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sl=class extends gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fh:r=e,a=2*t-n;break;case Bh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fh:o=e,c=2*n-t;break;case Bh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*p+(1.5+f)*x+.5*g,_=f*p-f*x;for(let T=0;T!==a;++T)r[T]=m*o[h+T]+v*o[l+T]+b*o[c+T]+_*o[u+T];return r}},Ml=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},bl=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},El=class extends gi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),x=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[l+g],p=o[c+g],m=f*d+g*2,v=u[m],b=u[m+1],_=e*d+g*2,T=h[_],w=h[_+1],y=m0(n,t,v,T,s);r[g]=Tp(y,x,b,w,p)}return r}};function Tp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function p0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function m0(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Tp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=p0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var An=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ho(e.settings)&&(n.settings={inTangents:ls(e.settings.inTangents,Array),outTangents:ls(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new El(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ps:t=this.InterpolantFactoryMethodLinear;break;case ja:t=this.InterpolantFactoryMethodSmooth;break;case Uh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ps;case this.InterpolantFactoryMethodSmooth:return ja;case this.InterpolantFactoryMethodBezier:return Uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ho(this.settings)&&(Rf(this.settings.inTangents,e),Rf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ho(this.settings)&&(Cf(this.settings.inTangents,e),Cf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){je("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&eg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ja,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ho(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Cf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Ps;var Gi=class extends An{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Is;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};Vo.prototype.ValueTypeName="color";var Vi=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};Vi.prototype.ValueTypeName="number";var wl=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Xt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Wi=class extends An{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wl(this.times,this.values,this.getValueSize(),e)}};Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends An{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Is;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};ps.prototype.ValueTypeName="vector";var Wo=class{constructor(e="",t=-1,n=[],s=ap){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(_0(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(An.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=d0(c);c=Af(c,1,h),l=Af(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Vi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function g0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vi;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return Vo;case"quaternion":return Wi;case"bool":case"boolean":return Gi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=g0(i.type);if(i.times===void 0){let n=[],s=[];f0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ho(i.settings)&&(t.settings={inTangents:ls(i.settings.inTangents,Float32Array),outTangents:ls(i.settings.outTangents,Float32Array)}),t}var ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(If(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!If(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function If(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Tl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ap=new Tl,Gn=class{constructor(e){this.manager=e!==void 0?e:Ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Gn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Di={},Vh=class extends Error{constructor(e,t){super(e),this.response=t}},qi=class extends Gn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ui.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:n,onError:s});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Di[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,p=new ReadableStream({start(m){v();function v(){u.read().then(({done:b,value:_})=>{if(b)m.close();else{x+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,y=h.length;w<y;w++){let S=h[w];S.onProgress&&S.onProgress(T)}m.enqueue(_),v()}},b=>{m.error(b)})}}});return new Response(p)}else throw new Vh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ui.add(`file:${e}`,l);let h=Di[e];delete Di[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Di[e];if(h===void 0)throw this.manager.itemError(e),l;delete Di[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fr=new WeakMap,Al=class extends Gn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ui.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=fr.get(o);u===void 0&&(u=[],fr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=vr("img");function c(){h(),t&&t(this);let u=fr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}fr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),ui.remove(`image:${e}`);let d=fr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}fr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ui.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Xo=class extends Gn{constructor(e){super(e)}load(e,t,n,s){let r=new tn,o=new Al(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Bs=class extends Pt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},qo=class extends Bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Lh=new Qe,Pf=new D,Lf=new D,Pr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pf),Lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Lh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===yr||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ka=new D,Ja=new Xt,hi=new D,Yo=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ka,Ja,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Ja,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ka,Ja,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Ja,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new D,Nf=new le,Df=new le,$t=class extends Yo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,Nf,Df),t.subVectors(Df,Nf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(uo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wh=class extends Pr{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ls*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},$o=class extends Bs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Xh=class extends Pr{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},ks=class extends Bs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},zs=class extends Yo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qh=class extends Pr{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yi=class extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new qh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Nh=new WeakMap,Zo=class extends Gn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ui.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Nh.has(o)===!0?(s&&s(Nh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ui.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Nh.set(c,l),ui.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ui.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var pr=-90,mr=1,Lr=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(pr,mr,e,t);s.layers=this.layers,this.add(s);let r=new $t(pr,mr,e,t);r.layers=this.layers,this.add(r);let o=new $t(pr,mr,e,t);o.layers=this.layers,this.add(o);let a=new $t(pr,mr,e,t);a.layers=this.layers,this.add(a);let c=new $t(pr,mr,e,t);c.layers=this.layers,this.add(c);let l=new $t(pr,mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Rl=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Au="\\[\\]\\.:\\/",x0=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",y0="[^"+Au.replace("\\.","")+"]",v0=/((?:WC+[\/:])*)/.source.replace("WC",Ru),S0=/(WCOD+)?/.source.replace("WCOD",y0),M0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),b0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),E0=new RegExp("^"+v0+S0+M0+b0+"$"),w0=["material","materials","bones","map"],Yh=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(e){let t=E0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);w0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Yh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hM=new Float32Array(1);var Uf=new Qe,Ko=class{constructor(e,t,n=0,s=1/0){this.ray=new di(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Uf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uf),this}intersectObject(e,t=!0,n=[]){return $h(e,this,n,t),n.sort(Of),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$h(e[s],this,n,t);return n.sort(Of),n}};function Of(i,e){return i.distance-e.distance}function $h(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$h(r[o],e,t,!0)}}var Nr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Zh=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var Jo=class extends jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Cu(i,e,t,n){let s=T0(n);switch(t){case fu:return i*e;case Ol:return i*e/s.components*s.byteLength;case Fl:return i*e/s.components*s.byteLength;case gs:return i*e*2/s.components*s.byteLength;case Bl:return i*e*2/s.components*s.byteLength;case pu:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case kl:return i*e*4/s.components*s.byteLength;case Qo:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Vl:return Math.max(i,16)*Math.max(e,8)/4;case zl:case Gl:return Math.max(i,8)*Math.max(e,8)/2;case Wl:case Xl:case Yl:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ql:case ia:case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case hc:case uc:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fc:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sa:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T0(i){switch(i){case Rn:case cu:return{byteLength:1,components:1};case Br:case hu:case ti:return{byteLength:2,components:1};case Dl:case Ul:return{byteLength:2,components:4};case ei:case Nl:case Bn:return{byteLength:4,components:1};case uu:case du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Zp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function R0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
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
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
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
#endif`,B0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G0=`#ifdef USE_IRIDESCENCE
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
#endif`,V0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,j0=`#define PI 3.141592653589793
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
} // validated`,Q0=`vec3 transformedNormal = objectNormal;
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
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s_="gl_FragColor = linearToOutputTexel( gl_FragColor );",r_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m_=`#ifdef USE_GRADIENTMAP
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
}`,g_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v_=`#ifdef USE_ENVMAP
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
#endif`,S_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
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
#endif`,T_=`uniform sampler2D dfgLUT;
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
}`,A_=`
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
#endif`,R_=`#if defined( RE_IndirectDiffuse )
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
#endif`,C_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,P_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B_=`#if defined( USE_POINTS_UV )
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
#endif`,k_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G_=`#if defined( USE_MORPHCOLORS )
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
#endif`,V_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W_=`#ifdef USE_MORPHTARGETS
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
#endif`,X_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,J_=`#ifdef USE_NORMALMAP
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
#endif`,j_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ix=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fx=`float getShadowMask() {
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
}`,px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mx=`#ifdef USE_SKINNING
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
#endif`,gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,bx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cx=`uniform sampler2D t2D;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform float backgroundBlurriness;
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`#include <common>
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
}`,Ux=`#if DEPTH_PACKING == 3200
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
}`,Ox=`#define DISTANCE
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
}`,Fx=`#define DISTANCE
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`uniform float scale;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Gx=`#include <common>
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Wx=`#define LAMBERT
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
}`,Xx=`#define LAMBERT
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
}`,qx=`#define MATCAP
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
}`,Yx=`#define MATCAP
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
}`,$x=`#define NORMAL
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
}`,Zx=`#define NORMAL
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
}`,Kx=`#define PHONG
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
}`,Jx=`#define PHONG
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
}`,jx=`#define STANDARD
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
}`,Qx=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ty=`#define TOON
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
}`,ny=`uniform float size;
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
}`,iy=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,ry=`uniform vec3 color;
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
}`,oy=`uniform float rotation;
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
}`,ay=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:C0,alphahash_pars_fragment:I0,alphamap_fragment:P0,alphamap_pars_fragment:L0,alphatest_fragment:N0,alphatest_pars_fragment:D0,aomap_fragment:U0,aomap_pars_fragment:O0,batching_pars_vertex:F0,batching_vertex:B0,begin_vertex:k0,beginnormal_vertex:z0,bsdfs:H0,iridescence_fragment:G0,bumpmap_pars_fragment:V0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:q0,clipping_planes_vertex:Y0,color_fragment:$0,color_pars_fragment:Z0,color_pars_vertex:K0,color_vertex:J0,common:j0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:e_,displacementmap_vertex:t_,emissivemap_fragment:n_,emissivemap_pars_fragment:i_,colorspace_fragment:s_,colorspace_pars_fragment:r_,envmap_fragment:o_,envmap_common_pars_fragment:a_,envmap_pars_fragment:l_,envmap_pars_vertex:c_,envmap_physical_pars_fragment:v_,envmap_vertex:h_,fog_vertex:u_,fog_pars_vertex:d_,fog_fragment:f_,fog_pars_fragment:p_,gradientmap_pars_fragment:m_,lightmap_pars_fragment:g_,lights_lambert_fragment:__,lights_lambert_pars_fragment:x_,lights_pars_begin:y_,lights_toon_fragment:S_,lights_toon_pars_fragment:M_,lights_phong_fragment:b_,lights_phong_pars_fragment:E_,lights_physical_fragment:w_,lights_physical_pars_fragment:T_,lights_fragment_begin:A_,lights_fragment_maps:R_,lights_fragment_end:C_,lightprobes_pars_fragment:I_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:L_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:D_,map_fragment:U_,map_pars_fragment:O_,map_particle_fragment:F_,map_particle_pars_fragment:B_,metalnessmap_fragment:k_,metalnessmap_pars_fragment:z_,morphinstance_vertex:H_,morphcolor_vertex:G_,morphnormal_vertex:V_,morphtarget_pars_vertex:W_,morphtarget_vertex:X_,normal_fragment_begin:q_,normal_fragment_maps:Y_,normal_pars_fragment:$_,normal_pars_vertex:Z_,normal_vertex:K_,normalmap_pars_fragment:J_,clearcoat_normal_fragment_begin:j_,clearcoat_normal_fragment_maps:Q_,clearcoat_pars_fragment:ex,iridescence_pars_fragment:tx,opaque_fragment:nx,packing:ix,premultiplied_alpha_fragment:sx,project_vertex:rx,dithering_fragment:ox,dithering_pars_fragment:ax,roughnessmap_fragment:lx,roughnessmap_pars_fragment:cx,shadowmap_pars_fragment:hx,shadowmap_pars_vertex:ux,shadowmap_vertex:dx,shadowmask_pars_fragment:fx,skinbase_vertex:px,skinning_pars_vertex:mx,skinning_vertex:gx,skinnormal_vertex:_x,specularmap_fragment:xx,specularmap_pars_fragment:yx,tonemapping_fragment:vx,tonemapping_pars_fragment:Sx,transmission_fragment:Mx,transmission_pars_fragment:bx,uv_pars_fragment:Ex,uv_pars_vertex:wx,uv_vertex:Tx,worldpos_vertex:Ax,background_vert:Rx,background_frag:Cx,backgroundCube_vert:Ix,backgroundCube_frag:Px,cube_vert:Lx,cube_frag:Nx,depth_vert:Dx,depth_frag:Ux,distance_vert:Ox,distance_frag:Fx,equirect_vert:Bx,equirect_frag:kx,linedashed_vert:zx,linedashed_frag:Hx,meshbasic_vert:Gx,meshbasic_frag:Vx,meshlambert_vert:Wx,meshlambert_frag:Xx,meshmatcap_vert:qx,meshmatcap_frag:Yx,meshnormal_vert:$x,meshnormal_frag:Zx,meshphong_vert:Kx,meshphong_frag:Jx,meshphysical_vert:jx,meshphysical_frag:Qx,meshtoon_vert:ey,meshtoon_frag:ty,points_vert:ny,points_frag:iy,shadow_vert:sy,shadow_frag:ry,sprite_vert:oy,sprite_frag:ay},Fe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},vi={basic:{uniforms:mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:mn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:mn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:mn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:mn([Fe.points,Fe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:mn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:mn([Fe.common,Fe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:mn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:mn([Fe.sprite,Fe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:mn([Fe.common,Fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:mn([Fe.lights,Fe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};vi.physical={uniforms:mn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var _c={r:0,b:0,g:0},ly=new Qe,Kp=new it;Kp.set(-1,0,0,0,1,0,0,0,1);function cy(i,e,t,n,s,r){let o=new Ye(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let _=v.backgroundBlurriness>0;b=e.get(b,_)}return b}function g(v){let b=!1,_=f(v);_===null?p(o,a):_&&_.isColor&&(p(_,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,b){let _=f(b);_&&_.isCubeTexture?(l===void 0&&(l=new xt(new Lt(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Ys(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ly.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Kp),l.material.toneMapped=ht.getTransfer(_.colorSpace)!==Et,(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new xt(new Fs(2,2),new mi({name:"BackgroundMaterial",uniforms:Ys(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ht.getTransfer(_.colorSpace)!==Et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,b){v.getRGB(_c,Tu(i)),t.buffers.color.setClear(_c.r,_c.g,_c.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:x,dispose:m}}function hy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,H,$,L,A){let U=!1,B=u(I,L,$,H);r!==B&&(r=B,l(r.object)),U=f(I,L,$,A),U&&g(I,L,$,A),A!==null&&e.update(A,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,_(I,H,$,L),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,H,$,L){let A=L.wireframe===!0,U=n[H.id];U===void 0&&(U={},n[H.id]=U);let B=I.isInstancedMesh===!0?I.id:0,q=U[B];q===void 0&&(q={},U[B]=q);let k=q[$.id];k===void 0&&(k={},q[$.id]=k);let W=k[A];return W===void 0&&(W=d(c()),k[A]=W),W}function d(I){let H=[],$=[],L=[];for(let A=0;A<t;A++)H[A]=0,$[A]=0,L[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,H,$,L){let A=r.attributes,U=H.attributes,B=0,q=$.getAttributes();for(let k in q)if(q[k].location>=0){let K=A[k],oe=U[k];if(oe===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),K===void 0||K.attribute!==oe||oe&&K.data!==oe.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function g(I,H,$,L){let A={},U=H.attributes,B=0,q=$.getAttributes();for(let k in q)if(q[k].location>=0){let K=U[k];K===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));let oe={};oe.attribute=K,K&&K.data&&(oe.data=K.data),A[k]=oe,B++}r.attributes=A,r.attributesNum=B,r.index=L}function x(){let I=r.newAttributes;for(let H=0,$=I.length;H<$;H++)I[H]=0}function p(I){m(I,0)}function m(I,H){let $=r.newAttributes,L=r.enabledAttributes,A=r.attributeDivisors;$[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),A[I]!==H&&(i.vertexAttribDivisor(I,H),A[I]=H)}function v(){let I=r.newAttributes,H=r.enabledAttributes;for(let $=0,L=H.length;$<L;$++)H[$]!==I[$]&&(i.disableVertexAttribArray($),H[$]=0)}function b(I,H,$,L,A,U,B){B===!0?i.vertexAttribIPointer(I,H,$,A,U):i.vertexAttribPointer(I,H,$,L,A,U)}function _(I,H,$,L){x();let A=L.attributes,U=$.getAttributes(),B=H.defaultAttributeValues;for(let q in U){let k=U[q];if(k.location>=0){let W=A[q];if(W===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){let K=W.normalized,oe=W.itemSize,be=e.get(W);if(be===void 0)continue;let Y=be.buffer,he=be.type,ue=be.bytesPerElement,ze=he===i.INT||he===i.UNSIGNED_INT||W.gpuType===Nl;if(W.isInterleavedBufferAttribute){let me=W.data,He=me.isInterleavedBuffer===!0?me.stride:me.itemSize,gt=W.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let $e=0;$e<k.locationSize;$e++)m(k.location+$e,me.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let $e=0;$e<k.locationSize;$e++)p(k.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let $e=0;$e<k.locationSize;$e++)b(k.location+$e,oe/k.locationSize,he,K,He*ue,(gt+oe/k.locationSize*$e)*ue,ze)}else{if(W.isInstancedBufferAttribute){for(let me=0;me<k.locationSize;me++)m(k.location+me,W.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let me=0;me<k.locationSize;me++)p(k.location+me);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let me=0;me<k.locationSize;me++)b(k.location+me,oe/k.locationSize,he,K,oe*ue,oe/k.locationSize*me*ue,ze)}}else if(B!==void 0){let K=B[q];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(k.location,K);break;case 3:i.vertexAttrib3fv(k.location,K);break;case 4:i.vertexAttrib4fv(k.location,K);break;default:i.vertexAttrib1fv(k.location,K)}}}}v()}function T(){P();for(let I in n){let H=n[I];for(let $ in H){let L=H[$];for(let A in L){let U=L[A];for(let B in U)h(U[B].object),delete U[B];delete L[A]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let H=n[I.id];for(let $ in H){let L=H[$];for(let A in L){let U=L[A];for(let B in U)h(U[B].object),delete U[B];delete L[A]}}delete n[I.id]}function y(I){for(let H in n){let $=n[H];for(let L in $){let A=$[L];if(A[I.id]===void 0)continue;let U=A[I.id];for(let B in U)h(U[B].object),delete U[B];delete A[I.id]}}}function S(I){for(let H in n){let $=n[H],L=I.isInstancedMesh===!0?I.id:0,A=$[L];if(A!==void 0){for(let U in A){let B=A[U];for(let q in B)h(B[q].object),delete B[q];delete A[U]}delete $[L],Object.keys($).length===0&&delete n[H]}}}function P(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function uy(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function dy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==pn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let S=y===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Rn&&y!==Bn&&!S&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(qe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:_,maxSamples:T,samples:w}}function fy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Dn,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let v=r?0:n,b=v*4,_=m.clippingState||null;c.value=_,_=h(g,d,b,f);for(let T=0;T!==b;++T)_[T]=t[T];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,_=f;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(v,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var ca=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ao(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Lt(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Gs});r.uniforms.tEquirect.value=t;let o=new xt(s,r),a=t.minFilter;return t.minFilter===fn&&(t.minFilter=Nt),new Lr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Rp=256,py=3,my=20,Jp=256,jp=16,gy=3,_y=new D,xy=new Ye,Hr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lr(1,10,null),this._boxMesh=new xt(new Lt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=_y}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(xy));let p=new Lr(n,s,h);return p.position.copy(a),p.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Rp,Mu(e))}_fromTexture(e,t){e.mapping===Ws||e.mapping===Or?this._setSize(e.image.length===0?Rp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Cp(e,!1,!1),n=Math.log2(e)-py;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Cp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ws||e.mapping===Or?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ip()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yy(),this._integrationMaterial=vy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/jp);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-gy)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(Jp*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Sy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Cp(i,e,t){return new ca(i,{minFilter:fn,generateMipmaps:e,type:ti,colorSpace:on,depthBuffer:t})}function ha(i,e,t){return new mi({name:i,uniforms:e,vertexShader:dt.cube_vert,fragmentShader:t,side:ln,blending:Gs,depthTest:!1,depthWrite:!1})}function yy(){return ha("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jp}u

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
	`)}function vy(){return ha("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jp}},`

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
	`)}function Sy(){return ha("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${my}
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
	`)}function Ip(){return ha("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Pp(){return ha("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function My(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Il||f===Pl)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new ca(g.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Il||f===Pl,x=f===Ws||f===Or;if(g||x){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Hr(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return g&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new Hr(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===Il?d.mapping=Ws:f===Pl&&(d.mapping=Or),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function by(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Ey(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)e.update(x[p],i.ARRAY_BUFFER)}function u(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,b=p.count>=65535?So:vo,_=new b(Math.ceil(v/3)*6,1),T=_.array;if(x!==null){let y=x.array;m=x.version;for(let S=0,P=0;S<v;S+=3){let C=y[S+0],I=y[S+1],H=y[S+2];T[P++]=C,T[P++]=I,T[P++]=I,T[P++]=H,T[P++]=H,T[P++]=C}}else{m=p.version;for(let y=0,S=0;y<v;y+=3){let P=y+0,C=y+1,I=y+2;T[S++]=P,T[S++]=C,T[S++]=C,T[S++]=I,T[S++]=I,T[S++]=P}}_.version=m;let w=r.get(g);w&&e.remove(w),r.set(g,_)}function d(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function wy(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ty(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ay(i,e,t){let n=new WeakMap,s=new wt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let P=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*T*4*u),y=new xo(w,_,T,u);y.type=Bn,y.needsUpdate=!0;let S=b*4;for(let C=0;C<u;C++){let I=p[C],H=m[C],$=v[C],L=_*T*4*C;for(let A=0;A<I.count;A++){let U=A*S;f===!0&&(s.fromBufferAttribute(I,A),w[L+U+0]=s.x,w[L+U+1]=s.y,w[L+U+2]=s.z,w[L+U+3]=0),g===!0&&(s.fromBufferAttribute(H,A),w[L+U+4]=s.x,w[L+U+5]=s.y,w[L+U+6]=s.z,w[L+U+7]=0),x===!0&&(s.fromBufferAttribute($,A),w[L+U+8]=s.x,w[L+U+9]=s.y,w[L+U+10]=s.z,w[L+U+11]=$.itemSize===4?s.w:1)}}d={count:u,texture:y,size:new le(_,T)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ry(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Cy={[nu]:"LINEAR_TONE_MAPPING",[iu]:"REINHARD_TONE_MAPPING",[su]:"CINEON_TONE_MAPPING",[jo]:"ACES_FILMIC_TONE_MAPPING",[ou]:"AGX_TONE_MAPPING",[au]:"NEUTRAL_TONE_MAPPING",[ru]:"CUSTOM_TONE_MAPPING"};function Iy(i,e,t,n,s,r){let o=new Un(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new vt;h.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new at([0,2,0,0,2,0],2));let u=new xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new xt(h,u),f=new zs(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,v=null,b=[],_=!1;this.setSize=function(T,w){o.setSize(T,w),a!==null&&a.setSize(T,w),c!==null&&c.setSize(T,w);for(let y=0;y<b.length;y++){let S=b[y];S.setSize&&S.setSize(T,w)}},this.setEffects=function(T){b=T,_=b.length>0&&b[0].isRenderPass===!0;let w=o.width,y=o.height;b.length>0&&a===null&&(a=new Un(w,y,{type:ti,depthBuffer:!1,stencilBuffer:!1}),c=new Un(w,y,{type:ti,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&l===null&&(l=new ki(w,y),r===!0&&(l.format=$i,l.type=qs)),o.dispose(),o.depthTexture=S?l:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<b.length;P++){let C=b[P];C.setSize&&C.setSize(w,y),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(T,w){if(p||T.toneMapping===xi&&b.length===0)return!1;if(v=w,w!==null){let y=w.width,S=w.height;(o.width!==y||o.height!==S)&&this.setSize(y,S)}return _===!1&&T.setRenderTarget(o),m=T.toneMapping,T.toneMapping=xi,!0},this.hasRenderPass=function(){return _},this.end=function(T,w){T.toneMapping=m,p=!0;let y=o,S=a;for(let P=0;P<b.length;P++){let C=b[P];C.enabled!==!1&&(C.render(T,S,y,w),C.needsSwap!==!1&&(y=S,S=S===a?c:a))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,u.defines={},ht.getTransfer(g)===Et&&(u.defines.SRGB_TRANSFER="");let P=Cy[x];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(v),T.render(d,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Qp=new tn,em=new ki(1,1),tm=new Ro(1),nm=new xo,im=new cl,sm=new Ao,Lp=[],Np=[],Dp=new Float32Array(16),Up=new Float32Array(9),Op=new Float32Array(4);function Gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Lp[s];if(r===void 0&&(r=new Float32Array(s),Lp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vc(i,e){let t=Np[e];t===void 0&&(t=new Int32Array(e),Np[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Py(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function Uy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Op.set(n),i.uniformMatrix2fv(this.addr,!1,Op),Kt(t,n)}}function Oy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Up.set(n),i.uniformMatrix3fv(this.addr,!1,Up),Kt(t,n)}}function Fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Dp.set(n),i.uniformMatrix4fv(this.addr,!1,Dp),Kt(t,n)}}function By(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Gy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Sc(i){return i.version===0&&(i.compareFunction=xu,i.needsUpdate=!0),i}function qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Sc(em):r=Qp,t.setTexture2D(e||r,s)}function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||im,s)}function $y(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Sc(tm):r=sm,t.setTextureCube(e||r,s)}function Zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nm,s)}function Ky(i){switch(i){case 5126:return Py;case 35664:return Ly;case 35665:return Ny;case 35666:return Dy;case 35674:return Uy;case 35675:return Oy;case 35676:return Fy;case 5124:case 35670:return By;case 35667:case 35671:return ky;case 35668:case 35672:return zy;case 35669:case 35673:return Hy;case 5125:return Gy;case 36294:return Vy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Zy}}function Jy(i,e){i.uniform1fv(this.addr,e)}function jy(i,e){let t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function Qy(i,e){let t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function ev(i,e){let t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function tv(i,e){let t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function nv(i,e){let t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function iv(i,e){let t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sv(i,e){i.uniform1iv(this.addr,e)}function rv(i,e){i.uniform2iv(this.addr,e)}function ov(i,e){i.uniform3iv(this.addr,e)}function av(i,e){i.uniform4iv(this.addr,e)}function lv(i,e){i.uniform1uiv(this.addr,e)}function cv(i,e){i.uniform2uiv(this.addr,e)}function hv(i,e){i.uniform3uiv(this.addr,e)}function uv(i,e){i.uniform4uiv(this.addr,e)}function dv(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Sc(em):o=Qp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function fv(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||im,r[o])}function pv(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Sc(tm):o=sm;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function mv(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nm,r[o])}function gv(i){switch(i){case 5126:return Jy;case 35664:return jy;case 35665:return Qy;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return sv;case 35667:case 35671:return rv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}var Lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ky(t.type)}},Nu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gv(t.type)}},Du=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Iu=/(\w+)(\])?(\[|\.)?/g;function Fp(i,e){i.seq.push(e),i.map[e.id]=e}function _v(i,e,t){let n=i.name,s=n.length;for(Iu.lastIndex=0;;){let r=Iu.exec(n),o=Iu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Fp(t,l===void 0?new Lu(a,i,e):new Nu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Du(a),Fp(t,u)),t=u}}}var zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);_v(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Bp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xv=37297,yv=0;function vv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var kp=new it;function Sv(i){ht._getMatrix(kp,ht.workingColorSpace,i);let e=`mat3( ${kp.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case go:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+vv(i.getShaderSource(e),a)}else return r}function Mv(i,e){let t=Sv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var bv={[nu]:"Linear",[iu]:"Reinhard",[su]:"Cineon",[jo]:"ACESFilmic",[ou]:"AgX",[au]:"Neutral",[ru]:"Custom"};function Ev(i,e){let t=bv[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xc=new D;function wv(){ht.getLuminanceCoefficients(xc);let i=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function Av(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function la(i){return i!==""}function Hp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Gp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(i){return i.replace(Cv,Iv)}function Iv(i,e){let t=dt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Uu(t)}var Pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(i){return i.replace(Pv,Lv)}function Lv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Nv={[Hs]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function Dv(i){return Nv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Uv={[Or]:"ENVMAP_MODE_REFRACTION"};function Ov(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Uv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Fv={[Cl]:"ENVMAP_BLENDING_MULTIPLY",[sp]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function Bv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fv[i.combine]||"ENVMAP_BLENDING_NONE"}function kv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Dv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ov(t),u=Bv(t),d=Tv(t),f=Av(r),g=s.createProgram(),x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(la).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(la).join(`
`),p.length>0&&(p+=`
`)):(x=[Wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),p=[Wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?dt.tonemapping_pars_fragment:"",t.toneMapping!==xi?Ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Mv("linearToOutputTexel",t.outputColorSpace),wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),o=Uu(o),o=Hp(o,t),o=Gp(o,t),a=Uu(a),a=Hp(a,t),a=Gp(a,t),o=Vp(o),a=Vp(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+x+o,b=m+p+a,_=Bp(s,s.VERTEX_SHADER,v),T=Bp(s,s.FRAGMENT_SHADER,b);s.attachShader(g,_),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(C){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",H=s.getShaderInfoLog(_)||"",$=s.getShaderInfoLog(T)||"",L=I.trim(),A=H.trim(),U=$.trim(),B=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,_,T);else{let k=zp(s,_,"vertex"),W=zp(s,T,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+k+`
`+W)}else L!==""?qe("WebGLProgram: Program Info Log:",L):(A===""||U==="")&&(q=!1);q&&(C.diagnostics={runnable:B,programLog:L,vertexShader:{log:A,prefix:x},fragmentShader:{log:U,prefix:p}})}s.deleteShader(_),s.deleteShader(T),y=new zr(s,g),S=Rv(s,g)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,xv)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=T,this}var zv=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fu(e),t.set(e,n)),n}},Fu=class{constructor(e){this.id=zv++,this.code=e,this.usedTimes=0}};function Hv(i){return i===gs||i===ia||i===sa}function Gv(i,e,t,n,s,r){let o=new br,a=new Ou,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,S,P,C,I,H){let $=C.fog,L=I.geometry,A=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=e.get(y.envMap||A,U),q=d[y.type],k=n.precision;y.precision!==null&&(k=n.getMaxPrecision(y.precision),k!==y.precision&&qe("WebGLProgram.getParameters:",y.precision,"not supported, using",k,"instead."));let W=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,K=W!==void 0?W.length:0,oe=0;L.morphAttributes.position!==void 0&&(oe=1),L.morphAttributes.normal!==void 0&&(oe=2),L.morphAttributes.color!==void 0&&(oe=3);let be,Y,he,ue;if(q){let Oe=vi[q];be=Oe.vertexShader,Y=Oe.fragmentShader}else{be=y.vertexShader,Y=y.fragmentShader;let Oe=a.getVertexShaderStage(y),yt=a.getFragmentShaderStage(y);a.update(y,Oe,yt),he=Oe.id,ue=yt.id}let ze=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),He=I.isInstancedMesh===!0,gt=I.isBatchedMesh===!0,$e=!!y.map,Je=!!y.matcap,et=!!B,ae=et&&B.isPMREMTexture===!0,we=!!y.aoMap,_e=!!y.lightMap,De=!!y.bumpMap&&y.wireframe===!1,ye=!!y.normalMap,Ke=!!y.displacementMap,ke=!!y.emissiveMap,st=!!y.metalnessMap,lt=!!y.roughnessMap,rt=y.anisotropy>0,G=y.clearcoat>0,ve=y.diffuseRoughness>0,Re=y.dispersion>0,Ue=y.retroreflectivity>0,se=y.iridescence>0,Ze=y.sheen>0,Pe=y.transmission>0,Se=rt&&!!y.anisotropyMap,R=G&&!!y.clearcoatMap,E=G&&!!y.clearcoatNormalMap,X=G&&!!y.clearcoatRoughnessMap,ce=ve&&!!y.diffuseRoughnessMap,re=se&&!!y.iridescenceMap,Te=se&&!!y.iridescenceThicknessMap,Me=Ze&&!!y.sheenColorMap,j=Ze&&!!y.sheenRoughnessMap,ie=!!y.specularMap,Ee=!!y.specularColorMap,F=!!y.specularIntensityMap,ne=Pe&&!!y.transmissionMap,Q=Pe&&!!y.thicknessMap,Ae=!!y.gradientMap,xe=!!y.alphaMap,Ce=y.alphaTest>0,Xe=!!y.alphaHash,ot=!!y.extensions,ge=xi;y.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(ge=i.toneMapping);let We=ae?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,tt={shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:be,fragmentShader:Y,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ue,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:k,batching:gt,batchingColor:gt&&I._colorsTexture!==null,instancing:He,instancingColor:He&&I.instanceColor!==null,instancingMorph:He&&I.morphTexture!==null,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:$e,matcap:Je,envMap:et,envMapMode:et&&B.mapping,envMapPMREM:ae,envMapMaxLod:ae?We.length-1:null,envMapSize:ae?We[0].width:null,aoMap:we,lightMap:_e,bumpMap:De,normalMap:ye,displacementMap:Ke,emissiveMap:ke,normalMapObjectSpace:ye&&y.normalMapType===cp,normalMapTangentSpace:ye&&y.normalMapType===oa,packedNormalMap:ye&&y.normalMapType===oa&&Hv(y.normalMap.format),metalnessMap:st,roughnessMap:lt,anisotropy:rt,anisotropyMap:Se,clearcoat:G,clearcoatMap:R,clearcoatNormalMap:E,clearcoatRoughnessMap:X,diffuseRoughness:ve,diffuseRoughnessMap:ce,dispersion:Re,retroreflection:Ue,iridescence:se,iridescenceMap:re,iridescenceThicknessMap:Te,sheen:Ze,sheenColorMap:Me,sheenRoughnessMap:j,specularMap:ie,specularColorMap:Ee,specularIntensityMap:F,transmission:Pe,transmissionMap:ne,thicknessMap:Q,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===Ur&&y.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ce,alphaHash:Xe,combine:y.combine,mapUv:$e&&f(y.map.channel),aoMapUv:we&&f(y.aoMap.channel),lightMapUv:_e&&f(y.lightMap.channel),bumpMapUv:De&&f(y.bumpMap.channel),normalMapUv:ye&&f(y.normalMap.channel),displacementMapUv:Ke&&f(y.displacementMap.channel),emissiveMapUv:ke&&f(y.emissiveMap.channel),metalnessMapUv:st&&f(y.metalnessMap.channel),roughnessMapUv:lt&&f(y.roughnessMap.channel),anisotropyMapUv:Se&&f(y.anisotropyMap.channel),clearcoatMapUv:R&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ce&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:re&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(y.sheenRoughnessMap.channel),specularMapUv:ie&&f(y.specularMap.channel),specularColorMapUv:Ee&&f(y.specularColorMap.channel),specularIntensityMapUv:F&&f(y.specularIntensityMap.channel),transmissionMapUv:ne&&f(y.transmissionMap.channel),thicknessMapUv:Q&&f(y.thicknessMap.channel),alphaMapUv:xe&&f(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ye||rt),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&($e||xe),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&ye===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:oe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:H.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&ht.getTransfer(y.map.colorSpace)===Et,decodeVideoTextureEmissive:ke&&y.emissiveMap.isVideoTexture===!0&&ht.getTransfer(y.emissiveMap.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vn,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ot&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&y.extensions.multiDraw===!0||gt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function x(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(S,y),m(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function p(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function m(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function v(y){let S=d[y.type],P;if(S){let C=vi[S];P=wp.clone(C.uniforms)}else P=y.uniforms;return P}function b(y,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new kv(i,S,y,s),l.push(P),h.set(S,P)),P}function _(y){if(--y.usedTimes===0){let S=l.indexOf(y);l[S]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:b,releaseProgram:_,releaseShaderCache:T,programs:l,dispose:w}}function Vv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,p,m){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},i[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=o(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=p,v.group=m),e++,v}function c(d,f,g,x,p,m,v){v.reversedDepth===!0&&(p=-p);let b=a(d,f,g,x,p,m);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function l(d,f,g,x,p,m){let v=a(d,f,g,x,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Wv),n.length>1&&n.sort(f||Xp),s.length>1&&s.sort(f||Xp)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Xv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new qp,i.set(n,[o])):s>=r.length?(o=new qp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ye};break;case"SpotLight":t={position:new D,direction:new D,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Yv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $v=0;function Zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kv(i){let e=new qv,t=Yv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Qe,o=new Qe;function a(l){let h=0,u=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,v=0,b=0,_=0,T=0,w=0,y=0,S=0,P=0,C=0;l.sort(Zv);for(let H=0,$=l.length;H<$;H++){let L=l[H],A=L.color,U=L.intensity,B=L.distance,q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===gs?q=L.shadow.map.texture:q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=A.r*U,u+=A.g*U,d+=A.b*U;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],U);C++}else if(L.isSunLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let W=L.shadow,K=t.get(L);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=q;let oe=W.getViewportCount();for(let be=0;be<oe;be++)n.sunShadowMatrix[x+be]=W.getMatrix(be),n.sunShadowCascade[x+be]=W._cascadeData[be];x+=oe,g++}n.sun[f]=k,f++}else if(L.isDirectionalLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let W=L.shadow,K=t.get(L);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=k,p++}else if(L.isSpotLight){let k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(A).multiplyScalar(U),k.distance=B,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[v]=k;let W=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,W.updateMatrices(L),L.castShadow&&P++),n.spotLightMatrix[v]=W.matrix,L.castShadow){let K=t.get(L);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=q,y++}v++}else if(L.isRectAreaLight){let k=e.get(L);k.color.copy(A).multiplyScalar(U),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[b]=k,b++}else if(L.isPointLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let W=L.shadow,K=t.get(L);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=L.shadow.matrix,w++}n.point[m]=k,m++}else if(L.isHemisphereLight){let k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(U),k.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[_]=k,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==b||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==w||I.numSpotShadows!==y||I.numSpotMaps!==S||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=b,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=v,I.rectAreaLength=b,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=w,I.numSpotShadows=y,I.numSpotMaps=S,I.numLightProbes=C,n.version=$v++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let v=0,b=l.length;v<b;v++){let _=l[v];if(_.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),u++}else if(_.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(_.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(_.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function Yp(i){let e=new Kv(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Jv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Yp(i),e.set(s,[a])):r>=o.length?(a=new Yp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`,eS=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],tS=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],$p=new Qe,aa=new D,Pu=new D;function nS(i,e,t){let n=new ds,s=new le,r=new le,o=new wt,a=new yl,c=new vl,l={},h=t.maxTextureSize,u={[_i]:ln,[ln]:_i,[Vn]:Vn},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:jv,fragmentShader:Qv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let m=this.type;this.render=function(w,y,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===kf&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);let P=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Gs),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let $=m!==this.type;$&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(A=>A.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,A=w.length;L<A;L++){let U=w[L],B=U.shadow;if(B===void 0){qe("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let q=B.getFrameExtents();s.multiply(q),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,B.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=k,B.map===null||$===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Dr){if(U.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Un(s.x,s.y,{format:gs,type:ti,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new ki(s.x,s.y,Bn),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Oi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Gt,B.map.depthTexture.magFilter=Gt}else U.isPointLight?(B.map=new ca(s.x),B.map.depthTexture=new Ro(s.x,ei)):(B.map=new Un(s.x,s.y),B.map.depthTexture=new ki(s.x,s.y,ei)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Oi,this.type===Hs?(B.map.depthTexture.compareFunction=k?_u:gu,B.map.depthTexture.minFilter=Nt,B.map.depthTexture.magFilter=Nt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Gt,B.map.depthTexture.magFilter=Gt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let W=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();U.isPointLight!==!0&&B.updateMatrices(U,S);let K=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:S.layers;for(let oe=0;oe<W;oe++){let be=B.getCamera(oe);if(U.isPointLight){let Y=B.camera,he=B.matrix,ue=U.distance||Y.far;ue!==Y.far&&(Y.far=ue,Y.updateProjectionMatrix()),aa.setFromMatrixPosition(U.matrixWorld),Y.position.copy(aa),Pu.copy(Y.position),Pu.add(eS[oe]),Y.up.copy(tS[oe]),Y.lookAt(Pu),Y.updateMatrixWorld(),he.makeTranslation(-aa.x,-aa.y,-aa.z),$p.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix($p,Y.coordinateSystem,Y.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,oe),i.clear();else{oe===0&&(i.setRenderTarget(B.map),i.clear());let Y=B.getViewport(oe);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),H.viewport(o)}n=B.getFrustum(oe),_(y,S,be,U,K,this.type)}B.isPointLightShadow!==!0&&this.type===Dr&&v(B,S),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(P,C,I)};function v(w,y){let S=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Un(s.x,s.y,{format:gs,type:ti}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(y,null,S,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(y,null,S,f,x,null)}function b(w,y,S,P){let C=null,I=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)C=I;else if(C=S.isPointLight===!0?c:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let H=C.uuid,$=y.uuid,L=l[H];L===void 0&&(L={},l[H]=L);let A=L[$];A===void 0&&(A=C.clone(),L[$]=A,y.addEventListener("dispose",T)),C=A}if(C.visible=y.visible,C.wireframe=y.wireframe,P===Dr?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:u[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let H=i.properties.get(C);H.light=S}return C}function _(w,y,S,P,C,I){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Dr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let L=e.update(w),A=w.material;if(Array.isArray(A)){let U=L.groups;for(let B=0,q=U.length;B<q;B++){let k=U[B],W=A[k.materialIndex];if(W&&W.visible){let K=b(w,W,P,I);w.onBeforeShadow(i,w,y,S,L,K,k),i.renderBufferDirect(S,null,L,K,w,k),w.onAfterShadow(i,w,y,S,L,K,k)}}}else if(A.visible){let U=b(w,A,P,I);w.onBeforeShadow(i,w,y,S,L,U,null),i.renderBufferDirect(S,null,L,U,w,null),w.onAfterShadow(i,w,y,S,L,U,null)}}let $=w.children;for(let L=0,A=$.length;L<A;L++)_($[L],y,S,P,C,I)}function T(w){w.target.removeEventListener("dispose",T);for(let S in l){let P=l[S],C=w.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function iS(i,e){function t(){let F=!1,ne=new wt,Q=null,Ae=new wt(0,0,0,0);return{setMask:function(xe){Q!==xe&&!F&&(i.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){F=xe},setClear:function(xe,Ce,Xe,ot,ge){ge===!0&&(xe*=ot,Ce*=ot,Xe*=ot),ne.set(xe,Ce,Xe,ot),Ae.equals(ne)===!1&&(i.clearColor(xe,Ce,Xe,ot),Ae.copy(ne))},reset:function(){F=!1,Q=null,Ae.set(-1,0,0,0)}}}function n(){let F=!1,ne=!1,Q=null,Ae=null,xe=null;return{setReversed:function(Ce){if(ne!==Ce){let Xe=e.get("EXT_clip_control");Ce?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ne=Ce;let ot=xe;xe=null,this.setClear(ot)}},getReversed:function(){return ne},setTest:function(Ce){Ce?me(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(Ce){Q!==Ce&&!F&&(i.depthMask(Ce),Q=Ce)},setFunc:function(Ce){if(ne&&(Ce=yp[Ce]),Ae!==Ce){switch(Ce){case el:i.depthFunc(i.NEVER);break;case tl:i.depthFunc(i.ALWAYS);break;case nl:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case il:i.depthFunc(i.EQUAL);break;case sl:i.depthFunc(i.GEQUAL);break;case rl:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=Ce}},setLocked:function(Ce){F=Ce},setClear:function(Ce){xe!==Ce&&(xe=Ce,ne&&(Ce=1-Ce),i.clearDepth(Ce))},reset:function(){F=!1,Q=null,Ae=null,xe=null,ne=!1}}}function s(){let F=!1,ne=null,Q=null,Ae=null,xe=null,Ce=null,Xe=null,ot=null,ge=null;return{setTest:function(We){F||(We?me(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(We){ne!==We&&!F&&(i.stencilMask(We),ne=We)},setFunc:function(We,tt,Oe){(Q!==We||Ae!==tt||xe!==Oe)&&(i.stencilFunc(We,tt,Oe),Q=We,Ae=tt,xe=Oe)},setOp:function(We,tt,Oe){(Ce!==We||Xe!==tt||ot!==Oe)&&(i.stencilOp(We,tt,Oe),Ce=We,Xe=tt,ot=Oe)},setLocked:function(We){F=We},setClear:function(We){ge!==We&&(i.clearStencil(We),ge=We)},reset:function(){F=!1,ne=null,Q=null,Ae=null,xe=null,Ce=null,Xe=null,ot=null,ge=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,v=null,b=null,_=null,T=null,w=null,y=null,S=new Ye(0,0,0),P=0,C=!1,I=null,H=null,$=null,L=null,A=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,q=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=q>=2);let W=null,K={},oe=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Y=new wt().fromArray(oe),he=new wt().fromArray(be);function ue(F,ne,Q,Ae){let xe=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(F,Ce),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<Q;Xe++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ne+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Ce}let ze={};ze[i.TEXTURE_2D]=ue(i.TEXTURE_2D,i.TEXTURE_2D,1),ze[i.TEXTURE_CUBE_MAP]=ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[i.TEXTURE_2D_ARRAY]=ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ze[i.TEXTURE_3D]=ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(i.DEPTH_TEST),o.setFunc(_r),De(!1),ye(Kh),me(i.CULL_FACE),we(Gs);function me(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function He(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function gt(F,ne){return d[F]!==ne?(i.bindFramebuffer(F,ne),d[F]=ne,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function $e(F,ne){let Q=g,Ae=!1;if(F){Q=f.get(ne),Q===void 0&&(Q=[],f.set(ne,Q));let xe=F.textures;if(Q.length!==xe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Xe=xe.length;Ce<Xe;Ce++)Q[Ce]=i.COLOR_ATTACHMENT0+Ce;Q.length=xe.length,Ae=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(Q)}function Je(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let et={[Vs]:i.FUNC_ADD,[Hf]:i.FUNC_SUBTRACT,[Gf]:i.FUNC_REVERSE_SUBTRACT};et[Vf]=i.MIN,et[Wf]=i.MAX;let ae={[Xf]:i.ZERO,[qf]:i.ONE,[Yf]:i.SRC_COLOR,[eu]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[Zf]:i.DST_ALPHA,[$f]:i.ONE_MINUS_SRC_COLOR,[tu]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Kf]:i.ONE_MINUS_DST_ALPHA,[ep]:i.CONSTANT_COLOR,[tp]:i.ONE_MINUS_CONSTANT_COLOR,[np]:i.CONSTANT_ALPHA,[ip]:i.ONE_MINUS_CONSTANT_ALPHA};function we(F,ne,Q,Ae,xe,Ce,Xe,ot,ge,We){if(F===Gs){p===!0&&(He(i.BLEND),p=!1);return}if(p===!1&&(me(i.BLEND),p=!0),F!==zf){if(F!==m||We!==C){if((v!==Vs||T!==Vs)&&(i.blendEquation(i.FUNC_ADD),v=Vs,T=Vs),We)switch(F){case Ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jh:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",F);break}else switch(F){case Ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jh:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qh:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",F);break}b=null,_=null,w=null,y=null,S.set(0,0,0),P=0,m=F,C=We}return}xe=xe||ne,Ce=Ce||Q,Xe=Xe||Ae,(ne!==v||xe!==T)&&(i.blendEquationSeparate(et[ne],et[xe]),v=ne,T=xe),(Q!==b||Ae!==_||Ce!==w||Xe!==y)&&(i.blendFuncSeparate(ae[Q],ae[Ae],ae[Ce],ae[Xe]),b=Q,_=Ae,w=Ce,y=Xe),(ot.equals(S)===!1||ge!==P)&&(i.blendColor(ot.r,ot.g,ot.b,ge),S.copy(ot),P=ge),m=F,C=!1}function _e(F,ne){F.side===Vn?He(i.CULL_FACE):me(i.CULL_FACE);let Q=F.side===ln;ne&&(Q=!Q),De(Q),F.blending===Ur&&F.transparent===!1?we(Gs):we(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Ae=F.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function ye(F){F!==Ff?(me(i.CULL_FACE),F!==H&&(F===Kh?i.cullFace(i.BACK):F===Bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),H=F}function Ke(F){F!==$&&(B&&i.lineWidth(F),$=F)}function ke(F,ne,Q){F?(me(i.POLYGON_OFFSET_FILL),(L!==ne||A!==Q)&&(L=ne,A=Q,o.getReversed()&&(ne=-ne,Q=-Q),i.polygonOffset(ne,Q))):He(i.POLYGON_OFFSET_FILL)}function st(F){F?me(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function lt(F){F===void 0&&(F=i.TEXTURE0+U-1),W!==F&&(i.activeTexture(F),W=F)}function rt(F,ne,Q){Q===void 0&&(W===null?Q=i.TEXTURE0+U-1:Q=W);let Ae=K[Q];Ae===void 0&&(Ae={type:void 0,texture:void 0},K[Q]=Ae),(Ae.type!==F||Ae.texture!==ne)&&(W!==Q&&(i.activeTexture(Q),W=Q),i.bindTexture(F,ne||ze[F]),Ae.type=F,Ae.texture=ne)}function G(){let F=K[W];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function Re(){try{i.compressedTexImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function Ue(){try{i.texSubImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function se(){try{i.texSubImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function Ze(){try{i.compressedTexSubImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function Se(){try{i.texStorage2D(...arguments)}catch(F){je("WebGLState:",F)}}function R(){try{i.texStorage3D(...arguments)}catch(F){je("WebGLState:",F)}}function E(){try{i.texImage2D(...arguments)}catch(F){je("WebGLState:",F)}}function X(){try{i.texImage3D(...arguments)}catch(F){je("WebGLState:",F)}}function ce(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function re(F,ne){u[F]!==ne&&(i.pixelStorei(F,ne),u[F]=ne)}function Te(F){Y.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Y.copy(F))}function Me(F){he.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),he.copy(F))}function j(F,ne){let Q=l.get(ne);Q===void 0&&(Q=new WeakMap,l.set(ne,Q));let Ae=Q.get(F);Ae===void 0&&(Ae=i.getUniformBlockIndex(ne,F.name),i.uniformBlockBinding(ne,Ae,Ae),Q.set(F,Ae))}function ie(F,ne,Q){let xe=l.get(ne).get(F);c[xe]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,xe,Q),c[xe]=Q)}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},W=null,K={},d={},c={},f=new WeakMap,g=[],x=null,p=!1,m=null,v=null,b=null,_=null,T=null,w=null,y=null,S=new Ye(0,0,0),P=0,C=!1,I=null,H=null,$=null,L=null,A=null,Y.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:He,bindFramebuffer:gt,drawBuffers:$e,useProgram:Je,setBlending:we,setMaterial:_e,setFlipSided:De,setCullFace:ye,setLineWidth:Ke,setPolygonOffset:ke,setScissorTest:st,activeTexture:lt,bindTexture:rt,unbindTexture:G,compressedTexImage2D:ve,compressedTexImage3D:Re,texImage2D:E,texImage3D:X,pixelStorei:re,getParameter:ce,updateUBOMapping:j,uniformBlockBinding:ie,texStorage2D:Se,texStorage3D:R,texSubImage2D:Ue,texSubImage3D:se,compressedTexSubImage2D:Ze,compressedTexSubImage3D:Pe,scissor:Te,viewport:Me,reset:Ee}}function sS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(R=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,E){return p?new OffscreenCanvas(R,E):vr("canvas")}function v(R,E,X){let ce=1,re=Se(R);if((re.width>X||re.height>X)&&(ce=X/Math.max(re.width,re.height)),ce<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Te=Math.floor(ce*re.width),Me=Math.floor(ce*re.height);d===void 0&&(d=m(Te,Me));let j=E?m(Te,Me):d;return j.width=Te,j.height=Me,j.getContext("2d").drawImage(R,0,0,Te,Me),qe("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Te+"x"+Me+")."),j}else return"data"in R&&qe("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function b(R){return R.generateMipmaps}function _(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,E,X,ce,re,Te=!1){if(R!==null){if(i[R]!==void 0)return i[R];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Me;ce&&(Me=e.get("EXT_texture_norm16"),Me||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=E;if(E===i.RED&&(X===i.FLOAT&&(j=i.R32F),X===i.HALF_FLOAT&&(j=i.R16F),X===i.UNSIGNED_BYTE&&(j=i.R8),X===i.UNSIGNED_SHORT&&Me&&(j=Me.R16_EXT),X===i.SHORT&&Me&&(j=Me.R16_SNORM_EXT)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.R8UI),X===i.UNSIGNED_SHORT&&(j=i.R16UI),X===i.UNSIGNED_INT&&(j=i.R32UI),X===i.BYTE&&(j=i.R8I),X===i.SHORT&&(j=i.R16I),X===i.INT&&(j=i.R32I)),E===i.RG&&(X===i.FLOAT&&(j=i.RG32F),X===i.HALF_FLOAT&&(j=i.RG16F),X===i.UNSIGNED_BYTE&&(j=i.RG8),X===i.UNSIGNED_SHORT&&Me&&(j=Me.RG16_EXT),X===i.SHORT&&Me&&(j=Me.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RG8UI),X===i.UNSIGNED_SHORT&&(j=i.RG16UI),X===i.UNSIGNED_INT&&(j=i.RG32UI),X===i.BYTE&&(j=i.RG8I),X===i.SHORT&&(j=i.RG16I),X===i.INT&&(j=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RGB8UI),X===i.UNSIGNED_SHORT&&(j=i.RGB16UI),X===i.UNSIGNED_INT&&(j=i.RGB32UI),X===i.BYTE&&(j=i.RGB8I),X===i.SHORT&&(j=i.RGB16I),X===i.INT&&(j=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),X===i.UNSIGNED_INT&&(j=i.RGBA32UI),X===i.BYTE&&(j=i.RGBA8I),X===i.SHORT&&(j=i.RGBA16I),X===i.INT&&(j=i.RGBA32I)),E===i.RGB&&(X===i.UNSIGNED_SHORT&&Me&&(j=Me.RGB16_EXT),X===i.SHORT&&Me&&(j=Me.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),E===i.RGBA){let ie=Te?go:ht.getTransfer(re);X===i.FLOAT&&(j=i.RGBA32F),X===i.HALF_FLOAT&&(j=i.RGBA16F),X===i.UNSIGNED_BYTE&&(j=ie===Et?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Me&&(j=Me.RGBA16_EXT),X===i.SHORT&&Me&&(j=Me.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(R,E){let X;return R?E===null||E===ei||E===qs?X=i.DEPTH24_STENCIL8:E===Bn?X=i.DEPTH32F_STENCIL8:E===Br&&(X=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ei||E===qs?X=i.DEPTH_COMPONENT24:E===Bn?X=i.DEPTH_COMPONENT32F:E===Br&&(X=i.DEPTH_COMPONENT16),X}function S(R,E){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==Nt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){let E=new WeakRef(R);n.get(R).__ref=E,g.add(E),x.register(R,E,E)}function C(R){let E=n.get(R).__ref;E!==void 0&&(g.delete(E),x.unregister(E))}function I(R){$(R.target)}function H(R){L(R.target)}function $(R){R.removeEventListener("dispose",I),C(R),U(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function L(R){R.removeEventListener("dispose",H),C(R),q(R)}function A(){for(let R of g){let E=R.deref();E!==void 0&&(E.isRenderTarget===!0?L(E):$(E))}g.clear(),u.clear()}function U(R){let E=n.get(R);if(E.__webglInit===void 0)return;let X=R.source,ce=f.get(X);if(ce){let re=ce[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&B(R),Object.keys(ce).length===0&&f.delete(X)}n.remove(R)}function B(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let X=R.source,ce=f.get(X);delete ce[E.__cacheKey],o.memory.textures--}function q(R){let E=n.get(R);E.__depthDisposeCallback&&E.__depthDisposeCallback();let X=R.depthTexture;if(X&&X.renderTarget===R&&$(X),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let Te=0;Te<E.__webglFramebuffer[re].length;Te++)i.deleteFramebuffer(E.__webglFramebuffer[re][Te]);else i.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)i.deleteFramebuffer(E.__webglFramebuffer[re]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ce=R.textures;for(let re=0,Te=ce.length;re<Te;re++){let Me=n.get(ce[re]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(ce[re])}n.remove(R)}let k=0;function W(){k=0}function K(){return k}function oe(R){k=R}function be(){let R=k;return R>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function Y(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.mipmapsAutoUpdate),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function he(R,E){let X=n.get(R);if(R.isVideoTexture&&Ze(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){let ce=R.image;if(ce===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(X,R,E);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function ue(R,E){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){_e(X,R,E);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function ze(R,E){let X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){_e(X,R,E);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function me(R,E){let X=n.get(R);if(R.version>0&&X.__version!==R.version){De(X,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}let He={[Hn]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[xr]:i.MIRRORED_REPEAT},gt={[Gt]:i.NEAREST,[Ll]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[Fr]:i.LINEAR_MIPMAP_NEAREST,[fn]:i.LINEAR_MIPMAP_LINEAR},$e={[up]:i.NEVER,[xu]:i.ALWAYS,[dp]:i.LESS,[gu]:i.LEQUAL,[fp]:i.EQUAL,[_u]:i.GEQUAL,[pp]:i.GREATER,[mp]:i.NOTEQUAL};function Je(R,E){if(E.type===Bn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Nt||E.magFilter===Fr||E.magFilter===Xs||E.magFilter===fn||E.minFilter===Nt||E.minFilter===Fr||E.minFilter===Xs||E.minFilter===fn)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,He[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,He[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,He[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,gt[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,gt[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,$e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Gt||E.minFilter!==Xs&&E.minFilter!==fn||E.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function et(R,E){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",I),P(E));let ce=E.source,re=f.get(ce);re===void 0&&(re={},f.set(ce,re));let Te=Y(E);if(Te!==R.__cacheKey){re[Te]===void 0&&(re[Te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),re[Te].usedTimes++;let Me=re[R.__cacheKey];Me!==void 0&&(re[R.__cacheKey].usedTimes--,Me.usedTimes===0&&B(E)),R.__cacheKey=Te,R.__webglTexture=re[Te].texture}return X}function ae(R,E,X){return Math.floor(Math.floor(R/X)/E)}function we(R,E,X,ce){let Te=R.updateRanges;if(Te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,X,ce,E.data);else{Te.sort((F,ne)=>F.start-ne.start);let Me=0;for(let F=1;F<Te.length;F++){let ne=Te[Me],Q=Te[F],Ae=ne.start+ne.count,xe=ae(Q.start,E.width,4),Ce=ae(ne.start,E.width,4);Q.start<=Ae+1&&xe===Ce&&ae(Q.start+Q.count-1,E.width,4)===xe?ne.count=Math.max(ne.count,Q.start+Q.count-ne.start):(++Me,Te[Me]=Q)}Te.length=Me+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let F=0,ne=Te.length;F<ne;F++){let Q=Te[F],Ae=Math.floor(Q.start/4),xe=Math.ceil(Q.count/4),Ce=Ae%E.width,Xe=Math.floor(Ae/E.width),ot=xe,ge=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(i.TEXTURE_2D,0,Ce,Xe,ot,ge,X,ce,E.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function _e(R,E,X){let ce=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=i.TEXTURE_3D);let re=et(R,E),Te=E.source;t.bindTexture(ce,R.__webglTexture,i.TEXTURE0+X);let Me=n.get(Te);if(Te.version!==Me.__version||re===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ge=ht.getPrimaries(ht.workingColorSpace),We=E.colorSpace===ni?null:ht.getPrimaries(E.colorSpace),tt=E.colorSpace===ni||ge===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ie=v(E.image,!1,s.maxTextureSize);ie=Pe(E,ie);let Ee=r.convert(E.format,E.colorSpace),F=r.convert(E.type),ne=w(E.internalFormat,Ee,F,E.normalized,E.colorSpace,E.isVideoTexture);Je(ce,E);let Q,Ae=E.mipmaps,xe=E.isVideoTexture!==!0,Ce=Me.__version===void 0||re===!0,Xe=Te.dataReady,ot=S(E,ie);if(E.isDepthTexture)ne=y(E.format===$i,E.type),Ce&&(xe?t.texStorage2D(i.TEXTURE_2D,1,ne,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,ne,ie.width,ie.height,0,Ee,F,null));else if(E.isDataTexture)if(Ae.length>0){xe&&Ce&&t.texStorage2D(i.TEXTURE_2D,ot,ne,Ae[0].width,Ae[0].height);for(let ge=0,We=Ae.length;ge<We;ge++)Q=Ae[ge],xe?Xe&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Q.width,Q.height,Ee,F,Q.data):t.texImage2D(i.TEXTURE_2D,ge,ne,Q.width,Q.height,0,Ee,F,Q.data);E.generateMipmaps=!1}else xe?(Ce&&t.texStorage2D(i.TEXTURE_2D,ot,ne,ie.width,ie.height),Xe&&we(E,ie,Ee,F)):t.texImage2D(i.TEXTURE_2D,0,ne,ie.width,ie.height,0,Ee,F,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){xe&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ne,Ae[0].width,Ae[0].height,ie.depth);for(let ge=0,We=Ae.length;ge<We;ge++)if(Q=Ae[ge],E.format!==pn)if(Ee!==null)if(xe){if(Xe)if(E.layerUpdates.size>0){let tt=Cu(Q.width,Q.height,E.format,E.type);for(let Oe of E.layerUpdates){let yt=Q.data.subarray(Oe*tt/Q.data.BYTES_PER_ELEMENT,(Oe+1)*tt/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,Oe,Q.width,Q.height,1,Ee,yt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Q.width,Q.height,ie.depth,Ee,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,ne,Q.width,Q.height,ie.depth,0,Q.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Q.width,Q.height,ie.depth,Ee,F,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,ne,Q.width,Q.height,ie.depth,0,Ee,F,Q.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{xe&&Ce&&t.texStorage2D(i.TEXTURE_2D,ot,ne,Ae[0].width,Ae[0].height);for(let ge=0,We=Ae.length;ge<We;ge++)Q=Ae[ge],E.format!==pn?Ee!==null?xe?Xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Q.width,Q.height,Ee,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,ne,Q.width,Q.height,0,Q.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Xe&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Q.width,Q.height,Ee,F,Q.data):t.texImage2D(i.TEXTURE_2D,ge,ne,Q.width,Q.height,0,Ee,F,Q.data)}else if(E.isDataArrayTexture)if(xe){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ne,ie.width,ie.height,ie.depth),Xe)if(E.layerUpdates.size>0){let ge=Cu(ie.width,ie.height,E.format,E.type);for(let We of E.layerUpdates){let tt=ie.data.subarray(We*ge/ie.data.BYTES_PER_ELEMENT,(We+1)*ge/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,We,ie.width,ie.height,1,Ee,F,tt)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ee,F,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,ie.width,ie.height,ie.depth,0,Ee,F,ie.data);else if(E.isData3DTexture)xe?(Ce&&t.texStorage3D(i.TEXTURE_3D,ot,ne,ie.width,ie.height,ie.depth),Xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ee,F,ie.data)):t.texImage3D(i.TEXTURE_3D,0,ne,ie.width,ie.height,ie.depth,0,Ee,F,ie.data);else if(E.isFramebufferTexture){if(Ce)if(xe)t.texStorage2D(i.TEXTURE_2D,ot,ne,ie.width,ie.height);else{let ge=ie.width,We=ie.height;for(let tt=0;tt<ot;tt++)t.texImage2D(i.TEXTURE_2D,tt,ne,ge,We,0,Ee,F,null),ge>>=1,We>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let ge=i.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ie.parentNode!==ge){ge.appendChild(ie),u.add(E),ge.onpaint=We=>{let tt=We.changedElements;for(let Oe of u)tt.includes(Oe.image)&&(Oe.needsUpdate=!0)},ge.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let tt=i.RGBA,Oe=i.RGBA,yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,tt,Oe,yt,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(xe&&Ce){let ge=Se(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ot,ne,ge.width,ge.height)}for(let ge=0,We=Ae.length;ge<We;ge++)Q=Ae[ge],xe?Xe&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ee,F,Q):t.texImage2D(i.TEXTURE_2D,ge,ne,Ee,F,Q);E.generateMipmaps=!1}else if(xe){if(Ce){let ge=Se(ie);t.texStorage2D(i.TEXTURE_2D,ot,ne,ge.width,ge.height)}Xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,F,ie)}else t.texImage2D(i.TEXTURE_2D,0,ne,Ee,F,ie);b(E)&&E.mipmapsAutoUpdate===!0&&_(ce),Me.__version=Te.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function De(R,E,X){if(E.image.length!==6)return;let ce=et(R,E),re=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);let Te=n.get(re);if(re.version!==Te.__version||ce===!0){t.activeTexture(i.TEXTURE0+X);let Me=ht.getPrimaries(ht.workingColorSpace),j=E.colorSpace===ni?null:ht.getPrimaries(E.colorSpace),ie=E.colorSpace===ni||Me===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,F=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let Oe=0;Oe<6;Oe++)!Ee&&!F?ne[Oe]=v(E.image[Oe],!0,s.maxCubemapSize):ne[Oe]=F?E.image[Oe].image:E.image[Oe],ne[Oe]=Pe(E,ne[Oe]);let Q=ne[0],Ae=r.convert(E.format,E.colorSpace),xe=r.convert(E.type),Ce=w(E.internalFormat,Ae,xe,E.normalized,E.colorSpace),Xe=E.isVideoTexture!==!0,ot=Te.__version===void 0||ce===!0,ge=re.dataReady,We=S(E,Q);Je(i.TEXTURE_CUBE_MAP,E);let tt;if(E.isDepthTexture){if(Ce=y(E.format===$i,E.type),ot)if(Xe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ce,Q.width,Q.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,Q.width,Q.height,0,Ae,xe,null)}else if(Ee){Xe&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Ce,Q.width,Q.height);for(let Oe=0;Oe<6;Oe++){tt=ne[Oe].mipmaps;for(let yt=0;yt<tt.length;yt++){let Ht=tt[yt];E.format!==pn?Ae!==null?Xe?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,yt,0,0,Ht.width,Ht.height,Ae,Ht.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,yt,Ce,Ht.width,Ht.height,0,Ht.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,yt,0,0,Ht.width,Ht.height,Ae,xe,Ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,yt,Ce,Ht.width,Ht.height,0,Ae,xe,Ht.data)}}}else{if(tt=E.mipmaps,Xe&&ot){tt.length>0&&We++;let Oe=Se(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Ce,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(F){Xe?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,ne[Oe].width,ne[Oe].height,Ae,xe,ne[Oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,ne[Oe].width,ne[Oe].height,0,Ae,xe,ne[Oe].data);for(let yt=0;yt<tt.length;yt++){let Xn=tt[yt].image[Oe].image;Xe?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,yt+1,0,0,Xn.width,Xn.height,Ae,xe,Xn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,yt+1,Ce,Xn.width,Xn.height,0,Ae,xe,Xn.data)}}else{Xe?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Ae,xe,ne[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,Ae,xe,ne[Oe]);for(let yt=0;yt<tt.length;yt++){let Ht=tt[yt];Xe?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,yt+1,0,0,Ae,xe,Ht.image[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,yt+1,Ce,Ae,xe,Ht.image[Oe])}}}b(E)&&E.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),Te.__version=re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ye(R,E,X,ce,re,Te){let Me=r.convert(X.format,X.colorSpace),j=r.convert(X.type),ie=w(X.internalFormat,Me,j,X.normalized,X.colorSpace),Ee=n.get(E),F=n.get(X);if(F.__renderTarget=E,!Ee.__hasExternalTextures){let ne=Math.max(1,E.width>>Te),Q=Math.max(1,E.height>>Te);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,Te,ie,ne,Q,E.depth,0,Me,j,null):t.texImage2D(re,Te,ie,ne,Q,0,Me,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,re,F.__webglTexture,0,Ue(E)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,re,F.__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(R,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){let ce=E.depthTexture,re=ce&&ce.isDepthTexture?ce.type:null,Te=y(E.stencilBuffer,re),Me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;se(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue(E),Te,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue(E),Te,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Te,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,R)}else{let ce=E.textures;for(let re=0;re<ce.length;re++){let Te=ce[re],Me=r.convert(Te.format,Te.colorSpace),j=r.convert(Te.type),ie=w(Te.internalFormat,Me,j,Te.normalized,Te.colorSpace);se(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue(E),ie,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue(E),ie,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ie,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(R,E,X){let ce=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(E.depthTexture);re.__renderTarget=E;let Te=ce?E.depthTexture.image[0]:E.depthTexture.image;(!re.__webglTexture||Te.width!==E.width||Te.height!==E.height)&&(Te.width=E.width,Te.height=E.height,E.depthTexture.needsUpdate=!0),ce?me(E.depthTexture,0):he(E.depthTexture,0);let Me=re.__webglTexture,j=Ue(E),ie=ce?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,Ee=E.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oi)se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,ie,Me,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,ie,Me,0);else if(E.depthTexture.format===$i)se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,ie,Me,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,ie,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(R){let E=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let ce=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){let re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",re)};ce.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=ce}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let ce=0;ce<6;ce++)ke(E.__webglFramebuffer[ce],R,ce);else R.texture.mipmaps.length>0?ke(E.__webglFramebuffer[0],R,0):ke(E.__webglFramebuffer,R,0);else if(X){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=i.createRenderbuffer(),Ke(E.__webglDepthbuffer[ce],R,!1);else{let re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Te)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ke(E.__webglDepthbuffer,R,!1);else{let re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,Te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,E,X){let ce=n.get(R);E!==void 0&&ye(ce.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&st(R)}function rt(R){let E=R.texture,X=n.get(R),ce=n.get(E);R.addEventListener("dispose",H),P(R);let re=R.textures,Te=R.isWebGLCubeRenderTarget===!0,Me=re.length>1;if(Me||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=E.version,o.memory.textures++),Te){X.__webglFramebuffer=[];for(let j=0;j<6;j++)if(E.mipmaps.length>0){X.__webglFramebuffer[j]=[];for(let ie=0;ie<E.mipmaps.length;ie++)X.__webglFramebuffer[j][ie]=i.createFramebuffer()}else X.__webglFramebuffer[j]=i.createFramebuffer()}else{if(E.mipmaps.length>0){X.__webglFramebuffer=[];for(let j=0;j<E.mipmaps.length;j++)X.__webglFramebuffer[j]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Me)for(let j=0,ie=re.length;j<ie;j++){let Ee=n.get(re[j]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&se(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let j=0;j<re.length;j++){let ie=re[j];X.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[j]);let Ee=r.convert(ie.format,ie.colorSpace),F=r.convert(ie.type),ne=w(ie.internalFormat,Ee,F,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),Q=Ue(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ne,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,X.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Te){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Je(i.TEXTURE_CUBE_MAP,E);for(let j=0;j<6;j++)if(E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)ye(X.__webglFramebuffer[j][ie],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else ye(X.__webglFramebuffer[j],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);b(E)?_(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let j=0,ie=re.length;j<ie;j++){let Ee=re[j],F=n.get(Ee),ne=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,F.__webglTexture),Je(ne,Ee),ye(X.__webglFramebuffer,R,Ee,i.COLOR_ATTACHMENT0+j,ne,0),b(Ee)&&_(ne)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,ce.__webglTexture),Je(j,E),E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)ye(X.__webglFramebuffer[ie],R,E,i.COLOR_ATTACHMENT0,j,ie);else ye(X.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,j,0);b(E)?_(j):E.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&st(R)}function G(R){let E=R.textures;for(let X=0,ce=E.length;X<ce;X++){let re=E[X];if(b(re)&&re.mipmapsAutoUpdate===!0){let Te=T(R),Me=n.get(re).__webglTexture;t.bindTexture(Te,Me),_(Te),t.unbindTexture()}}}let ve=[];function Re(R){if(R.samples>0){if(se(R)===!1){let E=R.textures,X=R.width,ce=R.height,re=i.COLOR_BUFFER_BIT,Te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(R),j=E.length>1;if(j)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);let F=n.get(E[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,X,ce,0,0,X,ce,re,i.NEAREST),c===!0&&(ve.length=0,ve.push(i.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ve.push(Te),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ee]);let F=n.get(E[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ue(R){return Math.min(s.maxSamples,R.samples)}function se(R){let E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ze(R){let E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function Pe(R,E){let X=R.colorSpace,ce=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==on&&X!==ni&&(ht.getTransfer(X)===Et?(ce!==pn||re!==Rn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",X)),E}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=be,this.resetTextureUnits=W,this.getTextureUnits=K,this.setTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=ue,this.setTexture3D=ze,this.setTextureCube=me,this.rebindTextures=lt,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=se,this.dispose=A}function rS(i,e){function t(n,s=ni){let r,o=ht.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cu)return i.BYTE;if(n===hu)return i.SHORT;if(n===Br)return i.UNSIGNED_SHORT;if(n===Nl)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===pu)return i.RGB;if(n===pn)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===Fl)return i.RED_INTEGER;if(n===gs)return i.RG;if(n===Bl)return i.RG_INTEGER;if(n===kl)return i.RGBA_INTEGER;if(n===Qo||n===ea||n===ta||n===na)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===Hl||n===Gl||n===Vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===ia||n===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yl)return r.COMPRESSED_R11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===Zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jl)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ec)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ic)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hc||n===uc||n===dc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===hc)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===pc||n===sa||n===mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var oS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aS=`
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

}`,Bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Co(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mi({vertexShader:oS,fragmentShader:aS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ku=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new Bu,m={},v=t.getContextAttributes(),b=null,_=null,T=[],w=[],y=new le,S=null,P=null,C=new $t;C.viewport=new wt;let I=new $t;I.viewport=new wt;let H=[C,I],$=new Rl,L=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let he=T[Y];return he===void 0&&(he=new Er,T[Y]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Y){let he=T[Y];return he===void 0&&(he=new Er,T[Y]=he),he.getGripSpace()},this.getHand=function(Y){let he=T[Y];return he===void 0&&(he=new Er,T[Y]=he),he.getHandSpace()};function U(Y){let he=w.indexOf(Y.inputSource);if(he===-1)return;let ue=T[he];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,l||o),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let Y=0;Y<T.length;Y++){let he=w[Y];he!==null&&(w[Y]=null,T[Y].disconnect(he))}L=null,A=null,p.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(b),f=null,d=null,u=null,s=null,_=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),P!==null){let Y=P.camera;Y.fov=P.fov,Y.zoom=P.zoom,Y.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ze=null,me=null;v.depth&&(me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?$i:Oi,ze=v.stencil?qs:ei);let He={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Un(d.textureWidth,d.textureHeight,{format:pn,type:Rn,depthTexture:new ki(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Un(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(Y){for(let he=0;he<Y.removed.length;he++){let ue=Y.removed[he],ze=w.indexOf(ue);ze>=0&&(w[ze]=null,T[ze].disconnect(ue))}for(let he=0;he<Y.added.length;he++){let ue=Y.added[he],ze=w.indexOf(ue);if(ze===-1){for(let He=0;He<T.length;He++)if(He>=w.length){w.push(ue),ze=He;break}else if(w[He]===null){w[He]=ue,ze=He;break}if(ze===-1)break}let me=T[ze];me&&me.connect(ue)}}function k(Y,he){he===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(he.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let he=Y.near,ue=Y.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(ue=p.depthFar)),$.near=I.near=C.near=he,$.far=I.far=C.far=ue,(L!==$.near||A!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),L=$.near,A=$.far),$.layers.mask=Y.layers.mask|6,C.layers.mask=$.layers.mask&-5,I.layers.mask=$.layers.mask&-3;let ze=Y.parent,me=$.cameras;k($,ze);for(let He=0;He<me.length;He++)k(me[He],ze);$.projectionMatrix.copy(C.projectionMatrix),$.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&Y.isPerspectiveCamera&&(P={camera:Y,fov:Y.fov,zoom:Y.zoom}),W(Y,$,ze)};function W(Y,he,ue){ue===null?Y.matrix.copy(he.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(he.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(he.projectionMatrix),Y.projectionMatrixInverse.copy(he.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ls*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh($)},this.getCameraTexture=function(Y){return m[Y]};let K=null;function oe(Y,he){if(h=he.getViewerPose(l||o),g=he,h!==null){let ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ze=!1;ue.length!==$.cameras.length&&($.cameras.length=0,ze=!0);for(let $e=0;$e<ue.length;$e++){let Je=ue[$e],et=null;if(f!==null)et=f.getViewport(Je);else{let we=u.getViewSubImage(d,Je);et=we.viewport,$e===0&&(e.setRenderTargetTextures(_,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(_))}let ae=H[$e];ae===void 0&&(ae=new $t,ae.layers.enable($e),ae.viewport=new wt,H[$e]=ae),ae.matrix.fromArray(Je.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Je.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(et.x,et.y,et.width,et.height),$e===0&&($.matrix.copy(ae.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ze===!0&&$.cameras.push(ae)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let $e=u.getDepthInformation(ue[0]);$e&&$e.isValid&&$e.texture&&p.init($e,s.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let $e=0;$e<ue.length;$e++){let Je=ue[$e].camera;if(Je){let et=m[Je];et||(et=new Co,m[Je]=et);let ae=u.getCameraImage(Je);et.sourceTexture=ae}}}}for(let ue=0;ue<T.length;ue++){let ze=w[ue],me=T[ue];ze!==null&&me!==void 0&&me.update(ze,he,l||o)}K&&K(Y,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}let be=new Zp;be.setAnimationLoop(oe),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}},lS=new Qe,rm=new it;rm.set(-1,0,0,0,1,0,0,0,1);function cS(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Tu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,b,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ln&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ln&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),b=v.envMap,_=v.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(lS.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(rm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hS(i,e,t,n){let s={},r={};function o(v,b){let _=b.program;n.uniformBlockBinding(v,_,s[v.id])}function a(v,b){let _=s[v.id];_===void 0&&(g(v),_=c(v),s[v.id]=_,v.addEventListener("dispose",p));let T=b.program;n.updateUBOMapping(v,T);let w=e.render.frame;r[v.id]!==w&&(l(v),r[v.id]=w)}function c(v){let b=i.createBuffer(),_=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,_,T),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function l(v){let b=s[v.id],_=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,y=_.length;w<y;w++){let S=_[w];if(Array.isArray(S))for(let P=0,C=S.length;P<C;P++)h(S[P],w,P,T);else h(S,w,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,b,_,T){if(d(v,b,_,T)===!0){let w=v.__offset,y=v.value;if(Array.isArray(y)){let S=0;for(let P=0;P<y.length;P++){let C=y[P],I=x(C,!0);u(C,v.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,v.__data)}}function u(v,b,_){typeof v=="number"||typeof v=="boolean"?b[_]=v:v.isMatrix3?(b[_]=v.elements[0],b[_+1]=v.elements[1],b[_+2]=v.elements[2],b[_+3]=0,b[_+4]=v.elements[3],b[_+5]=v.elements[4],b[_+6]=v.elements[5],b[_+7]=0,b[_+8]=v.elements[6],b[_+9]=v.elements[7],b[_+10]=v.elements[8],b[_+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-_),_):v.toArray(b,_)}function d(v,b,_,T){let w=v.value,y=b+"_"+_;if(Array.isArray(w)){T[y]===void 0&&(T[y]=[]);let S=T[y],P=!1;for(let C=0;C<w.length;C++)f(w[C],S,C)===!0&&(P=!0);return P}return f(w,T,y)}function f(v,b,_){if(b[_]===void 0)return typeof v=="number"||typeof v=="boolean"?b[_]=v:ArrayBuffer.isView(v)?b[_]=v.slice():b[_]=v.clone(),!0;{let T=b[_];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return b[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function g(v){let b=v.uniforms,_=0,T=16;for(let y=0,S=b.length;y<S;y++){let P=Array.isArray(b[y])?b[y]:[b[y]];for(let C=0,I=P.length;C<I;C++){let H=P[C],$=Array.isArray(H.value)?H.value:[H.value],L=Array.isArray(b[y])||Array.isArray(H.value),A=_;for(let B=0,q=$.length;B<q;B++){let k=$[B],W=x(k,L),K=_%T,oe=K%W.boundary,be=K+oe;_+=oe,be!==0&&T-be<W.storage&&(_+=T-be),B===0&&(A=_),_+=W.storage}let U=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new U((_-A)/Float32Array.BYTES_PER_ELEMENT),H.__offset=A}}let w=_%T;return w>0&&(_+=T-w),v.__size=_,v.__cache={},this}function x(v,b){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function p(v){let b=v.target;b.removeEventListener("dispose",p),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:m}}var uS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function dS(){return yi===null&&(yi=new fi(uS,16,16,gs,ti),yi.name="DFG_LUT",yi.minFilter=Nt,yi.magFilter=Nt,yi.wrapS=En,yi.wrapT=En,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var yc=class{constructor(e={}){let{canvas:t=gp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,p=new Set([kl,Bl,Fl]),m=new Set([Rn,ei,Br,qs,Dl,Ul]),v=new Uint32Array(4),b=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},T=null,w=null,y=[],S=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,H=null,$=null,L=null,A=null;this._outputColorSpace=Tt;let U=0,B=0,q=null,k=-1,W=null,K=new wt,oe=new wt,be=null,Y=new Ye(0),he=0,ue=t.width,ze=t.height,me=1,He=null,gt=null,$e=new wt(0,0,ue,ze),Je=new wt(0,0,ue,ze),et=!1,ae=new ds,we=new hl,_e=!1,De=!1,ye=new Qe,Ke=new D,ke=new wt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function rt(){return q===null?me:1}let G=n;function ve(M,N){return t.getContext(M,N)}let Re,Ue,se,Ze,Pe,Se,R,E,X,ce,re,Te,Me,j,ie,Ee,F,ne,Q,Ae,xe,Ce,Xe;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),G===null){let N="webgl2";if(G=ve(N,M),G===null)throw ve(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(M){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),je("WebGLRenderer: "+M.message),M}function ot(){Re=new by(G),Re.init(),xe=new rS(G,Re),Ue=new dy(G,Re,e,xe),se=new iS(G,Re),Ue.reversedDepthBuffer&&d&&se.buffers.depth.setReversed(!0),$=G.createFramebuffer(),L=G.createFramebuffer(),A=G.createFramebuffer(),Ze=new Ty(G),Pe=new Vv,Se=new sS(G,Re,se,Pe,Ue,xe,Ze),R=new My(C),E=new R0(G),Ce=new hy(G,E),X=new Ey(G,E,Ze,Ce),ce=new Ry(G,X,E,Ce,Ze),ne=new Ay(G,Ue,Se),ie=new fy(Pe),re=new Gv(C,R,Re,Ue,Ce,ie),Te=new cS(C,Pe),Me=new Xv,j=new Jv(Re),F=new cy(C,R,se,ce,g,c),Ee=new nS(C,ce,Ue),Xe=new hS(G,Ze,Ue,se),Q=new uy(G,Re,Ze),Ae=new wy(G,Re,Ze),Ze.programs=re.programs,C.capabilities=Ue,C.extensions=Re,C.properties=Pe,C.renderLists=Me,C.shadowMap=Ee,C.state=se,C.info=Ze}x!==Rn&&(P=new Iy(x,t.width,t.height,a,s,r));let ge=new ku(C,G);this.xr=ge,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let M=Re.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Re.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(M){M!==void 0&&(me=M,this.setSize(ue,ze,!1))},this.getSize=function(M){return M.set(ue,ze)},this.setSize=function(M,N,V=!0){if(ge.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=M,ze=N,t.width=Math.floor(M*me),t.height=Math.floor(N*me),V===!0&&(t.style.width=M+"px",t.style.height=N+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(ue*me,ze*me).floor()},this.setDrawingBufferSize=function(M,N,V){ue=M,ze=N,me=V,t.width=Math.floor(M*V),t.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(x===Rn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy($e)},this.setViewport=function(M,N,V,z){M.isVector4?$e.set(M.x,M.y,M.z,M.w):$e.set(M,N,V,z),se.viewport(K.copy($e).multiplyScalar(rt()).round())},this.getScissor=function(M){return M.copy(Je)},this.setScissor=function(M,N,V,z){M.isVector4?Je.set(M.x,M.y,M.z,M.w):Je.set(M,N,V,z),se.scissor(oe.copy(Je).multiplyScalar(rt()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(M){se.setScissorTest(et=M)},this.setOpaqueSort=function(M){He=M},this.setTransparentSort=function(M){gt=M},this.getClearColor=function(M){return M.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,V=!0){let z=0;if(M){let O=!1;if(q!==null){let ee=q.texture.format;O=p.has(ee)}if(O){let ee=q.texture.type,fe=m.has(ee),pe=F.getClearColor(),Ie=F.getClearAlpha(),Be=pe.r,nt=pe.g,ct=pe.b;fe?(v[0]=Be,v[1]=nt,v[2]=ct,v[3]=Ie,G.clearBufferuiv(G.COLOR,0,v)):(b[0]=Be,b[1]=nt,b[2]=ct,b[3]=Ie,G.clearBufferiv(G.COLOR,0,b))}else z|=G.COLOR_BUFFER_BIT}N&&(z|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(z|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&G.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),F.dispose(),Me.dispose(),j.dispose(),Se.dispose(),Pe.dispose(),R.dispose(),ce.dispose(),X.dispose(),Ce.dispose(),Xe.dispose(),re.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ai),ge.removeEventListener("sessionend",Kr),li.stop()};function We(M){M.preventDefault(),_o("WebGLRenderer: Context Lost."),I=!0}function tt(){_o("WebGLRenderer: Context Restored."),I=!1;let M=Ze.autoReset,N=Ee.enabled,V=Ee.autoUpdate,z=Ee.needsUpdate,O=Ee.type;ot(),Ze.autoReset=M,Ee.enabled=N,Ee.autoUpdate=V,Ee.needsUpdate=z,Ee.type=O}function Oe(M){je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function yt(M){let N=M.target;N.removeEventListener("dispose",yt),Ht(N)}function Ht(M){Xn(M),Pe.remove(M)}function Xn(M){let N=Pe.get(M).programs;N!==void 0&&(N.forEach(function(V){re.releaseProgram(V)}),M.isShaderMaterial&&re.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,z,O,ee){N===null&&(N=st);let fe=O.isMesh&&O.matrixWorld.determinantAffine()<0,pe=J(M,N,V,z,O);se.setMaterial(z,fe);let Ie=V.index,Be=1;if(z.wireframe===!0){if(Ie=X.getWireframeAttribute(V),Ie===void 0)return;Be=2}let nt=V.drawRange,ct=V.attributes.position,Ge=nt.start*Be,mt=(nt.start+nt.count)*Be;ee!==null&&(Ge=Math.max(Ge,ee.start*Be),mt=Math.min(mt,(ee.start+ee.count)*Be)),Ie!==null?(Ge=Math.max(Ge,0),mt=Math.min(mt,Ie.count)):ct!=null&&(Ge=Math.max(Ge,0),mt=Math.min(mt,ct.count));let Vt=mt-Ge;if(Vt<0||Vt===1/0)return;Ce.setup(O,z,pe,V,Ie);let It,Rt=Q;if(Ie!==null&&(It=E.get(Ie),Rt=Ae,Rt.setIndex(It)),O.isMesh)z.wireframe===!0?(se.setLineWidth(z.wireframeLinewidth*rt()),Rt.setMode(G.LINES)):Rt.setMode(G.TRIANGLES);else if(O.isLine){let cn=z.linewidth;cn===void 0&&(cn=1),se.setLineWidth(cn*rt()),O.isLineSegments?Rt.setMode(G.LINES):O.isLineLoop?Rt.setMode(G.LINE_LOOP):Rt.setMode(G.LINE_STRIP)}else O.isPoints?Rt.setMode(G.POINTS):O.isSprite&&Rt.setMode(G.TRIANGLES);if(O.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))Rt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let cn=O._multiDrawStarts,Ve=O._multiDrawCounts,_n=O._multiDrawCount,Mt=Ie?E.get(Ie).bytesPerElement:1,Ss=Pe.get(z).currentProgram.getUniforms();for(let hn=0;hn<_n;hn++)Ss.setValue(G,"_gl_DrawID",hn),Rt.render(cn[hn]/Mt,Ve[hn])}else if(O.isInstancedMesh)Rt.renderInstances(Ge,Vt,O.count);else if(V.isInstancedBufferGeometry){let cn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ve=Math.min(V.instanceCount,cn);Rt.renderInstances(Ge,Vt,Ve)}else Rt.render(Ge,Vt)};function Zr(M,N,V,z){H!==null&&M.isNodeMaterial&&H.setObject(z,M),_e===!0&&ie.setState(M,V,!1),M.transparent===!0&&M.side===Vn&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,vs(M,N,z),M.side=_i,M.needsUpdate=!0,vs(M,N,z),M.side=Vn):vs(M,N,z)}this.compile=function(M,N,V=null){V===null&&(V=M),H!==null&&H.renderStart(M,N,V),w=j.get(V),w.init(N),S.push(w),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),M!==V&&M.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(w.pushLight(O),O.castShadow&&w.pushShadow(O))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),De=this.localClippingEnabled,_e=ie.init(this.clippingPlanes,De),_e===!0&&ie.setGlobalState(this.clippingPlanes,N),H!==null&&Ee.render(w.state.shadowsArray,V,N);let z=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ee=O.material;if(ee)if(Array.isArray(ee))for(let fe=0;fe<ee.length;fe++){let pe=ee[fe];Zr(pe,V,N,O),z.add(pe)}else Zr(ee,V,N,O),z.add(ee)}),w=S.pop(),H!==null&&H.renderEnd(),z},this.compileAsync=function(M,N,V=null){let z=this.compile(M,N,V);return new Promise(O=>{function ee(){if(z.forEach(function(fe){let Ie=Pe.get(fe).currentProgram;(Ie===void 0||Ie.isReady())&&z.delete(fe)}),z.size===0){O(M);return}setTimeout(ee,10)}Re.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ks=null;function _a(M){Ks&&Ks(M)}function ai(){li.stop()}function Kr(){li.start()}let li=new Zp;li.setAnimationLoop(_a),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(M){Ks=M,ge.setAnimationLoop(M),M===null?li.stop():li.start()},ge.addEventListener("sessionstart",ai),ge.addEventListener("sessionend",Kr),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;H!==null&&H.renderStart(M,N);let V=ge.enabled===!0&&ge.isPresenting===!0,z=P!==null&&(q===null||V)&&P.begin(C,q);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(N),N=ge.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,N,q),w=j.get(M,S.length),w.init(N),w.state.textureUnits=Se.getTextureUnits(),S.push(w),ye.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?we.setFromArrayCamera(N):ae.setFromProjectionMatrix(ye,zn,N.reversedDepth),De=this.localClippingEnabled,_e=ie.init(this.clippingPlanes,De),T=Me.get(M,y.length),T.init(),y.push(T),this.info.render.frame++,ge.enabled===!0&&ge.isPresenting===!0){let fe=C.xr.getDepthSensingMesh();fe!==null&&Js(fe,N,-1/0,C.sortObjects)}Js(M,N,0,C.sortObjects),T.finish(),H!==null&&H.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(He,gt),lt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,lt&&F.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),_e===!0&&ie.beginShadows();let O=w.state.shadowsArray;if(Ee.render(O,M,N),_e===!0&&ie.endShadows(),(z&&P.hasRenderPass())===!1){let fe=T.opaque,pe=T.transmissive;if(w.setupLights(),N.isArrayCamera){let Ie=N.cameras;if(pe.length>0)for(let Be=0,nt=Ie.length;Be<nt;Be++){let ct=Ie[Be];jr(fe,pe,M,ct)}lt&&F.render(M);for(let Be=0,nt=Ie.length;Be<nt;Be++){let ct=Ie[Be];Jr(T,M,ct,ct.viewport)}}else pe.length>0&&jr(fe,pe,M,N),lt&&F.render(M),Jr(T,M,N)}q!==null&&B===0&&(Se.updateMultisampleRenderTarget(q),Se.updateRenderTargetMipmap(q)),z&&P.end(C),M.isScene===!0&&M.onAfterRender(C,M,N),Ce.resetDefaultState(),k=-1,W=null,S.pop(),S.length>0?(w=S[S.length-1],Se.setTextureUnits(w.state.textureUnits),_e===!0&&ie.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?T=y[y.length-1]:T=null,H!==null&&H.renderEnd()};function Js(M,N,V,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){let fe=N.isArrayCamera?we:ae;if(!M.frustumCulled||M.intersectsFrustum(fe)){z&&ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ye);let pe=ce.update(M),Ie=M.material;Ie.visible&&T.push(M,pe,Ie,V,ke.z,null,N)}}else if(M.isMesh||M.isLine||M.isPoints){let fe=N.isArrayCamera?we:ae;if(!M.frustumCulled||M.intersectsFrustum(fe)){let pe=ce.update(M),Ie=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ke.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ke.copy(pe.boundingSphere.center)),ke.applyMatrix4(M.matrixWorld).applyMatrix4(ye)),Array.isArray(Ie)){let Be=pe.groups;for(let nt=0,ct=Be.length;nt<ct;nt++){let Ge=Be[nt],mt=Ie[Ge.materialIndex];mt&&mt.visible&&T.push(M,pe,mt,V,ke.z,Ge,N)}}else Ie.visible&&T.push(M,pe,Ie,V,ke.z,null,N)}}}let ee=M.children;for(let fe=0,pe=ee.length;fe<pe;fe++)Js(ee[fe],N,V,z)}function Jr(M,N,V,z){let{opaque:O,transmissive:ee,transparent:fe}=M;w.setupLightsView(V),_e===!0&&ie.setGlobalState(C.clippingPlanes,V),z&&se.viewport(K.copy(z)),O.length>0&&wi(O,N,V),ee.length>0&&wi(ee,N,V),fe.length>0&&wi(fe,N,V),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function jr(M,N,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Ge=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new Un(1,1,{generateMipmaps:!0,type:Ge?ti:Rn,minFilter:fn,samples:Math.max(4,Ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let ee=w.state.transmissionRenderTarget[z.id],fe=z.viewport||K;ee.setSize(fe.z*C.transmissionResolutionScale,fe.w*C.transmissionResolutionScale);let pe=C.getRenderTarget(),Ie=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(ee),C.getClearColor(Y),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),lt&&F.render(V);let nt=C.toneMapping;C.toneMapping=xi;let ct=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),_e===!0&&ie.setGlobalState(C.clippingPlanes,z),wi(M,V,z),Se.updateMultisampleRenderTarget(ee),Se.updateRenderTargetMipmap(ee),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let mt=0,Vt=N.length;mt<Vt;mt++){let It=N[mt],{object:Rt,geometry:cn,material:Ve,group:_n}=It;if(Ve.side===Vn&&Rt.layers.test(z.layers)){let Mt=Ve.side;Ve.side=ln,Ve.needsUpdate=!0,ys(Rt,V,z,cn,Ve,_n),Ve.side=Mt,Ve.needsUpdate=!0,Ge=!0}}Ge===!0&&(Se.updateMultisampleRenderTarget(ee),Se.updateRenderTargetMipmap(ee))}C.setRenderTarget(pe,Ie,Be),C.setClearColor(Y,he),ct!==void 0&&(z.viewport=ct),C.toneMapping=nt}function wi(M,N,V){let z=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ee=M.length;O<ee;O++){let fe=M[O],{object:pe,geometry:Ie,group:Be}=fe,nt=fe.material;nt.allowOverride===!0&&z!==null&&(nt=z),pe.layers.test(V.layers)&&ys(pe,N,V,Ie,nt,Be)}}function ys(M,N,V,z,O,ee){H!==null&&O.isNodeMaterial&&H.setObject(M,O),M.onBeforeRender(C,N,V,z,O,ee),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(C,N,V,z,M,ee),O.transparent===!0&&O.side===Vn&&O.forceSinglePass===!1?(O.side=ln,O.needsUpdate=!0,C.renderBufferDirect(V,N,z,O,M,ee),O.side=_i,O.needsUpdate=!0,C.renderBufferDirect(V,N,z,O,M,ee),O.side=Vn):C.renderBufferDirect(V,N,z,O,M,ee),M.onAfterRender(C,N,V,z,O,ee)}function Pn(M){let N=0;for(let V of M)V.texture!==null&&N++;return N}function vs(M,N,V){N.isScene!==!0&&(N=st);let z=Pe.get(M),O=w.state.lights,ee=w.state.shadowsArray,fe=O.state.version,pe=re.getParameters(M,O.state,ee,N,V,w.state.lightProbeGridArray),Ie=re.getProgramCacheKey(pe),Be=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let nt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=R.get(M.envMap||z.environment,nt),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",yt),Be=new Map,z.programs=Be,z.programVariants=new Map);let ct=Be.get(Ie);if(ct!==void 0){if(z.currentProgram===ct&&z.lightsStateVersion===fe)return xa(M,pe),ct}else pe.uniforms=re.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,V,pe),M.onBeforeCompile(pe,C),ct=re.acquireProgram(pe,Ie),Be.set(Ie,ct),z.uniforms=pe.uniforms;let Ge=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ge.clippingPlanes=ie.uniform),xa(M,pe),z.needsLights=Ne(M),z.lightsStateVersion=fe,z.needsLights&&(Ge.ambientLightColor.value=O.state.ambient,Ge.lightProbe.value=O.state.probe,Ge.sunLights.value=O.state.sun,Ge.sunLightShadows.value=O.state.sunShadow,Ge.directionalLights.value=O.state.directional,Ge.directionalLightShadows.value=O.state.directionalShadow,Ge.spotLights.value=O.state.spot,Ge.spotLightShadows.value=O.state.spotShadow,Ge.rectAreaLights.value=O.state.rectArea,Ge.ltc_1.value=O.state.rectAreaLTC1,Ge.ltc_2.value=O.state.rectAreaLTC2,Ge.pointLights.value=O.state.point,Ge.pointLightShadows.value=O.state.pointShadow,Ge.hemisphereLights.value=O.state.hemi,Ge.sunShadowMatrix.value=O.state.sunShadowMatrix,Ge.sunShadowCascade.value=O.state.sunShadowCascade,Ge.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ge.spotLightMatrix.value=O.state.spotLightMatrix,Ge.spotLightMap.value=O.state.spotLightMap,Ge.pointShadowMatrix.value=O.state.pointShadowMatrix),z.numLightProbeGrids=Pn(w.state.lightProbeGridArray),z.currentProgram=ct,z.uniformsList=null,ct}function Vc(M,N,V,z,O){let ee=Pe.get(M),fe=ee.currentProgram.id+","+z+","+O,pe=ee.programVariants.get(fe);return pe===void 0?(pe=vs(M,N,V),ee.programVariants.set(fe,pe)):(ee.currentProgram=pe,ee.uniformsList=null,ee.outputColorSpace=z,ee.toneMapping=O),pe}function Ti(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=zr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function xa(M,N){let V=Pe.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function J(M,N,V,z,O){N.isScene!==!0&&(N=st),Se.resetTextureUnits();let ee=N.fog,fe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,pe=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ht.workingColorSpace,Ie=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Be=R.get(z.envMap||fe,Ie),nt=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ct=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ge=!!V.morphAttributes.position,mt=!!V.morphAttributes.normal,Vt=!!V.morphAttributes.color,It=xi;z.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(It=C.toneMapping);let Rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,cn=Rt!==void 0?Rt.length:0,Ve=Pe.get(z),_n=w.state.lights;if(_e===!0&&(De===!0||M!==W)){let Dt=M===W&&z.id===k;ie.setState(z,M,Dt)}let Mt=!1,Ss=!1;z.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==_n.state.version||O.isBatchedMesh&&Ve.batching===!1||!O.isBatchedMesh&&Ve.batching===!0||O.isBatchedMesh&&Ve.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Ve.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Ve.instancing===!1||!O.isInstancedMesh&&Ve.instancing===!0||O.isSkinnedMesh&&Ve.skinning===!1||!O.isSkinnedMesh&&Ve.skinning===!0||O.isInstancedMesh&&Ve.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ve.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ve.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ve.instancingMorph===!1&&O.morphTexture!==null||Ve.envMap!==Be||z.fog===!0&&Ve.fog!==ee||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ie.numPlanes||Ve.numIntersection!==ie.numIntersection)||Ve.vertexAlphas!==nt||Ve.vertexTangents!==ct||Ve.morphTargets!==Ge||Ve.morphNormals!==mt||Ve.morphColors!==Vt||Ve.morphTargetsCount!==cn||Ve.numLightProbeGrids!==Pn(w.state.lightProbeGridArray)?Mt=!0:(Ve.outputColorSpace!==pe||Ve.toneMapping!==It)&&(Ss=!0):(Mt=!0,Ve.__version=z.version);let hn=Ve.currentProgram;(Mt===!0||Ss===!0)&&(hn=Ss===!0?Vc(z,N,O,pe,It):vs(z,N,O),H&&z.isNodeMaterial&&H.onUpdateProgram(z,hn,Ve));let ya=!1,ji=!1,Ms=!1,_t=hn.getUniforms(),rn=Ve.uniforms;if(se.useProgram(hn.program)&&(ya=!0,ji=!0,Ms=!0),z.id!==k&&(k=z.id,ji=!0),ya||W!==M){se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_t.setValue(G,"projectionMatrix",M.projectionMatrix),_t.setValue(G,"viewMatrix",M.matrixWorldInverse);let Qt=_t.map.cameraPosition;Qt!==void 0&&Qt.setValue(G,Ke.setFromMatrixPosition(M.matrixWorld)),Ue.logarithmicDepthBuffer&&_t.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),W!==M&&(W=M,ji=!0,Ms=!0)}if(Ve.needsLights&&(_n.state.sunShadowMap.length>0&&_t.setValue(G,"sunShadowMap",_n.state.sunShadowMap,Se),_n.state.directionalShadowMap.length>0&&_t.setValue(G,"directionalShadowMap",_n.state.directionalShadowMap,Se),_n.state.spotShadowMap.length>0&&_t.setValue(G,"spotShadowMap",_n.state.spotShadowMap,Se),_n.state.pointShadowMap.length>0&&_t.setValue(G,"pointShadowMap",_n.state.pointShadowMap,Se)),O.isSkinnedMesh){_t.setOptional(G,O,"bindMatrix"),_t.setOptional(G,O,"bindMatrixInverse");let Dt=O.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),_t.setValue(G,"boneTexture",Dt.boneTexture,Se))}O.isBatchedMesh&&(_t.setOptional(G,O,"batchingTexture"),_t.setValue(G,"batchingTexture",O._matricesTexture,Se),_t.setOptional(G,O,"batchingIdTexture"),_t.setValue(G,"batchingIdTexture",O._indirectTexture,Se),_t.setOptional(G,O,"batchingColorTexture"),O._colorsTexture!==null&&_t.setValue(G,"batchingColorTexture",O._colorsTexture,Se));let qn=V.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&ne.update(O,V,hn),(ji||Ve.receiveShadow!==O.receiveShadow)&&(Ve.receiveShadow=O.receiveShadow,_t.setValue(G,"receiveShadow",O.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(rn.envMapIntensity.value=N.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=dS()),ji){if(_t.setValue(G,"toneMappingExposure",C.toneMappingExposure),Ve.needsLights&&de(rn,Ms),ee&&z.fog===!0&&Te.refreshFogUniforms(rn,ee),Te.refreshMaterialUniforms(rn,z,me,ze,w.state.transmissionRenderTarget[M.id]),Ve.needsLights&&Ve.numLightProbeGrids>0){let Dt=_,Qt=0;for(let Ai of w.state.lightProbeGridArray)Ai.texture!==null&&(Dt.textures[Qt]=Ai.texture,Dt.min[Qt]=Ai.boundingBox.min,Dt.max[Qt]=Ai.boundingBox.max,Dt.resolution[Qt]=Ai.resolution,Qt++);for(let Ai in Dt)Dt[Ai].length=Qt;rn.probesSH.value=Dt.textures,rn.probesMin.value=Dt.min,rn.probesMax.value=Dt.max,rn.probesResolution.value=Dt.resolution}zr.upload(G,Ti(Ve),rn,Se)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(zr.upload(G,Ti(Ve),rn,Se),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(G,"center",O.center),_t.setValue(G,"modelViewMatrix",O.modelViewMatrix),_t.setValue(G,"normalMatrix",O.normalMatrix),_t.setValue(G,"modelMatrix",O.matrixWorld),z.uniformsGroups!==void 0){let Dt=z.uniformsGroups;for(let Qt=0,Ai=Dt.length;Qt<Ai;Qt++){let Ld=Dt[Qt];Xe.update(Ld,hn),Xe.bind(Ld,hn)}}return hn}function de(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Ne(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(M,N,V){let z=Pe.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Pe.get(M.texture).__webglTexture=N,Pe.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let V=Pe.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,V=0){q=M,U=N,B=V;let z=null,O=!1,ee=!1;if(M){let pe=Pe.get(M);if(pe.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(G.FRAMEBUFFER,pe.__webglFramebuffer),K.copy(M.viewport),oe.copy(M.scissor),be=M.scissorTest,se.viewport(K),se.scissor(oe),se.setScissorTest(be),k=-1;return}else if(pe.__webglFramebuffer===void 0)Se.setupRenderTarget(M);else if(pe.__hasExternalTextures)Se.rebindTextures(M,Pe.get(M.texture).__webglTexture,Pe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let nt=M.depthTexture;if(pe.__boundDepthTexture!==nt){if(nt!==null&&Pe.has(nt)&&(M.width!==nt.image.width||M.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(M)}}let Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ee=!0);let Be=Pe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?z=Be[N][V]:z=Be[N],O=!0):M.samples>0&&Se.useMultisampledRTT(M)===!1?z=Pe.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[V]:z=Be,K.copy(M.viewport),oe.copy(M.scissor),be=M.scissorTest}else K.copy($e).multiplyScalar(me).floor(),oe.copy(Je).multiplyScalar(me).floor(),be=et;if(V!==0&&(z=$),se.bindFramebuffer(G.FRAMEBUFFER,z)&&se.drawBuffers(M,z),se.viewport(K),se.scissor(oe),se.setScissorTest(be),O){let pe=Pe.get(M.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe.__webglTexture,V)}else if(ee){let pe=N;for(let Ie=0;Ie<M.textures.length;Ie++){let Be=Pe.get(M.textures[Ie]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ie,Be.__webglTexture,V,pe)}}else if(M!==null&&V!==0){let pe=Pe.get(M.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pe.__webglTexture,V)}k=-1};function Le(M){let N=Pe.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=Ue.textureFormatReadable(M.format),N.__typeReadable=Ue.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,V,z,O,ee,fe,pe=0){if(!(M&&M.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(Ie=Ie[fe],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){se.bindFramebuffer(G.FRAMEBUFFER,Ie);try{let Be=M.textures[pe],nt=Be.format,ct=Be.type;M.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+pe);let Ge=Le(Be);if(Ge.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&V>=0&&V<=M.height-O&&G.readPixels(N,V,z,O,xe.convert(nt),xe.convert(ct),ee)}finally{let Be=q!==null?Pe.get(q).__webglFramebuffer:null;se.bindFramebuffer(G.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,z,O,ee,fe,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(Ie=Ie[fe],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(N>=0&&N<=M.width-z&&V>=0&&V<=M.height-O){se.bindFramebuffer(G.FRAMEBUFFER,Ie);let Be=M.textures[pe],nt=Be.format,ct=Be.type;M.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+pe);let Ge=Le(Be);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,mt),G.bufferData(G.PIXEL_PACK_BUFFER,ee.byteLength,G.STREAM_READ),G.readPixels(N,V,z,O,xe.convert(nt),xe.convert(ct),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Vt=q!==null?Pe.get(q).__webglFramebuffer:null;se.bindFramebuffer(G.FRAMEBUFFER,Vt);let It=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await xp(G,It,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,mt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ee),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(mt),G.deleteSync(It),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,V=0){let z=Math.pow(2,-V),O=Math.floor(M.image.width*z),ee=Math.floor(M.image.height*z),fe=N!==null?N.x:0,pe=N!==null?N.y:0;Se.setTexture2D(M,0),G.copyTexSubImage2D(G.TEXTURE_2D,V,0,0,fe,pe,O,ee),se.unbindTexture()},this.copyTextureToTexture=function(M,N,V=null,z=null,O=0,ee=0){let fe,pe,Ie,Be,nt,ct,Ge,mt,Vt,It=M.isCompressedTexture?M.mipmaps[ee]:M.image;if(V!==null)fe=V.max.x-V.min.x,pe=V.max.y-V.min.y,Ie=V.isBox3?V.max.z-V.min.z:1,Be=V.min.x,nt=V.min.y,ct=V.isBox3?V.min.z:0;else{let _t=Math.pow(2,-O);fe=Math.floor(It.width*_t),pe=Math.floor(It.height*_t),M.isDataArrayTexture?Ie=It.depth:M.isData3DTexture?Ie=Math.floor(It.depth*_t):Ie=1,Be=0,nt=0,ct=0}z!==null?(Ge=z.x,mt=z.y,Vt=z.z):(Ge=0,mt=0,Vt=0);let Rt=xe.convert(N.format),cn=xe.convert(N.type),Ve;N.isData3DTexture?(Se.setTexture3D(N,0),Ve=G.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Se.setTexture2DArray(N,0),Ve=G.TEXTURE_2D_ARRAY):(Se.setTexture2D(N,0),Ve=G.TEXTURE_2D),se.activeTexture(G.TEXTURE0),se.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,N.flipY),se.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),se.pixelStorei(G.UNPACK_ALIGNMENT,N.unpackAlignment);let _n=se.getParameter(G.UNPACK_ROW_LENGTH),Mt=se.getParameter(G.UNPACK_IMAGE_HEIGHT),Ss=se.getParameter(G.UNPACK_SKIP_PIXELS),hn=se.getParameter(G.UNPACK_SKIP_ROWS),ya=se.getParameter(G.UNPACK_SKIP_IMAGES);se.pixelStorei(G.UNPACK_ROW_LENGTH,It.width),se.pixelStorei(G.UNPACK_IMAGE_HEIGHT,It.height),se.pixelStorei(G.UNPACK_SKIP_PIXELS,Be),se.pixelStorei(G.UNPACK_SKIP_ROWS,nt),se.pixelStorei(G.UNPACK_SKIP_IMAGES,ct);let ji=M.isDataArrayTexture||M.isData3DTexture,Ms=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let _t=Pe.get(M),rn=Pe.get(N),qn=Pe.get(_t.__renderTarget),Dt=Pe.get(rn.__renderTarget);se.bindFramebuffer(G.READ_FRAMEBUFFER,qn.__webglFramebuffer),se.bindFramebuffer(G.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Qt=0;Qt<Ie;Qt++)ji&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pe.get(M).__webglTexture,O,ct+Qt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Pe.get(N).__webglTexture,ee,Vt+Qt)),G.blitFramebuffer(Be,nt,Be+fe,nt+pe,Ge,mt,Ge+fe,mt+pe,G.DEPTH_BUFFER_BIT,G.NEAREST);se.bindFramebuffer(G.READ_FRAMEBUFFER,null),se.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||Pe.has(M)){let _t=Pe.get(M),rn=Pe.get(N);se.bindFramebuffer(G.READ_FRAMEBUFFER,L),se.bindFramebuffer(G.DRAW_FRAMEBUFFER,A);for(let qn=0;qn<Ie;qn++)ji?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,_t.__webglTexture,O,ct+qn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_t.__webglTexture,O),Ms?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rn.__webglTexture,ee,Vt+qn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,rn.__webglTexture,ee),O!==0?G.blitFramebuffer(Be,nt,Be+fe,nt+pe,Ge,mt,Ge+fe,mt+pe,G.COLOR_BUFFER_BIT,G.NEAREST):Ms?G.copyTexSubImage3D(Ve,ee,Ge,mt,Vt+qn,Be,nt,fe,pe):G.copyTexSubImage2D(Ve,ee,Ge,mt,Be,nt,fe,pe);se.bindFramebuffer(G.READ_FRAMEBUFFER,null),se.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ms?M.isDataTexture||M.isData3DTexture?G.texSubImage3D(Ve,ee,Ge,mt,Vt,fe,pe,Ie,Rt,cn,It.data):N.isCompressedArrayTexture?G.compressedTexSubImage3D(Ve,ee,Ge,mt,Vt,fe,pe,Ie,Rt,It.data):G.texSubImage3D(Ve,ee,Ge,mt,Vt,fe,pe,Ie,Rt,cn,It):M.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ee,Ge,mt,fe,pe,Rt,cn,It.data):M.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ee,Ge,mt,It.width,It.height,Rt,It.data):G.texSubImage2D(G.TEXTURE_2D,ee,Ge,mt,fe,pe,Rt,cn,It);se.pixelStorei(G.UNPACK_ROW_LENGTH,_n),se.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mt),se.pixelStorei(G.UNPACK_SKIP_PIXELS,Ss),se.pixelStorei(G.UNPACK_SKIP_ROWS,hn),se.pixelStorei(G.UNPACK_SKIP_IMAGES,ya),ee===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&G.generateMipmap(Ve),se.unbindTexture()},this.initRenderTarget=function(M){Pe.get(M).__webglFramebuffer===void 0&&Se.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Se.setTextureCube(M,0):M.isData3DTexture?Se.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Se.setTexture2DArray(M,0):Se.setTexture2D(M,0),se.unbindTexture()},this.resetState=function(){U=0,B=0,q=null,se.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var om={type:"change"},Hu={type:"start"},lm={type:"end"},bc=new di,am=new Dn,fS=Math.cos(70*Cn.DEG2RAD),Jt=new D,In=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zu=1e-6,Ec=class extends Jo{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:Qn.ROTATE,TWO:Qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Xt,this._lastTargetPosition=new D,this._quat=new Xt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nr,this._sphericalDelta=new Nr,this._scale=1,this._panOffset=new D,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new D,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mS.bind(this),this._onPointerDown=pS.bind(this),this._onPointerUp=gS.bind(this),this._onContextMenu=bS.bind(this),this._onMouseWheel=yS.bind(this),this._onKeyDown=vS.bind(this),this._onTouchStart=SS.bind(this),this._onTouchMove=MS.bind(this),this._onMouseDown=_S.bind(this),this._onMouseMove=xS.bind(this),this._interceptControlDown=ES.bind(this),this._interceptControlUp=wS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=bt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(om),this.update(),this.state=bt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=In:n>Math.PI&&(n-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Jt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(bc.origin.copy(this.object.position),bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bc.direction))<fS?this.object.lookAt(this.target):(am.setFromNormalAndCoplanarPoint(this.object.up,this.target),bc.intersectPlane(am,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zu||this._lastTargetPosition.distanceToSquared(this.target)>zu?(this.dispatchEvent(om),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Jt.copy(s).sub(this.target);let r=Jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new le,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function pS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function mS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function gS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lm),this.state=bt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _S(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case ms.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case ms.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Hu)}function xS(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yS(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(Hu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lm))}function vS(i){this.enabled!==!1&&this._handleKeyDown(i)}function SS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qn.ROTATE:if(this.enableRotate===!1){this.state=bt.NONE;break}this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case Qn.PAN:if(this.enablePan===!1){this.state=bt.NONE;break}this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Qn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case Qn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Hu)}function MS(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function bS(i){this.enabled!==!1&&i.preventDefault()}function ES(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new vt;c.morphTargetsRelative=a;let l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==i[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(u.morphAttributes[g]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,g,h),l+=g}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=cm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=cm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function cm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new At(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Gu(i,e){if(e===mu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===kr||e===ra){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===kr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function hm(i){let e=new Map,t=new Map,n=i.clone();return um(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function um(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)um(i.children[n],e.children[n],t)}var Tc=class extends Gn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Ac(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ac(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new cd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Fn.extractUrlBase(e);o=Fn.resolveURL(l,this.path)}else o=Fn.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new qi(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gm){try{o[ft.KHR_BINARY_GLTF]=new hd(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new _d(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ft.KHR_MATERIALS_UNLIT:o[u]=new Yu;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[u]=new ud(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[u]=new dd;break;case ft.KHR_MESH_QUANTIZATION:o[u]=new fd;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function TS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ft(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},qu=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ye(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],on);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Yi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ks(h),l.distance=u;break;case"spot":l=new $o(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Yu=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(e,t,n){let s=[];e.color=new Ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},$u=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Zu=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new le(r,r)}return Promise.all(s)}},Ku=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Ju=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ju=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ye(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],on)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ye().setRGB(r[0],r[1],r[2],on),Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},id=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ye().setRGB(r[0],r[1],r[2],on),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Tt)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Sn:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ad=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},ld=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Ac=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},cd=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Wn.TRIANGLES&&l.mode!==Wn.TRIANGLE_STRIP&&l.mode!==Wn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Qe,p=new D,m=new Xt,v=new D(1,1,1),b=new Ds(g.geometry,g.material,d);for(let T=0;T<d;T++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,T),c.SCALE&&v.fromBufferAttribute(c.SCALE,T),b.setMatrixAt(T,x.compose(p,m,v));let _=null;for(let T in c)if(T==="_COLOR_0"){let w=c[T];b.instanceColor=new Fi(w.array,w.itemSize,w.normalized)}else if(T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"){if(_===null){let y=b.geometry;_=new vt,_.name=y.name;for(let S in y.attributes)_.setAttribute(S,y.attributes[S]);for(let S in y.morphAttributes)_.morphAttributes[S]=y.morphAttributes[S];y.index!==null&&_.setIndex(y.index),_.morphTargetsRelative=y.morphTargetsRelative;for(let S of y.groups)_.addGroup(S.start,S.count,S.materialIndex);y.boundingBox!==null&&(_.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(_.boundingSphere=y.boundingSphere.clone()),_.drawRange.start=y.drawRange.start,_.drawRange.count=y.drawRange.count,_.userData=Object.assign({},y.userData),b.geometry=_}let w=c[T];_.setAttribute(T,new Fi(w.array,w.itemSize,w.normalized))}Pt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},gm="glTF",ua=12,dm={JSON:1313821514,BIN:5130562},hd=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ua,r=new DataView(e,ua),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===dm.JSON){let l=new Uint8Array(e,ua+o,a);this.content=n.decode(l)}else if(c===dm.BIN){let l=ua+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ud=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=md[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=md[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Vr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}u(f)},a,l,on,d)})})}},dd=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},fd=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},Rc=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,p=-2*f+3*d,m=f-d,v=1-p,b=m-d+u;for(let _=0;_!==a;_++){let T=o[x+_+a],w=o[x+_+c]*h,y=o[g+_+a],S=o[g+_]*h;r[_]=v*T+b*w+p*y+m*S}return r}},AS=new Xt,pd=class extends Rc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return AS.fromArray(r).normalize().toArray(r),r}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fm={9728:Gt,9729:Nt,9984:Ll,9985:Fr,9986:Xs,9987:fn},pm={33071:En,33648:xr,10497:Hn},Vu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},md={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_s={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},RS={CUBICSPLINE:void 0,LINEAR:Ps,STEP:Is},Wu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function CS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),i.DefaultMaterial}function $s(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Si(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function IS(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function PS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function LS(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xu(t.attributes):e=i.indices+":"+Xu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Xu(i.targets[n]);return e}function Xu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function NS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var DS=new Qe,_d=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new TS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Xo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Zo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qi(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return $s(r,a,s),Si(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Fn.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Vu[s.type],a=Vr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new At(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Vu[s.type],l=Vr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(f&&f!==u){let m=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,b=t.cache.get(v);b||(x=new l(a,m*f,s.count*f/h),b=new hs(x,f/h),t.cache.add(v,b)),p=new us(b,c,d%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),p=new At(x,c,g);if(s.sparse!==void 0){let m=Vu.SCALAR,v=Vr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,T=new v(o[1],b,s.sparse.count*m),w=new l(o[2],_,s.sparse.count*c);a!==null&&(p=new At(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let y=0,S=T.length;y<S;y++){let P=T[y];if(p.setX(P,w[y*c]),c>=2&&p.setY(P,w[y*c+1]),c>=3&&p.setZ(P,w[y*c+2]),c>=4&&p.setW(P,w[y*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=fm[d.magFilter]||Nt,h.minFilter=fm[d.minFilter]||fn,h.wrapS=pm[d.wrapS]||Hn,h.wrapT=pm[d.wrapT]||Hn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==Nt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,g){let x=f;t.isImageBitmapLoader===!0&&(x=function(p){let m=new tn(p);m.needsUpdate=!0,f(m)}),t.load(Fn.resolveURL(d,r.path),x,void 0,g)})})}let u=h.then(function(d){return l===!0&&a.revokeObjectURL(c),Si(d,o),d.userData.mimeType=o.mimeType||NS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Tr,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new fs,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ot}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let u=s[ft.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ye(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],on),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Vn);let h=r.alphaMode||Wu.OPAQUE;if(h===Wu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Wu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==an&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new le(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==an&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==an){let u=r.emissiveFactor;a.emissive=new Ye().setRGB(u[0],u[1],u[2],on)}return r.emissiveTexture!==void 0&&o!==an&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Si(u,r),t.associations.set(u,{materials:e}),r.extensions&&$s(s,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return mm(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=LS(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=mm(new vt,l,t),l.mode===Wn.TRIANGLE_STRIP?d=d.then(f=>Gu(f,ra)):l.mode===Wn.TRIANGLE_FAN&&(d=d.then(f=>Gu(f,kr))),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?CS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],p=o[f],m,v=l[f];if(p.mode===Wn.TRIANGLES||p.mode===Wn.TRIANGLE_STRIP||p.mode===Wn.TRIANGLE_FAN||p.mode===void 0){let b=r.isSkinnedMesh===!0,_=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");b&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=b&&_?new Mo(x,v):new xt(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Wn.LINES)m=new Eo(x,v);else if(p.mode===Wn.LINE_STRIP)m=new Bi(x,v);else if(p.mode===Wn.LINE_LOOP)m=new wo(x,v);else if(p.mode===Wn.POINTS)m=new To(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&PS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Si(m,r),p.extensions&&$s(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&$s(s,u[0],r),u[0];let d=new Bt;r.extensions&&$s(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(Cn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new zs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new bo(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let b=0,_=d.length;b<_;b++){let T=d[b],w=f[b],y=g[b],S=x[b],P=p[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let C=n._createAnimationTracks(T,w,y,S,P);if(C)for(let I=0;I<C.length;I++)m.push(C[I])}let v=new Wo(r,void 0,m);return Si(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,DS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new wr:l.length>1?h=new Bt:l.length===1?h=l[0]:h=new Pt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Si(h,r),r.extensions&&$s(n,h,r),r.matrix!==void 0){let u=new Qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Bt;n.name&&(r.name=s.createUniqueName(n.name)),Si(r,n),n.extensions&&$s(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(hm(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof vn||d instanceof tn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}_s[r.path]===_s.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(_s[r.path]){case _s.weights:h=Vi;break;case _s.rotation:h=Wi;break;case _s.translation:case _s.scale:h=ps;break;default:n.itemSize===1?h=Vi:h=ps;break}let u=s.interpolation!==void 0?RS[s.interpolation]:Ps,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let x=new h(c[f]+"."+_s[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Wi?pd:Rc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function US(i,e,t){let n=e.attributes,s=new yn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=gd(Vr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=gd(Vr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Tn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function mm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=md[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ht.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Si(i,e),US(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?IS(i,e.targets,t):i})}var xd=new WeakMap,OS=new URL("../libs/draco/draco_decoder.wasm",import.meta.url).toString(),FS=new URL("../libs/draco/draco_wasm_wrapper.js",import.meta.url).toString(),BS=new URL("../libs/draco/draco_decoder.js",import.meta.url).toString(),QE={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",import.meta.url).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",import.meta.url).toString()},Cc=class extends Gn{constructor(e){super(e),this.decoderPaths={js:FS,wasm:OS,dep_js:BS},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Fn.resolveURL("draco_wasm_wrapper.js",e),t.wasm=Fn.resolveURL("draco_decoder.wasm",e),t.dep_js=Fn.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new qi(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Tt,n).catch(n)}decodeDracoFile(e,t,n,s,r=on,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(xd.has(e)){let c=xd.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),xd.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new vt;e.index&&t.setIndex(new At(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:s,array:r,itemSize:o,stride:a,vertexColorSpace:c}=e.attributes[n],l;if(o===a)l=new At(r,o);else{let h=new hs(r,a);l=new us(h,o,0)}s==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(r instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Tt)return;let n=new Ye;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),ht.colorSpaceToWorking(n,Tt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new qi(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(s=>{let r=s[0];e||(this.decoderConfig.wasmBinary=s[1]);let o=kS.toString(),a=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function kS(){let i,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(c),l),g=f.attributes.map(x=>x.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){let h=l.attributeIDs,u=l.attributeTypes,d,f,g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let x={index:null,attributes:[]};for(let p in h){let m=self[u[p]],v,b;if(l.useUniqueIDs)b=h[p],v=a.GetAttributeByUniqueId(d,b);else{if(b=a.GetAttributeId(d,o[h[p]]),b===-1)continue;v=a.GetAttribute(d,b)}let _=s(o,a,d,p,m,v);p==="color"&&(_.vertexColorSpace=l.vertexColorSpace),x.attributes.push(_)}return g===o.TRIANGULAR_MESH&&(x.index=n(o,a,d)),o.destroy(d),x}function n(o,a,c){let h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);let f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,c,l,h,u){let d=c.num_points(),f=u.num_components(),g=r(o,h),x=f*h.BYTES_PER_ELEMENT,p=Math.ceil(x/4)*4,m=p/h.BYTES_PER_ELEMENT,v=d*x,b=d*p,_=o._malloc(v);a.GetAttributeDataArrayForAllPoints(c,u,g,v,_);let T=new h(o.HEAPF32.buffer,_,v/h.BYTES_PER_ELEMENT),w;if(x===p)w=T.slice();else{w=new h(b/h.BYTES_PER_ELEMENT);let y=0;for(let S=0;S<d;S++){for(let P=0;P<f;P++)w[y+P]=T[S*f+P];y+=m}}return o._free(_),{name:l,count:d,itemSize:f,array:w,stride:m}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Ic=class extends Ns{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Lt;e.deleteAttribute("uv");let t=new Ot({side:ln}),n=new Ot,s=new ks(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new xt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ds(e,n,6),a=new Pt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new xt(e,Wr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new xt(e,Wr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new xt(e,Wr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new xt(e,Wr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new xt(e,Wr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new xt(e,Wr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Wr(i){return new Go({color:0,emissive:16777215,emissiveIntensity:i})}function _m({height:i=1,materials:e}={}){if(!e||["stone","darkStone","bronze","darkBronze","inlay"].some(A=>!e[A]?.isMaterial))throw new TypeError("\u5E2D\u53F0\u9700\u8981\u5B8C\u6574\u7684\u77F3\u6750\u3001\u6DF1\u77F3\u3001\u9752\u9285\u3001\u6DF1\u9752\u9285\u8207\u5D4C\u98FE\u6750\u8CEA\u3002");let t=Number(i);if(!Number.isFinite(t)||t<.34)throw new RangeError("\u5E2D\u53F0\u9AD8\u5EA6\u5FC5\u9808\u81F3\u5C11\u70BA 0.34\u3002");let n=new Bt;n.name="oathkeeper-wolf-seat",n.userData={artStudy:!0,standingHeight:t+.075,inwardAxis:"+Z",materialsOwnedByCaller:!0};let s=Object.fromEntries(Object.keys(e).map(A=>[A,[]])),r=new Xt,o=new Qe,a=new D,c=new D(1,1,1);function l(A,U,B=[0,0,0],q=[0,0,0]){r.setFromEuler(new wn(...q)),o.compose(a.set(...B),r,c),U.applyMatrix4(o);let k=U.attributes.position,W=U.attributes.normal,K=new Float32Array(k.count*2);for(let oe=0;oe<k.count;oe++){let be=Math.abs(W.getX(oe)),Y=Math.abs(W.getY(oe)),he=Math.abs(W.getZ(oe));Y>=be&&Y>=he?(K[oe*2]=k.getX(oe),K[oe*2+1]=k.getZ(oe)):be>he?(K[oe*2]=k.getZ(oe),K[oe*2+1]=k.getY(oe)):(K[oe*2]=k.getX(oe),K[oe*2+1]=k.getY(oe))}if(U.userData.keepSurfaceUv||U.setAttribute("uv",new At(K,2)),!U.getAttribute("color")||!U.getAttribute("uv1")){let oe=new Float32Array(k.count*3),be=new Float32Array(k.count*2),Y=A==="bronze"||A==="darkBronze";for(let he=0;he<k.count;he++){let ue=W.getY(he),ze=Math.abs(W.getX(he)),me=Math.abs(W.getZ(he)),He=Math.min(1,(1-Math.max(ze,Math.abs(ue),me))*3),gt=ue<-.25?.34:.08,$e=Y?.1+He*.47:.04+He*.17,Je=1-gt*(Y?.12:.09)+He*(Y?.045:.035);oe.set([Je,Je,Je],he*3),be.set([$e,gt],he*2)}U.getAttribute("color")||U.setAttribute("color",new At(oe,3)),U.getAttribute("uv1")||U.setAttribute("uv1",new At(be,2))}s[A].push(U)}function h(A,U,B=.18,q=0){let k=A/2,W=U/2,K=q>.02&&A>1.78,oe=A>1.78&&A<1.86;return[[-k+B,-W],[k-B,-W],[k,-W+B],[k,W-B],[k-B,W],...oe?[[.46,W],[.43,W-.012],[.385,W-.016],[.35,W]]:[],[-k+B+(K&&!oe?q*1.6:0),W],...K&&!oe?[[-k+B*.55,W-q*.65]]:[],[-k,W-B],[-k,-W+B]]}function u(A,U,B=.014){let q=Math.min(B,U*.22),k=new pi(A.map(([W,K])=>new le(W,-K)));return new Hi(k,{depth:U-q*2,bevelEnabled:q>0,bevelThickness:q,bevelSize:q,bevelSegments:2,steps:1,curveSegments:1}).rotateX(-Math.PI/2).translate(0,-U/2+q,0)}function d(A,U,B,q,k,W=.17,K=0,oe=0,be=0){l(A,u(h(U,B,W,K),q,Math.min(.014,q*.15)),[oe,k,be])}function f(A,U,B=.006,q=[]){let k=Math.min(B,U*.2),W=new pi(A.map(([K,oe])=>new le(K,oe)));for(let K of q)W.holes.push(new Us(K.map(([oe,be])=>new le(oe,be))));return new Hi(W,{depth:U-k*2,bevelEnabled:k>0,bevelThickness:k,bevelSize:k,bevelSegments:2,steps:1,curveSegments:1}).translate(0,0,k)}function g(A,U,B,q=[0,0,0]){let k=[];for(let K of B)for(let oe of K)k.push(...U[oe]);let W=new vt;W.setAttribute("position",new at(k,3)),W.computeVertexNormals(),l(A,W,q)}function x(A,U){let B=(ve,Re=0,Ue=1)=>Math.max(Re,Math.min(Ue,ve)),q=(ve,Re,Ue)=>Math.exp(-Math.pow((ve-Re)/Ue,2)),k=(ve,Re,Ue)=>{let se=B((Ue-ve)/(Re-ve));return se*se*(3-2*se)},W=[[-.285,.015],[-.26,.038],[-.205,.084],[-.14,.118],[-.075,.16],[-.008,.192],[.055,.205],[.11,.184],[.16,.147],[.205,.088],[.228,.034]],K=[[-.285,.028],[-.25,.065],[-.21,.119],[-.17,.143],[-.12,.132],[-.05,.102],[.025,.064],[.1,.029],[.17,.012],[.228,0]],oe=new Map;function be(ve,Re){let Ue=oe.get(ve);if(!Ue){let se=[],Ze=[];for(let Se=1;Se<ve.length;Se++){let R=ve[Se][0]-ve[Se-1][0];se.push(R),Ze.push((ve[Se][1]-ve[Se-1][1])/R)}let Pe=(Se,R,E,X)=>{let ce=((2*E+X)*Se-E*R)/(E+X);return ce*Se<=0?0:Se*R<0&&Math.abs(ce)>Math.abs(3*Se)?3*Se:ce};Ue=[Pe(Ze[0],Ze[1],se[0],se[1])];for(let Se=1;Se<ve.length-1;Se++){let R=Ze[Se-1],E=Ze[Se],X=2*se[Se]+se[Se-1],ce=se[Se]+2*se[Se-1];Ue.push(R*E<=0?0:(X+ce)/(X/R+ce/E))}Ue.push(Pe(Ze.at(-1),Ze.at(-2),se.at(-1),se.at(-2))),oe.set(ve,Ue)}for(let se=1;se<ve.length;se++)if(Re<=ve[se][0]){let[Ze,Pe]=ve[se-1],[Se,R]=ve[se],E=B((Re-Ze)/(Se-Ze)),X=E*E,ce=X*E;return(2*ce-3*X+1)*Pe+(ce-2*X+E)*(Se-Ze)*Ue[se-1]+(-2*ce+3*X)*R+(ce-X)*(Se-Ze)*Ue[se]}return ve.at(-1)[1]}function Y(ve,Re){let Ue=Math.abs(ve),se=be(W,Re),Ze=B(Ue/se),Pe=q(Ue,.128,.067)*q(Re,-.026,.087),Se=(1-Ze*Ze)*q(Re,.115,.13),R=.022+Ue*.35,E=q(Ue,.107,.047)*q(Re,R,.0085),X=q(Ue,.108,.059)*q(Re,R+.025,.0105),ce=.026+.044*(1-k(-.2,.12,Re)),re=Math.exp(-Math.pow(Ue/ce,4)),Te=(1-k(.056,.088,Ue))*q(Re,-.24+Ue*.29,.0034),Me=q(Ue,.105-Re*.3,.0048)*q(Re,-.044,.07),j=q(Ue,.034+(Re-.1)*.16,.0028)*q(Re,.153,.05),ie=.805+Se*.052+Pe*.037+X*.018+be(K,Re)*re-E*.021-Te*.01-Me*.0028-j*.0027,Ee=q(Ue,.038,.011)*q(Re,-.184,.0055);ie-=Ee*.008;let F=B(E*.72+Te*.88+Me*.3+j*.45+Ee*.75),ne=B(.11+X*.3+re*q(Re,-.09,.18)*.32+(1-k(.025,.075,1-Ze))*.25-F*.1,.03,.82),Q=1-F*.24;return{z:Math.max(.801,ie),cavity:F,wear:ne,color:[Q+ne*.035,Q+ne*.016,Q-ne*.008]}}let he=128,ue=64,ze=[],me=[],He=[],gt=[],$e=[];for(let ve=0;ve<=he;ve++){let Re=.228-.513*ve/he,Ue=be(W,Re);for(let se=0;se<=ue;se++){let Ze=Ue*(se/ue*2-1),Pe=Y(Ze,Re);ze.push(Ze,Re*A+U,Pe.z),$e.push(Ze,Re*A+U),me.push(...Pe.color),He.push(Pe.wear,Pe.cavity)}}for(let ve=0;ve<he;ve++)for(let Re=0;Re<ue;Re++){let Ue=ve*(ue+1)+Re,se=Ue+ue+1;gt.push(Ue,se,Ue+1,Ue+1,se,se+1)}let Je=new vt;Je.setAttribute("position",new at(ze,3)),Je.setAttribute("color",new at(me,3)),Je.setAttribute("uv1",new at(He,2)),Je.setAttribute("uv",new at($e,2)),Je.userData.keepSurfaceUv=!0,Je.setIndex(gt),Je.computeVertexNormals(),l("bronze",Je);let et=[];for(let ve=0;ve<=ue;ve++)et.push(ve);for(let ve=1;ve<=he;ve++)et.push(ve*(ue+1)+ue);for(let ve=ue-1;ve>=0;ve--)et.push(he*(ue+1)+ve);for(let ve=he-1;ve>0;ve--)et.push(ve*(ue+1));let ae=[],we=[];et.forEach(ve=>{ae.push(...ze.slice(ve*3,ve*3+3),ze[ve*3],ze[ve*3+1],.785)});for(let ve=0;ve<et.length;ve++){let Re=ve*2,Ue=(ve+1)%et.length*2;we.push(Re,Re+1,Ue,Ue,Re+1,Ue+1)}let _e=new vt;_e.setAttribute("position",new at(ae,3)),_e.setIndex(we),_e.computeVertexNormals(),l("bronze",_e);for(let ve of[-1,1]){let Re=Ze=>{let Pe=Ze.attributes.position;for(let Se=0;Se<Pe.count;Se++){let R=1-k(.14,.23,Pe.getY(Se));Pe.setX(Se,Pe.getX(Se)-ve*.006*R),Pe.setZ(Se,Pe.getZ(Se)-.02*R)}return Ze.computeVertexNormals(),Ze.scale(1,A,1)};l("bronze",Re(f([[.077,.133],[.109,.221],[.158,.294],[.178,.302],[.182,.276],[.155,.183],[.129,.133]].map(([Ze,Pe])=>[ve*Ze,Pe]),.043,.006)),[0,U,.799]),l("darkBronze",Re(f([[.123,.19],[.142,.247],[.163,.278],[.157,.239],[.145,.19]].map(([Ze,Pe])=>[ve*Ze,Pe]),.002,4e-4)),[0,U,.841])}let De=12,ye=28,Ke=[],ke=[],st=[],lt=[],rt=[];for(let ve=0;ve<=De;ve++){let Re=ve/De,Ue=-.159-.061*Re,se=.059*Math.pow(Math.sin(Math.PI*(.12+.76*Re)),.55);for(let Ze=0;Ze<=ye;Ze++){let Pe=se*(2*Ze/ye-1),Se=Y(Pe,Ue);Ke.push(Pe,Ue*A+U,Se.z+.0013),rt.push(Pe,Ue*A+U);let R=.91-Se.cavity*.17;ke.push(R,R,R),st.push(.17+Se.wear*.3,Se.cavity)}}for(let ve=0;ve<De;ve++)for(let Re=0;Re<ye;Re++){let Ue=ve*(ye+1)+Re,se=Ue+ye+1;lt.push(Ue,se,Ue+1,Ue+1,se,se+1)}let G=new vt;G.setAttribute("position",new at(Ke,3)),G.setAttribute("color",new at(ke,3)),G.setAttribute("uv1",new at(st,2)),G.setAttribute("uv",new at(rt,2)),G.userData.keepSurfaceUv=!0,G.setIndex(lt),G.computeVertexNormals(),l("darkBronze",G)}function p(A,U,B,q="bronze"){let k=[],W=[];for(let K=0;K<A.length;K++){let oe=A[Math.max(0,K-1)],be=A[Math.min(A.length-1,K+1)],Y=be[0]-oe[0],he=be[1]-oe[1],ue=Math.hypot(Y,he)||1;k.push([A[K][0]-he/ue*U/2,A[K][1]+Y/ue*U/2]),W.push([A[K][0]+he/ue*U/2,A[K][1]-Y/ue*U/2])}return{key:q,geometry:f([...k,...W.reverse()],B,.002)}}function m(A,U,B,q=.019,k=0){let W=new qt(q,q*1.05,.012,8).rotateX(Math.PI/2);l("bronze",W,[A,U,B],[0,0,k]),l("darkBronze",new Lt(q*.7,.004,.002),[A,U,B+.0065],[0,0,k])}[[[-1.005,-1.005],[-.1,-1.005],[-.1,-.84],[-.78,-.78],[-1.005,-.86]],[[-.075,-1.005],[.68,-1.005],[.995,-.83],[.84,-.69],[-.075,-.8]],[[-1.005,-.83],[-.82,-.74],[-.81,.13],[-1.005,.24]],[[-1.005,.265],[-.82,.155],[-.7,.81],[-.89,1.005],[-1.005,.94]],[[-.865,1.005],[-.69,.835],[.04,.84],[.08,1.005]],[[.105,1.005],[.065,.84],[.74,.815],[1.005,.97],[.93,1.005]],[[1.005,.94],[.83,.76],[.84,.04],[1.005,-.06]],[[1.005,-.095],[.845,.015],[.83,-.66],[1.005,-.8]]].forEach((A,U)=>l(U%3===0?"darkStone":"stone",u(A,.025,.003),[0,.054+U%2*.003,0])),d("darkStone",1.9,1.91,.11,.116,.27,.035),d("stone",1.83,1.84,.085,.2035,.25,.022),d("darkStone",1.68,1.7,.035,.26,.23,.015);let b=.245,_=t-.095,T=Math.max(.035,_-b),w=Math.max(1,Math.round(T/.26)),y=T/w;for(let A=0;A<w;A++){let U=A/Math.max(1,w-1);d(A===0?"darkStone":"stone",1.48-U*.055,1.51-U*.055,Math.max(.02,y-.014),b+y*(A+.5),.205,A===1?.023:.006)}let S=.18,P=Math.max(.26,t-.09);for(let A of[-1,1])for(let U of[-1,1]){let B=[[A*.44,S,U*.8],[A*.77,S,U*.77],[A*.8,S,U*.44],[A*.55,S,U*.5],[A*.46,P,U*.66],[A*.65,P,U*.65],[A*.66,P,U*.46],[A*.52,P,U*.52]],q=[[0,1,5],[0,5,4],[1,2,6],[1,6,5],[2,3,7],[2,7,6],[3,0,4],[3,4,7],[4,5,6],[4,6,7]];A*U<0&&(q=q.map(W=>[...W].reverse())),g("darkStone",B,q);let k=.29;l("darkBronze",f([[-.11,-.055],[.11,-.055],[.085,.055],[-.085,.055]],.016,.004),[A*.65,k,U*.762],[0,U<0?Math.PI:0,0]),m(A*.65,k,U*.776,.016)}d("darkStone",1.63,1.67,.075,t-.065,.225,.012),d("bronze",1.7,1.74,.022,t-.0225,.235,.008),d("stone",1.76,1.8,.068,t+.018,.235,.018),[[[-.625,-.855],[.035,-.855],[.035,.12],[-.855,.12],[-.855,-.625]],[[.049,-.855],[.625,-.855],[.855,-.625],[.855,-.19],[.049,-.19]],[[.049,-.176],[.855,-.176],[.855,.625],[.625,.855],[.3,.855],[.265,.836],[.21,.855],[.049,.855]],[[-.855,.134],[.035,.134],[.035,.855],[-.625,.855],[-.855,.625]]].forEach((A,U)=>l(U===1?"darkStone":"stone",u(A,.019,.002),[0,t+.0625,0]));for(let A of[-1,1])for(let U of[-1,1]){let B=[[A*.63,U*.85],[A*.85,U*.63],[A*.85,U*.42],[A*.42,U*.85]];l("bronze",u(B,.005,7e-4),[0,t+.072,0]),l("darkBronze",new qt(.018,.018,.003,8),[A*.68,t+.0735,U*.68])}let I=Math.min(1,Math.max(.28,(t-.3)/.7)),H=b+T*.51,$=[[-.36,-.3],[.36,-.3],[.43,-.2],[.43,.19],[.33,.29],[-.33,.29],[-.43,.19],[-.43,-.2]];l("stone",f($,.031,.009).scale(1,I,1),[0,H,.746]),l("darkStone",f($.map(([A,U])=>[A*.94,U*.93]),.012,.005).scale(1,I,1),[0,H,.778]),x(I,H);for(let A of[-1,1])for(let U of[-.195,.195])m(A*.351,H+U*I,.797,.013,A*.24);l("inlay",new Lt(.055,.005,.002),[-.26,H-.248*I,.792]),l("darkBronze",f([[-.56,-.026],[.56,-.026],[.59,.026],[-.59,.026]],.012,.002),[0,t-.006,.881]);for(let A of[-1,1]){let U=p([[A*.08,-.012],[A*.21,.012],[A*.34,-.012],[A*.47,.012]],.014,.006);l("bronze",U.geometry,[0,t-.006,.895]),m(A*.55,t-.006,.895,.012)}let L={stone:"dressed-stone-and-crown",darkStone:"basalt-bearing-and-recesses",bronze:"cast-wolf-and-bronze-bindings",darkBronze:"oxidized-metal-recesses",inlay:"mineral-chisel-edge"};for(let A of["stone","darkStone","bronze","darkBronze","inlay"]){let U=s[A];if(!U.length)continue;let B=U.map(W=>W.index?W.toNonIndexed():W),q=wc(B,!1);if(new Set([...U,...B]).forEach(W=>W.dispose()),!q)throw new Error(`\u5E2D\u53F0\u5E7E\u4F55\u7121\u6CD5\u5408\u4F75\uFF1A${A}`);q.computeBoundingBox(),q.computeBoundingSphere();let k=new xt(q,e[A]);k.name=L[A],k.castShadow=A!=="inlay",k.receiveShadow=!0,n.add(k)}return n.userData.meshes=n.children.length,n.userData.triangles=n.children.reduce((A,U)=>A+U.geometry.attributes.position.count/3,0),n}function yd(){let t=Math.PI*2,n=(x,p=0,m=1)=>Math.max(p,Math.min(m,x)),s=(x,p,m)=>x+(p-x)*m,r=(x,p,m)=>{let v=n((m-x)/(p-x));return v*v*(3-2*v)};function o(x,p,m){let v=Math.imul(x,374761393)^Math.imul(p,668265263)^m;return v=Math.imul(v^v>>>13,1274126177),((v^v>>>16)>>>0)/4294967295}function a(x,p,m,v,b){let _=x*m,T=p*v,w=Math.floor(_),y=Math.floor(T),S=_-w,P=T-y,C=S*S*(3-2*S),I=P*P*(3-2*P),H=(w%m+m)%m,$=(y%v+v)%v,L=(H+1)%m,A=($+1)%v;return s(s(o(H,$,b),o(L,$,b),C),s(o(H,A,b),o(L,A,b),C),I)}function c(x,p,m=!1,v=512){return{data:x,name:p,color:m,size:v,channel:0,wrap:"repeat",generateMipmaps:!0}}function*l(x,p){let m=new Uint8Array(1048576),v=(_,T)=>x[(T+512)%512*512+(_+512)%512],b=512/2;for(let _=0;_<512;_+=1){for(let T=0;T<512;T+=1){let w=-(v(T+1,_)-v(T-1,_))*b,y=-(v(T,_+1)-v(T,_-1))*b,S=Math.hypot(w,y,1),P=(_*512+T)*4;m[P]=Math.round((w/S*.5+.5)*255),m[P+1]=Math.round((y/S*.5+.5)*255),m[P+2]=Math.round((1/S*.5+.5)*255),m[P+3]=255}yield}return c(m,p)}function*h(){let x=new Uint8Array(65536);for(let m=0;m<128;m+=1){let v=m/127;for(let b=0;b<128;b+=1){let _=b/127,T=(m*128+b)*4;x[T]=Math.round(255*(1-v*.38*(1-_*.45))),x[T+1]=Math.round(255*n(.87-_*.53+v*.14-r(.45,.85,_)*.1,.29,.99)),x[T+2]=Math.round(255*n(.96-v*.44+_*.025)),x[T+3]=255}yield}let p=c(x,"hero-position-wear-cavity-response-linear",!1,128);return p.channel=1,p.wrap="clamp",p.generateMipmaps=!1,p}function u(){return Array.from({length:42},(x,p)=>{let m=p%7,v=Math.floor(p/7);if(o(m,v,90071)<.66)return null;let b=-.95+o(m,v,6587)*1.9;return{x:.26+o(m,v,9067)*.48,y:.25+o(m,v,4729)*.5,cos:Math.cos(b),sin:Math.sin(b),reach:.017+o(m,v,137)*.023,step:.008+o(m,v,6329)*.007,widths:[-1,0,1].map(_=>.0018+o(m+_,v,691)*.0016)}})}function d(x,p,m){let v=Math.floor(x*7),b=Math.floor(p*6),_=m[b*7+v];if(!_)return 0;let T=(x*7-v-_.x)/7,w=(p*6-b-_.y)/6,y=T*_.cos-w*_.sin,S=T*_.sin+w*_.cos,P=1-r(_.reach*.55,_.reach,Math.abs(y));if(P===0||Math.abs(S)>_.step+.0035)return 0;let C=.8+a(x,p,61,67,4831)*.2,I=0;for(let H=-1;H<=1;H+=1){let $=S-H*_.step,L=_.widths[H+1];I=Math.max(I,(1-r(L*.12,L,Math.abs($)))*P*C)}return I}function*f(){let x=new Uint8Array(1048576),p=new Uint8Array(512*512*4),m=new Float32Array(512*512),v=u();for(let b=0;b<512;b+=1){for(let _=0;_<512;_+=1){let T=_/512,w=b/512,y=a(T,w,3,4,741),S=(a(T,w,5,6,8021)-.5)*.17,P=(a(T,w,6,5,6029)-.5)*.17,C=a(T+S,w+P,11,9,1283),I=a(T+P,w-S,23,21,2801),H=a(T,w,47,53,2291),$=a(T,w,181,173,3779),L=a(T+S*.7,w+P*.7,7,8,1619),A=(1-r(.009,.035,Math.abs(L-.53)))*r(.55,.73,a(T,w,5,7,3251)),U=(1-r(.004,.018,Math.abs(C-.42)))*r(.59,.78,y)*(.5+I*.5),B=r(.64,.83,C*.55+I*.45),q=d(T,w,v),k=Math.floor(T*83),W=Math.floor(w*83),K=o(k,W,44701),oe=T*83-k-(.22+o(k,W,331)*.56),be=w*83-W-(.22+o(k,W,991)*.56),Y=K>.88&&I>.43?1-r(.025,.14,Math.hypot(oe,be*1.4)):0,he=(y-.5)*13+(C-.5)*11+(I-.5)*8+(H-.5)*5+($-.5)*2,ue=(b*512+_)*4;x[ue]=n(76+he+A*5+B*4-U*7-Y*17-q*7,0,255),x[ue+1]=n(78+he+A*5+B*4-U*7-Y*16-q*7,0,255),x[ue+2]=n(81+he+A*4+B*4-U*6-Y*14-q*6,0,255),x[ue+3]=255,p[ue]=255-Y*45-U*12-q*22,p[ue+1]=n(222+(C-.5)*19+Y*19+q*16-A*9-B*4,181,250),p[ue+2]=2,p[ue+3]=255,m[b*512+_]=(I-.5)*.0012+(H-.5)*.0018+($-.5)*3e-4+A*12e-5-U*38e-5-Y*.0017-q*.0014}yield}return{base:c(x,"hero-cut-stone-base-srgb",!0),response:c(p,"hero-cut-stone-surface-linear"),normal:yield*l(m,"hero-cut-stone-normal-linear")}}function*g(){let x=new Uint8Array(1048576),p=new Float32Array(512*512),m=0;for(let v=0;v<512;v+=1){for(let b=0;b<512;b+=1){let _=b/512,T=v/512,w=a(_,T,7,9,2341),y=a(_,T,4,5,6301),S=a(_,T,23,19,7517),P=a(_,T,173,151,2017),C=a(_,T,251,19,3067),I=r(.71,.84,y*.72+S*.28)*r(.48,.69,S),H=r(.62,.84,w*.6+y*.4),$=t*(_*151+T*3)+(w-.5)*1.1,L=(1-r(.018,.052,Math.abs(Math.sin($))))*r(.42,.64,S)*(1-I),A=(w-.5)*8+(P-.5)*3+(C-.5)*2,U=[132+A,109+A*.85,76+A*.65],B=[99+A*.4,109+A*.4,91+A*.4],q=(v*512+b)*4;for(let k=0;k<3;k+=1)x[q+k]=n(s(U[k]-H*7,B[k],I*.65)+L*5,0,255);x[q+3]=255,p[v*512+b]=(P-.5)*16e-5+(C-.5)*7e-5+I*13e-5-L*15e-5,m+=I}yield}return{base:c(x,"hero-cast-bronze-base-srgb",!0),normal:yield*l(p,"hero-cast-bronze-normal-linear"),oxidationCoverage:m/(512*512)}}return(function*(){let p=yield*f(),m=yield*g(),v=yield*h();return{maps:[p.base,p.response,p.normal,m.base,m.normal,v],bronzeMeanOxidation:m.oxidationCoverage}})()}function xm({useWorker:i=!0,sliceBudgetMs:e=5}={}){let t=null,n=null,s=null,r=null,o=!1,a=!1,c=!1,l,h,u=new Promise((p,m)=>{l=p,h=m});function d(){r!==null&&(clearTimeout(r),r=null),t&&(t.onmessage=t.onerror=t.onmessageerror=null,t.terminate(),t=null),n!==null&&(URL.revokeObjectURL(n),n=null)}function f(p){o||a||(a=!0,d(),l(p))}function g(){if(o||a||c)return;c=!0,d();let p=yd(),m=0,v=0;function b(){if(s=null,o||a)return;let _=performance.now();try{let T;do T=p.next();while(!T.done&&performance.now()-_<e);let w=performance.now()-_;m+=w,v=Math.max(v,w),T.done?f({...T.value,generationMode:"chunked-main-thread",fallbackComputeInMs:m,fallbackMaxSliceInMs:v}):s=setTimeout(b,0)}catch(T){a=!0,h(T)}}s=setTimeout(b,0)}if(i&&typeof Worker<"u"&&typeof Blob<"u"&&typeof URL.createObjectURL=="function")try{let p=`const makeTask = (${yd.toString()});
self.onmessage = () => {
  const started = performance.now();
  try {
    const task = makeTask(); let step;
    do { step = task.next(); } while (!step.done);
    const result = { ...step.value, generationMode: 'worker', workerComputeInMs: performance.now() - started };
    self.postMessage(result, result.maps.map(map => map.data.buffer));
  } catch (error) { self.postMessage({ error: String(error?.message || error) }); }
};`;n=URL.createObjectURL(new Blob([p],{type:"text/javascript"})),t=new Worker(n),t.onmessage=m=>{m.data?.error?g():Array.isArray(m.data?.maps)&&m.data.maps.length===6?f(m.data):g()},t.onerror=m=>{m.preventDefault?.(),g()},t.onmessageerror=g,r=setTimeout(g,3e4),t.postMessage(null)}catch{g()}else g();function x(){o||a||(o=!0,s!==null&&(clearTimeout(s),s=null),d(),l(null))}return{ready:u,cancel:x}}function ym({onReady:i=()=>{},onError:e=()=>{},useWorker:t=!0}={}){let n=performance.now(),s=(S,P,C=!1)=>{let I=new fi(new Uint8Array(P),1,1,pn);return I.name=S,I.colorSpace=C?Tt:ni,I.wrapS=I.wrapT=Hn,I.magFilter=Nt,I.minFilter=fn,I.generateMipmaps=!0,I.anisotropy=2,I.needsUpdate=!0,I},r={base:s("hero-cut-stone-base-srgb",[76,78,81,255],!0),response:s("hero-cut-stone-surface-linear",[255,222,2,255]),normal:s("hero-cut-stone-normal-linear",[128,128,255,255])},o={base:s("hero-cast-bronze-base-srgb",[132,109,76,255],!0),normal:s("hero-cast-bronze-normal-linear",[128,128,255,255])},a=s("hero-position-wear-cavity-response-linear",[255,222,245,255]);a.channel=1,a.wrapS=a.wrapT=En,a.generateMipmaps=!1,a.minFilter=Nt;let c=(S,P,C,I)=>new Ot({name:S,color:P,map:r.base,normalMap:r.normal,vertexColors:!0,normalScale:new le(C,C),roughnessMap:a,roughness:I,metalness:.015,aoMap:r.response,aoMapIntensity:.65}),l=c("hand-cut-northern-stone",12567494,.95,1),h=c("recessed-northern-basalt",9673118,.9,1),u=(S,P,C,I)=>new Ot({name:S,color:P,map:o.base,normalMap:o.normal,vertexColors:!0,normalScale:new le(I,I),roughnessMap:a,metalnessMap:a,aoMap:a,aoMapIntensity:.65,roughness:C,metalness:1}),d=u("aged-bronze-castwork",14077885,.86,.85),f=u("bronze-recess-and-shadow",11841181,.96,.9),g=new Ot({name:"pale-mineral-inlay",color:12567986,vertexColors:!0,roughnessMap:r.response,roughness:.82,metalness:.03,normalMap:r.normal,normalScale:new le(.25,.25)}),x=[l,h,d,f,g],p=[...new Set([r.base,r.response,r.normal,o.base,o.normal,a])],m={textureCount:p.length,textureSize:512,textureSizes:p.map(S=>[S.image.width,S.image.height]),cpuImageBytes:24,estimatedGpuBytesWithMipmaps:31,bronzeMeanOxidation:null,generatedInMs:null,mainThreadSetupInMs:performance.now()-n,mainThreadApplyInMs:0,workerComputeInMs:null,fallbackComputeInMs:null,fallbackMaxSliceInMs:null,generationMode:"pending",ready:!1,state:"loading",uvMetresPerTile:1,positionDrivenResponse:{channel:1,u:"polished wear",v:"recess cavity and oxidation"},note:"GPU estimate assumes RGBA8 and mips only for the five detail maps; excludes geometry, programs and driver overhead."};x.forEach(S=>{S.userData.heroSeatTextureStats=m});let v=!1,b=!1,_=xm({useWorker:t});m.mainThreadSetupInMs=performance.now()-n;let T=_.ready.then(S=>{if(v||b||!S)return null;let P=performance.now();return S.maps.forEach((C,I)=>{let H=p[I];H.dispose(),H.image={data:C.data,width:C.size,height:C.size},H.needsUpdate=!0}),Object.assign(m,{textureSizes:S.maps.map(C=>[C.size,C.size]),cpuImageBytes:S.maps.reduce((C,I)=>C+I.data.byteLength,0),estimatedGpuBytesWithMipmaps:Math.ceil(S.maps.reduce((C,I)=>C+I.data.byteLength*(I.generateMipmaps?4/3:1),0)),bronzeMeanOxidation:S.bronzeMeanOxidation,generatedInMs:performance.now()-n,mainThreadApplyInMs:performance.now()-P,workerComputeInMs:S.workerComputeInMs??null,fallbackComputeInMs:S.fallbackComputeInMs??null,fallbackMaxSliceInMs:S.fallbackMaxSliceInMs??null,generationMode:S.generationMode,ready:!0,state:"ready"}),i(m),m}).catch(S=>(v||b||(m.state="error",e(S)),null));function w(){b||(b=!0,_.cancel(),m.ready||(m.state="cancelled"))}function y(){v||(v=!0,w(),m.state="disposed",p.forEach(S=>S.dispose()),x.forEach(S=>S.dispose()))}return{stone:l,darkStone:h,bronze:d,darkBronze:f,inlay:g,dispose:y,cancel:w,stats:m,ready:T}}var vm=Object.freeze([Object.freeze({x:-.105,z:.065,radiusX:.095,radiusZ:.155}),Object.freeze({x:.105,z:.065,radiusX:.095,radiusZ:.155})]);function Mm(i){let e=i.getObjectByName("Web Fenrir_Body_Low_Prototype");if(e?.geometry||i.traverse(l=>{!e?.geometry&&l.isMesh&&/body.*low.*prototype/i.test(l.name)&&(e=l)}),!e?.geometry?.attributes.position)return null;i.updateMatrixWorld(!0);let t=e.geometry.attributes.position,n=new D,s=1/0;for(let l=0;l<t.count;l+=1)n.fromBufferAttribute(t,l).applyMatrix4(e.matrixWorld),s=Math.min(s,n.y);let r=[];for(let l=0;l<t.count;l+=1)n.fromBufferAttribute(t,l).applyMatrix4(e.matrixWorld),n.y<=s+.035&&r.push([n.x,n.z]);if(r.length<8)return null;let o=r.map(([l])=>l),a=(Math.min(...o)+Math.max(...o))/2,c=[-1,1].map(l=>{let h=r.filter(([m])=>(m-a)*l>0);if(!h.length)return null;let u=h.map(m=>m[0]),d=h.map(m=>m[1]),f=Math.min(...u),g=Math.max(...u),x=Math.min(...d),p=Math.max(...d);return{x:(f+g)/2,z:(x+p)/2,radiusX:Cn.clamp((g-f)/2+.018,.07,.21),radiusZ:Cn.clamp((p-x)/2+.022,.1,.27)}});return c.every(Boolean)?c:null}function Sm(i,e,t){let n=new vt;n.setAttribute("position",new at(i,3));let s=t.flatMap(r=>[1,1,1,r]);return n.setAttribute("color",new at(s,4)),n.setIndex(e),n}function bm({height:i=1,x:e=0,z:t=0,heading:n=0}={}){let s=new Bt;s.name="seat-contact-occlusion";let r=new an({name:"soft-local-contact",color:1384487,vertexColors:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,toneMapped:!1}),o=[[-.68,-.955],[.68,-.955],[.95,-.685],[.95,.685],[.68,.955],[-.68,.955],[-.95,.685],[-.95,-.685]],a=[],c=[],l=[];for(let x of[.002,.048])for(let[p,m]of o){let v=Math.hypot(p,m);a.push(p+p/v*x,.071,m+m/v*x),c.push(x<.01?.27:0)}for(let x=0;x<8;x+=1){let p=(x+1)%8;l.push(x,p,x+8,p,p+8,x+8)}let h=new xt(Sm(a,l,c),r);h.name="foundation-contact-band",h.renderOrder=1,s.add(h);let u=new xt(new vt,r);u.name="occupant-sole-contact",u.renderOrder=-1,u.visible=!1,u.position.y=i+.077,s.add(u);let d=null;function f(x){if(d===x)return;d=x;let p=[],m=[],v=[],b=20;for(let _ of d){let T=p.length/3;p.push(_.x,0,_.z),m.push(.27);for(let[w,y]of[[.65,.18],[1,0]])for(let S=0;S<b;S+=1){let P=S/b*Math.PI*2,C=.91+Math.max(0,Math.sin(P))*.09;p.push(_.x+Math.cos(P)*_.radiusX*w*C,0,_.z+Math.sin(P)*_.radiusZ*w),m.push(y)}for(let w=0;w<b;w+=1){let y=(w+1)%b;v.push(T,T+1+y,T+1+w,T+1+w,T+1+y,T+1+b+w,T+1+y,T+1+b+y,T+1+b+w)}}u.geometry.dispose(),u.geometry=Sm(p,v,m)}f(vm);function g(x,p=null,m=!1){let v=x&&x.root.position.distanceToSquared(x.target)<4e-4;if(u.visible=!!v,!v)return;f(m&&p?p:vm);let b=x.root.position.x-e,_=x.root.position.z-t;u.position.x=Math.cos(n)*b-Math.sin(n)*_,u.position.z=Math.sin(n)*b+Math.cos(n)*_,u.rotation.y=x.root.rotation.y-n}return{group:s,update:g}}function Em({render:i,onIdle:e=()=>{},maxFps:t=()=>60,requestFrame:n=requestAnimationFrame,cancelFrame:s=cancelAnimationFrame}){let r=null,o=!0,a=!1,c=!1,l=null;function h(){!a&&o&&r===null&&(r=n(d))}function u(){c=!0,h()}function d(x){if(r=null,a||!o)return;let p=1e3/t();if(l!==null&&x-l+.1<p){h();return}let m=l===null?1/60:Math.max(0,(x-l)/1e3);l=x,c=!1,i(x,m)===!0||c?h():(l=null,e())}function f(x){a||o===!!x||(o=!!x,l=null,o?u():(r!==null&&s(r),r=null))}function g(){a=!0,r!==null&&s(r),r=null}return{invalidate:u,setActive:f,dispose:g}}var Pc="14f4d6adfd48";function wm(i,e){for(let t=e.parent;t;t=t.parent)if(t===i)return!0;return!1}function vd(i){let e={detail:[],overview:[]};return i.traverse(t=>{let n=t.userData?.characterLod,s=n==="detail"||n==="overview"?n:t.name==="CharacterDetail"?"detail":t.name==="CharacterOverview"?"overview":null;s&&e[s].push(t)}),e}function zS(i){return i.parent||i.position.x!==0||i.position.y!==0||i.position.z!==0||i.quaternion.x!==0||i.quaternion.y!==0||i.quaternion.z!==0||i.quaternion.w!==1||i.scale.x!==1||i.scale.y!==1||i.scale.z!==1?!1:i.matrixAutoUpdate?!0:i.matrix.elements.every((e,t)=>e===(t%5===0?1:0))}function HS(i,e,t){if(e.detail.length!==1||e.overview.length!==0||e.detail[0]===i||!Array.isArray(t))return!1;let n=[];for(let s of new Set(t)){if(s===i)continue;if(!s||typeof s.traverse!="function")return!1;let r=vd(s);if(r.detail.length)return!1;for(let o of r.overview){if(o.parent!==s||!zS(s))return!1;n.push(o)}}return n.length!==1?!1:(i.add(n[0]),!0)}function Tm(i,{enterOverviewPx:e=180,enterDetailPx:t=220,additionalScenes:n=[]}={}){if(!i||typeof i.traverse!="function")throw new TypeError("Character LOD requires a scene root.");if(!Number.isFinite(e)||e<0||!Number.isFinite(t)||t<=e)throw new RangeError("Character LOD thresholds must be finite, non-negative and ordered.");let s=vd(i);HS(i,s,n)&&(s=vd(i));let r=s.detail[0],o=s.overview[0],a=s.detail.length===1&&s.overview.length===1&&r!==o&&!wm(r,o)&&!wm(o,r),c=a?r:i,l=a?o:null,h="detail",u=null;a&&(c.visible=!0,l.visible=!1);function d(f,{forceDetail:g=!1}={}){let x=Number.isFinite(f)&&f>=0;if(x&&(u=f),!a||!g&&!x)return!1;let p=g?"detail":h==="detail"&&f<e?"overview":h==="overview"&&f>t?"detail":h;return p===h?!1:(h=p,c.visible=p==="detail",l.visible=p==="overview",!0)}return{supported:a,detail:c,overview:l,update:d,get level(){return h},get projectedHeightPx(){return u},get stats(){return{supported:a,level:h,projectedHeightPx:u,enterOverviewPx:e,enterDetailPx:t}}}}var Lc={sky:1322043,fog:1322043,stone:4217191,stoneDark:2637387,bronze:11506800,cyan:7391696,ivory:14410719},Zi=7,GS=[1.66,1.44,1.22,1,.78,.56,.34],Nc=Math.PI*2;function St(i,e=[0,0,0],t=[0,0,0],n=[1,1,1]){let s=new Qe().compose(new D(...e),new Xt().setFromEuler(new wn(...t)),new D(...n));return i.applyMatrix4(s),i}function Uc(i,e){if(!i.length)return new Bt;let t=i.map(r=>r.index?r.toNonIndexed():r),n=wc(t,!1);if(new Set([...i,...t]).forEach(r=>r.dispose()),!n)throw new Error("\u821E\u53F0\u5E7E\u4F55\u5408\u4F75\u5931\u6557\u3002");let s=new xt(n,e);return s.castShadow=!0,s.receiveShadow=!0,s}function VS(){let e=new Uint8Array(65536),t=1747;for(let s=0;s<16384;s+=1){t=1664525*t+1013904223>>>0;let r=(t/4294967296-.5)*18;e[s*4]=116+r,e[s*4+1]=130+r,e[s*4+2]=138+r,e[s*4+3]=255}let n=new fi(e,128,128,pn);return n.colorSpace=Tt,n.wrapS=n.wrapT=Hn,n.repeat.set(3,3),n.magFilter=Nt,n.minFilter=fn,n.generateMipmaps=!0,n.needsUpdate=!0,n}function Dc(i,e,t,n,s=112){let r=new xt(new zo(i,e,s),t);return r.rotation.x=-Math.PI/2,r.position.y=n,r.receiveShadow=!0,r}function WS(i){let e=String(i.id),t=new Bt;t.name=`${e}-stand-in`;let n=new Ot({color:i.color||6069410,metalness:.35,roughness:.53}),s=new Ot({color:2440008,metalness:.35,roughness:.72}),r=new Ot({color:12700616,metalness:.12,roughness:.74}),o=[],a=[],c=[],l=/frigga|frigg|sif/i.test(e),h=/fenrir/i.test(e),u=/thor|heimdall|fenrir/i.test(e)?1.15:1;return a.push(St(new qt(.24*u,.17,.55,6),[0,1.04,0])),o.push(St(new qt(.18,l?.31:.22,l?.76:.28,7),[0,l?.53:.71,0])),l||(a.push(St(new qt(.078,.065,.57,5),[-.105,.32,0])),a.push(St(new qt(.078,.065,.57,5),[.105,.32,0]))),a.push(St(new Lt(.16,.095,.28),[-.105,.05,.065])),a.push(St(new Lt(.16,.095,.28),[.105,.05,.065])),[-1,1].forEach(d=>{o.push(St(new qt(.11,.07,.45,5),[d*.29*u,.99,.015],[0,0,d*.23])),c.push(St(new Ar(.082,0),[d*.34*u,.75,.015])),o.push(St(new Ar(.17,0),[d*.25*u,1.22,0],[0,.4,0],[1.1,.55,1]))}),c.push(St(new ko(h?.16:.14,1),[0,1.48,h?.03:0],[0,0,0],[1,1.15,1])),o.push(St(new qt(.155,.15,.12,6),[0,1.57,0])),h?(c.push(St(new zi(.1,.31,5),[0,1.46,.18],[Math.PI/2,0,0])),[-1,1].forEach(d=>{o.push(St(new zi(.08,.23,3),[d*.12,1.71,0])),o.push(St(new zi(.15,.32,4),[d*.19,1.27,-.06],[0,0,-d*.8]))}),a.push(St(new Lt(.32,.34,.14),[0,1.25,-.13]))):/loki/i.test(e)?[-1,1].forEach(d=>{let f=new Cr([new D(d*.11,1.59,0),new D(d*.23,1.79,-.015),new D(d*.23,1.98,.04),new D(d*.16,2.05,.12)]);o.push(new Ho(f,8,.035,4,!1))}):/valkyrie|valkyr|valkiri/i.test(e)?[-1,1].forEach(d=>o.push(St(new zi(.1,.27,3),[d*.21,1.58,0],[0,0,-d*1.05]))):/frigga|frigg|sif/i.test(e)?(o.push(St(new zi(.16,.14,7),[0,1.66,0])),a.push(St(new Lt(.27,.5,.1),[0,1.32,-.135]))):o.push(St(new Lt(.05,.2,.26),[0,1.66,0])),t.add(Uc(a,s),Uc(o,n),Uc(c,r)),t.userData.coloredMaterial=n,t}function Am({canvas:i,onSelect:e=()=>{},onStatus:t=()=>{},onMetrics:n=()=>{},onFrame:s=()=>{},initialQuality:r="balanced"}){if(!i)throw new Error("\u627E\u4E0D\u5230\u821E\u53F0\u756B\u5E03\u3002");let o;try{o=new yc({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(J){throw new Error(`\u6B64\u700F\u89BD\u5668\u7121\u6CD5\u555F\u7528 3D \u821E\u53F0\uFF0C\u8ACB\u4F7F\u7528\u652F\u63F4 WebGL \u7684 Safari \u6216 Chrome\u3002${J.message?` (${J.message})`:""}`)}o.outputColorSpace=Tt,o.toneMapping=jo,o.toneMappingExposure=1.18,o.shadowMap.enabled=!0,o.shadowMap.type=Hs;let a=new Ns;a.background=new Ye(Lc.sky),a.fog=new yo(Lc.fog,18,46);function c(){let J=new Ic,de=new Hr(o);try{return de.fromScene(J,.04,.1,100,{size:256})}finally{J.dispose(),de.dispose()}}let l=c();a.environment=l.texture,a.environmentIntensity=.65;let h=new $t(38,1,.1,90),u=new Ec(h,i);u.enableDamping=!0,u.dampingFactor=.075,u.enablePan=!1,u.minDistance=3,u.maxDistance=28,u.minPolarAngle=.035,u.maxPolarAngle=Math.PI*.475,u.rotateSpeed=.68,u.zoomSpeed=.75,u.touches.ONE=Qn.ROTATE,u.touches.TWO=Qn.DOLLY_PAN;let d=window.matchMedia("(prefers-reduced-motion: reduce)"),f=d.matches,g="balanced",x=!1,p=null,m="overview",v=!0,b=null,_=null,T=!0,w=!0,y=!0,S=()=>_?.invalidate(),P=1,C=1,I=null,H=[],$=[],L=!0,A=null,U=null,B=null,q=null,k=null,W=!1,K=null,oe=null,be=null,Y=new Map,he=[],ue=[],ze=new qo(12575471,2306620,1.4);a.add(ze);let me=new Yi(16769972,3.1);me.position.set(-5,13,7),me.castShadow=!0,me.shadow.mapSize.set(1024,1024),me.shadow.camera.left=-7,me.shadow.camera.right=7,me.shadow.camera.top=7,me.shadow.camera.bottom=-7,me.shadow.camera.near=1,me.shadow.camera.far=30,me.shadow.normalBias=.012,me.shadow.bias=-1e-4,a.add(me);let He=new Yi(8181486,1.35);He.position.set(5,7,-8),a.add(He);let gt=new Yi(15003887,.5);gt.position.set(5,4,10),a.add(gt);let $e=VS(),Je=new Ot({color:Lc.stone,map:$e,roughness:.94,metalness:.06}),et=new Ot({color:1583406,roughness:.91,metalness:.08}),ae=new Ot({color:9335120,metalness:.62,roughness:.52}),we=new Ot({vertexColors:!0,roughness:.82,metalness:.12}),_e=new xt(new Fs(150,150),new Ot({color:1650492,roughness:1}));_e.rotation.x=-Math.PI/2,_e.position.y=-.5,_e.receiveShadow=!0,a.add(_e);let De=[],ye=[],Ke=[],ke=[],st=new Bt;st.name="northern-council-stage";let lt=ym({onReady:S,onError:()=>t({kind:"error",phase:"materials",message:"\u5834\u5730\u7D30\u7BC0\u66AB\u6642\u7121\u6CD5\u8F09\u5165\uFF0C\u4ECD\u53EF\u7E7C\u7E8C\u64CD\u4F5C\u3002"})});function rt(J,de,Ne,Le=.12,M=.018){let N=Math.min(M,Ne*.22),V=J/2-N,z=de/2-N,O=Math.min(Le,V*.65,z*.65),ee=new pi([new le(-V+O,-z),new le(V-O,-z),new le(V,-z+O),new le(V,z-O),new le(V-O,z),new le(-V+O,z),new le(-V,z-O),new le(-V,-z+O)]);return new Hi(ee,{depth:Ne-N*2,bevelEnabled:N>0,bevelThickness:N,bevelSize:N,bevelSegments:1,steps:1,curveSegments:1}).rotateX(-Math.PI/2).translate(0,-Ne/2+N,0)}function G(J,de=8886683){let Ne=new Ye(de),Le=new Float32Array(J.attributes.position.count*3);for(let M=0;M<Le.length;M+=3)Le[M]=Ne.r,Le[M+1]=Ne.g,Le[M+2]=Ne.b;J.setAttribute("color",new At(Le,3)),ke.push(J)}function ve(J,de,Ne,Le,M,N,V,z=.012){let O=Le-de,ee=M-Ne;J.push(St(new Lt(Math.hypot(O,ee),z,N),[(de+Le)/2,V,(Ne+M)/2],[0,-Math.atan2(ee,O),0]))}ye.push(St(new qt(5.24,5.4,.44,28),[0,-.27,0])),De.push(St(new qt(5.1,5.18,.09,28),[0,-.005,0]));for(let J=0;J<Zi*2;J+=1){let de=-Math.PI/2+(J+.5)/(Zi*2)*Nc,Ne=-de+Math.PI/2;De.push(St(rt(2,.24,.13,.055),[Math.cos(de)*5.02,.045,Math.sin(de)*5.02],[0,Ne,0])),Ke.push(St(new Lt(1.64,.012,.024),[Math.cos(de)*5.04,.116,Math.sin(de)*5.04],[0,Ne,0]))}ye.push(St(new qt(2.31,2.4,.13,28),[0,.095,0])),Ke.push(St(new qt(2.315,2.315,.018,28,1,!0),[0,.145,0]));let Re=[[-.2,.5],[-.48,1.36],[-.75,1.91],[-.62,2.13],[.62,2.13],[.75,1.91],[.48,1.36],[.2,.5]];for(let J=0;J<Zi;J+=1){let de=-Math.PI/2+J/Zi*Nc,Ne=-de+Math.PI/2,Le=new pi(Re.map(([O,ee])=>new le(O,-ee))),M=new Hi(Le,{depth:.027,bevelEnabled:!1,steps:1,curveSegments:1});M.rotateX(-Math.PI/2),De.push(St(M,[0,.161,0],[0,Ne,0]));let N=(O,ee)=>new D(O,0,ee).applyAxisAngle(new D(0,1,0),Ne),V=N(-.49,2.04),z=N(.49,2.04);ve(Ke,V.x,V.z,z.x,z.z,.027,.196);for(let O of[-1,1]){let ee=N(O*.17,.76),fe=N(O*.34,1.33);ve(Ke,ee.x,ee.z,fe.x,fe.z,.018,.196)}G(St(rt(.12,.08,.009,.025,0),[Math.cos(de)*1.73,.196,Math.sin(de)*1.73],[0,Ne,0]),6266026),J!==3&&ye.push(St(rt(.74,.3,.055,.08),[Math.cos(de)*2.62,.066,Math.sin(de)*2.62],[0,Ne,0]))}Ke.push(St(new qt(.43,.43,.045,7),[0,.188,0])),G(St(new qt(.32,.32,.015,7),[0,.219,0]),14537908);for(let J=0;J<Zi;J+=1){let de=-Math.PI/2+J/Zi*Nc,Ne=Math.cos(de)*3.64,Le=Math.sin(de)*3.64,M=GS[J];he.push(new D(Ne,M+.075,Le));let N=-de-Math.PI/2;if(J===3){let ee=_m({height:M,materials:lt});ee.position.set(Ne,0,Le),ee.rotation.y=N,oe=bm({height:M,x:Ne,z:Le,heading:N}),ee.add(oe.group),st.add(ee);continue}let V=(ee,fe,pe,Ie)=>{let Be=new D(fe,0,Ie).applyAxisAngle(new D(0,1,0),N);return St(ee,[Ne+Be.x,pe,Le+Be.z],[0,N,0])};De.push(V(rt(1.66,1.7,.12,.23),0,.072,0)),ye.push(V(rt(1.48,1.53,.065,.2),0,.161,0)),ye.push(V(rt(1.3,1.38,M-.15,.2,.025),0,(M+.15)/2-.035,0)),Ke.push(V(rt(1.55,1.59,.026,.19,.004),0,M-.037,0)),De.push(V(rt(1.58,1.62,.11,.2,.02),0,M+.02,0));let z=.18,O=M-.085;for(let ee of[-1,1])Ke.push(V(new Lt(.032,O-z,.022),ee*.48,(O+z)/2,.697));for(let ee of[z,O])Ke.push(V(new Lt(.99,.032,.022),0,ee,.697));for(let ee=0;ee<=J;ee+=1){let fe=(ee-J/2)*.068;G(V(new Lt(.024,Math.min(.105,O-z-.022),.014),fe,(O+z)/2,.713))}for(let ee of[-1,1])G(V(new Lt(.15,.006,.022),ee*.59,M+.078,-.65),14537908),G(V(new Lt(.022,.006,.13),ee*.66,M+.078,-.59),14537908)}[["slate-masonry",De,Je],["basalt-foundation",ye,et],["bronze-framework",Ke,ae],["stone-and-chalk-insets",ke,we]].forEach(([J,de,Ne])=>{let Le=Uc(de,Ne);Le.name=J,Ne===we&&(Le.castShadow=!1),st.add(Le)}),a.add(st);function Ue(){let J=Y.get("fenrir");J&&(J.proxy.visible=!B||!L,B&&(B.visible=L),S())}async function se(){if(A||x)return A;W=!1,t({kind:"loading",phase:"model",message:"\u6B63\u5728\u8F09\u5165\u82AC\u91CC\u723E 3D \u6A23\u672C\u2026"});let J=new Cc;J.setDecoderPath(new URL("./assets/draco/",document.baseURI).href),J.setWorkerLimit(1),U=J;let de=new Tc().setDRACOLoader(J),Ne=new URL("./assets/fenrir.glb",document.baseURI);return Ne.searchParams.set("v",Pc),A=de.loadAsync(Ne.href).then(Le=>{if(x){Ti(Le.scene);return}let M=Tm(Le.scene,{additionalScenes:Le.scenes}),N=new yn().setFromObject(M.detail),V=N.getSize(new D),z=N.getCenter(new D);if(!Number.isFinite(V.y)||V.y<=0)throw new Error("\u6A21\u578B\u6C92\u6709\u53EF\u898B\u7684\u5E7E\u4F55\u7BC4\u570D\u3002");let O=1.82/V.y,ee=new Bt;ee.name="fenrir-browser-sample",ee.scale.setScalar(O),Le.scene.position.sub(new D(z.x,N.min.y,z.z)),Le.scene.traverse(pe=>{pe.isMesh&&(pe.castShadow=!0,pe.receiveShadow=!0,(Array.isArray(pe.material)?pe.material:[pe.material]).forEach(Be=>{Be.map&&(Be.map.anisotropy=Math.min(4,o.capabilities.getMaxAnisotropy()))}))}),ee.add(Le.scene),ee.updateMatrixWorld(!0),K=Mm(M.detail),q=M,k=V.clone().multiplyScalar(O),B=ee;let fe=Y.get("fenrir");fe&&fe.root.add(ee),Ue(),t({kind:"loaded",phase:"model",message:"\u82AC\u91CC\u723E 3D \u6A23\u672C\u5DF2\u8F09\u5165",source:"adopted-blender-asset"})}).catch(Le=>{W=!0,A=null,x||t({kind:"error",phase:"model",message:"\u82AC\u91CC\u723E\u6A23\u672C\u66AB\u6642\u7121\u6CD5\u8F09\u5165\uFF0C\u5148\u986F\u793A\u89D2\u8272\u8349\u6A21\u3002",detail:Le.message})}).finally(()=>{J.dispose(),U===J&&(U=null)}),A}function Ze(J){let de=new Bt;de.name=`character-${J.id}`,de.userData.characterId=String(J.id);let Ne=WS(J);de.add(Ne);let Le=new an({color:Lc.cyan,transparent:!0,opacity:.7,depthWrite:!1}),M=Dc(.4,.48,Le,.016,42);de.add(M);let N=(ee,fe,pe,Ie,Be)=>{let nt=new an({color:pe,transparent:!0,opacity:Ie,depthWrite:!1}),ct=Dc(ee,fe,nt,Be,40);return ct.visible=!1,ct.renderOrder=3,de.add(ct),ct},V={active:N(.515,.585,14859127,.95,.03),target:N(.635,.705,15567227,.95,.035),acted:N(.525,.555,7440273,.54,.029),dead:new Bt};V.dead.name="death-status-marker";let z=new an({color:9544361,transparent:!0,opacity:.65,depthWrite:!1});V.dead.add(Dc(.375,.425,z,.032,32)),[-1,1].forEach(ee=>{let fe=new xt(new Lt(.3,.012,.028),z);fe.position.y=.038,fe.rotation.y=ee*Math.PI/4,V.dead.add(fe)}),V.dead.visible=!1,de.add(V.dead),a.add(de);let O={root:de,proxy:Ne,halo:M,cues:V,target:new D,initialized:!1,character:J};return Y.set(String(J.id),O),String(J.id)==="fenrir"&&(B&&de.add(B),L&&se(),Ue()),O}function Pe({characters:J=H,seatOrder:de,selectedId:Ne=p,combat:Le=be}={}){let M=p;H=J,p=Ne==null?null:String(Ne),be=Le==null?null:{activeId:Le.activeId==null?null:String(Le.activeId),targetId:Le.targetId==null?null:String(Le.targetId),targetIds:[...new Set((Array.isArray(Le.targetIds)?Le.targetIds:Le.targetId==null?[]:[Le.targetId]).filter(O=>O!=null).map(String))],actedIds:new Set([...Le.actedIds||[]].map(String))};let N=new Set(H.map(O=>String(O.id)));for(let[O,ee]of Y)N.has(O)||(F(fe=>fe.actorId===O||fe.targetId===O),a.remove(ee.root),O==="fenrir"&&B&&B.removeFromParent(),Ti(ee.root),Y.delete(O));let V=de??($.length?$:H.map(O=>O.id)),z=[...new Set(V.map(String))].filter(O=>N.has(O));H.forEach(O=>{z.includes(String(O.id))||z.push(String(O.id))}),$=z.slice(0,Zi),H.slice(0,Zi).forEach(O=>{let ee=String(O.id),fe=Y.get(ee)||Ze(O);fe.character=O,fe.target.copy(he[Math.min(z.indexOf(ee),Zi-1)]);let pe=Number(O.hp)<=0,Ie=!pe&&be?.activeId===ee;fe.halo.visible=!be&&ee===p,fe.cues.active.visible=Ie,fe.cues.target.visible=!!be?.targetIds.includes(ee),fe.cues.acted.visible=!!be?.actedIds.has(ee)&&!Ie,fe.cues.dead.visible=pe;let Be=fe.proxy.userData.coloredMaterial.color;Be.set(O.color||6069410),pe&&Be.lerp(new Ye(6648699),.78),(!fe.initialized||f)&&(fe.root.position.copy(fe.target),fe.root.rotation.y=Math.atan2(-fe.target.x,-fe.target.z),fe.initialized=!0)}),Ue(),m==="focus"&&(v||p!==M)&&X("focus"),S()}function Se(J,de){let Ne=J.clone().sub(de).normalize(),Le=new D().crossVectors(h.up,Ne).normalize(),M=new D().crossVectors(Ne,Le),N=Math.tan(Cn.degToRad(h.fov/2)),V=N*P/C,z=J.distanceTo(de);for(let O=0;O<28;O+=1){let ee=O/28*Nc;for(let fe of[-.5,3.9]){let pe=new D(Math.cos(ee)*5.5,fe,Math.sin(ee)*5.5).sub(de),Ie=pe.dot(Ne);z=Math.max(z,Ie+Math.abs(pe.dot(Le))*1.1/V,Ie+Math.abs(pe.dot(M))*1.1/N)}}return de.clone().addScaledVector(Ne,z)}function R(){return Se(new D(8.7,9.1,13.1),new D(0,.7,0))}function E(J,de){let Ne=J.distanceTo(de);u.maxDistance=Math.max(28,Ne*1.25),a.fog.near=Math.max(18,Ne),a.fog.far=Math.max(46,Ne+28),f?(h.position.copy(J),u.target.copy(de),u.update(),I=null):I={position:J,target:de},S()}function X(J){if(b=null,v=!0,m=["overview","top","focus"].includes(J)?J:"overview",m==="top"){let de=new D(0,.4,0);E(Se(new D(.57,20.5,.57),de),de)}else if(m==="focus"){let de=Y.get(p)||Y.values().next().value;if(!de)return E(R(),new D(0,.7,0));let Ne=P<C,Le=$.indexOf(String(de.character.id))===3,M=de.target.clone().add(new D(0,Le?Ne?.1:.25:Ne?.85:.95,0)),N=new D(de.target.x,0,de.target.z).normalize(),V=new D(-N.z,0,N.x),z=Le?Ne?-6.6:-5.7:Ne?-3.85:-3.3,O=M.clone().addScaledVector(N,z).addScaledVector(V,Le?2:.85).add(new D(0,Le?1.65:1,0));E(O,M)}else E(R(),new D(0,.7,0))}function ce(){X("overview")}function re(J){g=J==="low"?"low":"balanced",o.setPixelRatio(Math.min(window.devicePixelRatio||1,g==="low"?1:1.65)),o.shadowMap.enabled=g!=="low",me.castShadow=g!=="low",Me()}function Te(J){return L=!!J,L&&!A&&se(),Ue(),{enabled:L,loaded:!!B,failed:W}}function Me(){if(x)return;let J=i.getBoundingClientRect(),de=P!==Math.max(1,J.width)||C!==Math.max(1,J.height);P=Math.max(1,J.width),C=Math.max(1,J.height),o.setSize(P,C,!1),h.aspect=P/C,h.updateProjectionMatrix(),de&&v&&X(m),S()}let j=new D;function ie(){return[...Y].map(([J,de])=>(j.copy(de.root.position).add(new D(0,J==="loki"?2.18:1.99,0)),j.project(h),{id:J,x:(j.x*.5+.5)*P,y:(-j.y*.5+.5)*C,visible:j.z>-1&&j.z<1&&Math.abs(j.x)<1.1&&Math.abs(j.y)<1.15}))}function Ee(J){J.line.removeFromParent(),J.pulse.removeFromParent(),J.line.geometry.dispose(),J.line.material.dispose(),J.pulse.geometry.dispose(),J.pulse.material.dispose()}function F(J=()=>!0){for(let de=ue.length-1;de>=0;de-=1)J(ue[de])&&(Ee(ue[de]),ue.splice(de,1))}function ne({actorId:J,targetId:de,killed:Ne=!1}={},Le=performance.now()){if(x||J==null||de==null)return;let M=String(J),N=String(de);if(!Y.has(M)||!Y.has(N))return;for(;ue.length>=3;)Ee(ue.shift());let V=20,z=new vt,O=new At(new Float32Array((V+1)*3),3);z.setAttribute("position",O);let ee=Ne?15699326:14794108,fe=new Bi(z,new fs({color:ee,transparent:!0,opacity:.85,depthWrite:!1}));fe.frustumCulled=!1,fe.renderOrder=4,a.add(fe);let pe=Dc(.72,.78,new an({color:15567227,transparent:!0,opacity:.72,depthWrite:!1}),.052,40);pe.renderOrder=4,Y.get(N).root.add(pe);let Ie={actorId:M,targetId:N,line:fe,pulse:pe,positions:O,segments:V,started:Le,duration:f?350:Ne?850:650};ue.push(Ie),Ce(Ie,0),S()}function Q({actorId:J,targets:de=[]}={}){if(x||J==null||!Array.isArray(de))return;let Ne=performance.now(),Le=new Set;for(let M of de){if(Le.size>=2)break;if(M?.targetId==null)continue;let N=String(M.targetId);Le.has(N)||(Le.add(N),ne({actorId:J,targetId:N,killed:!!M.killed},Ne))}}let Ae=new D,xe=new D;function Ce(J,de){let Ne=Y.get(J.actorId),Le=Y.get(J.targetId);if(!(!Ne||!Le)){Ae.copy(Ne.root.position),Ae.y+=1.02,xe.copy(Le.root.position),xe.y+=.92;for(let M=0;M<=J.segments;M+=1){let N=M/J.segments;J.positions.setXYZ(M,Cn.lerp(Ae.x,xe.x,N),Cn.lerp(Ae.y,xe.y,N)+Math.sin(N*Math.PI)*.48,Cn.lerp(Ae.z,xe.z,N))}if(J.positions.needsUpdate=!0,f)J.line.geometry.setDrawRange(0,J.segments+1),J.line.material.opacity=.65,J.pulse.scale.setScalar(1),J.pulse.material.opacity=.55;else{J.line.geometry.setDrawRange(0,Math.min(J.segments+1,Math.ceil(Math.min(1,de/.32)*(J.segments+1))));let M=de<.45?1:Math.max(0,(1-de)/.55);J.line.material.opacity=.85*M,J.pulse.scale.setScalar(.88+Math.sin(Math.min(1,de)*Math.PI/2)*.26),J.pulse.material.opacity=.72*Math.sin(de*Math.PI)}}}function Xe(J){for(let de=ue.length-1;de>=0;de-=1){let Ne=ue[de],Le=(J-Ne.started)/Ne.duration;Le>=1||!Y.has(Ne.actorId)||!Y.has(Ne.targetId)?(Ee(Ne),ue.splice(de,1)):Ce(Ne,Math.max(0,Le))}}let ot=new Ko,ge=new le,We=new Map,tt=!1;function Oe(J){J.button!==0&&J.pointerType==="mouse"||(We.set(J.pointerId,{x:J.clientX,y:J.clientY,time:performance.now()}),We.size>1&&(tt=!0))}function yt(J){let de=We.get(J.pointerId);We.delete(J.pointerId);let Ne=de&&!tt&&Math.hypot(J.clientX-de.x,J.clientY-de.y)<7&&performance.now()-de.time<900;if(We.size===0&&(tt=!1),!Ne)return;let Le=i.getBoundingClientRect();ge.set((J.clientX-Le.left)/Le.width*2-1,-(J.clientY-Le.top)/Le.height*2+1),ot.setFromCamera(ge,h);let M=[];for(let z of Y.values())z.root.traverseVisible(O=>{O.isMesh&&M.push(O)});let V=ot.intersectObjects(M,!1).find(z=>{let O=z.object;for(;O;){if(!O.visible)return!1;O=O.parent}return!0});if(V){let z=V.object;for(;z&&!z.userData.characterId;)z=z.parent;z?.userData.characterId&&e(z.userData.characterId)}}function Ht(J){We.delete(J.pointerId),We.size||(tt=!1)}function Xn(){I=null,b={position:h.position.clone(),target:u.target.clone()},S()}function Zr(){b&&(h.position.distanceToSquared(b.position)>1e-8||u.target.distanceToSquared(b.target)>1e-8)&&(v=!1),S()}function Ks(){b=null,S()}function _a(J){f=J.matches,S()}function ai(){let J=!document.hidden&&T&&w;J||(y=!0),_?.setActive(J)}function Kr(){ai(),S()}function li(J){J.preventDefault(),w=!1,ai(),Ti(a),B&&!B.parent&&Ti(B),a.environment=null,l?.dispose(),l=null,me.shadow.map?.dispose(),me.shadow.mapPass?.dispose(),me.shadow.map=me.shadow.mapPass=null,t({kind:"error",phase:"webgl",message:"\u624B\u6A5F\u66AB\u6642\u91CB\u653E\u4E86 3D \u8CC7\u6E90\uFF0C\u6B63\u5728\u7B49\u5019\u6062\u5FA9\u3002"})}function Js(){x||(l=c(),a.environment=l.texture,me.shadow.needsUpdate=!0,w=!0,ai(),S(),t({kind:"loaded",phase:"webgl",message:"3D \u821E\u53F0\u5DF2\u6062\u5FA9\u3002"}))}i.addEventListener("pointerdown",Oe,{passive:!0}),i.addEventListener("pointerup",yt,{passive:!0}),i.addEventListener("pointercancel",Ht,{passive:!0}),i.addEventListener("webglcontextlost",li,!1),i.addEventListener("webglcontextrestored",Js,!1),u.addEventListener("start",Xn),u.addEventListener("change",Zr),u.addEventListener("end",Ks),d.addEventListener?.("change",_a);let Jr=typeof ResizeObserver<"u"?new ResizeObserver(Me):null;Jr?.observe(i.parentElement||i),window.addEventListener("resize",Me,{passive:!0}),document.addEventListener("visibilitychange",ai),window.addEventListener("pageshow",Kr);let jr=typeof IntersectionObserver<"u"?new IntersectionObserver(J=>{T=J.some(de=>de.isIntersecting&&de.intersectionRatio>0),ai()}):null;jr?.observe(i);let wi=performance.now(),ys=0,Pn=new D;function vs(){if(!q?.supported||!k)return;let J=Y.get("fenrir");if(!J||!B?.visible)return;h.updateMatrixWorld(),J.root.updateWorldMatrix(!0,!1);let de=1/0,Ne=-1/0,Le=-1/0,M=1/0;for(let V of[-k.x/2,k.x/2])for(let z of[0,k.y])for(let O of[-k.z/2,k.z/2]){if(Pn.set(V,z,O).applyMatrix4(J.root.matrixWorld).project(h),![Pn.x,Pn.y,Pn.z].every(Number.isFinite)||Pn.z<-1||Pn.z>1){q.update(NaN,{forceDetail:!0});return}de=Math.min(de,Pn.x),Ne=Math.max(Ne,Pn.x),Le=Math.max(Le,Pn.y),M=Math.min(M,Pn.y)}let N=Math.max((Ne-de)*P/2,(Le-M)*C/2);q.update(N,{forceDetail:m==="focus"&&v&&p==="fenrir"})}function Vc(J,de){if(x)return!1;y&&(wi=J,ys=0,y=!1);let Ne=f?1:1-Math.exp(-7.5*de),Le=!1;for(let V of Y.values()){V.root.position.lerp(V.target,Ne);let z=Math.atan2(-V.target.x,-V.target.z),O=Math.atan2(Math.sin(z-V.root.rotation.y),Math.cos(z-V.root.rotation.y));V.root.rotation.y+=O*Ne,V.root.position.distanceToSquared(V.target)<1e-8?V.root.position.copy(V.target):Le=!0,Math.abs(O)<1e-5?V.root.rotation.y=z:Le=!0}let M=Y.get($[3]);oe?.update(M,K,M?.character.id==="fenrir"&&!!B?.visible),I&&(h.position.lerp(I.position,Ne),u.target.lerp(I.target,Ne),h.position.distanceToSquared(I.position)<1e-4&&u.target.distanceToSquared(I.target)<1e-4&&(h.position.copy(I.position),u.target.copy(I.target),I=null)),Xe(J),u.dampingFactor=1-Math.pow(1-.075,de*60);let N=u.update();return vs(),o.render(a,h),s(),ys+=1,J-wi>1500&&(n({fps:Math.round(ys*1e3/(J-wi)),drawCalls:o.info.render.calls,triangles:o.info.render.triangles,pixelRatio:o.getPixelRatio(),quality:g,modelLoaded:!!B,idle:!1}),wi=J,ys=0),Le||!!I||N||ue.length>0}function Ti(J){let de=new Set,Ne=new Set,Le=new Set;J.traverse(M=>{M.geometry&&de.add(M.geometry),(M.material?Array.isArray(M.material)?M.material:[M.material]:[]).forEach(V=>Ne.add(V))}),Ne.forEach(M=>Object.values(M).forEach(N=>{N?.isTexture&&Le.add(N)})),de.forEach(M=>M.dispose()),Le.forEach(M=>M.dispose()),Ne.forEach(M=>M.dispose())}function xa(){x||(x=!0,lt.cancel(),_?.dispose(),Jr?.disconnect(),jr?.disconnect(),window.removeEventListener("resize",Me),document.removeEventListener("visibilitychange",ai),window.removeEventListener("pageshow",Kr),i.removeEventListener("pointerdown",Oe),i.removeEventListener("pointerup",yt),i.removeEventListener("pointercancel",Ht),i.removeEventListener("webglcontextlost",li),i.removeEventListener("webglcontextrestored",Js),d.removeEventListener?.("change",_a),u.removeEventListener("start",Xn),u.removeEventListener("change",Zr),u.removeEventListener("end",Ks),u.dispose(),U?.dispose(),U=null,F(),a.environment=null,l?.dispose(),Ti(a),B&&!B.parent&&Ti(B),o.dispose(),Y.clear())}return _=Em({render:Vc,maxFps:()=>g==="low"?30:60,onIdle:()=>{y=!0,n({idle:!0,quality:g,drawCalls:o.info.render.calls,triangles:o.info.render.triangles,pixelRatio:o.getPixelRatio(),modelLoaded:!!B})}}),ai(),Me(),h.position.copy(R()),u.target.set(0,.7,0),u.update(),re(r),ce(),S(),t({kind:"loaded",phase:"arena",message:"\u4E03\u5E2D\u821E\u53F0\u5DF2\u5C31\u7DD2\u3002"}),{update:Pe,setView:X,resetCamera:ce,setQuality:re,setFenrirEnabled:Te,resize:Me,getLabels:ie,playAttack:ne,playAttackBatch:Q,dispose:xa}}var Sd="fenrir-room-session-v1";var Cm=new Set(["thor","sif","loki","valkyrie","heimdall","frigga","fenrir"]);function Im(i=""){let e;try{e=new URL(String(i).trim()||globalThis.location?.origin)}catch{throw new Error("\u8ACB\u586B\u5BEB\u5B8C\u6574\u7684 HTTPS \u9023\u7DDA\u670D\u52D9\u7DB2\u5740\uFF1B\u540C\u4E00\u7DB2\u7AD9\u53EF\u7559\u767D\u3002")}let t=["localhost","127.0.0.1"].includes(e.hostname);if(e.protocol!=="https:"&&!(e.protocol==="http:"&&t))throw new Error("\u9023\u7DDA\u670D\u52D9\u9700\u4F7F\u7528 HTTPS\uFF1B\u672C\u6A5F\u6E2C\u8A66\u53EF\u4F7F\u7528 localhost \u6216 127.0.0.1\u3002");if(e.username||e.password||e.search||e.hash||!["","/"].includes(e.pathname))throw new Error("\u8ACB\u53EA\u586B\u670D\u52D9\u7684\u6839\u7DB2\u5740\uFF0C\u4E0D\u542B\u8DEF\u5F91\u3001\u5E33\u865F\u3001\u53C3\u6578\u6216\u623F\u9593\u8CC7\u6599\u3002");return e.origin}function Rm(i){if(!i||typeof i!="object"||Array.isArray(i))return null;try{let e=Im(i.apiBase),t=String(i.roomCode||"").trim().toUpperCase();if(!/^[A-Z0-9]{6,8}$/.test(t)||!/^[A-Za-z0-9_-]{20,256}$/.test(i.token||"")||i.role!=="host"&&i.role!=="player")return null;let n=i.role==="host"?null:i.characterId;return i.role==="player"&&!Cm.has(n)?null:{apiBase:e,roomCode:t,token:i.token,role:i.role,characterId:n}}catch{return null}}function Md(i){return!i?.status&&i?.name!=="RoomSessionChanged"}function Pm({onSnapshot:i=()=>{},onStatus:e=()=>{},onSession:t=()=>{}}={}){let n=null,s=0,r=!1,o=null,a=null,c=-1,l=null,h=!1,u=new Set,d=()=>{try{return Rm(JSON.parse(globalThis.localStorage?.getItem(Sd)||"null"))}catch{return null}},f=()=>{try{n?globalThis.localStorage?.setItem(Sd,JSON.stringify(n)):globalThis.localStorage?.removeItem(Sd)}catch{}},g=(A,U)=>{r||e({state:A,message:U})},x=()=>n?{...n}:null,p=()=>Object.assign(new Error("\u623F\u9593\u5DF2\u5207\u63DB\uFF0C\u8ACB\u4EE5\u76EE\u524D\u756B\u9762\u7E7C\u7E8C\u3002"),{name:"RoomSessionChanged"}),m=A=>!r&&A===s;function v(){clearTimeout(o),o=null;for(let A of u)A.abort();u.clear(),a=null}function b(A,{notify:U=!0,keepStored:B=!1}={}){s+=1,v(),n=A,c=-1,l=null,B||f(),U&&!r&&t(x())}function _(){if(r)throw new Error("\u9023\u7DDA\u5DF2\u7D50\u675F\uFF0C\u8ACB\u91CD\u65B0\u8F09\u5165\u7DB2\u9801\u3002");if(!n)throw new Error("\u8ACB\u5148\u5EFA\u7ACB\u6216\u52A0\u5165\u623F\u9593\u3002");return n}async function T(A,U,{token:B,method:q="GET",body:k,ticket:W=s}={}){let K=new AbortController;u.add(K);let oe=setTimeout(()=>K.abort(),15e3);try{let be=await fetch(A+U,{method:q,headers:{Accept:"application/json",...k===void 0?{}:{"Content-Type":"application/json"},...B?{Authorization:`Bearer ${B}`}:{}},...k===void 0?{}:{body:JSON.stringify(k)},signal:K.signal,credentials:"omit",cache:"no-store",referrerPolicy:"no-referrer"});if(!m(W))throw p();let Y;try{Y=await be.json()}catch{throw Object.assign(new Error("\u9023\u7DDA\u670D\u52D9\u6C92\u6709\u56DE\u50B3\u6709\u6548\u8CC7\u6599\uFF0C\u8ACB\u78BA\u8A8D\u670D\u52D9\u7DB2\u5740\u3002"),{status:be.status||502})}if(!m(W))throw p();if(!be.ok)throw Object.assign(new Error(Y?.message||"\u9023\u7DDA\u670D\u52D9\u66AB\u6642\u7121\u6CD5\u5B8C\u6210\u64CD\u4F5C\u3002"),{status:be.status,code:Y?.error});return Y}catch(be){throw m(W)?be.name==="AbortError"?new Error("\u9023\u7DDA\u903E\u6642\uFF0C\u6B63\u5728\u7B49\u5019\u9023\u7DDA\u6062\u5FA9\u3002"):be:p()}finally{clearTimeout(oe),u.delete(K)}}function w(A,U){if(m(U)){if(!A||typeof A!="object"||!Number.isSafeInteger(A.revision)||!A.combat||A.roomCode!==n?.roomCode)throw new Error("\u623F\u9593\u72C0\u614B\u7121\u6548\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u670D\u52D9\u7248\u672C\u3002");A.revision<c||(c=A.revision,i(A),g("online","\u5DF2\u9023\u7DDA\uFF0C\u623F\u9593\u9032\u5EA6\u6703\u81EA\u52D5\u540C\u6B65\u3002"))}}function y(A,U){!m(U)||A.name==="RoomSessionChanged"||([401,404].includes(A.status)?(b(null),g("error",A.status===404?"\u627E\u4E0D\u5230\u9019\u500B\u623F\u9593\uFF0C\u8ACB\u91CD\u65B0\u52A0\u5165\u6216\u5EFA\u7ACB\u623F\u9593\u3002":"\u623F\u9593\u8EAB\u5206\u5DF2\u5931\u6548\uFF0C\u8ACB\u91CD\u65B0\u52A0\u5165\u623F\u9593\u3002")):Md(A)?g("offline","\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6062\u5FA9\u7DB2\u8DEF\u5F8C\u6703\u81EA\u52D5\u63A5\u56DE\u623F\u9593\u3002"):g("error",A.message))}function S(){clearTimeout(o),!r&&n&&(o=setTimeout(()=>{P().catch(()=>{})},5e3))}async function P(){if(!n||r)return null;if(a)return a;let A=x(),U=s,B=(async()=>{try{let q=await T(A.apiBase,`/api/rooms/${A.roomCode}/snapshot`,{token:A.token,ticket:U});return w(q,U),q}catch(q){throw y(q,U),q}finally{m(U)&&(a=null,S())}})();return a=B,B}async function C(A,U,B){if(r)throw new Error("\u9023\u7DDA\u5DF2\u7D50\u675F\uFF0C\u8ACB\u91CD\u65B0\u8F09\u5165\u7DB2\u9801\u3002");if(n||h)throw new Error("\u8ACB\u5148\u96E2\u958B\u76EE\u524D\u623F\u9593\uFF0C\u518D\u5EFA\u7ACB\u6216\u52A0\u5165\u53E6\u4E00\u500B\u623F\u9593\u3002");let q=Im(A),k=s;h=!0,g("connecting","\u6B63\u5728\u9023\u63A5\u623F\u9593\u2026");try{let W=await T(q,U,{method:"POST",body:B,ticket:k}),K=Rm({...W,apiBase:q});if(!K||!Number.isSafeInteger(W.snapshot?.revision)||!W.snapshot?.combat||W.snapshot.roomCode!==K.roomCode)throw new Error("\u623F\u9593\u8EAB\u5206\u8CC7\u6599\u7121\u6548\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u670D\u52D9\u7248\u672C\u3002");return b(K),w(W.snapshot,s),S(),W.snapshot}catch(W){throw m(k)&&g(Md(W)?"offline":"error",W.message),W}finally{h=!1}}let I=async()=>{if(r)return null;if(!n){let A=d();if(!A)return g("idle","\u76EE\u524D\u4F7F\u7528\u55AE\u6A5F\u6A21\u5F0F\u3002"),null;b(A),g("connecting","\u6B63\u5728\u63A5\u56DE\u4E0A\u6B21\u7684\u623F\u9593\u2026")}return P()},H=()=>{globalThis.document?.visibilityState==="visible"&&n&&P().catch(()=>{})},$=()=>{n&&(g("connecting","\u7DB2\u8DEF\u5DF2\u6062\u5FA9\uFF0C\u6B63\u5728\u540C\u6B65\u623F\u9593\u2026"),P().catch(()=>{}))},L=()=>{n&&g("offline","\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6062\u5FA9\u7DB2\u8DEF\u5F8C\u6703\u81EA\u52D5\u63A5\u56DE\u623F\u9593\u3002")};return globalThis.document?.addEventListener("visibilitychange",H),globalThis.window?.addEventListener("online",$),globalThis.window?.addEventListener("offline",L),{create:(A="")=>C(A,"/api/rooms",{}),join:(A="",U,B)=>{let q=String(U||"").trim().toUpperCase();return/^[A-Z0-9]{6,8}$/.test(q)?Cm.has(B)?C(A,`/api/rooms/${q}/join`,{characterId:B}):Promise.reject(new Error("\u8ACB\u9078\u64C7\u8981\u64CD\u4F5C\u7684\u89D2\u8272\u3002")):Promise.reject(new Error("\u8ACB\u8F38\u5165 6\u20138 \u78BC\u7684\u623F\u9593\u4EE3\u78BC\u3002"))},resume:I,leave({forget:A=!1}={}){r||(b(null,{keepStored:!A}),g("idle","\u5DF2\u66AB\u96E2\u623F\u9593\uFF0C\u53EF\u8FD4\u56DE\u4E0A\u6B21\u623F\u9593\uFF1B\u55AE\u6A5F\u9032\u5EA6\u4ECD\u4FDD\u7559\u3002"))},async command(A,U={},B){let q={..._()},k=s;if(l)throw new Error("\u4E0A\u4E00\u500B\u64CD\u4F5C\u6B63\u5728\u78BA\u8A8D\uFF0C\u8ACB\u7A0D\u5019\u3002");if(!Number.isSafeInteger(B)||B<0)throw new Error("\u623F\u9593\u9032\u5EA6\u5C1A\u672A\u540C\u6B65\uFF0C\u8ACB\u7A0D\u5019\u518D\u64CD\u4F5C\u3002");let W=Symbol("room-command");l=W;let K={commandId:crypto.randomUUID(),expectedRevision:B,type:A,payload:U};try{let oe;for(let be=0;be<2;be+=1)try{oe=await T(q.apiBase,`/api/rooms/${q.roomCode}/commands`,{token:q.token,method:"POST",body:K,ticket:k});break}catch(Y){if(!Md(Y)||be===1||!m(k))throw Y}return w(oe,k),oe}catch(oe){if(oe.status===409&&m(k))try{await P()}catch{}throw y(oe,k),oe}finally{l===W&&(l=null),m(k)&&S()}},getSession:x,destroy(){r=!0,s+=1,v(),globalThis.document?.removeEventListener("visibilitychange",H),globalThis.window?.removeEventListener("online",$),globalThis.window?.removeEventListener("offline",L)}}}var Oc=["axe","flame"],XS={axe:"\u6230\u65A7",flame:"\u708E\u528D"},qS=()=>({power:0,magic:0,weapons:[]}),YS={accepted:"\u4EA4\u6613\u5B8C\u6210",declined:"\u5C0D\u65B9\u5A49\u62D2",cancelled:"\u5DF2\u53D6\u6D88"},Lm={items_changed:"\u7269\u54C1\u5DF2\u8B8A\u66F4\uFF0C\u63D0\u6848\u5931\u6548",battle_started:"\u5DF2\u958B\u6230\uFF0C\u672A\u5B8C\u6210\u63D0\u6848\u53D6\u6D88",cancelled_by_sender:"\u63D0\u6848\u8005\u5DF2\u53D6\u6D88",declined_by_recipient:"\u6536\u4EF6\u8005\u5DF2\u5A49\u62D2",trade_limit:"\u672C\u5C40\u4EA4\u6613\u6B21\u6578\u5DF2\u9054\u4E0A\u9650",round_changed:"\u8F2A\u6B21\u5DF2\u6539\u8B8A",participant_dead:"\u4EA4\u6613\u89D2\u8272\u5DF2\u6B7B\u4EA1"};function Mi(i,e,t){let n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function da(i={}){if(!i||typeof i!="object")return"\u7121";let e=[];i.power&&e.push(`\u529B\u91CF\u724C ${i.power} \u5F35`),i.magic&&e.push(`\u9B54\u6CD5\u724C ${i.magic} \u5F35`);for(let t of Oc)i.weapons?.includes(t)&&e.push(XS[t]);return e.join("\u3001")||"\u7121"}function Xr(i){return i.power>0||i.magic>0||i.weapons.length>0}function Nm({onCommand:i,nameOf:e=t=>t}={}){let t=_=>document.getElementById(_),n=t("trade-panel"),s=t("trade-form"),r=t("trade-recipient"),o=null,a="",c="",l="",h=!1;function u(_=""){t("trade-message").textContent=_,t("trade-message").hidden=!_}function d(_){for(let T of["power","magic"])t(`trade-${_}-${T}`).value="0";for(let T of Oc)t(`trade-${_}-${T}`).checked=!1}function f(_){let T=qS();for(let w of["power","magic"])T[w]=Number(t(`trade-${_}-${w}`).value);return T.weapons=Oc.filter(w=>t(`trade-${_}-${w}`).checked),T}function g(){return!o?.snapshot||o.session?.role!=="player"?null:o.snapshot.combat.characters.find(_=>_.id===o.session.characterId)||null}function x(){let _=g();return!!(o?.online&&!o.busy&&!h&&_?.hp>0&&Array.isArray(o.snapshot.trades)&&o.snapshot.combat.phase==="preparation")}function p(){if(!o?.snapshot)return;let _=o.snapshot.combat,T=g(),w=_.characters.find(I=>I.id===r.value),y=x()&&w?.hp>0;r.disabled=!x()||r.options.length===0;for(let[I,H]of[["give",T],["receive",w]]){t(`trade-${I}-cards`).hidden=_.round===1;for(let $ of["power","magic"]){let L=t(`trade-${I}-${$}`);L.disabled=!y||_.round===1,L.max=String(H?.cards?.[$]??0),_.round===1&&(L.value="0")}for(let $ of Oc){let L=t(`trade-${I}-${$}`),A=!!H?.weapons.includes($);L.disabled=!y||!A,A||(L.checked=!1),L.closest("label").classList.toggle("is-unavailable",!A)}t(`trade-${I}-stock`).textContent=H?`${e(H.id)}\u6301\u6709\uFF1A${da({...H.cards,weapons:H.weapons})}`:"\u6C92\u6709\u53EF\u4EA4\u6613\u7684\u5C0D\u8C61"}let S=f("give"),P=f("receive"),C=["give","receive"].every(I=>["power","magic"].every(H=>{let $=t(`trade-${I}-${H}`),L=Number($.value);return $.value!==""&&Number.isSafeInteger(L)&&L>=0&&L<=Number($.max)}));t("trade-propose").disabled=!y||!C||!Xr(S)&&!Xr(P),t("trade-propose").textContent=h?"\u6B63\u5728\u78BA\u8A8D\u4EA4\u6613\u2026":!Xr(P)&&Xr(S)?"\u9001\u51FA\u8D08\u9001\u63D0\u6848":!Xr(S)&&Xr(P)?"\u9001\u51FA\u7D22\u53D6\u63D0\u6848":"\u9001\u51FA\u4EA4\u63DB\u63D0\u6848",t("trade-preview").textContent=w?`\u6211\u4EA4\u51FA\uFF1A${da(S)}
\u5E0C\u671B${e(w.id)}\u4EA4\u51FA\uFF1A${da(P)}`:"\u76EE\u524D\u6C92\u6709\u5176\u4ED6\u5B58\u6D3B\u89D2\u8272\u53EF\u4EA4\u6613\u3002"}function m(_,T){let w=Mi("li",`trade-offer trade-offer-${_.status}`);w.dataset.offerId=_.id;let y=Mi("div","trade-offer-heading");y.append(Mi("strong","",`${e(_.fromId)} \u2192 ${e(_.toId)}`),Mi("span","trade-offer-state",_.status==="pending"?`\u7B49\u5F85${e(_.toId)}\u63A5\u53D7`:YS[_.status]||"\u63D0\u6848\u5DF2\u66F4\u65B0")),w.append(y,Mi("p","",`${e(_.fromId)}\u4EA4\u51FA\uFF1A${da(_.give)}`),Mi("p","",`${e(_.toId)}\u4EA4\u51FA\uFF1A${da(_.receive)}`));let S=[`\u7B2C ${_.round} \u8F2A`];if(_.reason&&Lm[_.reason]&&S.push(Lm[_.reason]),w.append(Mi("small","trade-offer-meta",S.join(" \xB7 "))),_.status==="pending"&&o.session.role==="player"){let P=Mi("div","trade-offer-actions"),C=(I,H,$=!1)=>{let L=Mi("button",$?"trade-accept":"",H);L.type="button",L.dataset.tradeAction=I,L.dataset.offerId=_.id,L.disabled=!T,P.append(L)};_.toId===o.session.characterId&&(C("trade-accept","\u63A5\u53D7\u4EA4\u6613",!0),C("trade-decline","\u5A49\u62D2")),_.fromId===o.session.characterId&&C("trade-cancel","\u53D6\u6D88\u63D0\u6848"),P.childElementCount&&w.append(P)}return w}function v(_){let T=x(),w=JSON.stringify([_,o.session.role,o.session.characterId,T]);if(w===l)return;l=w;let y=_.filter(P=>P.status==="pending").slice().reverse(),S=_.filter(P=>P.status!=="pending").slice(-10).reverse();t("trade-pending-count").textContent=`${y.length} \u7B46\u5F85\u78BA\u8A8D`,t("trade-empty").hidden=y.length>0,t("trade-list").replaceChildren(...y.map(P=>m(P,T))),t("trade-history").hidden=S.length===0,t("trade-history-list").replaceChildren(...S.map(P=>m(P,!1)))}function b(_){o=_;let{snapshot:T,session:w}=_||{},y=T?.combat;if(n.hidden=!w||y?.phase!=="preparation",n.hidden)return;let S=`${T.roomCode}:${w.role}:${w.characterId||""}:${y.round}`;S!==a&&(a=S,c="",l="",s.reset(),d("give"),d("receive"),u()),t("trade-round-label").textContent=`\u7B2C ${y.round} \u8F2A\u6E96\u5099`,t("trade-rule").textContent=y.round===1?"\u7B2C\u4E00\u8F2A\u53EA\u4EA4\u6613\u6B66\u5668\u3002\u5C0D\u65B9\u63A5\u53D7\u5F8C\uFF0C\u624D\u6703\u79FB\u8F49\u7269\u54C1\u3002":"\u53EF\u4EA4\u63DB\u6216\u8D08\u9001\u6B66\u5668\u3001\u529B\u91CF\u724C\u8207\u9B54\u6CD5\u724C\u3002\u5C0D\u65B9\u63A5\u53D7\u5F8C\u624D\u6703\u79FB\u8F49\u3002";let P=Array.isArray(T.trades),C=g();s.hidden=!P||w.role!=="player"||!(C?.hp>0),t("trade-role-note").textContent=P?w.role==="host"?"\u4E3B\u6301\u4EBA\u53EF\u6AA2\u8996\u5168\u90E8\u63D0\u6848\u3002\u958B\u59CB\u6230\u9B25\u6703\u53D6\u6D88\u6240\u6709\u5C1A\u672A\u5B8C\u6210\u7684\u4EA4\u6613\uFF0C\u76F4\u63A5\u958B\u6230\u3002":C?.hp===0?"\u89D2\u8272\u5DF2\u6B7B\u4EA1\uFF0C\u7269\u54C1\u5DF2\u79FB\u4EA4\u64CA\u6BBA\u8005\uFF0C\u7121\u6CD5\u518D\u53C3\u8207\u4EA4\u6613\u3002":_.online?"\u53EA\u6709\u5B58\u6D3B\u89D2\u8272\u53EF\u4EE5\u4EA4\u6613\u3002\u5C1A\u672A\u5B8C\u6210\u7684\u63D0\u6848\u6703\u5728\u958B\u6230\u6642\u53D6\u6D88\u3002":"\u76EE\u524D\u9023\u7DDA\u4E2D\u65B7\uFF0C\u6062\u5FA9\u9023\u7DDA\u5F8C\u624D\u80FD\u63D0\u51FA\u6216\u78BA\u8A8D\u4EA4\u6613\u3002":"\u9023\u7DDA\u670D\u52D9\u7248\u672C\u5C1A\u672A\u63D0\u4F9B\u4EA4\u6613\uFF0C\u8ACB\u4E3B\u6301\u4EBA\u66F4\u65B0\u5F8C\u7AEF\u3002";let I=y.characters.filter(L=>L.id!==w.characterId&&L.hp>0&&T.members?.some(A=>A.characterId===L.id&&A.claimed)),H=I.map(L=>L.id).join(",");if(H!==c){c=H;let L=r.value;r.replaceChildren(...I.map(A=>{let U=Mi("option","",e(A.id));return U.value=A.id,U})),I.some(A=>A.id===L)?r.value=L:d("receive")}p();let $=P?T.trades.filter(L=>L&&typeof L.id=="string"&&(w.role==="host"||L.fromId===w.characterId||L.toId===w.characterId)):[];v($)}return s.addEventListener("input",()=>{u(),p()}),s.addEventListener("change",_=>{_.target===r&&d("receive"),u(),p()}),s.addEventListener("submit",async _=>{if(_.preventDefault(),!x()||t("trade-propose").disabled||!s.reportValidity())return;let T=r.value,w={toId:T,give:f("give"),receive:f("receive")};h=!0,u(),b(o);try{let y=await i("trade-propose",w);y===!0?(d("give"),d("receive"),u("\u63D0\u6848\u5DF2\u9001\u51FA\uFF0C\u7B49\u5F85\u5C0D\u65B9\u63A5\u53D7\u3002")):y===!1&&u("\u63D0\u6848\u5C1A\u672A\u9001\u51FA\uFF0C\u8ACB\u4F9D\u6700\u65B0\u7269\u54C1\u8207\u9023\u7DDA\u72C0\u614B\u78BA\u8A8D\u5F8C\u518D\u8A66\u3002")}catch(y){u(y?.message||"\u63D0\u6848\u5C1A\u672A\u9001\u51FA\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002")}finally{h=!1,o&&b(o)}}),t("trade-list").addEventListener("click",async _=>{let T=_.target.closest("[data-trade-action]");if(!(!T||T.disabled||!x())){h=!0,u(),b(o);try{await i(T.dataset.tradeAction,{offerId:T.dataset.offerId})===!1&&u("\u4EA4\u6613\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u78BA\u8A8D\u6700\u65B0\u63D0\u6848\u8207\u7269\u54C1\u3002")}catch(w){u(w?.message||"\u4EA4\u6613\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002")}finally{h=!1,o&&b(o)}}}),{render:b,hide(){n.hidden=!0,o=null,a="",l=""}}}var Fm="fenrir-seven-seats-combat-v4",Bm="fenrir-room-mode-v1",km="fenrir-display-quality-v1",$S=["fenrir-seven-seats-combat-v3","fenrir-seven-seats-combat-v2"],Z=i=>document.getElementById(i),Yt=i=>ci.find(e=>e.id===i)?.name||"\u89D2\u8272",ZS={axe:"\u6230\u65A7",flame:"\u708E\u528D"},te,Gc=!1;try{let i=localStorage.getItem(Fm);Gc=!i&&$S.some(e=>!!localStorage.getItem(e)),te=oh(i)}catch{te=tr()}var fa=te,bi,wd,pt=!1,kt=null,nn=null,$r={state:"idle",message:"\u76EE\u524D\u70BA\u55AE\u6A5F\u6A21\u5F0F"},oi=!1,Ki=!1,si=null,zt=[],sn=null,Mn=null,Dm,qr=!1,Td="loading",zc="\u82AC\u91CC\u723E\u70BA\u975C\u614B\u89D2\u8272\u6A23\u4EF6\uFF0C\u5168\u666F\u8207\u8FD1\u770B\u6703\u5207\u63DB\u7D30\u7BC0\uFF1B\u6B63\u5F0F\u52D5\u4F5C\u4ECD\u5F85\u88FD\u4F5C\u3002",Id=new Map,bd={loadout:"\u521D\u59CB\u9053\u5177",setup:"\u521D\u59CB\u8840\u91CF",preparation:"\u6230\u524D\u6E96\u5099",battle:"\u6230\u9B25\u4E2D","round-end":"\u672C\u8F2A\u7D50\u675F",finished:"\u4E09\u8F2A\u7D50\u675F"},Pd=i=>ZS[i]||"\u6B66\u5668",ma=({power:i=0,magic:e=0})=>`\u529B\u91CF ${i}\u3001\u9B54\u6CD5 ${e}`,Ad=i=>`${ma(i.cards)}${i.weapons.length?" \xB7 "+i.weapons.map(Pd).join("\u3001"):""}`,Um=({power:i=0,magic:e=0,weapons:t=[]}={})=>[i?`\u529B\u91CF\u724C ${i}`:"",e?`\u9B54\u6CD5\u724C ${e}`:"",...t.map(Pd)].filter(Boolean).join("\u3001")||"\u7121\u7269\u54C1";function Rd(){try{localStorage.setItem(Bm,pt?"room":"solo")}catch{}}function KS(){try{let i=localStorage.getItem(km);if(i==="balanced"||i==="low")return i}catch{}return window.matchMedia?.("(pointer: coarse)")?.matches?"low":"balanced"}function Zs(){if(!pt){fa=te;try{localStorage.setItem(Fm,JSON.stringify(te))}catch{}}}var Yr=()=>!pt||kt?.role==="host",ga=()=>!pt||!!(nn&&kt&&$r.state==="online"&&!oi),Ji=()=>Yr()&&ga();function ri(){if(!pt)return!0;if(!ga()||te.phase!=="battle")return!1;let i=$n(te);return kt.role==="host"?nn.takeoverCharacterId===i:kt.characterId===i&&nn.takeoverCharacterId!==i}function Ei(){pt&&kt&&nn?wd?.render({snapshot:nn,session:kt,busy:oi,online:$r.state==="online"}):wd?.hide(),Z("room-mode-local").setAttribute("aria-pressed",String(!pt)),Z("room-mode-online").setAttribute("aria-pressed",String(pt)),Z("room-connect-fields").hidden=!pt||!!kt,Z("room-session").hidden=!kt,Z("room-status").textContent=$r.message,Z("room-status").dataset.state=$r.state,Z("room-mode-caption").textContent=pt?kt?.role==="host"?"\u623F\u9593\u4E3B\u6301\u4EBA":kt?`${Yt(kt.characterId)}\u7684\u64CD\u4F5C\u756B\u9762`:"\u9023\u7DDA\u5F8C\u7531\u5404\u73A9\u5BB6\u64CD\u4F5C":"\u540C\u4E00\u88DD\u7F6E\u8F2A\u6D41\u64CD\u4F5C",Z("prototype-badge").textContent=pt?"\u516B\u7AEF\u9023\u7DDA\u539F\u578B":"\u4E09\u8F2A\u55AE\u6A5F\u539F\u578B",document.body.dataset.mode=pt?"room":"solo";for(let t of["room-create","room-join","room-resume","room-api-base","room-code","room-character"])Z(t).disabled=Ki;if(Z("room-mode-local").disabled=Ki||oi,Z("room-mode-online").disabled=Ki||oi,Z("room-leave").disabled=oi||Ki,!kt)return;Z("room-session-code").textContent=kt.roomCode,Z("room-session-role").textContent=kt.role==="host"?"\u4E3B\u6301\u4EBA":Yt(kt.characterId),Z("room-members").replaceChildren(...ci.map(t=>{let n=nn?.members.find(a=>a.characterId===t.id),s=document.createElement("li"),r=document.createElement("span"),o=document.createElement("small");return r.textContent=t.name+"\uFF1A",o.textContent=`${n?.claimed?n.online?"\u5DF2\u9023\u7DDA":"\u66AB\u6642\u96E2\u7DDA":"\u5C1A\u672A\u52A0\u5165"}${nn?.takeoverCharacterId===t.id?"\uFF08\u4E3B\u6301\u4EBA\u63A5\u7BA1\uFF09":""}`,s.append(r,o),s.classList.toggle("is-online",!!n?.online),s.classList.toggle("is-self",kt.characterId===t.id),s}));let i=kt.role==="host",e=$n(te);Z("room-takeover-controls").hidden=!i||te.phase!=="battle",Z("room-takeover").hidden=!i||te.phase!=="battle"||!!nn?.takeoverCharacterId,Z("room-takeover").disabled=!ga()||!e,Z("room-takeover").textContent=e?`\u63A5\u7BA1${Yt(e)}\u672C\u6B21\u884C\u52D5`:"\u63A5\u7BA1\u76EE\u524D\u884C\u52D5\u8005",Z("room-release").hidden=!i||!nn?.takeoverCharacterId,Z("room-release").disabled=!ga()}function JS(i){let e=oh(i.combat);if(JSON.stringify(e)!==JSON.stringify(i.combat))throw new Error("\u623F\u9593\u6230\u9B25\u8CC7\u6599\u7121\u6CD5\u9A57\u8B49\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u670D\u52D9\u7248\u672C\u3002");i={...i,combat:e};let t=nn,n=!t,s=n||i.combat.revision!==t.combat.revision,r=n||i.takeoverCharacterId!==t.takeoverCharacterId;if(!(!n&&i.revision<t.revision)){if(nn=i,s){let o=n?1/0:te.log.at(-1)?.id||0,a=n&&kt?.characterId?kt.characterId:te.selectedId;te={...i.combat,selectedId:a},zt=[],sn=null,Mn=null,jt({preserveInput:!n});for(let c of te.log.filter(l=>l.id>o&&l.type==="attack"))si?.playAttackBatch?.({actorId:c.actorId,targets:c.results.map(({targetId:l,killed:h})=>({targetId:l,killed:h}))})}else r?(zt=[],sn=null,Mn=null,jt({preserveInput:!0})):t.revision!==i.revision&&(Mn=null,Z("attack-button").dataset.revision=i.revision,te.phase==="battle"&&zm(te.characters.find(o=>o.id===$n(te))));Ei()}}async function xs(i,e={},t=""){if(!pt||!ga())return!1;oi=!0,document.querySelectorAll("#battle-controls input, #battle-controls button, #loadout-character").forEach(n=>{n.disabled=!0}),Ei();try{return await bi.command(i,e,nn.revision),t&&gn(t),!0}catch(n){return gn(n.message||"\u64CD\u4F5C\u5C1A\u672A\u5B8C\u6210\uFF0C\u8ACB\u78BA\u8A8D\u9023\u7DDA\u72C0\u614B"),!1}finally{oi=!1,jt(),Ei()}}async function Fc(i){if(!(Ki||kt)){pt||(Zs(),fa=te),pt=!0,Rd(),Ki=!0,jt(),Ei();try{await i()}catch(e){gn(e.message||"\u7121\u6CD5\u9023\u7DDA\uFF0C\u8ACB\u6AA2\u67E5\u623F\u78BC\u8207\u5F8C\u7AEF\u7DB2\u5740")}finally{Ki=!1,jt(),Ei()}}}function jS(){bi=Pm({onSnapshot:JS,onStatus:i=>{let e=$r.state!==i.state;$r=i,e&&jt({preserveInput:!0}),Ei()},onSession:i=>{kt=i,i?(pt=!0,nn=null):(pt=!1,nn=null,te=fa,zt=[],sn=null,Mn=null),Rd(),jt(),Ei()}}),Z("room-mode-local").addEventListener("click",()=>{Ki||oi||(bi.leave(),pt=!1,te=fa,jt(),Ei())}),Z("room-mode-online").addEventListener("click",()=>{Ki||oi||(pt||(Zs(),fa=te),pt=!0,Rd(),jt(),Ei())}),Z("room-create").addEventListener("click",()=>Fc(()=>bi.create(Z("room-api-base").value))),Z("room-join").addEventListener("click",()=>Fc(()=>bi.join(Z("room-api-base").value,Z("room-code").value,Z("room-character").value))),Z("room-resume").addEventListener("click",()=>Fc(()=>bi.resume())),Z("room-leave").addEventListener("click",()=>bi.leave()),Z("room-takeover").addEventListener("click",()=>xs("takeover",{characterId:$n(te)},"\u5DF2\u63A5\u7BA1\u672C\u6B21\u884C\u52D5")),Z("room-release").addEventListener("click",()=>xs("takeover",{characterId:null},"\u5DF2\u4EA4\u56DE\u73A9\u5BB6\u64CD\u4F5C"));try{localStorage.getItem("fenrir-room-session-v1")&&localStorage.getItem(Bm)!=="solo"&&Fc(()=>bi.resume())}catch{}}function gn(i){clearTimeout(Dm),Z("toast").textContent=i,Z("toast").classList.add("visible"),Dm=setTimeout(()=>Z("toast").classList.remove("visible"),3200)}function Hc(i,e){if(pt)return!1;try{return te=i(te),zt=[],sn=null,Mn=null,jt(),Zs(),e&&gn(e),!0}catch(t){return gn(t.message||"\u8ACB\u78BA\u8A8D\u76EE\u524D\u7684\u884C\u52D5\u8005\u8207\u968E\u6BB5\u3002"),!1}}function pa(i){pt&&oi||(te=kd(te,i),te.phase==="battle"&&ri()&&QS(i),jt(),Zs())}function QS(i){if(Mn=null,sn==="flame"){zt=[...eo(te,sn)[0]||[]];return}if(i===$n(te)){zt=[];return}if(!sn){gn("\u76EE\u524D\u6C92\u6709\u53EF\u7528\u7684\u653B\u64CA\u724C\uFF0C\u53EF\u653E\u68C4\u672C\u6B21\u884C\u52D5");return}if(!eo(te,sn).some(t=>t.includes(i))){gn("\u9019\u500B\u89D2\u8272\u4E0D\u5728\u672C\u6B21\u653B\u64CA\u7684\u5408\u6CD5\u7BC4\u570D\u5167");return}zt=zt.includes(i)?[]:[i]}async function Bc(i,e,t){qr||(qr=!0,pt?(!Ji()||!await xs(t,{},e))&&(qr=!1):Hc(i,e)||(qr=!1),setTimeout(()=>{qr=!1,Hm()},500))}function kc(i){return i.hp===0?"\u5DF2\u6B7B\u4EA1":te.phase==="battle"&&i.id===$n(te)?"\u76EE\u524D\u884C\u52D5":te.actedIds.includes(i.id)?"\u5DF2\u884C\u52D5":te.phase==="battle"?"\u5F85\u884C\u52D5":"\u5B58\u6D3B"}function eM(){Z("loadout-character").innerHTML=ci.map(i=>`<option value="${i.id}">${i.name}</option>`).join(""),Z("roster").innerHTML=ci.map(i=>`<div class="roster-row" data-character="${i.id}">
    <span class="seat-number" data-seat="${i.id}"></span>
    <button class="roster-portrait" type="button" data-select="${i.id}" aria-label="\u6AA2\u8996${i.name}"><img src="./${i.portrait}" alt="" loading="lazy"></button>
    <button class="roster-name" type="button" data-select="${i.id}">${i.name}<small data-status="${i.id}"></small><span class="roster-items" data-items="${i.id}"></span></button>
    <div class="hp-stepper"><button type="button" data-delta="-1" data-id="${i.id}" aria-label="${i.name}\u8840\u91CF\u6E1B\u4E00">\u2212</button>
    <input type="number" min="0" max="999" step="1" inputmode="numeric" id="hp-${i.id}" data-hp="${i.id}" aria-label="${i.name}\u8840\u91CF">
    <button type="button" data-delta="1" data-id="${i.id}" aria-label="${i.name}\u8840\u91CF\u52A0\u4E00">\uFF0B</button></div></div>`).join("");for(let i of ci){let e=document.createElement("button");e.type="button",e.className="seat-label",e.dataset.label=i.id,e.innerHTML='<span class="seat-name"></span><span class="seat-meta"></span><span class="seat-state"></span>',e.addEventListener("click",()=>pa(i.id)),Z("labels").append(e),Id.set(i.id,e)}}function tM(i){if(i.type==="loadout")return"\u4E3B\u6301\u4EBA\u78BA\u5B9A\u521D\u59CB\u724C\u6578\u8207\u6B66\u5668\uFF0C\u9032\u5165\u8840\u91CF\u8A2D\u5B9A";if(i.type==="setup")return"\u4E3B\u6301\u4EBA\u78BA\u5B9A\u521D\u59CB\u8840\u91CF\uFF0C\u89D2\u8272\u4F9D\u8840\u91CF\u5C31\u5EA7";if(i.type==="battle-start")return"\u4E3B\u6301\u4EBA\u958B\u59CB\u672C\u8F2A\u6230\u9B25";if(i.type==="pass")return`${Yt(i.actorId)}\u653E\u68C4\u672C\u6B21\u884C\u52D5`;if(i.type==="trade")return`${Yt(i.fromId)}\u4EA4\u51FA${Um(i.give)}\uFF0C${Yt(i.toId)}\u4EA4\u51FA${Um(i.receive)}\uFF0C\u5B8C\u6210\u4EA4\u6613`;if(i.type==="attack"){let e={power:"\u529B\u91CF\u653B\u64CA",magic:"\u9B54\u6CD5\u653B\u64CA",axe:"\u6230\u65A7",flame:"\u708E\u528D"},t=i.results.map(s=>`${Yt(s.targetId)} ${s.hpBefore} \u2192 ${s.hpAfter} \u8840${s.killed?"\uFF08\u64CA\u6BBA\uFF09":s.hpBefore===0?"\uFF08\u539F\u5DF2\u6B7B\u4EA1\uFF09":""}`).join("\uFF1B"),n=i.loot.map(s=>`\u53D6\u5F97${Yt(s.victimId)}\u7684${ma(s)}${s.weapons.length?"\u3001"+s.weapons.map(Pd).join("\u3001"):""}`).join("\uFF1B");return`${Yt(i.actorId)}\u4F7F\u7528${e[i.actionId]}\uFF0C\u6D88\u8017${ma(i.cost)}\uFF1A${t}${n?"\uFF1B"+n:""}`}return i.type==="advance"?`\u8F2A\u672B\u63DB\u5EA7\u5B8C\u6210\uFF0C\u9032\u5165\u7B2C ${i.nextRound} \u8F2A\u6E96\u5099`:i.type==="finish"?"\u5B8C\u6210\u6700\u7D42\u63DB\u5EA7\uFF0C\u4E09\u8F2A\u5C0D\u6230\u7D50\u675F":"\u968E\u6BB5\u5DF2\u66F4\u65B0"}function nM(){Z("record-empty").hidden=te.log.length>0,Z("record-count").textContent=te.log.length?`${te.log.length} \u7B46`:"\u5C1A\u672A\u958B\u59CB",Z("combat-log").innerHTML=[...te.log].reverse().map(i=>{let t=nn?.audit.find(n=>n.combatEventId===i.id)?.operatorRole==="host"&&["attack","pass"].includes(i.type)?"\u4E3B\u6301\u4EBA\u4EE3\u64CD\u4F5C\uFF1A":"";return`<li class="${i.results?.some(n=>n.killed)?"kill-event":""}"><span>\u7B2C ${i.round} \u8F2A</span><p>${t}${tM(i)}</p></li>`}).join(""),Z("kills-empty").hidden=te.kills.length>0,Z("kill-list").innerHTML=te.kills.map(i=>`<li>\u7B2C ${i.round} \u8F2A\uFF1A${Yt(i.killerId)}\u64CA\u6BBA${Yt(i.victimId)}</li>`).join("")}function Cd(){if(Z("loadout-panel").hidden=te.phase!=="loadout",Z("legacy-notice").hidden=pt||!Gc||te.phase!=="loadout",te.phase!=="loadout")return;let i=te.characters.find(e=>e.id===te.selectedId);Z("loadout-character").disabled=pt&&oi,Z("loadout-character").value=i.id,Z("loadout-name").textContent=`${i.name}\u7684\u521D\u59CB\u9053\u5177`;for(let e of["power","magic"]){let t=Z("initial-"+e);document.activeElement!==t&&(t.value=i.cards[e]),t.disabled=!Ji()}for(let e of["axe","flame"]){let t=Z("initial-"+e),n=te.characters.find(s=>s.weapons.includes(e));t.checked=i.weapons.includes(e),t.disabled=!Ji()||!!(n&&n.id!==i.id),Z("owner-"+e).textContent=n&&n.id!==i.id?`${n.name}\u6301\u6709\uFF0C\u9700\u5148\u79FB\u9664`:e==="axe"?"\u529B\u91CF\u724C\u55AE\u9AD4\u50B7\u5BB3 3":"\u4F7F\u7528\u8005\u5DE6\u53F3\u5169\u5074\u5404 2 \u50B7\u5BB3"}Z("flame-fixed-rule").hidden=!te.characters.some(e=>e.weapons.includes("flame"))}function zm(i){let e=Hd(te);e.some(r=>r.id===sn&&r.available)||(sn=e.find(r=>r.available)?.id||null);let t=e.find(r=>r.id===sn),n=t?eo(te,sn):[];Z("action-title").textContent=`${i.name}\u884C\u52D5`,Z("actor-hp").textContent=`${i.hp} \u8840`,Z("actor-cards").textContent=`\u6301\u6709${Ad(i)}`,Z("attack-methods").innerHTML=e.map(r=>`<button type="button" data-action="${r.id}" aria-pressed="${r.id===sn}"${r.available&&ri()?"":" disabled"}><span>${r.name}</span><small>${r.available?`\u6D88\u8017${ma(r.cost)} \xB7 ${r.targetCount} \u76EE\u6A19`:r.reason}</small></button>`).join(""),Z("attack-rule").textContent=t?`${t.name}\uFF1A\u6D88\u8017${ma(t.cost)}\uFF0C${t.targetCount===2?"\u4F7F\u7528\u8005\u5DE6\u53F3\u5169\u5074\u5404":"\u9020\u6210"} ${t.damage} \u9EDE\u50B7\u5BB3\u3002${t.id==="flame"?"\u76EE\u6A19\u5DF2\u56FA\u5B9A\uFF1B\u7B2C 1 \u5E2D\u8207\u7B2C 7 \u5E2D\u76F8\u9130\u3002":""}`:"\u6C92\u6709\u53EF\u7528\u7684\u653B\u64CA\u724C\uFF0C\u8ACB\u653E\u68C4\u672C\u6B21\u884C\u52D5\u3002",Z("target-grid").innerHTML=te.characters.filter(r=>r.id!==i.id).map(r=>{let o=zt.includes(r.id),a=[r.id],c=o||n.some(h=>a.every(u=>h.includes(u))),l=t?.id==="flame"?`\u6AA2\u8996${r.name}${o?"\uFF0C\u708E\u528D\u56FA\u5B9A\u76EE\u6A19":""}`:`\u9078\u64C7${r.name}\u70BA\u653B\u64CA\u76EE\u6A19`;return`<button type="button" data-target="${r.id}" aria-label="${l}" aria-pressed="${o}" class="target-choice${o?" is-target":""}${r.hp===0?" is-dead":""}"${c&&ri()?"":" disabled"}><span>${r.name}</span><small>\u7B2C ${te.seatOrder.indexOf(r.id)+1} \u5E2D \xB7 ${r.hp===0?"\u5DF2\u6B7B\u4EA1":r.hp+" \u8840"}</small></button>`}).join("");let s=null;if(t&&zt.length===t.targetCount)try{s=nh(te,{actorId:i.id,actionId:sn,targetIds:zt})}catch{}Z("target-detail").textContent=s?s.results.map(r=>`${Yt(r.targetId)}\uFF1A${r.hpBefore} \u2192 ${r.hpAfter} \u8840${r.hpBefore===0?"\uFF08\u7121\u65B0\u589E\u64CA\u6BBA\u6216\u6230\u5229\u54C1\uFF09":r.killed?"\uFF08\u64CA\u6BBA\u4E26\u53D6\u5F97\u5176\u724C\u8207\u6B66\u5668\uFF09":""}`).join(`
`):t?`\u5DF2\u9078 ${zt.length}\uFF0F${t.targetCount} \u500B\u76EE\u6A19${t.id==="flame"?"\uFF0C\u4F9D\u672C\u8F2A\u56FA\u5B9A\u5EA7\u4F4D\u5224\u65B7\u7BC4\u570D":""}`:"\u6C92\u6709\u53EF\u7528\u653B\u64CA",Z("clear-targets").hidden=t?.id==="flame"||zt.length===0,Z("target-grid").setAttribute("aria-label",t?.id==="flame"?"\u708E\u528D\u56FA\u5B9A\u76EE\u6A19":"\u9078\u64C7\u653B\u64CA\u76EE\u6A19"),Z("attack-button").disabled=!ri()||!s||!!Mn,Z("attack-button").textContent=s?`\u78BA\u8A8D${t.name}\uFF08${zt.map(Yt).join("\u3001")}\uFF09`:"\u9078\u5B9A\u5408\u6CD5\u76EE\u6A19\u5F8C\u51FA\u62DB",Z("attack-button").dataset.actor=i.id,Z("attack-button").dataset.revision=pt?nn?.revision??-1:te.revision,Z("pass-button").hidden=!!Mn,Z("pass-button").disabled=!ri(),Z("confirm-pass").disabled=!ri(),Z("pass-confirm").hidden=!Mn,Z("pass-question").textContent=`\u78BA\u5B9A\u8B93${i.name}\u653E\u68C4\u672C\u8F2A\u884C\u52D5\uFF1F\u4E0D\u6703\u6D88\u8017\u724C\u3002`}function Hm(){let i=$n(te),e=te.characters.find(o=>o.id===i),t={loadout:"\u5148\u8A2D\u5B9A\u4E03\u540D\u89D2\u8272\u7684\u724C\u8207\u6B66\u5668",setup:"\u518D\u8A2D\u5B9A\u4E03\u540D\u89D2\u8272\u7684\u521D\u59CB\u8840\u91CF",preparation:`\u7B2C ${te.round} \u8F2A\uFF0C\u7B49\u5F85\u4E3B\u6301\u4EBA\u958B\u6230`,battle:e?`${e.name}\u884C\u52D5`:"\u672C\u8F2A\u6C92\u6709\u53EF\u884C\u52D5\u7684\u89D2\u8272","round-end":`\u7B2C ${te.round} \u8F2A\u884C\u52D5\u7D50\u675F`,finished:"\u4E09\u8F2A\u5C0D\u6230\u5DF2\u5B8C\u6210"},n={loadout:"\u9EDE\u9078\u89D2\u8272\u8A2D\u5B9A\u521D\u59CB\u724C\u6578\u8207\u6B66\u5668\u3002\u529B\u91CF 2\u3001\u9B54\u6CD5 2 \u662F\u53EF\u4FEE\u6539\u7684\u793A\u7BC4\u503C\uFF0C\u8ACB\u4F9D\u524D\u7F6E\u904A\u6232\u7D50\u679C\u8ABF\u6574\u3002",setup:"\u521D\u59CB\u9053\u5177\u5DF2\u78BA\u5B9A\uFF0C\u7531\u4E3B\u6301\u4EBA\u8A2D\u5B9A\u8840\u91CF\uFF0C\u518D\u78BA\u8A8D\u5C31\u5EA7\u3002\u9053\u5177\u4E0D\u6703\u5728\u6BCF\u8F2A\u81EA\u52D5\u88DC\u5145\u3002",preparation:pt?`\u7B2C ${te.round} \u8F2A\u6230\u524D\u6E96\u5099\u3002${te.round===1?"\u53EF\u4EA4\u63DB\u6216\u8D08\u9001\u6B66\u5668\u3002":"\u53EF\u4EA4\u63DB\u6216\u8D08\u9001\u6B66\u5668\u8207\u653B\u64CA\u724C\u3002"}\u4E3B\u6301\u4EBA\u958B\u6230\u6642\u6703\u53D6\u6D88\u5C1A\u672A\u5B8C\u6210\u7684\u63D0\u6848\u3002`:`\u7B2C ${te.round} \u8F2A\u6230\u524D\u6E96\u5099\u3002\u7531\u4E3B\u6301\u4EBA\u958B\u59CB\u6230\u9B25\uFF1B\u4EA4\u6613\u529F\u80FD\u8ACB\u4F7F\u7528\u9023\u7DDA\u623F\u9593\u6A21\u5F0F\u3002`,battle:"\u4F9D\u6700\u65B0\u8840\u91CF\u5B89\u6392\u5C1A\u672A\u884C\u52D5\u7684\u5B58\u6D3B\u89D2\u8272\u3002\u6BCF\u4EBA\u672C\u8F2A\u53EA\u80FD\u884C\u52D5\u4E00\u6B21\uFF0C\u5EA7\u4F4D\u4FDD\u6301\u56FA\u5B9A\u3002","round-end":te.round<3?"\u672C\u8F2A\u5DF2\u6C92\u6709\u53EF\u884C\u52D5\u7684\u89D2\u8272\u3002\u78BA\u8A8D\u7D00\u9304\u5F8C\u63DB\u5EA7\uFF0C\u518D\u9032\u5165\u4E0B\u4E00\u8F2A\u6E96\u5099\u3002":"\u7B2C\u4E09\u8F2A\u884C\u52D5\u7D50\u675F\u3002\u78BA\u8A8D\u7D00\u9304\u5F8C\u5B8C\u6210\u6700\u7D42\u63DB\u5EA7\u3002",finished:"\u4E09\u8F2A\u5DF2\u7D50\u675F\u3002\u53EF\u67E5\u770B\u6700\u7D42\u8840\u91CF\u8207\u64CA\u6BBA\u7D00\u9304\uFF1B\u672C\u7248\u5C1A\u672A\u5224\u5B9A\u9663\u71DF\u52DD\u8CA0\u3002"};Z("round-number").textContent=te.round,Z("phase-caption").textContent=`\uFF0F ${bd[te.phase]}`,document.body.dataset.phase=te.phase,Z("battle-status").textContent=bd[te.phase],Z("battle-headline").textContent=t[te.phase],Z("battle-banner").dataset.phase=te.phase,Z("host-title").textContent=te.phase==="battle"?"\u672C\u6B21\u884C\u52D5":bd[te.phase];let s=pt&&!Yr()&&["loadout","setup","preparation","round-end"].includes(te.phase)?" \u8ACB\u7B49\u5F85\u4E3B\u6301\u4EBA\u78BA\u8A8D\u3002":pt&&te.phase==="battle"&&!ri()?nn?.takeoverCharacterId?" \u4E3B\u6301\u4EBA\u6B63\u5728\u4EE3\u64CD\u4F5C\u3002":" \u8ACB\u7B49\u5F85\u76EE\u524D\u884C\u52D5\u7684\u73A9\u5BB6\u51FA\u62DB\u3002":"";Z("phase-description").textContent=n[te.phase]+s,document.querySelectorAll("[data-round]").forEach(o=>{let a=Number(o.dataset.round);o.classList.toggle("is-current",a===te.round&&te.phase!=="finished"),o.classList.toggle("is-complete",a<te.round||te.phase==="finished"),a===te.round?o.setAttribute("aria-current","step"):o.removeAttribute("aria-current")}),Z("loadout-confirm").hidden=te.phase!=="loadout"||!Yr(),Z("setup-confirm").hidden=te.phase!=="setup"||!Yr(),Z("start-battle").hidden=te.phase!=="preparation"||!Yr(),Z("start-battle").textContent=`\u4E3B\u6301\u4EBA\u958B\u59CB\u7B2C ${te.round} \u8F2A\u6230\u9B25`,Z("advance-round").hidden=te.phase!=="round-end"||!Yr(),Z("advance-round").textContent=te.round<3?`\u63DB\u5EA7\u4E26\u9032\u5165\u7B2C ${te.round+1} \u8F2A\u6E96\u5099`:"\u5B8C\u6210\u6700\u7D42\u63DB\u5EA7\u8207\u5C0D\u6230";for(let o of["loadout-confirm","setup-confirm","start-battle","advance-round"])Z(o).disabled=qr||!Ji();for(let o of["reset-all","reset-preview"])Z(o).hidden=pt;Z("action-panel").hidden=te.phase!=="battle";let r=te.phase==="battle"?Kc(te):["loadout","setup","preparation"].includes(te.phase)?Zc(te).filter(o=>te.characters.find(a=>a.id===o).hp>0):[];Z("queue-title").textContent=te.phase==="battle"?"\u5F85\u884C\u52D5":["round-end","finished"].includes(te.phase)?"\u672C\u8F2A\u5DF2\u7D50\u675F":"\u9810\u8A08\u9806\u5E8F",Z("action-queue").innerHTML=r.length?r.map(o=>`<li class="${i===o?"queue-active":""}">${Yt(o)}</li>`).join(""):'<li class="queue-empty">\u6C92\u6709\u5C1A\u5F85\u884C\u52D5\u7684\u89D2\u8272</li>',Z("tie-note").textContent=te.round===1?"\u9996\u8F2A\u540C\u8840\u91CF\u5148\u4F9D\u793A\u7BC4\u9806\u4F4D\uFF0C\u6B63\u5F0F\u898F\u5247\u5F85\u78BA\u8A8D\u3002":"\u540C\u8840\u91CF\u53C3\u7167\u4E0A\u4E00\u8F2A\u884C\u52D5\u9806\u5E8F\uFF1B\u672A\u884C\u52D5\u8005\u66AB\u6CBF\u7528\u539F\u9806\u4F4D\u3002",Z("roster-hint").textContent=te.phase==="loadout"?"\u9EDE\u89D2\u8272\u8A2D\u5B9A\u9053\u5177":te.phase==="setup"?"\u6B64\u968E\u6BB5\u53EF\u4FEE\u6539\u8840\u91CF":te.phase==="battle"?"\u9EDE\u89D2\u8272\u4E5F\u53EF\u9078\u64C7\u76EE\u6A19":"\u521D\u59CB\u8A2D\u5B9A\u5DF2\u9396\u5B9A",Cd(),e&&zm(e)}function jt({preserveInput:i=!1}={}){let e=$n(te),t=te.characters.find(n=>n.id===te.selectedId);te.seatOrder.forEach((n,s)=>{let r=te.characters.find(l=>l.id===n),o=document.querySelector(`[data-character="${n}"]`);o.style.order=s;for(let[l,h]of[["is-selected",n===te.selectedId],["is-active",n===e],["is-target",zt.includes(n)],["is-dead",r.hp===0]])o.classList.toggle(l,h);document.querySelector(`[data-seat="${n}"]`).textContent=s+1,document.querySelector(`[data-status="${n}"]`).textContent=kc(r),document.querySelector(`[data-items="${n}"]`).textContent=Ad(r);let a=Z("hp-"+n);(!i||document.activeElement!==a)&&(a.value=r.hp),a.disabled=te.phase!=="setup"||!Ji(),o.querySelector('[data-delta="-1"]').disabled=te.phase!=="setup"||!Ji()||r.hp===0,o.querySelector('[data-delta="1"]').disabled=te.phase!=="setup"||!Ji()||r.hp===999;let c=Id.get(n);for(let[l,h]of[["selected",n===te.selectedId],["dead",r.hp===0],["is-active",n===e],["is-target",zt.includes(n)],["has-acted",te.actedIds.includes(n)]])c.classList.toggle(l,h);c.querySelector(".seat-name").textContent=r.name,c.querySelector(".seat-meta").textContent=`\u7B2C ${s+1} \u5E2D \xB7 ${r.hp} \u8840`,c.querySelector(".seat-state").textContent=zt.includes(n)?"\u653B\u64CA\u76EE\u6A19":kc(r),c.setAttribute("aria-label",`${r.name}\uFF0C\u7B2C${s+1}\u5E2D\uFF0C\u8840\u91CF${r.hp}\uFF0C${kc(r)}${zt.includes(n)?"\uFF0C\u653B\u64CA\u76EE\u6A19":""}`),c.setAttribute("aria-pressed",String(n===te.selectedId))}),Z("selected-name").textContent=t.name,Z("selected-subtitle").textContent=`${t.subtitle} \xB7 ${kc(t)}`,Z("selected-hp").textContent=t.hp,Z("selected-seat").textContent=`\u76EE\u524D\u7B2C ${te.seatOrder.indexOf(t.id)+1} \u5E2D`,Z("selected-description").textContent=t.id==="fenrir"?"\u72FC\u9762\u7532\u8207\u5B9A\u5411\u9B03\u6BDB\u7684\u975C\u614B\u6A23\u672C\uFF0C\u6B63\u5F0F\u52D5\u4F5C\u4ECD\u5F85\u88FD\u4F5C\u3002":"\u76EE\u524D\u4F7F\u7528\u7AD9\u4F4D\u66FF\u8EAB\uFF0C\u6B63\u5F0F\u9020\u578B\u4F9D\u89D2\u8272\u6D77\u5831\u88FD\u4F5C\u3002",Z("selected-portrait").src="./"+t.portrait,Z("selected-portrait").alt=t.name+"\u89D2\u8272\u6D77\u5831",Z("selected-items").textContent=Ad(t),Z("rank-preview").hidden=!["setup","round-end"].includes(te.phase),Z("rank-list").innerHTML=Zc(te).map((n,s)=>`<li><span>${s+1}</span>${Yt(n)}</li>`).join(""),Hm(),nM(),Ei(),si?.update({characters:te.characters,seatOrder:te.seatOrder,selectedId:te.selectedId,combat:te.phase==="battle"?{activeId:e,targetIds:zt,actedIds:te.actedIds}:null})}function Ed(i,e,t=!1){if(pt){if(!Ji())return;try{return $c(te,i,e),Z("hp-"+i).removeAttribute("aria-invalid"),xs("set-hp",{characterId:i,hp:e})}catch(n){Z("hp-"+i).setAttribute("aria-invalid","true"),gn(n.message);return}}try{te=$c(te,i,e),Z("hp-"+i).removeAttribute("aria-invalid"),jt({preserveInput:t}),Zs()}catch(n){Z("hp-"+i).setAttribute("aria-invalid","true"),gn(n.message)}}function Om(){if(pt&&!Ji())return!1;let i=te.characters.find(t=>t.id===te.selectedId),e=[Z("initial-power"),Z("initial-magic")];if(e.some(t=>t.value===""||!t.checkValidity())){for(let t of e)t.value=i.cards[t.id==="initial-power"?"power":"magic"];return gn("\u521D\u59CB\u724C\u6578\u8ACB\u8F38\u5165 0\u201399 \u7684\u6574\u6578"),Cd(),!1}try{let t={power:Number(e[0].value),magic:Number(e[1].value),weapons:["axe","flame"].filter(s=>Z("initial-"+s).checked)},n=Bd(te,i.id,t);return pt?xs("set-loadout",{characterId:i.id,...t}):(te=n,jt(),Zs(),!0)}catch(t){return gn(t.message),Cd(),!1}}function iM(){Z("loadout-character").addEventListener("change",i=>pa(i.target.value));for(let i of["initial-power","initial-magic","initial-axe","initial-flame"])Z(i).addEventListener("change",Om);Z("loadout-confirm").addEventListener("click",async()=>{await Om()&&(Gc=!1,Bc(Yc,"\u521D\u59CB\u9053\u5177\u5DF2\u78BA\u5B9A\uFF0C\u63A5\u8457\u8A2D\u5B9A\u8840\u91CF","finish-loadout"))}),Z("roster").addEventListener("click",i=>{let e=i.target.closest("[data-select]");if(e){pa(e.dataset.select);return}let t=i.target.closest("[data-delta]");if(t){let n=te.characters.find(s=>s.id===t.dataset.id);Ed(n.id,n.hp+Number(t.dataset.delta))}}),Z("roster").addEventListener("input",i=>{!pt&&i.target.matches("[data-hp]")&&i.target.value!==""&&Ed(i.target.dataset.hp,Number(i.target.value),!0)}),Z("roster").addEventListener("change",i=>{if(!i.target.matches("[data-hp]"))return;let e=i.target,t=Number(e.value);e.value===""||!Number.isInteger(t)||t<0||t>999?(e.value=te.characters.find(n=>n.id===e.dataset.hp).hp,e.removeAttribute("aria-invalid"),gn("\u5DF2\u9084\u539F\u4E0A\u4E00\u6B21\u6709\u6548\u8840\u91CF")):Ed(e.dataset.hp,t)}),Z("setup-confirm").addEventListener("click",()=>{let i=[...document.querySelectorAll("[data-hp]")].find(e=>e.value===""||!e.checkValidity());if(i){i.focus(),gn("\u8ACB\u5148\u5B8C\u6210\u6709\u6548\u7684\u521D\u59CB\u8840\u91CF\u8A2D\u5B9A");return}Bc(Jc,"\u521D\u59CB\u8840\u91CF\u5DF2\u78BA\u5B9A\uFF0C\u7B49\u5F85\u4E3B\u6301\u4EBA\u958B\u6230","finish-setup")}),Z("start-battle").addEventListener("click",()=>Bc(jc,`\u7B2C ${te.round} \u8F2A\u6230\u9B25\u958B\u59CB`,"start-battle")),Z("advance-round").addEventListener("click",()=>Bc(rh,te.round<3?`\u5DF2\u63DB\u5EA7\uFF0C\u9032\u5165\u7B2C ${te.round+1} \u8F2A\u6E96\u5099`:"\u6700\u7D42\u63DB\u5EA7\u5B8C\u6210\uFF0C\u4E09\u8F2A\u5C0D\u6230\u7D50\u675F","advance-round")),Z("target-grid").addEventListener("click",i=>{let e=i.target.closest("[data-target]");e&&pa(e.dataset.target)}),Z("attack-methods").addEventListener("click",i=>{let e=i.target.closest("[data-action]");e&&!e.disabled&&ri()&&(sn=e.dataset.action,zt=sn==="flame"?[...eo(te,sn)[0]||[]]:[],Mn=null,jt())}),Z("clear-targets").addEventListener("click",()=>{zt=[],jt()}),Z("attack-button").addEventListener("click",async i=>{if(!ri())return;let e={actorId:i.currentTarget.dataset.actor,actionId:sn,targetIds:[...zt],expectedRevision:Number(i.currentTarget.dataset.revision)};if(!(!e.targetIds.length||Mn)){if(pt){await xs("attack",{actorId:e.actorId,actionId:e.actionId,targetIds:e.targetIds});return}if(Hc(t=>ih(t,e))){let t=te.log.at(-1);si?.playAttackBatch?.({actorId:e.actorId,targets:t.results.map(({targetId:n,killed:s})=>({targetId:n,killed:s}))}),gn(te.phase==="round-end"?"\u672C\u8F2A\u884C\u52D5\u7D50\u675F\uFF0C\u8ACB\u78BA\u8A8D\u7D00\u9304\u4E26\u63DB\u5EA7":`${Yt(e.actorId)}\u5DF2\u884C\u52D5\uFF0C\u63A5\u8457\u7531${Yt($n(te))}\u884C\u52D5`)}}}),Z("pass-button").addEventListener("click",()=>{let i=$n(te);i&&ri()&&(Mn={actorId:i,expectedRevision:pt?nn.revision:te.revision},jt())}),Z("confirm-pass").addEventListener("click",()=>{if(Mn&&ri()){let i={...Mn};pt?xs("pass",{actorId:i.actorId},`${Yt(i.actorId)}\u5DF2\u653E\u68C4\u672C\u6B21\u884C\u52D5`):Hc(e=>sh(e,i),`${Yt(i.actorId)}\u5DF2\u653E\u68C4\u672C\u6B21\u884C\u52D5`)}}),Z("cancel-pass").addEventListener("click",()=>{Mn=null,jt()});for(let i of["reset-all","reset-preview"])Z(i).addEventListener("click",()=>{pt||Z("reset-dialog").showModal()});Z("cancel-reset").addEventListener("click",()=>Z("reset-dialog").close()),Z("confirm-reset").addEventListener("click",()=>{Z("reset-dialog").close(),Gc=!1,Hc(()=>tr(),"\u5DF2\u91CD\u65B0\u958B\u5C40\uFF0C\u8ACB\u5148\u8A2D\u5B9A\u521D\u59CB\u9053\u5177"),document.querySelector('[data-view="overview"]').click()}),document.querySelectorAll("[data-view]").forEach(i=>i.addEventListener("click",()=>{si?.setView(i.dataset.view),document.querySelectorAll("[data-view]").forEach(e=>{let t=e===i;e.classList.toggle("active",t),e.setAttribute("aria-pressed",String(t))})})),Z("reset-camera").addEventListener("click",()=>{si?.resetCamera(),document.querySelector('[data-view="overview"]').click()}),Z("fenrir-toggle").addEventListener("change",i=>si?.setFenrirEnabled(i.target.checked)),Z("quality").addEventListener("change",i=>{let e=i.target.value==="low"?"low":"balanced";try{localStorage.setItem(km,e)}catch{}si?.setQuality(e)})}function sM(i){if(i.phase==="materials"){i.kind==="error"&&gn(i.message);return}if(i.phase==="webgl"){gn(i.kind==="error"?"3D \u756B\u9762\u66AB\u505C\uFF0C\u6B63\u5728\u7B49\u5F85\u6062\u5FA9\u3002\u5C0D\u6230\u64CD\u4F5C\u4ECD\u53EF\u4F7F\u7528\u3002":"3D \u821E\u53F0\u5DF2\u6062\u5FA9");return}i.phase&&i.phase!=="model"||(Td=i.kind,["loaded","ready","success"].includes(i.kind)?(Z("model-badge").textContent="\u82AC\u91CC\u723E 3D \u5DF2\u8F09\u5165",Z("asset-detail").textContent=zc):i.kind==="error"?(Z("model-badge").textContent="\u6A21\u578B\u672A\u8F09\u5165\u30FB\u4F7F\u7528\u66FF\u8EAB",Z("asset-detail").textContent="\u6A21\u578B\u672A\u6210\u529F\u8F09\u5165\uFF0C\u821E\u53F0\u4ECD\u53EF\u4F7F\u7528\u7AD9\u4F4D\u66FF\u8EAB\u3002\u91CD\u65B0\u6574\u7406\u53EF\u518D\u6B21\u5617\u8A66\u3002"):i.kind==="loading"&&(Z("model-badge").textContent="\u8F09\u5165\u82AC\u91CC\u723E\u6A23\u672C\u2026"))}function rM(){if(si?.getLabels){let i=Z("stage").clientWidth,e=Z("stage").clientHeight,t=[],n=si.getLabels().sort((s,r)=>s.y-r.y||s.x-r.x);for(let s of n){let r=Id.get(s.id);if(!r||(r.hidden=!s.visible,!s.visible))continue;let o=r.offsetWidth,a=r.offsetHeight,c=o/2+7,l=Math.max(c,Math.min(i-c,s.x)),h=Math.max(80,Math.min(e-91,s.y)),u=null;e:for(let d of[0,-a-6,a+6,-2*a-12,2*a+12])for(let f of[0,-o/2-6,o/2+6,-o-6,o+6]){let g=Math.max(c,Math.min(i-c,l+f)),x=Math.max(80,Math.min(e-91,h+d)),p={left:g-o/2,right:g+o/2,top:x-a,bottom:x},v=t.reduce((b,_)=>b+Math.max(0,Math.min(p.right+3,_.right)-Math.max(p.left-3,_.left))*Math.max(0,Math.min(p.bottom+3,_.bottom)-Math.max(p.top-3,_.top)),0)*1e6+(g-l)**2+(x-h)**2;if((!u||v<u.score)&&(u={x:g,y:x,box:p,score:v}),v===0)break e}r.style.left=u.x+"px",r.style.top=u.y+"px",t.push(u.box)}}}function oM(){eM(),iM(),wd=Nm({onCommand:(e,t)=>xs(e,t),nameOf:Yt}),jS(),jt();try{let e=KS();Z("quality").value=e,si=Am({canvas:Z("arena"),initialQuality:e,onSelect:pa,onStatus:sM,onFrame:rM,onMetrics:t=>{t.idle===!0?Z("performance-detail").textContent="\u756B\u9762\u975C\u6B62\u6642\u66AB\u505C\u7E6A\u88FD\uFF0C\u64CD\u4F5C\u5F8C\u6703\u7E7C\u7E8C\u66F4\u65B0\u3002":Number.isFinite(t.fps)&&(Z("performance-detail").textContent=`\u76EE\u524D\u88DD\u7F6E\uFF1A\u7D04 ${Math.round(t.fps)} FPS\uFF1B\u6B64\u6578\u503C\u50C5\u4EE3\u8868\u76EE\u524D\u700F\u89BD\u5668\uFF0C\u9700\u53E6\u5916\u6E2C\u8A66\u771F\u5BE6\u624B\u6A5F\u3002`)}}),jt()}catch(e){console.error("Arena initialization failed",e),Z("stage-error").hidden=!1,Z("stage-error").innerHTML='<h2>\u76EE\u524D\u7121\u6CD5\u958B\u555F 3D \u821E\u53F0</h2><p>\u8ACB\u4F7F\u7528\u652F\u63F4 WebGL \u7684 Safari \u6216 Chrome\uFF0C\u6216\u91CD\u65B0\u958B\u555F\u9019\u500B\u7DB2\u9801\u3002\u5C0D\u6230\u64CD\u4F5C\u4ECD\u53EF\u4F7F\u7528\u3002</p><button type="button" id="reload-page">\u91CD\u65B0\u8F09\u5165</button>',Z("reload-page").addEventListener("click",()=>location.reload()),Z("model-badge").textContent="3D \u821E\u53F0\u672A\u555F\u52D5"}let i=new URL("assets/fenrir-report.json",document.baseURI);i.searchParams.set("v",Pc),fetch(i).then(e=>{if(!e.ok)throw new Error("No export report");return e.json()}).then(e=>{let t=e.file_bytes||e.glb_bytes||e.bytes||e.file_size_bytes;zc=`\u82AC\u91CC\u723E\u70BA\u975C\u614B\u89D2\u8272\u6A23\u4EF6${t?`\uFF0C\u6A21\u578B\u4E0B\u8F09\u7D04 ${(t/1e6).toFixed(1)} MB`:""}\u3002\u4F9D\u89D2\u8272\u5728\u756B\u9762\u4E2D\u7684\u5927\u5C0F\u5207\u63DB\u7D30\u7BC0\uFF0C\u89D2\u8272\u8FD1\u770B\u4FDD\u7559\u5B8C\u6574\u6A21\u578B\uFF1B\u6B63\u5F0F\u52D5\u4F5C\u4ECD\u5F85\u88FD\u4F5C\u3002`,Td!=="error"&&(Z("asset-detail").textContent=zc)}).catch(()=>{Td!=="error"&&(Z("asset-detail").textContent=zc)}),window.addEventListener("pagehide",e=>{Zs(),e.persisted||(bi?.destroy(),si?.dispose())}),window.addEventListener("pageshow",e=>{e.persisted&&kt&&bi.resume().catch(()=>{})})}if(Z("battle-banner")&&Z("room-panel")&&Z("trade-panel")&&Z("trade-form")&&Z("flame-fixed-rule")&&Z("attack-methods")&&Z("reset-dialog"))oM();else{let i=new URL(location.href);i.searchParams.get("build")!=="trades-p3b-v1"?(i.searchParams.set("build","trades-p3b-v1"),location.replace(i.href)):(document.body.innerHTML='<main class="reset-dialog" style="margin:32px auto"><h1>\u7DB2\u9801\u6B63\u5728\u66F4\u65B0</h1><p>\u8ACB\u7A0D\u5F8C\u91CD\u65B0\u8F09\u5165\uFF0C\u5373\u53EF\u7E7C\u7E8C\u4E09\u8F2A\u5C0D\u6230\u3002\u5DF2\u4FDD\u5B58\u7684\u9032\u5EA6\u6703\u4FDD\u7559\u3002</p><button type="button" id="retry-version">\u91CD\u65B0\u8F09\u5165</button></main>',Z("retry-version").addEventListener("click",()=>location.reload()))}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
