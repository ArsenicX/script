# 知乎：www.zhihu.com, zhuanlan.zhihu.com
# from: https://github.com/id77/QuantumultX/blob/master/Script/zhihu.js

hostname = www.zhihu.com, zhuanlan.zhihu.com

^https:\/\/www\.zhihu\.com\/ url request-header (\r\n)User-Agent:.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 Quark/604.1 T7/10.7 SearchCraft/2.7.7 (Baidu; P1 9.0.0)$2

^https://www\.zhihu\.com/question/ url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/zhihu.js
^https://zhuanlan\.zhihu\.com/p/ url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/zhihu.js

