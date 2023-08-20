import { 
    Tarpit,
    PostMapping, 
    ControllerBase, 
    Controller, 
    JsonBody, 
    QueryParams, 
    RouteParams,
    TextResponse
} from '../../lib/tarpit.ts';
import type { MessageBody, MessageQuery, MessageRoute } from '../models/message.ts';
import { MessageService } from '../services/message-service.ts';

@Controller()
export class MessageController extends ControllerBase {
    constructor(private messageService: MessageService) {
        super();
    }

    @PostMapping('/message/{name}')
    message(@JsonBody() body: MessageBody, @QueryParams() queryParams: MessageQuery, @RouteParams() routeParams: MessageRoute): Response {
        Tarpit.log(`Query Params: ${JSON.stringify(queryParams)}`, 'magenta', 'white');
        Tarpit.log(`Route Params: ${JSON.stringify(routeParams)}`, 'magenta', 'white');

        const receiverName: string = body.name as string;
        const senderName: string = routeParams.name as string;

        return new TextResponse(this.messageService.message(senderName, receiverName));
    }
}
