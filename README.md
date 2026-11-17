# LensTranslate

Translate anything with your phone camera. It's a website, so there's no app to install. It's free for everyone and works on any phone.

**Live: https://fatinfaziana.github.io/lenstranslate/**

## How it works
1. Open the link and allow the camera.
2. Leave the first box on **Auto-detect language** (it works out the script and language itself) and pick the language to translate into. You can also choose the source language manually.
3. Tap the shutter. The text is read on your device (Tesseract.js) and the translation is drawn over the photo.

You can also pick a photo from your gallery. Auto-detect covers Latin, Cyrillic, Arabic, Chinese, Japanese, Korean, Devanagari, Thai, Greek, Hebrew and many more scripts. Translation targets 22 languages.

## Privacy
The photo never leaves your phone. Only the recognised text is sent to the free MyMemory translation API.

## Limits
- Free MyMemory translation has a daily character limit for anonymous use.
- It translates a captured photo, not live video.
- Auto-detect downloads a language pack the first time a script is seen (a few MB, then cached) and can take longer on very short text. Pick the language manually if it guesses wrong.

## Run locally
It's a single static file, `index.html`. The camera needs https or localhost:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
