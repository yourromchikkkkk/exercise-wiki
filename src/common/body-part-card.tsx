import { Stack, ButtonBase, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import { useDispatch } from 'react-redux';
import { selectBodyPart } from '../redux/slice';

interface IBodyPartCard {
  title: string;
  selectedBodyPart: string;
}

const BodyPartCard: React.FC<IBodyPartCard> = ({ title, selectedBodyPart }) => {
  const dispatch = useDispatch();
  const onCardClick = () => {
    dispatch(selectBodyPart(title));
    window.scroll({ top: 1800, left: 100, behavior: 'smooth' });
  };

  return (
    <ButtonBase
      onClick={onCardClick}
      className="bodyPart-card"
      style={{ cursor: 'pointer' }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          borderTop: selectedBodyPart === title ? '4px solid #ff2625' : '',
          backgroundColor: selectedBodyPart === title ? '#f2e6e6' : '#fff',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          gap: '47px',
        }}
      >
        <img
          src={Icon}
          alt="dumbbell"
          style={{ width: '40px', height: '40px' }}
        />
        <Typography
          fontSize="24px"
          fontWeight="600"
          color="#3a1212"
          textTransform="capitalize"
        >
          {title}
        </Typography>
      </Stack>
    </ButtonBase>
  );
};

export default BodyPartCard;
