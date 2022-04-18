import {
    ControllerBase, 
    Controller,
    GetMapping,
    JsonResponse,
} from 'https://cdn.jsdelivr.net/gh/dakatk/tarpit-deno/mod.ts';

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