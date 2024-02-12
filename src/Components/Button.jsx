export default function Button({children, onAdd}) {
    return(
        <button onClick={onAdd} >{children}</button>
    );
}