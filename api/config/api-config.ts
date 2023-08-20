import { Config } from '../../lib/tarpit.ts';

export class ApiConfig {
    @Config('message')
    public static message = '';
}