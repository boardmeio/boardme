
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
