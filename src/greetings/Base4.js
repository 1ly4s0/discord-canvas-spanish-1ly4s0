//BASE PARA LA BIENVENIDA
const Canvas = require("canvas");
const { formatVariable, applyText } = require("../../utils/functions");

module.exports = class Demotes {

    constructor() {
        this.username = "Clyde";
        this.guildName = "ServerName";
        this.colorTitleBorder = "#000000";
        this.colorMemberCount = "#ffffff";
        this.textMemberCount = "{count} miembros";
        this.memberCount = "0";
        this.backgroundImage = `${__dirname}/../../assets/img/1px.png`;
        this.avatar = `${__dirname}/../../assets/img/default-avatar.png`;
        this.opacityBorder = "0.4";
        this.colorBorder = "#000000";
        this.colorUsername = "#ffffff";
        this.colorUsernameBox = "#000000";
        this.opacityUsernameBox = "0.4";
        this.discriminator = "XXXX";
        this.colorDiscriminator = "#ffffff";
        this.opacityDiscriminatorBox = "0.4";
        this.colorDiscriminatorBox = "#000000";
        this.colorMessage = "#ffffff";
        this.colorHashtag = "#ffffff";
        this.colorBackground = "000000";
    }

    setAvatar(value) {
        this.avatar = value;
        return this;
    }
    
    setDiscriminator(value) {
        this.discriminator = value;
        return this;
    }
    
    setUsername(value) {
        this.username = value;
        return this;
    }
    
    setGuildName(value) {
        this.guildName = value;
        return this;
    }
    
    setMemberCount(value) {
        this.memberCount = value;
        return this;
    }
    
    setBackground(value) {
        this.backgroundImage = value;
        return this;
    }
    
    setColor(variable, value) {
        const formattedVariable = formatVariable("color", variable);
        if (this[formattedVariable]) this[formattedVariable] = value;
        return this;
    }
      
    setText(variable, value) {
        const formattedVariable = formatVariable("text", variable);
        if (this[formattedVariable]) this[formattedVariable] = value;
        return this;
    }
    
    setOpacity(variable, value) {
        const formattedVariable = formatVariable("opacity", variable);
        if (this[formattedVariable]) this[formattedVariable] = value;
        return this;
    }

    async toAttachment() {
        // Create canvas
        const canvas = Canvas.createCanvas(1024, 560);
        const ctx = canvas.getContext("2d");

        const guildName = this.textMessage.replace(/{server}/g, this.guildName);
        const memberCount = this.textMemberCount.replace(/{count}/g, this.memberCount);

        // Draw background
        ctx.fillStyle = this.colorBackground;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let background = await Canvas.loadImage(this.backgroundImage);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const bordes = await Canvas.loadImage('https://i.ibb.co/YPD2qzC/demote.png');
        ctx.drawImage(bordes, 0, 0, canvas.width, canvas.height);

        // Draw username
            ctx.globalAlpha = 1;
            ctx.fillStyle = this.colorUsername;
            ctx.font = applyText(canvas, this.username, 48, 600, "Fredoka");
            ctx.fillText(this.username, 375, 220);

        // Draw guild name
            ctx.fillStyle = this.colorMessage;
            ctx.font = applyText(canvas, guildName, 48, 600, "Fredoka");
            ctx.fillText(guildName, 375, 390);

        // Draw discriminator
            ctx.fillStyle = this.colorDiscriminator;
            ctx.font = "40px Fredoka";
            ctx.fillText(this.discriminator, 461, 297);

        // Draw membercount
            ctx.fillStyle = this.colorMemberCount;
            ctx.font = "27px Fredoka";
            ctx.fillText(memberCount, 88, 490);

        // Draw # for discriminator
            ctx.fillStyle = this.colorHashtag;
            ctx.font = "75px Kerata";
            ctx.fillText("#", 375, 306);

        // Draw avatar circle
            const borde1 = await Canvas.loadImage('https://i.ibb.co/6bMmQZm/demoteborder.png');
            ctx.drawImage(borde1, 0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.arc(180, 281, 135, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            const avatar = await Canvas.loadImage(this.avatar);
            ctx.drawImage(avatar, 45, 146, 270, 270);

            const borde = await Canvas.loadImage('https://i.ibb.co/6bMmQZm/demoteborder.png');
            ctx.drawImage(borde, 0, 0, canvas.width, canvas.height);
        return canvas;
    }
};