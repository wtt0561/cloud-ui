webpackJsonp([6],{616:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={data:function(){return{time:"20:12:12"}},methods:{change:function(t){console.log(t)}}},l={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("u-time-picker",{attrs:{time:t.time},on:{change:function(s){t.change(s.time)}}})},staticRenderFns:[]},r={components:{"c-a6445e18":a(6)(e,l,!1,null,null,null).exports}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("u-article",[a("h1",[t._v("时间选择 TimePicker")]),a("h2",[t._v("示例")]),a("h3",[t._v("基本形式")]),a("h4",[t._v("声明式")]),a("h3",[t._v("基本")]),a("u-example",[a("div",[a("u-time-picker",{attrs:{time:"15:46:33"}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("time")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"15:46:33"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-time-picker")]),t._v(">")]),t._v("\n")])])])]),a("h3",[t._v("禁用")]),a("u-example",[a("div",[a("u-time-picker",{attrs:{time:"15:46:33",disabled:"disabled"}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("time")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"15:46:33"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"disabled"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-time-picker")]),t._v(">")]),t._v("\n")])])])]),a("h3",[t._v("只读")]),a("u-example",[a("div",[a("u-time-picker",{attrs:{time:"15:46:33",readonly:"readonly"}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("time")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"15:46:33"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"readonly"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-time-picker")]),t._v(">")]),t._v("\n")])])])]),a("h3",[t._v("日期范围")]),a("u-example",[a("div",[a("u-time-picker",{attrs:{time:"15:46:33","min-time":"12:30:00","max-time":"14:45:00"}})],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("time")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"15:46:33"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("min-time")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"12:30:00"')]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("max-time")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"14:45:00"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-time-picker")]),t._v(">")]),t._v("\n")])])])]),a("u-example",[a("div",[a("c-a6445e18")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-time-picker")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":time")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"time"')]),t._v(" @"),a("span",{attrs:{class:"hljs-attr"}},[t._v("change")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"change($event.time)"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("u-time-picker")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{attrs:{class:"javascript"}},[t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n\tdata() {\n\t\t"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n\t\t\t"),a("span",{attrs:{class:"hljs-attr"}},[t._v("time")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'20:12:12'")]),t._v(",\n\t\t};\n\t},\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        change(time) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(time);\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("API")]),a("h3",[t._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop/Attr")]),a("th",[t._v("Type")]),a("th",[t._v("Default")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("time")]),a("td",[t._v("String")]),a("td",[t._v("'00:00'")]),a("td",[t._v("当前的时间值")])]),a("tr",[a("td",[t._v("minTime")]),a("td",[t._v("String")]),a("td",[t._v("'00:00'")]),a("td",[t._v("最小时间")])]),a("tr",[a("td",[t._v("maxTime")]),a("td",[t._v("String")]),a("td",[t._v("'23:59'")]),a("td",[t._v("最大时间")])]),a("tr",[a("td",[t._v("autofocus")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否自动获得焦点")])]),a("tr",[a("td",[t._v("readonly")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否只读")])]),a("tr",[a("td",[t._v("disabled")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("false")])]),a("td",[t._v("是否禁用")])]),a("tr",[a("td",[t._v("visible")]),a("td",[t._v("Boolean")]),a("td",[a("code",{pre:!0},[t._v("true")])]),a("td",[t._v("是否显示")])])])]),a("h3",[t._v("Events")]),a("h4",[t._v("@change")]),a("p",[t._v("时间改变时触发")]),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),a("th",[t._v("Type")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("time")]),a("td",[t._v("Object")]),a("td",[t._v("改变后的时间")])])])])],1)},staticRenderFns:[]},n=a(6)(r,v,!1,null,null,null);s.default=n.exports}});