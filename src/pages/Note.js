import { useState, useEffect } from "react";
import Card from "../components/Card";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { IconButton } from "@mui/material";

export default function Note() {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  
  const mockCardsResponse = {
    data: {
      items: [
        {
          id: 1,
          question: "Danistay Yuksek Disiplin Kurulu Kararlarina Dava Acma Suresi?",
          answer: "15 gun",
        },
        {
          id: 2,
          question: "Kesin Cevabi Bekleme Suresi",
          answer: "4 ay",
          options: [
            {
              name: "A",
              text: "4",
            },
            {
              name: "B",
              text: "5",
            },
            {
              name: "C",
              text: "3",
            },
          ],
        },
        {
          id: 3,
          question: "Dilekce reddi sonrasi davanin yeniden acilmasi icin verilen sure?",
          answer: "30 gun",
        },
        {
          id: 3,
          question: "Bedel artirma dilekcesine cevap suresi",
          answer: "30 gun",
        },
        {
          id: 3,
          question: "istinaf suresi",
          answer: "30 gun",
        },
        {
          id: 3,
          question: "istinaf kararlarinin taraflara teblige cikarilma suresi?",
          answer: "7 gun",
        },
        {
          id: 3,
          question: "temyiz suresi?",
          answer: "30 gun",
        },
        {
          id: 3,
          question: "yurutmenin durdurulmasi kararlarina itiraz suresi?",
          answer: "7 gun",
        },
        {
          id: 3,
          question: "Davada taraflarin kisilik ve niteliginde degisiklik olmasi nedeniyle islemden kaldirilan dosyanin yurutmenin durdurulmasi kararinin hukumsuz kalmamasi icin yeniden isleme konulmasi icin basvuru suresi?",
          answer: "4 ay",
        },
        {
          id: 3,
          question: "durusma tebligati ile durusma gunu arasindaki sure?",
          answer: "30 gun",
        },
        {
          id: 3,
          question: "durusmali islerde kara verme suresi?",
          answer: "15 gun",
        },
        {
          id: 3,
          question: "dilekcelerin asliye hukuk mahkemesi ve Turk konsolosluklari tarafindan idari yargi yerlerine dilekceyi gonderme suresi?",
          answer: "3 gun",
        },
        {
          id: 3,
          question: "idari yargi yerlerinin mahkeme kararlarini uygulama suresi?",
          answer: "30 gun",
        },
        {
          id: 3,
          question: "harc ve posta ucretinde eksiklik olmasi halinde eksikligin giderilme suresi?",
          answer: "30 gun + 30 gun",
        },
        {
          id: 3,
          question: "posta ucretindeki azalmanin giderilmemesi nedeniyle islemden kaldirilan dosyanin yeninden isleme konma suresi?",
          answer: "3 ay",
        },
        {
          id: 3,
          question: "temyiz ve istinafta posta ve harc ucretinde eksikligin giderilme suresi?",
          answer: "7 gun",
        },
        {
          id: 3,
          question: "temyiz ve istinafta dilekce eksikliklerinin giderilme suresi?",
          answer: "15 gun",
        },
        {
          id: 3,
          question: "Dilekcedeki eksikliklerin giderilme suresi?",
          answer: "30 gun",
        },
        {
          id: 3,
          question: "Gosterilen adrese tebligat yapilmamasi nedeniyle kaldirilan dosyanin yeniden isleme konmasini isteme suresi?",
          answer: "1 yil",
        },
        {
          id: 3,
          question: "Sayistay kararlarina karsi temyiz suresi?",
          answer: "60 gun",
        },
        {
          id: 3,
          question: "Sayistay'in kesin kararlarina karsi karar duzeltme suresi?",
          answer: "15 gun",
        },
        {
          id: 3,
          question: "Sayistay ilamlarinin infaz suresi?",
          answer: "90 gun",
        },
        {
          id: 3,
          question: "Olumlu gorev uyusmazligi cikarma dilekcesini sunma suresi?",
          answer: "15 gun",
        },
        {
          id: 3,
          question: "Uyusmazlik mahkemesinin karar verme suresi?",
          answer: "6 ay",
        },
        {
          id: 3,
          question: "Bilgi Edinme ve Degerlendirme Kurulu'na basvuru suresi?",
          answer: "15 gun",
        },
        {
          id: 3,
          question: "Bilgiye erisim suresi",
          answer: "15 is gunu. (is!!!!!!!!!!!!!!!!!!!!!Lutfen dikkar)",
        },
        {
          id: 3,
          question: "Kamu Denetciligi Kurumu'na basvuru suresi?",
          answer: "6 ay",
        },
        {
          id: 3,
          question: "Temyiz edilmemis sayilma, temyiz isteminde bulunulmamis sayilmasi ve temyiz isteminin reddi kararlarina karsi(!) temyiz suresi?",
          answer: "7 gun",
        },
        {
          id: 3,
          question: "Karar gerekcelerinin yazilma suresi?",
          answer: "30 gun",
        },
        {
          id: 3,
          question: "Danistay savcilarinin havale edilen islerle ilgili mutalaa suresi?",
          answer: "1 ay",
        },
        {
          id: 3,
          question: "Busra Can (savci) mutalalarina taraflarin gorus bildirme suresi?",
          answer: "10 gun",
        },
        {
          id: 3,
          question: "Furkan Unal'i ne kadar cok seviyorsunuz?",
          answer: " coooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooook",
        },
        {
          id: 3,
          question: "Tebrikler Notunuzu Tamamladiniz",
          answer: "Tamamladiniz dedik ya guzellik.. :))",
        },
      ],
      total: 3,
    },
  };

  const fetchData = () => {
    setData(mockCardsResponse.data.items);
  };

  const handleMove = (moveType) => {
    if (moveType === "prev" && index > 0) {
      setIndex(index - 1);
      
    } else if (moveType === "next" && index < data.length - 1) {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (data && data[index] && data[index].question !== question) {
      setQuestion(data[index].question);
    }
    if (data && data[index] && data[index].answer !== answer) {
      setAnswer(data[index].answer);
    }
  }, [data, index, question, answer]);

  return (
    <div className="Note">
      <div style={{ height: "90%" }}>
        {data !== null && data[index] ?(
          <Card
            style={{
              position: "absolute",
              top: "8%",
              left: "33%",
              width: "30%",
              height: "70%",
            }}
            question={question}
            answer={answer}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="MovementIcons">
        <IconButton onClick={() => handleMove("prev")}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={() => handleMove("next")}>
          <SkipNextIcon />
        </IconButton>
      </div>
    </div>
  );
}
