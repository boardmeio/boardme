




export interface IGuide {
    identifier: string;
    name: string;
    type: number;
    onSubmit(callback: Function): IGuide;
    onDismiss(callback: Function): IGuide;
    show(): IGuide;
    hide(): IGuide;
    setBehavior(behavior: GuideBehavior): void;
}


export enum GuideBehavior {
    AUTO = "auto",
    MANUAL = "manual"
}
