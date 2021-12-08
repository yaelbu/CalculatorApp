import React, { useState } from "react";
import { Container, Previous, Screen, Current, Button } from "./Styled";

export default function Calculator() {

    const [current, setCurrent] = useState('');
    const [previous, setPrevious] = useState('');
    const [operation, setOperation] = useState('');

    const appendValue = (val) => {
        const value = val.target.getAttribute('data');
        console.log("value = ", typeof (value));
        if (value === "." && current.includes(".")) return;
        //if (current.length >= 17) return;
        setCurrent(current + value);
    }


    const handleAllClear = () => {
        setCurrent("");
        setPrevious("");
        setOperation("");
    };

    const handleDelete = () => {
        setCurrent(current.slice(0, -1));
    }

    const chooseOperation = (op) => {
        if (current === '') return
        //console.log('chooseOp')
        if (previous !== '') {
            let value = compute();
            setPrevious(value)
        }
        else {
            setPrevious(current);
            setCurrent('')
        }
        const operation = op.target.getAttribute("data");
        setOperation(operation)

    }
    const equals = () => {
        let value = compute();
        if (value == undefined || value == null) return
        setCurrent(value);
        setPrevious("");
        setOperation("")
    }

    const compute = () => {
        let result;
        let previousNumber = parseFloat(previous);
        let currentNumber = parseFloat(current);

        if (isNaN(previousNumber) || isNaN(currentNumber)) return

        switch (operation) {
            case "+":
                result = currentNumber + previousNumber;
                break;
            case "x":
                result = previousNumber * currentNumber;
                break;
            case "÷":
                result = previousNumber / currentNumber;
                break;
            case "-":
                result = previousNumber - currentNumber;
                break;
            default: return;

        }
        setCurrent('');
        return result;
    }

    return (
        <Container>
            <Screen>
                <Previous>
                    {previous} {operation}
                </Previous>
                <Current>{current}</Current>
            </Screen>

            <Button gridSpan={2} control onClick={handleAllClear}>AC</Button>
            <Button control onClick={handleDelete}>DEL</Button>
            <Button onClick={chooseOperation} operation data={'÷'}>÷</Button>
            <Button onClick={appendValue} data={'7'}>7</Button>
            <Button onClick={appendValue} data={'8'}>8</Button>
            <Button onClick={appendValue} data={'9'}>9</Button>
            <Button onClick={chooseOperation} operation data={'x'}>x</Button>
            <Button onClick={appendValue} data={'4'}>4</Button>
            <Button onClick={appendValue} data={'5'}>5</Button>
            <Button onClick={appendValue} data={'6'}>6</Button>
            <Button onClick={chooseOperation} operation data={'+'}>+</Button>
            <Button onClick={appendValue} data={'1'}>1</Button>
            <Button onClick={appendValue} data={'2'}>2</Button>
            <Button onClick={appendValue} data={'3'}>3</Button>
            <Button onClick={chooseOperation} operation data={'-'}>-</Button>
            <Button onClick={appendValue} gridSpan={2} data={'0'}>0</Button>
            <Button onClick={appendValue} data={'.'}>.</Button>
            <Button onClick={equals} equals>=</Button>

        </Container>
    )
}