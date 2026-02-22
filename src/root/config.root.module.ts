import { ConfigModule } from '@nestjs/config'

export const ConfigRootModule = ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
})
