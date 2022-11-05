import { BaseTable, THead, Th } from './CryptoHistory.styled';
import CryptoHistoryItems from './CryptoHistoryItems';


export const CryptoHistory = ({ items }) => {
  
  return <BaseTable>
    <THead>
      <tr>
        <Th>№</Th>
        <Th>PRICE</Th>
        <Th>AMOUNT</Th>
        <Th>DATE</Th>
      </tr>
    </THead>
    {items.map(({ id, price, amount, date }) => (
      <CryptoHistoryItems
        key={id}
        price={price}
        amount={amount}
        date={date}
      />
    ))}
  
  </BaseTable>
};
