# Настройка SSO (вход через Яндекс/Google/VK)

Технический каркас готов. Чтобы кнопки реально работали, нужно зарегистрировать
наше приложение у каждого провайдера и положить полученные `client_id`/`client_secret`
в `.env` на сервере.

Пока ни один не настроен, кнопки на /auth просто не показываются — никаких ошибок.

## Яндекс ID (самое простое для русских селлеров)

1. Открой https://oauth.yandex.ru/client/new
2. Заполни:
   - **Название сервиса:** Aiviso
   - **Иконка:** загрузи `/web/public/icon-192.png` (есть в репо)
   - **Платформы:** «Веб-сервисы»
   - **Redirect URI:** `https://aiviso.ru/auth/oauth/yandex/callback`
   - **Доступы:** «Доступ к адресу электронной почты» + «Доступ к ФИО, имени, фамилии и полу»
3. После создания получишь **ClientID** и **Пароль приложения** (это secret).

## Google

1. Открой https://console.cloud.google.com/apis/credentials
2. Создай новый проект (если ещё нет): «New Project» → «Aiviso»
3. **Configure OAuth consent screen** → External → имя «Aiviso», support email = твой email, домен `aiviso.ru`. Scopes: `email`, `profile`, `openid`
4. Затем **Create Credentials → OAuth client ID** → Application type: **Web application**
   - Authorized redirect URIs: `https://aiviso.ru/auth/oauth/google/callback`
5. Получишь **Client ID** и **Client Secret**

## VK ID

1. Открой https://id.vk.com/about/business → «Подключить VK ID»
2. Зарегистрируй приложение, тип «Веб-сайт»:
   - Адрес сайта: `https://aiviso.ru`
   - Доверенный redirect URL: `https://aiviso.ru/auth/oauth/vk/callback`
3. В разделе «Настройки» получишь **App ID** (это client_id) и **Защищённый ключ** (client_secret).

## Прописать в .env на сервере

```bash
ssh root@<your-server>
cd /var/www/aiviso/api
nano .env
```

Добавь (для тех провайдеров, что зарегистрировал):

```
YANDEX_OAUTH_CLIENT_ID=...
YANDEX_OAUTH_CLIENT_SECRET=...

GOOGLE_OAUTH_CLIENT_ID=...
GOOGLE_OAUTH_CLIENT_SECRET=...

VK_OAUTH_CLIENT_ID=...
VK_OAUTH_CLIENT_SECRET=...
```

Сохрани и перезапусти API:

```bash
docker restart aiviso-api
```

После рестарта `GET https://api.aiviso.ru/auth/oauth/status` вернёт `true` для тех,
что настроены, и кнопки появятся на /auth автоматически.

## Если что-то пошло не так

- Кнопки не появились → проверь `curl -sk https://api.aiviso.ru/auth/oauth/status` — должен вернуть JSON с `true` для нужного провайдера
- Кнопка ведёт на провайдера, но возвращает «Invalid redirect_uri» → проверь что в настройках приложения redirect URI прописан **точно** как `https://aiviso.ru/auth/oauth/{provider}/callback` (без слеша на конце, https, именно `aiviso.ru` без `www.`)
- Провайдер возвращает «нет email» → проверь scope. Для Яндекса нужен `login:email`, для Google `email`, для VK `email`.

Если зарегистрируешь — пришли мне ClientID/Secret в Telegram, я сам пропишу в .env.
