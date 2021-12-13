const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
}

const respond = (response: Record<string, unknown>, code?: number) =>
  new Response(JSON.stringify(response), {
    headers: { 'content-type': 'application/json', ...corsHeaders },
    status: code,
  })

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)
  if (!url.searchParams.get('username'))
    return respond({ message: 'No username given.' })

  let response: Response

  if (url.searchParams.get('lookup') === 'likes') {
    const count = parseInt(url.searchParams.get('count') || '20')
    const since_id = url.searchParams.get('since_id') || null
    const max_id = url.searchParams.get('max_id') || null
    response = await fetch(
      `https://api.twitter.com/1.1/favorites/list.json?screen_name=${url.searchParams.get(
        'username',
      )}&count=${count}${since_id ? `&since_id=${since_id}` : ''}${
        max_id ? `&max_id=${max_id}` : ''
      }`,
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
      },
    )
  } else {
    response = await fetch(
      `https://api.twitter.com/1.1/users/lookup.json?screen_name=${url.searchParams.get(
        'username',
      )}`,
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
      },
    )
  }

  const data: Record<string, unknown> = await response.json()
  return respond(data)
}
