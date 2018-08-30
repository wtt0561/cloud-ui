webpackJsonp([49],{PA6G:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var l={render:function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("u-article",[t("h1",[a._v("日历 Calendar")]),t("h2",[a._v("示例")]),t("h3",[a._v("基本形式")]),t("u-example",[t("div",[t("u-calendar")],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(">")]),a._v("\n")])])])]),t("h3",[a._v("只读和禁用")]),t("u-example",[t("div",[t("u-linear-layout",[t("u-calendar",{staticStyle:{display:"inline-block"},attrs:{date:"2018-08-08",readonly:""}}),t("u-calendar",{staticStyle:{display:"inline-block"},attrs:{date:"2018-08-08","min-date":"2017-08-08","max-date":"2019-08-08",disabled:""}})],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("date")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-08"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("readonly")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("style")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"display: inline-block"')]),a._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("date")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-08"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("min-date")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"2017-08-08"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("max-date")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"2019-08-08"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("disabled")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("style")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"display: inline-block"')]),a._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n")])])])]),t("h3",[a._v("最大值最小值")]),t("u-example",[t("div",[t("u-calendar",{attrs:{date:"2018-08-08","min-date":"2018-08-02","max-date":"2018-08-18"}})],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("date")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-08"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("min-date")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-02"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("max-date")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-18"')]),a._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(">")]),a._v("\n")])])])]),t("h3",[a._v("增加展示年份")]),t("p",[a._v("\b往前往后展示5年")]),t("u-example",[t("div",[t("u-linear-layout",[t("u-calendar",{attrs:{yearDiff:"5",yearAdd:"5",date:"2018-08-08"}})],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("yearDiff")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"5"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("yearAdd")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"5"')]),a._v(" "),t("span",{attrs:{class:"hljs-attr"}},[a._v("date")]),a._v("="),t("span",{attrs:{class:"hljs-string"}},[a._v('"2018-08-08"')]),a._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-calendar")]),a._v(">")]),a._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{attrs:{class:"hljs-name"}},[a._v("u-linear-layout")]),a._v(">")]),a._v("\n")])])])]),t("h2",[a._v("Calendar API")]),t("h3",[a._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[a._v("Prop/Attr")]),t("th",[a._v("Type")]),t("th",[a._v("Default")]),t("th",[a._v("Description")])])]),t("tbody",[t("tr",[t("td",[a._v("date")]),t("td",[a._v("Date/String")]),t("td",[a._v("TODAY")]),t("td",[a._v("当前选择的日期")])]),t("tr",[t("td",[a._v("minDate")]),t("td",[a._v("Date/String")]),t("td"),t("td",[a._v("最小日期，如果为空则不限制")])]),t("tr",[t("td",[a._v("maxDate")]),t("td",[a._v("Date/String")]),t("td",[t("code",{pre:!0},[a._v("'text'")])]),t("td",[a._v("最大日期，如果为空则不限制")])]),t("tr",[t("td",[a._v("yearDiff")]),t("td",[a._v("String/Number")]),t("td",[t("code",{pre:!0},[a._v("3")])]),t("td",[a._v("当前年份往前展示的年数，例：当前为"),t("code",{pre:!0},[a._v("2018")]),a._v("年，则从"),t("code",{pre:!0},[a._v("2015")]),a._v("年开始展示")])]),t("tr",[t("td",[a._v("yearAdd")]),t("td",[a._v("String/Number")]),t("td",[t("code",{pre:!0},[a._v("1")])]),t("td",[a._v("当前年份往后展示的年数，例：当前为"),t("code",{pre:!0},[a._v("2018")]),a._v("年，则展示至"),t("code",{pre:!0},[a._v("2019")]),a._v("年")])]),t("tr",[t("td",[a._v("readonly")]),t("td",[a._v("Boolean")]),t("td",[t("code",{pre:!0},[a._v("false")])]),t("td",[a._v("是否只读")])]),t("tr",[t("td",[a._v("disabled")]),t("td",[a._v("Boolean")]),t("td",[t("code",{pre:!0},[a._v("false")])]),t("td",[a._v("是否禁用")])])])]),t("h3",[a._v("Slots")]),t("h4",[a._v("(default)")]),t("p",[a._v("插入文本或 "),t("code",{pre:!0},[a._v("HTML")]),a._v(" 至日期组件底部")]),t("h3",[a._v("Events")]),t("h4",[a._v("@change")]),t("p",[a._v("日期改变时触发")]),t("table",[t("thead",[t("tr",[t("th",[a._v("Param")]),t("th",[a._v("Type")]),t("th",[a._v("Description")])])]),t("tbody",[t("tr",[t("td",[a._v("date")]),t("td",[a._v("Object")]),t("td",[a._v("改变后的日期")])])])]),t("h4",[a._v("@select")]),t("p",[a._v("选择某一个日期时触发")]),t("table",[t("thead",[t("tr",[t("th",[a._v("Param")]),t("th",[a._v("Type")]),t("th",[a._v("Description")])])]),t("tbody",[t("tr",[t("td",[a._v("date")]),t("td",[a._v("Object")]),t("td",[a._v("当前选择的日期")])])])])],1)},staticRenderFns:[]},r=t("EfGu")(null,l,!1,null,null,null);s.default=r.exports}});