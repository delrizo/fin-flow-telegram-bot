import { Module } from '@nestjs/common'
import { ConfigRootModule } from '~/root/config.root.module'
import { TelegrafRootModule } from '~/root/telegraf.root.module'
import { DbGatewayRootModule } from '~/root/db-gateway.root.module'
import { BotModule } from '~/bot.module'

@Module({
    imports: [ConfigRootModule, TelegrafRootModule, DbGatewayRootModule, BotModule]
})
export class RootModule {}
