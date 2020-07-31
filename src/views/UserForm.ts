export class UserForm {
    constructor(public parent: Element) { }

    template(): string {
        return `
            <div> 
                <h1>FTGD</h1>
                <input />
            </div>
            <template></template>
         `
    }

    render(): void {
        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template()

        this.parent.append(templateElement.content)
    }
}