import { Injectable, Config } from '../../../tarpit/mod.ts';

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