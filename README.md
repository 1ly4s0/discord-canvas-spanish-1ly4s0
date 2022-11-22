# discord-canvas-spanish-1ly4s0

[![downloadsBadge](https://img.shields.io/npm/dt/discord-canvas-spanish-1ly4s0?style=for-the-badge)](https://npmjs.com/discord-canvas-spanish)
[![versionBadge](https://img.shields.io/npm/v/discord-canvas-spanish-1ly4s0?style=for-the-badge)](https://npmjs.com/discord-canvas-spanish)
[![doc](https://img.shields.io/badge/Documentation-Click%20here-blue?style=for-the-badge)](https://www.discord-canvas-spanish.net)

## Fácil de usar

¿Quieres crear un bot de Discord utilizando la librería de discord.js y quieres integrar buenas imágenes en Canvas? discord-canvas-spanish-1ly4s0 está hecho para ti! ¡Puede crear excelentes imágenes de bienvenida, imágenes de despedida y otras imágenes divertidas totalmente personalizables utilizando las muchas funciones fáciles de usar!

## Instalación

```bash
$ npm i discord-canvas-spanish-1ly4s0@latest
```

## [Suscribete a mi canal de YouTube!](https://www.youtube.com/c/tecnobros)

## Ejemplo de Despedida

```js
const Canvas = require("discord-canvas-spanish-1ly4s0"),
  Discord = require("discord.js");

const image = await new Canvas.Goodbye()
  .setUsername("1ly4s0")
  .setDiscriminator("2447")
  .setMemberCount("140")
  .setGuildName("Server DEV")
  .setAvatar("https://i.ibb.co/j4rsNvy/nopp.png")
  .setColor("border", "#8015EA")
  .setColor("username-box", "#8015EA")
  .setColor("discriminator-box", "#8015EA")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#8015EA")
  .setColor("avatar", "#8015EA")
  .setBackground("https://i.ibb.co/JF8CTJJ/kaytbotperfil.jpg")
  .toAttachment();

const attachment = new Discord.MessageAttachment(image.toBuffer(), "goodbye-image.png");

message.channel.send(attachment);
```

<img src="https://cdn.discordapp.com/attachments/1032336181817528330/1044640222249504788/goodbye-image.png" height="250"></img>

## Example RankCard

```js
const Canvas = require("discord-canvas-spanish-1ly4s0"),
  Discord = require("discord.js");

const image = await new Canvas.RankCard()
    .setAvatar(avatarimg)
    .setXP("current", 500)
    .setXP("needed", 1000)
    .setLevel(7)
    .setRank(2)
    .setReputation(450)
    .setRankName("professional")
    .setUsername("1ly4s0")
    .setBadge(1, "gold")
    .setBadge(3, "diamond")
    .setBadge(5, "silver")
    .setBadge(6, "bronze")
    .setBackground("https://i.ibb.co/JF8CTJJ/kaytbotperfil.jpg")
    .toAttachment();

const attachment = new Discord.MessageAttachment(image.toBuffer(), "rank-card.png");

message.channel.send(attachment);
```

<img src="https://cdn.discordapp.com/attachments/1032336181817528330/1044640545370292306/rank-card.png" height="250"></img>

## Ejemplo de tienda de Fortnite

```js
const Canvas = require("discord-canvas-spanish-1ly4s0"),
  Discord = require("discord.js");

const image = await shop
  .setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  .toAttachment();

let attachment = new Discord.MessageAttachment(image, "FortniteShop.png");

message.channel.send(attachment);
```

<img src="https://i.imgur.com/3qO81V8.jpg" height="600"></img>

## Ejemplo de estatus de Fortnite

```js
const canvas = require("discord-canvas-spanish-1ly4s0"),
  stats = new canvas.FortniteStats();
  
const user = "1ly4s0",
  platform = "pc";
  
let image = await stats
  .setToken("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")
  .setUser(user)
  .setPlatform(platform)
  .toAttachment();

if (platform !== "pc" && platform !== "xbl" && platform !== "psn") return message.channel.send("Please enter a valid platform")
if (!image) return message.channel.send("User not found")

let attachment = new Discord.MessageAttachment(image.toBuffer(), "FortniteStats.png");

message.channel.send(attachment);
```

<img src="https://i.imgur.com/xqnabX5.png" height="450"></img>

## Contribucion

Si tiene una solicitud para una nueva función, puede abrir un problema en Github. ¡Se agradecen las solicitudes de extracción!

## Creditos

Hecho por [1ly4s0](https://github.com/1ly4s0) con ❤️  
