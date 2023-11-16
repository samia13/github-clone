import { Check } from "react-feather";
import {
  Divider,
  VerticleIcon,
  VerticleLine,
  StatText,
  StatInfo,
  Button,
} from "./index";

const Collaboration = () => {
  return (
    <section id='collaboration' className='section'>
      <div className='flex text-white section-layout'>
        <Divider>
          <VerticleIcon color='bg-pink-color'>
            <svg
              aria-hidden='true'
              height='24'
              viewBox='0 0 24 24'
              version='1.1'
              width='24'
              data-view-component='true'
              className='octicon octicon-briefcase fill-gray-300'
            >
              <path d='M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z'></path>
            </svg>
          </VerticleIcon>
          <VerticleLine className='pink-transp-gradient'></VerticleLine>
        </Divider>
        <div className='font-semibold mb-20'>
          <h2 className='subtitle'>Collaboration</h2>
          <div className='content'>
            <h2 className='section-title text-pink-color'>
              Supercharge collaboration
            </h2>
            <p className='text-4xl  leading-snug mb-3'>
              GitHub helps your teams work more efficiently together.
            </p>
          </div>
        </div>
      </div>
      <img
        className='section-media'
        src='images/collab-bg.png'
        alt='Collaboration'
      />
      <div className='flex text-white section-layout'>
        <Divider type='row'>
          <VerticleLine className='pink-transp-gradient-rev'></VerticleLine>
          <img
            className='absolute max-h-[400px] left-1/2 -translate-x-[2px] bottom-0'
            src='images/pink-branch.svg'
            alt='branch'
          />
        </Divider>
        <div>
          <div className='my-20 px-10 mb-20'>
            <StatText
              className='w-1/2'
              title='GitHub Issues and GitHub Projects'
            >
              supply project management tools that adapt to your team alongside
              your code.
            </StatText>
            <Button label='Get started with GitHub Issues' />
          </div>
          <StatInfo
            color='pink'
            title='80%'
            description='reduction in onboarding time with GitHub2'
          />
        </div>
      </div>
      <div className='hover-cards'>
        <div className='card flex flex-col'>
          <div display='flex flex-1 flex-col justify-between'>
            <StatText title='GitHub Discussions'>
              creates space to ask questions and have open-ended conversations.
            </StatText>
            <Button label='Jump into GitHub Discussions' />
          </div>
          <div className='relative flex-1'>
            <img className='' src='images/discussion.png' alt='discussion' />
          </div>
        </div>
        <div className='card flex flex-col'>
          <div display='flex flex-1 flex-col justify-between'>
            <StatText title='Pull requests'>
              allow real-time communication and collaboration about code
              changes.
            </StatText>
            <Button label='Check out pull requests' />
          </div>
          <div className='relative flex-1'>
            <img
              className=''
              src='images/pull-request.png'
              alt='pull request'
            />
          </div>
        </div>
        <div className='card flex full-card'>
          <div className='flex flex-1 flex-col justify-between'>
            <StatText title='GitHub Sponsors'>
              lets you support your favorite open source maintainers and
              projects.
            </StatText>
            <Button label='Invest with GitHub Sponsors' />
          </div>
          <div className='relative flex-1'>
            <img className='' src='images/secret-scan.png' alt='secret scan' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
