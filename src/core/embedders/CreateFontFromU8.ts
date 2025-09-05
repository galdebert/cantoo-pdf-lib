import { Font, Fontkit } from 'src/types/fontkit';

export function createFont(fontkit: Fontkit, fontData: Uint8Array): Font {
  const font = fontkit.create(Buffer.from(fontData));

  if ('type' in font && (font.type === 'TTC' || font.type === 'DFont')) {
    throw new Error(
      'Cannot embed a FontCollection. Please provide a single font instead.',
    );
  }

  return font as Font;
}
