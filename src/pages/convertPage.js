import { useState } from "react"
import { convert, getFactor, getFincre, secondsToTimeString, timeStringToSeconds } from "../backend/conversions";
import { NavBar } from "../components/navBar"
import swal from 'sweetalert';

const timePattern = /\d{2}:\d{2}.\d{2}/

export const Convert = () => {
    const [timeInput, setTimeInput] = useState("");
    const [eventInput, setEventInput] = useState("50-fr");
    const [toInput, setToInput] = useState("LCM");
    const [fromInput, setFromInput] = useState("SCY");

    const handleConvertClick = () => {
        if (!timePattern.test(timeInput)) {
            swal('Time Parsing Error', 'Please enter a valid time!', "error")
            return;
        }

        const seconds = timeStringToSeconds(timeInput);
        const to = toInput;
        const from = fromInput;

        if (to === from) {
            swal('Conversion Error', `Cannot convert from ${from} to ${to}`, "error")
            return;
        }

        const factor = getFactor(from, to, eventInput);
        const fincre = getFincre(eventInput, from, to);
        console.log(factor, seconds, fincre)
        swal("SwimSync Converter",  secondsToTimeString(convert(from, to, seconds, factor, fincre)), "success")
    }

    return (
        <div>
            <NavBar />

            <div className="container mx-auto bg-green-400 rounded-xl shadow border p-8 m-10 border-2 border-gray-300">
                <p className="text-3xl text-black-700 font-bold mb-5 text-center">Time Converter</p>
                <p className="text-black-500 text-lg text-center">Converts times using Colorado Timing's conversion formulas. </p>
            </div>

            <div className="container mx-auto bg-green-400 rounded-xl shadow border p-8 m-10 border-2 border-gray-300">
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="text" placeholder="00:00.00" onChange={e => setTimeInput(e.target.value)}></input>

                <label for="from-courses">From: </label>
                <select id="from-courses" className="mx-auto bg-gray-200 rounded-xl border p-1 m-10 border-1 border-black" onChange={e => setFromInput(e.target.value)}>
                    <option value="SCY">SCY</option>
                    <option value="SCM">SCM</option>
                    <option value="LCM">LCM</option>
                </select>

                <label for="to-courses">To: </label>
                <select id="to-courses" className="mx-auto bg-gray-200 rounded-xl border p-1 m-10 border-1 border-black" onChange={e => setToInput(e.target.value)}>
                <option value="LCM">LCM</option>
                <option value="SCM">SCM</option>
                <option value="SCY">SCY</option>
                </select>

                <label for="event">Event: </label>
                <select id="event" className="mx-auto bg-gray-200 rounded-xl border p-1 m-10 border-1 border-black" onChange={e => setEventInput(e.target.value)}>
                    <option value="50-fr">50 FR</option>
                    <option value="100-fr">100 FR</option>
                    <option value="200-fr">200 FR</option>
                    <option value="400-fr">400 FR</option>
                    <option value="500-fr">500 FR</option>
                    <option value="800-fr">800 FR</option>
                    <option value="1000-fr">1000 FR</option>
                    <option value="1500-fr">1500 FR</option>
                    <option value="1650-fr">1650 FR</option>
                    <option value="100-bk">100 BK</option>
                    <option value="200-bk">200 BK</option>
                    <option value="100-br">100 BR</option>
                    <option value="200-br">200 BR</option>
                    <option value="100-fl">100 FL</option>
                    <option value="200-fl">200 FL</option>
                    <option value="100-im">100 IM</option>
                    <option value="200-im">200 IM</option>
                    <option value="400-im">400 IM</option>
                </select>

                <button className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="submit" onClick={handleConvertClick}>Convert</button>
            </div>
        </div>
    )
}