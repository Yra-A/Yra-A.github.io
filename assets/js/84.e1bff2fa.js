(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{462:function(t,Q,a){"use strict";a.r(Q);var T=a(8),r=Object(T.a)({},(function(){var t=this,Q=t._self._c;return Q("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[Q("p",[t._v("指令系统\n基础知识\n指令一般由 操作码op、寻址特征C、地址码A 组成\n根据地址数的个数，一般分为 零、一、二、三地址指令")]),t._v(" "),Q("ul",[Q("li",[t._v("ISA 规定了：数据类型及格式、指令格式、寻址方式和可访问地址空间大小、I/O 空间的编址方式、中断\n结构、机器的工作状态定义和切换、输入输出结构和数据传送方式、存储保护方式等\n"),Q("ul",[Q("li",[t._v("ISA 指的是软件可以感知的部分，称为软件可见部分")]),t._v(" "),Q("li",[t._v("而指令具体在硬件上如何执行的，称为微体系结构、微架构，这是软件不可感知的，例如如何实现加法器")]),t._v(" "),Q("li",[t._v("综上，不同微架构的机器可以使用相同的 ISA")]),t._v(" "),Q("li")])])]),t._v(" "),Q("p",[t._v("定长操作码指令\n操作码为固定位数 n 位，那么可以支持的指令个数只有")]),Q("p",[Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[Q("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.204ex",height:"1.641ex",viewBox:"0 -725.5 974.3 725.5"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"msup"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(500, 413) scale(0.707)"}},[Q("path",{attrs:{"data-c":"6E",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}})])])])])])])],1),t._v("\n变长操作码指令\n指令字长一般固定，有以下几点需要注意："),Q("p"),t._v(" "),Q("ol",[Q("li",[t._v("短op 不能是 长op 的前缀")]),t._v(" "),Q("li",[t._v("op 不能重复")]),t._v(" "),Q("li",[t._v("一般频率较高的指令分配短 op，依次减少译码时间\n做题策略：")])]),t._v(" "),Q("ul",[Q("li",[t._v("从短 op 开始讨论，短 op 尽可能分配，但要留出 n 种用来扩展")]),t._v(" "),Q("li",[t._v("如果是给了四地址，二地址，判断三地址的最多的个数：需要注意三地址码（短op）不能占据二地址码（长op）的，但是反过来可以，所以有可能出现指令操作码不完全分配干净情况。")]),t._v(" "),Q("li",[t._v("例1：在一个指令系统中，指令字长为32，一个地址码为6位，指令分为4地址指令、3 地址指令和2地址指令，已知4地址指令有 254条，2地址指令有 4097条，则3地址指令至多有多少条?")]),t._v(" "),Q("li",[t._v("法一：四地址留出了 10 和 11 用来扩展，这里2地址 op 有 20 位，高八位先用 1111 1111，后十二位全可以分配，共 4096 个，还有一个可以占据三地址的 10，所以再分配一个 1111 1110 | 1111 1111 1111，而三地址则高八位固定只能是 1111 1110，其还剩 6 位 op，只能是 000 000 ~ 111 110")]),t._v(" "),Q("li",[t._v("法二：首先四地址留出了两个来扩展，所以三地址一共只有 "),Q("p",[Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[Q("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.438ex",height:"2ex",viewBox:"0 -883.9 2403.8 883.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(722.2, 0)"}},[Q("path",{attrs:{"data-c":"D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(1500.2, 0)"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),Q("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(500, 413) scale(0.707)"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"}})])])])])])])])],1),t._v("种，但需要留出一部分给二地址；因为二地址要 4097 个，一共 20 位 op，其专属第三个字段部分可以有"),Q("p",[Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[Q("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.044ex",height:"2ex",viewBox:"0 -883.9 903.6 883.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"msup"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(500, 413) scale(0.707)"}},[Q("path",{attrs:{"data-c":"36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"}})])])])])])])],1),t._v("种，所以前十二位的部分还得占用至少"),Q("p",[Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"7.7ex",height:"2.565ex",viewBox:"0 -883.9 3403.6 1133.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"}}),Q("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(500, 0)"}}),Q("path",{attrs:{"data-c":"39",d:"M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z",transform:"translate(1000, 0)"}}),Q("path",{attrs:{"data-c":"37",d:"M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",transform:"translate(1500, 0)"}})]),Q("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(2000, 0)"}},[Q("g",{attrs:{"data-mml-node":"mo"}},[Q("path",{attrs:{"data-c":"2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"}})])]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(2500, 0)"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(500, 413) scale(0.707)"}},[Q("path",{attrs:{"data-c":"36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"}})])])])])])])],1),t._v("向上取整为 65 种，故 128 - 65 = 63 个")]),t._v(" "),Q("li",[t._v("例2：在一个指令系统中，指令字长为 32，一个地址码为 6 位，指令分为 4 地址指令、3 地址指令和 2地址指令，已知 4地址指令有 254 条，2 地址指令有 4095 条，则 3 地址指令至多有多少条?")]),t._v(" "),Q("li",[t._v("法一：四地址留出了 10 和 11 用来扩展，这里2地址 op 有 20 位，高八位先用 1111 1111，后十二位全可以分配，共 4096 个，只需要 4095 个，多出来的一个三地址无法使用。而三地址则高八位固定是 1111 1110，其还剩 6 位 op 任意分配共"),Q("p",[Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[Q("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.044ex",height:"2ex",viewBox:"0 -883.9 903.6 883.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"msup"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(500, 413) scale(0.707)"}},[Q("path",{attrs:{"data-c":"36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"}})])])])])])])],1),t._v("个")]),t._v(" "),Q("li",[t._v("法二：首先四地址留出了两个来扩展，所以三地址一共只有 "),Q("p",[Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[Q("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.438ex",height:"2ex",viewBox:"0 -883.9 2403.8 883.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(722.2, 0)"}},[Q("path",{attrs:{"data-c":"D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(1500.2, 0)"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),Q("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(500, 413) scale(0.707)"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"}})])])])])])])])],1),t._v("种，但需要留出一部分给二地址；因为二地址要 4095 个，一共 20 位 op，其专属第三个字段部分可以有"),Q("p",[Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[Q("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.044ex",height:"2ex",viewBox:"0 -883.9 903.6 883.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"msup"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(500, 413) scale(0.707)"}},[Q("path",{attrs:{"data-c":"36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"}})])])])])])])],1),t._v("种，所以前十二位的部分还得占用至少"),Q("p",[Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"7.7ex",height:"2.565ex",viewBox:"0 -883.9 3403.6 1133.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"34",d:"M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"}}),Q("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(500, 0)"}}),Q("path",{attrs:{"data-c":"39",d:"M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z",transform:"translate(1000, 0)"}}),Q("path",{attrs:{"data-c":"35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",transform:"translate(1500, 0)"}})]),Q("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(2000, 0)"}},[Q("g",{attrs:{"data-mml-node":"mo"}},[Q("path",{attrs:{"data-c":"2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"}})])]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(2500, 0)"}},[Q("g",{attrs:{"data-mml-node":"mn"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(500, 413) scale(0.707)"}},[Q("path",{attrs:{"data-c":"36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"}})])])])])])])],1),t._v("向上取整为 64 种，故 128 - 64 = 64 个\n寻址方式\n立即寻址")]),t._v(" "),Q("li",[t._v("地址码为 立即数")]),t._v(" "),Q("li",[t._v("获取操作数访存次数：0\n直接寻址")]),t._v(" "),Q("li",[t._v("地址码为 有效地址")]),t._v(" "),Q("li",[t._v("获取操作数访存次数：1\n寄存器寻址")]),t._v(" "),Q("li",[t._v("地址码为 寄存器编号")]),t._v(" "),Q("li",[t._v("获取操作数访存次数：0，由寄存器给出\n间接寻址")]),t._v(" "),Q("li",[t._v("地址码为 有效地址的地址（假设一次间接）")]),t._v(" "),Q("li",[t._v("获取操作数访存次数：2\n"),Q("ul",[Q("li",[t._v("将操作码指向的内存中的数据传到 MAR，再进行访存，得到操作数，一共两次\n寄存器间接寻址")])])]),t._v(" "),Q("li",[t._v("地址码为 寄存器编号")]),t._v(" "),Q("li",[t._v("获取操作数访存次数：1\n"),Q("ul",[Q("li",[t._v("从寄存器中获取有效地址，再访存得到操作数，共 1 次\n基址寻址")])])]),t._v(" "),Q("li",[t._v("地址码为 偏移量，为补码形式")]),t._v(" "),Q("li",[t._v("有效地址 = 偏移地址 + 基址寄存器的值")]),t._v(" "),Q("li",[t._v("面向 OS：基址寄存器只能由 OS（内核态）修改，可以实现动态重定位，有利于多道程序与程序浮动")]),t._v(" "),Q("li",[t._v("一般分为有基址寄存器和无基址寄存器，如无，则可以在指令中加上一个寄存器编号\n变址寻址")]),t._v(" "),Q("li",[t._v("地址码为 基准地址，例如数组首地址，而偏移量由变址寄存器给出")]),t._v(" "),Q("li",[t._v("有效地址 = 基准地址 + 变址寄存器的值")]),t._v(" "),Q("li",[t._v("面向用户：这里的基准地址可以由用户（用户态）修改，便于实现线性表的遍历\n"),Q("ul",[Q("li",[t._v("变址寄存器可以由通用寄存器实现，也可以是专门的变址寄存器，存了偏移量（数组下标）\n[图片]\n相对寻址")])])]),t._v(" "),Q("li",[t._v("地址码为 偏移量，可正可负为补码形式")]),t._v(" "),Q("li",[t._v("有效地址 = （PC) + 偏移量\n"),Q("ul",[Q("li",[t._v("注意这里的 PC 再取指后可能会加 “1”，具体看题目，且 PC 其指向了指令在内存中的首地址，且 + 1 的单位为一个指令字长\n"),Q("ul",[Q("li",[t._v("尤其是根据 jmp 计算相对寻址的偏移量，勿忘此时 PC 已经指向了下一条指令，所以偏移量得多个 2")])])]),t._v(" "),Q("li",[t._v("例如：指令字长为 4B，1 字为 1 B，则向前跳 16 个指令下，新的地址 addr = PC + 1 * 4 - 16 * 4 = PC + (1 - 16) * 4")])])]),t._v(" "),Q("li",[t._v("常用于转移指令 jmp A")]),t._v(" "),Q("li",[t._v("便于实现相对转移以及程序的浮动\n指令设计风格\nRISC vs. CISC")]),t._v(" "),Q("li",[t._v("408 中：\n"),Q("ul",[Q("li",[t._v("出现：指令流水线、load / store，一定是 RISC")]),t._v(" "),Q("li",[t._v("出现：采用微程序控制，一定是 CISC\n[图片]\nMIPS 指令\nMIPS 为 RISC 风格的，采用 32 位定长指令字，32 位机器字长，故所有寄存器也为 32 位。操作码字段也是固定的长度，无专门的寻址方式字段。\n访存指令只有 load 和 store\n寄存器\nMIPS 提供了 32 个寄存器，故一般寄存器编号占 5 bit\n[图片]")])])]),t._v(" "),Q("li",[t._v("a0 - a3：存非浮点数的调用入口参数。A 先存入 a 中再调用 B，若参数 > 4 个，则其余存入栈中。若 A 在 B 返回后也要使用 a，则 A 自己保存。")]),t._v(" "),Q("li",[t._v("v0 - v1：存从 B 返回的非浮点数的返回值。B 返回前先将返回值存入 v，再返回")]),t._v(" "),Q("li",[t._v("ra：存返回地址；A 调用 B 时通过 jal 自动将返回地址 PC + 4 存入 ra 寄存器；B 返回 A 时通过 jr ra 将 ra 寄存器中的值存入 PC")]),t._v(" "),Q("li",[t._v("s0 - s7：称为保存寄存器（被调用者保存），若里面 B 过程中需要使用 s，则在开始段中先将其存入栈，并在返回前恢复，其值回到 A 后仍能被继续使用")]),t._v(" "),Q("li",[t._v("t0 - t9：称为临时寄存器（调用者保存），若 t 中的值在 B 返回后 A 仍需使用，则 A 自己保存。其值无需由被调用者 B 保存，自由使用即可\n[图片]")])]),t._v(" "),Q("ol",[Q("li",[t._v("R 型指令\n[图片]\nR 型指令限定为寄存器之间操作的指令，rs、rt 为两个来源寄存器编号，rd 为目标寄存器编号；op 字段固定为 000 000，具体操作类型由 func 字段指明；shamt 为位移指令的位移字段")])]),t._v(" "),Q("ul",[Q("li",[t._v("由于 R 型指令 op 固定为 000 000，所以 I 型 J 型指令一共只有 63 种操作码")])]),t._v(" "),Q("ol",{attrs:{start:"2"}},[Q("li",[t._v("I 型指令\n[图片]\nI 型指令是立即数指令，一般分为下面几种")])]),t._v(" "),Q("ul",[Q("li",[t._v("双目运算类：rs + 立即数 —> rt")]),t._v(" "),Q("li",[t._v("load / store：寄存器在左边，内存在右边\n"),Q("ul",[Q("li",[t._v("load：rt <— M[rs + 立即数]")]),t._v(" "),Q("li",[t._v("store：rt —> M[rs + 立即数]")])])]),t._v(" "),Q("li",[t._v("条件转移（相对寻址）：if (rs ? rt) PC <— (PC + imm)")])]),t._v(" "),Q("ol",{attrs:{start:"3"}},[Q("li",[t._v("J 型指令\n[图片]\n常用指令\n[图片]\n[图片]")])]),t._v(" "),Q("ul",[Q("li",[t._v("赋值给寄存器：总是给最左边的")]),t._v(" "),Q("li",[t._v("和主存交互，左边的是寄存器部分，右边的是主存部分\nMIPS 的过程调用\n过层调用，又称 函数调用、子程序调用。")]),t._v(" "),Q("li",[t._v("ra：存返回地址（在 jal 指令中会先 ra = PC + 4 再 jump）")]),t._v(" "),Q("li",[t._v("fp：存当前函数栈的栈桢（栈底），其指向的存储单元一般保存了返回地址\nMIPS 所有寄存器均为 32 位长度，存储单元大小也为 4B，其地址 A，表示的是字节为 (A, A+1, A+2, A+3) 的存储单元，例如：fp 中存了 48，则表示（48，49，50，51）这个存储单元\n【过程调用流程】假设函数 A，调用函数 B")]),t._v(" "),Q("li",[t._v("寄存器：\n"),Q("ul",[Q("li",[t._v("保存寄存器 s0 - s7，如果从被调用过程返回后 A 还要用，被调用者 B 需要保存")]),t._v(" "),Q("li",[t._v("临时寄存器 t0 - t9 ，其值在被调用过程返回后不需要被用。如果需要的话，由调用者 A 提前保存")]),t._v(" "),Q("li",[t._v("ra 寄存器，存了当前有用控制权的函数执行完后的返回地址")]),t._v(" "),Q("li",[t._v("fp 寄存器，存了当前函数的栈桢（一般保存了被调用者 B 执行完后的返回地址）")])])])]),t._v(" "),Q("ol",[Q("li",[t._v("A 调用 B 之前，先将 B 需要的参数保存进指定地方（如：a0、a1 寄存器）")]),t._v(" "),Q("li",[t._v("A 执行 jal，包括了保存 ra = PC + 4 以及 控制转移到 B 函数")]),t._v(" "),Q("li",[t._v("被调用者 B 开始段：")])]),t._v(" "),Q("ul",[Q("li",[t._v("计算并分配空间 sp - xxxx")]),t._v(" "),Q("li",[t._v("先保存 A 的现场（A 的 ra，A 的 fp 共 8 B）")]),t._v(" "),Q("li",[t._v("保存 保存寄存器 s0 - s7（有需要的话）")]),t._v(" "),Q("li",[t._v("以 main 函数调用 set_array 函数为例，需要按顺序执行：\n"),Q("ul",[Q("li",[t._v("先计算需要分配的空间，并减小 sp，腾出空间")]),t._v(" "),Q("li",[t._v("保存 ra（main 函数中 jal set_array 的下一条指令位置）")]),t._v(" "),Q("li",[t._v("保存 main 的 fp，并设置 fp 寄存器为 set_array 的栈桢（其指向了上面刚保存的 main 的 ra）")]),t._v(" "),Q("li",[t._v("保存 s1，并将要用的局部变量 数组 address 的首地址存入 s1\n[图片]")])])])]),t._v(" "),Q("ol",{attrs:{start:"4"}},[Q("li",[t._v("执行过程 B")]),t._v(" "),Q("li",[t._v("被调用者 B 将返回结果放到指定位置，例如：寄存器 v0 - v1")]),t._v(" "),Q("li",[t._v("执行 exit 函数返回 A")])]),t._v(" "),Q("ul",[Q("li",[t._v("将栈底的 ra 存入 ra 寄存器")]),t._v(" "),Q("li",[t._v("将栈底的 fp 存入 fp")]),t._v(" "),Q("li",[t._v("将栈底的 s1 存入 s1")]),t._v(" "),Q("li",[t._v("释放分配的空间 sp + xxxx")]),t._v(" "),Q("li",[t._v("函数返回：PC <— (ra)")])])])}),[],!1,null,null,null);Q.default=r.exports}}]);