
import {BoardmeUtils} from "./BoardmeUtils";





export function user(id: string): void {

    if ( ! BoardmeUtils.isBoardmeInstalled() ) return;

    return BoardmeUtils.getBoardme().user( id );
}
