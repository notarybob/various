import halo from '../assets/image/halo.png';
import cross from '../assets/image/cross.png';

let loadImg = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};
export default async () => {
  await Promise.all([
    loadImg(halo).then((img) => (window.halo = img)),
    loadImg(cross).then((img) => (window.cross = img)),
  ]);
};
