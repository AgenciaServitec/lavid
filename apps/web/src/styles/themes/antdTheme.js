import { theme as baseTheme } from "./index";

export const brandPalette = {
  grape: "#811F84",
  grapeHover: "#9A289E",
  grapeActive: "#661769",
  leafGreen: "#4EB857",
};

export const antdTheme = {
  token: {
    colorPrimary: baseTheme.colors.sextiary,
    colorInfo: baseTheme.colors.info,
    colorSuccess: baseTheme.colors.success,
    colorWarning: baseTheme.colors.warning,
    colorError: baseTheme.colors.error,

    colorTextBase: baseTheme.colors.font1,
    colorTextSecondary: baseTheme.colors.quaternary,
    colorTextTertiary: baseTheme.colors.font3,
    colorBgBase: baseTheme.colors.secondary,
    colorBgContainer: baseTheme.colors.tertiary,
    colorBorder: baseTheme.colors.light,

    borderRadius: 10,
    borderRadiusLG: 14,
    borderRadiusSM: 6,
    fontSize: 14,
    fontWeightStrong: Number(baseTheme.font_weight.large),
  },
  components: {
    Button: {
      borderRadius: 999,
      fontWeight: Number(baseTheme.font_weight.medium),
      controlHeight: 40,
      controlHeightLG: 46,
      primaryShadow: "0 4px 14px rgba(191, 31, 106, 0.25)",
    },
    Input: {
      borderRadius: 999,
      controlHeight: 42,
      activeBorderColor: baseTheme.colors.primary,
      hoverBorderColor: baseTheme.colors.primary,
    },
    Select: {
      borderRadius: 999,
      controlHeight: 42,
    },
    Drawer: {
      colorBgElevated: baseTheme.colors.secondary,
      paddingLG: 24,
    },
    Modal: {
      borderRadiusLG: 16,
      titleFontSize: 18,
      titleColor: baseTheme.colors.primary,
    },
    Card: {
      borderRadiusLG: 14,
      colorBorderSecondary: baseTheme.colors.light,
    },
    Typography: {
      colorTextHeading: baseTheme.colors.primary,
      colorText: baseTheme.colors.quaternary,
    },
  },
};
