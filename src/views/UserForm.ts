export class UserForm {
    constructor(public parent: Element) { }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick
        }
    }

    onButtonClick(): void {
        console.log('hi bitch')
    }

    template(): string {
        return `
            <div> 
                <h1>FTGD</h1>
                <input />
                <button>hell yeah</button>
            </div>
            
         `
    }

    render(): void {
        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template()

        this.parent.append(templateElement.content)
    }
}