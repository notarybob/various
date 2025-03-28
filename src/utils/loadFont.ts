import settings from '../settings';

export default async (content: string = 'A') => {
  // let G2B = new FontFace('G2B', 'url(../RoGSanSrfStd-Bd_other.woff2)');
  // // let GSH = new FontFace('GSH', 'url(../GlowSansSC-Normal-Heavy.otf)');
  // await Promise.all([G2B.load() /*, GSH.load()*/]).then((fonts) =>
  //   fonts.map((font) => document.fonts.add(font))
  // );
  // let loadingSwitch = document.querySelector('#loading-switch') as HTMLInputElement;
  // loadingSwitch.checked = true;
  await document.fonts.load(
    `${settings.fontSize}px RoGSanSrfStd-Bd, GlowSansSC-Normal-Heavy_diff`,
    content
  );
  // loadingSwitch.checked = false;
};
