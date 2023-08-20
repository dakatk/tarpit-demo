import {
    GetMapping,
    ControllerBase,
    Controller,
    FileResponse
} from '../../lib/tarpit.ts';

@Controller()
export class FileController extends ControllerBase {
    constructor() {
        super('/file');
    }

    @GetMapping('/example')
    async downloadExampleFile(): Promise<Response> {
        return await new FileResponse('/example.txt').async();
    }
}