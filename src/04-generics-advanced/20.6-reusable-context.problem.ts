import { CSSProperties } from "react";

const makeUseStyled = <TTheme = {}>() => {
  const useStyled = (func: (theme: TTheme) => CSSProperties) => {
    return {} as CSSProperties;
  };

  return useStyled;
};

const useStyled = makeUseStyled<MyTheme>();

interface MyTheme {
  color: {
    primary: string;
  };
  fontSize: {
    small: string;
  };
}

const buttonStyle = useStyled((theme) => ({
  color: theme.color.primary,
  fontSize: theme.fontSize.small,
}));

const divStyle = useStyled((theme) => ({
  backgroundColor: theme.color.primary,
}));
