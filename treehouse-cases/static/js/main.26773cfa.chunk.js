(this["webpackJsonptreehouse-cases"]=this["webpackJsonptreehouse-cases"]||[]).push([[0],{119:function(e,t,i){},120:function(e,t,i){"use strict";i.r(t);var r=i(13),a=i(0),n=i.n(a),c=i(24),o=i.n(c),u=i(52),l=i(126),p=i(130),s=i(127),y=i(57),d=i(35),b=Object(a.createContext)(),f=function(){return Object(a.useContext)(b)},h=function(e){return e.cart},m=function(e){return e.customBeerList},x=function(e,t){return m(e).filter((function(e){return e.type===t}))},P=function(e,t){return m(e).filter((function(e){return e.title===t}))},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=[];i=t.type?x(e,t.type):m(e);var r={};return i.forEach((function(e){r[e.title]=1})),Object.keys(r)},C=i(30),q=i(125),j=i(124),g=i(128),M=i(132),S="ADD_TO_CART",O="GO_SHOP",T="REMOVE_FROM_CART",v="REMOVE_FROM_LIST",I=i(133),B=i(129),D=l.a.Text,H=function(e){var t=e.beer,i=e.quantity,a=f().dispatch,n=i>0?"success":"primary";return Object(r.jsxs)(I.b,{direction:"horizontal",children:[Object(r.jsx)(B.a,{style:{width:64},maxLength:3,defaultValue:0,onBlur:function(e){var i=parseInt(e.currentTarget.value);a({type:O,payload:{beer:t,quantity:i}})},value:i}),Object(r.jsxs)(D,{type:n,children:["x ",t]})]})},A=function(){var e=f(),t=e.state,i=e.dispatch,a=h(t),n=function(e,t,i){var r={},a={};t.forEach((function(e){a[e]=0})),i.forEach((function(t){P(e,t).forEach((function(e){var t=e.beer;delete a[e.beer],t in r||(r[t]=0),r[e.beer]+=parseInt(e.quantity)}))}));var n={};Object.keys(r).sort().forEach((function(e){n[e]=r[e]}));var c={};return Object.keys(a).sort().forEach((function(e){c[e]=a[e]})),Object(C.a)(Object(C.a)({},n),c)}(t,function(e){var t={};return m(e).forEach((function(e){"merch"!==e.type&&e.beer&&(t[e.beer]=1)})),Object.keys(t)}(t),a),c="Beer Totals ( ".concat(Object.values(n).reduce((function(e,t){return e+t}),0)," cans )");return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(q.a,{title:"What to Buy",bodyStyle:{padding:"16px 8px"},children:Object(r.jsx)(j.b,{size:"small",dataSource:a.sort(),renderItem:function(e){return Object(r.jsxs)(j.b.Item,{style:{padding:"0px"},children:[Object(r.jsx)(g.a,{style:{color:"red"},type:"link",onClick:function(){i({type:T,payload:e})},children:Object(r.jsx)(M.a,{})},e)," ",e]})}})}),Object(r.jsx)(q.a,{title:c,children:Object(r.jsx)(j.b,{dataSource:Object.keys(n),renderItem:function(e){return Object(r.jsx)(j.b.Item,{children:Object(r.jsx)(H,{beer:e,quantity:n[e]},"ci-".concat(e))})}})})]})},w=i(131),G=i(98),L=[{type:"four",title:"Beneficiaries of Chance Pale Ale [4-pack]",price:"14.20",quantity:"4",beer:"Beneficiaries of Chance"},{type:"single",title:"Chocolate Fudge Cake Imperial Milk Stout with Chocolate and Vanilla",price:"12.00",quantity:"1",beer:"Fudge"},{type:"single",title:"Love Imperial Red Velvet Cake Milk Stout",price:"12.00",quantity:"1",beer:"Love Imperial Red Velvet Cake Milk Stout"},{type:"single",title:"Big Nugget Barrel-Blended Imperial Stout with Almonds + Coconut",price:"10.00",quantity:"1",beer:"Big Nugget"},{type:"case",title:"Julius Case",price:"91.20",quantity:"24",beer:"Julius"},{type:"four",title:"Nervous Energy Milk Stout with Maple + Vanilla + Cinnamon [4-pack]",price:"21.20",quantity:"4",beer:"Nervous Energy"},{type:"four",title:"Guava + Peach + Hibiscus Tart [4-pack]",price:"15.20",quantity:"4",beer:"Guava + Peach + Hibiscus Tart [4-pack]"},{type:"four",title:"Fruit Project Passionfruit + Peach Fruited Double IPA [4-pack]",price:"21.20",quantity:"4",beer:"Fruit Project Passionfruit + Peach Fruited Double IPA [4-pack]"},{type:"four",title:"Iridescent Fruited Double IPA with Peach + Guava + Coconut [4-pack]",price:"20.20",quantity:"4",beer:"Iridescent"},{type:"four",title:"Super Typhoon Double IPA [4-Pack]",price:"20.20",quantity:"4",beer:"Super Typhoon"},{type:"four",title:"On The Fly Imperial IPA [4-pack]",price:"20.20",quantity:"4",beer:"On The Fly"},{type:"four",title:"Juice Project Citra + Simcoe Cold-hopped Double IPA [4-pack]",price:"21.20",quantity:"4",beer:"Juice Project Citra + Simcoe"},{type:"merch",title:"Tree House Bottle Opener",price:"8.00",quantity:1,beer:"Tree House Bottle Opener"},{type:"merch",title:"Van Life Sticker [New!]",price:"2.00",quantity:1,beer:"Van Life Sticker [New!]"},{type:"single",title:"Steadfast Barrel-blended Imperial Stout with Chocolate + Coffee",price:"10.00",quantity:"1",beer:"Steadfast"},{type:"merch",title:"Coleman Cooler with Tree House Logo",price:"40.00",quantity:1,beer:"Coleman Cooler with Tree House Logo"},{type:"merch",title:"Speckled Almond Coffee Mug",price:"10.00",quantity:1,beer:"Speckled Almond Coffee Mug"},{type:"four",title:"Doubleganger Double IPA [4-pack]",price:"20.20",quantity:"4",beer:"Doubleganger"},{type:"single",title:"Impermanence Imperial Milk Stout with Chocolate + Maple + Coffee {single can}",price:"8.55",quantity:"1",beer:"Impermanence"},{type:"merch",title:"Nomad Sinus Glass",price:"10.00",quantity:1,beer:"Nomad Sinus Glass"},{type:"four",title:"Super Radiant Fruited Double IPA with Extra Peach [4-pack]",price:"21.20",quantity:"4",beer:"Super Radiant"},{type:"merch",title:"Tree House Coffee Company Hat",price:"25.00",quantity:1,beer:"Tree House Coffee Company Hat"},{type:"merch",title:"60 Oz. Pitcher",price:"14.00",quantity:1,beer:"60 Oz. Pitcher"},{type:"merch",title:"MiiR Can Chiller",price:"25.00",quantity:1,beer:"MiiR Can Chiller"},{type:"merch",title:"White Logo 15.25 oz Spiegelau Cognac Glass",price:"12.00",quantity:1,beer:"White Logo 15.25 oz Spiegelau Cognac Glass"},{type:"merch",title:"1 Liter Rastal Tankard with Stacked Tree House Logo",price:"12.00",quantity:1,beer:"1 Liter Rastal Tankard with Stacked Tree House Logo"},{type:"merch",title:"Rastal Teku with Tree House Logo [Choose Color!]",price:"10.00",quantity:1,beer:"Rastal Teku with Tree House Logo [Choose Color!]"},{type:"merch",title:"Tulip Glass with Tree House logo [Choose Color!]",price:"6.00",quantity:1,beer:"Tulip Glass with Tree House logo [Choose Color!]"},{type:"merch",title:"Willi Becher Glass - Tree House Logo [Choose Color!]",price:"6.00",quantity:1,beer:"Willi Becher Glass - Tree House Logo [Choose Color!]"},{type:"merch",title:"Peru - Finca La Lima [Limited Whole Bean Coffee] **NEW!**",price:"17.00",quantity:1,beer:"Peru - Finca La Lima [Limited Whole Bean Coffee] **NEW!**"},{type:"merch",title:"Tree House Puzzles (1000 Piece)",price:"23.00",quantity:1,beer:"Tree House Puzzles (1000 Piece)"},{type:"merch",title:"Juice Project Teku",price:"12.00",quantity:1,beer:"Juice Project Teku"},{type:"merch",title:"Fair & Square Whole Bean Coffee",price:"16.50",quantity:1,beer:"Fair & Square Whole Bean Coffee"},{type:"merch",title:"Tree House Blend Coffee - House-roasted Core Blend",price:"15.00",quantity:1,beer:"Tree House Blend Coffee - House-roasted Core Blend"},{type:"merch",title:"Juice Machine Teku",price:"12.00",quantity:1,beer:"Juice Machine Teku"},{type:"merch",title:"Monochrome Medium-Dark Roast Blend [Whole Bean]",price:"15.00",quantity:1,beer:"Monochrome Medium-Dark Roast Blend [Whole Bean]"},{type:"merch",title:"Aurora - Blended Coffee [New!]",price:"15.00",quantity:1,beer:"Aurora - Blended Coffee [New!]"},{type:"merch",title:"Ultimate Coffee Lover's Starter Kit",price:"105.00",quantity:1,beer:"Ultimate Coffee Lover's Starter Kit"},{type:"merch",title:"Paragon Espresso Blend",price:"15.75",quantity:1,beer:"Paragon Espresso Blend"},{type:"merch",title:"Staff Acknowledgement [Tip Jar]",price:"3.00",quantity:1,beer:"Staff Acknowledgement [Tip Jar]"},{type:"merch",title:"Tree House Diamond Logo Tote Bag!",price:"10.00",quantity:1,beer:"Tree House Diamond Logo Tote Bag!"},{type:"merch",title:"Tree House Coffee Company Diner Mug",price:"10.00",quantity:1,beer:"Tree House Coffee Company Diner Mug"},{type:"merch",title:"CHEMEX Bonded Filters",price:"9.50",quantity:1,beer:"CHEMEX Bonded Filters"},{type:"four",title:"Nomad Czech-style Dark Lager [4 Pack]",price:"13.20",quantity:"4",beer:"Nomad"},{type:"single",title:"Warmth - Belgian-style Quadrupel [12 oz Bottle]",price:"4.00",quantity:"1",beer:"Warmth"},{type:"single",title:"Sweet Ride - Peanut Butter + Hazelnut Coffee / Imperial Milk Stout",price:"12.00",quantity:"1",beer:"Sweet Ride - Peanut Butter + Hazelnut Coffee / Imperial Milk Stout"},{type:"single",title:"Sweet Ride Cookies and Cream Banana Cream Sundae",price:"12.00",quantity:"1",beer:"Sweet Ride Cookies and Cream Banana Cream Sundae"},{type:"single",title:"The Universe Is Indifferent - Imperial Milk Stout with Chocolate + Coffee [500 ML Bottle]",price:"12.00",quantity:"1",beer:"The Universe Is Indifferent"},{type:"single",title:"Tree Of Life Blended Barleywine - Batch Two",price:"6.05",quantity:"1",beer:"Tree Of Life Blended Barleywine - Batch Two"},{type:"single",title:"Sweet Ride - Espresso + Raspberry + Vanilla / Imperial Milk Stout [500 ML Bottle]",price:"12.00",quantity:"1",beer:"Sweet Ride - Espresso + Raspberry + Vanilla / Imperial Milk Stout [500 ML Bottle]"},{type:"single",title:"Sweet Ride Fluffernutter",price:"12.00",quantity:"1",beer:"Sweet Ride Fluffernutter"},{type:"merch",title:"The Tree House CHEMEX",price:"80.00",quantity:1,beer:"The Tree House CHEMEX"},{type:"single",title:"Cozy Baltic Porter [500 ML Bottle]",price:"6.50",quantity:"1",beer:"Cozy"},{type:"single",title:"Permanence Decadent Imperial Milk Stout with Maple + Chocolate + Coffee [500 ML Bottle]",price:"12.00",quantity:"1",beer:"Permanence"},{type:"four",title:"Single Shot Coffee Milk Stout with House-roasted Coffee [4-pack]",price:"18.20",quantity:"4",beer:"Single Shot Coffee Milk Stout with House-roasted Coffee [4-pack]"},{type:"four",title:"Spring Seasonal Double IPA [4-pack]",price:"18.20",quantity:"4",beer:"Spring"},{type:"merch",title:"St. Paddy's Day Can Caddie",price:"3.00",quantity:1,beer:"St. Paddy's Day Can Caddie"},{type:"four",title:"Beginner's Mind Double IPA [4-pack]",price:"20.20",quantity:"4",beer:"Beginner's Mind"},{type:"four",title:"Human Condition - Milk Stout with Coconut + Chocolate + Coffee",price:"21.20",quantity:"4",beer:"Human Condition"},{type:"four",title:"Simple Life Imperial S'mores Milk Stout with Chocolate + Marshmallow + Graham Crackers [4-pack]",price:"34.20",quantity:"4",beer:"Simple Life Imperial S'mores Milk Stout with Chocolate + Marshmallow + Graham Crackers [4-pack]"},{type:"four",title:"GGGreennn Extra Kettle + Dry Hopped American IPA",price:"19.20",quantity:"4",beer:"GGGreennn"},{type:"single",title:"[Blank] Barrel-aged Imperial Stout",price:"19.00",quantity:"1",beer:"[Blank] Barrel-aged Imperial Stout"},{type:"four",title:"Moment of Clarity Milk Stout with Chocolate + Coffee + Maple",price:"21.20",quantity:"4",beer:"Moment of Clarity"},{type:"twelve",title:"Haze Double IPA - 12 oz. Cans [12-pack]",price:"39.60",quantity:"12",beer:"Haze"},{type:"merch",title:"Cold Brew - House Blend!",price:"10.00",quantity:1,beer:"Cold Brew - House Blend!"},{type:"case",title:"Green Case",price:"91.20",quantity:"24",beer:"Green"},{type:"mixed",title:"Peaches and Pineapples Mix Pack",price:"97.20",quantity:"12",beer:"Green"},{type:"mixed",title:"Peaches and Pineapples Mix Pack",price:"97.20",quantity:"12",beer:"Haze"},{type:"case",title:"Alter Ego Case",price:"91.20",quantity:"24",beer:"Alter Ego"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"2",beer:"Fruit Project with Peach and PF"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"2",beer:"Doubleganger"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"2",beer:"Green"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"2",beer:"Haze"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"2",beer:"Julius"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"3",beer:"Juice Project"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"3",beer:"Juice Project Citra + Simcoe"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"2",beer:"On The Fly"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"2",beer:"Spring"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"2",beer:"Super Treat"},{type:"mixed",title:"Quintessential Tree House Mix Pack",price:"113.70",quantity:"2",beer:"Very Green"},{type:"mixed",title:"Pretty Proper Cans Mix Pack",price:"106.20",quantity:"4",beer:"Alter Ego"},{type:"mixed",title:"Pretty Proper Cans Mix Pack",price:"106.20",quantity:"4",beer:"Doubleganger"},{type:"mixed",title:"Pretty Proper Cans Mix Pack",price:"106.20",quantity:"4",beer:"Green"},{type:"mixed",title:"Pretty Proper Cans Mix Pack",price:"106.20",quantity:"4",beer:"Julius"},{type:"mixed",title:"Pretty Proper Cans Mix Pack",price:"106.20",quantity:"4",beer:"Super Treat"},{type:"mixed",title:"Pretty Proper Cans Mix Pack",price:"106.20",quantity:"4",beer:"Very Green"},{type:"four",title:"JJJULIUSSS Extra Kettle + Dry Hopped IPA [4-pack]",price:"18.20",quantity:"4",beer:"JJJULIUSSS"},{type:"four",title:"Fascination Fruited Double IPA [4-pack]",price:"20.20",quantity:"4",beer:"Fascination Fruited Double IPA [4-pack]"},{type:"four",title:"Juice Project Cold-hopped Double IPA [4-pack]",price:"21.20",quantity:"4",beer:"Juice Project"},{type:"four",title:"Super Treat Double IPA [4-pack]",price:"20.20",quantity:"4",beer:"Super Treat"},{type:"four",title:"Double Shot Espresso Imperial Coffee Stout with Extra Coffee [4-pack]",price:"34.20",quantity:"4",beer:"Double Shot Espresso Imperial Coffee Stout with Extra Coffee [4-pack]"},{type:"four",title:"Curiosity One Hundred Nine Experimental Double IPA [4-pack]",price:"21.20",quantity:"4",beer:"Curiosity One Hundred Nine Experimental Double IPA [4-pack]"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Very Green"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Super Treat"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Spring"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"On The Fly"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Juice Project Citra + Simcoe"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Juice Project"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Haze"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Fruit Project with Peach and PF"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Fruit Project with Mango & Stonefruit"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Fascination"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Doubleganger"},{type:"mixed",title:"Give Me All Of Your Double IPAs Mix Pack!",price:"118.70",quantity:"2",beer:"Beginner's Mind"},{type:"four",title:"Fruit Project Mango + Stonefruit [4-pack]",price:"21.20",quantity:"4",beer:"Fruit Project Mango + Stonefruit [4-pack]"},{type:"mixed",title:"Dream Team Mix Pack - Crushable Edition!",price:"87.20",quantity:"8",beer:"Julius"},{type:"mixed",title:"Dream Team Mix Pack - Crushable Edition!",price:"87.20",quantity:"8",beer:"Green"},{type:"mixed",title:"Dream Team Mix Pack - Crushable Edition!",price:"87.20",quantity:"8",beer:"Haze"},{type:"mixed",title:"Drink Your Greens Mix Pack",price:"114.20",quantity:"4",beer:"Very Green"},{type:"mixed",title:"Drink Your Greens Mix Pack",price:"114.20",quantity:"4",beer:"Green"},{type:"mixed",title:"Drink Your Greens Mix Pack",price:"114.20",quantity:"4",beer:"GGGreennn"},{type:"mixed",title:"Drink Your Greens Mix Pack",price:"114.20",quantity:"4",beer:"On The Fly"},{type:"mixed",title:"Drink Your Greens Mix Pack",price:"114.20",quantity:"4",beer:"JJJULIUSSS"},{type:"mixed",title:"Drink Your Greens Mix Pack",price:"114.20",quantity:"4",beer:"Juice Project Citra + Simcoe"},{type:"four",title:"Very Green Double IPA [4-pack]",price:"20.20",quantity:"4",beer:"Very Green"},{type:"merch",title:"Teal Craftmaster Glass",price:"8.00",quantity:1,beer:"Teal Craftmaster Glass"},{type:"mixed",title:"Dream Team Legends Edition Mix Pack",price:"106.20",quantity:"6",beer:"Very Green"},{type:"mixed",title:"Dream Team Legends Edition Mix Pack",price:"106.20",quantity:"6",beer:"Green"},{type:"mixed",title:"Dream Team Legends Edition Mix Pack",price:"106.20",quantity:"6",beer:"Julius"},{type:"mixed",title:"Dream Team Legends Edition Mix Pack",price:"106.20",quantity:"6",beer:"Super Treat"}],E=function(e){return function(t,i){return t[e].localeCompare(i[e])}},F=L.sort(E("title")),J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F;return t.filter((function(t){return t.type===e}))},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F;return t.filter((function(t){return t.beer===e}))},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F;return t.filter((function(t){return t.title===e}))},V=function(e,t){var i=0;return t.forEach((function(t){var r=function(e,t){var i=z(e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:F);return R(t,i)}(t,e);r.length>0&&(i+=parseInt(r[0].quantity))})),i},Y=function(e,t,i){var r=Object(G.a)(e);return t.forEach((function(t){for(var a=t.beer,n=parseInt(t.quantity)-V(a,e);n>0;){var c=J("mixed",i),o=R(a,c).sort(E("quantity")).reverse();if(0===o.length)return r;o.forEach((function(e){var t=parseInt(e.quantity),i=e.title;(t<=n||n-t<0&&n>0)&&(r.push(i),n-=t)}))}})),r},N=l.a.Text,W=l.a.Title,Q=function(e){var t=e.title,i=f(),n=i.state,c=i.dispatch,o=P(n,t),l=h(n),p=Object(a.useState)(0),s=Object(u.a)(p,2),y=s[0],d=s[1];Object(a.useEffect)((function(){l&&d(l.filter((function(e){return e===t})).length)}),[t,l]);var b=function(){c({type:T,payload:t}),y>0&&d(y-1)},m=function(e){return l.some((function(t){return z(t).some((function(t){return t.beer===e}))}))?{fontWeight:600,color:"#18a343"}:{}};return Object(r.jsxs)(I.b,{direction:"vertical",style:{width:"100%",padding:"8px 16px"},children:[Object(r.jsx)(W,{level:5,children:t}),Object(r.jsx)(j.b,{grid:{gutter:8,column:function(e){return e.length<5?e.length:5}(o)},dataSource:o,renderItem:function(e){return Object(r.jsx)(j.b.Item,{children:Object(r.jsx)(N,{style:m(e.beer),children:"".concat(e.quantity,"x ").concat(e.beer)})})}}),Object(r.jsxs)(I.b,{direction:"horizontal",children:[Object(r.jsx)(g.a,{variant:"outlined",onClick:function(){c({type:S,payload:t}),d(y+1)},children:"Add"}),Object(r.jsx)(g.a,{variant:"outlined",onClick:b,children:"Remove"}),Object(r.jsx)(g.a,{children:y}),Object(r.jsx)(g.a,{onClick:function(e){c({type:v,payload:t}),b()},children:Object(r.jsx)(w.a,{})})]})]})},U=function(e){var t=e.items;e.cart;return Object(r.jsx)(I.b,{direction:"vertical",size:"large",children:t.map((function(e){return Object(r.jsx)(Q,{title:e},"p-".concat(e))}))})},_=(i(119),l.a.Title),K={marginLeft:"16px",textTransform:"capitalize"},X=["mixed","case","four","six","twelve","single","merch","unknown"];var Z=function(){var e=f().state,t=Object(a.useState)("mixed"),i=Object(u.a)(t,2),n=i[0],c=i[1],o=function(e){c(e.key)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.a,{children:Object(r.jsx)(s.a,{mode:"horizontal",defaultSelectedKeys:[n],children:X.map((function(t){return Object(r.jsxs)(s.a.Item,{onClick:o,children:[t,"(",k(e,{type:t}).length,")"]},t)}))})}),Object(r.jsxs)(y.a,{children:[Object(r.jsxs)(d.a,{xs:23,sm:16,style:{overflow:"auto",height:"100vh"},children:[Object(r.jsx)(_,{level:3,style:K,children:n}),Object(r.jsx)(U,{items:k(e,{type:n})})]}),Object(r.jsx)(d.a,{xs:1,sm:8,className:"sider-padding",theme:"light",children:Object(r.jsx)(A,{},"cart")})]})]})},$={mainBeerList:L,customBeerList:L,cart:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.type,r=t.payload;switch(i){case S:return Object(C.a)(Object(C.a)({},e),{},{cart:e.cart.concat([r])});case T:return Object(C.a)(Object(C.a)({},e),{},{cart:e.cart.filter((function(e){return e!==r}))});case v:var a=e.customBeerList.filter((function(e){return e.title!==r}));return Object(C.a)(Object(C.a)({},e),{},{customBeerList:a});case O:var n=Y(e.cart,[Object(C.a)({},r)],e.customBeerList);return Object(C.a)(Object(C.a)({},e),{},{cart:n});default:return e}};var te=function(e){var t=e.children,i=Object(a.useReducer)(ee,$),n=Object(u.a)(i,2),c=n[0],o=n[1],l=Object(a.useMemo)((function(){return{state:c,dispatch:o}}),[c,o]);return Object(r.jsx)(b.Provider,{value:l,children:t})},ie=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,134)).then((function(t){var i=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),r(e),a(e),n(e),c(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(te,{children:Object(r.jsx)(Z,{})})}),document.getElementById("root")),ie()}},[[120,1,2]]]);
//# sourceMappingURL=main.26773cfa.chunk.js.map