import "./App.css";

function App() {
    return (
        <>
            <div className="container flex">
                <div className="wrapper">
                    <div className="row">
                        <div className="wrap">
                            <input type="text" name="password" id="password" readOnly/>
                            <button className="copy">Copy</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col flex">
                            <label htmlFor="length">Length</label>
                            <input type="range" name="length" id="length" min={7} max={20} />
                        </div>
                        <div className="col">
                            <input
                                type="checkbox"
                                name="allowNow"
                                id="allowNum"
                            />
                            <label htmlFor="allowNum">Numbers</label>
                        </div>
                        <div className="col">
                            <input
                                type="checkbox"
                                name="allowChar"
                                id="allowChar"
                            />
                            <label htmlFor="allowChar">
                                Special Characters
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
