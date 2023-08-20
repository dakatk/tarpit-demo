import { Tarpit, ServerConfig } from '../tarpit-deno/mod.ts';
import { FileController } from './api/controllers/file-controller.ts';
import { HelloController } from './api/controllers/hello-controller.ts';
import { MessageController } from './api/controllers/message-controller.ts';
import { MessageService } from './api/services/message-service.ts';

Tarpit.injectModule({
    controllers: [
        HelloController,
        MessageController,
        FileController
    ],
    dependencies: [
        MessageService
    ]
});

const config: ServerConfig = { 
    devMode: true,
    message: 'Hello'
};

Tarpit.createServer(config, {
    setup: () => {},
    close: (signal: Deno.Signal) => console.log(signal)
});