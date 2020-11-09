export interface IGuide {
    identifier: string;
    name: string;
    onSubmit(callback: Function): IGuide;
    onDismiss(callback: Function): IGuide;
}
