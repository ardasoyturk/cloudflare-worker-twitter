# cloudflare-worker-twitter

This is a Cloudflare Worker for fetching data from Twitter User API.

## ❔ About this project

I created this Worker to hide my API key while sending requests to the Twitter API on open-sourced projects ([Twitter Profile Viewer](https://twitter-profile-viewer.pages.dev)) and I thought that it can be useful for everyone.

## 🔋 Getting Started

### 🌐 Try it online

You can try the worker online by going to [this](https://twitter-profile-api.ardasoyturk.workers.dev/?username=soyturkarda_) website.
Example usage of the API: `https://twitter-profile-api.ardasoyturk.workers.dev/?username=soyturkarda_`

### 💻 Init worker locally

You need to install [Cloudflare Wrangler](https://github.com/cloudflare/wrangler) and [Node.js](https://nodejs.org) to init this worker locally.

```bash
wrangler generate cloudflare-worker-twitter https://github.com/ardasoyturk/cloudflare-worker-twitter
```

## 🤢 Issues

If you run into issues with this specific project, please feel free to file an issue [here](https://github.com/ardasoyturk/cloudflare-worker-twitter/issues). If the problem is with Wrangler, please file an issue [here](https://github.com/ardasoyturk/cloudflare-worker-twitter/issues).
