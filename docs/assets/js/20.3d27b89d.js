(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{574:function(t,a,s){t.exports=s.p+"assets/img/image-20210405174337615.01d4a72f.png"},575:function(t,a,s){t.exports=s.p+"assets/img/image-20210405174530187.12aec53c.png"},576:function(t,a,s){t.exports=s.p+"assets/img/image-20210405174952276.e6ba9a9c.png"},577:function(t,a,s){t.exports=s.p+"assets/img/image-20210405175150161.633f36a2.png"},578:function(t,a,s){t.exports=s.p+"assets/img/image-20210405180411073.2047649c.png"},923:function(t,a,s){"use strict";s.r(a);var i=s(22),v=Object(i.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"nginx-的集群负载均衡解析"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的集群负载均衡解析"}},[t._v("#")]),t._v(" Nginx 的集群负载均衡解析")]),t._v(" "),i("h2",{attrs:{id:"单节点"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#单节点"}},[t._v("#")]),t._v(" 单节点")]),t._v(" "),i("p",[i("img",{attrs:{src:s(574),alt:"image-20210405174337615"}})]),t._v(" "),i("p",[t._v("一个人搬砖，当量少的时候还没有问题，逐渐多起来的时候，就不行了，他一个人搬不过来了，如果他生病之后，砖头就会累积没有人搬了")]),t._v(" "),i("h2",{attrs:{id:"集群"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#集群"}},[t._v("#")]),t._v(" 集群")]),t._v(" "),i("p",[i("img",{attrs:{src:s(575),alt:"image-20210405174530187"}})]),t._v(" "),i("p",[t._v("使用集群处理的话，人多了，三个人去协调分配工作量，如果还不够，还可以雇佣更多的人来搬砖，这个老板就相当于是 Nginx")]),t._v(" "),i("p",[t._v("计算机中还有一个原则："),i("code",[t._v("1 + 1 > 2")]),t._v("，如 "),i("code",[t._v("2 核 4G + 2 核 4G > 4 核 8G")]),t._v("，两台的性能远远会超过一台的性能")]),t._v(" "),i("h2",{attrs:{id:"nginx-集群负载均衡"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nginx-集群负载均衡"}},[t._v("#")]),t._v(" Nginx 集群负载均衡")]),t._v(" "),i("p",[t._v("所有的请求会先经过 Nginx，由 Nginx 去分配处理该请求的节点")]),t._v(" "),i("p",[i("img",{attrs:{src:s(576),alt:"image-20210405174952276"}})]),t._v(" "),i("p",[t._v("如上图所示，后端的所有真实服务器统称为 "),i("strong",[t._v("upstream（上游服务器）")]),t._v("，那么如何分配？这就是 Nginx 的均衡负载了，它可以平均分配、权重、用户 IP、用户地址等可以使用相应的策略去分配")]),t._v(" "),i("p",[i("img",{attrs:{src:s(577),alt:"image-20210405175150161"}})]),t._v(" "),i("p",[t._v("假如其中一个节点挂掉了，那么会自动剔除该节点，不再访问。")]),t._v(" "),i("h2",{attrs:{id:"四层负载均衡"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#四层负载均衡"}},[t._v("#")]),t._v(" 四层负载均衡")]),t._v(" "),i("p",[t._v("四层负载均衡基于 IP + 端口，进行转发实现的，当客户端与后端服务器建立链接之后，后续在该链接上的请求还会继续通信")]),t._v(" "),i("p",[t._v("它是传输层的，基于 TCP/UDP 协议，性能非常高")]),t._v(" "),i("ul",[i("li",[t._v("F5 硬负载均衡：基于硬件，商业级别的负载均衡，很贵")]),t._v(" "),i("li",[t._v("LVS 四层负载均衡：linux 内核的均衡负载，与协议无关")]),t._v(" "),i("li",[t._v("Haproxy 四层负载均衡：也可以在 7 层做负载均衡")]),t._v(" "),i("li",[t._v("Nginx 四层负载均衡：新版本中支持，但是一般还是习惯使用 Nginx 作为七层")])]),t._v(" "),i("h2",{attrs:{id:"七层负载均衡"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#七层负载均衡"}},[t._v("#")]),t._v(" 七层负载均衡")]),t._v(" "),i("p",[t._v("基于 URL、IP 的应用层负载均衡，针对 HTTP 协议的负载均衡")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Nginx 七层负载均衡")])]),t._v(" "),i("li",[i("p",[t._v("Haproxy 七层负载均衡，灵活性很高")]),t._v(" "),i("p",[t._v("当它作为四层均衡负载时，是不处理请求的，只是转发。而在七层时，它会处理请求的")])]),t._v(" "),i("li",[i("p",[t._v("apache 七层负载均衡，性能不如 Nginx，达到百万级别后，性能不太行")])])]),t._v(" "),i("h2",{attrs:{id:"dns-地域负载均衡"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dns-地域负载均衡"}},[t._v("#")]),t._v(" DNS 地域负载均衡")]),t._v(" "),i("p",[i("img",{attrs:{src:s(578),alt:"image-20210405180411073"}})]),t._v(" "),i("p",[t._v("DNS 根据就近原则返回不同的 IP，提供服务。")])])}),[],!1,null,null,null);a.default=v.exports}}]);