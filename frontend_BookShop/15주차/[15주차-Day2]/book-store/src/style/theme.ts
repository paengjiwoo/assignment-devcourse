// 테마를 타입으로 지정해 확장성 보장
export type ThemeName = 'light' | 'dark';
type ColorKey = 'primary' | 'background' | 'secondary' | 'third';

interface Theme {
  name: ThemeName,
  // color: {
    // [key in ColorKey]: string;
  // }
  color: Record<ColorKey, string>;
}

export const light: Theme = {
  name: 'light',
  color: {
    primary: 'brown', 
    background: 'lightgray',
    secondary: 'blue',
    third: 'green'
  },
};

export const dark: Theme = {
  name: 'dark',
  color: {
    primary: 'coral',
    background: 'midnightblue',
    secondary: 'darkblue',
    third: 'darkgreen'
  }
}

export const getTheme = (themeName: ThemeName): Theme => {
  switch (themeName) {
    case 'light':
      return light;
    case 'dark':
      return dark;
  }
}