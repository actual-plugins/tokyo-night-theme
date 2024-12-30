import { ThemeDefinition } from "plugins-shared";

export const tokyoNightTheme: ThemeDefinition = {
  // Page
  pageBackground: '#1a1b26', // Dark navy blue
  pageBackgroundModalActive: '#16161e', // Deeper navy for modal
  pageBackgroundTopLeft: '#1f2335', // Slightly lighter navy
  pageBackgroundBottomRight: '#16161e', // Dark navy
  pageBackgroundLineTop: '#7aa2f7', // Light blue
  pageBackgroundLineMid: '#565f89', // Grayish blue
  pageBackgroundLineBottom: '#9ece6a', // Soft green
  pageText: '#c0caf5', // Light gray-blue
  pageTextLight: '#a9b1d6', // Subtle light gray
  pageTextSubdued: '#565f89', // Muted gray-blue
  pageTextDark: '#f7768e', // Rose red
  pageTextPositive: '#9ece6a', // Green
  pageTextLink: '#7aa2f7', // Light blue
  pageTextLinkLight: '#bb9af7', // Purple

  // Card
  cardBackground: '#1f2335', // Surface color
  cardBorder: '#565f89',
  cardShadow: 'rgba(0, 0, 0, 0.5)',

  // Table
  tableBackground: '#1a1b26',
  tableRowBackgroundHover: '#1f2335',
  tableRowBackgroundHighlight: '#7aa2f7',
  tableRowBackgroundHighlightText: '#c0caf5',
  tableText: '#c0caf5',
  tableTextLight: '#a9b1d6',
  tableTextSubdued: '#565f89',
  tableTextSelected: '#bb9af7', // Purple
  tableTextHover: '#7dcfff', // Cyan
  tableTextInactive: '#414868',
  tableHeaderText: '#7aa2f7',
  tableHeaderBackground: '#1f2335',
  tableBorder: '#565f89',
  tableBorderSelected: '#7aa2f7',
  tableBorderHover: '#9ece6a',
  tableBorderSeparator: '#414868',
  tableRowHeaderBackground: '#1a1b26',
  tableRowHeaderText: '#c0caf5',

  // Sidebar
  sidebarBackground: '#1a1b26',
  sidebarItemBackgroundPending: '#f7768e',
  sidebarItemBackgroundPositive: '#9ece6a',
  sidebarItemBackgroundFailed: '#f7768e',
  sidebarItemAccentSelected: '#bb9af7',
  sidebarItemBackgroundHover: '#26233a',
  sidebarItemText: '#c0caf5',
  sidebarItemTextSelected: '#7aa2f7',

  // Menu
  menuBackground: '#1f2335',
  menuItemBackground: '#1a1b26',
  menuItemBackgroundHover: '#7dcfff',
  menuItemText: '#c0caf5',
  menuItemTextHover: '#9ece6a',
  menuItemTextSelected: '#bb9af7',
  menuItemTextHeader: '#7dcfff',
  menuBorder: '#414868',
  menuBorderHover: '#7aa2f7',
  menuKeybindingText: '#565f89',
  menuAutoCompleteBackground: '#1f2335',
  menuAutoCompleteBackgroundHover: '#26233a',
  menuAutoCompleteText: '#c0caf5',
  menuAutoCompleteTextHover: '#7dcfff',
  menuAutoCompleteTextHeader: '#f7768e',
  menuAutoCompleteItemTextHover: '#9ece6a',
  menuAutoCompleteItemText: '#c0caf5',

  // Modal
  modalBackground: '#1f2335',
  modalBorder: '#565f89',

  // Mobile
  mobileHeaderBackground: '#16161e',
  mobileHeaderText: '#7aa2f7',
  mobileHeaderTextSubdued: '#565f89',
  mobileHeaderTextHover: 'rgba(122, 162, 247, 0.2)',
  mobilePageBackground: '#1a1b26',
  mobileNavBackground: '#1f2335',
  mobileNavItem: '#565f89',
  mobileNavItemSelected: '#7aa2f7',
  mobileAccountShadow: 'rgba(0, 0, 0, 0.5)',
  mobileAccountText: '#bb9af7',
  mobileTransactionSelected: '#f7768e',

  // Buttons
  buttonMenuText: '#c0caf5',
  buttonMenuTextHover: '#7aa2f7',
  buttonMenuBackground: 'transparent',
  buttonMenuBackgroundHover: 'rgba(122, 162, 247, 0.2)',
  buttonMenuBorder: '#414868',
  buttonMenuSelectedText: '#1a1b26',
  buttonMenuSelectedTextHover: '#1a1b26',
  buttonMenuSelectedBackground: '#7aa2f7',
  buttonMenuSelectedBackgroundHover: '#7dcfff',
  buttonMenuSelectedBorder: '#7aa2f7',

  buttonPrimaryText: '#1a1b26',
  buttonPrimaryTextHover: '#1a1b26',
  buttonPrimaryBackground: '#7aa2f7',
  buttonPrimaryBackgroundHover: '#7dcfff',
  buttonPrimaryBorder: '#7aa2f7',
  buttonPrimaryShadow: 'rgba(0, 0, 0, 0.5)',
  buttonPrimaryDisabledText: '#565f89',
  buttonPrimaryDisabledBackground: '#16161e',
  buttonPrimaryDisabledBorder: '#414868',

  buttonNormalText: '#c0caf5',
  buttonNormalTextHover: '#7aa2f7',
  buttonNormalBackground: '#1f2335',
  buttonNormalBackgroundHover: '#26233a',
  buttonNormalBorder: '#565f89',
  buttonNormalShadow: 'rgba(0, 0, 0, 0.3)',
  buttonNormalSelectedText: '#1a1b26',
  buttonNormalSelectedBackground: '#bb9af7',
  buttonNormalDisabledText: '#565f89',
  buttonNormalDisabledBackground: '#16161e',
  buttonNormalDisabledBorder: '#414868',

  buttonBareText: '#c0caf5',
  buttonBareTextHover: '#7aa2f7',
  buttonBareBackground: 'transparent',
  buttonBareBackgroundHover: 'rgba(122, 162, 247, 0.2)',
  buttonBareBackgroundActive: 'rgba(122, 162, 247, 0.3)',
  buttonBareDisabledText: '#565f89',
  buttonBareDisabledBackground: 'transparent',

  // Calendar
  calendarText: '#c0caf5',
  calendarBackground: '#1a1b26',
  calendarItemText: '#c0caf5',
  calendarItemBackground: '#1f2335',
  calendarSelectedBackground: '#7aa2f7',

  // Notices
  noticeBackground: '#7aa2f7',
  noticeBackgroundLight: '#9ece6a',
  noticeBackgroundDark: '#414868',
  noticeText: '#1a1b26',
  noticeTextLight: '#c0caf5',
  noticeTextDark: '#f7768e',
  noticeTextMenu: '#7aa2f7',
  noticeTextMenuHover: '#9ece6a',
  noticeBorder: '#565f89',

  // Form
  formLabelText: '#7aa2f7',
  formLabelBackground: '#1f2335',
  formInputBackground: '#1a1b26',
  formInputBackgroundSelected: '#26233a',
  formInputBackgroundSelection: '#7aa2f7',
  formInputBorder: '#565f89',
  formInputTextReadOnlySelection: '#414868',
  formInputBorderSelected: '#7aa2f7',
  formInputText: '#c0caf5',
  formInputTextSelected: '#9ece6a',
  formInputTextPlaceholder: '#565f89',
  formInputTextPlaceholderSelected: '#7dcfff',
  formInputShadowSelected: 'rgba(122, 162, 247, 0.5)',

  // Miscellaneous
  tooltipText: '#c0caf5',
  tooltipBackground: '#1a1b26',
  tooltipBorder: '#7aa2f7',
};
