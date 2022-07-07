import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {

    const [expanded, setExpanded] = useState(false)
  return (
    <div className="Card">
        <AnimateSharedLayout>
          {
            expanded? (
              <ExpandedCard/>
            ):
            <CompactCard param = {props}/>
          }
        </AnimateSharedLayout>
    </div>
  );
};


//CompactCard
function CompactCard({param}) {
  const png = param.png;
  return (
    <div className="CompactCard">
      <div className="radialBar">
        <CircularProgressbar
        value={param.barValue}
        text={param.barValue}
        />
      </div>
      <div className="detail">
        <Png/>
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  )
}

export default Card;