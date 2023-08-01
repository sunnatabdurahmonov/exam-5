import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SectionContext } from '../../../context/Contex';
import { useContext } from 'react';

export const AllAccordion = () => {
    const {state} = useContext(SectionContext)
    return (
        <div>
          <Accordion className='accordion-menu'>
            <AccordionSummary className='accordion-list'
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className='accordion-text'>Покозать еще</Typography>
            </AccordionSummary>
            <AccordionDetails className='accordion-detal'>
              <Typography className='card-list accordion-card'>
              {state.slice(0,4)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );
}

export default AllAccordion
