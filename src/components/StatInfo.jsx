import Button from "./Button";
const StatInfo = ({ color, title, description }) => {
  return (
    <div className='my-10 px-8 mb-20'>
      <span
        className={`rounded-full border border-${color}-color text-${color}-color font-md py-1 px-2 text-sm inline-block mb-4`}
      >
        Did you know?
      </span>
      <h2 className={`text-${color}-color text-6xl mb-3`}>{title}</h2>
      <p className='text-white font-semibold text-xl'>{description}</p>
      <Button label='Read the report' />
    </div>
  );
};

export default StatInfo;
