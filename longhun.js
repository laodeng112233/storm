async function onRequest(context, request) {
    return request;
}

async function onResponse(context, request, response) {
    const fullUrl = request.url;

    // 接口1：
    if (fullUrl.includes("https://ygapi.whjumeng.com/api/v1/pay/apple/productList")) {
        if (!response || !response.body) return response;
        let body = response.body;
        const reg = /"product_id":"[^"]*"/g;
        body = body.replace(reg, '"product_id":"com.lhzb.ios.8"');
        response.body = body;
        return response;
    }

    // 接口2：
    if (fullUrl.includes("https://ygapi.whjumeng.com/api/v1/pay/apple/appleConfig")) {
        const mockResp = {
            "code": 200,
            "msg": "\u5904\u7406\u6210\u529f",
            "data": {
                "apple_status": 1,
                "third_pay_status": 0
            }
        };
        response.body = JSON.stringify(mockResp);
        response.headers["Content-Type"] = "application/json; charset=utf-8";
        return response;
    }

    // 其余所有接口原样放行，不做任何修改
    return response;
}
