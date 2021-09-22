const twitterAPIUrl = 'https://api.twitter.com/1.1/users/lookup.json'

const respond = (response: Record<string, unknown>) =>
  new Response(JSON.stringify(response), {
    headers: { 'content-type': 'application/json' },
  })

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)
  if (!url.searchParams.get('username'))
    return new Response(undefined, { status: 404 })

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
