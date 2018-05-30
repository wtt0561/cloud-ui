webpackJsonp([38],{593:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-linear-layout",[t("u-countup",{attrs:{end:100,"auto-start":this.autoStart}}),t("u-button",{staticStyle:{"vertical-align":"bottom"},attrs:{color:"primary"},on:{click:this.start}},[this._v("autoStart")])],1)},staticRenderFns:[]},r={data:function(){return{autoStart:!1}},methods:{start:function(){this.autoStart=!0},end:function(){console.log("渐变结束")}}},n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-linear-layout",[t("u-countup",{attrs:{end:100,"auto-start":this.autoStart,"end-callback":this.end}}),t("u-button",{staticStyle:{"vertical-align":"bottom"},attrs:{color:"primary"},on:{click:this.start}},[this._v("autoStart")])],1)},staticRenderFns:[]},v={components:{C0b030d:a(0)({data:function(){return{autoStart:!1}},methods:{start:function(){this.autoStart=!0}}},l,!1,null,null,null).exports,C07e1fb:a(0)(r,n,!1,null,null,null).exports}},_={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("数字渐变 CountUp")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("div",{staticClass:"u-example"},[a("u-countup",{attrs:{end:100}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":end")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("分组 (1,000 vs 1000)")]),a("div",{staticClass:"u-example"},[a("u-countup",{attrs:{end:1e3,"is-group":""}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":end")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"1000"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("is-group")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("前缀，后缀")]),a("div",{staticClass:"u-example"},[a("u-countup",{attrs:{end:100,prefix:"$",suffix:"美元"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":end")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("prefix")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("suffix")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"美元"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("小数")]),a("div",{staticClass:"u-example"},[a("u-countup",{attrs:{end:100,decimals:2}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":end")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":decimals")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("动画函数")]),a("div",{staticClass:"u-example"},[a("u-countup",{attrs:{end:100,"is-easing":""}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":end")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("is-easing")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("渐变时间(时间单位是秒)")]),a("div",{staticClass:"u-example"},[a("u-countup",{attrs:{end:100,duration:3}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":end")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":duration")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("转换单位简化数据")]),a("div",{staticClass:"u-example"},[a("u-countup",{attrs:{end:4567890,simplify:""}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":end")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"4567890"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("simplify")]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("开启渐变")]),a("div",{staticClass:"u-example"},[a("C0b030d")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":end")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":auto-start")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"autoStart"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"vertical-align: bottom;"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"start"')]),s._v(">")]),s._v("autoStart"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("autoStart")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        start() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".autoStart = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("渐变结束回调函数")]),a("div",{staticClass:"u-example"},[a("C07e1fb")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":end")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":auto-start")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"autoStart"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":end-callback")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"end"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-countup")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"vertical-align: bottom;"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"start"')]),s._v(">")]),s._v("autoStart"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-linear-layout")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v("{\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("autoStart")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        start() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".autoStart = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n        },\n        end() {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'渐变结束'")]),s._v(");\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("API")]),a("h3",[s._v("Props/Attrs")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Prop/Attr")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("start")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("0")])]),a("td",[s._v("渐变开始数值")])]),a("tr",[a("td",[s._v("end")]),a("td",[s._v("Number")]),a("td"),a("td",[s._v("渐变结束数值")])]),a("tr",[a("td",[s._v("duration")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("2")])]),a("td",[s._v("渐变时间间隔")])]),a("tr",[a("td",[s._v("isEasing")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("否使用 动画函数"),a("code",{pre:!0},[s._v("easingFn")]),s._v("处理数据")])]),a("tr",[a("td",[s._v("isGroup")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否分组，默认分组分隔符"),a("code",{pre:!0},[s._v("'separator'")]),s._v("值为"),a("code",{pre:!0},[s._v("','")])])]),a("tr",[a("td",[s._v("separator")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("','")])]),a("td",[s._v("分组分隔符")])]),a("tr",[a("td",[s._v("decimals")]),a("td",[s._v("Number")]),a("td",[a("code",{pre:!0},[s._v("0")])]),a("td",[s._v("小数点后几位")])]),a("tr",[a("td",[s._v("easingFn")]),a("td",[s._v("Function")]),a("td",[a("code",{pre:!0},[s._v("'easeOutExpo'")])]),a("td",[s._v("自定义渐变动画，默认使用 "),a("code",{pre:!0},[s._v("Robert Penner's easeOutExpo")]),s._v("函数")])]),a("tr",[a("td",[s._v("simplify")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否使用自定义单位简化数据")])]),a("tr",[a("td",[s._v("unit")]),a("td",[s._v("Array")]),a("td",[a("code",{pre:!0},[s._v("[[3, 'K+'], [6, 'M+'], [9, 'G+']]")])]),a("td",[s._v("配合"),a("code",{pre:!0},[s._v("'simplify'")]),s._v("属性使用的自定义单位")])]),a("tr",[a("td",[s._v("prefix")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("''")])]),a("td",[s._v("前缀内容")])]),a("tr",[a("td",[s._v("suffix")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("''")])]),a("td",[s._v("后缀内容")])]),a("tr",[a("td",[s._v("endCallback")]),a("td",[s._v("Function")]),a("td",[s._v("``")]),a("td",[s._v("渐变结束后的回调函数")])]),a("tr",[a("td",[s._v("autoStart")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否开启渐变")])])])]),a("h3",[s._v("Slots")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Slot")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("(default)")]),a("td",[s._v("插入文本或HTML")])])])]),a("h3",[s._v("Methods")]),a("h4",[s._v("update")]),a("p",[s._v("更新渐变结束值")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("value")]),a("td",[s._v("Number")]),a("td",[s._v("最新结束值")])])])]),a("h4",[s._v("reset")]),a("p",[s._v("重置")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("-")]),a("td",[s._v("-")]),a("td",[s._v("-")])])])]),a("h4",[s._v("pauseResume")]),a("p",[s._v("切换渐变")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("-")]),a("td",[s._v("-")]),a("td",[s._v("-")])])])])])},staticRenderFns:[]},e=a(0)(v,_,!1,null,null,null);t.default=e.exports}});