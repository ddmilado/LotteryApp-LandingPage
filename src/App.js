
import { Download, Features, SectionWrapper, SectionWrapper2 } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper2 
        title="Coinante: Stake your Crypto, win the Pot!"
        description="Win up to ten times your money in just 5 minutes using cryptocurrency. It's like the lottery, but way better!!"
        showBtn
        mockupImg={assets.crypto}
        banner="banner"
      />

      <SectionWrapper 
        title="How to play"
        description=" Step Two: Buy Some BNB"
        description2=" Step One: Create a MetaMask Wallet       "
        description3=" Step Three: Connect your MetaMask Wallet  to the Binance Smart Chain"
        description4=" Step Four: Enter the Raffle             "
        mockupImg={assets.dice}
        reverse
      />
      <Features />
      

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}> {" "}
        <span className="bold"></span>
        </p>
      </div>

    </>
  );
}

export default App;
