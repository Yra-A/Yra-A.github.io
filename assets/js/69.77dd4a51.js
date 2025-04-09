(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{447:function(t,s,a){"use strict";a.r(s);var n=a(8),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mit6-s081-lab7-networking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mit6-s081-lab7-networking"}},[t._v("#")]),t._v(" [MIT6.S081]Lab7: Networking")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pdos.csail.mit.edu/6.828/2021/labs/net.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lab: networking (mit.edu)"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"your-job-net"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#your-job-net"}},[t._v("#")]),t._v(" Your Job (net)")]),t._v(" "),s("p",[t._v("这个 assignment 的实现部分非常简单，难点在于概念和流程的理解上面，感觉自己计网学的还不是很扎实）。在这里我们要为网卡的驱动程序编写代码，能实现对数据的发送和接受。")]),t._v(" "),s("p",[t._v("这个 lab 的 hint 基本就是为代码了，跟着 hint 一步一步实现就可以了。")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("e1000_transmit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mbuf")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your code here.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the mbuf contains an ethernet frame; program it into")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the TX descriptor ring so that the e1000 sends it. Stash")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a pointer so that it can be freed after sending.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("acquire")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("e1000_lock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取锁，防止 race")]),t._v("\n  uint32 tx_idx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("E1000_TDT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取下一个缓冲区下表")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx_ring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" E1000_TXD_STAT_DD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果该标志位没有设置，则说明 overflow 了，返回错误")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("release")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("e1000_lock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx_mbufs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果有未释放的mbuf就释放")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mbuffree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tx_mbufs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填充 descriptor")]),t._v("\n  tx_ring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  tx_ring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  tx_ring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cmd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" E1000_TXD_CMD_EOP  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" E1000_TXD_CMD_RS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  tx_mbufs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 位置加一")]),t._v("\n  regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("E1000_TDT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("E1000_TDT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" TX_RING_SIZE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("release")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("e1000_lock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("e1000_recv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your code here.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check for packets that have arrived from the e1000")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create and deliver an mbuf for each packet (using net_rx()).")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    uint32 rx_idx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("E1000_RDT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("  RX_RING_SIZE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rx_ring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" E1000_RXD_STAT_DD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    rx_mbufs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rx_ring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("net_rx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rx_mbufs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rx_mbufs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mbufalloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填充 descriptor")]),t._v("\n    rx_ring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("rx_mbufs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rx_ring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    regs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("E1000_RDT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rx_idx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"实验结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实验结果"}},[t._v("#")]),t._v(" 实验结果")]),t._v(" "),s("br"),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://yra-typora-image.oss-cn-hangzhou.aliyuncs.com/image-20230221202220483.png",alt:"image-20230221202220483"}})])}),[],!1,null,null,null);s.default=r.exports}}]);