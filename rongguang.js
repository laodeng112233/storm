let obj = JSON.parse($response.body);
let command = JSON.parse(obj.body.command); // 解析嵌套的 command 字符串

// 替换 ProductID 的值
command.Data.ProductID = 'consumable14';

// 将修改后的 command 对象转回字符串
obj.body.command = JSON.stringify(command);

$done({body: JSON.stringify(obj)});
/*
参数说明
title: 主标题
subtitle: 副标题
body: 消息正文
*/

$notification.post("Storm Sniffer","需要修改支付脚本请联系tg:@Kb0015","掌阅修改支付成功请查看!!!")
