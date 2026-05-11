import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Способ получения и сроки оказания услуги",
  description: "Как пользователь получает услугу сервиса Aiviso: автоматическое зачисление кредитов на баланс после оплаты, мгновенный доступ к AI-генерации.",
  alternates: { canonical: "/delivery" },
  robots: { index: true, follow: true },
};

const styles = {
  h2: { fontSize: 22, fontWeight: 700, margin: "32px 0 12px", lineHeight: 1.3 } as React.CSSProperties,
  h3: { fontSize: 17, fontWeight: 600, margin: "24px 0 8px" } as React.CSSProperties,
  p: { margin: "10px 0" } as React.CSSProperties,
  ul: { paddingLeft: 24, margin: "8px 0" } as React.CSSProperties,
  li: { margin: "6px 0" } as React.CSSProperties,
};

export default function Delivery() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "48px 20px 80px", fontFamily: "system-ui, -apple-system, sans-serif", color: "#1f2937", lineHeight: 1.7, fontSize: 15 }}>
      <Link href="/" style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}>← На главную</Link>
      <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em", margin: "16px 0 8px", lineHeight: 1.2 }}>
        Способ получения и сроки оказания услуги
      </h1>
      <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 32 }}>Как пользователь получает услугу после оплаты.</p>

      <h2 style={styles.h2}>1. Что покупает пользователь</h2>
      <p style={styles.p}>
        Aiviso — цифровой сервис AI-генерации фотоизображений товаров. Пользователь покупает
        <strong> кредиты</strong> — внутреннюю расчётную единицу, которая используется для оплаты
        генераций. Один пакет кредитов = одна транзакция оплаты. Подробнее — в
        <Link href="/terms" style={{ color: "#7c3aed" }}> Публичной оферте</Link>.
      </p>

      <h2 style={styles.h2}>2. Как и когда зачисляются кредиты</h2>
      <p style={styles.p}>Услуга цифровая, физической доставки нет. Процесс получения:</p>
      <ol style={{ paddingLeft: 24 }}>
        <li style={styles.li}>Пользователь выбирает пакет кредитов в личном кабинете на странице «Биллинг»</li>
        <li style={styles.li}>Переходит на защищённую страницу платёжного провайдера (ЮKassa или Т-Касса)</li>
        <li style={styles.li}>Оплачивает банковской картой, СБП или другим доступным способом</li>
        <li style={styles.li}>После успешной оплаты платёжный провайдер возвращает webhook-уведомление в Aiviso</li>
        <li style={styles.li}><strong>Кредиты автоматически зачисляются на баланс</strong> в течение 1-5 минут после успешной оплаты</li>
        <li style={styles.li}>Пользователь видит обновлённый баланс в личном кабинете и может сразу запускать генерации</li>
      </ol>

      <h2 style={styles.h2}>3. Сроки оказания услуги</h2>
      <ul style={styles.ul}>
        <li style={styles.li}><strong>Зачисление кредитов</strong> — мгновенно (до 5 минут)</li>
        <li style={styles.li}><strong>Одна AI-генерация</strong> — обычно 30 секунд – 2 минуты</li>
        <li style={styles.li}><strong>Срок жизни кредитов</strong> — не ограничен. Купленные кредиты не сгорают со временем.</li>
        <li style={styles.li}><strong>Доступ к результатам</strong> — постоянный через личный кабинет, пока учётная запись активна</li>
      </ul>

      <h2 style={styles.h2}>4. Что входит в услугу</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>AI-генерация фото товара (Pro или Flash модель — на выбор)</li>
        <li style={styles.li}>Готовый формат 3:4 (900×1200) — стандарт карточки WB и Ozon</li>
        <li style={styles.li}>Скачивание результатов в виде ZIP-архива</li>
        <li style={styles.li}>Хранение проектов и фото в личном кабинете без ограничений по времени</li>
        <li style={styles.li}>Поддержка по email <a href="mailto:support@aiviso.ru" style={{ color: "#7c3aed" }}>support@aiviso.ru</a></li>
      </ul>

      <h2 style={styles.h2}>5. Если зачисление не произошло</h2>
      <p style={styles.p}>
        В редких случаях зачисление кредитов может задержаться (например, при сбое webhook
        платёжного провайдера). Если в течение <strong>30 минут</strong> после оплаты кредиты
        не появились на балансе:
      </p>
      <ul style={styles.ul}>
        <li style={styles.li}>Проверьте поступление денежных средств в личном кабинете банка-эмитента</li>
        <li style={styles.li}>Напишите в поддержку <a href="mailto:support@aiviso.ru" style={{ color: "#7c3aed" }}>support@aiviso.ru</a> с указанием email учётной записи и приложенным чеком об оплате</li>
        <li style={styles.li}>Поддержка зачислит кредиты вручную в течение 1 рабочего дня</li>
      </ul>

      <h2 style={styles.h2}>6. Возврат денежных средств</h2>
      <p style={styles.p}>
        Условия возврата подробно описаны в <Link href="/refund" style={{ color: "#7c3aed" }}>Политике возврата денежных средств</Link>.
      </p>

      <h2 style={styles.h2}>7. Контакты</h2>
      <p style={styles.p}>
        Все вопросы по работе сервиса, оплате и возвратам:
        <a href="mailto:support@aiviso.ru" style={{ color: "#7c3aed" }}> support@aiviso.ru</a>.
        Реквизиты исполнителя — на странице <Link href="/requisites" style={{ color: "#7c3aed" }}>«Реквизиты и контакты»</Link>.
      </p>
    </main>
  );
}
