import { useState } from "react";
import SwitchComponent from "react-switch";
import { FaSun, FaMoon } from "react-icons/fa";

const SwitchTheme: React.FC = () => {
  const [isChecked, setChecked] = useState<boolean>(true);
  return (
    <SwitchComponent
      checkedIcon={<FaMoon className="ml-1" color="	#FFE4B5" />}
      uncheckedIcon={<FaSun className="ml-2" color="#FFD700" />}
      onColor="#26466D"
      offColor="#63B8FF"
      onChange={() => setChecked(!isChecked)}
      checked={isChecked}
    ></SwitchComponent>
  );
};

export default SwitchTheme;
