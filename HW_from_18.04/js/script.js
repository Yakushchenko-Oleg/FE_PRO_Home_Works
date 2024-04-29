/* Разработать логику setStyle для класса Shape, нужно передать объект для данного метода и он преобразует это в css и применит стили 

// circle2.setStyle(
//     {
//         background: "orange",
//         width: "250px",
//         color: "red"
//     }
// ); 
*/

class Shape{
    constructor(clasName){
        this.element = document.createElement('div')
        this.element.classList.add('shape', clasName)
    }
    render(){
        document.body.append(this.element)
    }
    setStyle(styles){
        for (const key in styles) {
            this.element.style[key] = `${styles[key]}`
        }
    }
}

let circle = new Shape('circle')
circle.render()
circle.setStyle(
    {
    width: '200px',
    height: '300px',
    background: 'aqua',
    }
);