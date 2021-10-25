const { imageHelpers } = window.canva;
const canva = window.canva.init();
canva.onReady(async (opts) => {
  const image = await imageHelpers.fromElement(opts.element, "preview");
  const canvas = await imageHelpers.toCanvas(image);
  document.body.appendChild(canvas);
  const context = canvas.getContext("2d");
  context.filter = "invert(100%)";
  context.drawImage(canvas, 0, 0, canvas.width, canvas.height);
  canva.updateControlPanel([
    canva.create("button", { id: "invert", label: "Invert" }),
  ]);
});
canva.onImageUpdate(async (opts) => {
  const img = await imageHelpers.toImageElement(opts.image);
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
});
canva.onSaveRequest(async () => {
  const canvas = document.querySelector("canvas");
  return await imageHelpers.fromCanvas("image/jpeg", canvas);
});

canva.onControlsEvent((event) => {
  console.log(event);
  canva.updateControlPanel([
    canva.create("button", { id: "invert", label: "Invert" }),
    canva.create("button", { id: "invert", label: "Invert" }),
  ]);

  switch (event.message.controlId) {
  }
});
