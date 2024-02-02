/* eslint-disable react/prop-types */

export const InputField = ({ label, placeholder, type, onChange }) => {
  return (
    <div className="flex flex-col items-start mb-5">
      <label className="font-semibold">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="bg-slate-800 w-80 rounded-sm "
      />
    </div>
  );
};
