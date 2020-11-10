




export interface IGuide {
    identifier: string,
    name: string,
    type: number,
    onSubmit(callback: Function): IGuide
    onDismiss(callback: Function): IGuide
}
