# In-page OCR files

Screenshots are read inside the dashboard with Tesseract.js 5.1.1, published
next to the page under `ocr/`:

- `tesseract.min.js`, `worker.min.js` — from `tesseract.js@5.1.1` (`dist/`)
- `tesseract-core-simd-lstm.wasm.js`, `tesseract-core-lstm.wasm.js` — from `tesseract.js-core@5.1.1`
- `eng-traineddata-gz-base64.txt` — `@tesseract.js-data/eng@1.0.0` `4.0.0_best_int/eng.traineddata.gz`, base64-encoded
  (`base64 -w0 eng.traineddata.gz`), because the artifact host does not serve `.gz` files
- `worker-wrap.js` (this folder) — answers the worker's request for
  `eng.traineddata.gz` from the base64 text file, then loads `worker.min.js`

The large library files are not committed; fetch them from npm with the
versions above.
