(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(51)},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),s=a.n(i),l=(a(26),a(4)),c=a(5),o=a(8),d=a(6),m=a(7),h=(a(28),a(30),function(){return r.a.createElement("header",{className:"app-header"},r.a.createElement("img",{src:"imgs/logo.jpg",alt:"logo"}),r.a.createElement("h4",null,"Tour of Avengers"))}),u=a(53),p=(a(32),[{route:"/dashboard",name:"Dashboard"},{route:"/list",name:"Avengers List"},{route:"/add",name:"Add Avenger"},{route:"/compare",name:"Compare"}]),g=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav justify-content-center"},p.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(u.a,{className:"nav-each",activeClassName:"nav-each-active",to:e.route},e.name))})))},v=a(12),f=a(16),b=a(2),E=a(57),w=a(52),y=a(56),k=(a(38),a(40),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={list:[],showList:!1,hoveredResultIndex:null,input:e.initialSearch||""},a.inputHandler=a.inputHandler.bind(Object(b.a)(Object(b.a)(a))),a.documentClickHandler=a.documentClickHandler.bind(Object(b.a)(Object(b.a)(a))),a.keyboardHandler=a.keyboardHandler.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.documentClickHandler),document.addEventListener("keydown",this.keyboardHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.documentClickHandler),document.removeEventListener("keydown",this.keyboardHandler)}},{key:"documentClickHandler",value:function(e){"searchInp"!==e.target.id&&this.setState({showList:!1,hoveredResultIndex:null})}},{key:"keyboardHandler",value:function(e){this.state.showList&&("ArrowDown"===e.key?this.setState(function(e){return{hoveredResultIndex:null!=e.hoveredResultIndex?e.hoveredResultIndex===e.list.length-1?e.hoveredResultIndex:e.hoveredResultIndex+1:0}}):"ArrowUp"===e.key?this.setState(function(e){return{hoveredResultIndex:null!=e.hoveredResultIndex?0===e.hoveredResultIndex?e.hoveredResultIndex:e.hoveredResultIndex-1:0}}):"Enter"===e.key&&(null!=this.state.hoveredResultIndex?this.onSearch(this.state.list[this.state.hoveredResultIndex].name):this.onSearch(this.state.input)))}},{key:"inputHandler",value:function(e){var t=e.target.value;this.setState({input:t,list:""!==t.trim()?this.props.list.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}):[]})}},{key:"onSearch",value:function(e){e&&""!==e.trim()&&this.props.onSearch(e)}},{key:"render",value:function(){var e=this,t="searchResults "+(this.state.showList&&this.state.list.length>0?"searchResultsShow":"searchResultsHide");return r.a.createElement("form",{className:"form"},r.a.createElement("input",{type:"search",className:"searchInput form-control",id:"searchInp",value:this.state.input,placeholder:"Search Avenger",autoComplete:"off",autoCorrect:"off",onChange:this.inputHandler,onFocus:function(t){return e.setState({showList:!0})}}),r.a.createElement("ul",{className:t},this.state.list.map(function(t,a){return r.a.createElement(x,{key:t.id,hovered:a===e.state.hoveredResultIndex,item:t.name,matchedPart:e.state.input,onClick:function(a){e.onSearch(t.name)}})})))}}]),t}(r.a.Component)),x=function(e){var t=e.hovered,a=e.item,n=e.matchedPart,i=e.onClick,s=n.trim(),l=a.toLowerCase().indexOf(s.toLowerCase()),c=l+s.length;return r.a.createElement("li",{className:"searchResultItem "+(t?"hoveredSearchResultItem":""),onClick:i},a.slice(0,l),r.a.createElement("b",null,a.slice(l,c)),a.slice(c))},M=a(14),j=a.n(M),N=a(37),C=function(e){var t=e.id,a=e.name,n=e.imgUrl,i=e.rating;e.history;return a?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",{className:"card",style:{width:"50%",display:"inline-block"}},r.a.createElement("img",{className:"card-img-top",style:{height:"200px"},src:n,alt:"Avenger pic"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title",style:{margin:0}},a),r.a.createElement(j.a,{name:"rate1",editing:!1,value:i}),r.a.createElement("p",null,"To view more infomation ",r.a.createElement(N.a,{to:"/list/".concat(t)},"Click Here"))))):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h3",null,"Oops !..."),r.a.createElement("h4",null,"Avenger with the given name doesn't exist yet."),r.a.createElement("h4",null,"But, you can create one. ",r.a.createElement(N.a,{to:"/add"},"Create")))},O=0,A=function(e){var t=e.avengers,a=e.match,n=e.location,i=e.history,s=D(t),l=P(n),c=U(l,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Top Avengers"),r.a.createElement("div",{className:"row"},s.map(function(e){return r.a.createElement("div",{key:e.id,className:"col-6 col-md-3",style:{cursor:"pointer"},title:"Click to view Details",onClick:function(){return S(i,e.id)}},r.a.createElement("div",{className:"card",style:{minHeight:"150px"}},r.a.createElement("img",{className:"card-img-top shortImg",src:e.imgUrl,alt:"Avenger Img"}),r.a.createElement("div",{className:"card-body cardBody"},r.a.createElement("h5",{className:"card-title"},e.name))))})),r.a.createElement(k,{list:t,initialSearch:l,key:++O,onSearch:function(e){return R(e,i,a)}}),r.a.createElement(w.a,{path:"".concat(a.path,"/search"),render:function(e){return r.a.createElement(C,Object.assign({},e,{id:c.id,name:c.name,imgUrl:c.imgUrl,rating:c.rating}))}}))},S=function(e,t){e.push("/list/".concat(t))},D=function(e){return e.sort(function(e,t){return I(e,t)?-1:1}).slice(0,4)},I=function(e,t){return e.rating+e.powers.length+(e.hasDedicatedMovie?1:0)>=t.rating+t.powers.length+(t.hasDedicatedMovie?1:0)},R=function(e,t,a){t.push("".concat(a.path,"/search?q=").concat(e))},P=function(e){return new URLSearchParams(e.search).get("q")||""},U=function(e,t){var a=e.trim();return t.find(function(e){return a.toLowerCase()===e.name.toLowerCase()})||{}},H=(a(43),a(54)),L=function(e){var t=e.isSelected,a=e.onClick;return r.a.createElement("li",{style:{backgroundColor:t?"#dae0e5":"transparent"},onClick:function(){return a()}},r.a.createElement("img",{src:e.children.imgUrl||"imgs/defaultPic.jpg",alt:"Avenger Img"}),r.a.createElement("h5",null,e.children.name),r.a.createElement(j.a,{name:"rate1",editing:!1,value:e.children.rating}))},F=function(e){var t=e.avengers,a=e.onAvengerClick,n=e.selectedId;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement(L,{key:e.id,isSelected:e.id===n,onClick:function(){return a(e.id)}},e)}))},T=a(1),z=a.n(T),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={newPower:""},a.inputRef=r.a.createRef(),a.handleAddPower=a.handleAddPower.bind(Object(b.a)(Object(b.a)(a))),a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({newPower:e.target.value})}},{key:"handleAddPower",value:function(e){""!==this.state.newPower.trim()&&(this.props.onAddPower(this.state.newPower),this.setState({newPower:""}),this.inputRef.current.focus())}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("input",{style:{width:"80%"},type:"text",value:this.state.newPower,placeholder:"Add Power",ref:this.inputRef,onChange:this.handleChange}),r.a.createElement("button",{className:"btn btn-sm btn-primary",type:"button",onClick:this.handleAddPower},"Add"))}}]),t}(r.a.Component);_.proptypes={onAddPower:z.a.func.isRequired};var W=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).powerListRef=r.a.createRef(),a.listStyles={width:"80%",listStyleType:"decimal",maxHeight:"200px",overflow:"auto",border:"1px solid rgb(0,0,0,0.1)",boxShadow:"5px 5px 10px #d3d3d3"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.scrollPowerList()}},{key:"componentDidUpdate",value:function(e){this.props.powers.length!==e.powers.length&&this.scrollPowerList()}},{key:"scrollPowerList",value:function(){var e=this.powerListRef.current;e.scrollTop=e.scrollHeight}},{key:"render",value:function(){var e=this,t=this.props.powers;return r.a.createElement("div",null,this.props.allowAdd?r.a.createElement(_,{onAddPower:function(t){return e.props.onAddPower(t)}}):null,r.a.createElement("ul",{ref:this.powerListRef,style:this.listStyles},t.map(function(e,t){return r.a.createElement("li",{key:t},e)})))}}]),t}(r.a.Component);W.defaultProps={allowAdd:!1};a(45);var B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={},a.saveBtnHandler=a.saveBtnHandler.bind(Object(b.a)(Object(b.a)(a))),a.isInfoChanged=a.isInfoChanged.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"saveBtnHandler",value:function(){this.isInfoChanged()?(this.props.onAvengerDetailEdited(Object.assign(this.props.avenger,{hasDedicatedMovie:this.state.hasDedicatedMovie,rating:this.state.rating,powers:this.state.powers})),alert("Info Changed Successfully")):alert("No Changes to save")}},{key:"isInfoChanged",value:function(){return this.state.hasDedicatedMovie!==this.state.stateCopy.hasDedicatedMovie||this.state.rating!==this.state.stateCopy.rating||this.state.powers.length!==this.state.stateCopy.powers.length}},{key:"render",value:function(){var e=this,t=this.props.avenger;return t?r.a.createElement("div",{className:"card avenger-detail"},r.a.createElement("img",{className:"card-img-top",style:{height:"200px"},src:t.imgUrl,alt:"Avenger"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.name),r.a.createElement("p",{className:"card-text"},t.description),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Planet : "),t.planet),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Gender : "),"M"===t.gender?"Male":"Female"),r.a.createElement("p",{className:"card-text"},r.a.createElement("label",{htmlFor:"hasMovie"},r.a.createElement("b",null,"Has Dedicated Movie : ")),r.a.createElement("input",{type:"checkbox",checked:this.state.hasDedicatedMovie,id:"hasMovie",name:"hasDedicatedMovie",onChange:function(t){return e.setState({hasDedicatedMovie:t.target.checked})}})),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Rating : "),r.a.createElement("select",{value:this.state.rating,name:"rating",onChange:function(t){e.setState({rating:+t.target.value})}},r.a.createElement("option",{value:"0",disabled:!0},"Select Rating"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Powers : ")),r.a.createElement(W,{powers:this.state.powers,allowAdd:!0,onAddPower:function(t){e.setState(function(e){return{powers:Object(v.a)(e.powers).concat([t])}})}}),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary",onClick:this.saveBtnHandler},"Save Changes"))):r.a.createElement("div",null,"Avenger with given ID doesn't exists yet. But you can add one.")}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.avenger&&e.avenger.id!==t.id?{id:e.avenger.id,hasDedicatedMovie:e.avenger.hasDedicatedMovie,rating:e.avenger.rating,powers:e.avenger.powers,stateCopy:{id:e.avenger.id,hasDedicatedMovie:e.avenger.hasDedicatedMovie,rating:e.avenger.rating,powers:e.avenger.powers}}:null}}]),t}(r.a.Component),q=function(e){var t=e.appliedSort,a=e.onSortSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Sort ",t&&r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})),r.a.createElement("select",{value:t,onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:"",disabled:!0},"Select Sorting"),r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"lh"},"Rating (Low to High)"),r.a.createElement("option",{value:"hl"},"Rating (High to Low)")))},G=function(e){var t=e.appliedFilter,a=e.onFilterSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Filter ",Z(t)&&r.a.createElement("i",{className:"fa fa-check","aria-hidden":"true"})),r.a.createElement("label",{htmlFor:"earth"},r.a.createElement("input",{id:"earth",type:"checkbox",checked:"true"===t.earth,onChange:function(e){return a({earth:e.target.checked,movie:t.movie})}})," From Earth"),r.a.createElement("label",{htmlFor:"movie"},r.a.createElement("input",{id:"movie",type:"checkbox",checked:"true"===t.movie,onChange:function(e){return a({earth:t.earth,movie:e.target.checked})}})," Has Dedicated Movie"))},Z=function(e){return e.movie||e.earth},J=function(e){var t=e.avengers,a=e.match,n=e.location,i=e.history,s=e.onAvengerDetailEdited,l=Object(H.a)(n.pathname,{path:"".concat(a.path,"/:id")}),c=l&&l.params.id?+l.params.id:null,o=c&&t.find(function(e){return c===e.id})||null,d=Q(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row sort-filter"},r.a.createElement("div",{className:"col-xs-12 col-sm-6 sort"},r.a.createElement(q,{appliedSort:d.sort,onSortSelect:function(e){return Y(Object(f.a)({},d,{sort:e}),a,i)}})),r.a.createElement("div",{className:"col-xs-12 col-sm-6 filter"},r.a.createElement(G,{appliedFilter:{earth:d.earth,movie:d.movie},className:"col-6 ",onFilterSelect:function(e){return Y(Object(f.a)({},d,e),a,i)}}))),r.a.createElement("div",{className:"row",style:{paddingTop:"25px"}},r.a.createElement("div",{className:"col-xs-12 col-sm-6 avenger-list"},r.a.createElement(F,{avengers:$(t,d),selectedId:c,onAvengerClick:function(e){return X(e,d,a,i)}})),r.a.createElement("div",{className:" col-xs-12 col-sm-6"},r.a.createElement(w.a,{path:"".concat(a.path,"/:id"),render:function(e){return r.a.createElement(B,{avenger:o,onAvengerDetailEdited:s})}}))))},X=function(e,t,a,n){var r=V(t);n.push("".concat(a.path,"/").concat(e,"/?").concat(r))},Y=function(e,t,a){var n=V(e);a.push("".concat(t.path,"/?").concat(n))},Q=function(e){var t=new URLSearchParams(e.search);return{sort:t.get("sort")||"",earth:t.get("earth")||!1,movie:t.get("movie")||!1}},V=function(e){var t=new URLSearchParams;return e.sort&&t.set("sort",e.sort),e.earth&&t.set("earth",e.earth),e.movie&&t.set("movie",e.movie),t.toString()},$=function(e,t){var a=e;return t.earth&&(a=a.filter(function(e){return"Earth"===e.planet})),t.movie&&(a=a.filter(function(e){return e.hasDedicatedMovie})),t.sort&&("name"===t.sort?a=a.sort(function(e,t){return e.name<=t.name?-1:1}):"lh"===t.sort?a=a.sort(function(e,t){return e.rating<=t.rating?-1:1}):"hl"===t.sort&&(a=a.sort(function(e,t){return e.rating>=t.rating?-1:1}))),a},K=a(18),ee=(a(47),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={name:"",description:"",planet:"",gender:"",powers:[],imgUrl:"",rating:0,hasDedicatedMovie:!1,invalidMsg:""},a.fileRef=r.a.createRef(),a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a.handleImgUpload=a.handleImgUpload.bind(Object(b.a)(Object(b.a)(a))),a.submitHandler=a.submitHandler.bind(Object(b.a)(Object(b.a)(a))),a.onAddPowerHandler=a.onAddPowerHandler.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name;"name"===t||"description"===t||"planet"===t||"rating"===t||"gender"===t?this.setState(Object(K.a)({},t,"rating"===t?+e.target.value:e.target.value)):"hasDedicatedMovie"===t&&this.setState({hasDedicatedMovie:e.target.checked})}},{key:"handleImgUpload",value:function(e){if(e.target.files.length){var t=e.target.files[0];this.state.imgUrl&&window.URL.revokeObjectURL(this.state.imgUrl),this.setState({imgUrl:window.URL.createObjectURL(t)})}}},{key:"onAddPowerHandler",value:function(e){this.setState(function(t){return{powers:Object(v.a)(t.powers).concat([e])}})}},{key:"submitHandler",value:function(e){e.preventDefault();var t=this.giveInvalidMsg();if(t)this.setState({invalidMsg:t});else{this.setState({name:"",description:"",planet:"",gender:"",powers:[],imgUrl:"",rating:0,hasDedicatedMovie:!1,invalidMsg:""});var a=Object.assign({},this.state);delete a.invalidMsg,this.props.onAddAvenger(a),alert("Avenger added successfully")}}},{key:"giveInvalidMsg",value:function(){for(var e in this.state)if("invalidMsg"!==e&&"powers"!==e&&"hasDedicatedMovie"!==e&&"imgUrl"!==e){if(!this.state[e])return"".concat(e.toUpperCase()," is required")}else if("powers"===e&&!this.state[e].length)return"Please provide atleast one power";return""}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.submitHandler,className:"add"},r.a.createElement("label",{htmlFor:"name",className:"form-field"},"Name : "),r.a.createElement("input",{type:"text",value:this.state.name,placeholder:"Enter Name",name:"name",id:"name",className:"form-field",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"description",className:"form-field"},"Description : "),r.a.createElement("textarea",{type:"textarea",value:this.state.description,placeholder:"Enter Description",name:"description",id:"description",onChange:this.handleChange,className:"form-field"}),r.a.createElement("label",{htmlFor:"planet",className:"form-field"},"Planet : "),r.a.createElement("input",{type:"text",value:this.state.planet,placeholder:"Enter Planet",name:"planet",id:"planet",onChange:this.handleChange,className:"form-field"}),r.a.createElement("label",{className:"form-field"},"Gender : "),r.a.createElement("div",{className:"form-field gender"},r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"m",checked:"M"===this.state.gender,value:"M",name:"gender",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"m"},"Male")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"f",checked:"F"===this.state.gender,value:"F",name:"gender",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"f"},"Female"))),r.a.createElement("label",{htmlFor:"hasMovie",className:"form-field movie-label"},"Has Dedicated Movie ?  "),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"checkbox",id:"hasMovie",checked:this.state.hasDedicatedMovie,name:"hasDedicatedMovie",onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"rating",className:"form-field"},"Rating : "),r.a.createElement("select",{value:this.state.rating,name:"rating",id:"rating",onChange:this.handleChange,className:"form-field"},r.a.createElement("option",{value:"0",disabled:!0},"Select Rating"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("input",{type:"file",accept:"image/*",style:{display:"none"},ref:this.fileRef,onChange:this.handleImgUpload}),r.a.createElement("div",{className:"form-field"},r.a.createElement("button",{type:"button",className:" btn btn-primary",onClick:function(){return e.fileRef.current.click()}},this.state.imgUrl?"Change Image":"Upload Image")),r.a.createElement("div",{className:"form-field"},r.a.createElement("img",{src:this.state.imgUrl||"imgs/defaultPic.jpg",alt:"Avenger Img"})),r.a.createElement("label",{className:"form-field"},"Powers :  "),r.a.createElement("div",{className:"form-field"},r.a.createElement(W,{powers:this.state.powers,allowAdd:!0,onAddPower:this.onAddPowerHandler})),this.state.invalidMsg?r.a.createElement("div",{className:"alert alert-danger",style:{width:"70%",textAlign:"center"}},this.state.invalidMsg):null,r.a.createElement("div",{style:{width:"70%",textAlign:"center"}},r.a.createElement("button",{style:{width:"50%"},type:"submit",className:"btn btn-success"},"Submit")))}}]),t}(r.a.Component));ee.proptypes={onAddAvenger:z.a.func.isRequired};a(49);var te=function(e){var t=e.avenger,a=e.won;return r.a.createElement("div",{className:"card av-cmp-card "+(a?"av-cmp-card-winner":"av-cmp-card-loser")},r.a.createElement("img",{className:"card-img-top",style:{height:"200px"},src:t.imgUrl,alt:"Avenger pic"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.name),r.a.createElement("div",null,r.a.createElement("h6",{className:"cmp-property"},"Has Dedicated Movie "),r.a.createElement("i",{className:"cmp-value fa "+(t.hasDedicatedMovie?"fa-check":"fa-times")})),r.a.createElement("div",null," ",r.a.createElement("h6",{className:"cmp-property"}," Rating :"),r.a.createElement(j.a,{className:"cmp-value",name:"rate1",editing:!1,value:t.rating})),r.a.createElement("div",null,r.a.createElement("h6",{className:"cmp-property"},"Total Powers : "),r.a.createElement("div",{className:"cmp-value",style:{textAlign:"right"}},r.a.createElement("span",null,t.powers.length)))))},ae=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={first:"",second:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getWinner",value:function(e,t){var a=e.rating+e.powers.length+(e.hasDedicatedMovie?1:0),n=t.rating+t.powers.length+(t.hasDedicatedMovie?1:0);return a>n?e.id:a<n?t.id:null}},{key:"render",value:function(){var e,t,a=this,n=-1,i="",s=!(!this.state.first||!this.state.second);return s&&(e=this.props.avengers.find(function(e){return e.id===+a.state.first}),t=this.props.avengers.find(function(e){return e.id===+a.state.second}),i=(n=this.getWinner(e,t))?e.id==n?e.name:t.name:""),r.a.createElement("div",{className:"pt-2"},r.a.createElement("div",{className:"alert alert-info"},"Winner is calculated based on the Rating, Powers and Dedicated movie of avengers."),s&&r.a.createElement("div",{className:"pt-2 text-center"},r.a.createElement("h3",{style:{fontWeight:"600"}},n?"Winner : "+i:"This is a Draw")),r.a.createElement("div",{className:"row pt-2"},r.a.createElement("div",{className:"col-6"},r.a.createElement("select",{className:"form-control mb-2",value:this.state.first,onChange:function(e){return a.setState({first:e.target.value})}},r.a.createElement("option",{value:"",disabled:!0},"Select First"),this.props.avengers.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id,disabled:e.id==a.state.second},e.name)})),s&&r.a.createElement(te,{avenger:e,won:e.id==n||!n})),r.a.createElement("div",{className:"col-6"},r.a.createElement("select",{className:"form-control mb-2",value:this.state.second,onChange:function(e){return a.setState({second:e.target.value})}},r.a.createElement("option",{value:"",disabled:!0},"Select Second"),this.props.avengers.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id,disabled:e.id==a.state.first},e.name)})),s&&r.a.createElement(te,{avenger:t,won:t.id==n||!n}))))}}]),t}(r.a.Component),ne=[{id:11,name:"Iron Man",description:'A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward "Tony" Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction, he instead creates a powered suit of armor to save his life and escape captivity.',gender:"M",imgUrl:"https://marciokenobi.files.wordpress.com/2013/03/iron_man.jpg",planet:"Earth",powers:["Flight","Hand-to-hand combat"," Superhuman strength"," Artificial intelligence","Quantum Mechanics"],rating:5,hasDedicatedMovie:!0},{id:12,name:"Captain America",description:"Patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period.",gender:"M",imgUrl:"https://c-5uwzmx78pmca09x24quoqfx2ezivsmzx2ekwu.g00.ranker.com/g00/3_c-5eee.zivsmz.kwu_/c-5UWZMXPMCA09x24pbbx78ax3ax2fx2fquoqf.zivsmz.kwux2fcamz_vwlm_quox2f12x2f447941x2fwzqoqvitx2fkix78biqv-iumzqki-x78pwbw-c35x3fex3d068x26px3d068x26nqbx3dkzwx78x26kzwx78x3dnikmax26yx3d38x26nubx3drx78ox26q98k.uizsx3dquiom_$/$/$/$/$/$",planet:"Earth",powers:["Great Fighter","Has indesctructible shield","Hand-to-hand combat","Patriotic and honest"],rating:4,hasDedicatedMovie:!0},{id:15,name:"Black Widow",description:" She is the first costumed, superpowered female comic book character. An antiheroine who kills evildoers in order to deliver their souls to Satan, her master, she first appears in Mystic Comics #4, published by Marvel predecessor Timely Comics",gender:"F",imgUrl:"https://frpnet.net/wp-content/uploads/2019/01/black-widow-rrated-1-660x330.jpg",planet:"Earth",powers:["Undefined psychic powers","enhanced endurance","invisibility","appearance alteration"],rating:3,hasDedicatedMovie:!1},{id:13,name:"Thor",description:"Based on the Norse mythological deity of the same name, is the Asgardian god of thunder and possesses the enchanted hammer Mjolnir, which grants him the ability of flight and weather manipulation amongst his other superhuman attributes.",gender:"M",imgUrl:"https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/thor2.jpg?itok=hLqpxzjL&timestamp=1383734371",planet:"Asgard",powers:["Flight","Hand-to-hand combat"," Superhuman strength"," Artificial intelligence","Quantum Mechanics"],rating:5,hasDedicatedMovie:!0},{id:14,name:"Spiderman",description:"Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker were killed in a plane crash. Created by writer-editor Stan Lee and writer-artist Steve Ditko.",gender:"M",imgUrl:"https://www.pinkvilla.com/files/styles/fbimagesection/public/spider-man-far-from-home-occupancy-report-india.jpg?itok=oTfjPzth",planet:"Earth",powers:["Precognition","Healing factor","Superhuman speed"],rating:3,hasDedicatedMovie:!0},{id:16,name:"Wanda Maximoff",description:"Wanda Maximoff is a fictional character, whose code name is Scarlet Witch, in the Marvel Cinematic Universe",gender:"F",imgUrl:"https://orig00.deviantart.net/5e82/f/2018/014/c/f/curiosity_1_2__wanda_maximoff_x_male_reader__by_writerantics-dbzxlic.jpg",planet:"Earth",powers:["Reality warping"],rating:2,hasDedicatedMovie:!1},{id:18,name:"Hulk",description:"The character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist, the two existing as independent personalities and resenting of the other.",gender:"M",imgUrl:"https://www.desktopbackground.org/t/2010/10/23/99574_hulk-wallpapers-widescreen_1920x1200_h.jpg",planet:"Earth",powers:["Superhuman strength","stamina and durability","Genius-level intellect"],rating:3,hasDedicatedMovie:!0},{id:17,name:"Mantis",description:"Mantis is a fictional character, a superhero in the Marvel Universe, and former member of the Avengers. The character was ranked 99th in Comics Buyer's Guide's \"100 Sexiest Women in Comics list.",gender:"F",imgUrl:"https://cdn.vox-cdn.com/thumbor/AlX0xlhv14a64bnDJKQ0AaeOy8A=/0x0:2879x1194/1200x800/filters:focal(865x329:1325x789)/cdn.vox-cdn.com/uploads/chorus_image/image/54825235/mantis.0.png",planet:"Knowhere",powers:["Telepathy","Healing factor","Master martial artist"],rating:2,hasDedicatedMovie:!1},{id:19,name:"Loki",description:"He is the adopted brother and often the enemy of the superhero Thor. Loki is based on the Norse deity of the same name and is sometimes depicted as an antihero.",gender:"M",imgUrl:"https://metrouk2.files.wordpress.com/2016/08/loki_avengers-e1471093009466.png",planet:"Asgard",powers:["Master of manipulation and deceit","Illusion casting"],rating:2,hasDedicatedMovie:!1},{id:20,name:"Dr Strange",description:"Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats. Inspired by stories of black magic and Chandu the Magician, Strange was created during the Silver Age of Comic Books to bring a different kind of character and themes of mysticism to Marvel Comics.",gender:"M",imgUrl:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b4f571b-021b-4e83-9679-eb8c5bf8036d/dce767e-d11ec004-52c9-4df3-80fe-3e5a3da21540.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiNGY1NzFiLTAyMWItNGU4My05Njc5LWViOGM1YmY4MDM2ZFwvZGNlNzY3ZS1kMTFlYzAwNC01MmM5LTRkZjMtODBmZS0zZTVhM2RhMjE1NDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Zjr20mqg6KX0fZrQL5TcgC5FXveT6Ldfolw9L_XYqsk",planet:"Earth",powers:["Mastery of magic","IGenius-level intellect","Trained physician"],rating:4,hasDedicatedMovie:!0}],re=function(){return r.a.createElement("h4",{style:{textAlign:"center"}},"No Avengers Found. Please add some Avengers.")},ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={avengers:[],loading:!1,errMsg:""},a.addNewAvenger=a.addNewAvenger.bind(Object(b.a)(Object(b.a)(a))),a.handleAvengerEdit=a.handleAvengerEdit.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"addNewAvenger",value:function(e){var t=Object(f.a)({id:this.state.avengers.length+1+10},e);this.setState(function(e){return{avengers:Object(v.a)(e.avengers).concat([t])}})}},{key:"handleAvengerEdit",value:function(e){var t=this.state.avengers.findIndex(function(t){return t.id===e.id});this.setState(function(a){return{avengers:Object(v.a)(a.avengers.slice(0,t)).concat([e],Object(v.a)(a.avengers.slice(t+1)))}})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;this.setState({loading:!0,errMsg:""}),new Promise(function(e,t){var a=Math.random();setTimeout(function(){a<.85?e(ne):t({msg:"Some error occured while loading"})},1e3)}).then(function(t){return e.setState({avengers:t,loading:!1})}).catch(function(t){return e.setState({errMsg:t.msg||JSON.stringify(t),loading:!1})})}},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement("h5",null,"Loading ...",r.a.createElement("i",{className:"fa fa-spin fa-spinner"})):this.state.errMsg?r.a.createElement("div",{style:{color:"red",textAlign:"center"}},r.a.createElement("h6",null,"Oops ..! ",this.state.errMsg),r.a.createElement("button",{className:"btn btn-clear btn-danger btn-sm",onClick:this.fetchData.bind(this)},"Try Again")):this.state.avengers.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(w.a,{path:"/dashboard",render:function(t){return r.a.createElement(A,Object.assign({avengers:e.state.avengers},t))}}),r.a.createElement(w.a,{path:"/list",render:function(t){return r.a.createElement(J,Object.assign({avengers:e.state.avengers,onAvengerDetailEdited:e.handleAvengerEdit},t))}}),r.a.createElement(w.a,{path:"/add",render:function(t){return r.a.createElement(ee,Object.assign({onAddAvenger:e.addNewAvenger},t))}}),r.a.createElement(w.a,{path:"/compare",render:function(t){return r.a.createElement(ae,{avengers:e.state.avengers})}}),r.a.createElement(w.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(y.a,Object.assign({to:"/dashboard"},e))}}),r.a.createElement(w.a,{render:function(){return r.a.createElement("h1",{style:{textAlign:"center"}},"404 Error")}}))):r.a.createElement(re,null)}}]),t}(r.a.Component),se=function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(g,null),r.a.createElement("main",{className:"container",style:{marginTop:"20px"}},r.a.createElement(ie,null)))}}]),t}(r.a.Component),le=a(55);s.a.render(r.a.createElement(le.a,null,r.a.createElement(se,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.d4b60f3c.chunk.js.map