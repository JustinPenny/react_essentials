

export default function Tabs({children, buttons, buttonsContainer}){
    const ButtonsContainer = buttonsContainer; // If we want to pass a container type "menu" as a prop we must assign it to a variable before use
    return(
        <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
        </>

    );
}