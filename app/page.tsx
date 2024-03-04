import { Metadata } from 'next';

import Hero from "./components/hero";
import SectionTitle from "./components/sectionTitle";

import { benefitOne, benefitTwo } from "./components/data";
import Video from "./components/video";
import Benefits from "./components/benefits";
import Footer from "./components/footer";
import Testimonials from "./components/testimonials";
import Faq from "./components/faq";
import PopupWidget from "./components/popupWidget";

const Home = () => {
  return (
    <>
      <Hero />
      <SectionTitle
        pretitle="Плюсы"
        title="Почему использовать именно наше приложение">
        Мы гарантируем качество, безопасность и конфиденциальность каждого заказа.
        Наше приложение - это ваш надежный помощник по дому!
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Посмотри видео"
        title="Научись исполнять свои желания">
        Вы хотите сделать свою жизнь проще и комфортнее? Вы хотите избавиться от
        хлопот и забот по дому? Вы хотите найти лучшего специалиста для любой
        домашней задачи? Тогда наше приложение для вас!
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Отзывы"
        title="Что говорят наши клиенты">
        Мы очень ценим каждого клиента и всегда рады получить отзывы о нашей
        работе. Ваше мнение очень важно для нас!
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="Вопрос/Ответ" title="Часто задаваемые вопросы">
        Здесь мы ответим на часто задаваемые вопросы. Если у вас остались
        вопросы, вы всегда можете связаться с нами.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
};

export const dynamic = 'force-dynamic'; 

export const metadata: Metadata = {
  title: 'Domestic service - Главная',
  description: 'Домашняя страница приложения для бытовых задач'
};

export default Home;
