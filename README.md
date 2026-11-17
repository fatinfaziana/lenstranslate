# LensTranslate

Point your phone or tablet camera at any text and read it in your language. It's a website, so there's no app to install. It's free and works on any modern phone or tablet.

**Live: https://fatinfaziana.github.io/lenstranslate/**

Made for travellers and anyone who has trouble with a foreign language: menus, signs, labels, instructions.

## How it works
1. Open the link and allow the camera.
2. Leave the first box on **Auto-detect language** and pick the language you want to read.
3. Fill the frame with the text, hold steady and tap the button.
4. The translation is drawn over the photo. Text that is too small to fit gets a numbered marker, and everything is listed in full below the photo, with the original text underneath so you can show it to someone.

Tap the photo to flip between the translation and the original. You can also pick a photo from your gallery.

## Languages
- **Reads about 100 languages** and detects the script automatically: Latin, Cyrillic, Arabic, Chinese, Japanese, Korean, Devanagari, Thai, Greek, Hebrew, Bengali, Tamil and more. You can also choose the source language by hand.
- **Translates into any of them.**
- Language packs are downloaded the first time a script is used (a few MB) and cached. After that, text reading works offline; translation needs a connection.

## Privacy
The photo never leaves your phone. Only the recognised text is sent to the free MyMemory translation API.

## Limits
- Free MyMemory translation has a daily character limit for anonymous use per person.
- It translates a captured photo, not live video.
- Reading quality depends on the photo: good light, steady hands and text in focus matter. Very small print is listed below the photo instead of on it.
- Auto-detect can take a few seconds on the first photo in a new script, while its language pack downloads.

## Run locally
It's a static site. The camera needs https or localhost:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
