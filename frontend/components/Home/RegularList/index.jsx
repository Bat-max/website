import { List, Item } from "./styles";

const RegularList = ({ data, bigSpaces }) => {
  return (
    <>
      {data && (
        <List>
          {data.map(({ item, id }) => (
            <Item key={id} bigSpaces={bigSpaces}>
              {item}
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default RegularList;
