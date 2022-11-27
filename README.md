

<p align="center">
<a href="https://github.com/wajeht/windows_form_unique_login/releases">

<img src="https://github.com/wajeht/unique-login-web/blob/main/public/img/android-chrome-512x512.png" width="200">

</a>
</p>

# <p align="center">Unique Login</p>

<p align="center">
A simple over engineered full-stack web application that spits out unique login credentials
</p>

# ⚠️ Depreciated
This codebase is no longer actively maintained. The package will continue working, but support and changes are no longer provided.


# 💪 Motivation

I was inspired by the window's version that I've developed last year; I wanted to abe to use it anywhere I go. Its font-end is running as NGINX as static file and Nodejs as an API end point.

# 📺 Screenshots

<img src="https://raw.githubusercontent.com/wajeht/unique-login-web/main/public/img/screenshot.png" width="250">


# 📚 Technology

<div align="center">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />‏‎ ‎‏‎
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /> ‎‏‎‏‎
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> ‎‏‎
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />‏‎ ‎‏‎
<img src="https://img.shields.io/badge/Materialed--CSS-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" />‏‎ ‎
<img src="https://img.shields.io/badge/restful-api-0081CB?style=for-the-badge&logo=restful-api-ui&logoColor=white" />‏‎ ‎
<img src="https://img.shields.io/badge/nginx-239120?&style=for-the-badge&logo=nginx&logoColor=white" />‏‎ ‎
<img src="https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />‏‎ ‎‏‎
</div>

# 🧑‍💻 Getting Started

The following documentation will guide toward your local development. Read through it carefully and let me know if you have any question!

## Prerequisites

You must have Nodejs installed on your computer to have this project run locally. If you don't have it feel free to google on how to install it. It is pretty simple

## Installation

1. After you have install Nodejs, you can start workig on the project using the following instructions.
2. Clone the repo

   ```
   git clone https://github.com/wajeht/unique-login-app.git
   ```

3. Install NPM packages

   ```
   npm install
   ```

4. Enter your make a new file inside /server and called it .env

   ```
   PORT=3000
   ```

5. Go go the server folder and type in the run command.

   ```
   npm run dev
   ```

6. Now you can visit the following url on your browser.
   ```
   http://localhost:3000/
   ```

# 📃 API end points
We have two resources available for api call.
- username
- password

## Username

Replace {param} with the following words. It does not have to be in order. Any placement will work.

```
adjectives, verbs, nouns, animals
```

### For example:

`GET` /api/username/nouns/adjectives

```json
{
  "username": "Stinkbugrestaurant"
}
```

| Verbs | End-points                                    |
| ----- | --------------------------------------------- |
| `GET` | /api/username                                 |
| `GET` | /api/username/{param}                         |
| `GET` | /api/username/{param}/{param}                 |
| `GET` | /api/username/{param}/{param}/{param}         |
| `GET` | /api/username/{param}/{param}/{param}/{param} |

## Password

Replace {param} with the following words. It does not have to be in order. Any placement will work.

```
uppercase, lowercase, number, special
```

But {length} should always be a number.

### For example:

`GET` /api/password/14/uppercase/special

```json
{
  "password": "$I*OYS&!N!P*JJ"
}
```

| Verbs | End-points                                             |
| ----- | ------------------------------------------------------ |
| `GET` | /api/password                                          |
| `GET` | /api/password/{length}                                 |
| `GET` | /api/password/{length}/{param}                         |
| `GET` | /api/password/{length}/{param}/{param}                 |
| `GET` | /api/password/{length}/{param}/{param}/{param}         |
| `GET` | /api/password/{length}/{param}/{param}/{param}/{param} |

# 👥 Contribute

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

# © License

Distributed under the MIT License © [wajeht](https://www.github.com/wajeht/). See LICENSE for more information.
