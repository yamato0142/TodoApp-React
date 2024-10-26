import styled from "styled-components";

const IncompleteArea = styled.div`
    border: 2px solid #aacfd0;
    width: 400px;
    min-height: 200px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
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


export const InCompleteTodo = (props) => {
    const { todos, onClickDelete} = props;
    return (
        <IncompleteArea>
            <Title>未完了のTODO</Title>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <ListRow>
                            <TodoItem>{todo}</TodoItem>
                            <Button>完了</Button>
                            <Button onClick={onClickDelete}>削除</Button>
                        </ListRow>
                    </li>
                ))}
            </ul>
        </IncompleteArea>
    )
}