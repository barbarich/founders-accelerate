# FoundersLens API image.
#
# Why a Dockerfile instead of Nixpacks: WeasyPrint (PDF export) dlopen()s the
# GTK/Pango/Cairo/glib native stack via ctypes. Under Nixpacks those apt
# packages were installed but not reachable on the loader path, so WeasyPrint
# failed with `cannot load library 'libgobject-2.0-0'`. A plain Debian slim
# image puts them on the standard /usr/lib/x86_64-linux-gnu loader path, so the
# import just works.
FROM python:3.11-slim-bookworm

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=1

# WeasyPrint >= 60 runtime native deps. `libglib2.0-0` provides libgobject-2.0-0
# (the first lib WeasyPrint loads); `libharfbuzz-subset0` is a frequent missing
# culprit on bookworm. Fonts: the report is Russian, so a Cyrillic-capable font
# is mandatory (dejavu + noto cover it).
RUN apt-get update && apt-get install -y --no-install-recommends \
        libglib2.0-0 \
        libpango-1.0-0 \
        libpangocairo-1.0-0 \
        libpangoft2-1.0-0 \
        libharfbuzz0b \
        libharfbuzz-subset0 \
        libfribidi0 \
        libcairo2 \
        libcairo-gobject2 \
        libgdk-pixbuf-2.0-0 \
        libffi8 \
        shared-mime-info \
        fontconfig \
        fonts-dejavu-core \
        fonts-liberation \
        fonts-noto-core \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Python deps first for better layer caching.
COPY requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

# Railway injects $PORT. Shell form so it expands. railway.toml's startCommand
# (if present) takes precedence over this; this keeps the image runnable on its
# own (and if startCommand is ever removed).
EXPOSE 8000
CMD ["sh", "-c", "uvicorn server:app --host 0.0.0.0 --port ${PORT:-8000}"]
