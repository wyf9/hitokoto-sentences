/*
export function onRequest(context) {
    return new Response("get page")
  }
*/

function getRandomId(start_all_id, end_all_id) {
    return Math.floor(Math.random() * (end_all_id - start_all_id + 1)) + start_all_id;
  }
  
  export async function onRequest(context) {
    // build info
    const response = await fetch("https://sentences.wyf9.top/build_info.json");
    const data = await response.json();
    const start_all_id = data.all_ids.start;
    const end_all_id = data.all_ids.end;
    
    const rand_id = getRandomId(start_all_id, end_all_id);

    return new Response(rand_ld);

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