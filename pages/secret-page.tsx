import Seo from "components/SeoOgp";
import { NextPage } from "next";

const Secret: NextPage = () => {
  return (
    <div className="bg-pc-bg-img bg-no-repeat flex flex-1 justify-center items-center flex-col w-screen h-screen bg-center">
      <Seo
        pageTitle={"シークレットページ"}
        pageDescription={"あなたは見てはいけない秘密のページにきた"}
        pageImgWidth={1280}
        pageImgHeight={960}
        noindex={true}
      />
      <p className="text-xl m-10 text-white">秘密のページへようこそ</p>
      <div className="bg-red-800 text-left shadow-2xl p-4 w-80 rounded-xl m-6">
        <div className="mt-4">
          <p>
            ここは、縺薙％縺秘密のページです。踏み入れては、縺吶?りｸ上∩蜈･繧後※縺ｯ縲√＞縺いけないページに、縺吶?りｸ上∩蜈貴方はきてしまいまし縲弱ワ繝ｪ繝ｼ繝ｻ繝昴ャ繧ｿ繝ｼ縺ｨ蜻ｪ縺??蟄舌?擾ｼ医ワ繝ｪ繝ｼ繝ｻ繝昴ャ繧ｿ繝ｼ縺ｨ縺ｮ繧阪＞縺ｮ縺薙?∝次鬘?
            Child?峨?縲゛繝ｻK繝ｻ繝ｭ繝ｼ繝ｪ繝ｳ繧ｰ縲√ず繝ｧ繝ﾁﾝﾁﾝﾓﾁﾓﾁ繝ｳ繝ｻ繝?ぅ繝輔ぃ繝九?縲√ず繝｣繝?け繝ｻ繧ｽ繝ｼ繝ｳ縺ｫ繧医ｋ蜴滉ハリーポッターと平岡の眼鏡を潰してみたｽ懊ｒ繧ゅ→縺ｫ繧ｽ繝ｼ繝ｳ縺瑚?譛ｬ繧呈嶌縺?◆縲?016蟷ｴ縺ｮ繧､繧ｮ繝ｪ繧ｹ縺ｮ莠碁Κ菴懷括縺ｧ縺ゅｋ縲ゅ?繝ｬ繝薙Η繝ｼ縺ｯ縲?016蟷ｴ6譛?譌･
          </p>
        </div>
      </div>
    </div>
  );
};

export default Secret;
