import React from "react";
import { useDispatch } from "react-redux";

const InputNumber = () => {
const [guessedNumber, setGuessedNumber] = React.useState("");
const dispatch = useDispatch();

const handleChange = (event) => {
const { value } = event.target;
setGuessedNumber(value);
};

const handleKeyDown = (event) => {
if (event.key === "Event") {
dispatch({
type: "GUESS_NUMBER",
payload: { guessedNumber: Number(guessedNumber) },
});
}
};

return (
<input
   type="number"
   value={guessedNumber}
   onChange={handleChange}
   onKeyDown={handleKeyDown}
   placeholder="продолжайте угадывать"
 />
);
};

export default InputNumber; 