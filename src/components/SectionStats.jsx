import React from "react";
import { StatText, Button, Divider, VerticleLine, VerticleIcon } from "./index";

const SectionStats = ({
  dividerAlt,
  dividerColor,
  dividerSrc,
  statTitle,
  statText,
  title,
  description,
  buttonLabel,
}) => {
  return (
    <div className='flex text-white section-layout'>
      <Divider type='row'>
        <VerticleLine
          className={`${dividerColor}-transp-gradient-rev`}
        ></VerticleLine>
        <img
          className='absolute max-h-[400px] left-1/2 -translate-x-[2px] bottom-0'
          src={dividerSrc}
          alt={dividerAlt}
        />
      </Divider>
      <div>
        <div className='my-20 px-10 mb-20'>
          <StatText className='w-1/2' title={statTitle}>
            {statText}
          </StatText>
          <Button label='Explore GitHub Copilot' />
        </div>
        <div className='my-10 px-8 mb-20'>
          <span
            className={`rounded-full border border-${dividerColor}-color text-${dividerColor}-color font-md py-1 px-2 text-sm inline-block mb-4`}
          >
            Did you know?
          </span>
          <h2 className={`text-${dividerColor}-color text-6xl mb-3`}>
            {title}
          </h2>
          <p className='text-white font-semibold text-xl'>{description}</p>
          <Button label='Read the report' />
        </div>
      </div>
    </div>
  );
};

export default SectionStats;
