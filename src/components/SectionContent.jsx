import { Divider, VerticleIcon, VerticleLine } from "./index";
const SectionContent = ({
  title,
  subtitle,
  content,
  dividerColor,
  children,
}) => {
  return (
    <div className='flex text-white section-layout'>
      <Divider>
        <VerticleIcon color={`bg-${dividerColor}-color`}>
          {children}
        </VerticleIcon>
        <VerticleLine
          className={`${dividerColor}-transp-gradient`}
        ></VerticleLine>
      </Divider>
      <div className='font-semibold mb-20'>
        <h2 className='subtitle'>{subtitle}</h2>
        <div className='content'>
          <h2 className={`section-title text-${dividerColor}-color`}>
            {title}
          </h2>
          <p className='text-4xl  leading-snug mb-3'>{content}</p>
        </div>
      </div>
    </div>
  );
};
export default SectionContent;
