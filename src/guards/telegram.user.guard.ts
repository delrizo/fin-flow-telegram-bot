import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { TelegrafExecutionContext } from 'nestjs-telegraf'
import { Context } from 'telegraf'

@Injectable()
export class TelegramUserGuard implements CanActivate {
    constructor() {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = TelegrafExecutionContext.create(context)
        const botContext = ctx.getContext<Context>()

        if (!botContext.from) {
            const message = 'Не удалось получить информацию'

            await botContext.reply(message)
            return false
        }

        return true
    }
}
