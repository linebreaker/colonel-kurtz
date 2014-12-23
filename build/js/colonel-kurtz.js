module.exports=function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function i(t){"use strict";this.id=u(),this.el=t.el,this.$ColonelKurtz_callbacks=[],s.subscribe(function(){return this.simulateChange()}.bind(this)),c(Object.assign({id:this.id},t)),a(this.id),t.seed&&p(o.last().id,t.seed),setTimeout(this.simulateChange.bind(this),10)}Object.assign||(Object.assign=n(29)),n(30);var r=n(42),o=n(4),s=n(6),a=n(18),c=n(21),l=n(1),p=n(58),u=n(14);n(65),i.prototype.render=function(){"use strict";return l.render(this.$ColonelKurtz_rootComponent(),this.$ColonelKurtz_getDomElement()),this},i.prototype.simulateChange=function(){"use strict";this.$ColonelKurtz_runCallbacks()},i.prototype.addCallback=function(t){"use strict";this.$ColonelKurtz_callbacks=this.$ColonelKurtz_callbacks.concat(t)},i.prototype.removeCallback=function(t){"use strict";this.$ColonelKurtz_callbacks=this.$ColonelKurtz_callbacks.filter(function(e){return e!==t})},i.prototype.toJSON=function(){"use strict";var t=o.findByEditorId(this.id);return t?t.toJSON():{}},i.prototype.toHtml=function(){"use strict";return l.renderToStaticMarkup(this.$ColonelKurtz_rootComponent())},i.prototype.$ColonelKurtz_rootComponent=function(){"use strict";return l.createElement(r,{editorId:this.id})},i.prototype.$ColonelKurtz_getDomElement=function(){"use strict";return this.el},i.prototype.$ColonelKurtz_runCallbacks=function(){"use strict";var t=this.toJSON();this.$ColonelKurtz_callbacks.forEach(function(e){e(t)})},i.createBlock=n(28),i.addBlockType=n(57),t.exports=i},function(t){t.exports=require("react")},function(t,e,n){var i=n(31).Dispatcher;t.exports=new i},function(t,e,n){var i=n(60);t.exports=i({EDIT_MODE:null,PREVIEW_MODE:null})},function(t,e,n){var i=n(55),r=n(13),o=n(6),s=n(2),a=[],c={all:function(){return a},last:function(){return a[a.length-1]},findByKey:function(t,e){return this.all().find(function(n){return n[t]===e})||null},findByEditorId:function(t){return c.findByKey("editorId",t)},findByBlockId:function(t){return c.findByKey("blockId",t)},find:function(t){return c.findByKey("id",t)},_create:function(t){a=a.concat(new i({editorId:t}))},_createFromParent:function(t){var e=this.find(t.parentBlockListId);if(e){var n=new i({editorId:e.editorId,blockId:t.id});a=a.concat(n)}},_addBlockToList:function(t,e){var n=this.find(t.parentBlockListId);n&&(n.insertBlock(t.id,e),o.publish())},_removeBlockFromList:function(t,e){var n=this.find(e);n&&(n.removeBlock(t),o.publish())},_move:function(t,e,n){var i=this.find(t);i&&(i.move(e,n),o.publish())},dispatchToken:s.register(function(t){switch(t.type){case n(7):s.waitFor([r.dispatchToken]),c._addBlockToList(t.block,t.position),c._createFromParent(t.block,t.position);break;case n(11):s.waitFor([r.dispatchToken]),c._removeBlockFromList(t.blockId,t.parentBlockListId);break;case n(18):c._create(t.editorId);break;case n(19):c._move(t.blockListId,t.fromId,t.toId)}})};t.exports=c},function(t){"use strict";var e=function(t,e,n,i,r,o,s,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,i,r,o,s,a],p=0;c=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return l[p++]}))}throw c.framesToPop=1,c}};t.exports=e},function(t,e,n){var i=(n(5),[]),r={unsubscribe:function(t){i=i.filter(function(e){return e!==t})},subscribe:function(t){i=i.concat(t)},publish:function(){i.forEach(function(t){return t()})}};t.exports=r},function(t,e,n){var i=n(2);t.exports=function r(t){var e=t.position;i.dispatch({type:r,params:t,position:e})}},function(t,e,n){var i=n(6),r=(n(5),{getInitialState:function(){return this.getState()},updateState:function(){this.setState(this.getState())},componentDidMount:function(){i.subscribe(this.updateState)},componentWillUnmount:function(){i.unsubscribe(this.updateState)},componentWillReceiveProps:function(){this.updateState()}});t.exports=r},function(t,e,n){var i=n(2),r=(n(1),n(5)),o=[],s={icon:null,types:null},a={keys:function(){return o.map(function(t){return t.id})},find:function(t){var e=o.find(function(e){return e.id===t});if(!e)throw Error("BlockType "+e+" could not be found");return e},_create:function(t){var e=Object.assign({},s,t);r(e.id,"BlockType must have an identifier"),o=o.concat(e)},dispatchToken:i.register(function(t){switch(t.type){case n(20):a._create(t.params)}})};t.exports=a},,function(t,e,n){var i=n(2);t.exports=function r(t){i.dispatch(Object.assign({type:r},t))}},function(t,e,n){var i=n(1),r=i.createClass({displayName:"Button",getDefaultProps:function(){return{tagName:"button"}},render:function(){var t=this.props,e=t.children,n=t.tagName,r=function(t,e){var n={},i=Object.prototype.hasOwnProperty;if(null==t)throw new TypeError;for(var r in t)i.call(t,r)&&!i.call(e,r)&&(n[r]=t[r]);return n}(t,{children:1,tagName:1});return i.createElement(n,r,[e])}});t.exports=r},function(t,e,n){var i=n(6),r=n(54),o=n(2),s=[],a={all:function(){return s},last:function(){return s[s.length-1]},find:function(t){return s.find(function(e){return e.id===t})},_create:function(t){var e=t.content,n=t.type,o=t.parentBlockListId,a=new r({content:e,type:n,parentBlockListId:o});return s=s.concat(a),i.publish(),a},_destroy:function(t){s=s.filter(function(e){return e.id!==t}),i.publish()},_update:function(t,e){var n=a.find(t);n&&(n.content=Object.assign({},n.content,e),i.publish())},dispatchToken:o.register(function(t){switch(t.type){case n(7):var e=a._create(t.params);t.block=e;break;case n(11):a._destroy(t.blockId);break;case n(17):a._update(t.blockId,t.content)}})};t.exports=a},function(t){var e=0,n=function(){return e+=1};t.exports=n},,,function(t,e,n){var i=n(2);t.exports=function r(t,e){i.dispatch({type:r,blockId:t,content:e})}},function(t,e,n){var i=n(2);t.exports=function r(t){i.dispatch({type:r,editorId:t})}},function(t,e,n){var i=n(2);t.exports=function r(t,e,n){i.dispatch({type:r,blockListId:t,fromId:e,toId:n})}},function(t,e,n){var i=n(2);t.exports=function r(t){i.dispatch({type:r,params:t})}},function(t,e,n){var i=n(2);t.exports=function r(t){i.dispatch({type:r,params:t})}},function(t,e,n){var i=n(2);t.exports=function r(t,e){i.dispatch({type:r,id:t,params:e})}},function(t,e,n){var i=n(9),r=n(8),o=n(53),s=n(1),a=n(17),c=s.createClass({displayName:"Block",mixins:[r,o],propTypes:{block:s.PropTypes.any.isRequired},getState:function(){return i.find(this.props.block.type)},render:function(){var t=this.props,e=t.block,n=function(t,e){var n={},i=Object.prototype.hasOwnProperty;if(null==t)throw new TypeError;for(var r in t)i.call(t,r)&&!i.call(e,r)&&(n[r]=t[r]);return n}(t,{block:1}),i=this.state,r=i.component;return s.createElement(r,s.__spread({initialContent:e.content,updateContent:this._onUpdateContent},n))},_onUpdateContent:function(t){a(this.props.block.id,t)}});t.exports=c},function(t,e,n){var i=n(43),r=n(46),o=n(26),s=n(66),a=s.addons.CSSTransitionGroup,c=s.createClass({displayName:"EditorBlockList",propTypes:{},mixins:[o],getBlockMenu:function(t){var e=this.props,n=e.block,r=e.editor;return s.createElement(i,{key:"block_menu",block:n,editor:r,parentBlockListId:this.blockListId(),position:t})},getBlock:function(t,e){return s.createElement("div",{key:t},s.createElement(r,{initialBlockId:t,editor:this.props.editor}),this.getBlockMenu(e+1))},render:function(){var t=this.state.blockIds;return s.createElement(a,{component:"div",className:"col-blocks",transitionName:"col-block"},this.getBlockMenu(0),t.map(this.getBlock))}});t.exports=c},function(t,e,n){var i=n(26),r=n(49),o=n(1),s=o.createClass({displayName:"PreviewerBlockList",mixins:[i],blockComponents:function(){return this.state.blockIds.map(function(t){return o.createElement(r,{key:t,initialBlockId:t})})},render:function(){return o.createElement("div",{className:"col-blocks"},this.blockComponents())}});t.exports=s},function(t,e,n){var i=n(4),r=n(8),o=(n(1),{mixins:[r],getState:function(){return{blockIds:this.blockIds()}},blockList:function(){return i.find(this.blockListId())},blockListId:function(){return this.props.initialBlockListId},blockIds:function(){var t=this.blockList();return t?t.all():[]}});t.exports=o},function(t,e,n){var i=n(1),r=n(13),o=n(4),s={propTypes:{editor:i.PropTypes.any.isRequired},getInitialState:function(){var t=this.props.initialBlockId;return{block:r.find(t),blockList:o.findByBlockId(t)}},childBlockListComponent:function(){var t=this.state,e=t.block,n=t.blockList,r=this.props,o=r.editor,s=this.listComponent();return n?i.createElement(s,{block:e,editor:o,initialBlockListId:n.id}):void 0}};t.exports=s},function(t,e,n){var i=n(1),r=n(52),o=n(29);t.exports=function(t){var e=t.mixins||[];return e.indexOf(r)<0&&(e=e.concat(r)),i.createClass(o({},t,{React:i,mixins:e}))}},function(t){"use strict";function e(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=Object.assign||function(t){for(var n,i,r=e(t),o=1;o<arguments.length;o++){n=arguments[o],i=Object.keys(Object(n));for(var s=0;s<i.length;s++)r[i[s]]=n[i[s]]}return r}},function(){!function(){if(!Array.prototype.find){var t=function(t){var e=Object(this),n=e.length<0?0:e.length>>>0;if(0===n)return void 0;if("function"!=typeof t||"[object Function]"!==Object.prototype.toString.call(t))throw new TypeError("Array#find: predicate must be a function");for(var i,r=arguments[1],o=0;n>o;o++)if(i=e[o],t.call(r,i,o,e))return i;return void 0};if(Object.defineProperty)try{Object.defineProperty(Array.prototype,"find",{value:t,configurable:!0,enumerable:!1,writable:!0})}catch(e){}Array.prototype.find||(Array.prototype.find=t)}}(this)},function(t,e,n){t.exports.Dispatcher=n(32)},function(t,e,n){"use strict";function i(){this.$Dispatcher_callbacks={},this.$Dispatcher_isPending={},this.$Dispatcher_isHandled={},this.$Dispatcher_isDispatching=!1,this.$Dispatcher_pendingPayload=null}var r=n(33),o=1,s="ID_";i.prototype.register=function(t){var e=s+o++;return this.$Dispatcher_callbacks[e]=t,e},i.prototype.unregister=function(t){r(this.$Dispatcher_callbacks[t],"Dispatcher.unregister(...): `%s` does not map to a registered callback.",t),delete this.$Dispatcher_callbacks[t]},i.prototype.waitFor=function(t){r(this.$Dispatcher_isDispatching,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var e=0;e<t.length;e++){var n=t[e];this.$Dispatcher_isPending[n]?r(this.$Dispatcher_isHandled[n],"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n):(r(this.$Dispatcher_callbacks[n],"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n),this.$Dispatcher_invokeCallback(n))}},i.prototype.dispatch=function(t){r(!this.$Dispatcher_isDispatching,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this.$Dispatcher_startDispatching(t);try{for(var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e]||this.$Dispatcher_invokeCallback(e)}finally{this.$Dispatcher_stopDispatching()}},i.prototype.isDispatching=function(){return this.$Dispatcher_isDispatching},i.prototype.$Dispatcher_invokeCallback=function(t){this.$Dispatcher_isPending[t]=!0,this.$Dispatcher_callbacks[t](this.$Dispatcher_pendingPayload),this.$Dispatcher_isHandled[t]=!0},i.prototype.$Dispatcher_startDispatching=function(t){for(var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e]=!1,this.$Dispatcher_isHandled[e]=!1;this.$Dispatcher_pendingPayload=t,this.$Dispatcher_isDispatching=!0},i.prototype.$Dispatcher_stopDispatching=function(){this.$Dispatcher_pendingPayload=null,this.$Dispatcher_isDispatching=!1},t.exports=i},function(t){"use strict";var e=function(t,e,n,i,r,o,s,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,i,r,o,s,a],p=0;c=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return l[p++]}))}throw c.framesToPop=1,c}};t.exports=e},,,,,,,,function(t,e,n){var i=n(9),r=n(12),o=n(7),s=n(1),a=s.createClass({displayName:"AddBlock",getInitialState:function(){return i.find(this.props.type)},render:function(){var t=this.state,e=t.icon,n=t.id,i=t.label;return s.createElement(r,{"aria-label":i,className:"col-btn-icon",onClick:this._onClick},s.createElement("img",{src:e,alt:n,"aria-hidden":"true"}))},_onClick:function(t){var e=this.props,n=e.parentBlockListId,i=e.type,r=e.position;o({parentBlockListId:n,position:r,type:i,content:null}),t.preventDefault()}});t.exports=a},function(t,e,n){var i=n(4),r=n(44),o=n(56),s=n(47),a=n(8),c=n(1),l=c.PropTypes,p=n(22),u=c.createClass({displayName:"App",mixins:[a],propTypes:{editorId:l.number.isRequired},getState:function(){return{blockList:i.findByEditorId(this.props.editorId),editor:o.find(this.props.editorId)}},render:function(){var t=this.state,e=t.blockList,n=t.editor;return c.createElement("div",{className:"colonel"},c.createElement(s,{mode:n.mode,onChange:this._onModeChange}),c.createElement(r,{editor:n,initialBlockListId:e.id}))},_onModeChange:function(t){p(this.props.editorId,{mode:t})}});t.exports=u},function(t,e,n){var i=n(41),r=n(9),o=n(8),s=n(1),a=s.createClass({displayName:"BlockMenu",mixins:[o],propTypes:{editor:s.PropTypes.any.isRequired},getDefaultProps:function(){return{position:0}},getState:function(){var t=this.props,e=t.block,n=t.editor;return{types:e?r.find(e.type).types:n.types}},getButton:function(t){var e=this.props,n=e.parentBlockListId,r=e.position;return s.createElement(i,{key:t,type:t,parentBlockListId:n,position:r})},getNavigation:function(){return s.createElement("nav",{className:"col-menu",role:"navigation"},this.state.types.map(this.getButton))},render:function(){return this.state.types?this.getNavigation():null}});t.exports=a},function(t,e,n){var i=n(1),r=n(3),o={};o[r.EDIT_MODE]=n(45),o[r.PREVIEW_MODE]=n(48);var s=i.createClass({displayName:"ContentSection",propTypes:{editor:i.PropTypes.any.isRequired,initialBlockListId:i.PropTypes.number.isRequired},render:function(){var t=this.props.editor,e=o[t.mode];return i.createElement("div",{className:"col-content"},i.createElement(e,{editor:t,initialBlockListId:this.props.initialBlockListId}))}});t.exports=s},function(t,e,n){var i=n(1),r=n(24),o=i.createClass({displayName:"Editor",render:function(){var t=this.props,e=t.editor,n=t.initialBlockListId;return i.createElement(r,{editor:e,initialBlockListId:n})}});t.exports=o},function(t,e,n){var i=n(23),r=n(59),o=n(27),s=n(3),a=n(19),c=n(1),l=n(50),p=c.createClass({displayName:"EditorBlock",mixins:[o],listComponent:function(){return n(24)},render:function(){var t=this.state.block,e=t.id,n=t.parentBlockListId;return c.createElement(r,{className:"col-block",message:e,onDrop:this._onDrop},c.createElement(i,{block:this.state.block,mode:s.EDIT_MODE}),c.createElement("div",{className:"col-toolbar"},c.createElement(l,{blockId:e,parentBlockListId:n})),this.childBlockListComponent())},_onDrop:function(t,e){a(this.state.block.parentBlockListId,t,e)}});t.exports=p},function(t,e,n){var i=n(1),r=n(12),o=n(3),s=i.createClass({displayName:"ModeSelection",propType:{mode:i.PropTypes.oneOf(Object.keys(o)),modes:i.PropTypes.object,onChange:i.PropTypes.func.isRequired},getDefaultProps:function(){return{mode:o.EDIT_MODE,modes:{Edit:o.EDIT_MODE,Preview:o.PREVIEW_MODE}}},getTab:function(t){var e=this.props,n=e.mode,o=e.modes,s={className:"col-tabs-btn",disabled:n===o[t],onClick:function(e){return this._onModeClick(e,o[t])}.bind(this)};return i.createElement("li",{key:t,className:"col-tabs-list-item",role:"tab"},i.createElement(r,i.__spread({},s),t))},getTabs:function(){return Object.keys(this.props.modes).map(this.getTab)},render:function(){return i.createElement("nav",{role:"navigation",className:"col-tabs"},i.createElement("ul",{className:"col-tabs-list",role:"tablist"},this.getTabs()))},_onModeClick:function(t,e){t.preventDefault(),this.props.onChange(e)}});t.exports=s},function(t,e,n){var i=n(1),r=n(25),o=i.createClass({displayName:"Previewer",render:function(){return i.createElement(r,{initialBlockListId:this.props.initialBlockListId})}});t.exports=o},function(t,e,n){var i=n(23),r=n(27),o=n(3),s=n(1),a=s.createClass({displayName:"PreviewerBlock",mixins:[r],listComponent:function(){return n(25)},render:function(){return s.createElement("div",null,s.createElement(i,{block:this.state.block,mode:o.PREVIEW_MODE}),this.childBlockListComponent())}});t.exports=a},function(t,e,n){var i=n(12),r=n(11),o=n(1),s=n(51),a=o.PropTypes,c=o.createClass({displayName:"RemoveBlock",propTypes:{blockId:a.number.isRequired,parentBlockListId:a.number.isRequired},render:function(){return o.createElement(i,{"aria-label":s.remove.label,className:"col-btn-remove",onClick:this._onClick},"×")},_onClick:function(t){var e=confirm(s.remove.confirm),n=this.props,i=n.blockId,o=n.parentBlockListId;t.preventDefault(),e&&r({blockId:i,parentBlockListId:o})}});t.exports=c},function(t){t.exports={remove:{label:"Remove this block",confirm:"Are you sure you want to remove this block?"},add:{label:"Add a new block"}}},function(t,e,n){var i=(n(1),n(3)),r=(n(5),{getInitialState:function(){return{content:this.props.initialContent||this.defaultContent()}},setContent:function(t){this.setState({content:Object.assign({},this.state.content,t)},function(){this.props.updateContent(this.state.content)})},editMode:function(){return this.props.mode===i.EDIT_MODE},render:function(){return this.editMode()?this.renderEditor():this.renderPreviewer()}});t.exports=r},function(t,e,n){"use strict";var i=n(61),r={shouldComponentUpdate:function(t,e){return!i(this.props,t)||!i(this.state,e)}};t.exports=r},function(t,e,n){function i(t){"use strict";this.content=t.content||null,this.id=r(),this.parentBlockListId=t.parentBlockListId,this.type=t.type||"text"}var r=n(14);i.prototype.toJSON=function(){"use strict";var t=n(4),e=t.findByBlockId(this.id);return{blocks:e?e.toJSON():[],content:this.content,type:this.type}},t.exports=i},function(t,e,n){function i(t){"use strict";this.editorId=t.editorId,this.blockId=t.blockId,this.id=r(),this.$BlockList_blocks=[]}var r=n(14);i.prototype.all=function(){"use strict";return this.$BlockList_blocks},i.prototype.has=function(t){"use strict";return this.indexOf(t)>-1},i.prototype.indexOf=function(t){"use strict";return this.$BlockList_blocks.indexOf(t)},i.prototype.removeBlock=function(t){"use strict";this.$BlockList_blocks=this.$BlockList_blocks.filter(function(e){return e!==t})},i.prototype.insertBlock=function(t,e){"use strict";this.$BlockList_blocks.splice(e,0,t)},i.prototype.move=function(t,e){"use strict";var n=this.indexOf(t),i=this.indexOf(e);this.$BlockList_blocks.splice(i,0,this.$BlockList_blocks.splice(n,1)[0])},i.prototype.toJSON=function(){"use strict";var t=n(13);return this.all().map(t.find).filter(Boolean).map(function(t){return t.toJSON()})},t.exports=i},function(t,e,n){var i=n(9),r=n(6),o=n(2),s=n(3),a=n(5),c=[],l=function(){return{mode:s.EDIT_MODE,types:i.keys()}},p={find:function(t){return c.find(function(e){return e.id===t})||null},_create:function(t){var e=Object.assign({},l(),t);a(s[e.mode],"Unacceptable mode for editor: "+e.mode),a(null===p.find(e.id),"Editors must have a unique identifier"),c=c.concat(e),r.publish()},_update:function(t,e){var n=p.find(t),i=c.indexOf(n);a(i>=0,"Unable to find editor with an id of "+t),c=c.concat(),c[i]=Object.assign({},l(),n,e),r.publish()},dispatchToken:o.register(function(t){switch(t.type){case n(21):p._create(t.params);break;case n(22):p._update(t.id,t.params)}})};t.exports=p},function(t,e,n){var i=n(20),r=n(1),o=n(28);t.exports=function(t){var e=t.component;r.isValidElement(e)===!1&&(e=o(e)),i(Object.assign({},t,{component:e}))}},function(t,e,n){var i=n(7),r=n(4);t.exports=function o(t,e){e.forEach(function(e,n){i(Object.assign({position:n,parentBlockListId:t},e)),Array.isArray(e.blocks)&&o(r.last().id,e.blocks)})}},function(t,e,n){!function(e,i){t.exports=i(n(1))}(this,function(t){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([/*!**********************!*\
	  !*** ./src/index.js ***!
	  \**********************/
function(t,e,n){var i=n(/*! react */1),r=i.PropTypes,o=n(/*! ./utils/classSet */2),s=i.createClass({displayName:"Draggable",propTypes:{onDrop:r.func.isRequired,message:r.any.isRequired},getDefaultProps:function(){return{dropEffect:"copy",effectAllowed:"all"}},getInitialState:function(){return{dragging:!1,droppable:!1}},render:function(){var t=o(this.props.className,o({dragon:!0,"dragon-dragging":this.state.dragging,"dragon-droppable":this.state.droppable}));return i.createElement("div",{className:t,onDragOver:this._onDragOver,onDragLeave:this._onDragLeave,onDrop:this._onDrop,onDragStart:this._onDragStart,onDragEnd:this._onDragEnd,draggable:!0},i.createElement("div",{className:"dragon-children"},this.props.children))},_onDragStart:function(t){var e=this.props,n=e.message,i=e.dropEffect,r=e.effectAllowed;t.dataTransfer.setData("text/plain",JSON.stringify(n)),t.dataTransfer.dropEffect=i,t.dataTransfer.effectAllowed=r,this.setState({dragging:!0})},_onDragEnd:function(t){t.preventDefault(),this.setState({droppable:!1,dragging:!1})},_onDragOver:function(t){t.preventDefault(),this.setState({droppable:!0})},_onDragLeave:function(t){t.preventDefault(),this.setState({droppable:!1})},_onDrop:function(t){t.preventDefault();var e=JSON.parse(t.dataTransfer.getData("text/plain")),n=this.props.message;this.props.onDrop(e,n),this.setState({droppable:!1,dragging:!1})}});t.exports=s},/*!************************!*\
	  !*** external "react" ***!
	  \************************/
function(e){e.exports=t},/*!*******************************!*\
	  !*** ./src/utils/classSet.js ***!
	  \*******************************/
function(t){function e(t){return"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}).join(" "):Array.prototype.join.call(arguments," ")}t.exports=e}])})},function(t,e,n){"use strict";var i=n(5),r=function(t){var e,n={};i(t instanceof Object&&!Array.isArray(t));for(e in t)t.hasOwnProperty(e)&&(n[e]=e);return n};t.exports=r},function(t){"use strict";function e(t,e){if(t===e)return!0;var n;for(n in t)if(t.hasOwnProperty(n)&&(!e.hasOwnProperty(n)||t[n]!==e[n]))return!1;for(n in e)if(e.hasOwnProperty(n)&&!t.hasOwnProperty(n))return!1;return!0}t.exports=e},,,,function(){},function(t){t.exports=require("react/addons")}]);
//# sourceMappingURL=colonel-kurtz.js.map