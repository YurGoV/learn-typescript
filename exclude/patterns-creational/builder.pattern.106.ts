enum ImageFormat {
  Png = 'png',
  Jpg = 'jpeg',
}

interface IResolution {
  width: number;
  height: number;
}

interface IImageConversion extends IResolution {
  format: ImageFormat;
}

class ImageBuilder {
  private formats: ImageFormat[] = [];

  private resolutions: IResolution[] = [];

  addPng() {
    if (this.formats.includes(ImageFormat.Png)) {
      return this;
    }
    this.formats.push(ImageFormat.Png);
    return this;
  }

  addJpg() {
    if (this.formats.includes(ImageFormat.Jpg)) {
      return this;
    }
    this.formats.push(ImageFormat.Jpg);
    return this;
  }

  addResolution(width: number, height: number) {
    this.resolutions.push({ width, height });
    return this;
  }

  build(): IImageConversion[] {
    const res: IImageConversion[] = [];
    for (const r of this.resolutions) {
      for (const f of this.formats) {
        res.push({
          format: f,
          width: r.width,
          height: r.height,
        });
      }
    }
    return res;
  }
}

console.log(
  new ImageBuilder()
    .addJpg()
    .addPng()
    .addResolution(100, 100)
    .addResolution(300, 300)
    .build(),
);

// NOTE: output:
//
// [
//   { format: 'jpeg', width: 100, height: 100 },
//   { format: 'png', width: 100, height: 100 },
//   { format: 'jpeg', width: 300, height: 300 },
//   { format: 'png', width: 300, height: 300 }
// ]
