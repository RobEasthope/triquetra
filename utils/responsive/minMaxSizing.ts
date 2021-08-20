type PropTypes = {
  css: string;
  min: number;
  max: number;
  unit?: string;
  minWidth?: number;
  maxWidth?: number;
};

export function minMaxSizing(props: PropTypes) {
  const { css, min, max, unit = 'px', minWidth = 320, maxWidth = 1600 } = props;

  return `
    ${css}: ${min}${unit};
    @media (min-width: ${minWidth}px) {
      ${css}: calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${minWidth}${unit}) / (${maxWidth} - ${minWidth})));
    };
    
    @media (min-width: ${maxWidth}px) {
      ${css}: ${max}${unit};
    }
  `;
}
