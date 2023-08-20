import {
    ControllerBase, 
    Controller,
    GetMapping,
    JsonResponse,
} from '../../lib/tarpit.ts';

@Controller()
export class HelloController extends ControllerBase {
    constructor() {
        super('/hello');
    }

    @GetMapping('/world')
    helloWorld(): Response {
        return new JsonResponse({ hello: 'world' });
    }
}