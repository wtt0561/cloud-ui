webpackJsonp([26],{554:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("u-article",[e("h1",[t._v("链接 Link")]),e("h2",[t._v("示例")]),e("h3",[t._v("基本形式")]),e("u-example",[e("div",[e("u-link",{attrs:{href:"#"}},[t._v("链接")]),t._v(" "),e("u-link",{attrs:{href:"#"}},[t._v("查看详情")])],1),e("div",{attrs:{slot:"code"},slot:"code"},[e("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(">")]),t._v("链接"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("&nbsp;"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(">")]),t._v("查看详情"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("\n")])])])]),e("h3",[t._v("禁用")]),e("u-example",[e("div",[e("u-link",{attrs:{href:"#",disabled:""}},[t._v("Link")])],1),e("div",{attrs:{slot:"code"},slot:"code"},[e("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"#"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("Link"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("\n")])])])]),e("h3",[e("code",{pre:!0},[t._v("href")]),t._v(" vs "),e("code",{pre:!0},[t._v("to")])]),e("u-example",[e("div",[e("u-link",{attrs:{href:"https://vusion.github.io",target:"_blank"}},[t._v("href")]),t._v(" \n"),e("u-link",{attrs:{to:"/components/u-button"}},[t._v("to")])],1),e("div",{attrs:{slot:"code"},slot:"code"},[e("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("href")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"https://vusion.github.io"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("target")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"_blank"')]),t._v(">")]),t._v("href"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("&nbsp;\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("to")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"/components/u-button"')]),t._v(">")]),t._v("to"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-link")]),t._v(">")]),t._v("\n")])])])]),e("h2",[t._v("API")]),e("h3",[t._v("Props/Attrs")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop/Attr")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("href")]),e("td",[t._v("String")]),e("td"),e("td",[t._v("链接地址")])]),e("tr",[e("td",[t._v("target")]),e("td",[t._v("String")]),e("td"),e("td",[t._v("（原生属性）")])]),e("tr",[e("td",[t._v("to")]),e("td",[t._v("String,  Location")]),e("td"),e("td",[t._v("需要vue-router，与"),e("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),e("code",{pre:!0},[t._v("to")]),t._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),e("tr",[e("td",[t._v("replace")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("false")])]),e("td",[t._v("需要vue-router，与"),e("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),e("code",{pre:!0},[t._v("replace")]),t._v("属性相同。如果为"),e("code",{pre:!0},[t._v("true")]),t._v("，当点击时，会调用"),e("code",{pre:!0},[t._v("router.replace()")]),t._v("而不是"),e("code",{pre:!0},[t._v("router.push()")]),t._v("，于是导航后不会留下"),e("code",{pre:!0},[t._v("history")]),t._v("记录。")])]),e("tr",[e("td",[t._v("append")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("false")])]),e("td",[t._v("需要vue-router，与"),e("code",{pre:!0},[t._v("<router-link>")]),t._v("的"),e("code",{pre:!0},[t._v("append")]),t._v("属性相同。如果为"),e("code",{pre:!0},[t._v("true")]),t._v("，则在当前路径后追加"),e("code",{pre:!0},[t._v("to")]),t._v("的路径。")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("false")])]),e("td",[t._v("是否禁用。禁用后不会响应"),e("code",{pre:!0},[t._v("click")]),t._v("事件。")])])])]),e("h3",[t._v("Slots")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Slot")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("(default)")]),e("td",[t._v("插入文本或HTML")])])])]),e("h3",[t._v("Events")]),e("h4",[t._v("$listeners")]),e("p",[t._v("监听所有"),e("code",{pre:!0},[t._v("<a>")]),t._v("元素的事件。")]),e("h4",[t._v("@before-navigate")]),e("p",[t._v("使用router相关属性切换路由前触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.to")]),e("td",[t._v("String,  Location")]),e("td",[e("code",{pre:!0},[t._v("to")]),t._v("属性的值")])]),e("tr",[e("td",[t._v("$event.replace")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("replace")]),t._v("属性的值")])]),e("tr",[e("td",[t._v("$event.append")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("append")]),t._v("属性的值")])]),e("tr",[e("td",[t._v("$event.preventDefault")]),e("td",[t._v("Function")]),e("td",[t._v("阻止切换流程")])])])]),e("h4",[t._v("@navigate")]),e("p",[t._v("使用router相关属性切换路由时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.to")]),e("td",[t._v("String,  Location")]),e("td",[e("code",{pre:!0},[t._v("to")]),t._v("属性的值")])]),e("tr",[e("td",[t._v("$event.replace")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("replace")]),t._v("属性的值")])]),e("tr",[e("td",[t._v("$event.append")]),e("td",[t._v("Boolean")]),e("td",[e("code",{pre:!0},[t._v("append")]),t._v("属性的值")])])])])],1)},staticRenderFns:[]},v=e(6)(null,a,!1,null,null,null);s.default=v.exports}});