import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { List, Item } from './Statistics.styled';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Box p={4}>
            <List>
                <Item>Good: {good}</Item>
                <Item>Neutral: {neutral}</Item>
                <Item>Bad: {bad}</Item>
                <Item>Total: {total}</Item>
                <Item>Positive feedbacks: {positivePercentage}%</Item>
            </List>
        </Box>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};