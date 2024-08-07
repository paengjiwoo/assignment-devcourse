// 테마를 타입으로 지정해 확장성 보장
export type ThemeName = 'light' | 'dark';
export type ColorKey = 'primary' | 'background' | 'secondary' | 'third' | 'border' | 'text';
export type HeadingSize = 'large' | 'medium' | 'small';
export type buttonSize = 'large' | 'medium' | 'small';
export type buttonSchema = 'primary' | 'normal' | 'like';
export type layoutWidth = 'large' | 'medium' | 'small';

interface Theme {
  name: ThemeName,
  // color: {
    // [key in ColorKey]: string;
  // }
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
    }
  },
  button: {
    [key in buttonSize]: {
      fontSize: string;
      padding: string;
    }
  },
  buttonSchema: {
    [key in buttonSchema]: {
      color: string;
      backgroundColor: string;
    }
  },
  borderRadius: {
    default: string;
  },
  layout: {
    width: {
      [key in layoutWidth]: string;   
    }
  }
}

export const light: Theme = {
  name: 'light',
  color: {
    primary: 'midnightblue', 
    background: 'lightgray',
    secondary: 'blue',
    third: 'green',
    border: 'gray',
    text: 'black'
  },
  heading: {
    large: {
      fontSize: '2rem'
    },
    medium: {
      fontSize: '1.5rem'
    },
    small: {
      fontSize: '1rem'
    }
  },
  button: {
    large: {
      fontSize: '1.5rem',
      padding: '1rem 2rem'
    },
    medium: {
      fontSize: '1rem',
      padding: '0.5rem 1rem'
    },
    small: {
      fontSize: '0.7rem',
      padding: '0.25rem 0.5rem'
    }
  },
  buttonSchema: {
    primary: {
      color: 'white',
      backgroundColor: 'midnigihtblue'
    },
    normal: {
      color: 'black',
      backgroundColor: 'lightgray'
    },
    like: {
      color: "white",
      backgroundColor: "coral"
    }
  },
  borderRadius: {
    default: '4px',
  },
  layout: {
    width: {
      large: '1020px',
      medium: '760px',
      small: '320px'
    }
  }
};

export const dark: Theme = {
  ...light,
  name: 'dark',
  color: {
    primary: 'coral',
    background: 'midnightblue',
    secondary: 'darkblue',
    third: 'darkgreen',
    border: 'gray',
    text: 'black'
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