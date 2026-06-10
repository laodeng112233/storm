async function onRequest(context, request) {
    // 请求阶段无需处理，直接放行
    return request;
}

async function onResponse(context, request, response) {
    // 判空防护
    if (!response || !response.body) {
        return response;
    }

    let body = response.body;
    // 全局替换 wdhysj.9 → wdhysj.11
    body = body.replace(/wdhysj\.9/g, "wdhysj.1");
    // 写回响应体
    response.body = body;

    return response;
}
