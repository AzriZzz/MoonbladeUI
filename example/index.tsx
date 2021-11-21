import 'moonbladeui/dist/tailwind.css';
import { ToggleSwitch } from 'moonbladeui';
import React = require('react');

const App = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  return (
    <div>
      <ToggleSwitch
        enabled={isToggled}
        onChange={(v: boolean) => setIsToggled(v)}
      />
    </div>
  );
};