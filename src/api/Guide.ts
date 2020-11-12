
import {IHoverTipOptions} from "../models/IHoverTipOptions";
import {BoardmeUtils} from "./BoardmeUtils";
import {IGuide} from "../models/IGuide";





export function getGuide(identifier: string): IGuide | null {

    if ( ! BoardmeUtils.isBoardmeInstalled() ) return null;

    return BoardmeUtils.getBoardme().getGuide( identifier );
}



export function renderGuide(identifier: string, targetElement?: HTMLElement): IGuide | null {

    if ( ! BoardmeUtils.isBoardmeInstalled() ) return null;

    return BoardmeUtils.getBoardme().renderGuide( identifier, targetElement );
}



export function clearGuide(identifier: string): void {

    if ( ! BoardmeUtils.isBoardmeInstalled() ) return;

    return BoardmeUtils.getBoardme().clearGuide( identifier );
}



export function clearGuides(identifiers: string[]): void {

    if ( ! BoardmeUtils.isBoardmeInstalled() ) return;

    return BoardmeUtils.getBoardme().clearGuides( identifiers );
}



export function setHoverTip(targetElement: HTMLElement, message: string, options?: IHoverTipOptions): void {

    if ( ! BoardmeUtils.isBoardmeInstalled() ) return;


    return BoardmeUtils.getBoardme().setHoverTip( targetElement, message, options );
}
