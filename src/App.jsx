import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
    const [password, setPassword] = useState("");
    const [allowNum, setAllowNum] = useState(false);
    const [allowChar, setAllowChar] = useState(false);
    const [length, setLength] = useState(7);

    const passRef = useRef(password);

    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if (allowNum) str += "0123456789";
        if (allowChar) str += "~!@#$%^&*()_+=-?<>.*";

        for (let i = 1; i <= length; i++) {
            // generate a random index
            let rndIdx = Math.floor(Math.random() * str.length);
            // amend the char at random index to pass
            pass += str.charAt(rndIdx);
        }

        return pass;
    }, [allowNum, allowChar, length, setPassword]);

    const copyPassword = () => {
        passRef.current.select();
        console.log(passRef)
        window.navigator.clipboard.writeText(passRef.current.value);
        document.querySelector(".copy").classList.add("copied");
        document.querySelector(".copy").innerHTML = "Copied!";
    };

    useEffect(() => {
        document.querySelector(".copy").classList.remove("copied");
        document.querySelector(".copy").innerHTML = "Copy";
        setPassword(generatePassword());
    }, [allowChar, allowNum, length, setPassword]);

    return (
        <>
            <div className="container flex">
                <div className="wrapper">
                    <div className="row">
                        <h1>Password Generator</h1>
                    </div>
                    <div className="row">
                        <div className="wrap">
                            <input
                                type="text"
                                name="password"
                                id="password"
                                readOnly
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                ref={passRef}
                            />
                            <button className="copy" onClick={copyPassword}>
                                Copy
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col flex">
                            <label htmlFor="length">Length: {length}</label>
                            <input
                                type="range"
                                name="length"
                                id="length"
                                min={4}
                                max={20}
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="checkbox"
                                name="allowNum"
                                id="allowNum"
                                checked={allowNum}
                                onChange={() => setAllowNum((curr) => !curr)}
                            />
                            <label htmlFor="allowNum">Numbers</label>
                        </div>
                        <div className="col">
                            <input
                                type="checkbox"
                                name="allowChar"
                                id="allowChar"
                                checked={allowChar}
                                onChange={() => setAllowChar((curr) => !curr)}
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
