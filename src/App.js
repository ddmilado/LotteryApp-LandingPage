
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Coinante: Stake your Crypto, win the Pot!"
        description="Win up to ten times your money in just 5 minutes using cryptocurrency. It's like the lottery, but way better!!"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}> {" "}
        <span className="bold"></span>
        </p>
      </div>
    </>
  );
}

export default App;
