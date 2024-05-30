function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
   

    //we have to create the DOM elemnts
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

//creating elemnts and writing their properties, they will be injecteec for rendering purpose 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

//have to select root 
const mainContainer = document.querySelector('#root')

//render the files
//func(what_to_inject , where_to_inject)
//reactElement , ai function da re mainConianer a inject korte hoibo
customRender(reactElement, mainContainer)