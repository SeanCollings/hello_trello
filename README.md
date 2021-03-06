# Instructions

### First:

Login to your Trello account and then while your session is still running open [this link](https://trello.com/app-key) in a new tab. Copy your `Developer API Key`.
Under this key there is a link for `Token`. Navigate there, scroll to the bottom and click `Allow`.
This will show your secret Token. Copy this token as well.

### Second

In the application, under the server folder, find the `.env.test` file. Copy this file and rename it `.env`. 
Replace `your_api_key_here` with your `Developer API Key` copied above.
Replace `your_token_here` with the `Token` you copied above.

# Scripts

### Sever

From root:

```
cd server
```

Install dependencies:

```
yard install or npm install
```

To run the dev environment after install

```
npm run dev
```

### Client

From root:

```
cd app
```

Install dependencies:

```
yard install or npm install
```

To run the dev environment after install

```
npm run dev
```
