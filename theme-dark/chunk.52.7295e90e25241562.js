webpackJsonp([52],{572:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("u-article",[t("h1",[s._v("文本 Text")]),t("p",[s._v("用于在业务中临时快速调整文本大小、颜色等特性。不建议在封装基础组件时使用。")]),t("h2",[s._v("示例")]),t("h3",[s._v("大小扩展")]),t("u-example",[t("div",[t("u-linear-layout",[t("u-text",{attrs:{size:"small"}},[s._v("小号文本")]),t("u-text",{attrs:{size:"normal"}},[s._v("正常文本")]),t("u-text",{attrs:{size:"large"}},[s._v("大号文本")])],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(">")]),s._v("小号文本"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"normal"')]),s._v(">")]),s._v("正常文本"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),s._v("大号文本"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("颜色扩展")]),t("u-example",[t("div",[t("u-linear-layout",[t("u-text",[s._v("默认颜色")]),t("u-text",{attrs:{color:"primary"}},[s._v("主要文字")]),t("u-text",{attrs:{color:"error"}},[s._v("错误文字")]),t("u-text",{attrs:{color:"disabled"}},[s._v("禁默文本")])],1)],1),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("默认颜色"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("主要文字"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"error"')]),s._v(">")]),s._v("错误文字"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"disabled"')]),s._v(">")]),s._v("禁默文本"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n")])])])]),t("h3",[s._v("文本换行")]),t("u-example",[t("div",[t("p",{staticStyle:{width:"120px",background:"#eee"}},[t("u-text",{attrs:{wrap:"ellipsis"}},[s._v("天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。")])],1),t("p",{staticStyle:{width:"120px",background:"#eee"}},[t("u-text",{attrs:{wrap:"break"}},[s._v("天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。")])],1),t("p",{staticStyle:{width:"120px",background:"#eee"}},[t("u-text",{attrs:{wrap:"nowrap"}},[s._v("天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。")])],1)]),t("div",{attrs:{slot:"code"},slot:"code"},[t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width: 120px; background: #eee;"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("wrap")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ellipsis"')]),s._v(">")]),s._v("天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width: 120px; background: #eee;"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("wrap")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"break"')]),s._v(">")]),s._v("天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"width: 120px; background: #eee;"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("wrap")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"nowrap"')]),s._v(">")]),s._v("天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为也，所以动心忍性，增益其所不能。"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("u-text")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n")])])])]),t("h2",[s._v("API")]),t("h3",[s._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[s._v("Prop/Attr")]),t("th",[s._v("Type")]),t("th",[s._v("Default")]),t("th",[s._v("Description")])])]),t("tbody",[t("tr",[t("td",[s._v("size")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("'normal'")])]),t("td",[s._v("大小扩展。可选值："),t("code",{pre:!0},[s._v("'small'")]),s._v(", "),t("code",{pre:!0},[s._v("'normal'")]),s._v(", "),t("code",{pre:!0},[s._v("'large'")])])]),t("tr",[t("td",[s._v("color")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("'default'")])]),t("td",[s._v("颜色扩展。可选值："),t("code",{pre:!0},[s._v("'default'")]),s._v(", "),t("code",{pre:!0},[s._v("'primary'")]),s._v(", "),t("code",{pre:!0},[s._v("'error'")])])]),t("tr",[t("td",[s._v("wrap")]),t("td",[s._v("String")]),t("td",[t("code",{pre:!0},[s._v("false")])]),t("td",[s._v("换行方式。可选值："),t("code",{pre:!0},[s._v("'normal'")]),s._v("表示默认方式，"),t("code",{pre:!0},[s._v("'ellipsis'")]),s._v("表示多余的文本省略，"),t("code",{pre:!0},[s._v("'break'")]),s._v("表示强制换行且英文自动添加换行符，"),t("code",{pre:!0},[s._v("'nowrap'")]),s._v("表示始终不换行。")])])])])],1)},staticRenderFns:[]},v=t(6)(null,l,!1,null,null,null);a.default=v.exports}});