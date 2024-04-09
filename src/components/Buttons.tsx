import styled from "styled-components";
import { MathButtons } from ".";

export default function NumberButtons(){

    const Buttons = styled.div`
        display: flex;
        justify-content: center;
    `;

    return (
        <Buttons>
            <NumberButtons />
            <MathButtons />
        </Buttons>
    );
}