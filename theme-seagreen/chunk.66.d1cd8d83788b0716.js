webpackJsonp([66],{634:function(t,v,s){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var e={render:function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("div",[s("u-draggable",{attrs:{value:"primary"}},[s("u-block",{attrs:{size:"normal",color:"primary",inline:""}},[t._v("拖我")])],1),s("u-draggable",{attrs:{value:"success"}},[s("u-block",{attrs:{size:"normal",color:"success",inline:""}},[t._v("拖我")])],1),s("u-draggable",{attrs:{value:"error"}},[s("u-block",{attrs:{size:"normal",color:"error",inline:""}},[t._v("拖我")])],1),s("p"),s("u-droppable",{on:{drop:function(v){t.color=v.value}}},[s("u-block",{attrs:{size:"normal",color:t.color}},[t._v("放到这里")])],1)],1)},staticRenderFns:[]},a={components:{"c-67fb9b3f":s(6)({data:function(){return{color:""}}},e,!1,null,null,null).exports}},_={render:function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("u-article",[s("h1",[t._v("放置 Draggable")]),s("h2",[t._v("示例")]),s("h3",[t._v("基本形式")]),s("u-example",[s("div",[s("c-67fb9b3f")],1),s("div",{attrs:{slot:"code"},slot:"code"},[s("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("inline")]),t._v(">")]),t._v("拖我"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"success"')]),t._v(">")]),t._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"success"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("inline")]),t._v(">")]),t._v("拖我"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(">")]),t._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"error"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("inline")]),t._v(">")]),t._v("拖我"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-draggable")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-droppable")]),t._v(" @"),s("span",{attrs:{class:"hljs-attr"}},[t._v("drop")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"color = $event.value"')]),t._v(">")]),t._v("\n        "),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"normal"')]),t._v(" "),s("span",{attrs:{class:"hljs-attr"}},[t._v(":color")]),t._v("="),s("span",{attrs:{class:"hljs-string"}},[t._v('"color"')]),t._v(">")]),t._v("放到这里"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-block")]),t._v(">")]),t._v("\n    "),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("u-droppable")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),s("span",{attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{attrs:{class:"javascript"}},[t._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),s("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),s("span",{attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("''")]),t._v(",\n        };\n    },\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),s("h2",[t._v("API")]),s("h3",[t._v("Props/Attrs")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop/Attr")]),s("th",[t._v("Type")]),s("th",[t._v("Default")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("disabled")]),s("td",[t._v("Boolean")]),s("td",[s("code",{pre:!0},[t._v("false")])]),s("td",[t._v("是否禁用")])])])]),s("h3",[t._v("Slots")]),s("h4",[t._v("(default)")]),s("p",[t._v("插入可以放置的元素，仅一个。")]),s("h4",[t._v("transfer")]),s("p",[t._v("自定义的移动元素。")]),s("h4",[t._v("@dragenter")]),s("p",[t._v("拖拽进入该元素时触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.originVM")]),s("td",[t._v("VueComponent")]),s("td",[t._v("拖拽源，为当前的"),s("code",{pre:!0},[t._v("<u-draggable>")])])]),s("tr",[s("td",[t._v("$event.sourceEl")]),s("td",[t._v("Element")]),s("td",[t._v("拖拽起始元素")])]),s("tr",[s("td",[t._v("$event.transferEl")]),s("td",[t._v("Element")]),s("td",[t._v("拖拽移动元素")])]),s("tr",[s("td",[t._v("$event.targetEl")]),s("td",[t._v("Element")]),s("td",[t._v("放置目标元素")])]),s("tr",[s("td",[t._v("$event.value")]),s("td",[t._v("Any")]),s("td",[t._v("需要传递的值")])]),s("tr",[s("td",[t._v("$event.screenX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),s("tr",[s("td",[t._v("$event.screenY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),s("tr",[s("td",[t._v("$event.clientX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),s("tr",[s("td",[t._v("$event.clientY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),s("tr",[s("td",[t._v("$event.pageX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于页面的水平坐标")])]),s("tr",[s("td",[t._v("$event.pageY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),s("tr",[s("td",[t._v("$event.startX")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),s("tr",[s("td",[t._v("$event.startY")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),s("tr",[s("td",[t._v("$event.dragX")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),s("tr",[s("td",[t._v("$event.dragY")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),s("tr",[s("td",[t._v("$event.startLeft")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时代理元素的left值")])]),s("tr",[s("td",[t._v("$event.startTop")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时代理元素的top值")])]),s("tr",[s("td",[t._v("$event.left")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时代理元素的left值")])]),s("tr",[s("td",[t._v("$event.top")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时代理元素的top值")])]),s("tr",[s("td",[t._v("$event.preventDefault")]),s("td",[t._v("Function")]),s("td",[t._v("阻止拖拽流程")])])])]),s("h4",[t._v("@dragleave")]),s("p",[t._v("拖拽离开该元素时触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.originVM")]),s("td",[t._v("VueComponent")]),s("td",[t._v("拖拽源，为当前的"),s("code",{pre:!0},[t._v("<u-draggable>")])])]),s("tr",[s("td",[t._v("$event.sourceEl")]),s("td",[t._v("Element")]),s("td",[t._v("拖拽起始元素")])]),s("tr",[s("td",[t._v("$event.transferEl")]),s("td",[t._v("Element")]),s("td",[t._v("拖拽移动元素")])]),s("tr",[s("td",[t._v("$event.targetEl")]),s("td",[t._v("Element")]),s("td",[t._v("放置目标元素")])]),s("tr",[s("td",[t._v("$event.value")]),s("td",[t._v("Any")]),s("td",[t._v("需要传递的值")])]),s("tr",[s("td",[t._v("$event.screenX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),s("tr",[s("td",[t._v("$event.screenY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),s("tr",[s("td",[t._v("$event.clientX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),s("tr",[s("td",[t._v("$event.clientY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),s("tr",[s("td",[t._v("$event.pageX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于页面的水平坐标")])]),s("tr",[s("td",[t._v("$event.pageY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),s("tr",[s("td",[t._v("$event.startX")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),s("tr",[s("td",[t._v("$event.startY")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),s("tr",[s("td",[t._v("$event.dragX")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),s("tr",[s("td",[t._v("$event.dragY")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),s("tr",[s("td",[t._v("$event.startLeft")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时代理元素的left值")])]),s("tr",[s("td",[t._v("$event.startTop")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时代理元素的top值")])]),s("tr",[s("td",[t._v("$event.left")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时代理元素的left值")])]),s("tr",[s("td",[t._v("$event.top")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时代理元素的top值")])]),s("tr",[s("td",[t._v("$event.preventDefault")]),s("td",[t._v("Function")]),s("td",[t._v("阻止拖拽流程")])])])]),s("h4",[t._v("@dragover")]),s("p",[t._v("拖拽在该元素上方时触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.originVM")]),s("td",[t._v("VueComponent")]),s("td",[t._v("拖拽源，为当前的"),s("code",{pre:!0},[t._v("<u-draggable>")])])]),s("tr",[s("td",[t._v("$event.sourceEl")]),s("td",[t._v("Element")]),s("td",[t._v("拖拽起始元素")])]),s("tr",[s("td",[t._v("$event.transferEl")]),s("td",[t._v("Element")]),s("td",[t._v("拖拽移动元素")])]),s("tr",[s("td",[t._v("$event.targetEl")]),s("td",[t._v("Element")]),s("td",[t._v("放置目标元素")])]),s("tr",[s("td",[t._v("$event.value")]),s("td",[t._v("Any")]),s("td",[t._v("需要传递的值")])]),s("tr",[s("td",[t._v("$event.ratioX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于接收元素所占的长度比")])]),s("tr",[s("td",[t._v("$event.ratioY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于接收元素所占的高度比")])]),s("tr",[s("td",[t._v("$event.screenX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),s("tr",[s("td",[t._v("$event.screenY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),s("tr",[s("td",[t._v("$event.clientX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),s("tr",[s("td",[t._v("$event.clientY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),s("tr",[s("td",[t._v("$event.pageX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于页面的水平坐标")])]),s("tr",[s("td",[t._v("$event.pageY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),s("tr",[s("td",[t._v("$event.startX")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),s("tr",[s("td",[t._v("$event.startY")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),s("tr",[s("td",[t._v("$event.dragX")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),s("tr",[s("td",[t._v("$event.dragY")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),s("tr",[s("td",[t._v("$event.startLeft")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时代理元素的left值")])]),s("tr",[s("td",[t._v("$event.startTop")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时代理元素的top值")])]),s("tr",[s("td",[t._v("$event.left")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时代理元素的left值")])]),s("tr",[s("td",[t._v("$event.top")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时代理元素的top值")])]),s("tr",[s("td",[t._v("$event.preventDefault")]),s("td",[t._v("Function")]),s("td",[t._v("阻止拖拽流程")])])])]),s("h4",[t._v("@drop")]),s("p",[t._v("拖拽放置时触发")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),s("th",[t._v("Type")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[t._v("$event.originVM")]),s("td",[t._v("VueComponent")]),s("td",[t._v("拖拽源，为当前的"),s("code",{pre:!0},[t._v("<u-draggable>")])])]),s("tr",[s("td",[t._v("$event.sourceEl")]),s("td",[t._v("Element")]),s("td",[t._v("拖拽起始元素")])]),s("tr",[s("td",[t._v("$event.transferEl")]),s("td",[t._v("Element")]),s("td",[t._v("拖拽移动元素")])]),s("tr",[s("td",[t._v("$event.targetEl")]),s("td",[t._v("Element")]),s("td",[t._v("放置目标元素")])]),s("tr",[s("td",[t._v("$event.value")]),s("td",[t._v("Any")]),s("td",[t._v("需要传递的值")])]),s("tr",[s("td",[t._v("$event.ratioX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于接收元素所占的长度比")])]),s("tr",[s("td",[t._v("$event.ratioY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于接收元素所占的高度比")])]),s("tr",[s("td",[t._v("$event.screenX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于屏幕的水平坐标")])]),s("tr",[s("td",[t._v("$event.screenY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于屏幕的垂直坐标")])]),s("tr",[s("td",[t._v("$event.clientX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于浏览器的水平坐标")])]),s("tr",[s("td",[t._v("$event.clientY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于浏览器的垂直坐标")])]),s("tr",[s("td",[t._v("$event.pageX")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于页面的水平坐标")])]),s("tr",[s("td",[t._v("$event.pageY")]),s("td",[t._v("Number")]),s("td",[t._v("鼠标指针相对于页面的垂直坐标")])]),s("tr",[s("td",[t._v("$event.startX")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时鼠标指针的水平坐标")])]),s("tr",[s("td",[t._v("$event.startY")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时鼠标指针的垂直坐标")])]),s("tr",[s("td",[t._v("$event.dragX")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时鼠标指针相对于起始坐标的水平位移")])]),s("tr",[s("td",[t._v("$event.dragY")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时鼠标指针相对于起始坐标的垂直位移")])]),s("tr",[s("td",[t._v("$event.startLeft")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时代理元素的left值")])]),s("tr",[s("td",[t._v("$event.startTop")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽开始时代理元素的top值")])]),s("tr",[s("td",[t._v("$event.left")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时代理元素的left值")])]),s("tr",[s("td",[t._v("$event.top")]),s("td",[t._v("Number")]),s("td",[t._v("拖拽时代理元素的top值")])]),s("tr",[s("td",[t._v("$event.preventDefault")]),s("td",[t._v("Function")]),s("td",[t._v("阻止拖拽流程")])])])]),s("h3",[t._v("Methods")]),s("h4",[t._v("cancel()")]),s("p",[t._v("取消拖拽。")])],1)},staticRenderFns:[]},r=s(6)(a,_,!1,null,null,null);v.default=r.exports}});