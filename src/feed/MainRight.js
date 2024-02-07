function RightSide({mode, setMode}) {

    function changeMode() {
        setMode(!mode);
    }
    return <div className={"column"}>
        {mode ?
            <div className={"HiddenButton"} onClick={changeMode}>Light mode</div> : <div className={"HiddenButton"} onClick={changeMode}>Night mode</div>}
    </div>
}

export default RightSide;