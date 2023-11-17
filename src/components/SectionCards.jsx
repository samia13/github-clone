import React from "react";
import { StatText, Button } from "./index";

const SectionCards = () => {
  return (
    <div className='hover-cards'>
      <div className='card flex full-card'>
        <div className='flex flex-1 flex-col justify-between'>
          <StatText title='GitHub Actions'>
            automates your build, test, and deployment workflow with simple and
            secure CI/CD.
          </StatText>
          <Button label='Discover GitHub Actions' />
        </div>
        <div className='relative flex-1'>
          <img
            className=''
            src='images/github-action.png'
            alt='github action'
          />
        </div>
      </div>
      <div className='card flex flex-col'>
        <div display='flex flex-1 flex-col justify-between'>
          <StatText title='GitHub Actions'>
            automates your build, test, and deployment workflow with simple and
            secure CI/CD.
          </StatText>
          <Button label='Discover GitHub Actions' />
        </div>
        <div className='relative flex-1'>
          <img
            className=''
            src='images/github-codebase.png'
            alt='github action'
          />
        </div>
      </div>
      <div className='card flex flex-col'>
        <div display='flex flex-1 flex-col justify-between'>
          <StatText title='GitHub Actions'>
            automates your build, test, and deployment workflow with simple and
            secure CI/CD.
          </StatText>
          <Button label='Discover GitHub Actions' />
        </div>
        <div className='relative flex-1'>
          <img
            className=''
            src='images/github-mobile.png'
            alt='github action'
          />
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
