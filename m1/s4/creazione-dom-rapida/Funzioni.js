export default function createFullElement(tagname,attr){

    let elem = document.createElement(tagname);

    if(attr.id){
        elem.id = attr.id;
    }

    if(attr.className){
        elem.className = attr.className;
    }

    if(attr.textContent){
        elem.textContent = attr.textContent;
    }

    return elem;

}