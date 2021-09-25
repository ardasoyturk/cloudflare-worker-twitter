const twitterAPIUrl = 'https://api.twitter.com/1.1/users/lookup.json'

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

  const response = await fetch(
    `${twitterAPIUrl}?screen_name=${url.searchParams.get('username')}`,
    {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
      },
    },
  )
  const data: Record<string, unknown> = await response.json()
  return respond(data)
}
