import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({total, title, icon}) => {
  return  <StatisticBox>
    {icon}
    <StatisticCounter>{ total }</StatisticCounter>
    <StatisticText>{ title }</StatisticText>
  </StatisticBox>
;
};
