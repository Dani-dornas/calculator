import styled from "styled-components";

export default function NumberButtons(){

    const MathButtonsSld = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    return (
        <MathButtonsSld>
            <button>+</button>
            <button>-</button>
            <button>/</button>
            <button>*</button>
            <button>=</button>
        </MathButtonsSld>
    );
}