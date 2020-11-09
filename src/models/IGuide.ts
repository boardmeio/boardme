



export interface IGuide {
    identifier: string,
    name: string,
    onSubmit(): IGuide
    onDismiss(): IGuide
}
