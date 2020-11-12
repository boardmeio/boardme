
import {BoardmeUtils} from "./BoardmeUtils";





export function renderFlow(identifier: string): void {

    if ( ! BoardmeUtils.isBoardmeInstalled() ) return;

    return BoardmeUtils.getBoardme().renderFlow( identifier );
}



export function clear(identifier: string): void {

    if ( ! BoardmeUtils.isBoardmeInstalled() ) return;

    return BoardmeUtils.getBoardme().clearFlows();
}
