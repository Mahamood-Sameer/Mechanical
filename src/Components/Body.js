import React from "react";
import "./Body.css";
import Db from "../Data/Data";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Tooltip } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';

function Body() {
  return (
    <div className="app_body">
      <h2>
        <ArrowDownwardIcon className="arrow" /> All the reference books of each
        subject are avaliable here <ArrowDownwardIcon className="arrow" />
      </h2>
      <div className="app_body_content">
        {Db?.map((Data) => (
          <Accordion className="card">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="typography">
                {Data?.Subject} ({Data?.SubjectCode})
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="typography">
                {Data?.profs ? (
                  <>
                    <strong>Professers : </strong>
                    <br />
                  </>
                ) : (
                  <></>
                )}
                {Data?.profs?.map((prof) => (
                  <p className="profsnames">
                    <ArrowForwardIcon className="arrowicons" /> {prof}
                  </p>
                ))}
                <br />
                <br />
                <p>Reference Books : </p>
                <br />
                {Data?.LinksForBooks?.map((Book) => (
                  <>
                    <Tooltip title="Download">
                      <a
                        href={Book.Link}
                        target="_blank"
                        rel="noreferrer"
                        className="booklink"
                      >
                        {Book.Name}
                      </a>
                    </Tooltip>
                    {/* <br />
                    <br /> */}
                  </>
                ))}
                <br />
                You can find the PPT's and PDF's <a href={Data?.pptandpdf} target="_blank" rel="noreferrer">here</a>
                <br />
                <br />

               <p style={{"display":"flex","alignItems":"center"}} > <YouTubeIcon /> And You can find the class recordings <a href="https://www.youtube.com/playlist?list=PLrlnmW33DpzZ2qqnZsG4wS7ji6R3NVX_D" style={{"marginLeft":"5px"}} > here </a> </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Body;
