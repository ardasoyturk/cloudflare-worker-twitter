# Cloudflare Worker for Twitter API

This is a Cloudflare Worker for fetching data from Twitter User API.

## ⌨ API Reference

#### Get user data

```http
  GET /?username=twitterapi
```

| Parameter  | Type     | Description                                                                |
| :--------- | :------- | :------------------------------------------------------------------------- |
| `username` | `string` | **Required**. The twitter username of the account that you're looking for. |

#### Get user's liked tweets

```http
  GET /?username=twitterapi&lookup=likes
```

| Parameter  | Type     | Description                                                                                               |
| :--------- | :------- | :-------------------------------------------------------------------------------------------------------- |
| `username` | `string` | **Required**. The twitter username of the account that you're looking for.                                |
| `lookup`   | `string` | **Required**. Type `likes` to get the likes.                                                              |
| `count`    | `number` | Optional. Specifies the number of records to retrieve. Must be less than or equal to 200; defaults to 20. |
| `since_id` | `number` | Optional. Returns results with an ID greater than (that is, more recent than) the specified ID.           |
| `max_id`   | `number` | Optional. Returns results with an ID less than (that is, older than) or equal to the specified ID.        |

## 💻 Installation

You need to install [Cloudflare Wrangler](https://github.com/cloudflare/wrangler) and [Node.js](https://nodejs.org) to init this worker locally.

```bash
wrangler generate cloudflare-worker-twitter https://github.com/ardasoyturk/cloudflare-worker-twitter
```

You can use `wrangler dev` command to test the worker locally and use `wrangler publish` to publish your worker to Cloudflare Workers.

## 🤢 Issues

If you run into issues with this specific project, please feel free to file an issue [here](https://github.com/ardasoyturk/cloudflare-worker-twitter/issues). If the problem is with Wrangler, please file an issue [here](https://github.com/ardasoyturk/cloudflare-worker-twitter/issues).
