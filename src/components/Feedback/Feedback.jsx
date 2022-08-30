import PropTypes from "prop-types";
import { Box } from "components/Box";
import { Btn } from "./Feedback.styled";


export const Feedback = ({ options, onLeaveFeedback }) => {
    return (
        <Box display="flex" gridGap={4}>
            {options.map(option => (
                <Btn key={option} onClick={onLeaveFeedback}>
                    {option}
                </Btn>
            ))}
        </Box>
    );
}


Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};