import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComp = () => {
  return (
    <div className="flex justify-center items-center">
        <div className='p-12 mb-24 accordion-bg' >
            <Accordion defaultExpanded className='bg-none'>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>Question 1</h5>
                </AccordionSummary>
                <AccordionDetails>   
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
                </AccordionDetails>
            </Accordion>
            <Accordion  className='bg-none'>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>Question 2</h5>
                </AccordionSummary>
                <AccordionDetails>   
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
                </AccordionDetails>
            </Accordion>
            <Accordion  className='bg-none'>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>Question 3</h5>
                </AccordionSummary>
                <AccordionDetails>   
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
                </AccordionDetails>
            </Accordion>
            <Accordion  className='bg-none'>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>Question 4</h5>
                </AccordionSummary>
                <AccordionDetails>   
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
                </AccordionDetails>
            </Accordion>
            <Accordion  className='bg-none'>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>Question 5</h5>
                </AccordionSummary>
                <AccordionDetails>   
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </p>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
  )
}

export default AccordionComp