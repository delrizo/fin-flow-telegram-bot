import { TelegrafModule } from 'nestjs-telegraf'
import { session } from 'telegraf'

export const TelegrafRootModule = TelegrafModule.forRootAsync({
    useFactory: () => ({
        token: process.env.TELEGRAM_BOT_TOKEN!,
        middlewares: [session()]
    })
})
