import { ConfigManager } from './config-manager';

export class AppUtils {


    public static isNullorUndefined(obj: any): boolean {
        return obj === null || obj === undefined;
    }

    /** check admin passsword */
    public static checkPass(value: string): boolean {
        return value === ConfigManager.getValue<string>(ConfigManager.passKey);
    }

}
