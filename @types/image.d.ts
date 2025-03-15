declare module "*.svg" {
  import React from "react";
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default Component;
}


declare module "*.png"; {
  const value: string;
  export default value;
}

declare module "*.jpg"; {
  const value: string;
  export default value;
}

declare module "*.jpeg"; {
  const value: string;
  export default value;
}
