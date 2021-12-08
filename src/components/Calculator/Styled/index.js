import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    justify-content:center;
    align-content:center;
    width:400px;
    margin:40px auto;
    grid-template-columns:repeat(4,100px);
    grid-template-rows:minmax(120px,auto) repeat(5,100px);
    border-radius:10px;
    box-shadow:2px 2px 10px #111;
`;

//voir a completer
export const Screen = styled.div`
    grid-column:1/5;
    background-color:#721d16;
    display:flex;
    justify-content:space-around;
    padding:10px;
    flex-direction:column;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    text-align:right;
    word-wrap:break-word;
    word-break:break-all;
`;

export const Previous = styled.div`
    color:rgba(255,255,255,0.75);
    font-size:1.5rem;   
`;

export const Current = styled.div`
    color:white;
    font-size:2.5rem;  
`;

export const Button = styled.button`
    font-size:2rem;
    margin:4px;
    border-radius:12px;
    cursor:pointer;
    background-color:rgba(255,255,255,0.7);
    &:hover{
        background-color:rgba(255,255,255,0.9);
    }

    ${({ gridSpan }) => gridSpan && `grid-column:span ${gridSpan}`};
    ${({ operation }) => operation && `background-color:#847b7b`};
    ${({ control }) => control && `background-color:#d8837c`};
    ${({ equals }) => equals && `border-bottom-right-radius:10px; background-color:#847b7b`};
    ${({ period }) => period && `border-bottom-left-radius:10px; background-color:#d8837c`};


    `;

