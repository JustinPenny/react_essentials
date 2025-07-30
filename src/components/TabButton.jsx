export default function TabButton(props){
    
    /* Example of what a click listener would look like in vanilla JS
    document.querySelector('button').addEventListener('click', () => {
        //function to trigger on click
    })*/

    // onClick used below is one of the many on<Something> methods provided by React

    return (
    <li>
        <button className={props.isSelected ? 'active' : undefined } onClick={props.onClick}>{props.children}</button>
    </li>
    );
}