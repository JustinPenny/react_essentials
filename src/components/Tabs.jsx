

export default function Tabs({children, buttons, buttonsContainer}){
    const ButtonsContainer = buttonsContainer; // If we want to pass a container type "menu" as a prop it must have an upper case letter 
    return(
        <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
        </>

    );
}