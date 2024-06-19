import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    [x: string]: any;
    constructor(appService: AppService);
    root(): {
        message: string;
    };
}
