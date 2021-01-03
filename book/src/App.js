import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import img from './html/1.jpg';
//import turnToPage from 'react-pageflip';

const Header = React.forwardRef((props, ref) => {
  return (
    <div className="jh15" ref={ref}>
      <h1>De urinis et pulsibus</h1>
      <img src={img} alt="Helsinki"/>
    </div>
  );
});

const Page1 = React.forwardRef((props, ref) => {
  return (
    <div className="jh15" ref={ref}>
      <h1>De urinis et pulsibus</h1>
      <p>Ich wurde im Mittelalter gedruckt, und so sah es damals in Venedig aus:</p>
      <img src={img} alt="Helsinki"/>
      <p>Aegidius Corboliensis hat in mir all sein Wissen gesammelt rund um Urin und Puls</p>
      <p>Und dann hat meine Reise begonnen! Was glaubst du, war mein nächster Aufenthaltsort?</p>
      <div onClick={() => changeStyleResponse("jh15")}>
        <button onClick={() => positiveResp()}>Groß Britannien</button>
        <button onClick={() => negativeResp('Rom')}>Rom</button>
        <button onClick={() => negativeResp('Mailand')}>Mailand</button>
      </div>
    </div>
  );
});

const Page2 = React.forwardRef((props, ref) => {
  return (
    <div className="jh16" ref={ref}>
      <h1>Groß Britannien</h1>
      <img src={img} alt="Helsinki"/>
      <p>Von 1495 bis 1520 war ich in Groß Britannien. Es gibt einige handschriftliche Anmerkungen, die das Beweisen können. Ausserdem gibt es einige Schmuckbuchstaben, die in diesem Zeitraum gestaltet wurden.</p>
    </div>
  );
});

const Page3 = React.forwardRef((props, ref) => {
  return (
    <div className="jh17" ref={ref}>
      <h1>1497 - 1530</h1>
      <img src={img} alt="Helsinki"/>
      <p>Es hat noch eine andere Person von mir gelernt, und auch einige handschriftliche Notizen hinterlassen.</p>
    </div>
  );
});

const Page4 = React.forwardRef((props, ref) => {
  return (
    <div className="jh18" ref={ref}>
      <h1>im neuen Gewand</h1>
      <p>Es muss irgendwann zwischen 1530 und 16oo gewesen sein, als ich ein neu gebunden wurde. Das ist für ein Buch ja immer besonders spannend.</p>
      <p>Ein Buch bestand damals vorallem aus den Seiten, auf denen es gedruckt war. Es gab keinen einheitlichen Einband, sondern jeder konnte das selbst entscheiden. Da war dann die Frage, wie viel Geld man ausgeben konnte und wollte. Manchmal wurden auch verschiedene Bücher in einen Einband gebunden.</p>
      <p>Mein Buchdeckel ist nun aus Papier. Und mein Einband aus</p>
      <div onClick={() => changeStyleResponse("jh18")}>
        <button onClick={() => negativeResp('Leder')}>Leder</button>
        <button onClick={() => positiveResp()}>Pergament</button>
        <button onClick={() => negativeResp('Leinen')}>Leinen</button>
      </div>
    </div>
  );
});

const Page5 = React.forwardRef((props, ref) => {
  return (
    <div className="jh19" ref={ref}>
      <h1>Groß Britannien</h1>
      <img src={img} alt="Helsinki"/>
      <p>Während meine Geschwister in Europa umherwandern, bleibe ich in Groß Britannien.</p>
      <p>Woher man das weiß? Tja, irgendjemand hat gelegentlich eine Notiz oder zwei gemacht - und zwar eindeutig in einer Handschrift, welche in Groß Britannien verwendet wurde.</p>
    </div>
  );
});

const Page6 = React.forwardRef((props, ref) => {
  return (
    <div className="jh20" ref={ref}>
      <h1>Geschwister</h1>
      <img src={img} alt="Helsinki"/>
      <p>Aprospos Geschwister: dies sind natürlich Bücher, welche gleichzeitig mit mir gedruckt wurden.</p>
      <p>Jetzt sind sie in Bibliotheken in Amsterdamm, Bergamo, Pavia, New York, Rom und Tübingen.</p>
    </div>
  );
});

const PageRes = React.forwardRef((props, ref) => {
  return (
    <div className="res" ref={ref}>
      <p className="resolution"></p>
    </div>
  );
});

function negativeResp(name) {
  var text = "Nein, es war nicht " + name + ".";
  var arr = document.getElementsByClassName("resolution");
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i].innerHTML = text;
  }
}

function positiveResp() {
  var arr = document.getElementsByClassName("resolution");
  var i;
  for (i = 0; i < arr.length; i++) {
    arr[i].innerHTML = "Genau";
  }
}

function changeStyleResponse(jhClass){
  var arr = document.getElementsByClassName("resolution");
  var i;
  var newClass = "resolution "+ jhClass;
  for (i = 0; i < arr.length; i++) {
    arr[i].className = newClass;
  }
}

// function onFlip(data) {
//   var arr = document.getElementsByClassName("resolution");
//   var i;
//   for (i = 0; i < arr.length; i++) {
//     arr[i].innerHTML = "";
//     console.log('Current page: ' + data);
//   }
// }

// function App(props) {
//   return (
//     <HTMLFlipBook width={400} height={500} showCover={true} onFlip={(e) => this.onFlip(e.data)}>
//       <Header number="0"/>
//       <Page1 number="1"/>
//       <PageRes number="2"/>
//       <Page2 number="3"/>
//       <PageRes number="4"/>
//       <Page3 number="5"/>
//       <PageRes number="6"/>
//       <Page4 number="7"/>
//       <PageRes number="8"/>
//       <Page5 number="9"/>
//       <PageRes number="10"/>
//       <Page6 number="11"/>
//       <PageRes number="12"/>
//     </HTMLFlipBook>
//   );
// }
//
// export default App;

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

  onFlip(data) {
    var arr = document.getElementsByClassName("resolution");
    var i;
    for (i = 0; i < arr.length; i++) {
      arr[i].innerHTML = "";
    }
  }

  render() {
      return (
        <HTMLFlipBook width={400} height={500} showCover={true} onFlip={(e) => this.onFlip(e.data)}>
          <Header number="0"/>
          <Page1 number="1"/>
          <PageRes number="2"/>
          <Page2 number="3"/>
          <PageRes number="4"/>
          <Page3 number="5"/>
          <PageRes number="6"/>
          <Page4 number="7"/>
          <PageRes number="8"/>
          <Page5 number="9"/>
          <PageRes number="10"/>
          <Page6 number="11"/>
          <PageRes number="12"/>
        </HTMLFlipBook>
      );
    }
}
    export default Book;
