import iconSun from "../Assets/iconSun.svg";
import IconMoon from "../Assets/IconMoon.svg";

export default function Header({ onSelect, turns }) {
  let typo1 = <h2>Todo</h2>;
  let HeaderIcon = <img src={iconSun} alt="icon-svg" />;
  if(turns) {
    HeaderIcon = <img src={IconMoon} alt="icon-moon" />;
  }

  return (
    <div className="header2">
      <div className="container1">
        {typo1}
        <button onClick={onSelect}>{HeaderIcon}</button>
      </div>
    </div>
  );
}
