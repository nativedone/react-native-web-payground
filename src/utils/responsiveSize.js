import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


// TODO: See the default values (device) that make sense for pixel perfect
// iPhone 6/7/8
const PIXEL_PERFECT_DEVICE = {
    width: 375,
    height: 667,
};
export const horizontalScale = size => (width / PIXEL_PERFECT_DEVICE.width) * size;
export const verticalScale = size => (height / PIXEL_PERFECT_DEVICE.height) * size;
export const normalizeFont = (size) => {
  return Math.min(horizontalScale(size), verticalScale(size));
};

/* Scale based on "pixel perfect device"'s width and height */
const normalizedScaledSizes = {
  "12": normalizeFont(12),
  "14": normalizeFont(14),
  "16": normalizeFont(16),
  "18": normalizeFont(18),
  "20": normalizeFont(20),
  "22": normalizeFont(22),
  "24": normalizeFont(24),
  "25": normalizeFont(25),
  "27": normalizeFont(27),
  "28": normalizeFont(28),
  "32": normalizeFont(32),
  "40": normalizeFont(40),
  "48": normalizeFont(48),
};
export const size = {
  "0.1": 0.1, // Avoid small values be rounded to zero
  "0.2": 0.2,
  "0.4": 0.4,
  "0.38": 0.38,
  "0.5": 0.5,
  "0.88": 0.88,
  "1": 1,
  ...normalizedScaledSizes,
};
