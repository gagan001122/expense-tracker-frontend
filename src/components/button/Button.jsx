import PropTypes from "prop-types";

function Button({ name, icon, onClick }) {
  return (
    <button
      className="text-white flex items-center justify-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default Button;
