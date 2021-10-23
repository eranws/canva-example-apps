const { imageHelpers } = window.canva;
const canva = window.canva.init();
canva.onReady(async (opts) => {
  const image = await imageHelpers.fromElement(opts.element, "preview");
  const canvas = await imageHelpers.toCanvas(image);
  document.body.appendChild(canvas);
  canva.updateControlPanel([]);
});
canva.onSaveRequest(async () => {
  const canvas = document.querySelector("canvas");
  return await imageHelpers.fromCanvas("image/jpeg", canvas);
});