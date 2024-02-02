/* eslint-disable react/prop-types */

export const SubmitButton = ({ text, onClick }) => {
  if (!text || !onClick) {
    return <></>;
  }
  return (
    <div
      className="transition-all duration-300 bg-secondary hover:bg-hover_sec hover:cursor-pointer p-2 mb-5 rounded-lg hover:rounded-sm w-80 text-center font-semibold"
      onClick={onClick}
    >
      {text}
    </div>
  );
};
