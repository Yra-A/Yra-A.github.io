(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{465:function(_,v,l){"use strict";l.r(v);var i=l(8),p=Object(i.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"gc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gc"}},[_._v("#")]),_._v(" GC")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("GC 清理堆数据，分为手动垃圾回收 和 自动垃圾回收")])]),_._v(" "),v("li",[v("p",[_._v("理论基础：可达性 等价于 存活性")])]),_._v(" "),v("li",[v("p",[_._v("追踪式垃圾回收")]),_._v(" "),v("ul",[v("li",[v("p",[v("code",[_._v("三色标记–清扫算法")]),_._v(" -> 内存碎片化 -> "),v("code",[_._v("三色标记-整理算法")]),_._v("(标记完后移动非垃圾数据，使内存更紧凑)")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("复制式回收算法")]),_._v("：将堆内存分为 To 区域和 From 区域，GC 时扫描 From，把有效数据复制到 To 中，最后交换 From 区域和 To 区域")]),_._v(" "),v("ul",[v("li",[_._v("堆内存里利用率低，一般搭配其他垃圾回收算法使用")])])]),_._v(" "),v("li",[v("p",[v("code",[_._v("分代回收")]),_._v("：基于弱分代假说：大部分对象都在年轻时死亡")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("将经受住特定次数的对象成为老年代对象，其余为新生代对象，新生代对象成为垃圾的概率高于老年代对象")])]),_._v(" "),v("li",[v("p",[_._v("可以降低对老年代对象进行垃圾回收的概率，或者对不同对象采取不同垃圾回收算法，例如 "),v("code",[_._v("复制时回收算法")])])])])])])]),_._v(" "),v("li",[v("p",[_._v("引用计数垃圾回收")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("为每个对象维护一个引用计数，当引用计数为 0 时回收该数据，类似 C++ 中的智能指针")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("高频率更新计数会带来不小的开销")])]),_._v(" "),v("li",[v("p",[_._v("循环引用问题，C++ weak_ptr 解决（其不控制对象生命周期，不增加引用计数）")])])])])])]),_._v(" "),v("li",[v("p",[_._v("用户进程暂停去专注进行垃圾回收，称为 STW（Stop The World）")]),_._v(" "),v("ul",[v("li",[_._v("用户进程与 GC 交替执行，称为增量式垃圾回收；但交替执行中用进程可能会修改某些对象，导致 gc 的误判")])])]),_._v(" "),v("li",[v("p",[_._v("三色抽象中，黑色对象表示已经处理完，灰色对象还会被继续处理，当全是黑色数据后剩余的白色对象就是垃圾。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("对于误判垃圾的情况：黑色对象到白色对象有引用，但没有灰色对象到白色对象的引用，白色对象会被误判为垃圾")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("强三色不变式：没有从黑色对象直接到白色对象的引用。确保了一旦对象变为黑色，则一定可达，且其引用的所有对象也可达")])]),_._v(" "),v("li",[v("p",[_._v("弱三色不变式：允许黑色对象直接到白色对象的引用，但要保证可以通过灰色对象到达白色对象")])])])]),_._v(" "),v("li",[v("p",[_._v("通过建立 “读 / 写屏障” 实现 强弱三色不变式")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("写屏障会在写操作中插入指令，目的是把数据对象的修改通知到垃圾回收器，所以通常会有个记录集")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("强三色不变式中称为插入写屏障：当一个黑色对象被修改引用到一个白色对象，则将白色对象修改为灰色，或者把黑色对象退为灰色")])]),_._v(" "),v("li",[v("p",[_._v("弱三色不变式中称为删除写屏障：当删除灰色对象到白色对象的引用时，将白色对象修改为灰色")])])])]),_._v(" "),v("li",[v("p",[_._v("读屏障，非移动式垃圾回收器天然不需要读屏障；类似复制式回收器的移动式垃圾回收期则需要读屏障来保证安全")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("确保用户程序不会访问到已经存在副本的陈旧对象")]),_._v(" "),v("ul",[v("li",[_._v("eg.在复制式回收器中，第一段 STW 中，A 从 From 被拷贝到了 To；接着交替执行的用户程序中，B 引用了 A；第二段 STW 中，B 被拷贝到了 To，此时 To 中的 B 还持有着 From 中 A 的陈旧对象。当 From 被清楚后，再通过 B 访问 A 就会出现错误。")])])])])])])])])]),_._v(" "),v("li",[v("p",[_._v("多核场景下，分为并行垃圾回收（只有垃圾回收程序执行）和 并发垃圾回收（垃圾回收程序会和用户程序并发执行）")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("并行垃圾回收会有分工不均引发的负载均衡问题、同步问题、重复处理数据问题（From 到 To 的重复复制）")])]),_._v(" "),v("li",[v("p",[_._v("并发垃圾回收会有锁竞争的问题，比如用户程序和垃圾回收程序会竞争写屏障的记录集。同时因为有多个线程，为了避免同步开启写屏障的延迟，所以一般采用主体并发垃圾回收，在此基础上支持增量式，便是主体并发增量式回收。")])])])])]),_._v(" "),v("h3",{attrs:{id:"go-语言的-gc-的简单描述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#go-语言的-gc-的简单描述"}},[_._v("#")]),_._v(" Go 语言的 GC 的简单描述")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("Go 语言的 GC 采用 标记-清扫算法，支持主体并发增量式回收，使用插入和删除两种写屏障结合的混合写屏障")])]),_._v(" "),v("li",[v("p",[_._v("标记准备阶段（Mark Setup）")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("STW 暂停程序执行")])]),_._v(" "),v("li",[v("p",[_._v("启动标记工作协程")])]),_._v(" "),v("li",[v("p",[_._v("启动写屏障")])]),_._v(" "),v("li",[v("p",[_._v("找到 roots 放到标记队列中")])]),_._v(" "),v("li",[v("p",[_._v("取消程序暂停")])])])]),_._v(" "),v("li",[v("p",[_._v("标记阶段（Marking) 和用户进程并发执行")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("从标记队列中取出对象，标记为黑色")])]),_._v(" "),v("li",[v("p",[_._v("追踪对象，将后面的对象放进标记队列中，标记为灰色")])]),_._v(" "),v("li",[v("p",[_._v("重复 1、2，知道队列为空")])]),_._v(" "),v("li",[v("p",[_._v("扫描过程中，如果用户进程创建或者修改了对象会触发写屏障，将对象放入单独的 marking 队列，标记为灰色")])])])]),_._v(" "),v("li",[v("p",[_._v("标记终止阶段（Mark Termination）")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("STW 暂停程序执行")])]),_._v(" "),v("li",[v("p",[_._v("rescan：将 Marking 阶段中触发写屏障产生的队列中对象取出，标记为黑色，并检测是否有指向另一个对象；若有则放入标记队列")])]),_._v(" "),v("li",[v("p",[_._v("关闭写屏障")])]),_._v(" "),v("li",[v("p",[_._v("取消程序暂停")])])])]),_._v(" "),v("li",[v("p",[_._v("清理阶段（Sweeping）")]),_._v(" "),v("ol",[v("li",[_._v("清除所有被标记为白色的对象，内存管理结构中有个 bitmap 区域可以进行标记是否为黑色")])])]),_._v(" "),v("li",[v("p",[_._v("GC 触发时机")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("主动触发：调用 "),v("code",[_._v("runtime.GC()")]),_._v(" 方法")])]),_._v(" "),v("li",[v("p",[_._v("被动触发：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("定时触发：由 "),v("code",[_._v("runtime.forcegcperiod")]),_._v(" 变量控制，默认为 2 分钟。当超过 2 分钟没有 gc，则触发 gc")])]),_._v(" "),v("li",[v("p",[_._v("根据内存分配阈值触发：由环境变量 "),v("code",[_._v("GOGC")]),_._v(" 控制，默认为 100。如果当前堆内存是上次 GC 结束后占用内存的 2 倍时，则触发 gc")])])])])])])])])}),[],!1,null,null,null);v.default=p.exports}}]);