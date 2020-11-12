
import {BoardmeUtils} from "./BoardmeUtils";





export function event(event: string, properties?: any): void {

    if ( ! BoardmeUtils.isBoardmeInstalled() ) return;

    return BoardmeUtils.getBoardme().event( event, properties );
}
