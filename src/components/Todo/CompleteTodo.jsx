import styled from "styled-components";

const CompleteArea = styled.div`
    border: 2px solid #aacfd0;
    width: 400px;
    min-height: 200px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    background-color: #c9dede;
`;

const Title = styled.p`
    text-align: center;
    margin-top: 0px;
    font-weight: bold;
`;

const ListRow = styled.div`
    display: flex;
    align-items: center;
`;

const TodoItem = styled.p`
    margin: 6px;
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


export const CompleteTodo = (props) => {
    const {todos, onClickBack} = props;
    return (
        <CompleteArea>
            <Title>完了のTODO</Title>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <ListRow>
                            <TodoItem>{todo}</TodoItem>
                            <Button onClick={() => {onClickBack(index)}}>戻す</Button>
                    </ListRow>
                    </li>
                ))}
            </ul>
        </CompleteArea>
    )
}