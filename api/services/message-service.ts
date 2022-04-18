import { Injectable, Config } from 'https://cdn.jsdelivr.net/gh/dakatk/tarpit-deno/mod.ts';

@Injectable()
export class MessageService {

    @Config('message')
    private static messageArg = '';

    get message(): Promise<string> {
        return new Promise(resolve => {
            resolve(MessageService.messageArg)
        });
    }
}