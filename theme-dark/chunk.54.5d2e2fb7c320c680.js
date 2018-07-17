webpackJsonp([54],{602:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("滑块 Slider")]),t("h2",[s._v("示例")]),t("h3",[s._v("基本形式")]),t("u-example",[t("div",[t("u-slider",{attrs:{value:36}})],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("最大值和最小值")]),t("u-example",[t("div",[t("u-slider",{attrs:{value:36,min:10,max:50}})],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("连续和间隔")]),t("u-example",[t("div",[t("u-grid-layout",[t("u-grid-layout-column",{attrs:{span:6}},[t("u-slider",{attrs:{step:0}})],1),t("u-grid-layout-column",{attrs:{span:6}},[t("u-slider",{attrs:{step:20}})],1)],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("范围")]),t("p",[s._v("使用"),t("code",{pre:!0},[s._v("range")]),s._v("可以进一步对"),t("code",{pre:!0},[s._v("value")]),s._v("限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。")]),t("u-example",[t("div",[t("u-grid-layout",[t("u-grid-layout-column",{attrs:{span:6}},[t("u-slider",{attrs:{value:50,range:[20,85]}})],1),t("u-grid-layout-column",{attrs:{span:6}},[t("u-slider",{attrs:{value:40,step:10,range:[30]}})],1)],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":range")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"[20, 85]"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"40"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":step")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":range")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"[30]"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("只读和禁用")]),t("u-example",[t("div",[t("u-grid-layout",[t("u-grid-layout-column",{attrs:{span:6}},[t("u-slider",{attrs:{value:36,readonly:""}})],1),t("u-grid-layout-column",{attrs:{span:6}},[t("u-slider",{attrs:{value:36,disabled:""}})],1)],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("readonly")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":span")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"6"')]),s._v(">")]),s._v("\n        "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"36"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-slider")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout-column")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-grid-layout")]),s._v(">")]),s._v("\n")])])])]),t("h2",[s._v("API")]),t("h3",[s._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Prop/Attr")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("value.sync, v-model")]),t("td",[s._v("Number")]),t("td",[t("code",{pre:!0},[s._v("0")])]),t("td",[s._v("滑块的值")])]),t("tr",[t("td",[s._v("min")]),t("td",[s._v("Number")]),t("td",[t("code",{pre:!0},[s._v("0")])]),t("td",[s._v("最小值")])]),t("tr",[t("td",[s._v("max")]),t("td",[s._v("Number")]),t("td",[t("code",{pre:!0},[s._v("100")])]),t("td",[s._v("最大值")])]),t("tr",[t("td",[s._v("step")]),t("td",[s._v("Number")]),t("td",[t("code",{pre:!0},[s._v("1")])]),t("td",[s._v("间隔，表示点击按钮或按上下键所增加或减少的量。"),t("code",{pre:!0},[s._v("0")]),s._v("表示连续")])]),t("tr",[t("td",[s._v("precision")]),t("td",[s._v("Number")]),t("td",[t("code",{pre:!0},[s._v("1")])]),t("td",[s._v("精度，表示数字要保留的最小单位，整数、小数均可")])]),t("tr",[t("td",[s._v("range")]),t("td",[s._v("Array")]),t("td",[t("code",{pre:!0},[s._v("[]")])]),t("td",[s._v("进一步对"),t("code",{pre:!0},[s._v("value")]),s._v("限制，通常传入一个数组，第一个值表示范围开始值，第二个值表示范围的结束值。")])]),t("tr",[t("td",[s._v("readonly")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否只读")])]),t("tr",[t("td",[s._v("disabled")]),t("td",[s._v("Boolean")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("是否禁用")])])])]),t("h3",[s._v("Events")]),t("h4",[s._v("@input")]),t("p",[s._v("拖动滑块时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event")]),t("td",[s._v("Number")]),t("td",[s._v("滑块的值")])])])]),t("h4",[s._v("@slide")]),t("p",[s._v("拖动滑块时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("Number")]),t("td",[s._v("滑块的值")])]),t("tr",[t("td",[s._v("$event.oldValue")]),t("td",[s._v("Number")]),t("td",[s._v("旧的值")])]),t("tr",[t("td",[s._v("$event.percent")]),t("td",[s._v("Number")]),t("td",[s._v("滑块位置所在的百分比")])])])]),t("h4",[s._v("@change")]),t("p",[s._v("滑块的值改变时触发")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Param")]),t("th",[s._v("Type")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("$event.value")]),t("td",[s._v("Number")]),t("td",[s._v("改变后的值")])]),t("tr",[t("td",[s._v("$event.oldValue")]),t("td",[s._v("Number")]),t("td",[s._v("旧的值")])])])])],1)},staticRenderFns:[]},v=t(6)(null,l,!1,null,null,null);a.default=v.exports}});