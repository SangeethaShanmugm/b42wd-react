import "./App.css";
import { AddColor } from "./AddColor";

const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations.",
  },
];

function App() {
  const users = [
    {
      pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg",
      name: "Abhishek",
    },
    {
      pic: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8ODw8ODRAPDg4QDxAQDg8QEBAQDhAPFREWFxcRFRUYHSggGBoxHxUVIT0tJSorMC4uGB8zOTMsNygtLisBCgoKDQ0NDg0NDi0ZHxkrKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAQIDBAUHCAb/xAA5EAACAgIABAQEBAMGBwAAAAAAAQIDBBEFEiExBgcTQSJRYXEUMoGRUqGxCBUjQsHwU2JjcpKi4f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AxmNidEX9WL9C9oxuiLyvGKixrxi4hjl/XjlxDHAx8McrQxjIQoK0KAMfHHKixzIqghKCXf8AcCxVBOqDE8Y8ZcPw5cl16nPW+Spc0kvr7e/zMVi+Z/D5zUXuCcuVSlzpd+7+HSXX3YHrfw5bcQy6Mat232QhDsm2tyfyS92a28b+Y91s3Vwx+njwfLO9xi3bPvqO9pLo/qzwXFOM5GXJSybHa4x5Y7UYqK+0dLf1A33VxvDlV6yyKlXyp80pxj3Xun1RTwPEGBky5KMmqc9b5U3vXbfb6r9zngq42TOqSnVKUJppqUXp9Hv/AEIrpWVWur0l7tvWilGUJ7UZQk10ajJPRoTi/irOzFFZF85KHZR1Wt/xNRS2ylwXxDlYM5WY1nK5tOzmjGas671La2B0G6iV1HiPCXmPXkyjRnRVN0mownWn6U2+ya23F/yNhKv/AG+5UWEqihZSZR1FGyoDCXUGPyMc9DbUWN1IHmMrGBlsmgAehpo6Iu66StVV0LmFQFvCkrRqLiNZUVYFCNZQ4jnVY0FO6UYcz5a038Vk32hGPeT+iL2yUYRcptRiltt9El82aS4l4g9d5PFpf4jhesbhlUluFMtcznp9G9ab6b7rsgNrLxFiqiORZZGuuS6Jtc+++kl39/2fstnlfGPj2qPD7bMOS9S2z8PU91yaaW52LUnvS91tfFHqaix7Lc7JpjfKVyldXGSb0krLEpaS7bb9ifxVdiTyGsGPLTBOPROMZNTklOK2/wDKofd7ZFYmybk23tttuTfdtvuSggBHZAAAAAAAAHvfDnmRbi01UXq69Qk92epHnVfsknF7/V/seCAHQ3APGGJmKmPP6d1sU4QsXIpyXeMXvTlv23v6GenA5gpvcOqf6e3bv9H2f6L5HRXhXi1eRjUKV6uvVMPUm4ygrZLo5x5kuZb6bXv9yovbKy0uqMpZEt7awMJfUQL6+sgB6KuorxrKtdZWUAKMayPpldRGgPKeOKnbjXY9b5Zyostk09Plr1LkX30/0TXuc6W3ckVXCcn6V05V6Timml8fzT3FHRniuccS1Z0uZw9GVNsU9xfNJcvw/wATekvrynPXib8K8mx4M52US6pzr9OSl7rW3v5+3d9ArGwscWpRepLs10aJACAAAAAAAAAAAAAAGa8KKx5C9Ct23d46slXypP4pNruuvXftswpVx8ide/Tk4b1tp67AdKeHr5241U5pxbri+WT5pRTXRb18X39y7siY7wnl1TxKVVZG6Kgtzi46531cdbf9W17mVsRUY66IKtyAHrVUQcS8cSlOIFvoE7RDQGv/ADfk/wC7rEnGMueFicpQj0hNNRXM0+bp7b/oaRwOJ0z9WvKqrdVkpWbhCMbq7H71z107dn8L+S7m+MrhWJlcSyqeI1xtulGqeArknV+FVUFNVKS1zeorHLXXUo+2jC8d8o8aUlbgquuyKbePb6jxrf8AlbT5ofddgrSPE8WFVjVVkbq/8k10evlJez+2y0M54i8P5GJfKqeNZRueq4OSs7tJJSXdb7Nrr+5is7Esx7bKL4Ou2ubhZCXeMk9NEFAAAAAAAAAAAAAAALnh0IyvpjNpQlbXGTfZRckm2Bt7yg4XOiu/8RH07eaMoxmpRsUHHut9Gvt9fkbEnErUUxjFcmuXSUdfw/IhYiox90QVbkAPYORTkS7GwINEvKTNkGwLDi3CMfMgq8qqF0Yy5ocy+KE/4oSXWMvqi4x6I1xjCO+WK0ttt6+rfVlVsx3GuNY2BU78y2FNaek5fmlLW+WMV1k/ogL62qt/FbGDUNy5pJPlS7vb7HL3mRxqOfxPJvglGvn9OGkusYvW382bS8d+P7LMK6rCwuIQdqUXkW0OqCqltcy6t9e3Va+poiUWm0+jT0/mmRUoIy7kAAAAAAAAAAAAEUyBPVW5yjCPWUpKKXzbekB1Zw+fNTVL+KuEu2u8V0Kk0ScOo9OmqvbfJXCHXv8ADFL/AEK0kVFldEFW2IAz+xsgADJWTErAlk/l1+hoXw34xpu4q83j7luKlHEhyOWPiTU+u4d01rvpvfV9kzfZ4DwPwbHyocaqy6K7Yy43mbhZFPUdQcWvdfmfVAYnzE8QYdGRjZcJzvpy8e6qcqJQsplGKSj762ud/br0NJ5NlbcHBTT5F6rnLmc7dvmkvku37GwPMX8Dwt3cO4dN2ytad8LFG2OI+m41zfXnaS79Yr32+mtyKi2QAAAAAAAAAAAAAeh8v8T1uK4Vet/46m09a1BOfv8A9p542X5G8KsnmW5fKnTVVKvmf/Fm01yr56i/3QG7iEkT6JZIqLeaBNYgBm9DRMAJNENE5BgSaPKKjK4fnZVtGLPMw86Vd01TOqN1GTGKhLcbJRUoSSi9p9GmetZKByBxiNqyb1fGUbvWsdsZpqam5NvafuWZ035keGcTLwsnJtx1Zk049kqZx3GxyjFuMen5lvXc5v4tTCvIvrqe64XWQg973GM2l19+xFWgAAAAAAAAAAAACrjUTtnCqtc05yjCEenWUnpLqdQ+DuAR4bhUYq6zjHmul/FbLrJ/bZq3yO8Lu6+fEboJ0VKVdHMvzXvW5JPukt9fm/obwkiii0SSRWaKckEW9iBNYgBmiBEgAJWRZKwIECJHQGI8Xep/d2b6Ck7fw1vJyrmmnyvbjH3aW3r30clM7OSOQ/E2LGjNyaIRcIU3Tqipb5moPl5nv3et/qRWMAAAAAAAAAAAy3hbgNvEsurEp6Sse5ze+WutdZTf2X89GJPQ+EvGGTwh3Sw4Uc9yhGVlsHOahFt8keqSTbTf2QHTfC+G1YdFWLjrlqpgoQT76Xu/m33Lhs8t5c+LnxfE9WyKhkVS9O9R/I3ranH5Jr+jPUSKiWTKbZGTKbYEkwSzZEDNhk2hoCRkuio0S6Al0RIkABoHzr4FOGXO+EVyOPrcyXVwnJKW/tNv/wA0b+NaefFqhw6D7TssVKeu8eaM3Hft+Tf6MDnsAEUAAAAAAAAAAG6P7Pe/T4h16c+Ppde+rN/T5G25I1f5Bxohi5H+NS8m67m9BTXrRqrjpOUO/dy/kbSkiot5EjK8kU3EC3mgTziAM+NAAQaJWidkjAlaJSZkoENFjxvguPn0TxcutWUz7rbTjJdpRa6qSMgkUc7Nqx65XXzjXXBNuUml+i33YGlvFHlLgcPreRPOvVbfLXTKFXqzk+y59pf+p4njXhmjDwqr7J2u67cqknH0/T3qDacdttJvv7/QvvMjxfbxTKk65uGLTv0oNpR5dpc7Xu2/99DEcV47G/Fpol1nTCNfNrbmk/zN+3RIK84ACAAAAAAAACth5VlFkLaZyrsrkpQnF6lGS90dT+D+Ox4lg0Za1zTjq2K/y3R6TX22v20cpHt/Lfx9PhE512xldhWblOqHLzwt1pWQ39kmt9vsB0a0SNHh+BebXDMu1Uz9XElLShO9QVUpP2cot8v66R7t9eq6p9n7NFRQmgTTRADMkGwyUA2StkxDQEoRHRbcRzYY9UrZ9oxbUVrctLsgLbxDxunh+PPJv24wTahHTnPXsv8A70Ob/HXmBlcWskuaVOIpbrx01pdNbk13ff8AdmU82vEluRfGnfLW4qyUU/Z9ot/Lpv8AX9DXZFAAAAAAAAAAAAAAAAD2nhDzJz+GqNTaysWPRUWt7hH5Vz7x/mvoeLAHR3A/M7hWYlz3fg7Nda8j4V+li+F/un9Ac4gDtUESBUCllXwqrnbY+WFcJTm++oxW2/2RJn51OPB25FkKa13nOSjH+ZrjxZ5wcMqhbRjwnnOcJVy5X6dOpLT+N9X39kBj+J+edEJNY2JO2O2lOyzk2v4uXT0eZzPM2OZzSynOG4tRhCPSK5l+Xr31vq/fRrjiOUrrZWKCrT7Qj2SLYis14t4pXl5TtpTVahGEd93ru/ottswoAAAAAAAAAAAAAAAAAAAAAAB2sU8m+FUJWWyUK4Rcpzk9RjFd2yqan8/PEHo41eDXLUrmp29evIvyr99v9EVGuvNfxr/e2Uo07WJj80ad95t97GvqeFAIoAAAAAAAAAAAAAAAAAAAAAAAAAAO19nLvmxxJ5XEZWb3CS5qvl6XM4xa/SO/1N+eYPGfwPC8u9Pln6Trqf8A1J/DH+pzH4it5rKo616WJiV999VRBv7dZMoxQAIAAAAAAAAAAAAAAAAAAAAAAAAAAA3d/aD4u1ViYUX+eUr7PtH4Yr923+hpviWQrbp2R3qT6bWnpJL/AEPWecPEnkcWvjv4aIwpj310jzP+cn+x4kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyHiDK9fMyrl1VmRdNfaVja/kY8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z",
      name: "Sarath",
    },
    {
      pic: "data:image/jpeg;base64,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",
      name: "Swathi",
    },
  ];

  const bookList = INITIAL_BOOK_LIST;

  return (
    <div className="App">
      {/* <AddColor /> */}
      <div className="book-list">
        {bookList.map((bk) => (
          <Book book={bk} />
        ))}
      </div>
    </div>
  );
}

function Book({ book }) {
  // const book = {
  //   name: "The Avengers",
  //   poster:
  //     "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //   rating: 8,
  //   summary:
  //     "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
  // };
  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-name">{book.name}</h2>
        <p className="book-rating">⭐{book.rating}</p>
      </div>
      <p className="book-summary">{book.summary}</p>
    </div>
  );
}

export default App;
