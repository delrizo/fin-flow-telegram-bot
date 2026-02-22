import { TelegramUserGuard } from '~/guards/telegram.user.guard'
import { TelegramUser } from '~/decorators/telegram.user.decorator'

import { Update, Ctx, Start } from 'nestjs-telegraf'
import { Context } from 'telegraf'
import { UseGuards } from '@nestjs/common'
import type { User } from 'telegraf/types'
import { BotService } from '~/bot.service'

@Update()
export class BotUpdate {
    constructor(private readonly telegramBotService: BotService) {}

    @Start()
    @UseGuards(TelegramUserGuard)
    async start(@TelegramUser() user: User, @Ctx() ctx: Context) {
        const { message } = await this.telegramBotService.startHandler(user)

        await ctx.reply(message)
    }
}
