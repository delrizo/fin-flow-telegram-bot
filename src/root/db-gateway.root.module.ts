import { ClientsModule, Transport } from '@nestjs/microservices'

export const DbGatewayRootModule = ClientsModule.register({
    isGlobal: true,
    clients: [
        {
            name: 'DB_GATEWAY',
            transport: Transport.TCP,
            options: { port: 3001 }
        }
    ]
})
