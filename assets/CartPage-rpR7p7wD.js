import{e as b,j as t,A as g,s as d,L as r,c as m,I as l,f,g as k,h as p,u as v,b as x,i as j}from"./index-CnTS8N5O.js";import{B as C}from"./BackButton-DIK5ma7L.js";const y="_icon_1amas_191",N="_container_1amas_286",B="_grid_1amas_304",A="_cartPage_1amas_334",P="_backButton_1amas_362",$="_backButton__arrow_1amas_376",q="_backButton__text_1amas_384",I="_title_1amas_392",L="_main_1amas_410",w="_checkout_1amas_416",F="_checkout__items_1amas_433",R="_checkout__items__price_1amas_438",S="_checkout__items__total_1amas_445",D="_checkout__divider_1amas_451",E="_checkout__button_1amas_455",M="_emptyCart_1amas_470",O="_emptyCart__title_1amas_490",T="_emptyCart__img_1amas_504",a={"top-bar":"_top-bar_1amas_164","top-bar_left":"_top-bar_left_1amas_177","top-bar_right":"_top-bar_right_1amas_183",icon:y,"icon--favourites":"_icon--favourites_1amas_200","icon--favourites-isActive":"_icon--favourites-isActive_1amas_206","icon--favourites_img":"_icon--favourites_img_1amas_218","icon--favourites_img-count":"_icon--favourites_img-count_1amas_221","icon--cart":"_icon--cart_1amas_243","icon--cart-isActive":"_icon--cart-isActive_1amas_248","icon--cart_img":"_icon--cart_img_1amas_260","icon--cart_img-count":"_icon--cart_img-count_1amas_263",container:N,grid:B,cartPage:A,backButton:P,backButton__arrow:$,backButton__text:q,title:I,main:L,checkout:w,checkout__items:F,checkout__items__price:R,checkout__items__total:S,checkout__divider:D,checkout__button:E,emptyCart:M,emptyCart__title:O,emptyCart__img:T},z="_icon_uiefl_191",Y="_container_uiefl_286",G="_grid_uiefl_304",H="_product_uiefl_334",J="_about_uiefl_353",K="_about__close_uiefl_358",Q="_about__imgLink_uiefl_369",U="_about__img_uiefl_369",V="_about__title_uiefl_381",W="_actions_uiefl_387",X="_actions__buttons_uiefl_397",Z="_actions__buttons__button_uiefl_404",tt="_actions__buttons__button__inner_uiefl_430",_t="_actions__buttons__count_uiefl_454",ct="_actions__price_uiefl_460",c={"top-bar":"_top-bar_uiefl_164","top-bar_left":"_top-bar_left_uiefl_177","top-bar_right":"_top-bar_right_uiefl_183",icon:z,"icon--favourites":"_icon--favourites_uiefl_200","icon--favourites-isActive":"_icon--favourites-isActive_uiefl_206","icon--favourites_img":"_icon--favourites_img_uiefl_218","icon--favourites_img-count":"_icon--favourites_img-count_uiefl_221","icon--cart":"_icon--cart_uiefl_243","icon--cart-isActive":"_icon--cart-isActive_uiefl_248","icon--cart_img":"_icon--cart_img_uiefl_260","icon--cart_img-count":"_icon--cart_img-count_uiefl_263",container:Y,grid:G,product:H,about:J,about__close:K,about__imgLink:Q,about__img:U,about__title:V,actions:W,actions__buttons:X,actions__buttons__button:Z,actions__buttons__button__inner:tt,"actions__buttons__button__inner--disabled":"_actions__buttons__button__inner--disabled_uiefl_434","actions__buttons__button--unactive":"_actions__buttons__button--unactive_uiefl_437",actions__buttons__count:_t,actions__price:ct},at=({prod:_})=>{const i=b(),o=()=>{i(f(_.id))},e=()=>{i(k(_.id))},u=()=>{i(p(_))};return t.jsxs("div",{className:c.product,children:[t.jsxs("div",{className:c.about,children:[t.jsx(g,{className:c.about__close,size:16,onClick:()=>{e(),i(d(["Successfully removed from cart","success"]))}}),t.jsx(r,{to:`/${_.category}/${_.itemId}`,className:c.about__imgLink,children:t.jsx("img",{src:_.image,alt:"phone",className:c.about__img})}),t.jsx(r,{to:`/${_.category}/${_.itemId}`,className:c.about__title,children:_.name})]}),t.jsxs("div",{className:c.actions,children:[t.jsxs("div",{className:c.actions__buttons,children:[t.jsx("button",{onClick:o,disabled:_.quantity<2,className:m(c.actions__buttons__button,{[c["actions__buttons__button--unactive"]]:_.quantity<2}),children:t.jsx(l.Minus,{className:m(c.actions__buttons__button__inner,{[c["actions__buttons__button__inner--disabled"]]:_.quantity<2})})}),t.jsx("p",{className:c.actions__buttons__count,children:_.quantity?_.quantity:"000"}),t.jsx("button",{onClick:u,className:c.actions__buttons__button,children:t.jsx(l.Plus,{className:c.actions__buttons__button__inner})})]}),t.jsxs("h3",{className:c.actions__price,children:["$",_.price*(_.quantity||1)]})]})]})},st="/frontend/img/cart-is-empty.png",nt=()=>{const{t:_}=v(),i=b(),{productsOfCart:o}=x(s=>s.cart),e=o.reduce((s,n)=>s+n.quantity,0),u=()=>o.reduce((s,n)=>s+n.price*(n.quantity||1),0),h=()=>{confirm("Checkout is not implemented yet, do you want to clear a cart?")&&(i(j()),i(d(["Your order is being processed.","success"])))};return t.jsxs("div",{className:a.cartPage,children:[t.jsx("div",{className:a.backButton,children:t.jsx(C,{})}),!o.length&&t.jsxs("div",{className:a.emptyCart,children:[t.jsx("h1",{className:a.emptyCart__title,children:_("cartPage.title.empty")}),t.jsx("img",{src:st,alt:"Empty Cart",className:a.emptyCart__img})]}),!!o.length&&t.jsxs(t.Fragment,{children:[t.jsx("h1",{className:a.title,children:_("cartPage.title.text")}),t.jsx("ul",{className:a.main,children:o.map(s=>t.jsx("li",{className:a.card,children:t.jsx(at,{prod:s})},s.id))}),t.jsxs("div",{className:a.checkout,children:[t.jsxs("div",{className:a.checkout__items,children:[t.jsxs("h2",{className:a.checkout__items__price,children:["$",u()]}),t.jsx("p",{className:a.checkout__items__total,children:_("cartPage.total.items",{total:e})})]}),t.jsx("div",{className:a.checkout__divider}),t.jsx("button",{className:a.checkout__button,onClick:h,children:_("cartPage.total.checkout")})]})]})]})};export{nt as default};