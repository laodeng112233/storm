/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
islide
脚本名称:islide
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^https?:\/\/store-api\.islide\.cc\/pay\/products\/listActive.*? url script-response-body https://raw.githubusercontent.com/llb0824-bb/storm/refs/heads/main/islide.js


[mitm]
hostname = store-api.islide.cc

*******************************
Surge

[Script]
^http[s]?:\/\/store-api.islide.cc\/pay\/products\/listActive.+$ requires-body=1,max-size=0,script-path=islide.js

[MITM]
hostname = store-api.islide.cc

*******************************/
try {
    var obj = JSON.parse($response.body);
    
    if (obj.data && Array.isArray(obj.data)) {
        obj.data.forEach(item => {
            if (item.id === 3) {
                item.id = 23; // 只修改 id=3 的项
            }
        });
    }
    
    $done({body: JSON.stringify(obj)});
} catch (e) {
    
    $done({body: $response.body});
}
