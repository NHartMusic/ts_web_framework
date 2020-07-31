export class UserForm {
    constructor(public parent: Element) { }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick,
            'mouseover:h1': this.onHeaderHover
        }
    }

    onButtonClick(): void {
        console.log('hi bitch')
    }

    onHeaderHover(): void {
        console.log('i will fuck your mom')
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

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap()

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':')

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey])
            })
        }
    }

    render(): void {
        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template()

        this.bindEvents(templateElement.content)

        this.parent.append(templateElement.content)
    }
}