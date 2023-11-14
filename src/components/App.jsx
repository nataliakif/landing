import { HeroHeader } from './HeroHeader/HeroHeader';
import { About } from './About/About';
import { WhatElse } from './WhatElse/WhatElse';
import { FromNastya } from './FromNastya/FromNastya';
import { Benefits } from './Benefits/Benefits';
import { ForWhom } from './ForWhom/ForWhom';
import { Reviews } from './Reviews/Reviews';
import { ImageBlock } from './ImageBlock/ImageBlock';
import { Footer } from './Footer/Footer';

export const App = () => {
  return (
    <>
      <HeroHeader></HeroHeader>
      <About></About>
      <WhatElse></WhatElse>
      <FromNastya></FromNastya>
      <Benefits></Benefits>
      <ForWhom></ForWhom>
      <Reviews></Reviews>
      <ImageBlock></ImageBlock>
      <Footer></Footer>
    </>
  );
};
