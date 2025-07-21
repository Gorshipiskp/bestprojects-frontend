import type {PeopleType, ProjectsInfoType} from "./codelib/types";

// Почему не `.json`? Потому что TS в IDE не считывает нормально литералы из JSON

export const PEOPLE: PeopleType = {
    "vertain": {
        "name": "Verta1n",
        "description": "Мой друг-музыкант, с которым мы иногда отдыхаем в играх и делаем совместные творческие проекты",
        "avatar": "https://yt3.googleusercontent.com/3gLMbK3FDnxfx_XkGwA0MkV-jK91R-Gn53t-0yMxxf_V5Ma5ggfaPlybRQuk9964MtfI1qcugA=s160-c-k-c0x00ffffff-no-rj",
        "links": {
            "Youtube": "https://youtube.com/@ivanezdarkholm",
            "Telegram-канал": "https://t.me/ivanezdrkhlm",
        }
    }
}


// `...` - Мелкий код
// //...// - Курсив
// {НАЗВАНИЕ_ПРОЕКТА} - Автоматически делает ссылку на страницу проекта

export const PROJECTS: ProjectsInfoType = {
    "bestaccounts": {
        "name": "bestaccounts",
        "display_name": "BestAccounts",
        "stack": [
            "Python",
            "FastAPI",
            "Svelte",
            "TypeScript",
            "MySQL"
        ],
        "technologies": {
            "backend": [
                "Cryptography (AES, Fernet, bcrypt)",
                "Apscheduler",
                "MySQL",
                "Google Gmail API",
                "telebot",
                "Pydantic",
                "cachetools",
                "Regex"
            ],
            "frontend": [
                "Svelte-Routing",
                "Vite",
                "SafeFetchLib"
            ],
            "design": [
                "Flowbite",
                "TailwindCSS",
                "SCSS"
            ],
            "infrastructure": [
                "HTTPS",
                "JWT",
                "CORS",
                "REST API",
                "Свой OAUTH"
            ]
        },
        "website_link": "https://bestaccounts.ru",
        "github_link": false,
        "release_year": 2024,
        "close_year": false,
        "creators": [],
        "using": "1–4 активных пользователей в месяц",
        "license": "Private",
        "size": "Main",
        "tags": ["Безопасность", "Аккаунты", "Кросс-проектный", "Авторизация"],
        "tag_development": "Production",
        "features": {
            "auth_tokens": {
                "featureName": "JWT-токены и refresh-механизм",
                "description": [
                    "Потребность в безопасном и проверенном способе входа в аккаунт и хранения данных об авторизации.",
                    "`JWT` был выбран как наиболее подходящий и удобный вариант."
                ]
            },
            "encryption": {
                "featureName": "Шифрование и хэширование",
                "description": [
                    "Пароли хранятся с использованием `bcrypt` и подмешиванием соли и перца.",
                    "`AES` и `Fernet` используются для защиты чувствительных данных, включая email-подтверждения и информации, передаваемой через свой OAuth."
                ]
            },
            "token_auth": {
                "featureName": "Вход с помощью своего токена",
                "description": [
                    "При регистрации пользователю на почту высылается уникальный токен, который позволяет войти в аккаунт без логина и пароля.",
                    "В целях безопасности токен высылается единожды на почту и никак больше его не достать.",
                    "Возможность входа по токену можно отключить в настройках аккаунта, там же можно его пересоздать."
                ]
            },
            "email_system": {
                "featureName": "Система email-уведомлений",
                "description": [
                    "Отправка подтверждений, восстановление пароля, уведомления.",
                    "Работает через `Google Gmail API` и `SMTP`."
                ]
            },
            "custom_oauth": {
                "featureName": "Свой OAuth",
                "description": [
                    "Очень удобный способ входа в аккаунт без прямого вмешательства пользователя.",
                    "Создать универсальный для всех проектов способ входа с учётом безопасности, кроссбраузерности и конфиденциальности."
                ]
            },
            "backup_system": {
                "featureName": "Механизм бэкапов",
                "description": [
                    "После неудачного опыта с потерей всех данных из-за плохого хостинга было принято решение разработать бэкап-механизм.",
                    "Автоматическое резервное копирование базы данных и файлов, их архивирование и отправка их в телеграмм."
                ]
            },
            "backend_base": {
                "featureName": "Общая база бэкенда",
                "description": [
                    "Ввиду финансовой ограниченности, пришлось придумать систему для работы //(изолированно)// API разных проектов на одном хосте.",
                    "Разделить логику на несколько проектов, сделать её изолированной друг от друга, но при этом эффективной, наследуемой и легко масштабируемой."
                ]
            },
            "password_logic": {
                "featureName": "Хранение и обработка паролей",
                "description": [
                    "Необходимость соблюсти баланс между скоростью, безопасностью и удобством.",
                    "Выбор подходящей криптографии, правильное применение соли и тайм-аутов, защита от `brute-force` и тайминговых атак."
                ]
            },
            "conservative_design": {
                "featureName": "Первый сдержанный дизайн",
                "description": [
                    "Надо было задать атмосферу безопасной и сокрытой от чужих глаз системы аккаунтов.",
                    "Сложным для меня было сгармонировать элементы: тёмная основа со вкраплениями приятного градиента и лёгкого неона."
                ]
            },
            "first_fetches": {
                "featureName": "Первый опыт с запросами",
                "description": [
                    "Конечно же, чтобы всё работало нужно было делать немало запросов на Backend.",
                    "В первой версии проекта //(2022-й год)// я впервые знакомился с fetch'ами, типами запросов, хедерами, `CORS`, `CSRF` и куки."
                ]
            }
        },
        "roadmap": {
            "2021 Q4": [
                ["Появление идеи, планирование", true],
                ["Первые пробы пера (`React (JS)` + `Django` + `Sqlite`)", true],
                ["Реализация хранения паролей в базе данных (без хэширования, в открытом виде)", true]
            ],
            "2022": [
                ["Создание личного кабинета", true],
                ["MVP-версия", true],
                ["Разработка системы токенов", true],
                ["Костыльная система автоматического входа на другие проекты (требовался для BestMemories)", true],
                ["Возможность менять информацию в личном кабинете", true],
                ["Релиз", true]
            ],
            "2023": [
                ["Создание системы уведомлений", true]
            ],
            "2024": [
                ["Создание всего с нуля (`Svelte (TS)` + `FastAPI` + `MySQL`)", true],
                ["Написание своей служебной библиотеки //(+модели)//", true],
                ["Новая система регистрации и авторизации //(хранение паролей в хэшированном виде)//", true],
                ["Добавление JWT-токенов", true],
                ["Добавление расширенного API для проектов", true],
                ["Новый дизайн + новые уведомления", true],
                ["Добавление возможности сбросить пароль", true],
                ["Релиз", true]
            ],
            "2025": [
                ["Распределение бэкенда на несколько модулей //(других проектов)//", true],
                ["Разработан свой отлаженный OAUTH (требовался для BestStorage)", true],
                ["Новый релиз", true],
                ["Полный рефакторинг", false],
                ["Добавить систему входа по токену", false]
            ],
            "Будущее": [
                ["Добавить автопоздравление пользователей с днём рождения", false],
                ["Добавить раздел с информацией из других проектов", false],
                ["Убрать обязательность ввода имени //(только псевдоним и логин)// и даты рождения", false],
                ["Интернационализация //(английский и итальянский)//", false],
                ["Добавить автопоздравление пользователей с днём рождения", false]
            ]
        },
        "monetized": "No",
        "media": {
            "logo": "logo512.png",
        },
        "gradient": [[225, 30, 30], [215, 150, 20]],
        "description_short": "Моя надёжная система учётных записей с солёным и перчёным хэшированием, шифрованием и JWT. Один аккаунт используется в качестве для автоматического входа на любой другой мой проект.",
        "description": {
            "Основное": [
                "В основе проекта лежат `Svelte`, `FastAPI` и `MySQL`. Пользователь может зарегистрировать аккаунт и затем использовать его на всех моих других сервисах."
            ],
            "Регистрация": [
                "Чтобы пройти процедуру регистрации нужно ввести имя, логин, почту, дату рождения, придумать никнейм //(псевдоним)// и пароль.",
                "Затем на указанную почту приходит письмо с ссылкой для подтверждения регистрации и вуаля: теперь человек часть моих проектов."
            ],
            "Вход по паролю": [
                "Абсолютно стандартная схема: логин, пароль, вход, передача JWT-токена клиенту.",
                "Если пользователь забыл логин или пароль он может их восстановить, если помнит логин или почту."
            ],
            "Вход по токену": [
                "Каждый пользователь будет иметь свой случайно сгенерированный токен, высылаемый единожды на почту при регистрации //(или при пересоздании токена)//. Возможность входа в аккаунт по нему можно отключить.",
                "Вообще, экспериментальная функция и может использоваться скорее как способ быстро войти в аккаунт, если человек забыл логин и пароль //(а восстанавливать доступ времени нет)//. Но в таком случае ему придётся найти письмо с токеном",
                "//Ещё не реализовано, но опыт со старой версии есть.//"
            ],
            "Старая версия": [
                "Изначально этот проект представлял собой примитивную систему учётных записей, где пароли хранились в незашифрованном виде в текстовом файле //(вот времечко было)//.",
                "Это сейчас у меня есть понимание, что и как должно работать – тогда я страшился даже `sqlite3`, но всё равно было безумно интересно узнать что это, и я лез.",
                "В этой же версии я впервые узнал, что такое, с чем едят и зачем нужны сетевые запросы и великая функция `fetch`. Первое время моим другом была настройка `upgrade-insecure-requests`.",
                "Когда пользователь авторизовывался, бэкенд записывал информацию о устройстве пользователя и генерировал своего рода `sessionID`, который затем отсылался клиенту и тот хранил его у себя в куки, затем используя для идентификации при каждом запросе."
            ],
            "Планы на будущее": [
                "Снова реализовать вход по токену, добавить блок в личном кабинете с информацией о других проектах, которыми пользователь пользовался.",
                "Ещё несколько улучшений и, конечно же, полный рефакторинг кода, потому что пора его обновить и задрать качество до уровня текущих проектов."
            ]
        },
        "prehistory": [
            "Когда я создавал BestMemories //(в 2021-м году)//, появилась потребность в идентификации пользователей, чтобы выдавать им их фотографии, а не чужие.",
            "Изначально я подумал так: //\"Ну, просто возьму и позволю им ввести в специальное поле просто секретный код, который сам им выдам\"//, – простое, но рабочее решение, человек-то всего около 30.",
            "Но потом я подумал, что если буду делать ещё проекты (тогда это казалось невообразимым), то потребуется автоматическая система хранения информации пользователей — так и родилась идея собственного централизированного сервиса с аккаунтами",
            "Мне всегда нравилось, как всё работает у Google: единый аккаунт для работы со всеми их сервисами, да ещё и с автоматической авторизацией."
        ]
    },
    "beststorage": {
        "name": "beststorage",
        "display_name": "BestStorage",
        "stack": [
            "Python",
            "FastAPI",
            "Svelte",
            "TypeScript",
            "MySQL"
        ],
        "technologies": {
            "backend": [
                "SlowAPI",
                "Cryptography (Fernet, base64)",
                "Apscheduler",
                "Pydantic",
                "telebot"
            ],
            "frontend": [
                "i18n",
                "FuzzySearch",
                "Svelte-Routing",
                "Vite",
                "p-limit",
                "SafeFetchLib"
            ],
            "design": [
                "SCSS"
            ],
            "infrastructure": [
                "HTTPS",
                "JWT",
                "CORS",
                "REST API",
                "Свой OAUTH"
            ]
        },
        "website_link": "https://beststorage-frontend.vercel.app",
        "github_link": false,
        "release_year": 2025,
        "solo_project": true,
        "other_creators": [],
        "tags": [
            "Production",
            "WIP"
        ],
        "tags_development": [],
        "features": {},
        "license": "",
        "size": "Main",
        "using": "",
        "roadmap": {},
        "monetized": "No",
        "media": {
            "logo": "Logo_512x.png"
        },
        "gradient": [[200, 35, 35], [195, 50, 30]],
        "description_short": "Локальное визуальное хранилище файлов с интерфейсом в стиле проводника.\nПоддерживает WebSocket-передачу, Telegram-интеграцию и синхронизацию с аккаунтами.",
        "description": {},
        "prehistory": [
            "..."
        ]
    },
    "bestsupport": {
        "name": "bestsupport",
        "display_name": "BestSupport",
        "stack": [
            "Python",
            "FastAPI",
            "MySQL"
        ],
        "technologies": {
            "backend": [
                "cachetools",
                "hashlib",
                "Pydantic",
                "MySQL",
                "Sqlite3"
            ],
            "frontend": [
                "PWA",
                "rollup",
                "Vite",
                "Svelte-Routing",
                "dexie",
                "object-sizeof",
                "FuzzySearch"
            ],
            "design": [
                "SCSS",
                "Sveltestrap",
                "MathML (LaTex)"
            ],
            "infrastructure": [
                "HTTPS",
                "CORS",
                "REST API"
            ]
        },
        "website_link": "https://bestsupport-frontend-2.vercel.app/",
        "github_link": false,
        "release_year": false,
        "solo_project": true,
        "other_creators": [],
        "tags": [
            "Beta",
            "WIP"
        ],
        "tags_development": [],
        "features": {},
        "license": "",
        "size": "Main",
        "using": "",
        "roadmap": {
            "2025.09": []
        },
        "monetized": "Planned",
        "media": {
            "logo": "favicon_512.png"
        },
        "gradient": [[10, 170, 190], [15, 170, 140]],
        "description_short": "Алгебраический движок и система решения задач по школьной физике.\nРаботает офлайн, поддерживает формулы, переменные, поиск зависимостей и пошаговое решение.",
        "description": {},
        "prehistory": [
            "..."
        ]
    },
    "bestrp": {
        "name": "bestrp",
        "display_name": "BestRP",
        "stack": [
            "Garry's mod",
            "Lua",
            "DarkRP",
            "Sqlite3"
        ],
        "technologies": {
            "backend": [],
            "frontend": [],
            "design": [],
            "infrastructure": []
        },
        "website_link": false,
        "github_link": false,
        "release_year": 2021,
        "close_year": 2022,
        "solo_project": true,
        "other_creators": [],
        "tags": [
            "WIP",
            "Old"
        ],
        "tags_development": [],
        "license": "",
        "size": "Big",
        "using": "",
        "roadmap": {
            "2025.09": []
        },
        "features": {},
        "monetized": "Planned",
        "media": {
            "logo": "[] MAIN LOGO NEW.png"
        },
        "gradient": [[28, 29, 30], [38, 39, 40]],
        "description_short": "",
        "description": {},
        "prehistory": [
            "..."
        ]
    },
    "bestmemories": {
        "name": "bestmemories",
        "display_name": "BestMemories",
        "stack": [],
        "technologies": {
            "backend": [],
            "frontend": [],
            "design": [],
            "infrastructure": []
        },
        "website_link": false,
        "github_link": false,
        "release_year": 2021,
        "close_year": 2022,
        "solo_project": true,
        "other_creators": [],
        "tags": [
            "WIP",
            "Old"
        ],
        "tags_development": [],
        "license": "",
        "size": "Medium",
        "using": "",
        "roadmap": {
            "2025.09": []
        },
        "features": {},
        "monetized": "Planned",
        "media": {
            "logo": "[] MAIN LOGO NEW.png"
        },
        "gradient": [[28, 29, 30], [38, 39, 40]],
        "description_short": "",
        "description": {},
        "prehistory": [
            "..."
        ]
    },
    "safefetchlib": {
        "name": "safefetchlib",
        "display_name": "SafeFetchLib",
        "stack": [],
        "technologies": {
            "backend": [],
            "frontend": [],
            "design": [],
            "infrastructure": []
        },
        "website_link": false,
        "github_link": false,
        "release_year": 2024,
        "close_year": false,
        "solo_project": true,
        "other_creators": [],
        "tags": [
            "WIP"
        ],
        "tags_development": [],
        "license": "",
        "size": "Small",
        "using": "",
        "roadmap": {
            "2025.09": []
        },
        "features": {},
        "monetized": "No",
        "media": {
            "logo": "[] MAIN LOGO NEW.png"
        },
        "gradient": [[28, 29, 30], [38, 39, 40]],
        "description_short": "",
        "description": {},
        "prehistory": [
            "..."
        ]
    }
}
