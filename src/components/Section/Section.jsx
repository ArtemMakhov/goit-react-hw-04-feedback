import PropTypes from "prop-types";
import { Box } from "components/Box";
import { SectionHead } from "./Section.styled";

export const Section = ({ title, children }) => (
    <Box
        as="section"
        p={4}
        display="flex"
        flexDirection="column"
        alingItems="center"
        justifyContent="center"
    >
        <SectionHead>{title}</SectionHead>
        {children}
    </Box>
);

Section.protoType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object,
};

