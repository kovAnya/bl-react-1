import { Tr, Td } from './CryptoHistory.styled';
import { FormatDate } from '../utils/FormatDate';

const CryptoHistoryItems = ({ id, price, amount, date }) => {
    const formatedDate = FormatDate(date);
    return (
        <tbody>
            <Tr>
                <Td>{id}</Td>
                <Td>{price}</Td>
                <Td>{amount}</Td>
                <Td>{formatedDate}</Td>
            </Tr>
        </tbody>
        
    );
}

export default CryptoHistoryItems;