webpackJsonp([22],{595:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{value:[],options:[{value:"选项1",text:"黄金糕"},{value:"选项2",text:"双皮奶"},{value:"选项3",text:"蚵仔煎"},{value:"选项4",text:"龙须面"},{value:"选项5",text:"北京烤鸭"}]}},watch:{value:function(s){console.log(s)}}},n={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-multi-select",{attrs:{data:s.options,size:"large"},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})},staticRenderFns:[]},v={data:function(){return{value:[],options:[{value:"选项1",text:"黄金糕"},{value:"选项2",text:"双皮奶"},{value:"选项3",text:"蚵仔煎"},{value:"选项4",text:"龙须面"},{value:"选项5",text:"北京烤鸭"}]}},watch:{value:function(s){console.log(s)}}},r={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-multi-select",{attrs:{data:s.options},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})},staticRenderFns:[]},e={data:function(){return{value:[],options:[{value:"选项1",text:"黄金糕"},{value:"选项2",text:"双皮奶"},{value:"选项3",text:"蚵仔煎"},{value:"选项4",text:"龙须面"},{value:"选项5",text:"北京烤鸭"}]}},watch:{value:function(s){console.log(s)}}},_={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-multi-select",{attrs:{filter:"",data:s.options},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})},staticRenderFns:[]},c={data:function(){return{value:[],options:[{text:"Alabama",value:"Alabama"},{text:"Alaska",value:"Alaska"},{text:"Arizona",value:"Arizona"},{text:"Arkansas",value:"Arkansas"},{text:"California",value:"California"},{text:"Colorado",value:"Colorado"},{text:"Connecticut",value:"Connecticut"},{text:"Delaware",value:"Delaware"},{text:"Florida",value:"Florida"},{text:"Georgia",value:"Georgia"},{text:"Hawaii",value:"Hawaii"},{text:"Idaho",value:"Idaho"},{text:"Illinois",value:"Illinois"}]}},watch:{value:function(s){console.log(s)}},methods:{filterMethod:function(s,t){return s.filter(function(s){return s.value.toLowerCase().indexOf(t.toLowerCase())>-1&&s})}}},p={render:function(){var s=this,t=s.$createElement;return(s._self._c||t)("u-multi-select",{attrs:{filter:"","filter-method":s.filterMethod,data:s.options,size:"huge"},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})},staticRenderFns:[]},h={components:{"c-e55e8ba6":a(6)(l,n,!1,null,null,null).exports,"c-5ba6b81e":a(6)(v,r,!1,null,null,null).exports,"c-edd26e50":a(6)(e,_,!1,null,null,null).exports,"c-02d574ec":a(6)(c,p,!1,null,null,null).exports}},i={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("选择扩展 MultiSelect")]),a("h2",[s._v("示例")]),a("h3",[s._v("基本形式")]),a("h3",[s._v("大小扩展")]),a("u-example",[a("div",[a("c-e55e8ba6")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"large"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-multi-select")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": [],\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项1'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'黄金糕'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项2'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'双皮奶'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项3'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'蚵仔煎'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项4'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'龙须面'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项5'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'北京烤鸭'")]),s._v(",\n            }],\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n        value(newValue) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(newValue);\n        }\n    }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h3",[s._v("方法")]),a("u-example",[a("div",[a("c-5ba6b81e")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-multi-select")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": [],\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项1'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'黄金糕'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项2'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'双皮奶'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项3'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'蚵仔煎'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项4'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'龙须面'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项5'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'北京烤鸭'")]),s._v(",\n            }],\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n        value(newValue) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(newValue);\n        }\n    }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("u-example",[a("div",[a("c-edd26e50")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("filter")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-multi-select")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": [],\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [{\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项1'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'黄金糕'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项2'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'双皮奶'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项3'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'蚵仔煎'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项4'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'龙须面'")]),s._v("\n            }, {\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'选项5'")]),s._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'北京烤鸭'")]),s._v(",\n            }],\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n        value(newValue) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(newValue);\n        }\n    }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h4",[s._v("自定义过滤方法")]),a("u-example",[a("div",[a("c-02d574ec")],1),a("div",{attrs:{slot:"code"},slot:"code"},[a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-multi-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("filter")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":filter-method")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"filterMethod"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"huge"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-multi-select")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": [],\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Alabama'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Alabama'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Alaska'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Alaska'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Arizona'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Arizona'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Arkansas'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Arkansas'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'California'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'California'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Colorado'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Colorado'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Connecticut'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Connecticut'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Delaware'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Delaware'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Florida'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Florida'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Georgia'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Georgia'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hawaii'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hawaii'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Idaho'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Idaho'")]),s._v(" },\n                { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Illinois'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Illinois'")]),s._v(" },\n            ],\n        };\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("watch")]),s._v(": {\n        value(newValue) {\n            "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(newValue);\n        }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        filterMethod(data,query) {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tdata = data.filter("),a("span",{attrs:{class:"hljs-function"}},[s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("item")]),s._v(") =>")]),s._v(" {\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v("(item.value.toLowerCase().indexOf(query.toLowerCase()) > "),a("span",{attrs:{class:"hljs-number"}},[s._v("-1")]),s._v(")\n                    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" item;\n                "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v("\n                    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n            });\n            "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" tdata;\n        }\n    }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h2",[s._v("Select API")]),a("h3",[s._v("Attrs/Props")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Attr/Prop")]),a("th",[s._v("Type")]),a("th",[s._v("Default")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("data")]),a("td",[s._v("Array<{ text, value }>")]),a("td"),a("td",[s._v("Data书写方式中的数据列表")])]),a("tr",[a("td",[s._v("value.sync, v-model")]),a("td",[s._v("Array")]),a("td"),a("td",[s._v("当前选择的值")])]),a("tr",[a("td",[s._v("field")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("'text'")])]),a("td",[s._v("显示文本字段")])]),a("tr",[a("td",[s._v("readonly")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否只读")])]),a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("是否禁用")])]),a("tr",[a("td",[s._v("size")]),a("td",[s._v("String")]),a("td",[a("code",{pre:!0},[s._v("normal normal")])]),a("td",[s._v("控制宽高属性，第一个值表示高度属性，第二值表示宽度，值有samll,normal,large,huage 四个值可以互相组合")])]),a("tr",[a("td",[s._v("filter")]),a("td",[s._v("Boolean")]),a("td",[a("code",{pre:!0},[s._v("false")])]),a("td",[s._v("支持输入，搜索匹配项")])]),a("tr",[a("td",[s._v("filter-method")]),a("td",[s._v("Function")]),a("td",[s._v("``")]),a("td",[s._v("自定义输入搜索的方法")])])])]),a("h3",[s._v("Events")]),a("h4",[s._v("@select")]),a("p",[s._v("选择某一项前触发")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.selected")]),a("td",[s._v("Object")]),a("td",[s._v("选择项对象")])]),a("tr",[a("td",[s._v("$event.value")]),a("td",[s._v("Any")]),a("td",[s._v("选择项的值")])])])]),a("h4",[s._v("@close")]),a("p",[s._v("点击选中项的关闭图标")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.index")]),a("td",[s._v("Number")]),a("td",[s._v("点击选择项的索引")])]),a("tr",[a("td",[s._v("$event.value")]),a("td",[s._v("Array")]),a("td",[s._v("选择项的值")])])])]),a("h4",[s._v("@toggle")]),a("p",[s._v("选择项展示和隐藏触发函数")]),a("table",[a("thead",[a("tr",[a("th",[s._v("Param")]),a("th",[s._v("Type")]),a("th",[s._v("Description")])])]),a("tbody",[a("tr",[a("td",[s._v("$event.open")]),a("td",[s._v("Boolean")]),a("td",[s._v("值表示展示还是隐藏")])])])])],1)},staticRenderFns:[]},j=a(6)(h,i,!1,null,null,null);t.default=j.exports}});