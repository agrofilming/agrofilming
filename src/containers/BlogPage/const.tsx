import blogFirstPostTitle from '@/assets/images/blog-post1-title.webp';
import blogSecondPostTitle from '@/assets/images/blog-post2-title.webp';
import post2titleImg from '@/assets/images/post2-title.webp';
import post1thirdImg from '@/assets/images/pexels-donald-tong-66134.webp';
import post1secondImg from '@/assets/images/pexels-pixabay-257904.webp';
import post1firstImg from '@/assets/images/pexels-suzy-hazelwood-1750268.jpg';
import post2firstImg from '@/assets/images/pexels-david-geib-3220846.webp';
import post2secondImg from '@/assets/images/pexels-elijah-odonnell-4066041.webp';

import styles from '../PostPage/index.module.scss';

export const blogData = [
  {
    id: '1',
    title: 'Що таке відеопродакшн',
    desc: 'Туточки ми з вами розберемось в загальних рисах що таке відеопродакшн. Ви зрозумієте за що ви платите гроші при замовленні послуги відеовиробництва.',
    img: blogFirstPostTitle,
    titleImg: blogFirstPostTitle,
    mainDesc: (
      <p>
        <i>
          <b>Виробництво відео</b> – це, по суті, весь процес створення відео. Незалежно від того, чи це
          короткометражний фільм, повнометражний фільм, бізнес-маркетингове відео, телевізійна реклама, музичне відео
          або інший тип фільму, процес може дещо відрізнятися залежно від специфіки, але загальний процес в основному
          однаковий.
        </i>
      </p>
    ),
    content: [
      {
        text: (
          <p>
            Історично виробництво відео складається з трьох етапів: попереднього виробництва, виробництва та
            пост-виробництва. Ці етапи відомі як <br />– Пре-продакшн <br />– Продакшн <br />– Постпродакшн <br />
            <br />
            Ці три підкатегорії охоплюють усі аспекти відеовиробництва, починаючи з моменту, коли у вашій голові
            з’являється ідея, до моменту, коли відео або фільм виходить у загальний доступ. <br />
            <br />
            <br />
            <span
              style={{
                fontWeight: 400,
                fontSize: 20,
                lineHeight: '24px',
              }}
            >
              Підготовка до виробництва. Пре-продакшн.
            </span>
          </p>
        ),
        img: post1firstImg,
      },
      {
        text: (
          <p>
            Це етап планування. Під час цього процесу не буде запису, лише підготовка. <br />
            <br />
            Формується ідея, підготовляється сценарій, підбирається акторський склад, вибираються члени аудіо- та
            фільмування, вибираються місця сцени, сценарій редагується та переглядається, якщо необхідно, створюється
            схема всього процесу запису. <br />
            Правильне освітлення для кожної сцени має вирішальне значення. Сонячне та штучне освітлення часто погано
            поєднуються, тому час доби, погодні умови та місце для кожної сцени потрібно вибирати дуже ретельно. <br />
            <br />
            <br />
            <br />
            <span
              style={{
                fontWeight: 400,
                fontSize: 20,
                lineHeight: '24px',
              }}
            >
              {' '}
              Виробництво. Продакшн.
            </span>
          </p>
        ),
        img: post1secondImg,
      },
      {
        text: (
          <p>
            Після того, як усі актори та знімальна група будуть найняті, а сценарій відредаговано та затверджено, можна
            розпочинати фактичний процес виробництва. Знімальна група та актори подорожують до кожного місця, і кожна
            сцена знімається, доки вона не буде задовільною. Потім усі переходять до наступної сцени. Цей процес
            повторюється, доки не буде знято кожну сцену у фільмі або відео. <br />
            Після того, як кожна сцена була знята належним чином, настав час переходити до наступного етапу. <br />
            <br />
            <br />
            <br />
            <span
              style={{
                fontWeight: 400,
                fontSize: 20,
                lineHeight: '24px',
              }}
            >
              Пост-виробництво. Постпродакшн.
            </span>
          </p>
        ),
        img: post1thirdImg,
      },
    ],
    brief: (
      <>
        <p>
          Постпродакшн охоплює всі дії, які виконуються після завершення фактичного фільмування відео. Це включає
          об’єднання кожної сцени, синхронізацію аудіо та відео, редагування аудіо та відео, додавання спеціальних
          ефектів, текст, субтитри, анімацію.
        </p>
        <br />
        <br />
        <div className={styles['main-desc']}>
          <p>
            <i>
              <b>
                Щоб відеовиробництво було успішним, за ним має стояти набагато більше, ніж просто хлопець або дівчина із
                камерою.
              </b>
            </i>
          </p>
        </div>
        <br />
        <br />
        <p>
          Відео має бути націлено та правильно розповсюджено, інакше відео охопить лише невелику кількість потенційних
          клієнтів. Відео, що описує загальний огляд ваших продуктів і/або послуг, чудово підходить, якщо у вас є
          особлива ніша, але якщо у вас є конкуренція, ваше відео має показати потенційним клієнтам, чому вони повинні
          вибрати вашу компанію, а не компанію вашого конкурента. З цієї причини ви можете досягти кращих результатів,
          створивши кілька коротких відео, кожне з яких орієнтовано на певну демографічну групу. Потім відео можна
          розповсюджувати через правильні платформи, щоб охопити максимальну кількість людей, які можуть бути
          зацікавлені в послугах вашої компанії.
        </p>
      </>
    ),
  },
  {
    id: '2',
    title: 'Навіщо потрібен відеомаркетинг',
    desc: 'Майже всі сучасні люди полюбляють дивитися відоси. Не просто так всі соціальні мережі додають таку функцію як СТОРІС. Чому вони це роблять?',
    img: blogSecondPostTitle,
    titleImg: post2titleImg,
    mainDesc: (
      <p>
        <i>
          <b>Відеомаркетинг</b> – це використання відеоконтенту для просування або інформування аудиторії про ваш бренд
          і продукти. Такі платформи, як YouTube і TikTok, Instagram та Facebook, зосереджуються на відео.
        </i>
      </p>
    ),
    content: [
      {
        text: (
          <p>
            Правильне додавання відео до вашої маркетингової стратегії допоможе підняти бізнес на новий етап. Якщо у
            вашій стратегії немає відео, значить, ви відстаєте. Але не хвилюйтеся, адже ще не пізно почати. <br />
            <br />
            <b>Чому відеомаркетинг важливий? </b> <br />
            <br />
            Дві третини споживачів кажуть, що скоріше подивляться відео, щоб дізнатися про продукт чи послугу, ніж
            прочитають про неї. І цим, як ви розумієте, вже все сказано. Наразі, відео є найбільшим джерелом
            інтернет-трафіку в усьому світі – 53,7%, а соціальні мережі посідали лише друге місце – 12,7%. <br />А
            по-друге, відео – це рух, а рух привертає нашу увагу. 95% глядачів краще запам’ятовують повідомлення при
            перегляді відео, бо одночасно задіяні наші органи чуття: зір та слух.
          </p>
        ),
        img: post2firstImg,
      },
      {
        text: (
          <p>
            <b>Переваги використання відео для реклами</b> <br />
            <br />
            Ми вже розібрались в причинах, чому люди дивляться відео, а тепер розглянемо, як вони можуть допомогти
            вашому бізнесу. <br /> <br />
            <b>
              <i>Відео створює довіру споживачів до вас</i>
            </b>
            <br />
            За допомогою відео Ви демонструєте свою індивідуальність, історію про те, що рухає вами як брендом.
            Потенційна аудиторія ознайомлюється з культурою вашої компанії, таким чином встановлюється емоційний зв’язок
            зі споживачем, що призводить до більшого почуття довіри. <br />
            <br />
            <b>
              <i>Відео має вплив на кінцеве рішення покупця</i>
            </b>
            <br />
            Більшість людей у підсумку купують товар або послугу бренду після перегляду їхнього відео. <br />
            <br />
            <b>
              <i>Відео має кращу рентабельність інвестицій, ніж будь-який інший тип публікацій</i>
            </b>
            <br />
            Дослідження показує, що 74% маркетологів додають відео для покращення SEO, після чого спостерігають загальне
            зростання відвідуваності вебсайт, лідогенерації та продажів. Відео викликають більше зацікавленості у
            споживачів, ніж статичні пости, такі як зображення.
          </p>
        ),
        img: post2secondImg,
      },
    ],
    brief: (
      <>
        <span>Більшість людей полюбляють дивитись відоси</span> <br /> <br />
        <p>
          <b>ВАЖЛИВО</b> <br /> <br />
          Відео має бути націлено та правильно розповсюджено, інакше відео охопить лише невелику кількість потенційних
          клієнтів. <br />
          <br />
          Відео, що описує загальний огляд ваших продуктів і/або послуг, чудово підходить, якщо у вас є особлива ніша,
          але якщо у вас є конкуренція, ваше відео має показати потенційним клієнтам, чому вони повинні вибрати вашу
          компанію, а не компанію вашого конкурента. <br />
          <br />З цієї причини ви можете досягти кращих результатів, створивши кілька коротких відео, кожне з яких
          орієнтовано на певну демографічну групу. Потім відео можна розповсюджувати через правильні платформи, щоб
          охопити максимальну кількість людей, які можуть бути зацікавлені в послугах вашої компанії.
        </p>
      </>
    ),
  },
];
