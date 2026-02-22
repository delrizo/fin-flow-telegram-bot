import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { RootModule } from '~/root.module'

async function bootstrap() {
    const logger = new Logger('Bootstrap')

    const app = await NestFactory.create(RootModule)
    await app.listen(3002)

    logger.debug('Telegram Bot is running on port 3002')
}

bootstrap()
