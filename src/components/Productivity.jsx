import {
  Divider,
  VerticleIcon,
  VerticleLine,
  StatText,
  StatInfo,
  Button,
} from "./index";

const Productivity = () => {
  return (
    <section id='productivity' className='section'>
      <div className='flex text-white section-layout'>
        <Divider>
          <VerticleIcon color='bg-green-color'>
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
          <VerticleLine className='green-transp-gradient'></VerticleLine>
        </Divider>
        <div className='font-semibold mb-20'>
          <h2 className='subtitle'>Productivity</h2>
          <div className='content'>
            <h2 className='section-title text-green-color'>
              Accelerate innovation
            </h2>
            <p className='text-4xl  leading-snug mb-3'>
              Our AI-powered platform increases the pace of software
              development.
            </p>
          </div>
        </div>
      </div>
      <img
        className='section-media'
        src='images/collab1.png'
        alt='Copilot illustration'
      />
      <div className='flex text-white section-layout'>
        <Divider type='row'>
          <VerticleLine className='green-transp-gradient-rev'></VerticleLine>
          <img
            className='absolute max-h-[400px] left-1/2 -translate-x-[2px] bottom-0'
            src='images/green-branch.svg'
            alt='branch'
          />
        </Divider>
        <div>
          <div className='my-20 px-10 mb-20'>
            <StatText className='w-1/2' title='GitHub Copilot'>
              empowers developers to complete tasks 55% faster with
              contextualized AI coding assistance across workflows.
            </StatText>
            <Button label='Explore GitHub Copilot' />
          </div>
          <StatInfo
            color='green'
            title='22% increase'
            description='in developer productivity after three years with GitHub'
          />
        </div>
      </div>
      <div className='hover-cards'>
        <div className='card flex full-card'>
          <div className='flex flex-1 flex-col justify-between'>
            <StatText title='GitHub Actions'>
              automates your build, test, and deployment workflow with simple
              and secure CI/CD.
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
              automates your build, test, and deployment workflow with simple
              and secure CI/CD.
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
              automates your build, test, and deployment workflow with simple
              and secure CI/CD.
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
      <div className='flex text-white section-layout'>
        <Divider>
          <VerticleLine className='transp-blue-gradient'></VerticleLine>
        </Divider>
        <div></div>
      </div>
    </section>
  );
};

export default Productivity;
