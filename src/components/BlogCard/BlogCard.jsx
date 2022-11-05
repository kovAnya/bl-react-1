import { Card, CardHeader, CardPoster, CardBody, Tag, CardTitle, CardText, CardFooter, UserBox, Avatar, UserInfo, UserName, Date } from './BlogCard.styled';
import { FormatDate } from '../utils/FormatDate';

export const BlogCard = ({poster, tag, title, description, userName, avatar, postedAt}) => {
  const formatedDate = FormatDate(postedAt);
  return <div>BlogCard
    <Card>
  <CardHeader>
    <CardPoster
      src={poster}
      alt={userName}
    />
  </CardHeader>
  <CardBody>
    <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
    <CardText>
      {description}
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src={avatar} alt={userName} />
      <UserInfo>
        <UserName>{userName}</UserName>
            <Date>{formatedDate}</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>
  </div>;
};
