import { useEffect, useState } from "react";
import SwitchComponent from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";

const SwitchTheme: React.FC = () => {
  const [isChecked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (isChecked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isChecked]);

  return (
    <SwitchComponent
      checkedIcon={<FaMoon className="mt-auto mb-auto ml-1" color="	#FFE4B5" />}
      uncheckedIcon={<FaSun className="ml-2" color="#FFD700" />}
      onColor="#26466D"
      offColor="#63B8FF"
      onChange={() => setChecked(!isChecked)}
      checked={isChecked}
    ></SwitchComponent>
  );
};

export default SwitchTheme;
