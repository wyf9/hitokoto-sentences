/*
export function onRequest(context) {
    return new Response("get page")
  }
*/

/**
 * 获取指定范围内的随机整数，包含起始值和结束值。
 *
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 随机整数
 */
function getRandomInt(min, max) {
  // 使用 Cloudflare Workers 提供的 crypto API 生成更安全的随机数
  const randomBuffer = new Uint32Array(1);
  crypto.getRandomValues(randomBuffer);
  const randomNumber = randomBuffer[0] / (0xFFFFFFFF + 1);

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(randomNumber * (max - min + 1) + min);
}
  
  export async function onRequest(context) {
    // build info
    const response = await fetch("https://sentences.wyf9.top/build_info.json");
    const data = await response.json();
    const start_all_id = data.all_ids.start;
    const end_all_id = data.all_ids.end;
    
    const rand_id = getRandomInt(start_all_id, end_all_id);

    return new Response(start_all_id + " " + end_all_id + " " + rand_id);

    // var resp = await fetch("https://sentences.wyf9.top/sentences_lite.json");
    //     var resp_json = resp[rand_id];
    //     return new Response(JSON.stringify({
    //       //uuid: resp_json.uuid,
    //       hitokoto: resp_json.hitokoto,
    //     }));
  
    /*/ 根据请求参数返回不同格式的数据
    const { searchParams } = new URL(context.request.url);
    const format = searchParams.get('format') || 'text';
    switch (format) {
      case 'lite':
        var resp = await fetch("https://sentences.wyf9.top/sentences_all.json");
        var resp_json = resp[rand_id];
        return new Response(JSON.stringify({
          uuid: resp_json.uuid,
          hitokoto: resp_json.hitokoto,
        }));
      case 'all':
        return new Response(JSON.stringify(resp_json));
      case 'text':
        var resp = await fetch("https://sentences.wyf9.top/sentences_all.json");
        var resp_json = resp[rand_id];
        return new Response(resp_json.hitokoto);
      default:
        return new Response('Invalid format', { status: 400 });
  }
  
    
  */
    
  }