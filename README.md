# canva example apps

This is a collection of simple apps built on top of [canva developer API](https://www.canva.com/developers/)
with some simple setup. 

Example code is taken from [canva docs](https://docs.developer.canva.com/apps/extension-points/editing-extensions/quick-start).

# Setup canva extension
open canva account and then follow [these screens](https://www.canva.com/design/DAEtn1sg6kM/Cj4knsw_k3UVXkU3YLE1Iw/view?utm_content=DAEtn1sg6kM&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

<img width="100%" alt="image" src="https://user-images.githubusercontent.com/770012/138694313-d8458a5e-c0d5-4565-8fe3-fdec62d2472e.png">

> TL;DR: click through and fill those:
> - Details
>   - App name
> - Extensions
>   - Development URL
>   - Input file types

## Install:
Conifgures self-signed certificate so might need sudo. Use this:
```
brew install nss
npm i -g --only=prod https-localhost
```
Or read the docs :
https://github.com/daquinoaldo/https-localhost


## Run
Port 5001 is used in the examples. 
Configure `PORT=5001` as env variable or set immediate before `serve` command:
```
PORT=5001 serve
```

Or cd into directory of your choosing and then `serve` or run local path:

``
PORT=5001 serve 01-quickstart
``

