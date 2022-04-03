import { 
    Tarpit,
    PostMapping, 
    ControllerBase, 
    Controller, 
    JsonBody, 
    QueryParams, 
    RouteParams
} from '../../../tarpit/mod.ts';
import { MessageService } from '../services/message-service.ts';

@Controller()
export class MessageController extends ControllerBase {
    constructor(private messageService: MessageService) {
        super();
    }

    @PostMapping('/message/{name}')
    async message(@JsonBody() body: any, @QueryParams() queryParams: any, @RouteParams() routeParams: any): Promise<Response> {
        Tarpit.log(`Query Params: ${JSON.stringify(queryParams)}`, 'magenta', 'white');
        Tarpit.log(`Route Params: ${JSON.stringify(routeParams)}`, 'magenta', 'white');
        return await this.messageService.message.then(
            message => new Response(`Message for ${body.name}: "${message}"`)
        );
    }
}
