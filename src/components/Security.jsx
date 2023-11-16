import { Check } from "react-feather";
import {
  Divider,
  VerticleIcon,
  VerticleLine,
  StatText,
  StatInfo,
  Button,
} from "./index";

const Security = () => {
  return (
    <section id='security' className='section'>
      <div className='flex text-white section-layout'>
        <Divider>
          <VerticleIcon color='bg-blue-color'>
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
          <VerticleLine className='blue-transp-gradient'></VerticleLine>
        </Divider>
        <div className='font-semibold mb-20'>
          <h2 className='subtitle'>Application security</h2>
          <div className='content'>
            <h2 className='section-title text-blue-color'>
              Empower developers With
            </h2>
            <p className='text-4xl  leading-snug mb-3'>
              GitHub, you can secure code in minutes.
            </p>
          </div>
        </div>
      </div>
      <div className='tables relative p-10 border border-white'>
        <p className='absolute text-gray-600 top-14 left-14 mb-7'>
          cmake.yml <br /> <span className='text-sm'>on: push</span>
        </p>
        <div className='tables-container my-20 mx-10 p-9'>
          <div className='table p-5'>
            <ul>
              <li className='flex justify-between'>
                <h2 className='text-white flex items-center gap-2'>
                  <Check className='bg-green-color text-white p-1 rounded-full' />{" "}
                  Build
                </h2>
                <span className='text-gray-400'>1m 21s</span>
              </li>
            </ul>
          </div>
          <div className='flex items-center relative top-[28px]'>
            <span className='w-2 h-2 inline-block border bg-gray-500 border-gray-500 rounded-full'></span>
            <span className='w-8 h-[2px] bg-gray-400 rounded-md'></span>
            <span className='w-2 h-2 inline-block border bg-gray-500 border-gray-500 rounded-full'></span>
          </div>
          <div className='table steps p-5 relative'>
            <div className='label absolute left-0 -top-8 px-5 py-1 text-white font-medium '>
              steps
            </div>
            <ul>
              <li className='flex justify-between mb-6'>
                <h2 className='text-white flex items-center gap-2'>
                  <Check className='bg-green-color text-white p-1 rounded-full' />{" "}
                  Initialize CodeQL
                </h2>
                <span className='text-gray-400'>1m 42s</span>
              </li>
              <li className='flex justify-between mb-6'>
                <h2 className='text-white flex items-center gap-2'>
                  <Check className='bg-green-color text-white p-1 rounded-full' />{" "}
                  Autobuild
                </h2>
                <span className='text-gray-400'>1m 24s</span>
              </li>
              <li className='flex justify-between'>
                <h2 className='text-white flex items-center gap-2'>
                  <Check className='bg-green-color text-white p-1 rounded-full' />{" "}
                  Perform CodeQL Analyses
                </h2>
                <span className='text-gray-400'>1m 36s</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex text-white section-layout'>
        <Divider type='row'>
          <VerticleLine className='blue-transp-gradient-rev'></VerticleLine>
          <img
            className='absolute max-h-[400px] left-1/2 -translate-x-[2px] bottom-0'
            src='images/blue-branch.svg'
            alt='branch'
          />
        </Divider>
        <div>
          <div className='my-20 px-10 mb-20'>
            <StatText className='w-1/2' title='GitHub Advanced Security'>
              enables you to find and fix vulnerabilities with ease and ship
              secure code quickly.
            </StatText>
            <Button label='Dive into GitHub Advanced Security' />
          </div>
          <StatInfo
            color='blue'
            title='7x faster'
            description='vulnerability fixes with GitHub1'
          />
        </div>
      </div>
      <div className='hover-cards'>
        <div className='card flex full-card'>
          <div className='flex flex-1 flex-col justify-between'>
            <StatText title=' Code scanning'>
              is our code analysis tool that helps you remediate issues in your
              code.
            </StatText>
            <Button label='Download the latest SAST ebook' />
          </div>
          <div className='relative flex-1'>
            <img className='' src='images/code-scan.png' alt='code scanning' />
          </div>
        </div>
        <div className='card flex flex-col'>
          <div display='flex flex-1 flex-col justify-between'>
            <StatText title='Dependabot'>
              makes it easy to find and fix vulnerable dependencies in your
              supply chain
            </StatText>
            <Button label='Explore Dependabot' />
          </div>
          <div className='relative flex-1'>
            <img className='' src='images/bot.png' alt='scanning bot' />
          </div>
        </div>
        <div className='card flex flex-col'>
          <div display='flex flex-1 flex-col justify-between'>
            <StatText title='Secret scanning'>
              automatically looks for partner patterns and prevents fraudulent
              use of accidentally committed secrets.
            </StatText>
            <Button label='Read about secret scanning' />
          </div>
          <div className='relative flex-1'>
            <img className='' src='images/secret-scan.png' alt='secret scan' />
          </div>
        </div>
      </div>
      <div className='flex text-white section-layout'>
        <Divider>
          <VerticleLine className='transp-pink-gradient'></VerticleLine>
        </Divider>
        <div></div>
      </div>
    </section>
  );
};

export default Security;
