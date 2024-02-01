import { useWindowSize } from "../../utils/useWindowSize";

function Orb() {
  const { width, height } = useWindowSize();

  console.log(width, height);

  return (
    <div className="w-70vh h-70vh absolute rounded-full -ml-37vh -mt-37vh bg-gradient-to-b from-[#F56692] to-[#F2994A] filter blur-[400px] animate-orb-move"></div>
  );
}

export default Orb;
