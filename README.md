# LensTranslate

Translate anything with your phone camera. It's a website, so there's no app to install. It's free for everyone and works on any phone.

**Live: https://fatinfaziana.github.io/lenstranslate/**

## How it works
1. Open the link and allow the camera.
2. Pick the language of the text and the language to translate into.
3. Tap the shutter. The text is read on your device (Tesseract.js) and the translation is drawn over the photo.

You can also pick a photo from your gallery. 22 languages are supported, including Arabic, Chinese, Japanese, Korean, Hindi and Thai.

## Privacy
The photo never leaves your phone. Only the recognised text is sent to the free MyMemory translation API.

## Limits
- Free MyMemory translation has a daily character limit for anonymous use.
- It translates a captured photo, not live video.
- Non-Latin scripts need the correct source language picked ("Auto" covers Latin scripts only).

## Run locally
It's a single static file, `index.html`. The camera needs https or localhost:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
