
import {BoardmeErrors} from "./BoardmeErrors";



export class BoardmeUtils {



    public static isBoardmeInstalled(): boolean {

        const isInstalled = !!(window as any).boardme;

        if ( ! isInstalled ) console.error( BoardmeErrors.BOARDME_NOT_FOUND );

        return isInstalled;
    }



    public static getBoardme(): any {
        return (window as any).boardme;
    }

}
