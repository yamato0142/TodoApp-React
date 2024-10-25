import styled from "styled-components";

const InputArea = styled.div`
    background-color: #c6e5d9;
    width: 400px;
    height: 30px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
`;

const Input = styled.input`
    border-radius: 8px;
    border: none;
    padding: 6px 16px;
`;

const Button = styled.button`
    border-radius: 8px;
    border: none;
    padding: 4px 16px;
    margin: 0px 3px;

    &:hover{
        background-color: #79a8a9;
        color: #fff;
        cursor: pointer;
    }
`;

export const InputTodo = (props) => {
    const {todoText, onClickAdd} = props;
    return (
        <InputArea>
            <Input
                placeholder="TODOを入力"
                value={todoText}
                
            />
            <Button onClick={onClickAdd}>追加</Button>
        </InputArea>
    )
}