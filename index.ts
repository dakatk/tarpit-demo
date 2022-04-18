import { Tarpit, ServerConfig } from 'https://cdn.jsdelivr.net/gh/dakatk/tarpit-deno/mod.ts';
import { HelloController } from './api/controllers/hello-controller.ts';
import { MessageController } from './api/controllers/message-controller.ts';
import { MessageService } from './api/services/message-service.ts';

// TODO Create simple CRUD app with Sqlite

Tarpit.injectModule({
    controllers: [
        HelloController,
        MessageController
    ],
    dependencies: [
        MessageService
    ]
});

const config: ServerConfig = { devMode: true };
Tarpit.createServer(config, {
    setup: () => {},
    close: (signal: Deno.Signal) => console.log(signal)
});