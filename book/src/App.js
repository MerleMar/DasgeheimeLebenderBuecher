import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import img from './html/1.jpg';
//import turnToPage from 'react-pageflip';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1>Page Header1</h1>
      <p>{props.children}</p>
      <p>Page number: {props.number}</p>
      <img src={img} alt="Helsinki"/>
    </div>
  );
});

const Page1 = React.forwardRef((props, ref) => {

  function negativeResp(name) {
    alert(`Ich bin nicht nach ${name} gekommen.`);
  }

  function positiveResp(page) {
    alert(`Richtig. Du darfst umblättern ;-)`);
  }

  return (
    <div className="demoPage" ref={ref}>
      <h1>De urinis et pulsibus</h1>
      <p>Ich wurde im Mittelalter gedruckt, und so sah es damals in Venedig aus:</p>
      <img src={img} alt="Helsinki"/>
      <p>Aegidius Corboliensis hat in mir all sein Wissen gesammelt rund um Urin und Puls</p>
      <p>Und dann hat meine Reise begonnen! Was glaubst du, war mein nächster Aufenthaltsort?</p>
      <div>
        <button onClick={() => positiveResp('6')}>Groß Britannien</button>
        <button onClick={() => negativeResp('Rom')}>Rom</button>
        <button onClick={() => negativeResp('Mailand')}>Mailand</button>
      </div>
    </div>
  );
});

const Page2 = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1>anderer Header</h1>
      <img src={img} alt="Helsinki"/>
      <p>There's nothing like a walk in the park.</p>
    </div>
  );
});

function App(props) {
  return (
    <HTMLFlipBook width={400} height={500}>
      <Page1 number="1">Page text</Page1>
      <Page2 number="2">Page text</Page2>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
      <Page number="5">Page text</Page>
      <Page number="6">Page text</Page>
    </HTMLFlipBook>
  );
}

export default App;
