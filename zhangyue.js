let body = $response.body;

// 使用正则表达式修改响应体中的ProductID
body = body.replace(/"ProductID\\":\\".*?"/, '"ProductID\\":\\"consumable14\\"');

// 返回修改后的响应体
$done({ body });
