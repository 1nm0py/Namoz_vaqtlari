require("dotenv").config();

const { getPrayerTime } = require("./api");

const bot = require("./core/bot");

const port = 5000

bot.start(async (ctx) => {
    ctx.reply("Assalomu Alaykum, Shogirdevning namoz vaqtlarini tog'ri ko'rsatadigan botiga xush kelibsiz!");

    const { times, region, hijri_date } = await getPrayerTime();

    ctx.reply(`
    📍Joylashuv : ${region}, ⌚${hijri_date.month[0].toUpperCase() + hijri_date.month.slice(1)} oyi ${hijri_date.day + 1}-kun    

    ⏰Namoz vaqtlari:

    - Bomdot : ${times.tong_saharlik}

    - Quyosh : ${times.quyosh}
    
    - Peshin : ${times.peshin}
    
    - Asr : ${times.asr}
    
    - Shom : ${times.shom_iftor}
    
    - Xufton : ${times.hufton}
    `);

});

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))

bot.launch()