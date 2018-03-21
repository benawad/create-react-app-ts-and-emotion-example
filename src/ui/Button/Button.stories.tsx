import * as React from "react";

// tslint:disable-next-line:no-implicit-dependencies
import { storiesOf } from "@storybook/react";
// tslint:disable-next-line:no-implicit-dependencies
import { action } from "@storybook/addon-actions";
// tslint:disable-next-line:no-implicit-dependencies
import { linkTo } from "@storybook/addon-links";
// tslint:disable-next-line
import { Welcome } from "@storybook/react/demo";

import Button from ".";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));
