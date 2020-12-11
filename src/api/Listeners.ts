
import {BoardmeUtils} from "./BoardmeUtils";

const boardmeLoadListeners: Function[] = [];
let boardmeCheckInterval: any;


export function onLoad(callback: Function): void {
    if ( BoardmeUtils.isBoardmeInstalled() ) return BoardmeUtils.getBoardme().onLoad( callback );

    boardmeLoadListeners.push( callback );

    if ( boardmeCheckInterval ) clearInterval( boardmeCheckInterval );

    boardmeCheckInterval = setInterval(() => {

        console.log( "interval check running..." );

        if ( BoardmeUtils.isBoardmeInstalled() ) {

            for ( let callback of boardmeLoadListeners ) BoardmeUtils.getBoardme().onLoad( callback );

            console.log( "boardme is installed! interval cleared." );

            clearInterval( boardmeCheckInterval );
        }

    }, 1000);
}


