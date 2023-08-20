import { Singleton } from '../../lib/tarpit.ts';
import { ApiConfig } from '../config/api-config.ts';
import { capitalize } from '../util/strings.ts';

@Singleton()
export class MessageService {

    message(sender: string, receiver: string): string {
        sender = capitalize(sender);
        receiver = capitalize(receiver);

        return `Message for ${receiver} from ${sender}: "${ApiConfig.message}"`
    }
}