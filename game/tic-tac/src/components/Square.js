import style from "./Square.css"
function Square(props) {
    return (
        <button className="button" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;