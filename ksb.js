/*******************************
  公众号:木木IOS分享00
关注了解更多新科技！！！
掌阅
脚本名称:老登11
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830t
*******************************
[rewrite_local]
^https?:\/\/api\.ankianki\.com\/user\/order\/generalCreate.*? url script-response-body https://raw.githubusercontent.com/llb0824-bb/storm/refs/heads/main/ksb.js
[mitm] 
hostname = *.ankianki.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.ankianki.com\/user\/order\/generalCreate.+$ requires-body=1,max-size=0,script-path=ankianki.js

[MITM]
hostname = *.ankianki.*

*******************************/
// 直接替换响应体为你指定的JSON内容
var targetResponse = {
    "code": "200",
    "data": "1",
    "time": "1768515773",
    "encrypt": "YGJpDhNxSqvEDxeUdxiQ8K=="
};

// 转换为JSON字符串并提交
$done({
    body: JSON.stringify(targetResponse)
});

// 日志输出（验证替换结果）
console.log("✅ 响应体已替换为目标值");
console.log("替换后响应：" + JSON.stringify(targetResponse));
