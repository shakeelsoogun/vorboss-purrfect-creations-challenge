import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    backgroundColor: string;
    boxColor: string;
    primaryColors: {
      blue: string;
      purple: string;
      orange: string;
    };
  }
}
