import { BadGatewayException, Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { firstValueFrom } from 'rxjs'
import { User } from 'telegraf/types'

@Injectable()
export class BotService {
    constructor(@Inject('DB_GATEWAY') private client: ClientProxy) {}

    async startHandler(_user: User) {
        try {
            const result = await firstValueFrom(
                this.client.send<{ user: unknown; isNew: boolean }, { telegramId: number }>('register_user', { telegramId: _user.id })
            )

            if (!result.user) {
                throw new BadGatewayException(result)
            }

            if (result.isNew) {
                return {
                    message: `Добро пожаловать ${_user.first_name ?? _user.username}! Вы успешно зарегистрированы.`
                }
            } else {
                return {
                    message: `С возвращением ${_user.first_name ?? _user.username}! Вы уже зарегистрированы в системе.`
                }
            }
        } catch (error) {
            console.error('Ошибка связи с DB Gateway:', error)

            return {
                message: `${_user.first_name ?? _user.username} произошла техническая ошибка. Попробуйте позже.`
            }
        }
    }
}
