import { OfferCard } from "..";
import { List } from "./styles";

const OffersList = ({ offers, related }) => {
  return (
    <List related={related}>
      {offers?.map((offer) => {
        return <OfferCard key={offer.id} offer={offer} />;
      })}
    </List>
  );
};

export default OffersList;
