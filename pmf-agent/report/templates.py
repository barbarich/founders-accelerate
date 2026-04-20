"""Color palette and style constants for the PDF report."""

from reportlab.lib.colors import HexColor

# Brand colors
PRIMARY = HexColor("#1A237E")
SECONDARY = HexColor("#4A90D9")
ACCENT = HexColor("#00C853")
WARNING = HexColor("#FFB800")
DANGER = HexColor("#FF4444")
TEXT_DARK = HexColor("#212121")
TEXT_LIGHT = HexColor("#757575")
BG_LIGHT = HexColor("#F5F5F5")
BG_WHITE = HexColor("#FFFFFF")
BORDER = HexColor("#E0E0E0")

VERDICT_COLORS = {
    "GO": ACCENT,
    "VALIDATE": WARNING,
    "PIVOT": DANGER,
}

VERDICT_BG = {
    "GO": HexColor("#E8F5E9"),
    "VALIDATE": HexColor("#FFF8E1"),
    "PIVOT": HexColor("#FFEBEE"),
}

# Font sizes
TITLE_SIZE = 24
SUBTITLE_SIZE = 16
HEADING_SIZE = 14
BODY_SIZE = 10
SMALL_SIZE = 8

# Page layout
PAGE_MARGIN = 50
CONTENT_WIDTH = 495  # letter width - 2*margin approx

# McKinsey-inspired palette
MCKINSEY_COLORS = [
    '#003f5c', '#2f4b7c', '#665191', '#a05195',
    '#d45087', '#f95d6a', '#ff7c43', '#ffa600',
]
MCKINSEY_BG = '#fafafa'
MCKINSEY_GRID = '#e5e7eb'
MCKINSEY_TEXT = '#374151'
