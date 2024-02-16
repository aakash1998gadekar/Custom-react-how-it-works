function customRender(reactElement,container){

    //simple code
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    //code using loop

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop == 'chidlren') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}

//setting up anchor tag
//how react resolve anchor tag ad sets its values
//HOW ALL THESE THINGS WORKS IN REACT BEHIND THE SCENE
//REACT.CREATEELMENT IS GIVEN BY REACT TO CREATE ELEMENTS IN REACT
const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)

