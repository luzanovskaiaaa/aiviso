import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  description: "Текст согласия на обработку персональных данных, которое пользователь даёт при регистрации в сервисе Aiviso.",
  alternates: { canonical: "/consent" },
  robots: { index: true, follow: true },
};

const styles = {
  h2: { fontSize: 20, fontWeight: 700, margin: "32px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
};

export default function Consent() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "48px 20px 80px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1f2937", lineHeight: 1.7, fontSize: 15 }}>
      <Link href="/" style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}>← На главную</Link>
      <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", margin: "16px 0 8px", lineHeight: 1.2 }}>
        Согласие на обработку персональных данных
      </h1>
      <p style={{ color: "#6b7280", fontSize: 13, marginBottom: 32 }}>Версия 1.0 · действует с 1 мая 2026</p>

      <p style={styles.p}>
        Регистрируясь в сервисе Aiviso (<strong>aiviso.ru</strong>) и проставляя соответствующую отметку
        в форме регистрации, я даю своё согласие <strong>Индивидуальному предпринимателю Лузановской</strong>
        (далее — «Оператор») на обработку своих персональных данных в соответствии с Федеральным законом
        от 27.07.2006 № 152-ФЗ «О персональных данных» на следующих условиях.
      </p>

      <h2 style={styles.h2}>1. Перечень персональных данных</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>фамилия, имя</li>
        <li style={styles.li}>адрес электронной почты</li>
        <li style={styles.li}>номер телефона</li>
        <li style={styles.li}>идентификаторы в социальных сетях (Яндекс ID, VK ID, Telegram), если используется вход через них</li>
        <li style={styles.li}>реквизиты юридического лица (для оплаты по счёту, если применимо)</li>
        <li style={styles.li}>загруженные изображения товаров и метаданные о них</li>
        <li style={styles.li}>история действий в сервисе (генерации, проекты, баланс, платежи)</li>
        <li style={styles.li}>технические данные: IP-адрес, информация о браузере и устройстве, временные метки</li>
      </ul>

      <h2 style={styles.h2}>2. Перечень действий с персональными данными</h2>
      <p style={styles.p}>
        Согласие даётся на следующие действия: сбор, запись, систематизация, накопление, хранение,
        уточнение, извлечение, использование, передача третьим лицам в случаях, предусмотренных
        Политикой конфиденциальности, обезличивание, блокирование, удаление, уничтожение
        персональных данных. Обработка осуществляется как с использованием средств автоматизации,
        так и без их использования.
      </p>

      <h2 style={styles.h2}>3. Цели обработки</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>оказание услуг сервиса Aiviso</li>
        <li style={styles.li}>идентификация и аутентификация пользователя</li>
        <li style={styles.li}>выполнение обязательств по договору-оферте</li>
        <li style={styles.li}>обработка платежей и выставление счетов</li>
        <li style={styles.li}>предоставление поддержки и связи с пользователем</li>
        <li style={styles.li}>защита от мошенничества</li>
        <li style={styles.li}>исполнение требований законодательства РФ</li>
      </ul>

      <h2 style={styles.h2}>4. Срок действия согласия</h2>
      <p style={styles.p}>
        Согласие действует с момента его предоставления и до момента его отзыва пользователем
        либо удаления учётной записи. Отзыв согласия осуществляется путём направления письменного
        обращения на <a href="mailto:support@aiviso.ru" style={{ color: "#7c3aed" }}>support@aiviso.ru</a>.
      </p>
      <p style={styles.p}>
        Настоящее согласие может быть отозвано в любой момент. Отзыв согласия влечёт прекращение
        обработки персональных данных, за исключением случаев, когда дальнейшая обработка обязательна
        в силу требований законодательства РФ (например, бухгалтерский учёт).
      </p>

      <h2 style={styles.h2}>5. Подтверждение</h2>
      <p style={styles.p}>
        Подтверждаю, что я ознакомлен(а) с <Link href="/privacy" style={{ color: "#7c3aed" }}>Политикой обработки персональных данных</Link>
        {" "}и <Link href="/terms" style={{ color: "#7c3aed" }}>Публичной офертой</Link> сервиса Aiviso, и моё согласие
        даётся свободно, своей волей и в моих интересах.
      </p>
    </main>
  );
}
