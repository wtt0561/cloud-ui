webpackJsonp([5],{611:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("u-button",{nativeOn:{click:function(t){return s.open(t)}}},[s._v("Toast")])],1)},staticRenderFns:[]},l={components:{C6a2a3e:a(0)({methods:{open:function(){this.$toast.show("Hello World!")}}},n,!1,null,null,null).exports}},v={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("消息提示 Toast")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("h4",[s._v("命令式")]),a("p",[s._v("推荐使用下面的方式，使用$toast方式实现toast提示，标签形式用在有路由跳转时会有问题")]),a("div",{staticClass:"u-example"},[a("C6a2a3e")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(">")]),s._v("Toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        open() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$toast.show("),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello World!'")]),s._v(");\n        },\n    },\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("位置是static形式")]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toast.show()}}},[s._v("toast")]),a("u-toast",{ref:"toast",attrs:{message:"消息提示",position:"static"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toast.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toast"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"static"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("info样式")]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toastInfo.show()}}},[s._v("toast")]),a("u-toast",{ref:"toastInfo",attrs:{message:"消息提示",state:"info"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toastInfo.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toastInfo"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("state")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"info"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("success样式")]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toastSucc.show()}}},[s._v("toast")]),a("u-toast",{ref:"toastSucc",attrs:{message:"消息提示",state:"success"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toastSucc.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toastSucc"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("state")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"success"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("warning样式")]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toastWarn.show()}}},[s._v("toast")]),a("u-toast",{ref:"toastWarn",attrs:{message:"推荐使用下面的方式，使用$toast方式实现toast提示，标签形式用在有路由跳转时会有问题",state:"warnning"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toastWarn.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toastWarn"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"推荐使用下面的方式，使用$toast方式实现toast提示，标签形式用在有路由跳转时会有问题"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("state")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"warnning"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("error样式")]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toastError.show()}}},[s._v("toast")]),a("u-toast",{ref:"toastError",attrs:{message:"消息提示",state:"error"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toastError.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toastError"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("state")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"error"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("size改变宽度大小")]),a("div",{staticClass:"u-example"},[a("u-button",{nativeOn:{click:function(t){s.$refs.toastSize.show()}}},[s._v("toast")]),a("u-toast",{ref:"toastSize",attrs:{message:"消息提示",size:"auto"}})],1),a("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click.native")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$refs.toastSize.show()"')]),s._v(">")]),s._v("toast"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"toastSize"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("message")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"消息提示"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"auto"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-toast")]),s._v(">")]),s._v("\n")])]),a("h2",[s._v("API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Attr/Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("position")]),a("td",[s._v("String")]),a("td",[s._v("top-center")]),a("td",[s._v("显示的位置，可选的值有：top-center, top-left, top-right, bottom-center, bottom-left, bottom-right, static")])]),a("tr",[a("td",[s._v("duration")]),a("td",[s._v("Number")]),a("td",[s._v("2000")]),a("td",[s._v("默认的显示位置")])]),a("tr",[a("td",[s._v("single")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("只显示一个toast提示，，需要手动设置，默认为false")])]),a("tr",[a("td",[s._v("state")]),a("td",[s._v("String")]),a("td",[s._v("''")]),a("td",[s._v("可选值有info，success, warnning, error和默认的五种样式toast")])]),a("tr",[a("td",[s._v("message")]),a("td",[s._v("String")]),a("td",[s._v("''")]),a("td",[s._v("提示内容")])]),a("tr",[a("td",[s._v("closeable")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("是否可关闭提示，默认不可关闭")])]),a("tr",[a("td",[s._v("size")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("''")])]),a("td",[s._v("改变默认宽度大小，值有"),a("code",{pre:!0},[s._v("'small'")]),s._v(", "),a("code",{pre:!0},[s._v("'normal'")]),s._v(","),a("code",{pre:!0},[s._v("'large'")]),s._v(","),a("code",{pre:!0},[s._v("'huage'")]),s._v(","),a("code",{pre:!0},[s._v("'auto'")])])])])]),a("h3",[s._v("Methods")]),a("h4",[s._v("show")]),a("p",[s._v("显示 toast 信息")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("message")]),a("td",[s._v("String")]),a("td",[s._v("提示内容")])])])])])},staticRenderFns:[]},r=a(0)(l,v,!1,null,null,null);t.default=r.exports}});