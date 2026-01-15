/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
掌阅
脚本名称:
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群10772238301
*******************************
[rewrite_local]
# 匹配目标接口（数据包中的 order/generalCreate 接口），请求体修改用 http-request
^https?:\/\/api\.ankianki\.com\/user\/order\/generalCreate.*? http-request script-path=https://raw.githubusercontent.com/llb0824-bb/storm/refs/heads/main/ksb.js
[mitm]
hostname = *.ankianki.com

*******************************
Surge

[Script]
^http[s]?:\/\/api.ankianki.com\/user\/order\/generalCreate.+$ requires-body=1,max-size=0,script-path=ankianki.js

[MITM]
hostname = *.ankianki.*

*******************************/
// 读取原始请求体（form-data格式）
var body = $request.body;
if (!body) {
    $done($request.body);
    return;
}

// 精准匹配 "com.greatstudy.gold.1"，替换为目标值（所有点均转义，避免误匹配）
body = body.replace(/com\.greatstudy\.gold\.1/g, "com.greatstudy.gold.168");

// 输出日志方便验证（可在Quantumult X日志中查看替换结果）
console.log("=== goods_id替换成功 ===");
console.log("替换前：" + $request.body);
console.log("替换后：" + body);

// 提交修改后的请求体
$done({body: body});
